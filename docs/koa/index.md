# 一、项目的初始化

## 1、npm初始化

```bash
npm init -y
```

生成package.json文件

*   记录项目的依赖

## 2、git初始化

```bash
git init
```

生成`.git`隐藏文件夹，git的本地仓库

## 3、场景ReadMe文件

# 二、搭建项目

## 1、安装Koa框架

```bash
npm i koa
```

## 2、编写最基本的app

创建src/main/js

```javascript
const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  ctx.body = "hello api";
});
app.listen(3000, () => {
  console.log("server is running on http://127.0.0.1:3000");
});

```

## 3、测试

在终端，使用 `node src/main.js`

# 三、项目的基本优化

## 1、自动重启服务

安装nodemon工具

```bash
npm i nodemon -D
```

编写`package.json`脚本

```json
"scripts": {
    "dev": "nodemon main.js"
},
```

执行`npm run dev`启动服务

![run.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22f027c5bc0d4c6ba233e36fe0d01c0f~tplv-k3u1fbpfcp-watermark.image?)
## 2、读取配置文件

安装`dotenv`,读取根目录中的.env文件，将配置`proess.env`中

```bash
npm install dotenv --save
```

创建.env文件

```asciiarmor
APP_PORT = 8000
```

创建`src/config/config.default.js`

```javascript
const dotenv = require("dotenv");
dotenv.config();
module.exports = process.env;
```

改写`main.js`

```javascript
const Koa = require("koa");
const { APP_PORT } = require("./config/config.default");
const app = new Koa();
app.use((ctx, next) => {
  ctx.body = "hello api";
});
app.listen(3000, () => {
  console.log(`server is running on http://127.0.0.1:${APP_PORT }`);
});
```

# 四、添加路由

路由：根据不同的URL，调用对应的处理函数

## 1、安装koa-router

```bash
npm install koa-router
```

步骤：

1.  导入包
2.  实例化对象
3.  编写路由
4.  注册中间件

## 2、编写路由

创建`src/router`目录，编写user.route.js

```javascript
const Router = require("koa-router");
const router = new Router({ prefix: "/users" });

router.get("/", (ctx, next) => {
    console.log('sss3');
  ctx.body = "hello users";
});
module.exports = router;

```

## 3、改写main.js

```javascript
const Koa = require("koa");
const { APP_PORT } = require("./config/config.default");
const app = new Koa();
const userRouter = require("./router/user.route");
app.use(userRouter.routes());
app.listen(APP_PORT, () => {
  console.log(`server is running on http://127.0.0.1:${APP_PORT}`);
});
```

# 五、目录结构优化

## 1、将http服务和app业务拆分

创建`src/app/index.js`

```javascript
const Koa = require("koa");
const app = new Koa();
const userRouter = require("../router/user.route");
app.use(userRouter.routes());
module.exports = app;
```

改写main.js

```javascript
const { APP_PORT } = require("./config/config.default");
const app = require("./app");
app.listen(APP_PORT, () => {
  console.log(`server is running on http://127.0.0.1:${APP_PORT}`);
});
```

## 2、将路由和控制器拆分

路由：解析URL，分布给控制器对应的方法

控制器：处理不同的业务

改写`user.route.js`

```javascript
onst Router = require("koa-router");
const router = new Router({ prefix: "/users" });
const { register, login } = require("../controller/user.controller");
// 注册接口
router.post("/register", register);
// 登录接口
router.post("/login", login);
module.exports = router;
```

创建`controller/users.controller.js`

```javascript
class UserController {
  async register(ctx, next) {
    ctx.body = "用户注册成功！";
  }
  async login(ctx, next) {
    ctx.body = "登录成功";
  }
}
module.exports = new UserController();
```

# 六、解析body

## 1、安装koa-body

```bash
npm i koa-body
```

## 2、注册中间件

改写 `app/index.js`
![koa-body.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d9e20d1add5431d9cba33c97729cdd7~tplv-k3u1fbpfcp-watermark.image?)

## 3、解析请求数据

改写`user.controller.js`文件

```javascript
const { createUser } = require("../service/user.service");
class UserController {
  async register(ctx, next) {
    // 1、获取数据
    const { user_name, password } = ctx.request.body;
    // 2、操作数据库
    const res = await createUser(user_name, password);
    // 3、返回结果
    console.log(res);
    ctx.body = ctx.request.body;
  }
  async login(ctx, next) {
    ctx.body = "登录成功";
  }
}
module.exports = new UserController();
```

## 4、拆分service层

service主要是做数据库处理

创建`src/service/user.service.js`

```javascript
class UserService {
  async createUser(user_name, password) {
    // todo:写入数据库
    return "写入数据库成功！";
  }
}
module.exports = new UserService();
```

# 七、继承sequlize

[sequelize](https://www.sequelize.cn/core-concepts/getting-started) ORM数据库工具

ORM：对象关系映射

*   数据库表映射（对应）一个类
*   数据表中的数据行（记录）对应一个对象
*   数据表的字段对应对象的属性
*   数据表的操作对应对象的方法

## 1、安装sequelize

    npm i sequelize mysql2

## 2、连接数据库

`scr/db/seq.js`

```javascript
const { Sequelize } = require("sequelize");
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config.default");
// 方法 3: 分别传递参数 (其它数据库)
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
});
seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((error) => {
    console.log("数据库连接失败，", error);
  });
```

## 3、编写配置文件

配置`.env`文件

    APP_PORT = 8000

    MYSQL_HOST = localhost
    MYSQL_PORT = 3306
    MYSQL_USER = root
    MYSQL_PWD = 1111aaaa
    MYSQL_DB = zdsc

# 八、创建User模型

## 1、拆分Model层

创建model/use.model.js

```javascript
const { DataTypes, Model } = require("sequelize");
const seq = require("../db/seq");
//创建模型（Model zd_user  -> zd_users）
const User = seq.define(
  "zd_user",
  {
    // id 会被sequelize自动创建，管理
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "用户名，唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "是否为管理员：0否 1是",
    },
  }
  //   {
  //     timestamps: false,
  //   }
);
// 强制同步数据库(创建数据表)
// User.sync({ force: true }); //你可以使用 sequelize.sync() 自动同步所有模型.
module.exports = User;

```

# 九、添加用户入库

## 1、改写`/src/service/user.service.js`

```javascript
/*
 * @Description: 操作数据库
 */
const User = require("../model/use.model");
class UserService {
  async createUser(user_name, password) {
    console.log(user_name, password, " user_name, password");
    // todo:写入数据库
    const res = await User.create({ user_name, password });
    return res.dataValues;
  }
}
module.exports = new UserService();
```

## 2、改写`src/controller/user.controller.js`

    /*
     * @Description: 控制层
     */
    const { createUser } = require("../service/user.service");
    class UserController {
      async register(ctx, next) {
        // 1、获取数据
        const { user_name, password } = ctx.request.body;
        // 2、操作数据库
        const res = await createUser(user_name, password);
        // 3、返回结果
        ctx.body = {
          code: 0,
          message: "用户注册成功",
          result: {
            id: res.id,
            user_name: res.user_name,
          },
        };
      }
      async login(ctx, next) {
        ctx.body = "登录成功";
      }
    }
    module.exports = new UserController();

## 3、postman调取
![insert.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/893a603a38814579b65836285b8d40b1~tplv-k3u1fbpfcp-watermark.image?)

## 4、数据库数据查看
![usermode.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/658c0e5f71dd464ebeee4e37f535d8ad~tplv-k3u1fbpfcp-watermark.image?)

# 十、错误处理

改写`src/controller/user.controller.js`

在控制器中, 对不同的错误进行处理, 返回不同的提示错误提示, 提高代码质量

    /*
     * @Description: 控制层
     */
    const { createUser, getUerInfo } = require("../service/user.service");
    class UserController {
      async register(ctx, next) {
        // 1、获取数据
        const { user_name, password } = ctx.request.body;
        //   合法性
        if (!user_name || !password) {
          console.error("用户名或者密码为空", ctx.request.body);
          ctx.status = 400;
          ctx.body = {
            code: "10001",
            message: "用户名或者密码为空",
            result: "",
          };
          return;
        }
        //   合理性(先查询一次；然后在决定是否进行下一步创建)
        if (getUerInfo({ user_name })) {
          ctx.status = 409;
          ctx.body = {
            code: "10002",
            message: "用户已经存在",
            result: "",
          };
          return;
        }
        // 2、操作数据库
        const res = await createUser(user_name, password);
        // 3、返回结果
        ctx.body = {
          code: 0,
          message: "用户注册成功",
          result: {
            id: res.id,
            user_name: res.user_name,
          },
        };
      }
      async login(ctx, next) {
        ctx.body = "登录成功";
      }
    }
    module.exports = new UserController();

在 service 中封装函数

```javascript
const User = require('../model/use.model')

class UserService {
  async createUser(user_name, password) {
    // 插入数据
    // await表达式: promise对象的值
    const res = await User.create({ user_name, password })
    // console.log(res)

    return res.dataValues
  }

  async getUerInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })

    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt,
    })

    return res ? res.dataValues : null
  }
}

module.exports = new UserService()
```

# 十一. 拆分中间件

为了使代码的逻辑更加清晰, 我们可以拆分一个中间件层, 封装多个中间件函数

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32cbb05565a84d4494ab85bf203003c2~tplv-k3u1fbpfcp-zoom-1.image)

## 1 拆分中间件

添加`src/middleware/user.middleware.js`

```javascript
const { getUerInfo } = require('../service/user.service')
const { userFormateError, userAlreadyExited } = require('../constant/err.type')

const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 合法性
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    return
  }

  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body

  if (getUerInfo({ user_name })) {
    ctx.app.emit('error', userAlreadyExited, ctx)
    return
  }

  await next()
}

module.exports = {
  userValidator,
  verifyUser,
}
```

## 2 统一错误处理

*   在出错的地方使用`ctx.app.emit`提交错误
*   在 app 中通过`app.on`监听

```javascript
module.exports = {
  userFormateError: {
    code: '10001',
    message: '用户名或密码为空',
    result: '',
  },
  userAlreadyExited: {
    code: '10002',
    message: '用户已经存在',
    result: '',
  },
}
```

## 3 错误处理函数

```javascript
module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {
    case '10001':
      status = 400
      break
    case '10002':
      status = 409
      break
    default:
      status = 500
  }
  ctx.status = status
  ctx.body = err
}
```

改写`app/index.js`

```javascript
const errHandler = require('./errHandler')
// 统一的错误处理
app.on('error', errHandler)
```

# 十二、加密

在将密码保存到数据库之前, 要对密码进行加密处理

123123abc (加盐) 加盐加密

## 1 安装 bcryptjs

```bash
npm i bcryptjs
```

## 2 编写加密中间件

```javascript
const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body

  const salt = bcrypt.genSaltSync(10)
  // hash保存的是 密文
  const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = hash

  await next()
}
```

## 3 在 router 中使用

改写`user.router.js`

```javascript
const Router = require('koa-router')

const {
  userValidator,
  verifyUser,
  crpytPassword,
} = require('../middleware/user.middleware')
const { register, login } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, crpytPassword, register)

// 登录接口
router.post('/login', login)

module.exports = router
```

# 十三. 登录验证

流程:

*   验证格式
*   验证用户是否存在
*   验证密码是否匹配

改写`src/middleware/user.middleware.js`

```javascript
const bcrypt = require('bcryptjs')

const { getUerInfo } = require('../service/user.service')
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword,
} = require('../constant/err.type')

const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 合法性
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    return
  }

  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body

  // if (await getUerInfo({ user_name })) {
  //   ctx.app.emit('error', userAlreadyExited, ctx)
  //   return
  // }
  try {
    const res = await getUerInfo({ user_name })

    if (res) {
      console.error('用户名已经存在', { user_name })
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }

  await next()
}

const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body

  const salt = bcrypt.genSaltSync(10)
  // hash保存的是 密文
  const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = hash

  await next()
}

const verifyLogin = async (ctx, next) => {
  // 1. 判断用户是否存在(不存在:报错)
  const { user_name, password } = ctx.request.body

  try {
    const res = await getUerInfo({ user_name })

    if (!res) {
      console.error('用户名不存在', { user_name })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 2. 密码是否匹配(不匹配: 报错)
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }

  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
}
```

定义错误类型

```javascript
module.exports = {
  userFormateError: {
    code: '10001',
    message: '用户名或密码为空',
    result: '',
  },
  userAlreadyExited: {
    code: '10002',
    message: '用户已经存在',
    result: '',
  },
  userRegisterError: {
    code: '10003',
    message: '用户注册错误',
    result: '',
  },
  userDoesNotExist: {
    code: '10004',
    message: '用户不存在',
    result: '',
  },
  userLoginError: {
    code: '10005',
    message: '用户登录失败',
    result: '',
  },
  invalidPassword: {
    code: '10006',
    message: '密码不匹配',
    result: '',
  },
}
```

改写路由

```javascript
// 登录接口
router.post('/login', userValidator, verifyLogin, login)
```

# 十四、用户的认证

登陆成功后，给用户颁发一个令牌token，用户在以后的每一次请求中鞋带这个令牌

`jwt：jsonwebtoken`

*   hader:头部
*   payload：载荷
*   signature：签名

## 1、安装jsonwebtoken

```bash
npm install jsonwebtoken
```

### 2) 在控制器中改写 login 方法

    async login(ctx, next) {
      const { user_name } = ctx.request.body

      // 1. 获取用户信息(在token的payload中, 记录id, user_name, is_admin)
      try {
        // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
        const { password, ...res } = await getUerInfo({ user_name })

        ctx.body = {
          code: 0,
          message: '用户登录成功',
          result: {
            token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
          },
        }
      } catch (err) {
        console.error('用户登录失败', err)
      }
    }

### 3) 定义私钥

在`.env`定义

    JWT_SECRET = xzd

## 2 用户认证

### 1) 创建 auth 中间件

    const jwt = require('jsonwebtoken')

    const { JWT_SECRET } = require('../config/config.default')

    const { tokenExpiredError, invalidToken } = require('../constant/err.type')

    const auth = async (ctx, next) => {
      const { authorization } = ctx.request.header
      const token = authorization.replace('Bearer ', '')
      console.log(token)

      try {
        // user中包含了payload的信息(id, user_name, is_admin)
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
      } catch (err) {
        switch (err.name) {
          case 'TokenExpiredError':
            console.error('token已过期', err)
            return ctx.app.emit('error', tokenExpiredError, ctx)
          case 'JsonWebTokenError':
            console.error('无效的token', err)
            return ctx.app.emit('error', invalidToken, ctx)
        }
      }

      await next()
    }

    module.exports = {
      auth,
    }

### 2) 改写 router

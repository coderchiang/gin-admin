
<div align=center>
<img src="https://img.shields.io/badge/golang-1.16-blue"/>
<a href="https://github.com/coderchiang/gin-admin">
<img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
</a>
<img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
</div>
  


简体中文|[English](./README.md) |

[gitee地址:https://gitee.com/Chris_Chiang/gin-admin](https://gitee.com/Chris_Chiang/gin-admin)

[github地址:https://github.com/coderchiang/gin-admin](https://github.com/coderchiang/gin-admin)


# 项目文档
- 前端UI框架：[Vben](https://github.com/anncwb/vue-vben-admin) 
- 后台框架：[Gin](https://github.com/gin-gonic/gin) 

## 1. 基本介绍

### 1.1 项目介绍

[在线预览 http://2wm.top/](http://2wm.top/)

测试用户名：guest

测试密码：123456

>Hi! 首先感谢你使用 gin-admin，gin-admin是一个基于vue和gin开发的全栈前后端分离的后台管理系统，旨在快速搭建后台管理系统；集成jwt鉴权，动态路由，动态菜单，casbin鉴权，用户管理，部门管理等功能，提供多种示例文件，让您把更多时间专注在业务开发上。




## 2. 使用说明

```
- node版本 > v14.10
- golang版本 >= v1.14
- IDE推荐：Goland
```

- 使用git克隆本项目
```git
git clone https://github.com/coderchiang/gin-admin
```

- 进入项目目录
```bash
cd gin-admin
```
- 给一键启动脚本添加权限，并运行一键启动脚本。

```bash
# 添加权限
sudo chmod a+x up.sh
# 执行启动脚本
./up.sh
```
## up.sh 包含了项目启动过程所有配置的运行脚本，具体逻辑根据需求可以自行注释；您还可以分开进入web端和server分别构建并配置启动项目，具体操作如下。



### 2.1 web端

```bash


# 进入项目web端
cd web

# 安装依赖
yarn install

# 启动本地测试服务器
yarn run serve

# 打包构建项目
yarn run build
```

### 2.2 server端

使用 goland等编辑工具，打开server目录，不可以打开 gin-admin 根目录

```bash

# 进入项目目录
cd server

# 启动 Go Modules function
go env -w GO111MODULE=on 
# 如果您在中国大陆，请配置 GOPROXY environment variables
go env -w GOPROXY=https://goproxy.io,direct
# 使用 go.mod，安装go依赖包
go mod tidy

# 编译
go build
```

### 2.3 初始配置使用指南&&配置指南

配置选择在[config.yaml](./server/conf/config.yaml)



### 2.4 swagger自动化API文档

#### 2.4.1 安装 swagger

````
go get -u github.com/swaggo/swag/cmd/swag
````


#### 2.4.2 生成API文档

````
cd server
swag init
````
执行上面的命令后，server目录下会出现docs文件夹，登录 http://localhost:80/swagger/index.html ，即可查看swagger文档


## 3. 技术选型

- 前端：用基于`vue`的`vben`构建基础页面。
- 后端：用`Gin`快速搭建基础restful风格API，`Gin`是一个go语言编写的Web框架。
- 数据库：采用`MySql`(5.7)版本，使用`gorm`实现对数据库的基本操作
- 缓存：使用`Redis`实现记录当前活跃用户的
- 权限控制：使用`jwt`令牌并实现多点登录限制。
- API文档：使用`Swagger`构建自动化文档。
- 配置文件：使用`viper`实现解析`yaml`格式的配置文件。
- 日志：使用`zap`实现日志记录。


## 4. 项目架构
### 4.1 系统架构图

![系统架构图]
<p align="center">
  <img  src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/gin-admin.png" width="936px" height="491px">
</p>

### 4.2 目录结构

```
├── server           (服务端目录)
│   ├── app          (应用目录，后台api)
│   ├── common       (公共常量，变量，util方法目录)
│   ├── conf         (配置目录)
│   ├── dao          (Data Access Object  数据访问对象)
│   ├── data         (全局数据目录)
│   ├── docs         (swagger生成目录)
│   ├── dto          (Data Transfer Object 数据传输对象 )
│   ├── initialize   (初始化各个组件目录)
│   ├── log          (日志生成目录)
│   ├── middleware   (中间件目录)
│   ├── resource     (casbin资源目录)
│   ├── routers      (路由配置目录)
│   └── service      (服务层目录)
└── web              (前端目录，采用vue-vben-admin搭建)
    ├── build        (vite目录)
    ├── dist         (构建完成目录)
    ├── mock         (模拟数据目录)
    ├── public       (公共资源目录)
    ├── src          (项目源码目录)
    ├── test
    └── types


```

## 5. 主要功能

- 权限管理：基于`jwt`和`casbin`实现的权限管理 
- 部门管理：配置系统用户所属担任职务。
- 用户管理：系统管理员分配用户角色和角色权限。
- 角色管理：创建权限控制的主要对象，可以给角色分配不同api权限和菜单权限。
- 菜单管理：实现用户动态菜单配置，实现不同角色不同菜单，同时融合api管理，
不同用户可调用的api接口的权限不同。 
- 日志管理：正常操作日志记录和查询；系统异常信息日志记录和查询，登录日志等。

## 6. 计划任务

- [ ] 导入，导出Excel
- [ ] 文件上传
## 7. 联系方式

### QQ交流群：1055067008
| QQ 群 |
|  :---:  |
| <img src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/qq.png" width="180"/> |
进入QQ 群，请勿广告

### 微信交流群
| 微信 |
|  :---:  |
| <img  src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/wechat.png" width="180"/> |
添加微信，备注"加入gin-admin交流群"

### [关于我们](http://2wm.top/about/)


## 8. 商用注意事项

本项目使用MIT协议，前端框架Vben也是基于MIT协议，是完全开源免费的项目，可以无限制商用
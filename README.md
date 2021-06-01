
<div align=center>
<img src="https://img.shields.io/badge/golang-1.16-blue"/>
<a href="https://github.com/coderchiang/gin-admin">
<img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
</a>
<img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
</div>

English | [简体中文](./README.zh-CN.md)
- Web UI Framework:[Vben](https://github.com/anncwb/vue-vben-admin) 
- Server Framework:[Gin](https://github.com/gin-gonic/gin) 

## 1. Basic Introduction

### 1.1 Project Introduction

[Online Demo](http://2wm.top/)

username：guest

password：123456

> Hi! Thank you for choosing gin-admin.gin-admin is a full-stack (frontend and backend separation) framework designed for management system. 
> It integrates multiple functions, such as JWT authentication, dynamic routing, dynamic menu, casbin authentication, etc. So that you can focus more time on your business Requirements.


## 2. Getting started

```
- node version > v8.6.0
- golang version >= v1.14
- IDE recommendation: Goland
```

- clone the project
```git
git clone https://github.com/coderchiang/gin-admin
```

- enter the project directory
```bash
cd gin-admin
```
- add permission and exec 

```bash
# 添加权限
sudo chmod a+x up.sh
# 执行启动脚本
./up.sh
```
## `up.sh` Contains running scripts for all configurations of the project startup process ,the specific logic can be annotated according to your needs; you can also enter the web and server separately to build and configure the startup project. The specific operations are as follows:
### 2.1 Web

```bash

# enter the project directory
cd web

# install dependency
yarn install

# develop
yarn run serve

# build
yarn run build

```

### 2.2 Server

```bash
# enter the project directory
cd server
# using go.mod
go env -w GO111MODULE=on 
#In mainland China, access to go.org/x is prohibited，we recommend [goproxy.io](https://goproxy.io/zh/)
go env -w GOPROXY=https://goproxy.io,direct
# install go modules
go mod tidy

# build the server
go build
```


### 2.3 API docs generation

````
cd server
swag init
````
After executing the above command，`docs` will show in `server/`，then open your browser, jump into `http://localhost/swagger/index.html` to see the swagger APIs.


## 3. Technical selection

- Frontend: using `Vben` based on vue，to code the page.
- Backend: using `Gin` to quickly build basic RESTful API. `Gin` is a web framework written in Go (Golang).
- DB: `MySql`(5.7)，using `gorm` to implement data manipulation, added support for SQLite databases.
- Cache: using `Redis` to implement the recording of the JWT token of the currently active user and implement the multi-login restriction.
- API: using Swagger to auto generate APIs docs。
- Config: using `fsnotify` and `viper` to implement `yaml` config file。
- Log: using `zap` record logs。

## 4. Project Architecture

### 4.1 Architecture Diagram

![Architecture diagram]
<p align="center">
  <img  src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/gin-admin.png" width="936px" height="491px">
</p>


### 4.2 Project Layout

```
├── server           (server ,gin)
│   ├── app          (appliacation，backend api)
│   ├── common       (Public const，var，util function)
│   ├── conf         (configuration)
│   ├── dao          (Data Access Object )
│   ├── data         (global data )
│   ├── docs         (swagger generate document)
│   ├── dto          (Data Transfer Object  )
│   ├── initialize   (initialize system)
│   ├── log          (log file)
│   ├── middleware   (middleware directory)
│   ├── resource     (casbin resource)
│   ├── routers      (router conf directory)
│   └── service      (service directory)
└── web              (fontend,vue-vben-admin)
    ├── build        (vite)
    ├── dist         (dist)
    ├── mock         (mock data)
    ├── public       (public file)
    ├── src          
    ├── test
    └── types


```

## 5. Features

- Authority management: Authority management based on `jwt` and `casbin`. 
- Department Management: Configure the positions of system users.
- User management: The system administrator assigns user roles and role permissions.
- Role management: Create the main object of permission control, and then assign different API permissions and menu permissions to the role.
- Menu management: User dynamic menu configuration implementation, assigning different menus to different roles.
- API management: Different users can call different API permissions.
- Configuration management: The configuration file can be modified in the web page (the test environment does not provide this function).

## 6. To-do list

- [ ] upload & export Excel
- [ ] file upload

## 7. Contacts
### 7.1 Groups
#### QQ group: 622360840
| QQ Group |
|  :---:  |
| <img src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/qq.png" width="180"/> |
Enter the QQ group, please do not advertise



#### Wechat group: comment "加入gin-vue-admin交流群"

| Wechat |
|  :---:  |
| <img  src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/wechat.png" width="180"/> |
Add WeChat, note "join gin-admin exchange group"

#### [About Us](http://2wm.top/about/)

## 8. Donate

If you find this project useful, you can buy author a glass of juice :tropical_drink: [here](http://2wm.top/about/)

## 9. Commercial considerations

This project uses the MIT protocol, and the front-end Framework Vben is also based on the MIT protocol. It is a completely open source and free project and can be used without restrictions


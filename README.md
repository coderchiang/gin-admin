---
id: README
title: English Document
sidebar_label: English Document
---
<div align="center">
<p align="center">
  <a href="https://github.com/coderchiang/gin-admin">
    <img width="48%" alt="gin-admin" src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/logo.png" />
  </a>
</p>
<img src="https://img.shields.io/badge/golang-1.16-blue"/>
<a href="https://github.com/coderchiang/gin-admin">
<img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"/>
</a>
<img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate"/>
</div>

English | [简体中文](./README.zh-CN.md)
- Web UI Framework:[vue-vben-admin](https://github.com/anncwb/vue-vben-admin) 
- Server Framework:[Gin](https://github.com/gin-gonic/gin) 
#  Project Document
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
# add permission
sudo chmod a+x up.sh
# exec
./up.sh
```
> `up.sh` Contains running scripts for all configurations of the project startup process ,the specific logic can be annotated according to your needs; you can also enter the web and server separately to build and configure the startup project. The specific operations are as follows:
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
### 2.3 Initial Configuration Guide 

- Configuration file[config.yaml](./server/conf/config.yaml)

- Import sql initialization file (default mysql)[init.sql](./server/data/init.sql)

### 2.4 API docs generation

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

<p align="center">
  <img  src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/gin-admin-en.png" width="936px" height="491px" />
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
## 6. How to contribute

You are very welcome to join！[Raise an issue](https://github.com/coderchiang/gin-admin/issues/new/choose) Or submit a Pull Request。

**Pull Request:**

1. Fork code!
2. Create your own branch: `git checkout -b feat/xxxx`
3. Submit your changes: `git commit -am 'feat(function): add xxxxx'`
4. Push your branch: `git push origin feat/xxxx`
5. submit`pull request`

### Git Contribution submission specification
  - `feat` Add new features
  - `fix` Fix the problem/BUG
  - `style` The code style is related and does not affect the running result
  - `perf` Optimization/performance improvement
  - `refactor` Refactor
  - `revert` Undo edit
  - `test` Test related
  - `docs` Documentation/notes
  - `chore` Dependency update/scaffolding configuration modification etc.
  - `workflow` Workflow improvements
  - `ci` Continuous integration
  - `types` Type definition file changes
  - `wip` In development

## 7. To-do list

- [ ] upload & export Excel
- [ ] file upload

## 8. Contacts
### 8.1 Groups
#### QQ group: 1055067008
| QQ Group |
|  :---:  |
| <img src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/qq.png" width="180"/> |
Enter the QQ group, please do not advertise



#### Wechat group: comment "join gin-admin exchange group"

| Wechat |
|  :---:  |
| <img  src="https://gitee.com/Chris_Chiang/gin-admin/raw/main/server/data/wechat.png" width="180"/> |
Add WeChat, note "join gin-admin exchange group"

#### [About Us](http://2wm.top/about/)

## 9. Donate

If you find this project useful, you can buy author a glass of juice :tropical_drink: [here](http://2wm.top/about/)

## 10. Commercial considerations

This project uses the MIT protocol, and the front-end Framework Vben is also based on the MIT protocol. It is a completely open source and free project and can be used without restrictions


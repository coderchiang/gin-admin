# 项目文档
- 前端UI框架：[vue-vben-admin](https://github.com/anncwb/vue-vben-admin) 使用的版本：2.4.2
## 适配修改记录
- 删除package.json 中对husky的支持，方便git提交
- 新增src/views/admin 目录
- 新增src/api/admin 目录
- 修改src\settings\projectSetting.ts `permissionMode为BACK`
- 修改src\store\modules\permission.ts, `修改Menu加载链接`
- 修改src\store\modules\user.ts , `增加验证码`
- 修改src\enums\httpEnum.ts `ResultEnum新增状态码`
- 修改src\views\sys\login\LoginForm.vue 修改逻辑，增加验证码功能

## License

[MIT © Vben-2020](./LICENSE)

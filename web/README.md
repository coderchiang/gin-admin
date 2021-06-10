

**English** | [中文](./README.zh-CN.md)
# Project documents

- Front end UI framework: [Vue vben Admin]（ https://github.com/anncwb/vue-vben-admin ）Version used: 2.4.2

## Adaptation modification record

- Delete the support for husky in package.json to facilitate git submission

- Add src/views/admin directory

- Add src/api/admin directory

- Modify src/settings/projectsetting.ts ` permissionmode to back`

- Modify src/store/modules/permission.ts to modify the menu load link`

- Modify src/store/modules/user.ts to add captcha`

- Modify src/enums/httpenum.ts ` ResultEnum to add a new status code`

- Modify src/views/sys/login/loginform.vue, modify logic and add captcha function

## License

[MIT © Vben-2020](./LICENSE)
package admin

import (
	"gin-admin/common/utils"
	"gin-admin/dto"
	"gin-admin/middleware"
	"gin-admin/service"
	"github.com/gin-gonic/gin"
)
func GetUserMenuByClaims(c *gin.Context) {
	userInfo:=middleware.GetClaims(c)
	if  ""!=userInfo.UserID{
		menus, err := service.GetRoleMenuTree(utils.StrToInt(userInfo.RoleId))

		if err != nil {
			middleware.ResponseFail(c, 201, err.Error())
		} else {
			middleware.ResponseSucc(c, "获取菜单列表成功", menus)
		}

		return
	}


}


func ResetPwd(c *gin.Context)  {
	var pwdForm dto.PassWord
	if err := c.ShouldBindJSON(&pwdForm); err!= nil {
		middleware.ResponseFail(c, 202, err.Error())
		return
	}
	err1 := service.ResetPassword(pwdForm)
	if err1 != nil {
		middleware.ResponseFail(c, 202, err1.Error())
	}else {
		middleware.ResponseSucc(c, "重置密码成功", true)
	}
	return
}

func GetUserList(c *gin.Context)  {
	var q dto.QueryUser
	if err := c.ShouldBind(&q); err!=nil{
		middleware.ResponseFail(c, 201, err.Error())
		return
	}
	users, total, err := service.GetUserList(q)
	if err != nil {
		middleware.ResponseFail(c, 202, err.Error())
	}else {
		middleware.ResponseSucc(c, "获取用户列表成功", map[string]interface{}{
			"items":users,
			"total": total,
		})
	}
	return
}
func CreateUser(c *gin.Context)  {
	var user dto.UserInfoIn
	err := c.BindJSON(&user)
	if err != nil {
		middleware.ResponseFail(c,201,err.Error())
		return
	}
	err = service.SaveUser(user)
	if err != nil {
		middleware.ResponseFail(c,202,err.Error())
	}else {
		middleware.ResponseSucc(c, "添加用户成功",true)
	}
	return
}


func UpdateUser(c *gin.Context)  {
	var user dto.UserInfoIn
	err := c.BindJSON(&user)
	if err != nil {
		middleware.ResponseFail(c,201,err.Error())
		return
	}
	err = service.SaveUser(user)
	if err != nil {
		middleware.ResponseFail(c,202,err.Error())
	}else {
		middleware.ResponseSucc(c, "更新用户成功",true)
	}
	return
}


func DelUser(c *gin.Context) {
	var user dto.QueryUser
	err := c.ShouldBindJSON(&user)
	if err != nil {
		middleware.ResponseFail(c,201,err.Error())
		return
	}
	err = service.DeleteUser(utils.StrToInt(user.ID))
	if err != nil {
		middleware.ResponseFail(c,202,err.Error())
	} else {

		middleware.ResponseSucc(c, "删除用户成功",true)

	}
	return
}
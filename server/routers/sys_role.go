package routers

import (
	"github.com/gin-gonic/gin"
	v1 "gin-admin/app/admin"
	"gin-admin/middleware"
)

func InitRoleRouter(Router *gin.RouterGroup)  {
	RoleRouter := Router.Group("admin").Use(middleware.JWTAuth()).Use(middleware.CasbinHandler()).Use(middleware.Logger())
	{
		RoleRouter.GET("/role/list", v1.GetRoleList)
		RoleRouter.POST("/role/add", v1.CreateRole)
		RoleRouter.PUT("/role/edit", v1.UpdateRole)
		RoleRouter.DELETE("/role/del", v1.DelRole)
	}
}

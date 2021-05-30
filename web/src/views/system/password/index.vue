<template>
  <PageWrapper title="修改当前用户密码" content="修改成功后会自动退出当前登录！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';
  import router from '/@/router';
  import { userStore } from '/@/store/modules/user';
   import { resetPwd } from '/@/api/system/system';
  import { PageEnum } from '/@/enums/pageEnum';
  import { formSchema } from './pwd.data';
  export default defineComponent({
    name: 'ChangePassword',
    components: { BasicForm, PageWrapper },
    setup() {
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: formSchema,
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          const { username } = userStore.getUserInfoState || {};

          const { passwordOld, passwordNew } = values;
          const data={
            "username":username,
            "pwd":passwordOld,
            "new_pwd":passwordNew

          }
           const res = await resetPwd(data);
         if(res){
           router.push(PageEnum.BASE_LOGIN);
         }

          // TODO custom app
         //console.log(data);
          //const { router } = useRouter();

        } catch (error) {}
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>

<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增菜单 </a-button>
         <a-button type="success" @click="expandAll">展开全部</a-button>
         <a-button type="success" @click="collapseAll">折叠全部</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <MenuDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent,onMounted } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getMenuList,delMenu } from '/@/api/system/system';

  import { useDrawer } from '/@/components/Drawer';
  import MenuDrawer from './MenuDrawer.vue';

  import { columns, searchFormSchema } from './menu.data';

  export default defineComponent({
    name: 'MenuManagement',
    components: { BasicTable, MenuDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload,expandAll, collapseAll }] = useTable({
        title: '菜单列表',
        api: getMenuList,
        columns,
        isTreeTable: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        pagination: false,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        //defaultExpandAllRows:true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

    //    onMounted(() => {
    //       expandAll();

    //   // ...
    // })
     onMounted(() => {
         setTimeout(() =>{
            expandAll();
         },200);
      console.log('Component is mounted!')
    })


      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });

      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });


      }

     async function handleDelete(record: Recordable) {
        //console.log(record.id);

         const res = await delMenu({id:record.id});
         if(res){
          reload();
           setTimeout(() =>{
            expandAll();
         },500);
         }

      }

      function handleSuccess() {
        //自动刷新网页
          reload();
          //500毫秒后刷新网页
          setTimeout(() =>{
            expandAll();
         },500);


      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
         expandAll,
         collapseAll,
      };
    },
  });
</script>

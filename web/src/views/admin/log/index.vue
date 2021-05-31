<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="warning" @click="handleConfirm('warning')"> 批量删除 </a-button>
         <a-button type="success" @click="handleDelete"> 导出EXCEL </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[

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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getLogList,delLog,delBatchLog } from '/@/api/system/system';

  //import RoleDrawer from './RoleDrawer.vue';

  import { columns, searchFormSchema } from './log.data';

  export default defineComponent({
    name: 'LogManagement',
    components: { BasicTable, TableAction },
    setup() {

      const [registerTable, { reload,getSelectRowKeys } ] = useTable({
        title: '日志列表',
        api: getLogList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          fieldMapToTime: [
          // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间于结束时间
          // 'YYYY-MM-DD'为时间格式，参考moment
          ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD HH:mm:ss'],
          // 支持多个字段
      ],
        },
        useSearchForm: true,

        showTableSetting: true,
        bordered: true,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });
      const {
        createConfirm,

      } = useMessage();

      async function handleDelete(record: Recordable) {
        //console.log(record);
           const res = await delLog({"id":record.id});

          if(res){
           setTimeout(() =>{
           reload();
         },200);

          }
      }

 async function handleConfirm(type: 'warning' | 'error' | 'success' | 'info') {
        createConfirm({
          iconType: type,
          title: '注意',
          content: '您打算批量删除数据库日志吗？',
           onOk:()=>{
          const res=delBatchLog({ids:getSelectRowKeys()})
          if(res){
           setTimeout(() =>{
           reload();
         },200);
          }
          },

        });


      }



      return {
        registerTable,
        //handleCreate,
        //handleEdit,
        handleConfirm,
        handleDelete,

      };
    },
  });
</script>

import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [

  {
    title: '操作用户',
    dataIndex: 'operName',
    width: 100,
  },
  {
    title: '操作方法',
    dataIndex: 'method',
    width: 100,
  },
  {
    title: '访问Url',
    dataIndex: 'operUrl',
    width: 180,
  },
  {
    title: '客户端ip',
    dataIndex: 'operIp',
    width: 180,
  },
  {
    title: '访问位置',
    dataIndex: 'operLocation',
    width: 180,
  },

  {
    title: '系统',
    dataIndex: 'os',
    width: 100,
  },
  {
    title: '平台',
    dataIndex: 'platform',
    width: 100,
  },

  {
    title: '浏览器',
    dataIndex: 'browser',
    width: 100,
  },
  {
    title: '操作状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '成功' : '失败';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '操作时间',
    dataIndex: 'operTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'datetime',
    component: 'RangePicker',
    label: '起止日期',
    colProps: { span: 8},
  },


  {
    field: 'type',
    label: '日志类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '登录日志', value: '1' },
        { label: '操作日志', value: '2' },
      ],
    },
    colProps: { span: 8 },
  },

  {
    field: 'method',
    label: '请求方法',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'GET', value: 'GET' },
        { label: 'POST', value: 'POST' },
        { label: 'PUT', value: 'PUT' },
        { label: 'DELETE', value: 'DELETE' },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'operName',
    label: '操作用户',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'ipaddr',
    label: 'IP地址',
    component: 'Input',
    colProps: { span: 8},
  },

];

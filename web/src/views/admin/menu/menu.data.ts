import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';

export const columns: BasicColumn[] = [

  {
    title: '菜单名',
    dataIndex: 'menuName',
    width: 200,
    align: 'left',


  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    },
  },
  {
    title: 'Api路由',
    dataIndex: 'apiPath',
  },
  {
    title: '组件',
    dataIndex: 'component',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

const isDir = (type: string) => type === '0';
const isMenu = (type: string) => type === '1';
const isButton = (type: string) => type === '2';
const isExt = (isExt: string) => isExt === '1';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'menuName',
    label: '菜单名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'type',
    label: '菜单类型',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '目录', value: '0' },
        { label: '菜单', value: '1' },
        { label: '按钮', value: '2' },
      ],
    },
    colProps: { lg: 24, md: 24 },
  },

  {
    field: 'id',
    label: 'ID',
    component: 'InputNumber',
    show: false,
  },
  {
    field: 'pid',
    label: 'pid',
    component: 'InputNumber',
    show: false,
  },
  {
    field: 'menuName',
    label: '菜单名称',
    component: 'Input',
    required: true,
  },

  {
    field: 'pMenuName',
    label: '上级菜单',
    component: 'TreeSelect',
    componentProps: {
      replaceFields: {
        title: 'menuName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },


  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'icon',
    label: '图标',
    component: 'IconPicker',
    show: ({ values }) => !isButton(values.type),
  },
 
  {
    field: 'apiPath',
    label: 'apiPath',
    component: 'Input',
    show: ({ values }) => isButton(values.type),
  },
  {
    field: 'apiMethod',
    label: 'ApiMethod',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    required: true,
    componentProps: {
      options: [
        { label: 'GET', value: '1' },
        { label: 'POST', value: '2' },
        { label: 'PUT', value: '3' },
        { label: 'DELETE', value: '4' },
      ],
    },

    show: ({ values }) => isButton(values.type),
  },
  {
    field: 'component',
    label: '组件路径',
    component: 'Input',
   
    show: ({ values }) => isMenu(values.type),
  },

  {
    field: 'path',
    label: '请求路径',
    component: 'Input',
    show: ({ values }) => !isButton(values.type),
  },




  {

    field: 'isExt',
    label: '是否外链',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
    show: ({ values }) => !isButton(values.type),
  },

  {
    field: 'extUrl',
    label: '外链地址',
    component: 'Input',
    show: ({ values }) => isExt(values.isExt),
  },

  {
    field: 'keepalive',
    label: '是否缓存',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '否', value: '0' },
        { label: '是', value: '1' },
      ],
    },
    show: ({ values }) => !isButton(values.type),
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' },
      ],
    },
  },
];

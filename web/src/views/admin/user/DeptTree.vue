<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="部门列表"
      :treeData="treeData"
      toolbar
      search
      :clickRowToExpand="true"
      :replaceFields="{ key: 'id', title: 'deptName' }"
      defaultExpandAll
      @select="handleSelect"
      
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree/index';
  import { getDeptList } from '/@/api/admin/dept';

  export default defineComponent({
    name: 'DeptTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        const res=await getDeptList()
        treeData.value = ((res.items) as unknown) as TreeItem[];
      }

      function handleSelect(keys: string, e) {
        emit('select', keys[0]);
        console.log(keys, e);
      }

      onMounted(() => {
        fetch();
      console.log('Component is mounted!')
      });
      return { treeData, handleSelect };
    },
  });
</script>

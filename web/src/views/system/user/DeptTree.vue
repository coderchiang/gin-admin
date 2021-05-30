<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="部门列表"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      :replaceFields="{ key: 'id', title: 'deptName' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { getDeptList } from '/@/api/system/system';

  export default defineComponent({
    name: 'DeptTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        treeData.value = ((await getDeptList()) as unknown) as TreeItem[];
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

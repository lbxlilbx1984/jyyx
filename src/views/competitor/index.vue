<script setup lang="ts">
// import { ref, computed } from "vue";
// import { clone } from "@pureadmin/utils";
// import { transformI18n } from "@/plugins/i18n";
// import { TreeSelect } from "@pureadmin/components";
// import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
// import { usePermissionStoreHook } from "@/store/modules/permission";

defineOptions({
  name: "Competitor"
});

// const menusTree = clone(usePermissionStoreHook().wholeMenus, true);
// function onCloseTags() {
//   return false;
// }
</script>
<template>
  <el-card>
    <template #header>
      <div>竞争对手详情</div>
    </template>
    <!-- <div class="flex flex-wrap items-center">
      <p>query传参模式：</p>
      <el-button
        class="m-2"
        v-for="index in 6"
        :key="index"
        @click="toDetail(index, 'query')"
      >
        打开{{ index }}详情页
      </el-button>
    </div>

    <el-divider />

    <div class="flex flex-wrap items-center">
      <p>params传参模式：</p>
      <el-button
        class="m-2"
        v-for="index in 6"
        :key="index"
        @click="toDetail(index, 'params')"
      >
        打开{{ index }}详情页
      </el-button>
    </div>

    <el-divider />
    <TreeSelect
      class="w-[300px]"
      v-model:value="value"
      show-search
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="请选择要关闭的标签"
      :fieldNames="{
        children: 'children',
        key: 'uniqueId',
        value: 'uniqueId'
      }"
      allow-clear
      multiple
      tree-default-expand-all
      :tree-data="treeData"
    >
      <template #tagRender="{ closable, onClose, option }">
        <el-tag class="mr-[3px]" :closable="closable" @close="onClose">
          {{ transformI18n(option.meta.title) }}
        </el-tag>
      </template>

      <template #title="{ data }">
        <span>{{ transformI18n(data.meta.title) }}</span>
      </template>
    </TreeSelect>
    <el-button class="m-2" @click="onCloseTags">关闭标签</el-button>

    <el-divider />
    <el-button @click="$router.push({ name: 'Menu1-2-2' })">
      跳转页内菜单（传name对象，优先推荐）
    </el-button>
    <el-button @click="$router.push('/nested/menu1/menu1-2/menu1-2-2')">
      跳转页内菜单（直接传要跳转的路径）
    </el-button>
    <el-button
      @click="$router.push({ path: '/nested/menu1/menu1-2/menu1-2-2' })"
    >
      跳转页内菜单（传path对象）
    </el-button>

    <el-divider />
    <el-button @click="$router.push({ name: 'Empty' })">
      跳转无Layout的空白页面
    </el-button> -->
  </el-card>
</template>

<template>
  <div class="main">
    <el-card>
      <el-form ref="formRef" :inline="true" :model="formData">
        <el-row>
          <el-col class="el-col-sm-6">
            <el-form-item label="子/孙公司：" prop="subCompany">
              <el-input
                v-model="formData.subCompany"
                placeholder="请输入子/孙公司"
                disabled
                suffix-icon="x"
              />
            </el-form-item>
          </el-col>
          <el-col class="el-col-sm-6">
            <el-form-item label="销售区域：" prop="salesArea">
              <el-select
                v-model="formData.salesArea"
                placeholder="请选择销售区域"
                clearable
                @change="onChangeSalesArea"
              >
                <el-option
                  v-for="item in areaOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col class="el-col-sm-6">
            <el-form-item label="创建人姓名：" prop="createrName">
              <el-input
                v-model="formData.createrName"
                disabled
                suffix-icon="x"
              />
            </el-form-item>
          </el-col>
          <el-col class="el-col-sm-6">
            <el-form-item label="创建日期：" prop="createrDate">
              <el-input
                v-model="formData.createrDate"
                disabled
                suffix-icon="x"
              />
            </el-form-item>
          </el-col>
          <el-col class="el-col-sm-6">
            <el-form-item label="申请状态：" prop="applyStatus">
              <el-select
                v-model="formData.applyStatus"
                placeholder="请选择申请状态"
                clearable
                @change="onChangeApplyStatus"
              >
                <el-option
                  v-for="item in applyStatusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col class="el-col-sm-6">
            <el-form-item label="业务类型：" prop="busiType">
              <el-select
                v-model="formData.busiType"
                placeholder="请选择业务类型"
                @change="onChangeBusiType"
              >
                <el-option
                  v-for="item in busiTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button
            type="primary"
            :icon="useRenderIcon('search')"
            :loading="loading"
            @click="onSearch"
          >
            搜索
          </el-button>
          <el-button
            :icon="useRenderIcon('refresh')"
            @click="resetForm(formRef)"
          >
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <TableProBar
      title="部门列表"
      :loading="loading"
      :tableRef="tableRef?.getTableRef()"
      :dataList="dataList"
      @refresh="onSearch"
    >
      <template #buttons>
        <el-button type="primary" :icon="useRenderIcon('add')">
          新增部门
        </el-button>
      </template>
      <template v-slot="{ size, checkList }">
        <pure-table
          ref="tableRef"
          border
          align-whole="center"
          row-key="id"
          showOverflowTooltip
          table-layout="auto"
          default-expand-all
          :size="size"
          :data="dataList"
          :columns="columns"
          :checkList="checkList"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
          @selection-change="handleSelectionChange"
        >
          <template #operation="{ row }">
            <el-button
              class="reset-margin"
              link
              type="primary"
              :size="size"
              @click="handleUpdate(row)"
              :icon="useRenderIcon('edits')"
            >
              修改
            </el-button>
            <el-popconfirm title="是否确认删除?">
              <template #reference>
                <el-button
                  class="reset-margin"
                  link
                  type="primary"
                  :size="size"
                  :icon="useRenderIcon('delete')"
                  @click="handleDelete(row)"
                >
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </pure-table>
      </template>
    </TableProBar>
  </div>
</template>
<script setup lang="ts">
// import { useColumns } from "./columns";
import { handleTree } from "@/utils/tree";
import { getDeptList } from "@/api/system";
import { FormInstance } from "element-plus";
import { reactive, ref, onMounted } from "vue";
import { TableProBar } from "@/components/ReTable";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { useNav } from "@/layout/hooks/useNav";
import dayjs from "dayjs";

const { username } = useNav();

defineOptions({
  name: "SalesAreaCreate"
});

const dataList = ref([]);
const loading = ref(true);
// const { columns } = useColumns();

const formRef = ref<FormInstance>();
const tableRef = ref();

function handleUpdate(row) {
  console.log(row);
}

function handleDelete(row) {
  console.log(row);
}

function handleSelectionChange(val) {
  console.log("handleSelectionChange", val);
}

const cdate = dayjs(new Date()).format("YYYY-MM-DD");
const formData = reactive({
  subCompany: "", // 子/孙公司
  salesArea: "", // 销售区域
  createrName: username || "", // 创建人姓名
  createrDate: cdate, // 创建日期
  applyStatus: "", // 申请状态
  busiType: "" // 业务类型
});

const areaOptions = [
  {
    value: "1",
    label: "区域A"
  },
  {
    value: "2",
    label: "区域B"
  },
  {
    value: "3",
    label: "区域C"
  }
];
/**
 * onChange applyStatus
 * @param val
 */
function onChangeApplyStatus(val) {
  console.log(val);
}

const applyStatusOptions = [
  {
    value: "1",
    label: "待提交"
  },
  {
    value: "2",
    label: "审批中"
  },
  {
    value: "3",
    label: "审批通过"
  },
  {
    value: "4",
    label: "审批驳回"
  }
];
/**
 * onChange SalesArea
 * @param val
 */
function onChangeSalesArea(val) {
  console.log(val);
}

const busiTypeOptions = [
  {
    value: "1",
    label: "外包"
  },
  {
    value: "2",
    label: "共建"
  }
];
/**
 * onChange busiType
 * @param val
 */
function onChangeBusiType(val) {
  console.log(val);
}

async function onSearch() {
  loading.value = true;
  const { data } = await getDeptList();
  dataList.value = handleTree(data as any);
  setTimeout(() => {
    loading.value = false;
  }, 500);
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  onSearch();
};

onMounted(() => {
  onSearch();
});
</script>

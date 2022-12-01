<template>
  <div class="main">
    <el-card>
      <template #header>
        <div class="card-header">
          <span style="font-size: 14pt; font-weight: bold">{{
            _pageHeaderTitle
          }}</span>

          <div style="display: inline-block; float: right; margin-right: 10px">
            <el-button type="success">保存</el-button>
            <el-button type="primary">提交</el-button>
            <el-button type="danger" plain>返回</el-button>
          </div>
        </div>
      </template>
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

        <!-- <el-form-item>
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
        </el-form-item> -->
      </el-form>
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>
        <div class="card-header">
          <span style="font-size: 14pt; font-weight: bold"> 地理区域 </span>
        </div>
      </template>
      <el-table
        ref="tableRef"
        :border="true"
        align-whole="center"
        showOverflowTooltip
        table-layout="auto"
        :data="dataList"
        :header-cell-style="{
          background: 'var(--el-table-row-hover-bg-color)',
          color: 'var(--el-text-color-primary)'
        }"
      >
        <el-table-column fixed prop="index" label="序号" width="120" />
        <el-table-column prop="sf" label="省份" />
        <el-table-column prop="cs" label="城市" />
        <el-table-column prop="qx" label="区县" />
        <el-table-column prop="zip" label="操作" width="150">
          <template v-slot="scope">
            <template v-if="true">
              <!-- <el-button
                class="text-info"
                size="mini"
                type="text"
                @click="resetSumbitPage(scope.$index, scope.row)"
                >编辑</el-button
              > -->
              <el-button
                size="small"
                type="danger"
                text
                :disabled="scope.row.STATS != '0'"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
            <!-- <template v-if="scope.row.STATS && scope.row.STATS != '0'">
              <el-button
                class="text-info"
                v-if="scope.row.STATS == '6'"
                size="mini"
                type="text"
                @click="resetSumbitPage(scope.$index, scope.row)"
                >重新提交</el-button
              >
              <el-button
                class="text-info"
                size="mini"
                type="text"
                @click="viewDetail(scope.$index, scope.row)"
                >查看</el-button
              >
              <el-button
                class="text-info"
                size="mini"
                type="text"
                v-if="
                  scope.row.STATS == '4' ||
                  scope.row.STATS == '5' ||
                  scope.row.STATS == '6'
                "
                @click="viewK2Detail(scope.$index, scope.row)"
                >审批进度</el-button
              >
            </template> -->
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>
        <div class="card-header">
          <span style="font-size: 14pt; font-weight: bold">审批记录</span>
        </div>
      </template>
      <div>
        <el-steps :active="2" align-center finish-status="success">
          <el-step title="销售代表1" description="申请人" />
          <el-step title="财务1" description="费用合规" />
          <el-step title="经理1" description="一级审批" />
          <el-step title="经理2" description="二级审批" />
        </el-steps>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
// import { areaColumns } from "./columns";
// import { handleTree } from "@/utils/tree";
import { getAreaList } from "@/api/salesarea";
import { FormInstance } from "element-plus";
import { reactive, ref, onMounted } from "vue";
// import { TableProBar } from "@/components/ReTable";
// import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { useNav } from "@/layout/hooks/useNav";
import dayjs from "dayjs";
import { useRoute } from "vue-router";
import { transformI18n } from "@/plugins/i18n";
// import { useTags } from "@/layout/hooks/useTag";
import { ElMessage, ElMessageBox } from "element-plus";

defineOptions({
  name: "SalesAreaCreate"
});

const { username } = useNav();
const route = useRoute();
const _pageHeaderTitle = transformI18n(route.meta?.title);

const dataList = ref([]);
const loading = ref(true);

// const { columns } = areaColumns();

const formRef = ref<FormInstance>();
const tableRef = ref();

const cdate = dayjs(new Date()).format("YYYY-MM-DD");
const formData = reactive({
  subCompany: "jyyx", // 子/孙公司
  salesArea: "", // 销售区域
  createrName: username || "", // 创建人姓名
  createrDate: cdate, // 创建日期
  applyStatus: "", // 申请状态
  busiType: "1" // 业务类型
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

  const { data } = await getAreaList();
  dataList.value = data.list;

  setTimeout(() => {
    loading.value = false;
  }, 500);
}

/* const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  onSearch();
}; */
/* function handleUpdate(row) {
  console.log(row);
} */

function handleDelete(row) {
  ElMessageBox.confirm(row.index ? `确认删除本行信息吗？` : "", "提示", {
    type: "warning"
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "删除成功"
      });
    })
    .catch(() => {});
}

/* function handleSelectionChange(val) {
  console.log("handleSelectionChange", val);
} */
onMounted(() => {
  onSearch();
});
</script>

export function areaColumns() {
  // const switchLoadMap = ref({});

  const columns: TableColumnList = [
    /* {
      type: "selection",
      width: 55,
      align: "left",
      hide: ({ checkList }) => !checkList.includes("勾选列")
    }, */
    {
      label: "序号",
      type: "index",
      fixed: true,
      hide: ({ checkList }) => !checkList.includes("序号列")
    },
    {
      label: "省份",
      prop: "sf"
    },
    {
      label: "城市",
      prop: "cs"
    },
    {
      label: "区县",
      prop: "qx"
    }
    /* {
      label: "性别",
      prop: "sex",
      cellRenderer: ({ row, props }) => (
        <el-tag
          size={props.size}
          type={row.sex === 1 ? "danger" : ""}
          effect="plain"
        >
          {row.sex === 1 ? "女" : "男"}
        </el-tag>
      )
    }, 
    {
      label: "部门",
      prop: "dept",
      formatter: ({ dept }) => dept.name
    },
    {
      label: "手机号码",
      prop: "mobile"
    },
    {
      label: "状态",
      prop: "status",
      width: 130,
      cellRenderer: scope => (
        <Switch
          size={scope.props.size === "small" ? "small" : "default"}
          loading={switchLoadMap.value[scope.index]?.loading}
          v-model:checked={scope.row.status}
          checkedValue={1}
          unCheckedValue={0}
          checked-children="已开启"
          un-checked-children="已关闭"
          onChange={() => onChange(scope as any)}
        />
      )
    },
    {
      label: "创建时间",
      width: 180,
      prop: "createTime",
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },*/
    /* {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "operation"
    } */
  ];

  return {
    columns
  };
}

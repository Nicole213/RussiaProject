(function () {
  const LANG_KEY = "wms_lang";
  const ATTRIBUTE_NAMES = ["placeholder", "title", "aria-label"];

  const exactPairs = [
    ["ZYC WMS 高保真原型", "ZYC WMS High-Fidelity Prototype"],
    ["ZYC WMS 原型内容区域", "ZYC WMS Prototype Content Area"],
    ["仓储管理系统", "WMS"],
    ["当前仓库：", "Current Warehouse:"],
    ["仪表盘", "Dashboard"],
    ["首页仪表盘", "Home Dashboard"],
    ["库位布局", "Location Layout"],
    ["库位布局图", "Location Layout"],
    ["仓库库位布局图", "Warehouse Location Layout"],
    ["托盘列表", "Pallet List"],
    ["任务管理", "Task Management"],
    ["任务列表", "Task List"],
    ["接口管理", "Interface Management"],
    ["接口日志", "Interface Log"],
    ["流程日志", "Process Log"],
    ["接口消息详情", "Interface Message Details"],
    ["权限管理", "Permission Management"],
    ["用户管理", "User Management"],
    ["角色权限管理", "Role Permission Management"],
    ["工作空间", "Workspace"],
    ["库位地图", "Location Map"],
    ["立库管理", "Stereo Warehouse Management"],
    ["工作模式", "Work Mode"],
    ["远程", "Remote"],
    ["本地", "Local"],
    ["调整库存优化", "Adjust inventory optimization"],
    ["当前在库托盘总数", "Total Pallets in Stock"],
    ["今日入库托盘数", "Today's Inbound Pallets"],
    ["今日出库托盘数", "Today's Outbound Pallets"],
    ["当前仓库占用率", "Current Warehouse Occupancy"],
    ["占用空间概览", "Overview of occupied space"],
    ["一周托盘流动图表", "Weekly Pallet Flow Chart"],
    ["每日入库量", "Daily Inbound"],
    ["每日出库量", "Daily Outbound"],
    ["入库", "Inbound"],
    ["出库", "Outbound"],
    ["周一", "Mon"],
    ["周二", "Tue"],
    ["周三", "Wed"],
    ["周四", "Thu"],
    ["周五", "Fri"],
    ["周六", "Sat"],
    ["周日", "Sun"],
    ["仓库负载数据", "Warehouse Load Data"],
    ["位置", "Position"],
    ["占用高度", "Occupied Height"],
    ["占用率", "Occupancy Rate"],
    ["仓库整体使用率", "Overall Warehouse Utilization"],
    ["当前整体容量使用平稳，建议优先关注接近 80% 的库区。", "Overall capacity is stable. Focus first on zones approaching 80%."],
    ["接近饱和", "Close to saturation"],
    ["偏高", "High"],
    ["稳定", "Stable"],
    ["首页 / 仪表盘", "Home Page / Dashboard"],
    ["接口管理 / 流程日志", "Interface Management / Process Log"],
    ["权限管理 / 用户管理", "Permission Management / User Management"],
    ["查看接口消息详情", "View Interface Message Details"],
    ["2个库区", "2 Zones"],
    ["2排 / 9列 / 46层", "2 rows / 9 sections / 46 levels"],
    ["托盘与货物占用层", "Occupied Levels"],
    ["预留空隙层", "Reserved Clearance Levels"],
    ["空层位", "Empty Levels"],
    ["托盘详情", "Pallet Details"],
    ["关闭信息卡片", "Close info card"],
    ["托盘编码", "Pallet Code"],
    ["托盘规格", "Pallet Specification"],
    ["高度", "Height"],
    ["位置", "Location"],
    ["锁定状态", "Lock Status"],
    ["清空托盘", "Clear Pallet"],
    ["移除", "Remove"],
    ["操作确认", "Action Confirmation"],
    ["取消", "Cancel"],
    ["确认", "Confirm"],
    ["确定", "OK"],
    ["1排", "Row 1"],
    ["2排", "Row 2"],
    ["上层库排，用于大件与高货型托盘混合存放", "Upper rack row for large and tall pallet storage"],
    ["下层库排，用于常规周转与中高货型托盘存放", "Lower rack row for regular turnover and medium-height pallet storage"],
    ["正常", "Normal"],
    ["锁定", "Lock"],
    ["解锁", "Unlock"],
    ["当前无托盘信息", "No pallet information"],
    ["已清空", "Cleared"],
    ["空托盘", "Empty Pallet"],
    ["确认清空托盘", "Confirm Clear Pallet"],
    ["确认清空", "Confirm Clear"],
    ["确认锁定托盘", "Confirm Lock Pallet"],
    ["确认锁定", "Confirm Lock"],
    ["确认解锁托盘", "Confirm Unlock Pallet"],
    ["确认解锁", "Confirm Unlock"],
    ["确认移除托盘", "Confirm Remove Pallet"],
    ["确认移除", "Confirm Remove"],
    ["9列 × 46层", "9 sections x 46 levels"],
    ["请求 URL", "Request URL"],
    ["请求状态", "Request Status"],
    ["发送方", "Sender"],
    ["接收方", "Receiver"],
    ["重新发送", "Resend"],
    ["取消 / 返回", "Cancel / Back"],
    ["处理记录", "Processing Log"],
    ["未完成", "Not Completed"],
    ["查看请求 URL、状态码、请求内容与响应内容，并支持异常接口手动重发。", "View request URL, status code, request content and response content, and support manual resend for abnormal interfaces."],
    ["14:33:46 请求发起，目标托盘 `PLT-240433` 申请出库。", "14:33:46 Request initiated. Target pallet `PLT-240433` applied for outbound."],
    ["14:33:47 WCS 返回错误码 203，设备故障导致任务取消。", "14:33:47 WCS returned error code 203. Equipment malfunction caused task cancellation."],
    ["14:34:12 系统自动重试 1 次失败，14:35:10 自动重试 2 次失败。", "14:34:12 Automatic retry 1 failed, and 14:35:10 automatic retry 2 failed."],
    ["建议人工确认堆垛机状态后执行手动重发。", "It is recommended to manually confirm the stacker status before resending."],
    ["日期区间", "Date Range"],
    ["至", "to"],
    ["状态", "Status"],
    ["满载", "Full Load"],
    ["空托", "Empty Pallet"],
    ["全部", "All"],
    ["忙碌", "Busy"],
    ["空闲", "Free"],
    ["已锁定", "Locked"],
    ["待出库", "Pending Outbound"],
    ["请输入托盘编码", "Please enter pallet code"],
    ["查询", "Search"],
    ["重置", "Reset"],
    ["新增", "Add"],
    ["新建入库请求", "Create Inbound Request"],
    ["申请出库", "Request Outbound"],
    ["托盘号", "Pallet No."],
    ["重量", "Weight"],
    ["入库时间", "Inbound Time"],
    ["操作", "Actions"],
    ["关闭弹窗", "Close dialog"],
    ["保存", "Save"],
    ["关闭", "Close"],
    ["查看", "View"],
    ["查看托盘详情", "View Pallet Details"],
    ["编辑托盘信息", "Edit Pallet Information"],
    ["托盘状态", "Pallet Status"],
    ["业务类型", "Business Type"],
    ["请选择", "Please Select"],
    ["是否发送方", "Sender?"],
    ["是否接收方", "Receiver?"],
    ["是", "Yes"],
    ["否", "No"],
    ["接口状态", "Interface Status"],
    ["状态码", "Status Code"],
    ["重试次数", "Retry Count"],
    ["接口成功时间", "Success Time"],
    ["创建时间", "Created Time"],
    ["最后修改时间", "Updated Time"],
    ["请求详情", "Request Details"],
    ["请求URL", "Request URL"],
    ["请求内容", "Request Content"],
    ["响应内容", "Response Content"],
    ["查看报文", "View Message"],
    ["关键字", "Keyword"],
    ["请输入任务号 / 容器编码 / 库位", "Enter task no. / container code / location"],
    ["命令类型", "Command Type"],
    ["普通入库", "Standard Inbound"],
    ["普通出库", "Standard Outbound"],
    ["人工组盘", "Manual Palletizing"],
    ["空托入库", "Empty Pallet Inbound"],
    ["空托出库", "Empty Pallet Outbound"],
    ["任务类型", "Task Type"],
    ["任务状态", "Task Status"],
    ["待执行", "Pending"],
    ["已完成", "Completed"],
    ["已取消", "Cancelled"],
    ["列表导出", "Export List"],
    ["序号", "No."],
    ["任务号", "Task No."],
    ["容器编码", "Container Code"],
    ["取货库台", "Pick Station"],
    ["放货库台", "Drop Station"],
    ["取货库位", "Pick Location"],
    ["放货库位", "Drop Location"],
    ["开始时间", "Start Time"],
    ["结束时间", "End Time"],
    ["异常状态", "Exception Status"],
    ["错误码", "Error Code"],
    ["模式", "Mode"],
    ["异常原因", "Exception Reason"],
    ["前往", "Go to"],
    ["页", "page"],
    ["提示", "Prompt"],
    ["强制完成", "Force Complete"],
    ["人工取消", "Manual Cancel"],
    ["异常", "Abnormal"],
    ["用户角色", "User Role"],
    ["请输入关键字", "Please enter keyword"],
    ["全部角色", "All Roles"],
    ["启用状态", "Activation Status"],
    ["启用", "Enabled"],
    ["待激活", "Pending Activation"],
    ["停用", "Disabled"],
    ["所属仓库", "Warehouse"],
    ["全部仓库", "All Warehouses"],
    ["仓库1", "Warehouse 1"],
    ["仓库2", "Warehouse 2"],
    ["用户名称", "User Name"],
    ["用户账号", "User Account"],
    ["用户权限", "User Permissions"],
    ["重置密码", "Reset Password"],
    ["新密码", "New Password"],
    ["确认密码", "Confirm Password"],
    ["编辑用户", "Edit User"],
    ["全部模块", "All Modules"],
    ["全部权限", "All Permissions"],
    ["权限维护", "Permission Maintenance"],
    ["编辑", "Edit"],
    ["修改", "Modify"],
    ["删除", "Delete"],
    ["权限查看", "View Permissions"],
    ["当前模块暂无权限配置", "No permissions configured for the current module"],
    ["启用/停用", "Enable/Disable"],
    ["仓库管理(19)", "Warehouse Management (19)"],
    ["立库管理(15)", "Stereo Warehouse Management (15)"],
    ["基础管理(16)", "Basic Management (16)"],
    ["入库管理(19)", "Inbound Management (19)"],
    ["出库管理(14)", "Outbound Management (14)"],
    ["库存管理(3)", "Inventory Management (3)"],
    ["策略管理(10)", "Strategy Management (10)"],
    ["任务管理(4)", "Task Management (4)"],
    ["接口管理(3)", "Interface Management (3)"],
    ["权限管理(12)", "Permission Management (12)"],
    ["主页(0)", "Home (0)"],
    ["库位地图(5)", "Location Map (5)"],
    ["工作空间(1)", "Workspace (1)"],
    ["库位侧地图(0)", "Side Location Map (0)"],
    ["托盘管理(0)", "Pallet Management (0)"],
    ["库区管理", "Zone Management"],
    ["绑定物料", "Bind Material"],
    ["批量创建库位", "Batch Create Locations"],
    ["库位管理", "Location Management"],
    ["库位锁定", "Lock Location"],
    ["库位解锁", "Unlock Location"],
    ["绑定库区", "Bind Zone"],
    ["查看首页", "View Dashboard"],
    ["查看一周托盘流动图表", "View Weekly Pallet Flow Chart"],
    ["查看仓库负载数据", "View Warehouse Load Data"],
    ["查看库位", "View Locations"],
    ["查看托盘信息", "View Pallet Info"],
    ["锁定托盘", "Lock Pallet"],
    ["移除托盘", "Remove Pallet"],
    ["编辑托盘", "Edit Pallet"],
    ["立库设备", "Stereo Equipment"],
    ["查看设备状态", "View Device Status"],
    ["故障复位", "Fault Reset"],
    ["基础资料", "Basic Data"],
    ["物料查询", "Material Query"],
    ["仓库配置", "Warehouse Configuration"],
    ["参数修改", "Parameter Modify"],
    ["创建任务", "Create Task"],
    ["查看详情", "View Details"],
    ["取消任务", "Cancel Task"],
    ["库存调整", "Inventory Adjustment"],
    ["查看库存日志", "View Inventory Log"],
    ["查看策略", "View Strategy"],
    ["编辑策略", "Edit Strategy"],
    ["启用策略", "Enable Strategy"],
    ["查看执行日志", "View Execution Log"],
    ["查看流程日志", "View Process Log"],
    ["重试", "Retry"],
    ["角色管理", "Role Management"],
    ["密码重置", "Password Reset"],
    ["编辑角色", "Edit Role"],
    ["管理员", "Administrator"],
    ["创建入库任务", "Create Inbound Task"],
    ["查看托盘", "View Pallet"],
    ["查看侧地图", "View Side Map"],
    ["此操作将永久删除该用户，是否继续?", "This action will permanently delete this user. Continue?"],
    ["此操作将永久删除该角色, 是否继续?", "This action will permanently delete this role. Continue?"],
    ["角色名称", "Role Name"],
    ["备注", "Remark"],
    ["权限设置", "Permission Settings"],
    ["仓库管理", "Warehouse Management"],
    ["查看库存", "View Inventory"],
    ["查看设备", "View Devices"],
    ["设备控制", "Device Control"],
    ["基础管理", "Basic Management"],
    ["入库管理", "Inbound Management"],
    ["出库管理", "Outbound Management"],
    ["库存管理", "Inventory Management"],
    ["策略管理", "Strategy Management"],
    ["主页", "Home"],
    ["库位侧地图", "Side Location Map"],
    ["托盘管理", "Pallet Management"],
    ["库位锁定/解锁", "Location Lock/Unlock"],
    ["物料锁定/解锁", "Material Lock/Unlock"],
    ["插入库存", "Insert Inventory"],
    ["清除库存", "Clear Inventory"],
    ["查看设备状态", "View Device Status"],
    ["仓库整体使用率", "Overall Warehouse Utilization"],
    ["用户名称不能为空。", "User name cannot be empty."],
    ["角色名称不能为空。", "Role name cannot be empty."],
    ["请填写新密码和确认密码。", "Please enter the new password and confirmation password."],
    ["两次输入的密码不一致，请重新输入。", "The two passwords do not match. Please re-enter them."],
    ["强制完成后任务无法继续执行，是否确定强制完成？", "The task cannot continue after force completion. Are you sure you want to force complete it?"],
    ["取消后任务无法继续执行，是否确定取消？", "The task cannot continue after cancellation. Are you sure you want to cancel it?"],
    ["未查询到符合条件的托盘数据", "No pallet data matched the current filters"],
    ["未查询到符合条件的流程日志数据", "No process log data matched the current filters"],
    ["未查询到符合条件的任务数据", "No task data matched the current filters"],
    ["未查询到符合条件的用户数据", "No user data matched the current filters"]
  ];

  const regexPairs = [
    {
      zh: /^共 (\d+) 条$/,
      en: "Total $1 records",
      enRegex: /^Total (\d+) records$/,
      zhTemplate: "共 $1 条"
    },
    {
      zh: /^当前 (远程|本地)模式$/,
      en: ({ 1: mode }) => `Current ${mode === "远程" ? "Remote" : "Local"} Mode`,
      enRegex: /^Current (Remote|Local) Mode$/,
      zhTemplate: ({ 1: mode }) => `当前 ${mode === "Remote" ? "远程" : "本地"}模式`
    },
    {
      zh: /^库区 ([A-Z])$/,
      en: "Zone $1",
      enRegex: /^Zone ([A-Z])$/,
      zhTemplate: "库区 $1"
    },
    {
      zh: /^库排 (\d+)$/,
      en: "Rack Row $1",
      enRegex: /^Rack Row (\d+)$/,
      zhTemplate: "库排 $1"
    },
    {
      zh: /^(\d+)列$/,
      en: "Section $1",
      enRegex: /^Section (\d+)$/,
      zhTemplate: "$1列"
    },
    {
      zh: /^(\d+)排(\d+)列$/,
      en: "Row $1 Section $2",
      enRegex: /^Row (\d+) Section (\d+)$/,
      zhTemplate: "$1排$2列"
    },
    {
      zh: /^(\d+)层$/,
      en: "$1 levels",
      enRegex: /^(\d+) levels$/,
      zhTemplate: "$1层"
    },
    {
      zh: /^物料([A-Z]+)$/,
      en: "Material $1",
      enRegex: /^Material ([A-Z]+)$/,
      zhTemplate: "物料$1"
    },
    {
      zh: /^(.+)\((\d+)\)$/,
      en: ({ 1: label, 2: count }) => `${translateText(label, "en")} (${count})`,
      enRegex: /^(.+) \((\d+)\)$/,
      zhTemplate: ({ 1: label, 2: count }) => `${translateText(label, "zh")}(${count})`
    },
    {
      zh: /^总层位 (\d+)$/,
      en: "$1 total slots",
      enRegex: /^(\d+) total slots$/,
      zhTemplate: "总层位 $1"
    },
    {
      zh: /^已用 (\d+) \/ (\d+) 托盘位$/,
      en: "Used $1 / $2 pallet slots",
      enRegex: /^Used (\d+) \/ (\d+) pallet slots$/,
      zhTemplate: "已用 $1 / $2 托盘位"
    },
    {
      zh: /^货物：(.+)$/,
      en: ({ 1: cargo }) => `Cargo: ${translateText(cargo, "en")}`,
      enRegex: /^Cargo: (.+)$/,
      zhTemplate: ({ 1: cargo }) => `货物：${translateText(cargo, "zh")}`
    },
    {
      zh: /^(\d+) mm（占用 (\d+) 层）$/,
      en: "$1 mm (occupies $2 levels)",
      enRegex: /^(\d+) mm \(occupies (\d+) levels\)$/,
      zhTemplate: "$1 mm（占用 $2 层）"
    },
    {
      zh: /^第 (\d+) 层预留空隙$/,
      en: "Reserved clearance at level $1",
      enRegex: /^Reserved clearance at level (\d+)$/,
      zhTemplate: "第 $1 层预留空隙"
    },
    {
      zh: /^第 (\d+) 层$/,
      en: "Level $1",
      enRegex: /^Level (\d+)$/,
      zhTemplate: "第 $1 层"
    },
    {
      zh: /^(.+)：第 (\d+) 层放托盘，占用 (\d+) 层，顶部预留 (\d+) 层$/,
      en: "$1: pallet placed at level $2, occupying $3 levels, with $4 reserved above",
      enRegex: /^(.+): pallet placed at level (\d+), occupying (\d+) levels, with (\d+) reserved above$/,
      zhTemplate: "$1：第 $2 层放托盘，占用 $3 层，顶部预留 $4 层"
    },
    {
      zh: /^确认要清空托盘 (.+) 吗？确认后该托盘将变为空托。$/,
      en: "Are you sure you want to clear pallet $1? After confirmation, the pallet will become empty.",
      enRegex: /^Are you sure you want to clear pallet (.+)\? After confirmation, the pallet will become empty\.$/,
      zhTemplate: "确认要清空托盘 $1 吗？确认后该托盘将变为空托。"
    },
    {
      zh: /^确认要锁定托盘 (.+) 吗？锁定后将显示为锁定状态。$/,
      en: "Are you sure you want to lock pallet $1? It will be shown as locked after confirmation.",
      enRegex: /^Are you sure you want to lock pallet (.+)\? It will be shown as locked after confirmation\.$/,
      zhTemplate: "确认要锁定托盘 $1 吗？锁定后将显示为锁定状态。"
    },
    {
      zh: /^确认要解锁托盘 (.+) 吗？解锁后将恢复为正常状态。$/,
      en: "Are you sure you want to unlock pallet $1? It will return to normal after confirmation.",
      enRegex: /^Are you sure you want to unlock pallet (.+)\? It will return to normal after confirmation\.$/,
      zhTemplate: "确认要解锁托盘 $1 吗？解锁后将恢复为正常状态。"
    },
    {
      zh: /^确认要将托盘 (.+) 从当前库位移除吗？确认后该库位将无托盘信息。$/,
      en: "Are you sure you want to remove pallet $1 from the current location? The location will have no pallet after confirmation.",
      enRegex: /^Are you sure you want to remove pallet (.+) from the current location\? The location will have no pallet after confirmation\.$/,
      zhTemplate: "确认要将托盘 $1 从当前库位移除吗？确认后该库位将无托盘信息。"
    },
    {
      zh: /^关闭(.+)标签页$/,
      en: ({ 1: title }) => `Close ${translateText(title, "en")} tab`,
      enRegex: /^Close (.+) tab$/,
      zhTemplate: ({ 1: title }) => `关闭${translateText(title, "zh")}标签页`
    }
  ];

  const zhToEn = new Map(exactPairs);
  const enToZh = new Map(exactPairs.map(([zh, en]) => [en, zh]));
  let currentLang = localStorage.getItem(LANG_KEY) || "zh";
  let syncing = false;
  let observerStarted = false;

  function preserveWhitespace(text, nextValue) {
    const match = /^(\s*)([\s\S]*?)(\s*)$/.exec(text);
    if (!match) return nextValue;
    return `${match[1]}${nextValue}${match[3]}`;
  }

  function applyRegexRules(text, lang) {
    for (const rule of regexPairs) {
      if (lang === "en") {
        const match = text.match(rule.zh);
        if (match) {
          if (typeof rule.en === "function") {
            return rule.en(match);
          }
          return rule.en.replace(/\$(\d+)/g, (_, index) => match[Number(index)] || "");
        }
      } else {
        const match = text.match(rule.enRegex);
        if (match) {
          if (typeof rule.zhTemplate === "function") {
            return rule.zhTemplate(match);
          }
          return rule.zhTemplate.replace(/\$(\d+)/g, (_, index) => match[Number(index)] || "");
        }
      }
    }
    return text;
  }

  function translateText(text, lang = currentLang) {
    if (!text || !text.trim()) return text;

    const trimmed = text.trim();
    const translatedExact = lang === "en" ? zhToEn.get(trimmed) : enToZh.get(trimmed);
    const translated = translatedExact || applyRegexRules(trimmed, lang);
    return preserveWhitespace(text, translated);
  }

  function shouldSkipTextNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest("[data-i18n-skip]")) return true;
    const tagName = parent.tagName;
    return tagName === "SCRIPT" || tagName === "STYLE" || tagName === "NOSCRIPT";
  }

  function translateTextNode(node) {
    if (shouldSkipTextNode(node)) return;
    const nextValue = translateText(node.nodeValue);
    if (nextValue !== node.nodeValue) {
      node.nodeValue = nextValue;
    }
  }

  function translateElementAttributes(element) {
    if (element.closest("[data-i18n-skip]")) return;
    ATTRIBUTE_NAMES.forEach((attributeName) => {
      const value = element.getAttribute(attributeName);
      if (!value) return;
      const nextValue = translateText(value);
      if (nextValue !== value) {
        element.setAttribute(attributeName, nextValue);
      }
    });
  }

  function translateRoot(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) {
      return;
    }

    const scope = root.nodeType === Node.DOCUMENT_NODE ? root.body || root.documentElement : root;
    if (!scope) return;
    if (scope.nodeType === Node.ELEMENT_NODE && scope.hasAttribute("data-i18n-skip")) return;

    translateElementAttributes(scope);

    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      translateTextNode(walker.currentNode);
    }

    scope.querySelectorAll("*").forEach((element) => {
      translateElementAttributes(element);
    });
  }

  function applyLanguage() {
    if (syncing) return;
    syncing = true;

    document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";
    document.title = translateText(document.title, currentLang);
    translateRoot(document.body);

    syncing = false;
  }

  function startObserver() {
    if (observerStarted || !document.body) return;
    observerStarted = true;

    const observer = new MutationObserver((mutations) => {
      if (syncing) return;
      syncing = true;

      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target);
        }

        if (mutation.type === "attributes" && mutation.target instanceof Element) {
          translateElementAttributes(mutation.target);
        }

        mutation.addedNodes.forEach((node) => {
          translateRoot(node);
        });
      });

      syncing = false;
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRIBUTE_NAMES
    });
  }

  function setLanguage(lang, options = {}) {
    const nextLang = lang === "en" ? "en" : "zh";
    currentLang = nextLang;

    if (options.persist !== false) {
      localStorage.setItem(LANG_KEY, currentLang);
    }

    applyLanguage();
    window.dispatchEvent(new CustomEvent("wms-language-change", { detail: { lang: currentLang } }));
  }

  function handleMessage(event) {
    if (event.data?.type === "set-language") {
      setLanguage(event.data.lang, { persist: false });
    }
  }

  function handleStorage(event) {
    if (event.key === LANG_KEY && event.newValue) {
      setLanguage(event.newValue, { persist: false });
    }
  }

  window.WMSI18N = {
    getLanguage: () => currentLang,
    setLanguage,
    translateText
  };

  window.addEventListener("message", handleMessage);
  window.addEventListener("storage", handleStorage);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      applyLanguage();
      startObserver();
    });
  } else {
    applyLanguage();
    startObserver();
  }
})();

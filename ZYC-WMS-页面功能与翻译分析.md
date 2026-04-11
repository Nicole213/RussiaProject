# ZYC WMS 页面功能与翻译详细分析

> 基于《Technical agreement ZYC WMS》第6章 Interface requirements（第12-19页）整理

---

## 页面总览

根据技术协议，ZYC WMS 共需要 **8个页面/模块**：

| 序号 | 页面英文名 | 页面中文释义 | 文档章节 |
|------|-----------|-------------|---------|
| 1 | Home page / Dashboard | 首页/仪表盘 | 6.1 |
| 2 | Pallet placement list / layout | 托盘存放列表/库位布局图 | 6.2 |
| 3 | List of pallets | 托盘列表 | 6.3 |
| 4 | Process / message / log journal | 流程/消息/日志 | 6.4 |
| 5 | View interface message details | 接口消息详情 | 6.5 |
| 6 | List of requests / task list | 请求列表/任务列表 | 6.6 |
| 7 | User Management | 用户管理 | 6.7 |
| 8 | Role permission management | 角色权限管理 | 6.8 |

---

## 页面一：Home page（首页 / Dashboard 仪表盘）

### 页面功能
1. **Shows the current number of pallets in the warehouse** — 显示仓库当前托盘总数
2. **Shows the number of pallets received/shipped to the warehouse today** — 显示今日入库/出库托盘数
3. **Shows the current warehouse occupancy rate** — 显示当前仓库占用率
4. **Shows the pallet movement chart for the week** — 显示一周托盘流动图表
5. **Shows the data on warehouse load (by line and section)** — 按线和区段显示仓库负载数据

### 按钮与操作
| 按钮/操作 | 英文原文 | 中文释义 |
|-----------|---------|---------|
| 模式切换按钮 | Button to switch between remote and local work modes | 远程/本地工作模式切换按钮 |
| 优化启动按钮 | Button to start the optimisation process | 启动优化流程按钮 |

### 数据展示区域
| 区域 | 英文原文 | 中文释义 |
|------|---------|---------|
| 今日出入库数 | The number of pallets inbound/outbound into the warehouse today | 今日入库/出库托盘数量 |
| 当前库存数 | Total number of pallets currently in stock | 当前在库托盘总数 |
| 库位负载 | Location (Line, Section) — 如 1.1 | 库位（线，区段）负载展示 |
| 周流动图 | Day × 7 天柱状图 | 一周每日托盘流动趋势图 |

### 模式说明
| 模式 | 英文原文 | 中文释义 |
|------|---------|---------|
| 远程模式 | Remote system status: the WCS system takes control of the ZYC WMS and can send instructions for entering and exiting the warehouse | 远程模式：WCS系统接管控制，可发送入库/出库指令 |
| 本地模式 | Local system status: the system takes control of the storage system, and the WMS can send instructions for entering and leaving the warehouse | 本地模式：WMS直接控制仓储系统，可发送入库/出库指令 |

---

## 页面二：Pallet placement list / layout（托盘存放列表 / 库位布局图）

### 页面功能
1. **Shows information about current pallets in the warehouse (serial number, height, location, status, available actions)** — 显示当前仓库托盘信息（序号、高度、位置、状态、可用操作）
2. **Shows the current number of pallets in the warehouse and their layout** — 显示当前托盘数及其布局
3. **Manages container data of bins** — 管理库位容器数据

### 按钮与操作
| 按钮/操作 | 英文原文 | 中文释义 |
|-----------|---------|---------|
| 添加 | Add | 添加容器/库位 |
| 编辑 | Edit | 编辑容器ID、规格 |
| 删除 | Delete | 删除（被业务引用时不可用/灰色） |
| 锁定托盘 | Lock pallet | 锁定托盘 |
| 移除托盘 | Remove pallet | 移除托盘 |

### 说明
- Add/Edit: Maintains container IDs, specifications — 维护容器ID和规格
- Delete: Inactive if referenced in business — 被业务引用时按钮不可用

---

## 页面三：List of pallets（托盘列表）

### 页面功能
1. **Management of the list of information about pallets and their status** — 管理托盘信息列表及其状态
2. **Allows filtering information about pallets by placement time and status** — 按放置时间和状态筛选托盘信息
3. **Creation of a request for a new pallet (incoming request)** — 创建新托盘入库请求
4. **Updating pallet information** — 更新托盘信息
5. **Request for pallet unloading (outgoing request)** — 请求托盘出库

### 筛选与查询
| 按钮/操作 | 英文原文 | 中文释义 |
|-----------|---------|---------|
| 起止日期查询 | Start/end date query and filtering function | 起止日期查询和筛选 |
| 状态下拉列表 | The "Status" drop-down list (please select) | 状态下拉选择列表 |
| 查询按钮 | Query | 按条件筛选查询 |
| 重置按钮 | Reset | 清除筛选条件，恢复默认列表 |

### 状态筛选选项
| 选项 | 英文原文 | 中文释义 |
|------|---------|---------|
| 忙碌 | busy | 托盘在使用中 |
| 空闲 | inactive | 托盘空闲 |

### 数据列
| 字段 | 英文原文 | 中文释义 |
|------|---------|---------|
| 高度 | Height, mm | 货物高度（毫米） |
| 重量 | Weight, mm (with filter) | 货物重量（带筛选） |
| 位置 | Line, Section, Place | 线、区段、货位 |
| 锁定状态 | Locked / Unlocked | 已锁定 / 未锁定 |

---

## 页面四：Process / message / log journal（流程/消息/日志）

### 页面功能
1. **Recording of all processes occurring in the warehouse** — 记录仓库中发生的所有流程
2. **Filtering of processes** — 流程筛选
3. **Recording interface information between WMS and third-party systems** — 记录WMS与第三方系统的接口信息
4. **Manually resend messages for abnormal interfaces** — 对异常接口手动重发消息

### 筛选条件
| 字段 | 英文原文 | 中文释义 |
|------|---------|---------|
| 业务类型 | Type of business | 业务类型选择 |
| 发送方 | Sender | 发送方选择 |
| 接收方 | Recipient | 接收方选择 |

### 按钮
| 按钮 | 英文原文 | 中文释义 |
|------|---------|---------|
| 查询 | Query | 查询（默认查询所有接口数据） |
| 重置 | Reset | 重置筛选条件 |

### 数据表格列
| 列名 | 英文原文 | 中文释义 |
|------|---------|---------|
| 业务类型 | Type of business | 业务类型 |
| URL | URL | 请求地址 |
| 发送方 | Sender | 发送方 |
| 接收方 | Recipient | 接收方 |
| 状态码 | Status Code | 接口响应状态码 |
| 重复次数 | Number of repetitions | 消息重发次数 |
| 创建时间 | Creation time | 记录创建时间 |
| 执行时间 | Execution time | 记录执行时间 |

### 操作按钮
| 按钮 | 英文原文 | 中文释义 | 出现条件 |
|------|---------|---------|---------|
| 查看消息 | View the message | 查看接口消息详情 | 所有记录 |
| 重新发送 | Send the message again | 手动重发消息 | 状态为"未完成"时 |

### 状态标识
| 状态 | 英文原文 | 中文释义 |
|------|---------|---------|
| 完成 | Yes (green) / Completed | 接口已完成（绿色） |
| 未完成 | No (red) / Not completed | 接口未完成（红色） |

---

## 页面五：View interface message details（接口消息详情）

### 页面数据
| 字段 | 英文原文 | 中文释义 |
|------|---------|---------|
| 请求URL | Request URL | 请求地址 |
| 请求状态 | Request status | 请求状态码 |
| 请求内容 | Request content | 请求报文内容 |
| 响应内容 | Response / Response content | 响应报文内容 |

### 按钮
| 按钮 | 英文原文 | 中文释义 |
|------|---------|---------|
| 重新发送 | Resending a message | 重新发送消息（接口异常时支持手动重发） |
| 取消/退出 | Cancel / Exit message details view | 取消/退出消息详情查看 |

---

## 页面六：List of requests / task list（请求列表 / 任务列表）

### 页面功能
1. **Records all incoming and outgoing requests in the repository, including the initial position, final position, request status, etc.** — 记录仓库所有出入库请求（起始位置、目标位置、请求状态等）
2. **Manages the status of requests when an error occurs or a request is cancelled** — 管理异常或取消时的请求状态
3. **Query all inbound and outbound tasks** — 查询所有出入库任务
4. **Forced completion** — 强制完成
5. **Cancel task** — 取消任务

### 筛选条件
| 字段 | 英文原文 | 中文释义 |
|------|---------|---------|
| 托盘号 | Pallet number / PalletCode | 托盘编号（无论新旧托盘） |
| 指令类型 | Command type (Inbound/OutBound) | 指令类型（入库/出库） |
| 任务类型 | Task type | 任务类型 |
| 请求状态 | Pallet Status | 托盘/请求状态 |
| 创建时间 | Creation time | 创建时间 |

### 按钮
| 按钮 | 英文原文 | 中文释义 |
|------|---------|---------|
| 查询 | Query | 查询 |
| 清除 | Clear | 清除筛选条件 |
| 更新 | Update | 更新 |

### 数据表格列
| 列名 | 英文原文 | 中文释义 |
|------|---------|---------|
| 序号 | № / Command № | 序号/指令号 |
| 指令类型 | Command type | 入库(Inbound)/出库(OutBound) |
| 任务类型 | Task type | 任务类型 |
| 托盘码 | PalletCode | 托盘编号 |
| 取货位置 | Place of receipt (Line, Section, Place) | 取货位置（线，区段，货位） |
| 放货位置 | Place of delivery (Line, Section, Place) | 放货位置（线，区段，货位） |
| 任务状态 | Task status | 任务状态 |
| 创建时间 | Creation time | 创建时间 |
| 开始时间 | Begin time | 任务开始时间 |
| 完成时间 | Complete time | 任务完成时间 |
| 异常状态 | Problem status | 异常/问题状态 |
| 错误码 | The ErrorCode | 错误码 |

### 操作按钮
| 按钮 | 英文原文 | 中文释义 | 触发条件 |
|------|---------|---------|---------|
| 强制完成 | Forced completion / Compelted | 强制完成 | 堆垛机已取货但遇到异常无法继续执行 |
| 取消 | Cancel / Cancelled | 取消任务 | 堆垛机未取货但遇到异常无法继续执行 |

### 任务模式标识
| 模式 | 英文原文 | 中文释义 |
|------|---------|---------|
| 本地 | local | 本地模式 |
| 远程 | Remote | 远程模式 |

### 任务状态
| 状态 | 英文原文 | 中文释义 |
|------|---------|---------|
| 已完成 | Completed | 任务已完成 |
| 已取消 | Cancelled | 任务已取消 |

---

## 页面七：User Management（用户管理）

### 页面功能
1. **Storing user data** — 存储用户数据
2. **Creating new user accounts** — 创建新用户账号
3. **Setting up access rights** — 设置访问权限

### 按钮
| 按钮 | 英文原文 | 中文释义 |
|------|---------|---------|
| 新建 | New | 新建用户 |
| 权限设置 | Permission Settings | 权限设置 |
| 修复/编辑 | Fix | 修复/编辑用户信息 |
| 删除 | Delete | 删除用户 |

### 数据表格列
| 列名 | 英文原文 | 中文释义 |
|------|---------|---------|
| 序号 | № | 序号 |
| 用户名 | Name | 用户名称 |
| 权限设置 | Permission Settings | 权限配置状态 |
| 备注 | Note | 备注 |
| 操作 | Actions | 操作按钮区 |

---

## 页面八：Role permission management（角色权限管理）

### 页面功能
- **service authorization** — 服务授权
- **Permission: After binding a user to a role, the user can view the functional permissions they possess, such as menus, buttons, etc.** — 权限：将用户绑定到角色后，用户可查看其拥有的功能权限（菜单、按钮等）

### 权限模块树
| 模块 | 英文原文 | 中文释义 | 权限项数 |
|------|---------|---------|---------|
| 工作区 | Workspace | 工作区 | 1 |
| 库位图 | Storage location map | 库位图 | 5 |
| 仓库管理 | Warehouse management | 仓库管理 | 19 |
| 库管理 | Library Management | 库管理 | 15 |
| 基础管理 | Basic management | 基础管理 | 16 |
| 库存管理 | Inventory management | 库存管理 | 3 |
| 策略管理 | Strategic management | 策略管理 | 10 |
| 任务管理 | Task management | 任务管理 | 4 |
| 接口管理 | Interface management | 接口管理 | 3 |
| 权限管理 | Permission management | 权限管理 | 12 |

### 按钮
| 按钮 | 英文原文 | 中文释义 |
|------|---------|---------|
| 全部模块 | All modules | 选择所有模块 |
| 全部权限 | All permissions | 选择所有权限 |
| 取消 | Cancel | 取消 |
| 确认 | Confirm | 确认保存 |

---

## 全局公共元素翻译对照表

### 状态类
| 英文 | 中文 |
|------|------|
| Received | 已接收 |
| Executing | 执行中 |
| Completed | 已完成 |
| Error | 错误 |
| Locked | 已锁定 |
| Unlocked | 已解锁 |
| Busy | 忙碌（使用中） |
| Inactive | 空闲 |
| Online | 在线 |
| Offline | 离线 |

### 错误码
| 英文 | 代码 | 中文 |
|------|------|------|
| There are no suitable empty storage available | 201 | 无合适空库位 |
| Exceeding the size limit or weight limit | 202 | 超出尺寸或重量限制 |
| Task cancelled due to equipment malfunction | 203/303 | 设备故障导致任务取消 |
| Pallet lost | 301 | 托盘丢失 |

### 操作类
| 英文 | 中文 |
|------|------|
| Query | 查询 |
| Reset | 重置 |
| Clear | 清除 |
| Update | 更新 |
| Add / New | 新建/添加 |
| Edit / Fix | 编辑/修改 |
| Delete | 删除 |
| Cancel | 取消 |
| Confirm | 确认 |
| View the message | 查看消息 |
| Send the message again | 重新发送消息 |
| Forced completion | 强制完成 |
| Lock pallet | 锁定托盘 |
| Remove pallet | 移除托盘 |
| Optimisation / Optimization | 优化 |
| Switch between remote and local | 远程/本地切换 |

### 仓储术语
| 英文 | 中文 |
|------|------|
| Line | 线（货架排） |
| Section | 区段 |
| Place | 货位 |
| Pallet | 托盘 |
| Tray / Tray number | 托盘/托盘号 |
| Stacker crane (SC) | 堆垛机 |
| Trolley | 台车 |
| Infeed Command | 入库指令 |
| Outfeed Command | 出库指令 |
| ResultCode | 结果代码 |
| ErrorCode | 错误代码 |
| RequestID | 请求编号 |
| SRM panel | SRM面板 |
| HMI | 人机界面 |
| LiveBit | 心跳位 |
| AllowMove | 允许移动 |
| AllowPick | 允许取货 |
| AllowDrop | 允许放货 |
| GetInventory | 获取库存（全量同步） |
| Warehouse occupancy rate | 仓库占用率 |
| Remote mode | 远程模式 |
| Local mode | 本地模式 |
| BPMN | 业务流程模型与标记法 |

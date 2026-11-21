---
name: Global Enterprise Intelligence Design System
description: "面向全球企业信息查询、商业信用分析、风险识别和企业关系研究的数据产品设计系统。视觉语言专业、可信、国际化、清晰且克制。"
colors:
  background: "#F5F7FA"
  surface: "#FFFFFF"
  foreground: "#172B4D"
  foregroundSecondary: "#5C6B7A"
  foregroundMuted: "#8C99A6"
  primary: "#1769AA"
  primaryDark: "#102A43"
  primaryLight: "#EAF3F8"
  dataAccent: "#0F8B8D"
  border: "#DCE3EA"
  divider: "#E8EDF2"
  success: "#168F5B"
  successBackground: "#E8F7EF"
  warning: "#D98218"
  warningBackground: "#FFF4E5"
  danger: "#D64545"
  dangerBackground: "#FDECEC"
  neutral: "#7B8794"
  neutralBackground: "#F1F3F5"
  membership: "#B8873B"
  membershipDark: "#76551F"
  membershipBackground: "#FBF4E7"
typography:
  display:
    fontFamily: "HarmonyOS Sans SC, Source Han Sans SC, Microsoft YaHei, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.25
  pageTitle:
    fontFamily: "HarmonyOS Sans SC, Source Han Sans SC, Microsoft YaHei, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.4
  sectionTitle:
    fontFamily: "HarmonyOS Sans SC, Source Han Sans SC, Microsoft YaHei, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.5
  cardTitle:
    fontFamily: "HarmonyOS Sans SC, Source Han Sans SC, Microsoft YaHei, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "HarmonyOS Sans SC, Source Han Sans SC, Microsoft YaHei, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "Inter, HarmonyOS Sans SC, Source Han Sans SC, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  caption:
    fontFamily: "Inter, HarmonyOS Sans SC, Source Han Sans SC, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
spacing:
  base: 8px
  compact: 4px
  small: 12px
  component: 16px
  card: 24px
  section: 40px
  page: 48px
  contentMaxWidth: 1200px
rounded:
  card: 8px
  button: 8px
  input: 8px
  tag: 4px
  modal: 12px
components:
  navbar: "紧凑的深蓝色全局导航，包含品牌、核心业务导航、消息、登录状态和会员入口。"
  search: "首页最突出的交互组件，包含搜索类型、关键词输入、搜索按钮、联想结果和历史记录。"
  button: "主按钮使用主操作蓝；次按钮使用白色背景、蓝色文字和浅色边框；所有按钮必须具有悬停、聚焦、禁用和加载状态。"
  card: "白色背景、8px圆角、浅色边框和极弱阴影，强调信息组织而非装饰。"
  table: "适合高密度企业数据展示，表头稳定、行高适中，支持悬停、排序、筛选、展开和分页。"
  tabs: "用于内地企业、全球企业、人员搜索和企业详情模块切换，选中状态使用主操作蓝。"
  statusTag: "企业状态标签同时使用颜色和文字，不允许仅通过颜色传达状态。"
  riskTag: "风险标签同时使用颜色、图标、等级名称和必要的数量信息。"
  membershipTag: "会员相关内容使用克制的暖金色，仅用于会员身份、专属数据、报告和权益入口。"
  graph: "企业关系图谱使用固定节点颜色、方向箭头、线型和比例标签表达企业、人员及股权关系。"
  modal: "用于登录、会员限制、导出设置和确认操作，内容清晰，主次操作明确。"
  drawer: "用于企业节点详情、筛选条件、风险详情和辅助信息展示。"
  emptyState: "说明当前无数据，并提供重新搜索、调整筛选或返回等明确操作。"
  errorState: "明确说明错误原因及恢复方法，不使用含糊或情绪化文案。"
  skeleton: "页面和模块加载时使用与最终内容结构一致的骨架屏。"
motion:
  durationFast: 120ms
  durationNormal: 200ms
  durationSlow: 320ms
  easingStandard: "cubic-bezier(0.2, 0, 0, 1)"
  principle: "动效用于状态反馈、展开收起、浮层出现和图谱节点变化，不使用无意义的装饰动画。"
layout:
  desktopWidth: 1440px
  contentMaxWidth: 1200px
  gridColumns: 12
  gridGap: 16px
  navbarHeight: 64px
  searchHeight: 56px
  buttonHeight: 40px
  compactButtonHeight: 36px
  tableRowHeight: 48px
  sidebarWidth: 240px
  detailAnchorWidth: 180px
---

# 全球企业信息与风险查询平台设计系统

## 1. 产品定位

这是一个面向企业管理者、采购和供应链人员、外贸从业者、金融风控人员、律师、咨询顾问及商务拓展人员的全球企业数据与风险决策平台。

产品覆盖：

- 中国内地企业查询
- 港澳台及海外企业查询
- 工商与股权信息
- 企业信用分析
- 经营风险与司法风险
- 股权穿透与实际控制人识别
- 企业关系图谱
- 知识产权
- 招投标与经营动态
- 企业关注与风险监控
- 企业信用报告

产品首先是一个可靠、高效的企业数据工具，其次才是品牌展示和商业转化载体。

## 2. 品牌个性

核心品牌特征：

- 专业
- 可信
- 国际化
- 清晰
- 克制
- 高效
- 数据驱动

产品不能呈现为：

- 普通营销型 SaaS 官网
- 政务信息网站
- 深色数据大屏
- 金融交易终端
- 新闻资讯门户
- 以装饰和动画为主的概念产品

## 3. 核心设计原则

### 3.1 搜索优先

企业搜索是产品最高频、最核心的任务。

首页搜索框必须是首屏最明显的交互组件。品牌宣传、推荐内容、会员权益和运营专题不得抢占搜索的一级视觉地位。

### 3.2 信息优先

所有装饰都必须服务信息理解。

页面通过标题、标签、分隔、留白、卡片、表格和层级导航组织信息，不依赖无意义插画、复杂背景和装饰性图表。

### 3.3 摘要—详情—分析

企业信息使用三级结构：

1. 摘要：帮助用户快速判断企业基本状况。
2. 详情：展示工商、股权、风险和经营等完整数据。
3. 深度分析：提供信用报告、股权穿透、企业图谱和风险监控。

不得将全部字段无层级地平铺在页面上。

### 3.4 风险表达清晰

风险不能只通过颜色表达，必须同时包括：

- 风险等级名称
- 状态图标
- 风险颜色
- 风险数量或摘要
- 必要时提供发生时间与当前状态

### 3.5 商业化克制

会员色仅用于：

- 会员身份
- 会员专属数据
- 信用报告
- 深度图谱
- 数据导出
- 企业监控
- 套餐与权益说明

会员提示不得遮盖全部基础信息，也不得使用大面积金色背景。

### 3.6 状态完整

所有重要页面和组件必须覆盖：

- 默认状态
- Hover 状态
- Focus 状态
- 选中状态
- 展开与收起状态
- 加载状态
- 空数据状态
- 网络或服务异常
- 未登录状态
- 会员限制状态
- 权限不足状态
- 数据不完整状态

## 4. 色彩规范

### 4.1 品牌色

- 品牌深蓝 `#102A43`：顶部导航、重要标题和品牌区域。
- 主操作蓝 `#1769AA`：主要按钮、链接、选中状态和核心操作。
- 数据青 `#0F8B8D`：图谱节点、数据分析和辅助强调。
- 浅蓝背景 `#EAF3F8`：选中区域、信息提示和轻量强调。

### 4.2 中性色

- 页面背景 `#F5F7FA`
- 卡片背景 `#FFFFFF`
- 一级文字 `#172B4D`
- 二级文字 `#5C6B7A`
- 弱化文字 `#8C99A6`
- 边框 `#DCE3EA`
- 分割线 `#E8EDF2`

### 4.3 风险色

低风险：

- 前景 `#168F5B`
- 背景 `#E8F7EF`

中风险：

- 前景 `#D98218`
- 背景 `#FFF4E5`

高风险：

- 前景 `#D64545`
- 背景 `#FDECEC`

未知或无数据：

- 前景 `#7B8794`
- 背景 `#F1F3F5`

风险色只表达业务含义，不作为大面积品牌装饰色使用。

### 4.4 会员色

- 会员金 `#B8873B`
- 会员深金 `#76551F`
- 会员浅背景 `#FBF4E7`

## 5. 字体与排版

中文优先使用：

1. HarmonyOS Sans SC
2. Source Han Sans SC
3. Microsoft YaHei
4. 系统无衬线字体

英文、数字和数据标签优先使用 Inter。

字号层级：

- 首页主标题：32–36px / 600
- 页面标题：24px / 600
- 模块标题：18px / 600
- 卡片标题：16px / 600
- 正文：14px / 400
- 辅助文字：12px / 400
- 重要数据：20–24px / 600

避免：

- 大量使用粗体
- 使用装饰性衬线字体
- 使用超大营销标题
- 为了视觉效果随意缩小数据文字

## 6. 间距与布局

使用 8px 基础间距体系：

- 4px：图标与文字等紧密关系
- 8px：标签、按钮内部元素
- 12px：紧凑组件
- 16px：普通组件与卡片间距
- 24px：卡片内部主要留白
- 32–40px：模块间距
- 48px：页面主要区块间距

桌面端规范：

- 设计基准宽度：1440px
- 内容最大宽度：1200px
- 12 列栅格
- 栅格间距：16px
- 顶部导航高度：64px
- 搜索框高度：56px
- 常规按钮高度：40px
- 紧凑按钮高度：36px
- 表格建议行高：44–52px

## 7. 圆角、边框与阴影

- 卡片圆角：8px
- 按钮圆角：8px
- 输入框圆角：8px
- 标签圆角：4px，状态标签可以使用胶囊形
- 弹窗圆角：12px
- 默认边框：1px `#DCE3EA`

阴影只用于：

- 弹窗
- 下拉菜单
- Tooltip
- 抽屉
- 需要明确浮层关系的组件

普通内容卡片优先使用浅色边框，不给每张卡片添加明显阴影。

## 8. 按钮规范

### 主按钮

- 背景：`#1769AA`
- 文字：白色
- 用于搜索、保存、确认、生成报告等唯一主要操作

### 次按钮

- 背景：白色
- 文字：`#1769AA`
- 边框：`#DCE3EA`
- 用于导出、分享、查看详情等次级操作

### 文字按钮

- 文字：`#1769AA`
- 无背景
- 用于展开、收起、查看更多等轻量操作

危险操作使用危险红色，但不得与风险标签混淆。

按钮必须设计：

- Default
- Hover
- Focus
- Pressed
- Disabled
- Loading

## 9. 卡片与表格

### 卡片

卡片主要用于：

- 企业摘要
- 信用结论
- 风险摘要
- 功能入口
- 会员权益
- 图谱节点详情

卡片使用白色背景、浅边框和 8px 圆角。只有 Hover 或被选中的交互卡片可以增强边框或使用轻微阴影。

### 表格

表格适用于：

- 股东列表
- 对外投资
- 关联企业
- 风险记录
- 商标专利
- 招投标
- 企业变更记录

表格需要支持：

- 表头固定
- 行 Hover
- 排序
- 筛选
- 展开明细
- 分页或加载更多
- 空数据
- 加载骨架
- 字段权限限制

数值右对齐，文本左对齐，状态和短标签可以居中。

## 10. 企业状态与风险标签

企业状态标签包括：

- 存续
- 在业
- 注销
- 吊销
- 撤销
- 迁出
- 清算
- 未知

风险标签包括：

- 低风险
- 中风险
- 高风险
- 已移出
- 已履行
- 执行中
- 已结案
- 状态未知

标签必须包含清晰文字，不允许仅使用彩色圆点。

## 11. 企业关系图谱

节点颜色：

- 当前企业：`#1769AA`
- 股东企业：`#0F8B8D`
- 被投资企业：`#4F73C8`
- 自然人：`#8A63B8`
- 分支机构：`#5F7D8C`
- 高风险节点：`#D64545`
- 未知或受限节点：`#8C99A6`

关系通过以下方式表达：

- 箭头方向
- 实线或虚线
- 线条粗细
- 持股比例
- 职位或关系标签

图谱必须支持：

- 展开与收起节点
- 放大和缩小
- 拖动画布
- 全屏
- 重置布局
- 层级选择
- 关系类型筛选
- 搜索和定位节点
- 导出与分享

避免为每一种关系使用不同颜色，防止图谱过度杂乱。

## 12. 动效规范

动效只用于：

- 状态反馈
- Tab 切换
- 展开与收起
- 弹窗和抽屉出现
- 搜索联想出现
- 图谱节点展开
- 加载状态

建议时长：

- 快速反馈：120ms
- 普通过渡：200ms
- 复杂展开：320ms

遵循减少动态效果设置，不使用持续漂浮、闪烁和无意义页面入场动画。

## 13. 文案规范

界面文案使用清晰、直接的中文。

正确示例：

- 搜索企业
- 查看股权穿透
- 开启风险监控
- 下载信用报告
- 暂无公开数据
- 数据加载失败，请重新加载

避免：

- 立即探索商业新世界
- 洞见无限可能
- 开启智慧商业未来
- 系统发生了一些问题
- 提交

一个控件只表达一个动作，按钮名称与操作完成后的反馈保持一致。

## 14. 品牌识别元素

使用“企业关系脉络线”作为克制的视觉签名：

- 由细线、节点和方向关系组成
- 可以出现在首页搜索区域背景、图谱入口或企业头部局部
- 使用低对比度品牌蓝和数据青
- 不得影响文字和操作阅读
- 不得扩展为大面积科技光效或装饰网络

## 15. 禁止项

禁止使用：

- 紫色或粉色作为品牌主色
- 霓虹色
- 大面积渐变
- 玻璃拟态
- 数据大屏式深色页面
- 装饰性衬线字体
- 过度圆角
- 每张功能卡使用不同颜色
- 每张卡片添加明显阴影
- 无业务含义的图表
- 无意义人物、城市或科技插画
- 只通过颜色表达风险
- 为营销效果牺牲搜索效率和数据可读性
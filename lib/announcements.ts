export type AnnouncementCategory = "maintenance" | "activities" | "dynamics"

export type AnnouncementContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; label: string; href: string }
  | { type: "signature"; lines: string[] }

export type Announcement = {
  slug: string
  category: AnnouncementCategory
  title: string
  date: string
  excerpt: string
  content: AnnouncementContentBlock[]
}

export const announcementCategories: Record<
  AnnouncementCategory,
  {
    label: string
    description: string
  }
> = {
  maintenance: {
    label: "维护更新",
    description: "官网、产品与服务维护公告",
  },
  activities: {
    label: "GANA最新活动",
    description: "社区活动、计划预约及生态活动",
  },
  dynamics: {
    label: "GANA最新动态",
    description: "生态进展、合作动态与官方资讯",
  },
}

export const announcementCategoryOrder: AnnouncementCategory[] = [
  "maintenance",
  "activities",
  "dynamics",
]

// 后期新增或删除公告，优先维护这里的 announcements 数组。
export const announcements: Announcement[] = [
  {
    slug: "goldhouse-test-server-500-person-meeting-launch",
    category: "maintenance",
    title: "官方公告｜GoldHouse 测试服在线会议 500 人容量已免费开通",
    date: "2026-06-05",
    excerpt:
      "GoldHouse 测试服在线会议 500 人容量已免费开通，当前支持不限时、不限人数畅快体验。请注意测试服数据与正式服数据不互通。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的 GoldHouse 用户、生态伙伴及社区成员：",
      },
      {
        type: "paragraph",
        text: "为进一步提升社区用户的在线会议体验，满足更多测试用户在沟通、协作、社群交流及产品体验过程中的会议需求，GoldHouse 测试服在线会议功能现已完成新一轮升级。",
      },
      {
        type: "paragraph",
        text: "目前，GoldHouse 测试服在线会议已正式免费开通 500 人会议容量。用户可在测试服中畅快体验在线会议功能，当前支持：",
      },
      {
        type: "list",
        items: [
          "会议发起次数不限；",
          "单场会议时长不限；",
          "在线会议不限人数，当前单场最高支持 500 人会议容量；",
          "社区用户可自由创建会议、参与会议并进行功能体验反馈。",
        ],
      },
      {
        type: "paragraph",
        text: "本次升级主要面向 GoldHouse 测试服环境开放，旨在让社区成员更充分地体验在线会议能力，并帮助团队持续优化系统稳定性、会议体验与后续正式版本功能。",
      },
      {
        type: "paragraph",
        text: "请所有参与测试的用户特别注意：GoldHouse 测试服数据与正式服数据不互通。",
      },
      {
        type: "paragraph",
        text: "测试服中的注册信息、登录记录、会议记录、账户数据、测试资产、操作数据及其他相关体验数据，均仅用于测试环境体验，不代表正式服数据，也不会与正式服数据共同使用或自动同步。",
      },
      {
        type: "paragraph",
        text: "后续根据正式版本上线安排，测试服数据可能进行调整、清理或删档。请用户勿将测试服数据视为正式环境数据。",
      },
      {
        type: "paragraph",
        text: "感谢所有社区成员对 GoldHouse 测试工作的支持与反馈。GoldHouse 团队将持续根据测试体验优化产品功能，为正式版本上线做好准备。",
      },
      {
        type: "paragraph",
        text: "特此公告。",
      },
      {
        type: "signature",
        lines: ["GANA 技术团队", "2026年6月5日"],
      },
    ],
  },
  {
    slug: "goldhouse-test-server-online-meeting-upgrade",
    category: "maintenance",
    title: "官方公告｜GoldHouse 测试服在线会议功能升级完成",
    date: "2026-06-05",
    excerpt:
      "GoldHouse 测试服在线会议功能已完成升级，现已支持会议发起次数不限次、单场会议时长不限时。今日晚些时候，会议人数容量将提升至 500 人。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的 GoldHouse 用户、生态伙伴及社区成员：",
      },
      {
        type: "paragraph",
        text: "为进一步提升社区用户的会议体验与产品使用效率，GoldHouse 测试服在线会议功能现已完成升级。",
      },
      {
        type: "paragraph",
        text: "本次升级后，GoldHouse 测试服中的在线会议功能已支持：",
      },
      {
        type: "list",
        items: [
          "会议发起次数不限次；",
          "单场会议时长不限时；",
          "测试服用户可更自由地进行会议创建、功能体验与反馈。",
        ],
      },
      {
        type: "paragraph",
        text: "本次功能升级主要面向测试服环境开放，旨在帮助社区成员更充分地体验 GoldHouse 会议功能，并为后续正式版本优化提供真实反馈。",
      },
      {
        type: "paragraph",
        text: "同时，GoldHouse 团队将于今日晚些时候（2026年6月5日）完成在线会议参会人数容量升级，届时会议人数上限将提升至 500 人。相关功能开放进展将通过官方公告同步通知，敬请期待。",
      },
      {
        type: "paragraph",
        text: "请参与测试的用户注意，当前版本仍属于测试环境，部分功能、数据及体验可能会根据后续版本规划进行调整。",
      },
      {
        type: "paragraph",
        text: "感谢所有社区成员对 GoldHouse 测试工作的支持与反馈。",
      },
      {
        type: "paragraph",
        text: "特此公告。",
      },
      {
        type: "signature",
        lines: ["GANA 技术团队", "2026年6月5日"],
      },
    ],
  },
  {
    slug: "gh-community-beta-dual-platform-download-launch",
    category: "maintenance",
    title: "官方公告｜GH 社区内测版双端下载入口正式上线",
    date: "2026-06-03",
    excerpt:
      "GH 社区内测版现已同步开放安卓与 iOS TestFlight 测试入口。本次上线版本为测试环境 APP，用户产生的测试数据后续可能清理或删档。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的 GANA 用户、生态伙伴及社区成员：",
      },
      {
        type: "paragraph",
        text: "为进一步推进 GH 应用生态体验优化，方便更多社区用户参与产品内测与反馈，GH 社区内测版现已同步开放安卓与 iOS TestFlight 测试入口。",
      },
      {
        type: "paragraph",
        text: "本次上线版本为测试环境 APP，主要面向社区内测用户开放体验。用户可根据设备类型，通过以下官方链接下载安装或加入测试：",
      },
      {
        type: "link",
        label: "安卓测试包下载链接",
        href: "https://www.goldhouse.cc",
      },
      {
        type: "link",
        label: "iOS TestFlight 测试链接",
        href: "https://testflight.apple.com/join/86Y76Rah",
      },
      {
        type: "paragraph",
        text: "请参与内测的用户注意：",
      },
      {
        type: "list",
        items: [
          "当前版本为测试环境版本，部分功能、页面、数据及交互体验仍处于持续优化阶段；",
          "内测期间产生的注册、登录、操作记录、账户数据、测试资产或其他相关数据，后续可能根据正式版本上线安排进行清理或删档；",
          "请勿将测试环境中的数据视为正式环境数据；",
          "如在使用过程中遇到异常、卡顿、闪退、数据展示错误或其他问题，请及时向所在社区反馈；",
          "请务必通过官方发布链接下载安装或加入 TestFlight 测试，避免使用非官方来源安装包或不明链接，以保障设备与账户安全。",
        ],
      },
      {
        type: "paragraph",
        text: "GH 团队将持续根据社区反馈优化产品功能、系统稳定性和用户体验，为后续正式版本上线做好准备。",
      },
      {
        type: "paragraph",
        text: "感谢所有社区成员对 GH 应用内测工作的支持与配合。",
      },
      {
        type: "paragraph",
        text: "特此公告。",
      },
      {
        type: "signature",
        lines: ["GANA 技术团队", "2026年6月3日"],
      },
    ],
  },
  {
    slug: "gh-android-community-beta-official-launch",
    category: "maintenance",
    title: "官方公告｜GH 安卓安装包社区内测版正式上线",
    date: "2026-06-03",
    excerpt:
      "GH 安卓安装包社区内测版现已正式上线。本次上线版本为测试环境 APP，用户产生的测试数据后续可能根据正式版本安排进行清理或删档。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的 GANA 用户、生态伙伴及社区成员：",
      },
      {
        type: "paragraph",
        text: "为进一步推进 GH 应用生态体验优化，方便社区用户提前参与产品测试与反馈，GH 安卓安装包社区内测版现已正式上线。",
      },
      {
        type: "paragraph",
        text: "本次上线版本为测试环境 APP，主要面向社区内测用户开放体验。安卓用户可通过以下官方链接下载安装测试包：",
      },
      {
        type: "link",
        label: "GH 安卓测试包下载链接",
        href: "https://www.goldhouse.cc",
      },
      {
        type: "paragraph",
        text: "请参与内测的用户注意：",
      },
      {
        type: "list",
        items: [
          "当前版本为测试环境版本，部分功能、页面、数据及交互体验仍处于持续优化阶段；",
          "内测期间产生的注册、登录、操作记录、账户数据、测试资产或其他相关数据，后续可能根据正式版本上线安排进行清理或删档；",
          "请勿将测试环境中的数据视为正式环境数据；",
          "如在使用过程中遇到异常、卡顿、闪退、数据展示错误或其他问题，请及时向所在社区反馈；",
          "请务必通过官方发布链接下载安装，避免使用非官方来源安装包，以保障设备与账户安全。",
        ],
      },
      {
        type: "paragraph",
        text: "同时，GH iOS TestFlight 内测版本预计将于 2026年6月4日 正式开放。届时，iOS 用户可根据官方后续通知参与 TestFlight 测试体验。",
      },
      {
        type: "paragraph",
        text: "GH 团队将持续根据社区反馈优化产品功能、系统稳定性和用户体验，为后续正式版本上线做好准备。",
      },
      {
        type: "paragraph",
        text: "感谢所有社区成员对 GH 应用内测工作的支持与配合。",
      },
      {
        type: "paragraph",
        text: "特此公告。",
      },
      {
        type: "signature",
        lines: ["GANA 技术团队", "2026年6月3日"],
      },
    ],
  },
  {
    slug: "gana-foundation-statement-non-official-projects",
    category: "dynamics",
    title: "官方声明｜关于防范冒用 GANA 名义推广非官方项目的声明",
    date: "2026-06-01",
    excerpt:
      "为维护 GANA 生态品牌形象，保障所有生态伙伴及用户的合法权益，避免市场误导、信息混淆及不实宣传，GANA 基金会发布本官方声明。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的 GANA 用户、生态伙伴及社区成员：",
      },
      {
        type: "paragraph",
        text: "为维护 GANA 生态品牌形象，保障所有生态伙伴及用户的合法权益，避免市场误导、信息混淆及不实宣传，GANA 基金会现正式声明如下：",
      },
      {
        type: "paragraph",
        text: "GANA 基金会目前仅围绕 GANA 生态进行建设、运营、推广与长期发展，不参与、不背书、不授权任何与 GANA 无关的项目、平台、代币、理财产品、投资计划或第三方商业活动。",
      },
      {
        type: "paragraph",
        text: "任何个人、团队或机构，如以“GANA 基金会”“GANA 官方”“GANA 社区”“GANA 生态共建者”等名义，对外宣传、推广、引导参与其他非 GANA 项目，均不代表 GANA 基金会官方立场，也不构成 GANA 基金会的任何授权、推荐或背书。",
      },
      {
        type: "paragraph",
        text: "请所有 GANA 用户及生态伙伴务必提高警惕，谨慎识别以下行为：",
      },
      {
        type: "list",
        items: [
          "打着 GANA 名义推广其他项目；",
          "冒充 GANA 官方引导用户参与其他平台；",
          "以 GANA 关系为第三方项目进行背书；",
          "声称“官方推荐”“内部通道”“合作项目”等不实信息；",
          "通过私信、陌生群聊或非官方渠道诱导用户参与非 GANA 项目。",
        ],
      },
      {
        type: "paragraph",
        text: "GANA 基金会不会通过私信、陌生群聊或非官方渠道，要求用户参与任何 GANA 以外的项目，也不会为任何非 GANA 项目的收益、风险、资金安全或后续结果承担责任。",
      },
      {
        type: "paragraph",
        text: "如发现任何个人、团队或机构冒用 GANA 名义进行虚假宣传、拉群推广、引导参与其他项目或诱导操作，请第一时间截图保留证据，并向所在社区负责人反馈核实。",
      },
      {
        type: "paragraph",
        text: "GANA 基金会将持续专注于 GANA 生态长期建设，坚定维护生态秩序，保护所有参与者的合法权益。请广大用户认准 GANA 官方渠道发布的信息，谨慎辨别非官方宣传内容，避免造成不必要的损失。",
      },
      {
        type: "paragraph",
        text: "特此声明。",
      },
      {
        type: "signature",
        lines: ["GANA 基金会", "2026年6月1日"],
      },
    ],
  },
  {
    slug: "gana-new-main-site-official-launch",
    category: "maintenance",
    title: "技术更新公告｜GANA 全新主站正式上线通知",
    date: "2026-06-01",
    excerpt:
      "为进一步提升官网访问稳定性、信息发布效率及全球用户访问体验，GANA 全新主站现已正式上线。请用户优先通过全新官方主站访问。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的 GANA 用户：",
      },
      {
        type: "paragraph",
        text: "为进一步提升官网访问稳定性、信息发布效率及全球用户访问体验，GANA 全新主站现已正式上线。",
      },
      {
        type: "paragraph",
        text: "即日起，请广大用户优先通过以下全新官方主站访问 GANA 相关服务与生态信息：",
      },
      {
        type: "link",
        label: "GANA 全新官方主站",
        href: "https://www.goldgana.net/",
      },
      {
        type: "paragraph",
        text: "全新主站将作为 GANA 官方核心访问入口，持续承载平台服务、生态动态、官方公告、技术更新及后续重要功能入口。请用户认准官方公布域名，避免通过非官方链接访问，以保障账户与资产安全。",
      },
      {
        type: "paragraph",
        text: "此前部分用户在访问原主站时可能受到网络环境或访问限制影响，技术团队已同步完成主站访问入口优化。后续如有更多访问地址或服务更新，我们将通过官方公告渠道及时同步。",
      },
      {
        type: "paragraph",
        text: "感谢各位用户长期以来对 GANA 的支持与信任。",
      },
      {
        type: "signature",
        lines: ["GANA 技术团队", "2026年6月1日"],
      },
    ],
  },
  {
    slug: "goldgana-main-domain-access-temporary-adjustment",
    category: "maintenance",
    title: "技术更新公告｜主站访问临时调整通知",
    date: "2026-06-01",
    excerpt:
      "近期由于主站 goldgana.com 遭受大量不明来源举报，导致部分地区访问暂时受限。请用户临时通过官方备用域名访问平台服务。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的 GANA 用户：",
      },
      {
        type: "paragraph",
        text: "近期由于主站 goldgana.com 遭受大量不明来源举报，导致部分地区访问暂时受限。为保障用户正常使用平台服务，请用户临时通过以下官方备用域名访问：",
      },
      {
        type: "link",
        label: "备用访问域名 1",
        href: "https://www.ganapay.info",
      },
      {
        type: "link",
        label: "备用访问域名 2",
        href: "https://ganawebx.com",
      },
      {
        type: "link",
        label: "备用访问域名 3",
        href: "https://www.ganawebx.com",
      },
      {
        type: "link",
        label: "大陆用户建议优先使用 1",
        href: "https://gana.nc537.com/",
      },
      {
        type: "link",
        label: "大陆用户建议优先使用 2",
        href: "https://gana.ihlo61.com/",
      },
      {
        type: "paragraph",
        text: "其中，中国大陆地区用户建议优先使用 https://gana.nc537.com/ 或 https://gana.ihlo61.com/ 访问，以获得更稳定的访问体验。",
      },
      {
        type: "paragraph",
        text: "目前技术团队正在持续处理主站访问问题，恢复进展将通过官方渠道同步通知。请用户认准以上官方公布域名，避免通过非官方链接访问，以保障账户与资产安全。",
      },
      {
        type: "paragraph",
        text: "感谢各位用户的理解与支持。",
      },
      {
        type: "signature",
        lines: ["GANA 技术团队", "2026年6月1日"],
      },
    ],
  },
  {
    slug: "gana-payment-community-language-compliance-guidelines",
    category: "dynamics",
    title: "重要通知｜GANA Payment社区用语合规规范",
    date: "2026-05-30",
    excerpt:
      "为树立加密支付行业合规品牌形象，规避敏感用语风险，统一社区会议、日常交流、对外宣讲用语，即日起执行社区用词规范。",
    content: [
      {
        type: "paragraph",
        text: "为树立加密支付行业合规品牌形象，规避敏感用语风险，统一社区会议、日常交流、对外宣讲用语，即日起执行以下用词规范，请全体共建者严格遵守：",
      },
      {
        type: "paragraph",
        text: "一、身份类禁用&替换",
      },
      {
        type: "list",
        items: [
          "禁用：领导人、团队长、上线、下线",
          "替换：生态大使、生态共建者、引荐人、生态伙伴",
        ],
      },
      {
        type: "paragraph",
        text: "二、奖励类禁用&替换",
      },
      {
        type: "list",
        items: [
          "禁用：直推奖、平级奖、静态奖、动态奖(团队奖)",
          "替换：引荐奖、协同奖、持有奖、活跃奖",
        ],
      },
      {
        type: "paragraph",
        text: "要求：所有会议发言、社群聊天、海报文案一律禁用敏感词汇，突出平等共建、合规健康的加密支付生态。",
      },
      {
        type: "signature",
        lines: ["GANA Payment生态运营中心", "2026年5月30日"],
      },
    ],
  },
  {
    slug: "gana-official-website-launch",
    category: "maintenance",
    title: "关于GANA官网正式上线的公告",
    date: "2026-05-23",
    excerpt:
      "GANA官方全新生态门户网站已正式上线，将作为官方统一信息发布平台，承载生态资讯、项目动态、官方公告及重要生态入口。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的GANA全球社区用户、生态伙伴及关注者：",
      },
      {
        type: "paragraph",
        text: "GANA官方全新生态门户网站已正式上线。自即日起，GANA官网将作为官方统一信息发布平台，承载生态资讯、项目动态、官方公告、全球社区进展及重要生态入口等内容发布。",
      },
      {
        type: "link",
        label: "官网地址",
        href: "https://web.goldgana.com/",
      },
      {
        type: "paragraph",
        text: "本次官网上线，是GANA生态建设与全球化发展进程中的重要技术更新。后续，官网将陆续开放并完善以下内容板块：",
      },
      {
        type: "list",
        items: [
          "GANA全球生态战略布局",
          "PayFi / Web3支付生态进展",
          "全球社区发展动态",
          "百城计划生态布局",
          "MBA人才计划体系",
          "媒体新闻与行业资讯",
          "交易所动态与上线新闻",
          "合作机构官方公告",
          "后续重大生态入口及相关服务",
        ],
      },
      {
        type: "paragraph",
        text: "未来，GANA将持续围绕Web3社交、支付、钱包、安全生态等核心方向，推动全球生态资源整合与应用场景拓展，逐步构建真正连接全球用户、社区与合作伙伴的无界生态体系。",
      },
      {
        type: "paragraph",
        text: "请广大用户认准GANA官方官网、官方X账号及官方渠道发布的信息，及时关注后续生态进展。感谢全球社区成员长期以来对GANA的支持与信任。",
      },
      {
        type: "paragraph",
        text: "特此公告。",
      },
      {
        type: "signature",
        lines: ["GANA团队", "2026年5月23日"],
      },
      {
        type: "link",
        label: "GANA官方X",
        href: "https://x.com/GANA_Insight",
      },
    ],
  },
  {
    slug: "first-wave-dapp-reservation-benefits",
    category: "activities",
    title: "首批DAPP预约福利公布",
    date: "2026-05-23",
    excerpt:
      "GANA生态DAPP首批预约福利正式公布，首批开放后的100小时内完成DAPP预约的用户将在神秘生态正式开启后获得专属预约权益。",
    content: [
      {
        type: "paragraph",
        text: "尊敬的GANA全球社区用户、生态伙伴及关注者：",
      },
      {
        type: "paragraph",
        text: "GANA生态DAPP首批预约福利正式公布。为感谢全球用户对GANA生态建设的关注与支持，凡在首批开放后的100小时内完成DAPP预约的用户，将在神秘生态正式开启后获得专属预约权益。",
      },
      {
        type: "paragraph",
        text: "本次首批预约用户可获得以下福利：",
      },
      {
        type: "list",
        items: [
          "免费3个月会员权益",
          "可开启300人会议室",
          "单场会议最长2小时",
          "首批创世预约专属身份标识",
        ],
      },
      {
        type: "paragraph",
        text: "同时，活动期间将随机抽取幸运用户，赠送AVE官方周边礼。该福利仅限AVE钱包用户参与，具体发放规则请以后续官方公告为准。",
      },
      {
        type: "paragraph",
        text: "首批创世预约身份标识后续将拥有特殊纪念意义与优先权益。GANA将持续围绕Web3社交、支付、钱包、安全生态等核心方向，推动全球生态应用场景落地，为全球用户带来更丰富的生态体验。",
      },
      {
        type: "paragraph",
        text: "请广大用户认准GANA官方官网、官方X账号及官方渠道发布的信息，及时关注活动板块后续动态。感谢全球社区成员长期以来对GANA的支持与信任。",
      },
      {
        type: "link",
        label: "官网",
        href: "https://web.goldgana.com/",
      },
      {
        type: "link",
        label: "GANA官方X",
        href: "https://x.com/GANA_Insight",
      },
      {
        type: "paragraph",
        text: "特此公告。",
      },
      {
        type: "signature",
        lines: ["GANA团队", "2026年5月23日"],
      },
    ],
  },
]

export function getAnnouncementBySlug(slug: string) {
  return announcements.find((announcement) => announcement.slug === slug)
}

export function getAnnouncementsByCategory(category: AnnouncementCategory) {
  return announcements.filter((announcement) => announcement.category === category)
}

export function getLatestAnnouncements(limit = 3) {
  return [...announcements]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
}

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

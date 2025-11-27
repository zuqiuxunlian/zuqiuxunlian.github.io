module.exports = {
  base: "/",
  head: [["meta", { name: "theme-color", content: "#3eaf7c" }]],
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "vuepress-plugin-baidu-tongji-analytics",
      {
        key: "2a36203f824f2dff471775364d62fc7d",
        dev: true,
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "一起踢足球训练营",
      description: "包含非营利的足球团队训练，享受训练的乐趣。",
    },
    "/en/": {
      lang: "en-US",
      title: "YQT FC",
      description: "Non-profit football team training, have fun training.",
    },
  },
  themeConfig: {
    logo: "/logo.png",
    // sidebar: "auto",

    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        lastUpdated: "最后更新",
        nav: [
          { text: "加入训练", link: "/get-started" },
          { text: "团队介绍", link: "/manage-team" },
          { text: "会员介绍", link: "/members" },
          {
            text: "社交账号",
            ariaLabel: "",
            items: [
              {
                text: "视频号",
                link: "/wechat-official-accounts",
              },
              {
                text: "抖音",
                link: "https://www.douyin.com/user/MS4wLjABAAAArUwEHeE_GuHNPJ3yyMRLYizeSS-8cGoaPWBI97E9L1w",
              },

              {
                text: "Github",
                link: "https://github.com/zuqiuxunlian",
              },
            ],
          },
          { text: "训练分析", link: "https://learn.zuqiuxunlian.com" },
          {
            text: "其他",
            ariaLabel: "",
            items: [
              { text: "急救信息卡", link: "/medical-emergency-action-plan" },
              { text: "财报", link: "/finance" },
              { text: "招聘", link: "/hire" },
            ],
          },
          { text: "IORI计时器", link: "https://iori.zuqiuxunlian.com/cn/" },
          // { text: "旧版本", link: "https://old.zuqiuxunlian.com" },
        ],
        sidebar: [
          ["/get-started", "加入训练"],
          "/manage-team",
          "/members",
          "/finance",
          ["/hire", "招聘"],
          ["/medical-emergency-action-plan", "急救"],
        ],
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Join", link: "/en/get-started" },
          { text: "Analysis", link: "https://learn.zuqiuxunlian.com" },
          // { text: "Ins", link: "https://www.instagram.com/yiqitifc/" },
          {
            text: "IORI Timer",
            link: "https://ioritimer.com",
          },
        ],
      },
    },
  },
};

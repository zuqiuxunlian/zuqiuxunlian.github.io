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
      title: "Yiqiti Football Camp",
      description: "Non-profit football team training, have fun training.",
    },
  },
  themeConfig: {
    logo: "/logo.png",
    sidebar: "auto",

    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        lastUpdated: "最后更新",
        nav: [
          { text: "加入训练", link: "/get-started" },
          { text: "学习成长", link: "https://learn.zuqiuxunlian.com/index.html" },
          {
            text: "社交账号",
            ariaLabel: "",
            items: [
              {
                text: "一起踢足球训练营｜公众号",
                link: "/wechat-official-accounts",
              },
              {
                text: "一起踢足球训练营｜抖音",
                link: "https://www.douyin.com/user/MS4wLjABAAAArUwEHeE_GuHNPJ3yyMRLYizeSS-8cGoaPWBI97E9L1w",
              },

              {
                text: "踢球的腾｜B站",
                link: "https://space.bilibili.com/388955673",
              },
            ],
          },
          { text: "招聘", link: "/hire" },
          {
            text: "其他",
            ariaLabel: "",
            items: [
              { text: "急救信息卡", link: "/medical-emergency-action-plan" },
            ],
          },
          { text: "IORI计时器", link: "https://zuqiuxunlian.com/iori" },

          // { text: "旧版本", link: "https://old.zuqiuxunlian.com" },
        ],
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Join", link: "/get-started" },
          { text: "Learn", link: "https://learn.zuqiuxunlian.com/index.html" },
          {
            text: "IORI Timer",
            link: "https://zuqiuxunlian.github.io/iori/en",
          },
          { text: "Ins", link: "https://www.instagram.com/yiqitifc/" },
        ],
      },
    },
  },
};

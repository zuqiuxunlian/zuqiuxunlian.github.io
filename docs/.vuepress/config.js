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
          { text: "加入我们", link: "/get-started" },
          {
            text: "公众号",
            link: "/wechat-official-accounts",
          },
          { text: "IORI计时器", link: "https://zuqiuxunlian.com/iori" },
          { text: "B站", link: "https://space.bilibili.com/388955673" },
          // { text: "旧版本", link: "https://old.zuqiuxunlian.com" },
        ],
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        lastUpdated: "Last Updated",
        nav: [
          { text: "IORI Timer", link: "https://zuqiuxunlian.com/iori/en" },
          { text: "Ins", link: "https://www.instagram.com/yiqitifc/" },
        ],
      },
    },
  },
};

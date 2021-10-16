module.exports = {
  title: "Wray's Blog",
  description: "记录总结",
  base: "/vuepress/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guides/" },
      {
        text: "文章",
        link: "/docs/",
        ariaLabel: '文章分类',
        items: [
          {text: '2021', link: '/docs/2021-10-16/'}
      ]},
    ],
  },
};

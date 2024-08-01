import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "",
  description: "",

  theme,

  // plugins: [
  //   searchProPlugin({
  //     // 索引全部内容
  //     indexContent: true,
  //   }),
  // ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

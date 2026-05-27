import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "", // 公告标题，填空使用i18n字符串Key.announcement
	content: "想学 AI 辅助编程？12 节 Vibe Coding 入门课，从零基础到独立开发", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "开始学习 →", // 链接文本
		url: "/learn/", // 链接 URL
		external: false, // 内部链接
	},
};

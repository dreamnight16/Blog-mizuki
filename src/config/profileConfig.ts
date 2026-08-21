import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "https://i.ibb.co/gMwpFW7Z/IMG-20260328-163133.jpg",
	name: "梦夜十六",
	bio: "Stay hungry, stay foolish",
	typewriter: {
		enable: true,
		speed: 80,
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/dreamnight16",
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/514345038",
		},
		{
			name: "YouTube",
			icon: "fa7-brands:youtube",
			url: "https://youtube.com/@sixtdreamnight",
		},
		{
			name: "X",
			icon: "fa7-brands:x-twitter",
			url: "https://x.com/sixtdreanight",
		},
		{
			name: "npm",
			icon: "fa7-brands:npm",
			url: "https://www.npmjs.com/~sixtdreamnight",
		},
		{
			name: "PyPI",
			icon: "fa7-brands:python",
			url: "https://pypi.org/user/sixtdreamnight/",
		},
		{
			name: "Vibe Coding 入门课",
			icon: "material-symbols:school",
			url: "/learn/",
		},
	],
};

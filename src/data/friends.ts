// 友情链接数据配置

export interface FriendItem {
    id: number;
    title: string;
    imgurl: string;
    desc: string;
    siteurl: string;
    tags: string[];
}

export const friendsData: FriendItem[] = [
    {
        id: 1,
        title: "暮雨の小站",
        imgurl: "https://avatars.githubusercontent.com/u/0?v=4",
        desc: "暮雨的个人博客",
        siteurl: "https://muyufly.github.io/",
        tags: ['Blog', 'Tech'],
    },
];

export function getFriendsList(): FriendItem[] {
    return friendsData;
}

export function getShuffledFriendsList(): FriendItem[] {
    const shuffled = [...friendsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Project data configuration file
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: "web" | "mobile" | "desktop" | "other";
    techStack: string[];
    status: "completed" | "in-progress" | "planned";
    liveDemo?: string;
    sourceCode?: string;
    visitUrl?: string;
    startDate: string;
    endDate?: string;
    featured?: boolean;
    tags?: string[];
    showImage?: boolean;
}

export const projectsData: Project[] = [
    {
        id: "companion-engine",
        title: "companion-engine",
        description: "AI companion core engine — personality, relationship, memory, safety, and pipeline",
        image: "https://opengraph.githubassets.com/1/dreamnight16/companion-engine",
        category: "other",
        techStack: ['TypeScript', 'AI SDK', 'Zod'],
        status: "completed",
        sourceCode: "https://github.com/dreamnight16/companion-engine",
        startDate: "2026-01-01",
        featured: true,
        tags: ['AI', 'npm', 'TypeScript'],
    },
    {
        id: "yumema",
        title: "Yumema (梦间)",
        description: "AI 伴侣桌面应用。TA 有自己的性格、爱好、情绪和记忆，可以通过 QQ、微信或应用内直接聊天。",
        image: "https://opengraph.githubassets.com/1/dreamnight16/ai-companion",
        category: "desktop",
        techStack: ['Electron', 'React', 'TypeScript', 'AI SDK'],
        status: "in-progress",
        sourceCode: "https://github.com/dreamnight16/ai-companion",
        startDate: "2025-09-01",
        featured: true,
        tags: ['AI', 'Desktop', 'Electron'],
    },
    {
        id: "chinese-scraper-utils",
        title: "chinese-scraper-utils",
        description: "Chinese scraping utilities — date parsing, city extraction, UA pool, LLM extraction pipeline",
        image: "https://opengraph.githubassets.com/1/dreamnight16/chinese-scraper-utils",
        category: "other",
        techStack: ['Python', 'httpx', 'Pydantic'],
        status: "completed",
        sourceCode: "https://github.com/dreamnight16/chinese-scraper-utils",
        visitUrl: "https://pypi.org/project/chinese-scraper-utils/",
        startDate: "2026-02-01",
        featured: false,
        tags: ['PyPI', 'Python', 'Scraping'],
    },
    {
        id: "comiradar",
        title: "ComiRadar",
        description: "自动发现未来 90 天内全国漫展、同人展、二次元演唱会等演出信息",
        image: "https://opengraph.githubassets.com/1/dreamnight16/anime-con-radar",
        category: "web",
        techStack: ['Python', 'Playwright', 'SQLite'],
        status: "completed",
        sourceCode: "https://github.com/dreamnight16/anime-con-radar",
        startDate: "2025-11-01",
        featured: true,
        tags: ['Python', 'Scraping', 'Anime'],
    },
    {
        id: "dreamcode",
        title: "DreamCode",
        description: "面向零基础学习者的 AI 辅助编程（Vibe Coding）互动教学网站，12 节课 + AI 助教 + 代码沙盒",
        image: "https://opengraph.githubassets.com/1/dreamnight16/learn-to-code",
        category: "web",
        techStack: ['Next.js', 'React', 'TypeScript', 'AI SDK'],
        status: "completed",
        sourceCode: "https://github.com/dreamnight16/learn-to-code",
        visitUrl: "https://learn.dreamnight.net.cn/",
        startDate: "2026-03-01",
        featured: true,
        tags: ['Education', 'Next.js', 'AI'],
    },
    {
        id: "yanmo",
        title: "Yanmo (研墨)",
        description: "本地优先的科研助手 — 读懂导师、追新论文、审项目、验公式、写论文",
        image: "https://opengraph.githubassets.com/1/dreamnight16/research-ink",
        category: "desktop",
        techStack: ['Python', 'FastAPI', 'SymPy', 'ChromaDB'],
        status: "in-progress",
        sourceCode: "https://github.com/dreamnight16/research-ink",
        startDate: "2026-04-01",
        featured: false,
        tags: ['Research', 'Python', 'AI'],
    },
    {
        id: "weekly-hotspot",
        title: "weekly-hotspot",
        description: "AI 驱动的热点事件分析工具 — 每周自动抓取+政审过滤+价值评分+深度梳理",
        image: "https://opengraph.githubassets.com/1/dreamnight16/weekly-hotspot",
        category: "other",
        techStack: ['Python', 'DeepSeek', 'Pydantic'],
        status: "completed",
        sourceCode: "https://github.com/dreamnight16/weekly-hotspot",
        startDate: "2026-04-15",
        featured: false,
        tags: ['Python', 'AI', 'News'],
    },
    {
        id: "myblog",
        title: "myBlog",
        description: "Personal blog — tech, essays, and whatever comes to mind. 梦夜の小窝。",
        image: "https://opengraph.githubassets.com/1/dreamnight16/myBlog",
        category: "web",
        techStack: ['Astro', 'React', 'Tailwind CSS', 'MD3'],
        status: "in-progress",
        sourceCode: "https://github.com/dreamnight16/myBlog",
        visitUrl: "https://dreamnight.net.cn/",
        startDate: "2025-06-01",
        featured: true,
        tags: ['Blog', 'Astro', 'Web'],
    },
    {
        id: "dreamnight16",
        title: "dreamnight16",
        description: "DreamNight's GitHub profile — AI undergrad, building things for fun",
        image: "https://opengraph.githubassets.com/1/dreamnight16/dreamnight16",
        category: "web",
        techStack: ['Markdown', 'GitHub Actions'],
        status: "completed",
        sourceCode: "https://github.com/dreamnight16/dreamnight16",
        startDate: "2025-01-01",
        featured: false,
        tags: ['Profile', 'GitHub'],
    },
];

const links = {
	home: {
		name: "home",
		url: "/",
	},
	blog: {
		name: "blog",
		url: "/blog",
	},
} as const;

type Link = (typeof links)[keyof typeof links];

const normalizePath = (path: string) =>
	path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

export function isPathInLink(path: string, link: Link) {
	const normalizedPath = normalizePath(path);
	const linkUrl = link.url === "/" ? "/" : link.url;

	if (linkUrl === "/") {
		return normalizedPath === "/";
	}

	if (normalizedPath === "/") {
		return false;
	}

	return normalizedPath.startsWith(linkUrl);
}

export function isPathInLinks(path: string) {
	return Object.values(links).some((link: Link) => isPathInLink(path, link));
}

const externalLinks = {
	telegram: "https://t.me/the0xbuidler",
	github: "https://github.com/0xbuidler",
	x: "https://x.com/maximeisalive",
};

export { externalLinks, links };

let serverUrl;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    serverUrl = `http://localhost:${window.location.port}`;
} else {
    serverUrl = "https://coolgis.org";
}

const dataPath = "/data";
const portfolioDataUrl = "/data/portfolio.json";
const blogDataUrl = "/data/blog.json";

export {
    serverUrl,
    dataPath,
    portfolioDataUrl,
    blogDataUrl
}
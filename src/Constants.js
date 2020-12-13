let serverUrl;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    serverUrl = "http://localhost:3000";
} else {
    serverUrl = "https://cesiumgis.com";
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
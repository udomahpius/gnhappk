const createGetUnsplashImagesRequest = (query) => {
    return {
        url: "/unsplash/images?query=" + query,
        method: "GET"
    };
}

export default createGetUnsplashImagesRequest
export const createGetTemplatesRequest = (category_id) => {
    if (!category_id) {
        return {
            url: "/templates",
            method: "GET"
        };
    }
    return {
        url: "/templates?category_id=" + category_id,
        method: "GET"
    };
}

export const createGetTemplateRequest = (id) => {
    return {
        url: "/templates/" + id,
        method: "GET"
    };
}

export const createGetTemplateExamplesRequest = (id) => {
    return {
        url: "/templates/" + id + "/examples",
        method: "GET"
    };
}

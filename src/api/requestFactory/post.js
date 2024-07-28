import { convertLinkedInTextToJSON } from "@/utils/editor-parser";

export const createPublishPostRequest = (post) => {
    let id = post.id;
    return {
        url: "/posts/" + id + "/publish",
        method: "POST",
    };
}

export const createGetPostRequest = (id) => {
    return {
        url: "/posts/" + id,
        method: "GET",
    };
}

export const createSaveDraftRequest = (post) => {
    let text = post.text;
    let image_url = post.image_url;
    let file_url = post.file_url;
    let mentions = post.mentions;
    let rich_text = post.richText;
    let linked_in_acount_id = post.linked_in_acount_id;
    if(rich_text === undefined || rich_text === null || rich_text === ""){
        rich_text = convertLinkedInTextToJSON(text);
    }
    let carousel_title = post.carousel_title;
    let video_title = post.video_title;
    let video_url = post.video_url;
    return {
        url: "/posts",
        method: "POST",
        data: {
            text,
            image_url,
            mentions,
            rich_text,
            file_url,
            carousel_title,
            linked_in_acount_id,
            video_title,
            video_url
        },
    };
}

export const createUpdatePostRequest = (post) => {
    let text = post.text;
    let image_url = post.image_url;
    let mentions = post.mentions;
    let rich_text = post.richText;
    let file_url = post.file_url;
    let carousel_title = post.carousel_title;
    let linked_in_account_id = post.linked_in_account_id;
    let linked_in_account = post.linked_in_account;
    let video_title = post.video_title;
    let video_url = post.video_url;
    let status = post.status;
    let time_slot_instance = post.time_slot_instance;
    return {
        url: "/posts/" + post.id,
        method: "PUT",
        data: {
            text,
            image_url,
            mentions,
            rich_text,
            file_url,
            carousel_title,
            linked_in_account_id,
            linked_in_account,
            video_title,
            video_url,
            status,
            time_slot_instance
        },
    };
}

export const createDeletePostRequest = (id) => {
    return {
        url: "/posts/" + id,
        method: "DELETE",
    };
}

export const createGetPostsByStatusRequest = (status, page, per_page) => {
    return {
        url: "/posts",
        method: "GET",
        params: {
            status,
            page,
            per_page
        },
    };
}

export const createGetPostsCountGroupedByStatusRequest = () => {
    return {
        url: "/posts/count",
        method: "GET",
    };
}

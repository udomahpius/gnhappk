export const createGetUserRequest = () => {
    return {
        url: "/users/me",
        method: "GET"
    };
}

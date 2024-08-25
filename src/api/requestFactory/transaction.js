export const createGetTransactionsRequest = () => {
    return {
        url: "/transaction",
        method: "GET",
    };
}


export const createGetReferralRequest = () => {
    return {
        url: "/transaction/referral",
        method: "GET",
    };
}


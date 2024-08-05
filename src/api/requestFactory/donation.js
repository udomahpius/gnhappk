export const createPaymentMethodRequest = (text) => {
    return {
        url: "/users/collect_payment_method",
        method: "POST",
        data: {
            text,
        },
    };
}

export const createMakeDonationRequest = (amount) => {
    return {
        url: "/donation",
        method: "POST",
        data: {
            amount
        },
        //disableLoading: true,
    };
}


export const createGetDonationsRequest = () => {
    return {
        url: "/donation",
        method: "GET",
    };
}

export const createCalculateDonationsRequest = () => {
    return {
        url: "/donation/calculate",
        method: "GET",
    };
}

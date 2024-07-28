export const createNewCheckoutRequest = (checkoutRequest) => {
    let { price } = checkoutRequest;
    let cancel_url = checkoutRequest.cancelUrl;
    let success_url = checkoutRequest.successUrl;
    let tolt_referral = checkoutRequest.toltReferral;
    let quantity = checkoutRequest.quantity;
    return {
        url: "/stripe/checkout",
        method: "POST",
        data: {
            price,
            cancel_url,
            success_url,
            tolt_referral,
            quantity
        },
    };
}

export const createCancelSubscriptionRequest = (subscription_id) => {
    return {
        url: "/stripe/cancel_subscription",
        method: "POST",
        data: {
            subscription_id,
        },
    };
}

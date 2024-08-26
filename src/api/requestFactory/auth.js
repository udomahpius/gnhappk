export const signUpWithPhoneAndPassword = (name, phone, email, password, referral) => {
    return {
        url: "/auth/signup",
        method: "POST",
        data: {
            name,
            phone,
            email,
            password,
            referral
        }
    };
}

export const signInWithPhoneAndPassword = (phone, password) => {
    return {
        url: "/auth/login",
        method: "POST",
        data: {
            phone,
            password
        }
    };
}


export const forgotPassword = (email) => {
    return {
        url: "/auth/forgot/password",
        method: "POST",
        data: {
            email
        },
    };
}


export const resendVerifyEmail = (email) => {
    return {
        url: "/auth/email/resend",
        method: "PUT",
        data: {
            email
        },
    };
}


export const updatePassword = (old_password, password) => {
    return {
        url: "/auth/update/password",
        method: "PUT",
        data: {
            old_password,
            password
        },
    };
}


export const resetPassword = (password, token) => {
    return {
        url: "/auth/reset/password",
        method: "PUT",
        data: {
            password,
            token
        },
    };
}


export const verifyEmailAccount = (token, phone) => {
    return {
        url: `/auth/verify/email?token=${token}&email=${phone}`,
        method: "GET"
    };
}

import { noAuthAPI } from "../config/api";


const PaymentService = {
	createCustomerPortal: async () => {
        const response = await noAuthAPI.post("users/customer_portal");
        return response;
	},

	

	fetchUser: async (email, password) => {
		const response = await noAuthAPI.post("/users", {
            email,
            password
        });

		return response;
	},


	verifyEmail: async (token) => {
        const response = await noAuthAPI.post("auth/verify-email", {
            token
        });
        return response
	},
}


export default PaymentService;
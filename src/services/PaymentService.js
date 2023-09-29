import { noAuthAPI } from "../config/api";


const PaymentService = {
	createSubscription: async () => {
        const response = await noAuthAPI.post("users/subscription");
        return response;
	},
	
	createCustomerPortal: async () => {
        const response = await noAuthAPI.post("users/customer_portal");
        return response;
	},


	fetchUser: async () => {
		const response = await noAuthAPI.get("/users");
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
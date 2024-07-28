import { noAuthAPI } from "../config/api";


const DonationService = {

	collectPaymentDetails: async () => {
        const response = await noAuthAPI.post("users/collect_payment_method");
        return response;
	},

	makeDonation: async (amount) => {
		const response = await noAuthAPI.post("/donation", {
            amount,
        });
		return response;
	},

	listDonations: async () => {
		const response = await noAuthAPI.get("/donation");
		return response;
	},


	confirmPaymentDetails: async (clientSecret) => {
        const response = await noAuthAPI.get(`users/confirm_payment_method/${clientSecret}`);
        return response;
	},

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


export default DonationService;
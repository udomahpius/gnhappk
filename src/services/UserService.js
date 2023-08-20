import { noAuthAPI } from "../config/api";
import api from "../config/api";


const UserService = {
	createCheckoutSession: async () => {
        const response = await noAuthAPI.post("users/subscription");
        return response
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

	

	// sendVerificationEmail() {
    //     // return sendEmailVerification(this.auth.currentUser)
	// 	// 	.then((userCredential) => {
	// 	// 		console.log(userCredential);
	// 	// 		return {
	// 	// 			user: userCredential
	// 	// 		} 
	// 	// 	})
	// 	// 	.catch((error) => {
	// 	// 		alert(error.message)
	// 	// 		return {
	// 	// 			error: error.message
	// 	// 		};
	// 	// 	})
    // },


	

	// logout: async () =>  {
	// 	await firebase.auth().signOut();
	// }
}


export default UserService;
import { noAuthAPI } from "../config/api";
import api from "../config/api";


const AuthService = {
	waitForAuthorization: async (callback) => {
		try {
            const response = await noAuthAPI.get("users");

            console.log(response);

            callback(response?.data?.data);
        } catch (error) {
			console.log(error);
			callback(error?.message);
        }
	},


	register: async (name, email, password) => {
        const response = await noAuthAPI.post("auth/signup", {
			name,
            email,
            password
        });

        return response
	},

	

	login: async (email, password) => {
		const response = await noAuthAPI.post("/auth/login", {
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


	connectLinkedin: async () => {
        const response = await noAuthAPI.get("auth/connect/linkedin");
        return response
	},


	GetLinkedinAccessToken: async (code) => {
        const response = await noAuthAPI.post("auth/linkedin/token", {
			code,
		});
        return response;
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


export default AuthService;
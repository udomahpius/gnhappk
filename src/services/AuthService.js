import { noAuthAPI } from "../config/api";
import api from "../config/api";


const AuthService = {
	waitForAuthorization: async (callback) => {
		try {
			const response = await noAuthAPI.get("/users");
			// return response;

            callback(response.data.data);
        } catch (error) {
			console.log(error);
			callback(error?.message);
        }
	},





	register: async (name, phone, password) => {
        const response = await noAuthAPI.post("auth/signup", {
			name,
            phone,
            password
        });

        return response
	},

	

	login: async (phone, password) => {
		const response = await noAuthAPI.post("/auth/login", {
            phone,
            password
        });

		return response;
	},


	verifyEmail: async (token, email) => {
        const response = await noAuthAPI.post("auth/verify-email", {
            token,
			email
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


	

	logout: async () =>  {
		const response = await noAuthAPI.get("auth/logout");
        return response;
	}
}


export default AuthService;
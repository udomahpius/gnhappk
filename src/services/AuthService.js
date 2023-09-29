import { noAuthAPI } from "../config/api";
import api from "../config/api";


const AuthService = {
	waitForAuthorization: async (callback) => {
		try {
            const response = JSON.parse(localStorage.getItem("setly_user"))

            console.log(response);

            callback(response);
        } catch (error) {
			console.log(error);
			callback(error?.message);
        }
	},


	register: async (first_name, last_name, email, password, company, industry) => {
        const response = await noAuthAPI.post("auth/signup", {
			first_name,
			last_name,
            email,
            password,
			company,
			industry
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
		localStorage.removeItem("setly_user");
        return response;
	}
}


export default AuthService;
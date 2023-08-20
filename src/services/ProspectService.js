import { noAuthAPI } from "../config/api";

const ProspectService = {
	fetchProspects: async () => {
        const response = await noAuthAPI.get("/prospect");
        return response;
	}
}


export default ProspectService;
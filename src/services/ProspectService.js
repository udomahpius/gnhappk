import { noAuthAPI } from "../config/api";

const ProspectService = {
	fetchProspects: async () => {
        const response = await noAuthAPI.get("/prospects");
        return response;
        }
}


export default ProspectService;
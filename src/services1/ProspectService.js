import { noAuthAPI } from "../config/api";

const ProspectService = {
	listProspects: async () => {
                const response = await noAuthAPI.get("/prospects");
                return response;
        },

        fetchProspect: async (handle) => {
                const response = await noAuthAPI.get(`/prospects/${handle}`);
                return response;
        }
}


export default ProspectService;
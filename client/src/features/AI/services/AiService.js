import * as api from '../api/AiRequest';

export const generateStatements = async (data) => {
    const response = await api.generateStatements(data);
    if (response && response.data) {
        //return response.data;
        return await createPlayers(response.data);
    }
}

const createPlayers = async (data) => {    
    return await api.createPlayers(data);
}
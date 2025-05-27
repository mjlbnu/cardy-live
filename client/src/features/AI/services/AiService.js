import * as api from '../api/AiRequest';

const saveStatements = async (data) => {    
    return await api.saveStatementsList(data);
}

export const generateStatements = async (data) => {
    const response = await api.generateStatements(data);
    if (response && response.data) {
        return response.data;
        //await saveStatements(response.data);
    }
}
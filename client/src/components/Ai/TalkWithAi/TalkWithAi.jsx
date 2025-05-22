import { useState } from 'react';
import api from '../../../api/AiRequest';
import './TalkWithAi.css';

function TalkWithAi() {

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        setLoading(true);
        try {
            const response = await api.get(`/ask-ai-with-options`, {
                params: { prompt }
            });
            const data = response.data;
            setResponse(data);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className='TalkWithAi'>
            <h2>Talk with AI</h2>
            <input
                type='text'
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='Ask me anything...'
                disabled={loading}
            />
            {loading ? (
                <span className="loader"></span>
            ) : (
                <button
                    onClick={askAI}
                    disabled={loading}>
                    Ask AI
                </button>
            )}
            <div className='output'>
                {!loading && response && <p>{response}</p>}
            </div>
        </div>
    );
}

export default TalkWithAi;
import * as api from '../../api/AiRequest';
import './TalkWithAi.css';
import { useEffect, useState } from 'react';

// TypewriterText fora da função principal
function TypewriterText({ text, speed = 30 }) {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        setDisplayed('');
        if (!text) return;
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed((prev) => prev + text[i]);
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return <p className="typewriter">{displayed}</p>;
}

function TalkWithAi() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const askAI = async () => {
        setError(null);
        setLoading(true);
        try {
            const userPrompt = prompt.trim() || "Olá!";
            const response = await api.getAIResponse(userPrompt);
            const data = response.data;
            setResponse(data);
        } catch (error) {
            setError("Failed to fetch AI response. Please try again later.");
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
                <button className='call-ai-button'
                    onClick={askAI}
                    disabled={loading}>
                    Ask AI
                </button>
            )}
            <div className='output'>
                {/* Só renderiza TypewriterText se houver resposta */}
                {!loading && response && <TypewriterText key={response} text={response} />}
                {/* Exibe mensagem de erro se houver */}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}

export default TalkWithAi;
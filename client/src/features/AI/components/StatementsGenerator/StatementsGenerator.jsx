import { useState } from 'react';
import * as service from '../../services/AiService';

function StatementsGenerator() {
    const [names, setNames] = useState("");
    const [loading, setLoading] = useState(false);

    const generateStatements = async () => {
        setLoading(true);
        try {
            const response = await service.generateStatements(names);
            const data = response;
            console.log("Generated Statements:", data);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='StatementsGenerator'>
            <h2>Statements generator</h2>
            <input
                type='text'
                value={names}
                onChange={(e) => setNames(e.target.value)}
                placeholder='Enter names separated by commas'
                disabled={loading}
            />
            {loading ? (
                <span className="loader"></span>
            ) : (
                <button
                    onClick={generateStatements}
                    disabled={loading}>
                    Generate statements
                </button>
            )}
        </div>
    );
}

export default StatementsGenerator;
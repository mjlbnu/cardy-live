import { useState } from 'react';
import * as service from '../../services/AiService';
import './StatementsGenerator.css';

function StatementsGenerator() {
    const [names, setNames] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateStatements = async () => {
        setError(null);
        if (!names.trim()) {
            setError("Please enter at least one name.");
            return;
        }
        setLoading(true);
        try {
            const response = await service.generateStatements(names.trim());
            console.log("Generated Statements:", response);
        } catch (error) {
            setError("Failed to generate statements. Please try again later.");
            console.error("Error fetching AI response:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='StatementsGenerator'>
            <h2>Players generator</h2>
            <input
                type='text'
                value={names}
                onChange={(e) => setNames(e.target.value)}
                placeholder='Enter names separated by commas'
                disabled={loading}
            />
            {loading ? (
                <span className="loader loader-in"></span>
            ) : (
                <button className='call-ai-button'
                    onClick={generateStatements}
                    disabled={loading}>
                    Generate statements
                </button>
            )}
            <div className='output'>
                {error && <p className='error'>{error}</p>}
                {!error && !loading && <p className='success'>Statements generated successfully!</p>}
            </div>
        </div>
    );
}

export default StatementsGenerator;
import { useState } from 'react';
import * as service from '../../services/AiService';
import './StatementsGenerator.css';

function StatementsGenerator() {
    const [names, setNames] = useState("");
    const [loading, setLoading] = useState(false);

    const generateStatements = async () => {
        if (!names.trim()) {
            alert("Please enter at least one name.");
            return;
        }
        setLoading(true);
        try {
            const response = await service.generateStatements(names.trim());
            console.log("Generated Statements:", response);
        } catch (error) {
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
                <span className="loader"></span>
            ) : (
                <button className='generate-statements-button'
                    onClick={generateStatements}
                    disabled={loading}>
                    Generate statements
                </button>
            )}
        </div>
    );
}

export default StatementsGenerator;
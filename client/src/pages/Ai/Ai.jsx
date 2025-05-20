import { useState } from 'react';
import './Ai.css';

function Ai() {

    const [activeTab, setActiveTab] = useState('ask-ai');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='Ai'>
            <button
                className={activeTab === "ask-ai" ? "active" : ""}
                onClick={() => handleTabChange("ask-ai")}>Talk with AI</button>
            <button
                className={activeTab === "statements-generator" ? "active" : ""}
                onClick={() => handleTabChange("statements-generator")}>Generate Statements</button>
            <button
                className={activeTab === "image-generator" ? "active" : ""}
                onClick={() => handleTabChange("image-generator")}>Generate Images</button>
            <div>
                {activeTab === 'ask-ai' && <div>Ask AI Component</div>}
                {activeTab === 'statements-generator' && <div>Statements Generator Component</div>}
                {activeTab === 'image-generator' && <div>Image Generator Component</div>}
            </div>
        </div>
    );
}

export default Ai;
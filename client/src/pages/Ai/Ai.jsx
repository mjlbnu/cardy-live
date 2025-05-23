import { useState } from 'react';
import './Ai.css';
import TalkWithAi from '../../components/Ai/TalkWithAi/TalkWithAi.jsx';
import StatementsGenerator from '../../components/Ai/StatementsGenerator/StatementsGenerator.jsx';
import ImageGenerator from '../../components/Ai/ImageGenerator/ImageGenerator.jsx';

function Ai() {

    const [activeTab, setActiveTab] = useState('ask-ai');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='Ai'>
            <button
                className={activeTab === "ask-ai" ? "active" : ""}
                onClick={() => handleTabChange("ask-ai")}
                disabled={activeTab === "ask-ai"}>
                Talk with AI
            </button>
            <button
                className={activeTab === "statements-generator" ? "active" : ""}
                onClick={() => handleTabChange("statements-generator")}>Generate Statements
            </button>
            <button
                className={activeTab === "image-generator" ? "active" : ""}
                onClick={() => handleTabChange("image-generator")}>Generate Images
            </button>
            <div>
                {activeTab === 'ask-ai' && <TalkWithAi />}
                {activeTab === 'statements-generator' && <StatementsGenerator />}
                {activeTab === 'image-generator' && <ImageGenerator />}
            </div>
        </div>
    );
}

export default Ai;
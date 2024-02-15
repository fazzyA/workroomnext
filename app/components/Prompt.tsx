'use client'
import React, { useState } from 'react';

function AIPrompt() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    async function getChatGPTResponse(prompt: string) {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY_HERE',
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 100,  // Adjust as needed
                model: 'text-davinci-002',  // Specify the model
            }),
        });
        const data = await response.json();
        return data.choices[0].text.trim();
    }
    
    async function handleGenerateResponse() {
        const response = await getChatGPTResponse(input);
        setOutput(response);
    }

    return (
        <div>
            <textarea className='promptbox' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleGenerateResponse}>Generate Response</button>
            <p>{output}</p>
        </div>
    );
}

export default AIPrompt;

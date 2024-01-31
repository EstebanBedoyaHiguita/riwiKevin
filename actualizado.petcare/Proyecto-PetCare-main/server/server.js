import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;
const DEEPL_API_KEY = 'beded96f-603b-47d7-a7c7-cfbcb57f6243:fx';

app.use(cors());

app.use(bodyParser.json());

app.post('', async (req, res) => {
    const { text, target_lang, tag_handling } = req.body;
    const apiUrl = 'https://api-free.deepl.com/v2/translate';
    const formData = new URLSearchParams();
    formData.append('text', text);
    formData.append('target_lang', target_lang);
    formData.append('tag_handling', tag_handling);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is listening on port ${PORT}`);
});

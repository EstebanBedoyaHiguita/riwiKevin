class DeepLProxy {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async translate(text, target_lang, tag_handling) {
        const url = `${this.baseUrl}`;
        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    text: text,
                    target_lang: target_lang,
                    tag_handling: tag_handling
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }
}


const deepLProxy = new DeepLProxy('http://localhost:3000'); // Cambia la URL por la dirección de tu servidor proxy

const text = `
<document>
    <meta>
      <title>A document's title</title>
    </meta>
    <content>
      <par>This is the first sentence. Followed by a second one.</par>
      <par>This is the third sentence.</par>
    </content>
  </document>`;
const targetLang = 'ES';
const tagHandling = 'html';

deepLProxy.translate(text, targetLang, tagHandling)
    .then(response => console.log('Respuesta del servidor:', response.translations[0].text))
    .catch(error => console.error('Error al realizar la solicitud de traducción:', error));

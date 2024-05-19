// pages/api/zapier-proxy.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Forward the request to the Zapier webhook
        const zapierRes = await fetch('https://hooks.zapier.com/hooks/catch/14518470/3715b4t/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers Zapier expects (if any)
          },
          body: JSON.stringify(req.body),
        });
  
        // If the request was successful, send back the response
        if (zapierRes.ok) {
          const result = await zapierRes.json();
          res.status(200).json(result);
        } else {
          // If there was an error, send back the error response
          const errorResult = await zapierRes.text();
          res.status(zapierRes.status).json({ error: errorResult });
        }
      } catch (error) {
        // Handle any other errors
        res.status(500).json({ error: error.message });
      }
    } else {
      // Handle any non-POST requests
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
  
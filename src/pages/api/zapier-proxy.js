export default async function handler(req, res) {
  // List of allowed origins
  const allowedOrigins = [
    'https://www.greenviewsolutions.net',
    'http://greenviewsolutions.net',
    'http://localhost:3000',
    'https://localhost:3000'
  ];

  // Get the origin of the request
  const origin = req.headers.origin;

  // Set CORS headers if the origin is allowed
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    console.log(`Origin ${origin} not allowed`);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      console.log('Forwarding request to Zapier');
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
        console.log('Success:', result);
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
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(405).end('Method Not Allowed');
  }
}

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const channelLink = parsedUrl.query.channel;

  // Your logic to dynamically set the cookie based on the channel link
  const dynamicCookie = getDynamicCookie(channelLink);

  // M3U8 data
  const m3u8Data = {
    name: 'my channel',
    channels_amount: 2,
    updated_on: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    channels: [
      {
        category_name: 'test',
        name: 'my channel',
        logo: 'https://image.tsports.com/images/test/mobile_logo/1705486440-Live-2.jpg',
        link: channelLink,
        headers: {
          Host: 'live-cdn.tsports.com',
          'User-agent': 'https://github.com/byte-capsule (Linux;Android 14)',
          Cookie: `Edge-Cache-Cookie=${dynamicCookie}`,
        },
      },
      // Add more channels if needed
    ],
  };

  // Convert object to JSON
  const jsonOutput = JSON.stringify(m3u8Data, null, 2);

  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Adjust as needed
  });

  // Send JSON response
  res.end(jsonOutput);
});

// Replace this function with your logic to dynamically set the cookie
function getDynamicCookie(channelLink) {
  // Your logic to dynamically set the cookie based on the channel link
  // For example, fetching from a database or an API
  return 'Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9saXZlLWNkbi50c3BvcnRzLmNvbS8:Expires=1708504077:KeyName=tsports-ed25519-01:Signature=-na1Ohj9p5fsgo_6DeLuXKTHwBsKNljwqhIfGx5TvRri7xqxPiIP4QVFo-Dbdi6u2ZzKjrnR6w0GX25kLq23CQ';
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

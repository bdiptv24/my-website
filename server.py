from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import json
from datetime import datetime

class M3U8Server(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)
        channel_link = query_params.get('channel', [''])[0]

        # Your logic to dynamically set the cookie based on the channel link
        dynamic_cookie = self.get_dynamic_cookie(channel_link)

        # M3U8 data
        m3u8_data = {
            'name': 'my channel',
            'channels_amount': 2,
            'updated_on': datetime.utcnow().strftime('%d-%m-%Y on %I:%M:%S %p 🍙'),
            'channels': [
                {
                    'category_name': 'test',
                    'name': 'my channel',
                    'logo': 'https://image.tsports.com/images/test/mobile_logo/1705486440-Live-2.jpg',
                    'link': channel_link,
                    'headers': {
                        'Host': 'live-cdn.tsports.com',
                        'User-agent': 'https://github.com/byte-capsule (Linux;Android 14)',
                        'Cookie': f'Edge-Cache-Cookie={dynamic_cookie}',
                    },
                },
                # Add more channels if needed
            ],
        }

        # Convert dictionary to JSON
        json_output = json.dumps(m3u8_data, indent=2)

        # Set response headers
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')  # Adjust as needed
        self.end_headers()

        # Send JSON response
        self.wfile.write(json_output.encode('utf-8'))

    # Replace this method with your logic to dynamically set the cookie
    def get_dynamic_cookie(self, channel_link):
        # Your logic to dynamically set the cookie based on the channel link
        # For example, fetching from a database or an API
        return 'Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9saXZlLWNkbi50c3BvcnRzLmNvbS8:Expires=1708504077:KeyName=tsports-ed25519-01:Signature=-na1Ohj9p5fsgo_6DeLuXKTHwBsKNljwqhIfGx5TvRri7xqxPiIP4QVFo-Dbdi6u2ZzKjrnR6w0GX25kLq23CQ'

if __name__ == '__main__':
    server_address = ('', 3000)
    httpd = HTTPServer(server_address, M3U8Server)
    print('Server is running on port 3000')
    httpd.serve_forever()

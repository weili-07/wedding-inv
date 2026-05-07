#!/usr/bin/env python3
"""Simple HTTP server for local testing - Python version"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 3000

class WeddingHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), WeddingHandler) as httpd:
        print(f"\n✨ Wedding Invitation Server Running")
        print(f"📍 Open: http://localhost:{PORT}")
        print(f"🎵 Music will persist across pages!")
        print(f"Press Ctrl+C to stop\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✋ Server stopped")

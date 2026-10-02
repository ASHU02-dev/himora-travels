import os
from flask import Flask, send_from_directory

current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(current_dir, '..'))

app = Flask(__name__, static_folder=root_dir, static_url_path='')

@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

@app.route('/')
def home():
    return send_from_directory(root_dir, 'index.html', max_age=0)

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(root_dir, path)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)

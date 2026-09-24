import os
from flask import Flask, send_from_directory

# Fallback in case Render dashboard has Root Directory set to 'himora'
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(current_dir, '..'))

app = Flask(__name__, static_folder=root_dir, static_url_path='')

@app.route('/')
def home():
    return send_from_directory(root_dir, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(root_dir, path)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)

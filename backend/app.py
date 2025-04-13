from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from email_utils import send_email

# Load environment variables
load_dotenv()

# Create the app
app = Flask(__name__)
CORS(app)

# ✅ Test route (GET /)
@app.route('/', methods=['GET'])
def home():
    return 'Backend is running!', 200

# 🚀 Contact form endpoint (POST /api/contact)
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not (name and email and message):
        return jsonify({'error': 'Missing fields'}), 400

    try:
        send_email(name, email, message)
        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# 🔥 Start the app
if __name__ == '__main__':
    app.run(debug=True)
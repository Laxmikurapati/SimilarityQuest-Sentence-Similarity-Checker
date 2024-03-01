from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer, util
import torch
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the Sentence Transformer model
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

@app.route('/calculate_similarity', methods=['POST'])
def calculate_similarity():
    try:
        data = request.get_json()
        sentence1 = data.get('sentence1', '')
        sentence2 = data.get('sentence2', '')

        # Encode the input sentences to obtain embeddings
        embeddings = model.encode([sentence1, sentence2])

        # Calculate cosine similarity between the embeddings
        similarity_score = util.pytorch_cos_sim(embeddings[0].reshape(1, -1), embeddings[1].reshape(1, -1))

        return jsonify({'similarity_score': similarity_score.item()})
    except Exception as e:
        print('Error:', e)
        return jsonify({'error': 'An error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

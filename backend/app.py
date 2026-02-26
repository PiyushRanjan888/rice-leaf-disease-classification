from flask_cors import CORS
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image

app = Flask(__name__)
CORS(app)
model = load_model("rice_model.h5")

class_names = ['Brown_spot','Bacterial_Blight','Healthy','Leaf_Blast']

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    img = Image.open(file).resize((224,224))
    img = np.array(img)/255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)
    result = class_names[np.argmax(prediction)]

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
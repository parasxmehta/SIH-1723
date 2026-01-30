from flask import Flask, request, jsonify
from flask_cors import CORS
import os, pickle, traceback
import pandas as pd

# Create app
app = Flask(__name__)
CORS(app)  


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, 'models')

# Load models & scaler
try:
    with open(os.path.join(MODEL_DIR, 'model_uts.pkl'), 'rb') as f:
        model_uts = pickle.load(f)
    with open(os.path.join(MODEL_DIR, 'model_elongation.pkl'), 'rb') as f:
        model_elongation = pickle.load(f)
    with open(os.path.join(MODEL_DIR, 'model_conductivity.pkl'), 'rb') as f:
        model_conductivity = pickle.load(f)
    with open(os.path.join(MODEL_DIR, 'scaler.pkl'), 'rb') as f:
        scaler = pickle.load(f)
    print("✅ Models and scaler loaded successfully.")
except Exception:
    print("❌ Failed to load models/scaler:")
    traceback.print_exc()
    

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        casting_temp = data.get('casting_temp')
        rolling_speed = data.get('rolling_speed')
        cooling_rate = data.get('cooling_rate')

        if casting_temp is None or rolling_speed is None or cooling_rate is None:
            return jsonify({'error': 'Missing input values'}), 400

        input_df = pd.DataFrame({
            'Casting_Temperature_C': [casting_temp],
            'Rolling_Speed_m_min': [rolling_speed],
            'Cooling_Rate_C_s': [cooling_rate]
        })

        
        input_scaled = scaler.transform(input_df)

        uts_pred = model_uts.predict(input_scaled)[0]
        elong_pred = model_elongation.predict(input_scaled)[0]
        cond_pred = model_conductivity.predict(input_scaled)[0]

        return jsonify({
            'uts': float(uts_pred),
            'elongation': float(elong_pred),
            'conductivity': float(cond_pred)
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
   
    app.run(debug=True)

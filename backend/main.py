import uvicorn
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import pickle
import shutil
import uuid
import os
from sklearn.neighbors import NearestNeighbors
from imgSearch import extract_features
from PIL import Image
import cv2

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


print("Loading feature data...")
with open("models/PPL_Images_features.pkl", "rb") as f:
    features = pickle.load(f)

with open("models/PPLfilenames.pkl", "rb") as f:
    filenames = pickle.load(f)

features = np.array(features)


neighbors = NearestNeighbors(n_neighbors=10, metric="euclidean")
neighbors.fit(features)

print("Model loaded successfully!")


@app.post("/search")
async def search_image(image: UploadFile = File(...)):

    # saving uploaded image
    temp_name = f"uploads/{uuid.uuid4().hex}.jpg"
    os.makedirs("uploads", exist_ok=True)

    with open(temp_name, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    # feature extraction of the uploaded image
    try:
        query_vector = extract_features(temp_name)
    except Exception as e:
        return {"error": f"Feature extraction failed: {str(e)}"}

    # nearest neighbor search
    distances, indices = neighbors.kneighbors([query_vector])

    results = []
    for idx, dist in zip(indices[0], distances[0]):
        result_path = filenames[idx]
        results.append({
            "image_path": result_path,
            "similarity": float(1 / (1 + dist)),
            "distance": float(dist)
        })

    # remove uploaded image
    os.remove(temp_name)

    return {
        "query_image": temp_name,
        "results": results
    }

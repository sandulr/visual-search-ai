import numpy as np
import pickle as pkl
import tensorflow as tf
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import GlobalMaxPool2D
from sklearn.neighbors import NearestNeighbors
import os
from numpy.linalg import norm
import json

filenames = []
for file in os.listdir('../../media/images'):
    filenames.append(os.path.join('../../media/images', file))

model = ResNet50(weights='imagenet', include_top=False,
                 input_shape=(224, 224, 3))
model.trainable = False
model = tf.keras.models.Sequential([model, GlobalMaxPool2D()])

model.summary()


def extract_features(image_path, model):
    
    img = image.load_img(image_path, target_size=(224, 224))

    img_array = image.img_to_array(img)
    img_expand_dim = np.expand_dims(img_array, axis=0)

    img_preprocess = preprocess_input(img_expand_dim)

    result = model.predict(img_preprocess).flatten()

    norm_result = result / norm(result)

    return norm_result

"""
image_features = []

for file in filenames:
    image_features.append(extract_features(file, model))

pkl.dump(image_features, open('imageFeatures.pkl', 'wb'))
pkl.dump(filenames, open('filenames.pkl', 'wb'))

image_features = pkl.load(open('imageFeatures.pkl', 'rb'))
filenames = pkl.load(open('filenames.pkl', 'rb'))

n_neighbors = min(5, len(image_features))
neighbors = NearestNeighbors(
    n_neighbors=n_neighbors, algorithm='brute', metric='euclidean')
neighbors.fit(image_features)


def get_image_recommendations(image_path, model, neighbors, filenames):

    input_image = extract_features(image_path, model)
    distance, indices = neighbors.kneighbors([input_image])

    recommendations = []

    for i, idx in enumerate(indices[0]):
        recommended_image = filenames[idx]
        sim_distance = float(distance[0][i])

        recommendations.append({
            "image": recommended_image,
            "distance": sim_distance
        })
    
    return json.dumps(recommendations, indent=4)

"""
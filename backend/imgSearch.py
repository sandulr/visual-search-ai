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


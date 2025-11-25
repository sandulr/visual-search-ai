
---

# **Intelligent Visual Search AI**

A modern **AI-powered visual search engine** that understands images and retrieves visually similar results in real time.
Built using **TensorFlow**, **FastAPI**, and **Next.js**, this project blends deep learning, high-performance backend architecture, and a smooth, responsive, animation-rich frontend experience.

---

## 📌 **Project Summary**

This system performs **content-based image retrieval (CBIR)** by converting images into feature embeddings and matching them against a precomputed index.
The project demonstrates full-stack engineering across:

* Deep learning inference
* Image feature extraction
* Vector similarity search
* High-performance API development
* Modern frontend design with professional UI/UX

It captures the workflow of a real-world AI product from backend intelligence to polished user interface.

---

## 🧠 **How It Works**

### **1. Image Preprocessing**

The uploaded image is resized, normalized, and converted into a tensor suitable for inference.

### **2. Deep Feature Extraction (TensorFlow)**

A trained CNN encodes the image into a **high-dimensional embedding** representing its visual characteristics.

### **3. Similarity Search (KNN)**

Two precomputed files are used for retrieval:

* `PPL_Images_features.pkl` — stored feature vectors
* `PPLfilenames.pkl` — image file locations

The backend uses **K-Nearest Neighbors** to find the closest matches.

### **4. FastAPI Backend Service**

The API:

* Accepts an uploaded image
* Extracts its embedding
* Searches the dataset
* Returns a JSON response with similar images

It is optimized for ML workloads using FastAPI’s asynchronous architecture.

### **5. Next.js Frontend**

The UI is built with:

* Next.js App Router
* Tailwind CSS
* Framer Motion animations

Features include drag-and-drop uploading, responsive design, smooth transitions, and animated result rendering.

---

## 🛠️ **Tech Stack**

### **Artificial Intelligence**

* TensorFlow
* Convolutional Neural Networks
* Feature Embeddings
* KNN Similarity Search

### **Backend**

* FastAPI
* Python
* Uvicorn
* Pydantic

### **Frontend**

* Next.js 16
* React
* Tailwind CSS
* Framer Motion

### **Utilities**

* OpenCV
* NumPy
* Scikit-learn
* Pickle for feature storage

---

## 📁 **Project Structure**

```
.
├── backend/
│   ├── main.py
│   ├── extract.py
│   ├── utils/
│   └── models/
│       ├── PPL_Images_features.pkl
│       ├── PPLfilenames.pkl
│
|
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── styles/
|
└── README.md
```

---

## 🚀 **Getting Started**

### **1. Clone Repository**

```bash
git clone https://github.com/sandulr/visual-search-ai.git
cd visual-search-ai
```

---

# **Backend Setup (FastAPI)**

### **2. Create Environment**

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```

### **3. Install Dependencies**

```bash
pip install -r requirements.txt
```

### **4. Run the Server**

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

# **Frontend Setup (Next.js)**

### **5. Install Dependencies**

```bash
cd ../frontend
npm install
```

### **6. Start Development Server**

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 📱 **Features**

* Deep learning–based visual search
* Real-time similarity matching
* Fully responsive interface
* Drag-and-drop image upload
* Modern animated UI using Framer Motion
* Smooth transitions and professional UX
* High-performance FastAPI backend
* Clean separation of frontend and backend layers

---

## 🖼️ **Demo Workflow**

1. Upload an image via drag-and-drop
2. Backend extracts features using TensorFlow
3. KNN retrieves similar images
4. Results appear in an animated grid

---

## 🚧 **Future Improvements**

* GPU-accelerated inference
* Vector database integration (FAISS / Pinecone)
* Multi-image search
* User-specific collections
* Incremental image indexing
* Optional captions or multimodal search

---

## 📄 **License**

MIT License

---

## 🙏 **Acknowledgements**

Thanks to the open-source community powering tools like TensorFlow, FastAPI, and Next.js.

---

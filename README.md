# 🌍 Earth Data Manager

Earth Data Manager is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to manage, authenticate, and analyze data efficiently. The project focuses on secure authentication, role-based access, and scalable data handling with a clean and responsive UI.

- **Live Demo**: [click here](https://earth-frontend.onrender.com/login)

  <img width="1139" height="767" alt="image" src="https://github.com/user-attachments/assets/493a7fbd-d9cf-4890-a8d8-0eaea2d2d7bd" />

  <img width="1463" height="736" alt="image" src="https://github.com/user-attachments/assets/e5382540-d85e-4e72-92ff-3bc9115dc986" />

  <img width="1469" height="808" alt="image" src="https://github.com/user-attachments/assets/58a21e5f-e246-40eb-a35c-2e4f58e5da76" />


    
## 🚀 Features
	•	🔐 User Authentication (Login / Register)
	•	🔑 Password Hashing using bcrypt
	•	👥 Role-Based Access Control (Admin / User)
	•	📊 CRUD Operations on Data
	•	🧭 Protected Routes using Auth Context
	•	🌐 RESTful APIs with Express
	•	🗄️ MongoDB Database Integration
	•	⚡ Fast and responsive UI with React
	•	🧩 Modular & Scalable Project Structure



## 🛠️ Tech Stack

Frontend

	•	React.js
	•	React Router DOM
	•	Context API (Authentication)
	•	Tailwind CSS 

Backend

	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	bcrypt


## 📂 Project Structure
```
earth-project/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── schema/
│   └── main.js
│
├── frontend/
│   ├── client/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   ├── lib/
│   │   └── App.jsx
│   └── index.jsx
│
└── README.md
```


## ⚙️ Installation & Setup

1️⃣ Clone the Repository
```
git clone https://github.com/prasad-abhay/Earth.git
cd Earth
```

2️⃣ Backend Setup
```
cd backend
npm install
npm run dev
```
Create a .env file in the backend folder:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```
3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
```


## 🔐 Authentication Flow

	•	Passwords are hashed using bcrypt before storing in MongoDB
	•	Token is stored securely and validated for protected routes
	•	Unauthorized access redirects to login page


## 📌 Future Enhancements

	•	📈 Dashboard with analytics
	•	📤 CSV / Excel data import & export
	•	🧾 Activity logs
	•	🔔 Notification system
	•	🧑‍💼 Advanced admin controls
	•	☁️ Cloud deployment (AWS / Vercel / Render)



## 🧪 API Testing

You can test APIs using:

	•	Postman
	•	Thunder Client



## 👨‍💻 Author

Abhay Prasad
Full Stack Developer (MERN)

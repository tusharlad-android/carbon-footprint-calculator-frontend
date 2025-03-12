🌍 Carbon Footprint Calculator - Frontend
A user-friendly web interface for calculating carbon footprint. Built with React.js and integrates with the backend API.

🚀 Live Demo
🔗 https://frontend-b8kdlfb6y-tushars-projects-7b786313.vercel.app

🛠 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/tusharlad-android/carbon-footprint-calculator-frontend.git
cd carbon-footprint-calculator-frontend

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables
Create a .env file in the root folder and add:

REACT_APP_API_URL=http://localhost:5000/api
(Replace http://localhost:5000/api with your backend URL after deployment.)

4️⃣ Run the Frontend

npm start
The app will start at http://localhost:3000

📌 Features
✅ User-friendly UI
✅ Calculates carbon footprint based on activities
✅ Real-time API integration

🌐 API Integration
🔹 Calculate Carbon Footprint
Endpoint: POST /api/calculate

Request Body:
{
  "travelType": "driving",
  "distance": 50,
  "frequency": "petrol",
  "transportType":"personal",
}
Response:
{
  "footprint": "5.2 kg CO2"
}

🚀 Deployment on Vercel

1️⃣ Build the Project

npm run build

2️⃣ Deploy to Vercel

vercel
(If you haven’t installed Vercel CLI, install it using npm i -g vercel.)

👨‍💻 Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js


🚀 Made with ❤️ by Tushar lad 🎉

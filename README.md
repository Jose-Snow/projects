# 🌟 Project Collection

A collection of three interactive web applications showcasing frontend development skills, API integration, and secure backend architecture.

🔗 **Live Demo:** [Browse All Projects](https://jose-snow.github.io/projects/Weather-app/weather-app.html)

---

## 📱 Projects Overview

| Project | Live Demo | Tech Stack |
|---------|-----------|-------------|
| **Weather App** | [View Live](https://jose-snow.github.io/projects/Weather-app/weather-app.html) | HTML, CSS, JavaScript, Node.js, Express, OpenWeatherMap API |
| **Chuck Norris Jokes** | [View Live](https://jose-snow.github.io/projects/chuck-norris-joke-app/chuck-norris-jokes.html) | HTML, CSS, JavaScript, Chuck Norris API |
| **Currency Converter** | [View Live](https://jose-snow.github.io/projects/currency-converter/currency-converter.html) | HTML, CSS, JavaScript, ExchangeRate API |

---

## ☁️ Weather App

A real-time weather application that provides current weather data for any city worldwide.

### Features:
- Search weather by city name
- Displays temperature in Celsius
- Shows weather conditions with dynamic icons
- Includes high/low temperatures
- Responsive design for mobile and desktop
- Secure backend proxy to protect API keys
- Persistent local storage for recent searches
- Error handling with user-friendly messages

### How It Works:
1. User enters a city name
2. Frontend sends request to backend proxy
3. Backend securely forwards request to OpenWeatherMap API
4. Weather data is returned and displayed beautifully

### Tech Details:
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **API:** OpenWeatherMap API
- **Deployment:** GitHub Pages (frontend), Render (backend)

---

## 😄 Chuck Norris Jokes App

A fun application that fetches random Chuck Norris jokes from a public API.

### Features:
- One-click random joke generation
- Clean, card-based UI
- Fast API response time

### Tech Details:
- HTML5, CSS3, JavaScript
- Chuck Norris API (icanhazdadjoke.com)

---

## 💱 Currency Converter

Convert between different world currencies with real-time exchange rates.

### Features:
- Real-time exchange rates
- Support for multiple currencies
- Swap functionality to reverse conversion
- Clean, intuitive interface

### Tech Details:
- HTML5, CSS3, JavaScript
- ExchangeRate API

---

## 🛠️ Local Development

### Prerequisites
- Node.js (for Weather App backend)
- Modern web browser
- Git

### Clone the Repository
```bash
git clone https://github.com/Jose-Snow/projects.git
cd projects

Run Weather App Locally

1. Set up the backend:

```bash
cd weather-proxy-backend
npm install
echo "OPENWEATHER_API_KEY=your_api_key_here" > .env
node server.js
```

Server runs on http://localhost:3001

1. Run the frontend:

· Open Weather-app/weather-app.html in your browser
· Or use Live Server in VS Code

Run Other Apps Locally

Simply open the HTML files directly in your browser:

· chuck-norris-joke-app/chuck-norris-jokes.html
· currency-converter/currency-converter.html

---

🚀 Deployment

Component Platform URL
Frontend GitHub Pages https://jose-snow.github.io/projects/
Weather Backend Render https://weather-backend-7z41.onrender.com

Note: Render's free tier spins down after 15 minutes of inactivity. First request may take 10-15 seconds to wake up.

---

📂 Project Structure

```
projects/
├── Weather-app/
│   ├── weather-app.html
│   ├── weather-app.js
│   └── weather-style.css
├── chuck-norris-joke-app/
│   ├── chuck-norris-jokes.html
│   ├── chuck-style.css
│   └── norris.jpg
├── currency-converter/
│   ├── currency-converter.html
│   ├── currency-converter.js
│   └── currency-converter.css
├── weather-proxy-backend/
│   ├── server.js
│   ├── package.json
│   └── .env (not committed)
├── .gitignore
└── README.md
```

---

🔐 Security

· API keys are never exposed in frontend code
· Weather app uses a backend proxy to secure API credentials
· Environment variables for sensitive data
· .env and node_modules are gitignored

---

👨‍💻 Author

Jose Snow

· GitHub: @Jose-Snow
· Portfolio: View Live Projects

---

📄 License

This project is open source for learning and portfolio purposes.

---

🙏 Acknowledgments

· OpenWeatherMap for weather data
· ExchangeRate API for currency rates
· Chuck Norris API for jokes
· Render for free backend hosting
· GitHub Pages for frontend hosting

```
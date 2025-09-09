# Sentiment Analysis App 🎭📊

A React-based Sentiment Analysis application that detects the sentiment of user-provided text using a Hugging Face pre-trained model. The app displays the sentiment as Positive, Negative, or Neutral, along with a confidence score.

The UI is designed to be bold, modern, and visually appealing, featuring a card-style layout, gradient backgrounds, and color-coded results.

---

## 🚀 Features

- 🔍 Analyze sentiment for any text input.
- 📈 Confidence score displayed for each prediction.
- 🌍 Adaptive display: works with both positive/negative and multiclass models (like 1–5 stars).
- 📱 Responsive, center-aligned layout with bold typography.
- 🎨 Color-coded sentiment results:
  - 🟢 Green = Positive
  - 🔴 Red = Negative
- ⚠️ Error handling for API issues and empty input.

---

## 💻 Technologies Used

- React – Frontend framework. ⚛️
- Axios – HTTP requests to Hugging Face API. 🌐
- Hugging Face API – Pre-trained sentiment analysis model. 🤖
- CSS – For modern styling and layout. 🎨

---

## 📦 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites 🔑

- Node.js and npm installed on your machine. 💻
- A Hugging Face API Key for sentiment analysis. 🗝️

### Installation 🛠️

1. Clone the repository:

   ```bash
   git clone https://github.com/Anjali-A-B/Sentiment-Analysis.git
   cd Sentiment-Analysis/app

2. Install dependencies:

  - Run the following command to install the required dependencies:
    npm install


3. Add your Hugging Face API key:

  - Open SentimentAnalysis.jsx and replace the placeholder API key with your own Hugging Face token:

   Authorization: `Bearer YOUR_HUGGING_FACE_API_KEY`

  - If you don't have one, you can get it from [Hugging Face](https://huggingface.co/settings/tokens).


4. Run the development server:

  - Start the application by running:
    npm run dev
    
This will start the app on [http://localhost:5173](http://localhost:5173). Open this URL in your browser to use the Sentiment Analysis App.

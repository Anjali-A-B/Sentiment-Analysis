import React, { useState } from 'react';
import axios from 'axios';
import './SentimentAnalysis.css';  // Import the CSS file

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => setText(e.target.value);

  const analyzeSentiment = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/distilbert/distilbert-base-uncased-finetuned-sst-2-english',
        { inputs: text },
        {
          headers: { Authorization: `Bearer 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` },
        }
      );

      if (Array.isArray(response.data)) {
        if (Array.isArray(response.data[0])) setResult(response.data[0]);
        else setResult(response.data);
      } else setError('Unexpected API response format.');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Something went wrong with the API');
    } finally {
      setLoading(false);
    }
  };

  const getSentimentColor = (label) => {
    if (!label) return '#fff';
    if (label.toLowerCase().includes('positive')) return '#00c853';
    if (label.toLowerCase().includes('negative')) return '#d50000';
    return '#ffab00';
  };

  return (
    <div className="sentiment-container">
      <div className="sentiment-card">
        <h1>Sentiment Analysis</h1>
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text here..."
          rows="6"
        />
        <button onClick={analyzeSentiment} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Sentiment'}
        </button>

        {error && <div className="error-message">{error}</div>}

        {result && (
          <div className="result-card">
            <h2>Result:</h2>

            {result[0]?.label ? (
              <>
                <p
                  className="sentiment-label"
                  style={{ color: getSentimentColor(result[0].label) }}
                >
                  Sentiment: {result[0].label}
                </p>
                <p className="sentiment-score">
                  Confidence: {(result[0].score * 100).toFixed(2)}%
                </p>
              </>
            ) : (
              <ul>
                {result.map((item, idx) => (
                  <li
                    key={idx}
                    style={{ color: getSentimentColor(item.label) }}
                  >
                    {item.label}: {(item.score * 100).toFixed(1)}%
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysis;

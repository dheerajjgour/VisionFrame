import React, { useState } from "react";
// import "./FeedbackForm.css";

export default function FeedbackForm() {
  const [showForm, setShowForm] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted: " + feedback);
    setFeedback("");
    setShowForm(false);
  };

  return (
    <div>
      {/* Button to open form */}
      <button className="feedback-btn" onClick={() => setShowForm(true)}>
        Give Feedback
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="overlay">
          <div className="form-box">
            <h2>Feedback</h2>

            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Write your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />

              <div className="form-actions">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  className="cancel"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}   
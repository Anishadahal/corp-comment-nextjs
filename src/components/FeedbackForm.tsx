import React from "react";

export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea
        name=""
        placeholder=""
        spellCheck={false}
        id="feedback-textarea"
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the company.
      </label>
      <div>
        <p className="italic">150</p>
        <button>Submit</button>
      </div>
    </form>
  );
}

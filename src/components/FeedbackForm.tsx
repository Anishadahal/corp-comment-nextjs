import React, { useState } from "react";

const MAX_CHARACTERS = 150;

export default function FeedbackForm() {
  const [text, setText] = useState<string>("");

  const charCount = text.length;
  const remainingCharacters = MAX_CHARACTERS - charCount;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(event.target.value);
  };

  return (
    <form className="form">
      <textarea
        name=""
        value={text}
        onChange={handleChange}
        placeholder=""
        spellCheck={false}
        id="feedback-textarea"
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the company.
      </label>
      <div>
        <p className="italic">{remainingCharacters}</p>
        <button>Submit</button>
      </div>
    </form>
  );
}

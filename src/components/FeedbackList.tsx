import React from "react";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          {/* <TriangleUpIcon from radix ui/> */}

          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>

        <div>
          <p>Facebook</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur dolores dolorum enim architecto itaque dolorem?
          </p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  );
}

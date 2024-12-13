import React from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { FeedbackItemType } from "@/lib/type";

export default function FeedbackList({
  isLoading,
  errorMessage,
  feedbackItems,
}: {
  isLoading: boolean;
  errorMessage: string;
  feedbackItems: FeedbackItemType[];
}) {
  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
      ))}
    </ol>
  );
}

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HastagList from "@/components/HastagList";
import { FeedbackItemType } from "@/lib/type";
import { useEffect, useState } from "react";

export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))
      ?.substring(1);

    const newItem: FeedbackItemType = {
      id: new Date().getTime(),
      badgeLetter: companyName?.substring(0, 1).toUpperCase() ?? "",
      company: companyName?.toUpperCase() ?? "",
      daysAgo: 0,
      text: text,
      upvoteCount: 0,
    };
    setFeedbackItems((prev) => [...prev, newItem]);

    //post request
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  useEffect(() => {
    const getFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later!");
        console.warn(error);
      }

      setIsLoading(false);
    };

    getFeedbackItems();
  }, []);

  return (
    <div className="relative flex justify-center h-[850px]">
      <Footer />
      <Container
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={feedbackItems}
        onAddToList={onAddToList}
      />
      <HastagList />
    </div>
  );
}

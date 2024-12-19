import React from "react";
import HashtagItem from "./HashtagItem";
import { useFeedbackItemsContext } from "./contexts/FeedbackItemsContextProvider";

export default function HastagList() {
  const { uniqueCompanyList: companyList, setSelectedCompany } =
    useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          setSelectedCompany={setSelectedCompany}
        />
      ))}
    </ul>
  );
}

import React from "react";
import HashtagItem from "./HashtagItem";

export default function HastagList({
  companyList,
  setSelectedCompany,
}: {
  companyList: string[];
  setSelectedCompany: (str: string) => void;
}) {
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

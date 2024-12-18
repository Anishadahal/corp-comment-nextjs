import React from "react";

export default function HashtagItem({
  company,
  setSelectedCompany,
}: {
  company: string;
  setSelectedCompany: (_: string) => void;
}) {
  return (
    <li>
      <button
        value={company}
        onClick={(e) => {
          setSelectedCompany(e.currentTarget.value);
        }}
      >
        #{company.toLowerCase()}
      </button>
    </li>
  );
}

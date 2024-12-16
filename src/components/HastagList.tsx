import React from "react";

export default function HastagList({ companyList }: { companyList: string[] }) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <li key={company}>
          <button>#{company}</button>
        </li>
      ))}
    </ul>
  );
}

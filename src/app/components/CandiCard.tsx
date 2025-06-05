import React from "react";

const CandiCard = ({ firstName, lastName, parish }: CandiCardProps) => {
  return (
    <div className="candi-card">
      <h2 className="candi-card__name">
        {firstName} {lastName}
      </h2>
      <p className="candi-card__parish">{parish}</p>
    </div>
  );
};

export default CandiCard;

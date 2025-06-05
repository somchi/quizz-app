import React from "react";

const CandiCard = ({
  firstName,
  lastName,
  parish,
  imageUrl,
}: CandiCardProps) => {
  return (
    <div className="candi-card">
      <img
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        className="candi-card__image"
      />
      <h2 className="candi-card__name">
        {firstName} {lastName}
      </h2>
      <p className="candi-card__parish">{parish}</p>
    </div>
  );
};

export default CandiCard;

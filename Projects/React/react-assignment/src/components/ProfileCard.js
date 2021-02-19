import React from "react";

const ProfileCard = ({ profile, photo }) => {
  const { firstName, lastName } = profile;
  return (
    <>
      <div class="card-wrapper">
        <div class="card">
          <div class="card__image">
            <img
              src={photo.url}
              alt="profile"
              onError={(e) => (e.target.src = "defaultImage.jpg")}
            />
          </div>

          <div class="card__details">
            <h2>
              {firstName} {lastName}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

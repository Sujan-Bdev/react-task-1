import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";
import Spinner from "./components/Spinner";

const priority_rank = [
  "google",
  "linkedin",
  "facebook",
  "twitter",
  "office365",
];

const url =
  "https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json";

function getPhotoAsPriorityRank(photos) {
  for (const priority of priority_rank) {
    const photo = photos.find((photo) => photo.source === priority);
    if (photo) {
      return photo;
    }
  }
  return;
}

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(url);
      setLoading(false);
      setProfiles(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>React Assignment</h1>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          {profiles.map((profile) => {
            const photo = getPhotoAsPriorityRank(profile.photos);
            return <ProfileCard profile={profile} photo={photo} />;
          })}
        </main>
      )}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PhotoList from "./PhotoList";
import unsplash from "../apis/unsplash";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const searchTerm = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    setPhotos(res.data.results);
  };

  //  set default search term
  const defaultTerm = "mountains";
  useEffect(() => {
    searchTerm(defaultTerm);
  }, []);

  return (
    <div className="photos ui container">
      <SearchBar label="Search a photo" onSubmit={searchTerm} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default Photos;

import React, { useState } from "react";
import axios from "axios";
import FileType from "file-type";
import exif from "exif-js";
import tesseract from "tesseract.js";
import { reverseImageSearch } from "./reverseImageSearch";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [metadata, setMetadata] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(image);
    fileReader.onload = async () => {
      const buffer = fileReader.result;
      const type = await FileType.fromBuffer(buffer);

      exif.getData(image, function () {
        setMetadata(this.exifdata);
      });

      const imageUrl = URL.createObjectURL(image);
      const text = await tesseract.recognize(imageUrl);

      setSearchResults(await reverseImageSearch(image, type));

      setLoading(false);
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
      {loading ? <div>Loading...</div> : null}
      {metadata ? (
        <div>
          <h2>Metadata:</h2>
          <pre>{JSON.stringify(metadata, null, 2)}</pre>
        </div>
      ) : null}
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.url}>
                <a href={result.url}>{result.url}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default ImageUpload;

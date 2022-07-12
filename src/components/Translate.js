import React, { useState } from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// Data: language options
const options = [
  { label: "Arabic", value: "ar" },
  { label: "Dutch", value: "nl" },
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Hindi", value: "hi" },
  { label: "Italian", value: "it" },
];

const Translation = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(options[0]);

  return (
    <div className="translation ui container ">
      <Input label="Enter some text" onChange={setText} text={text} />
      <Dropdown
        label="language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translation;

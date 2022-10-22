import React, { useState } from "react";
import axios from "axios";

const InputLink = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState([]);

  const postUrl = async (url) => {
    try {
      const res = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      setShortUrl([...shortUrl, res.data]);
      // const data = await res.data;
      // console.log(shortUrl);
      // const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
      //   mode: "no-cors",
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(url),
      // });
      // const data = await res.json();
      // setShortUrl([...shortUrl, data]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(shortUrl);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!url) {
      document.querySelector(".error-message").style.display = "block";
      const URL = document.querySelector("#url");
      URL.classList.add("warning");

      setTimeout(() => {
        document.querySelector(".error-message").style.display = "none";
        URL.classList.remove("warning");
      }, 3000);
    } else {
      postUrl(url);
      setUrl("");
    }
  };
  const copyHandler = (shortLink) => {
    navigator.clipboard.writeText(shortLink);
  };
  return (
    <>
      <div className="white-color"></div>
      <div className="container">
        <div className="input-form">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
            />
            <div className="error-message">Please add a link</div>
          </form>
        </div>
        <button type="submit" onClick={submitHandler}>
          Shorten It!
        </button>
      </div>
      {shortUrl.map((url, index) => (
        <div className="links-container" key={index}>
          <div className="original-link">{url.result.original_link}</div>
          <div className="short-link">{url.result.full_short_link}</div>
          <button
            className="copy"
            onClick={(e) => {
              e.target.innerHTML = "Copied!";
              e.target.style.background = "hsl(257, 27%, 26%)";
              copyHandler(`${url.result.full_short_link}`);
            }}
          >
            Copy
          </button>
        </div>
      ))}
    </>
  );
};

export default InputLink;

import React from "react";
import Button from "./button.js";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => {
  return (
    //<React.Fragment can be return as <> ...</>
    <div id="quote-box">
      {/* Typography from MUI */}

      <Typography id="quote">
        {selectedQuote.quote} - {selectedQuote.author}
      </Typography>

      <a
        id="tumblr-quote"
        title="Post this quote on tumblr!"
        target="_blank"
        rel="noreferrer"
        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=${selectedQuote.author};content=${selectedQuote.quote}.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button`}
      >
        <FontAwesomeIcon icon={faTumblr} />{" "}
      </a>
      <a
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?hashtags=quotes;text=${selectedQuote.quote}--${selectedQuote.author}`}
      >
        <FontAwesomeIcon icon={faTwitter} />{" "}
      </a>

      <Button
        buttonDisplayName="New quote"
        ClickHandler={assignNewQuoteIndex}
      />
    </div>
  );
};

export default QuoteMachine;

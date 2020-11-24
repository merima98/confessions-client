import React, { useState } from "react";
import CreatePost from "../../CreatePost";
import classes from "./Message.css";

function Message(props) {
  const [showRule, setShowRule] = useState(props.clicked);

  function handleShow() {
    setShowRule(!showRule);
  }

  var rules = ` Confessions containing some of the following elements will not be 
  published:
  1. Statement sentences that represent direct hate speech towards the 
  nation,
  religion, vulnerable social group, etc ..
  2. Insults are not allowed on
  any grounds 
  3. Explicit vulgarities, swear words and vulgar names
  sexual organs 
  4. Religious, religious, sectarian and other inappropriate connotations
  5. Pornographic contents 
  6. Statements that indicate violations of the law and the constitution
  (serious crimes) 
  7. Morbid and bizarre statements that can lead to
  public harassment 
  8. Statements calling for aggression and violence 
  9. Repeating Confessions 
  10. Question sentences (eg I fell in love, what
  to work ?, Help ??? and the like) 
  When sending a confession, you should take into account the following: 
  1. This is not a love therapist site 
  2. Statuses,
  which inform other people about the current activities of anonymous 
  individuals
  3. Confessions that are a personal advertisement should be avoided. 
  Tips 
  1. Try to make your confessions original and interesting if they are not 
  already
  honest. 
  2. Try to make confessions grammatically and orthographically correct 
  3. Don't use CAPS LOCK 
  4. Don't try to steal other people's posts, try to be original in your 
  own way 
  5. Strive to make your confession
  be one story (or anecdote) from your life 
  * Also, administrators retain the discretion to publish and censor 
  confessions in order maintaining high quality content on the site.`;

  return showRule ? (
    <textarea
      className={classes.Textarea}
      onClick={handleShow}
      defaultValue={rules}
    />
  ) : (
    <CreatePost />
  );
}
export default Message;

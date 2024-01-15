import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  
  const showByTopic = props.showByTopic
  return (
    <div className="topic-list__item" onClick={() => showByTopic(props.topic.id)}>
      <span className="topic-list__item span">{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;

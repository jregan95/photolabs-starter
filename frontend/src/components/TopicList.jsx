import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {

  const displayAllTopics = (data) => {
    return data.map((topic) => {
      return <TopicListItem key={topic.id} topic={topic} />
    })
  }

  return (
    <div className="top-nav-bar__topic-list">
      
      {displayAllTopics(props.topicData)}
    </div>
  );
};

export default TopicList;

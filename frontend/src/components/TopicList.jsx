import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {

  //Looks through the topics to provides information for each one
  const displayAllTopics = (data, showByTopic) => {
    return data.map((topic) => {
      return <TopicListItem key={topic.id} topic={topic} showByTopic={showByTopic}/>
    })
  }

  return (
    <div className="top-nav-bar__topic-list">
      {displayAllTopics(props.topicData, props.showByTopic)}
    </div>
  );
};

export default TopicList;

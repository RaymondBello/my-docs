import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(props) {
  return (
    <ReactPlayer url={props.url} />
  );
}
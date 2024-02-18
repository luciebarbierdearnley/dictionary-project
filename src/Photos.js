import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="gallery">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

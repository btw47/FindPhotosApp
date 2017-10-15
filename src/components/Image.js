import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Image = props => {
  const { imageList } = props;

  console.log("IMAGE PROPS", imageList);
  const searched = imageList[0];
  console.log("IMAGEPROPS 0", searched);

  let renderList;
  if (searched) {
    renderList = imageList[1].map(a => {
      console.log("MAP", a);
      return (
        <div className="col-sm-2 col-md-offset-1">
          <img
            className="img-responsive"
            key={a.id}
            src={a.urls.small}
            alt="img"
          />
        </div>
      );
    });
  }

  return <div className="row">{renderList}</div>;
};

export default Image;

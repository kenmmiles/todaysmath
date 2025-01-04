import React from "react";

import Title from "./Title";
import Description from "./Description";
import Explanation from "./Explanation";

const TodaysMath: React.FC = () => {
  const today = new Date();
  const day = today.getDate();

  return (
    <>
      <div className="box">
        <Title day={day} />
        <Description day={day} />
        <hr></hr>
        <Explanation day={day} />
      </div>
    </>
  );
};

export default TodaysMath;

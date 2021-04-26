// src/components/Banner/Banner.tsx
import * as React from "react";
import "./index.scss";

interface Props {
  name: string;
}

export default (props: Props): React.ReactElement => {
  //asdfasdf

  return (
    <div className='banner'>
      <span className='banner__text'>Hello {props.name}!</span>
    </div>
  );
};

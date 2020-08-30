import React from "react";
import TitleFetcher from '../container/TitleFetcher';

const UserView = (props) => {
  return (
    <div>
      <h1>Status: {props.loggedStatus}</h1>
      <h2>input for website urls</h2>
      <TitleFetcher />
    </div>
  );
};

export default UserView;

import { useState } from "react";

const User = ({ name, location, gender }) => {
  const [count] = useState(2);
  const [count2] = useState(4);
  return (
    <>
      <div className="user-card">
        <h1>Name:{name}</h1>
        <h1>Location:{location}</h1>
        <h1>Gender:{gender}</h1>
        <h3>count:{count2}</h3>
      </div>
    </>
  );
};
export default User;

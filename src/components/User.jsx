import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="user-info">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Set Count
        </button>
        <span>count is {count}</span>
        <h2>Name: {name}</h2>
        <h3>Location: Haryana</h3>
        <h4>email: monikapant.1feb@gmail.com</h4>
      </div>
    </>
  );
};
export default User;

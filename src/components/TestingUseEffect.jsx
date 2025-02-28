import { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("CHILD USE EFFECT");
  }, []);
  return <></>;
};

const Parent = () => {
  useEffect(() => {
    console.log("PARENT USE EFFECT");
  }, []);
  return (
    <>
      <Child />
    </>
  );
};

export default function TestingUseEffect() {
  useEffect(() => {
    console.log("USE EFFECT OF GRAND PARENT");
  }, []);
  return (
    <>
      <h1>
        <Parent />
      </h1>
    </>
  );
}

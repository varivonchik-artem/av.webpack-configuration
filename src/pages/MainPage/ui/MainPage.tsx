import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    throw new Error();
  }, []);
  return "main-page";
};

export default MainPage;

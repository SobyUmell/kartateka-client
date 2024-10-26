import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes } from "react-router-dom";
export const AppRouter = ({ props }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.isAuth);
  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <Routes>
      <></>
    </Routes>
  );
};

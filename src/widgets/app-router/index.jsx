import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/index";
import { Teka, Auth1 } from "../../pages";
export const AppRouter = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.isAuth);
  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <Routes>
      {auth
        ? privateRoutes.map((route, index) => (
            <Route
              key={index}
              element={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))
        : publicRoutes.map((route, index) => (
            <Route
              key={index}
              element={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
      {auth ? (
        <Route path="*" element={<Teka />} />
      ) : (
        <Route path="*" element={<Auth1 />} />
      )}
    </Routes>
  );
  // Route path='*' - будет переносить нас нас траницу 404
};

import { Profile, Info, Teka, Auth1, Auth2, Auth3 } from "../pages";
export const privateRoutes = [
  { path: "/", component: <Teka />, exact: true },
  { path: "/profile", component: <Profile />, exact: true },
  { path: "/info", component: <Info />, exact: true },
  { path: "/teka", component: <Teka />, exact: true },
];
export const publicRoutes = [
  { path: "/", component: <Auth1 />, exact: true },
  { path: "/auth-1", component: <Auth1 />, exact: true },
  { path: "/auth-2", component: <Auth2 />, exact: true },
  { path: "/auth-3", component: <Auth3 />, exact: true },
];

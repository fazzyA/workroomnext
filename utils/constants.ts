const ROUTES_PATH = {
  // auth pages
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",

  // private pages
  DASHBOARD: "/dashboard",

  // API routes
  API_AUTH_PREFIX: "/api/auth",
};

const publicRoutes = ["/"];

const authRoutes = [ROUTES_PATH.LOGIN, ROUTES_PATH.REGISTER];

export { ROUTES_PATH, publicRoutes, authRoutes };

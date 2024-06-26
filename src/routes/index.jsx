import { useRoutes } from 'react-router-dom';

import AuthenticationRoutes from './AuthenticationRoutes';
import HomeRoutes from './HomeRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([HomeRoutes, AuthenticationRoutes]);
}

import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './ptotected';

export const AppRoutes: React.FC = () => {
  const element = useRoutes([...protectedRoutes]);

  return <>{element}</>;
};
export default AppRoutes;

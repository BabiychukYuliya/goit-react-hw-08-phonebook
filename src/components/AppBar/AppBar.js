import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import {useAuth}   from '../../hooks/useAuth';
import css from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

    return (
      <div>
    <header className={css.header}>
          <Navigation />
    
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
            </Suspense>
            </div>
  );
};
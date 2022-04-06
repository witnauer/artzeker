import { useEffect, useContext } from 'react';
import styles from '../styles/Dashboard.module.css';
import AuthContext from '../stores/authContext';

export default function Dashboard() {
  const { user, authReady } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch(
        '/.netlify/functions/dashboard',
        user && {
          headers: {
            Authorization: 'Bearer ' + user.token.access_token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, authReady]);

  return (
    <div className="inner-container">
      <h1>Dashboard</h1>
    </div>
  );
}

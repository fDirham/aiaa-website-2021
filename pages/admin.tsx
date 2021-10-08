import React, { useEffect, useRef, useState } from "react";
import styles from "styles/Admin.module.scss";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "firebaseApp";
import AddEvent from "components/admin/AddEvent";
import SignIn from "components/admin/SignIn";
import { NextPage } from "next";

const admin: NextPage = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const checkAuthTimer = useRef<ReturnType<typeof setInterval>>();
  const { currentUser } = firebaseAuth;
  useEffect(() => {
    if (!authenticated) {
      checkAuthTimer.current = setInterval(() => {
        if (firebaseAuth.currentUser) setAuthenticated(true);
      }, 1000);
    } else {
      if (checkAuthTimer.current) clearInterval(checkAuthTimer.current);
    }

    return () => {
      if (checkAuthTimer.current) clearInterval(checkAuthTimer.current);
    };
  }, [authenticated]);

  async function handleSignOut() {
    await signOut(firebaseAuth);
    setAuthenticated(false);
  }

  if (!currentUser) return <SignIn />;
  return (
    <div className={styles.container}>
      Admin Portal
      <button onClick={handleSignOut}>Sign Out</button>
      <AddEvent />
    </div>
  );
};

export default admin;

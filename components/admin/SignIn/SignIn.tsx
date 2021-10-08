import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "firebaseApp";
import styles from "./SignIn.module.scss";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e?: any) {
    if (e) e.preventDefault();

    if (!email || !password) window.alert("Fill in all fields!");

    try {
      const signInRes = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
    } catch (err: any) {
      window.alert(
        "Incorrect credentials. Try again. Also, check your internet."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <p>Sign in to access AIAA admin portal</p>
      <input
        type="text"
        value={email}
        placeholder={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

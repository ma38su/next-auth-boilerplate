import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {

  const [ session, loading ] = useSession();

  if (loading) {
    return null;
  }

  if (session) {
    return (
      <>
        <p>{JSON.stringify(session.user)}</p>
        <p>Signed in as {session.user.email}.</p>
        <p><button onClick={() => signOut()}>Sign Out</button></p>
      </>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <p><button onClick={() => signIn()}>Sign in</button></p>
    </>
  );
}

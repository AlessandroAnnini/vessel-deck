import { useCallback } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();
  const userEmail = session?.user.email;

  const handleSignout = useCallback(async () => {
    signOut();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Logged in as {userEmail}</p>

      <button onClick={handleSignout}>Sign out</button>
    </div>
  );
}

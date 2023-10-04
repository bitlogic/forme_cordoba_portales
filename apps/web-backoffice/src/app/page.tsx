'use client';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@mui/material';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Signed in as {session?.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </main>
    )
  }
  return (
    
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
              <IconButton aria-label="delete" onClick={() => signIn('google')} >
                <GoogleIcon />
              </IconButton>
      </main>
  )
}

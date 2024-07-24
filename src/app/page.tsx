import Image from 'next/image'

import { createClient } from '@/utils/supabase/server'

const Home = async () => {
  const session = await createClient().auth.getSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hellow word</h1>

      <Image
        width={100}
        height={100}
        alt="Profile img"
        className="size-20 rounded-full"
        src={session?.data.session?.user?.user_metadata?.avatar_url}
      />
    </main>
  )
}

export default Home

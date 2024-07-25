import { IoLogOutOutline, IoPersonCircleOutline } from 'react-icons/io5'

import { LogoutButton } from '@/components/logoutButton'
import { UserMetadata } from '@/types/auth'
import { createClient } from '@/utils/supabase/server'

const Home = async () => {
  const {
    data: { user },
  } = await createClient().auth.getUser()

  const userInfo = user?.user_metadata as UserMetadata

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between  bg-gradient p-24">
      <LogoutButton
        variant="link"
        className="absolute right-3 top-3 flex gap-2"
      >
        Sair <IoLogOutOutline />
      </LogoutButton>

      <h1 className="text-center text-[45px] text-white">
        Olá {userInfo?.display_name || userInfo?.full_name}
      </h1>

      <IoPersonCircleOutline size={400} className="text-white/70" />

      <h2 className="text-center text-[40px] text-white">Você sabia que</h2>
      <div className="mx-auto max-w-[959px]">
        <p className="text-center text-2xl text-white/90">
          O ponto mais profundo do oceano é a Fossa das Marianas, localizada no
          Oceano Pacífico. Seu ponto mais profundo, conhecido como Challenger
          Deep, atinge aproximadamente 11.034 metros (36.201 pés) de
          profundidade.
        </p>
      </div>
    </main>
  )
}

export default Home

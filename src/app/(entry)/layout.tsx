import Image from 'next/image'

import Logo from '@/../public/logo.png'
import Peoples from '@/../public/peoples.png'

const EntryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-screen w-screen justify-center">
      <div className="hidden w-full flex-col items-center justify-center gap-14 bg-gradient lg:flex">
        <div className="flex w-full flex-col items-center justify-center gap-y-16">
          <Image
            src={Logo}
            width={192}
            height={66}
            alt="Logo da Code community"
            className="h-[65px] w-[192px]"
          />

          <Image
            src={Peoples}
            width={375}
            height={311}
            alt="Imagem ilustrativa de alguns rostos"
            className="h-[311px] w-[375px]"
          />
        </div>
        <div className="mx-auto max-w-[560px] space-y-4">
          <h2 className="text-center text-[31.25px] font-semibold leading-[37.5px] text-white">
            Uma curiosidade sobre JavaScript
          </h2>
          <p className="text-center text-lg text-white/70">
            Seu nome originalmente era LiveScript, mas foi renomeado para
            JavaScript por razões de marketing, aproveitando o sucesso do Java
            na época. Apesar do nome semelhante, as duas linguagens são
            distintas em sua sintaxe e propósito.
          </p>
        </div>
      </div>
      <div className="h-screen w-full">{children}</div>
    </section>
  )
}

export default EntryLayout

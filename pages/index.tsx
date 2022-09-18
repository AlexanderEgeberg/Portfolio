import Image from 'next/image'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <section className='flex justify-center bg-slate-900 py-44'>
      <figure>
        <Image
          className='rounded-full'
          src='/images/profile.png'
          height={200}
          width={200}
          alt='Alexander profile picture'
        />

        <h2 className='flex justify-center text-zinc-300'>
          Alexander
        </h2>
      </figure>
    </section>
  )
}

export default Home

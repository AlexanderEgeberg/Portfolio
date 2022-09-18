import Image from 'next/image'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <>
      <section
        style={{backgroundImage: `url(https://www.kindacode.com/wp-content/uploads/2022/05/orange-background.jpeg)`}}
        className='flex justify-center py-44 bg-fixed bg-center bg-repeat bg-cover'
      >
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

      <section className='flex justify-center pt-96 bg-gray-700'>
        testhelo wtf?

      </section>

      <section className='flex justify-center pt-96'>
        testhelo wtf?

      </section>

    </>
  )
}

export default Home

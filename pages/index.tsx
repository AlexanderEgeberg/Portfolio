import Image from 'next/image'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <>
      <section
        style={{backgroundImage: `url('/images/background.jpg')`}}
        className='flex items-center flex-col justify-center h-screen bg-fixed bg-center bg-repeat bg-cover'
      >

        <div className='text-center'>
          <h1 className='font-medium leading-tight text-5xl mb-2 text-blue-600'>
          Designer, Frontend Developer & Mentor
          </h1>

          <h2 className='font-thin leading-tight text-3xl mb-2 text-blue-600'>
          I design and code beautifully simple things, and I love what I do.
          </h2>
        </div>

        <figure className=''>
          <Image
            className='rounded-full'
            src='/images/profile.png'
            height={200}
            width={200}
            alt='Alexander profile picture'
          />

        </figure>
      </section>

      <section className='flex justify-center pt-96'>
        testhelo wtf?

      </section>

      <section className='flex justify-center pt-96'>
        testhelo wtf?

      </section>

    </>
  )
}

export default Home

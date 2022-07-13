import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Form from '../components/Form'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Other from '../components/Other'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akshay Benny</title>
        <meta name='description' content='Full Stack Developer Portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Poppins'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-black min-h-screen overflow-x-hidden font-Poppins relative'>
        {/* <div className='absolute top-0 -left-4 w-[700px] h-[700px] rounded-full bg-[#1745A9] filter blur-3xl  animate-blob z-0'></div>
        <div className='absolute top-[1500px] -right-4 w-[700px] h-[700px] rounded-full bg-[#6d51ec]  filter blur-3xl opacity-50 animate-blob z-0'></div>
        <div className='absolute top-96  w-[700px] h-[700px] rounded-full bg-[#9951ec]  filter blur-3xl opacity-50 animate-blob z-0' ></div> */}
        <Header />

        <div className='z-100 max-w-[2000px] 3xl:mx-auto'>
          <Hero />
          <Portfolio />
          <Other />
          <About />
          <Form />
        </div>
      </main>
    </div>
  )
}

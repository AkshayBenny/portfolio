import OtherCard from './OtherCard'
import figma from '../public/figma.png'
import reduxCart from '../public/redux-cart.png'
const Other = () => {
  const otherData = [
    {
      name: 'Figma Co-pilot',
      desc: 'Figma Co-pilot finds guideline erros within your designs on all your layers. Ensure your designs are ready for development or design collaboration by fixing inconsistencies.',
      image: '/figma.png',
      gitLink: 'https://github.com/AkshayBenny/figma-copilot',
    },
    {
      name: 'Spotify Clone',
      desc: 'A spotify clone made using Spotify Api and NextJs. User can play/pause music, browse through the songs in users library.',
      image:
        'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      gitLink: 'https://github.com/AkshayBenny/spotify_clone',
    },
    {
      name: 'Redux Cart',
      desc: 'A shopping cart made using ReactJs and Redux Toolkit. User can add, delete and update products in the cart.',
      image: '/redux-cart.png',
      gitLink: 'https://github.com/AkshayBenny/redux-react-app',
      liveLink: 'https://redux-react-study.vercel.app/',
    },
  ]
  return (
    <section
      id='other'
      className='text-white mt-[150px] px-6 lg:px-16 max-w-[1400px] mx-auto'
    >
      <h1 className='text-center font-semibold text-[32px] lg:text-[40px] pb-12 lg:pb-[72px] tracking-[-1px]'>
        Other works
      </h1>
      <div className='lg:grid grid-cols-2 gap-12 w-full gap-y-12 flex flex-col '>
        {otherData.map((data, index) => {
          return <OtherCard key={index} data={data} />
        })}
      </div>
    </section>
  )
}

export default Other

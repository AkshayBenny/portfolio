import OtherCard from './OtherCard'
const Other = () => {
  const otherData = [
    {
      name: 'Spotify Clone',
      desc: 'Eleifend vestibulum cursus aliquam fringilla lacinia ut tristique massa. Et consectetur sollicitudin at aliquet dui sed praesent nibh eget.',
      image:
        'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      gitLink: 'https://portfolio-zeta-ebon.vercel.app/',
      liveLink: 'https://portfolio-zeta-ebon.vercel.app/',
    },
    {
      name: 'Spotify Clone',
      desc: 'Eleifend vestibulum cursus aliquam fringilla lacinia ut tristique massa. Et consectetur sollicitudin at aliquet dui sed praesent nibh eget.',
      image:
        'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      gitLink: 'https://portfolio-zeta-ebon.vercel.app/',
      liveLink: 'https://portfolio-zeta-ebon.vercel.app/',
    },
    {
      name: 'Spotify Clone',
      desc: 'Eleifend vestibulum cursus aliquam fringilla lacinia ut tristique massa. Et consectetur sollicitudin at aliquet dui sed praesent nibh eget.',
      image:
        'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      gitLink: 'https://portfolio-zeta-ebon.vercel.app/',
      liveLink: 'https://portfolio-zeta-ebon.vercel.app/',
    },
  ]
  return (
    <section id='other' className='text-white mt-[150px] px-6 lg:px-16 max-w-[1400px] mx-auto'>
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

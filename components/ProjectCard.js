import { ArrowRightIcon } from '@heroicons/react/outline'


const ProjectCard = ({
  number,
  image,
  title,
  desc,
  tag,
  gitLink,
  liveLink,
}) => {
  const tags = tag.split(',')

  return (
    <div className='lg:grid grid-cols-2 gap-12 text-white'>
      <div className={`relative order-${number % 2 === 0 ? 1 : -1}`}>
        <img
          src={image}
          alt={title}
          className='rounded-2xl w-full object-cover h-full'
        />
        <p className='font-bold text-base px-4 py-1 bg-black bg-opacity-[64%]  max-w-fit rounded-full absolute top-[10px] left-[10px] z-100'>
          Project
        </p>
      </div>
      <div
        className={`order-${number % 2 === 1 ? 1 : -1} flex flex-col justify-between pt-12 lg:pt-0`}
      >
        <div className='flex flex-col space-y-[16px]'>
          <h1 className='font-semibold text-[40px] xl:text-[32px] tracking-[-1px] xl:tracking-[-0.5px]'>
            {title}
          </h1>
          <p className='text-[20px] leading-[33px]'>{desc}</p>
          <div className='hidden xl:flex flex-wrap gap-4'>
            {tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className='px-6 py-[10px] bg-white bg-opacity-[8%] rounded-[10px] text-sm'
                >
                  {tag}
                </p>
              )
            })}
          </div>
        </div>
        <div className='flex items-center gap-12 font-semibold text-base pt-20 '>
          <div className='flex items-center gap-2 cursor-pointer group '>
            <a href={liveLink}>Live Demo</a>
            <ArrowRightIcon className='h-6 group-hover:rotate-[-45deg] rotate-[-45deg] lg:rotate-[0deg]  transition bg-[#6068DB] rounded-full m-[6px] p-1' />
          </div>
          <a href={gitLink}>Git Demo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

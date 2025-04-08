
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='relative mx-auto px-4 md:w-1/2 md:py-0 py-8 md:mb-6'>
      <div className=' text-stone-400 dark:text-stone-400 mx-auto p-1 flex justify-center space-x-1'>
        <a
          href='https://www.linkedin.com/in/lucia-meyer-65633a143/'
          rel='noreferrer'
          target='_blank'
          className='hover:text-LM'
        >
          © LM Dev & Design - {currentYear}
        </a>
      </div>
    </div>
  );
};

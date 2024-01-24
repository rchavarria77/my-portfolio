// Components
import { Form } from '@/components';
import { SectionContainer } from '@/components/global-components';

// Icons
import { AddressBookIcon } from '@/components/icons';

export const ContactMe = () => {
  return (
    <SectionContainer
      id='contact'
      className='flex flex-col items-center justify-center w-full px-6 mt-16 mb-8 sm:px-12 lg:px-0 scroll-m-24'
    >
      <h2
        className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white/80'
        aria-label='Contact Me heading'
      >
        <AddressBookIcon className='size-7' />
        <span className='c-underline-animation before:bg-black dark:before:bg-white'>
          Contact Me
        </span>
      </h2>
      <div className='flex flex-col w-full mt-6 md:flex-row'>
        <div className='flex flex-col items-center justify-center gap-3 px-2 text-center md:items-start md:w-1/2 text-pretty md:text-start'>
          <h3 className='text-2xl md:text-5xl'>Get in touch!</h3>
          <p className='text-sm md:text-md'>
            I'm currently available for work. Fill out the form and I'll get
            back to you as soon as possible.
          </p>
        </div>
        <div className='flex px-2 md:w-1/2'>
          <Form />
        </div>
      </div>
    </SectionContainer>
  );
};

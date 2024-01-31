// Components
import { LinkButton } from '@/components/global-components';

// Icons
import { CircleArrowUpIcon } from '@/components/icons';

export const BackToTop = () => {
  return (
    <div className='flex justify-end w-full mb-8'>
      <LinkButton
        href='#'
        target='_self'
        className='bg-transparent dark:bg-transparent animate-bounce animate-infinite animate-duration-1000'
        aria-label='Back to top button'
      >
        <CircleArrowUpIcon className='size-10 hover:scale-125' />
      </LinkButton>
    </div>
  );
};

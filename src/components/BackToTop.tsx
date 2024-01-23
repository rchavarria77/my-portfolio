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
        className='border-[transparent] border-none bg-[transparent] animate-bounce animate-infinite animate-duration-1000'
      >
        <CircleArrowUpIcon className='size-10 hover:scale-125' />
      </LinkButton>
    </div>
  );
};

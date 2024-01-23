// Components
import { Button, SocialPill } from '@/components/global-components';

// Icons
import { DownloadIcon, MessageIcon } from '@/components/icons';

export const Documentation = () => {
  //#region functions
  const handleDownload = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.onload = () => {
      const blob = xhr.response;
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV_Carlos_Roberto_Chavarria_Vega_EN.pdf'; // Set a default filename if not provided
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    };

    xhr.open('GET', '/assets/cv.pdf');
    xhr.send();
  };
  //#endregion

  return (
    <div className='flex flex-col items-center order-3 gap-4 pt-8 lg:items-start md:pt-0'>
      <Button
        handleClick={handleDownload}
        className='gap-1 bg-[transparent] border-none hover:scale-110 min-w-max animate-pulse animate-infinite hover:animate-none'
      >
        <DownloadIcon className='size-4 md:size-4 text-shark-300' />
        <p className='flex items-center text-sm text-shark-300'>
          <span className='hidden lg:flex'>Download &nbsp;</span>
          <span>CV</span>
        </p>
      </Button>
      <SocialPill
        href='#contact'
        target='_self'
        className='flex flex-row justify-around w-full border rounded-full hover:scale-110'
        ariaLabel={`Let's Talk`}
      >
        <MessageIcon className='size-4 md:size-4 text-shark-300' />
        <p className='text-sm text-shark-300'>Let's Talk</p>
      </SocialPill>
    </div>
  );
};

// Icons
import { FlutterIcon, PythonIcon, ReactIcon } from '../icons';

export const DescriptionContainer = () => {
  return (
    <div className='flex flex-col w-full md:w-[60%] gap-y-4 text-base text-center md:text-start md:text-lg order-2 md:order-1'>
      <p>
        Nostrud eu non in velit commodo in deserunt ad ut proident nulla
        exercitation id. Esse commodo aliqua nulla Lorem ex nisi aute laboris
        magna. Velit ut labore labore Lorem adipisicing dolor eiusmod
        consectetur labore ipsum. Esse exercitation est elit aliquip enim ipsum
        elit.
      </p>
      <p>
        Nostrud eu non in velit commodo in deserunt ad ut proident nulla
        exercitation id. Esse commodo aliqua nulla Lorem ex nisi aute laboris
        magna. Velit ut labore labore Lorem adipisicing dolor eiusmod
        consectetur labore ipsum. Esse exercitation est elit aliquip enim ipsum
        elit.
      </p>
      <span className='mt-4'>Interested in learning:</span>
      <div className='flex justify-center text-xs md:justify-start md:text-sm gap-x-4'>
        <span className='flex flex-col items-center gap-y-1'>
          <PythonIcon className='size-8' />
          Python
        </span>
        <span className='flex flex-col items-center gap-y-1'>
          <FlutterIcon className='size-8' />
          Flutter
        </span>
        <span className='flex flex-col items-center gap-y-1'>
          <ReactIcon className='size-8' />
          React Native
        </span>
      </div>
    </div>
  );
};

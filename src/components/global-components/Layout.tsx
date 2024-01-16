export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-bunker-950 px-12 md:px-32 lg:px-[140px]'>
      {children}
    </div>
  );
};

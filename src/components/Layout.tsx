export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='w-full h-full px-12 md:px-32 lg:px-[140px]'>{children}</div>
  );
};

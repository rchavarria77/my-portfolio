export const Badge = ({ children }: { children: any }) => {
  return (
    <span className='relative flex overflow-hidden rounded-full p-[1px] max-w-fit'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ddd9cb_0%,#3d3d3d_50%,#ddd9cb_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'></span>
      <div className='inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-medium text-white rounded-full cursor-pointer bg-light-900/45 dark:bg-dark-900/45 backdrop-blur-3xl whitespace-nowrap'>
        {children}
      </div>
    </span>
  );
};

export const Badge = ({ children }: { children: any }) => {
  return (
    <>
      <span className='relative flex overflow-hidden rounded-full p-[1px] max-w-fit'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'></span>
        <div className='inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-semibold text-white rounded-full cursor-pointer bg-slate-950/90 backdrop-blur-3xl whitespace-nowrap'>
          {children}
        </div>
      </span>
    </>
  );
};

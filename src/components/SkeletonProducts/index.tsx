

export const SkeletonProducts = () => {
  return (
    <div className="rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col">
        <div className="rounded-md bg-slate-700 h-[10.125rem] w-[18rem]"></div>
        <div className="flex flex-col w-full space-y-6 py-2">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-9 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

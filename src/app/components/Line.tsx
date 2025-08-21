import Status from '@/app/components/Status';
import { ReactNode } from 'react';

const Line = ({
  children,
  status = 'none',
}: {
  children?: ReactNode;
  status?: 'warning' | 'error' | 'none';
}) => {
  return (
    <div className="flex">
      <Status status={status} />
      <div className="w-10 flex-none text-right mr-4">-</div>
      <div className=" basis-full hover:bg-[#3c3836]">
        {children ?? <div> </div>}
      </div>
    </div>
  );
};

export default Line;

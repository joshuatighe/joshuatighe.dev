import Status from '@/app/ui/Status';
import { ReactNode } from 'react';

const Line = ({
  children,
  number,
  status = 'none',
}: {
  children: ReactNode;
  number: string;
  status?: 'warning' | 'error' | 'none';
}) => {
  return (
    <div className="flex">
      <Status status={status} />
      <div className="w-10 flex-none text-right mr-4">{number}</div>
      <div className=" basis-full hover:bg-[#3c3836]">{children}</div>
    </div>
  );
};

export default Line;

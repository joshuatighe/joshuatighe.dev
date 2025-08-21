import Link from 'next/link';

import Line from '@/app/ui/Line';

const ProjectLines = () => {
  return (
    <>
      <Line number={'6'} status={'warning'}>
        <div>
          and this is my{' '}
          <span className="text-[#fb4934]">portfolio_website</span>() {'{'}
        </div>
      </Line>
      <Line number={'8'}>
        <div>
          {'    '}
          ProjectList projects = {'{'}
        </div>
      </Line>
      <Line number={'8'}>
        <div>
          {'        '}
          <span className="text-[#b8bb26]">
            "
            <Link
              href="https://game-of-life-nu-nine.vercel.app/"
              target="_blank"
              className="underline hover:font-extrabold"
            >
              game of life
            </Link>
            "
          </span>
          ,
          <span className="text-[#928374]">
            {' '}
            // game of life built using react components
          </span>
        </div>
      </Line>
      <Line number={'8'}>
        <div>
          {'    '}
          {'}'}
        </div>
      </Line>
      <Line number={'8'}>
        <div>{'}'}</div>
      </Line>
      <Line number={'9'}>
        <></>
      </Line>
    </>
  );
};

export default ProjectLines;

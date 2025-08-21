import Link from 'next/link';

import Line from '@/app/components/Line';

const ProjectLines = () => {
  return (
    <>
      <Line status={'warning'}>
        <div>
          and this is my{' '}
          <span className="text-[#fb4934]">portfolio_website</span>() {'{'}
        </div>
      </Line>
      <Line>
        <div>
          {'    '}
          ProjectList projects = {'{'}
        </div>
      </Line>
      <Line>
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
            // game of life built using react
          </span>
        </div>
      </Line>
      <Line>
        {'        '}
        <span className="text-[#b8bb26]">
          "
          <Link
            href="https://github.com/joshuatighe/intlbridge"
            target="_blank"
            className="underline hover:font-extrabold"
          >
            intlbridge
          </Link>
          "
        </span>
        ,
        <span className="text-[#928374]">
          {' '}
          // a website to help international students study in the US
        </span>
      </Line>
      <Line>
        <div>
          {'    '}
          {'}'}
        </div>
      </Line>
      <Line>
        <div>{'};'}</div>
      </Line>
      <Line />
    </>
  );
};

export default ProjectLines;

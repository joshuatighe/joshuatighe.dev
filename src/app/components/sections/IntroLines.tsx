import Line from '@/app/components/Line';

const IntroLines = () => {
  return (
    <>
      <Line>
        <div className="text-[#928374]">
          /*{' '}
          <span className="hover:underline hover:font-bold">
            joshuatighe.dev
          </span>{' '}
          */
        </div>
      </Line>
      <Line>
        <div>
          <span className="text-[#8ec07c]">#include</span>{' '}
          <span className="text-[#fe8019]">"projectlist.h"</span>
        </div>
      </Line>
      <Line />
      <Line>
        <div>
          <span className="text-[#b8bb26]">
            "hello, my name is{' '}
            <span className="font-extrabold">joshua tighe</span>"
          </span>
          ;
        </div>
      </Line>
      <Line />
    </>
  );
};

export default IntroLines;

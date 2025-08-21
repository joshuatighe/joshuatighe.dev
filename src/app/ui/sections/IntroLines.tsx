import Line from "@/app/ui/Line";

const IntroLines = () => {
  return (
    <>
      <Line number={"1"}>
        <div className="text-[#928374]">
          /*{" "}
          <span className="hover:underline hover:font-bold">
            joshuatighe.dev
          </span>{" "}
          */
        </div>
      </Line>
      <Line number={"2"}>
        <div>
          <span className="text-[#8ec07c]">#include</span>{" "}
          <span className="text-[#fe8019]">"projectlist.h"</span>
        </div>
      </Line>
      <Line number={"3"}>
        <></>
      </Line>
      <Line number={"4"}>
        <div>
          <span className="text-[#b8bb26]">
            "hello, my name is{" "}
            <span className="font-extrabold">joshua tighe</span>"
          </span>
          ;
        </div>
      </Line>
      <Line number={"5"}>
        <></>
      </Line>
    </>
  );
};

export default IntroLines;

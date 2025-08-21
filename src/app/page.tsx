import {
  BlankLines,
  Footer,
  IntroLines,
  ProjectLines,
  WeatherLines,
} from "@/app/ui/sections";

const Home = () => {
  return (
    <>
      <main className="flex flex-col animate-fade-in">
        <IntroLines />
        <ProjectLines />
        <WeatherLines />
        <BlankLines number={30} />
      </main>
      <Footer />
    </>
  );
};

export default Home;

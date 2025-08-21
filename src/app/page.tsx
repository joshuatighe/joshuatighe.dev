import {
  BlankLines,
  Footer,
  IntroLines,
  ProjectLines,
  WeatherLines,
} from '@/app/components/sections';

const Home = () => {
  return (
    <>
      <main className="flex flex-col">
        <IntroLines />
        <ProjectLines />
        <WeatherLines />
        <BlankLines />
      </main>
      <Footer />
    </>
  );
};

export default Home;

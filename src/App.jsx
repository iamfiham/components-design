import './App.css';
import ChartCard from './Components/card4/ChartCard';
import NextJsCard from './Components/card3/NextJsCard';
import ImageGrid from './Components/imageGrid/ImageGrid';
import Card from './Components/Card/Card';
import Card2 from './Components/Card2/Card2';
import GlossyButton from './Components/GlossyButton/GlossyButton';
import SkeletonProfileCard from './Components/skeletonProfileCard/SkeletonProfileCard';
import ProfilePopup from './Components/profilePopup/ProfilePopup';
import ProjectCard from './Components/projectCard/ProjectCard';
import GoogleLogIn from './Components/googleLogIn/GoogleLogIn';
import ZoomUi from './Components/zoomUi/ZoomUi';

function App() {
  return (
    <section className='app relative'>
      <GlossyButton />
      <Card />
      <Card2 />
      <SkeletonProfileCard />
      <ProfilePopup />
      <ProjectCard />
      <ImageGrid />
      <NextJsCard />
      <ChartCard />
      <GoogleLogIn />
      <ZoomUi />
    </section>
  );
}

export default App;

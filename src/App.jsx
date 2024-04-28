import './App.css';
// import Card from './Components/Card/Card';
// import Card2 from './Components/Card2/Card2';
// import GlossyButton from './Components/GlossyButton/GlossyButton';
// import ProductViewPage from './Components/productViewPage/ProductViewPage';
import SkeletonProfileCard from './Components/skeletonProfileCard/SkeletonProfileCard';
import ProfilePopup from './Components/profilePopup/ProfilePopup';

function App() {
  return (
    <section className='app'>
      {/*
       <GlossyButton />
      <Card />
      <Card2 /> 
      <ProductViewPage/>
      */}
      {/* <SkeletonProfileCard /> */}
      <ProfilePopup />
    </section>
  );
}

export default App;

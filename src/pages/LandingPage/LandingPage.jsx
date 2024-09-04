// import { AnimatedTooltipPreview } from '../../components/3dPinTest';
// import { HeroScrollDemo } from '../../components/ScrollHero';
// import Roadmap from '../../components/FeatureSection/Feature';
import Hero from '../../components/HeroSection/Hero';
// import Navbar from '../../components/Navbar/Navbar';
// import DNA from '../../components/3D_Elements/DNA';
// import { AnimatedPinDemo } from '../../components/3dPinReal';
// import { BackgroundBoxesDemo } from '../../components/BackgroundBoxes';
import { CardSpotlightEffect1 } from '../../components/CardSpotlightEffect';
// import { BackgroundBoxesDemo } from '../../components/BackgroundBoxes';
// import { HeroScrollDemo } from '../../components/ScrollHero';
// import { AnimatedPinDemo } from '../../components/3dPinReal';
// import Roadmap from '../../components/FeatureSection/Feature';
import { NavbarDemo } from '../../components/Navbar/Navbar2';
// import MetaMaskLogo from '../../components/MetamaskLogo';


// import { AppleCardsCarouselDemo } from '../../components/ExpandableCarousel';
// import '../../index.css';



function LandingPage() {
  return (
    <>
      <div >

      {/* <section className='relative flex items-center justify-between'>
        
        
        <div className='relative z-10'>
         
          <div className=' text-white'>
            <p>Testing the Splime 3d DNA element Below Testing the Splime 3d DNA element Below Testing the Splime 3d DNA element Below Testing the Splime 3d DNA element Below</p>
          </div>
        </div>
      </section> */}


    {/* <Navbar/> */}
    <section
    className='bg-gradient-to-t from-[#bcd7d7] via-[#1b0e42] to-[#000000] h-screen rounded-b-xl
    
    
    '
    style={{
      backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg`,

      // backgroundImage: `url('/rotateit2.jpg')`,

      // backgroundImage: `url('https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,

      // backgroundImage: `url('https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,

      

      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',


    }} 
    >

    <NavbarDemo/>
    <Hero/>
    </section>
      </div>
      <CardSpotlightEffect1/>
      {/* <Roadmap />
        <AnimatedPinDemo />
        <HeroScrollDemo />
        <BackgroundBoxesDemo/> */}
      
    
    </>
  );
}


export default LandingPage;
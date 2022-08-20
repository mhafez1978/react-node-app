import { ParallaxProvider, ParallaxBanner  } from 'react-scroll-parallax';

const Banner = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: '../assets/images/bg.png', speed: -15 }]}
        className="aspect-[2/1]"
      />
    </ParallaxProvider>
  );
};
export default Banner;

import Slider from "react-slick";
import poster from "./samplePoster.jpg";


function CarouselTest() {
  const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 4,
       slidesToScroll: 4,
       initialSlide: 0
     };
  return(
    <div>
    <Slider {...settings}>
      <img src={poster} alt=""/>
      <img src={poster} alt=""/>
      <img src={poster} alt=""/>
      <img src={poster} alt=""/>
      <img src={poster} alt=""/>
      <img src={poster} alt=""/>
      <img src={poster} alt=""/>
      <img src={poster} alt=""/>

    </Slider>
    </div>
  )
}

export default CarouselTest;

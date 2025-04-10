import { Swiper, SwiperSlide } from 'swiper/react';
import './CardSwiper.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Card } from 'react-bootstrap';
import user1 from '../../assets/4005b22a3c1c23d7c04f6c9fdbd85468.jpeg'
import user2 from '../../assets/9c4d361cb9f54e38261e75afcd23b9b1.jpeg'
import user3 from '../../assets/af2aa1913e502ffa476a014a707b9d33.png'
import user4 from '../../assets/a3d54c7fb65e69df645f3b5d1ba1156c.png'
const CardSwiper = () => {
  const data = [
    { text: 'I really like the system at this management love recommending this software to you guys', image: user1 },
    { text: 'We alighn our succeess with the success of our customers which is why our offering transcends our software', image: user2 },
    { text: 'I really like the system at this management love recommending this software to you guys', image: user3 },
    { text: 'We alighn our succeess with the success of our customers which is why our offering transcends our software', image: user4 },
    { text: 'I really like the system at this management love recommending this software to you guys', image: user3 },
    { text: 'We alighn our succeess with the success of our customers which is why our offering transcends our software', image: user2 },
    { text: 'I really like the system at this management love recommending this software to you guys', image: '$120,650' },
    { text: 'We alighn our succeess with the success of our customers which is why our offering transcends our software', image: user4 },
  ]
  return (

    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      navigation
      className="mySwiper"

    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Card className=" cardSwiper shadow-sm p-3 rounded-3">
            <Card.Body>
              <div className="text-swiper">{item.text}</div>
              <div className='cont-img'>
                <div>
                  <img className='swiper-img' src={item.image} />
                </div>

                <div className='swiper-start'> ⭐⭐⭐⭐⭐</div>
              </div>

            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>

    //   <Swiper
    //   cssMode={true}
    //   navigation={true}
    //   // pagination={true}
    //   mousewheel={true}
    //   // keyboard={true}
    //   modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    //   className="mySwiper"
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   <SwiperSlide>Slide 5</SwiperSlide>
    //   <SwiperSlide>Slide 6</SwiperSlide>
    //   <SwiperSlide>Slide 7</SwiperSlide>
    //   <SwiperSlide>Slide 8</SwiperSlide>
    //   <SwiperSlide>Slide 9</SwiperSlide>
    // </Swiper>

  )
}

export default CardSwiper

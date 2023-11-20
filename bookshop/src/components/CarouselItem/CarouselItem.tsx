import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const CarouselItem = () => {

  return (
    <Container className="my-5">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img style={{ height: '500px', width: '100%' }}
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/2789/4914/files/Sarah_J_Maas_Books.jpg?v=1614932886"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '500px', width: '100%' }}
            className="d-block w-100"
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2023-03/sarah-maas-books-mc-2x1-230315-v2-b32e68.jpg"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '500px', width: '100%' }}
            className="d-block w-100"
            src="https://2.bp.blogspot.com/-EiJwyvz_6ns/UWZxejctnfI/AAAAAAAAEhc/zFfb5L61w0o/s1600/893991_369427116499830_2059007535_o.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </Container >
  );
}

export { CarouselItem };

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'


const Hero = () => {
  const lazyRoot = React.useRef(null)

  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-success font-weight-medium f-14 mb-4">Club Capteurs</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">La santé de vos plantes</h1>
              <p className="text-muted mb-4 pb-2">Club Capteurs est une solution qui permet d&#39;indiquer à un agriculteur, de manière sans fil, l&#39;état de santé de ces plantes. Cela permettra de reprendre les engrets dans une période saine pour les plantes.
              Pour cela nous avons mis a disposition dans notre boitiers autonome en énergie, différents capteurs permettant d&#39;analyser les taux de différents gazs, l&#39;humidité, la température ainsi que le taux de certains sels telle que le
              nitrate ou le potassium présent dans la terre.</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/Hero.jpeg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
         </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

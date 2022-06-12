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
              <p className="text-muted mb-4 pb-2">Club Capteurs est une solution simple et rapide permettant d&#39;indiquer à n&#39;importe qui l&#39;état de santé de ses plantes. Et ce, sans-fil, dans un rayon de plusieurs kilomètres !
              Nous mettons à votre disposition un système tout-en-un, compact, dans un boîtier géolocalisé et autonome en énergie, rechargé grâce à l&#39;énergie solaire.
              Le système est composé de différents capteurs, mesurant la qualité et la température de lair, ainsi que les différents nutriments et qualité du sol, tels que le nitrate, le potassium, la salinité et la température.</p>
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

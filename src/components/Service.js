import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Consultation de donnée", desc : "Un profile dédié ou vous pouvez consulter vos capteurs" },
    { title : "Ajout dynamique", desc : "Un moyen d'ajouter vous même les capteurs vous appartenant sur le site" },
    { title : "Notifications", desc : "Des notifications permettant de vous signaler si une des mesures passent un seuil critique" },
  ]

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-success">Services</span></h3>
              <p className="text-muted">Les services suivant vous sont proposé par le Club Capteurs</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;

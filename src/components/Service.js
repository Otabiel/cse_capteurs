import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Consultations simples", desc : "A la création de votre compte, un profil dédié est créé, avec une interface de lecture simple" },
    { title : "Ajout Dynamique", desc : "Vous pouvez en tout temps ajouter de nouveaux capteurs à votre compte et les visualiser sur votre profil" },
    { title : "Notifications", desc : "Des notifications vous sont envoyées par mail dès lors qu'une mesure dépasse un seuil critique." },
  ]

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-success">SERVICES</span></h3>
              <p className="text-muted">Les services suivants sont proposés par le Club Capteurs</p>
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

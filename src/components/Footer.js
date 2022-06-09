import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 1, title : "Capteurs",
      child : [
          { title : "NPK Capteurs", link : "/" },
          { title : "Capteur Co2", link : "/" },
          { title : "Capteur Température-Humidité", link : "/" },
          { title : "Récepteur GPS", link : "/" }
      ]
    },
  ];

  return (
    <section className="footer section bg-light">
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              <Col md={4}>
                <h6 className="text-dark mb-3">Participants</h6>
                <h6 className="text-muted pb-2">Da Rocha Carvalho Bruno</h6>
                <h6 className="text-muted pb-2">Mercier Lucas</h6>
                <h6 className="text-muted pb-2">Pruvot Lucien</h6>
              </Col>

              <Col md={4}>
                <h6 className="text-dark mb-3">Adresse</h6>
                <p className="text-muted f-14">HEIG-VD</p>
                <h6 className="text-muted pb-2">Route de Cheseaux 1</h6>
                <h6 className="text-muted pb-2">CH-1400, Yverdon-les-bains</h6>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2022 © Club Capteurs. Design by Bruno Da Rocha Carvalho</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;

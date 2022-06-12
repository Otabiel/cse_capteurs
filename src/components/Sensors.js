import React from 'react';
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "./images/45.png", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
    {id : 2, img : "./images/Group Members.png", title : "LOREM IPSUM", desc : "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.", link : "/"},
    {id : 3, img : "./images/45.png", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-success">CAPTEURS</span></h3>
              <p className="text-muted">Ci-dessous, retrouvez les différents capteurs présents dans notre système :</p>
            </div>
          </Col>
        </Row>

        <Row className={"align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src="/npk.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">Capteur NPK</h5>
                <p className="text-muted mb-3 f-15">Ce capteur, une fois planté dans le sol, mesure : La température et l&#39;humidité du sol, son taux d&#39;acidité,de nitrate, de phosphore de potassium et sa salinité.</p>
              </div>
            </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <div className="mb-4">
              <div className="my-4">
                <i className="mdi mdi-account-group"></i>
              </div>
              <h5 className="text-dark font-weight-normal mb-3 pt-3">Capteur Multi-Gaz</h5>
              <p className="text-muted mb-3 f-15">Ce capteur, à l&#39;air libre, mesure les taux des gazs présents dans l&#39;air : Le taux de dioxygène d&#39;azone(NO2), le taux de dioxyde de carbone (CO2), le taux d&#39;alcool (AlCo) et le taux de composé organique volatile</p>
            </div>
          </Col>
          <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
            <div>
              <img src="/multi_gaz.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>

        <Row className={"align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src="/temp_hum.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">Capteur Température-Humidité</h5>
                <p className="text-muted mb-3 f-15">Ce capteur, à l&#39;air libre, mesure avec une grande précision la température et l&#39;humidité de l&#39;air extérieur.</p>
              </div>
            </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <div className="mb-4">
              <div className="my-4">
                <i className="mdi mdi-account-group"></i>
              </div>
              <h5 className="text-dark font-weight-normal mb-3 pt-3">GPS</h5>
              <p className="text-muted mb-3 f-15">Afin de déterminer la position exacte de nos capteurs, ils sont équipés d&#39;un émetteur GPS,avec une précision de 1 à 10m</p>
            </div>
          </Col>
          <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
            <div>
              <img src="/gps.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>

        <Row className={"align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src="/lora.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">LoRa</h5>
                <p className="text-muted mb-3 f-15">Les mesures sont transférées à l&#39;utilisateur grâce au réseau basse-consommation  	&#34;LoRa 	&#34; disponible partout dans le monde, n&#39;engendrant aucun frais supplémentaire.</p>
              </div>
            </Col>
        </Row>

      </Container>
    </section>
  );
}
export default Feature;

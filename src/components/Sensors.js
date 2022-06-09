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
              <h3 className="font-weight-normal text-dark"><span className="text-success">Capteurs</span></h3>
              <p className="text-muted">Ci-dessous vous retrouverez les différents capteurs présent dans notre boitiers, ainsi que les données qu&#39;ils permettent de mesurer</p>
            </div>
          </Col>
        </Row>

        <Row className={"align-items-center mt-5"}>
          <Col md={5} >
            <div>

            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">Capteur NPK</h5>
                <p className="text-muted mb-3 f-15">Ce capteur immergé dans la terre, permet de retourner: la température du sol, son l&#39;humidité, son taux d&#39;acidité, sa salinité, sa conductivité, le taux de nitrate, le taux de phosphore ainsi que le taux de potassium.</p>
              </div>
            </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <div className="mb-4">
              <div className="my-4">
                <i className="mdi mdi-account-group"></i>
              </div>
              <h5 className="text-dark font-weight-normal mb-3 pt-3">Capteur Co2</h5>
              <p className="text-muted mb-3 f-15">Ce capteur permet de retourner les taux de gaz présent. Il mesure le taux de dioxyde d&#39;azote(No2), le taux de dioxyde de carbone, le taux d&#39;alcool et le taux de composé organique volatile.</p>
            </div>
          </Col>
          <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
            <div>

            </div>
          </Col>
        </Row>

        <Row className={"align-items-center mt-5"}>
          <Col md={5} >
            <div>

            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">Capteur Température-Humidité</h5>
                <p className="text-muted mb-3 f-15">Ce capteur complétement étanche va pouvoir vous retourner l&#39;humidité ainsi que la température extérieur</p>
              </div>
            </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <div className="mb-4">
              <div className="my-4">
                <i className="mdi mdi-account-group"></i>
              </div>
              <h5 className="text-dark font-weight-normal mb-3 pt-3">Récepteur GPS</h5>
              <p className="text-muted mb-3 f-15">Pour connaître la position exact de vos capteurs dans vos champs, et pouvoir de ce fait mieux comprendre les zones à problèmes</p>
            </div>
          </Col>
          <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
            <div>

            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}
export default Feature;

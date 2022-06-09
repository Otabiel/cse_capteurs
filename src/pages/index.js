import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sensors from "../components/Sensors";
import Service from "../components/Service";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Welcome">
      <Header />
      <Hero />
      <Sensors/>
      <Service />
      <Footer />
    </Layout>
  )
}
export default Index;

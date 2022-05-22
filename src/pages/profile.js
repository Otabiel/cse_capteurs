import useSession from '../hooks/auth'
import Layout from "../components/Layout";
import Header from "../components/Header";

const Sensors = () => {
  const { session, loading } = useSession();
  return !session && !loading ?
  <div>Login Required</div>
  :
  <Layout>
    <Header/>
    
  </Layout>

};

export default Sensors;

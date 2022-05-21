import useSession from '../hooks/auth'

const Sensors = () => {
  const { session, loading } = useSession();
  return session ? <div>Login Required</div> : <div>Sensors</div>;
};

export default Sensors;

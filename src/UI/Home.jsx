import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
// import Username from '../features/user/Username';

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="mb-10 mt-8 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Start ordering
        </Button>
      )}
    </div>
  );
}

export default Home;

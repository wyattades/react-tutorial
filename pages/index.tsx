import { Layout } from 'components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div
        className="mx-auto w-full px-20 py-32"
        style={{ maxWidth: '100rem' }}
      >
        <h1 className="mb-8 text-center text-6xl font-bold">Hello World!</h1>
      </div>
    </Layout>
  );
};

export default Home;

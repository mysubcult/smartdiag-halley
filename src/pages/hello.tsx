// /pages/hello.tsx

import Layout from '../src/components/Layout';

const HelloPage = () => {
  return (
    <Layout title="Привет">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Привет</h1>
      </div>
    </Layout>
  );
};

export default HelloPage;

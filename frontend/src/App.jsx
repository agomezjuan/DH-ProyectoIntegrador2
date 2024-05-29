import './App.css';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';
import Header from '@/components/Header';

function App() {
  return (
    <Layout>
      <Navbar />
      <Header />
    </Layout>
  );
}

export default App;

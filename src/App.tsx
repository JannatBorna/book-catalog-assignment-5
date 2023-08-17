import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;

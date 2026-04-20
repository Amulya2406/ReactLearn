import { Toaster } from 'sonner';
import AddData from './components/AddData';

export function App() {

  return (
    <div>
      <AddData/>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;

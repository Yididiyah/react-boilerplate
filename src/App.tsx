import { AppProvider } from '@/providers/app';
// import { Button } from '@nextui-org/react';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
      {/* <h1 className="text-3xl font-bold underline">
        Hello World
        <Button color="primary"> Button</Button>
      </h1>
      ; */}
    </AppProvider>
  );
}

export default App;

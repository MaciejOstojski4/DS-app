import { BrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/main';
import { Router } from './routing/router';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

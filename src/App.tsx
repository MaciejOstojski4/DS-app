import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MainLayout } from './layouts/main';
import { Router } from './routing/router';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

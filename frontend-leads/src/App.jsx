import { Routes, Route } from 'react-router-dom';

import LeadsPage from './pages/LeadsPage';
import LeadDetailPage from './pages/LeadDetailPage';

function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={<LeadsPage />}
      />

      <Route
        path="/lead/:id"
        element={<LeadDetailPage />}
      />

    </Routes>
  );

}

export default App;
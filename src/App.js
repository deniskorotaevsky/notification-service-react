import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Archive } from './component/navigation/Archive/Archive';
import { Drafts } from './component/navigation/Drafts/Drafts';
import { ActiveNotifications } from './component/navigation/ActiveNotifications/ActiveNotifications';
import { NewNotice } from './component/navigation/NewNotice/NewNotice';
import { Layout } from './component/navigation/Layout/Layout';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper-navigate'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ActiveNotifications />} />
            <Route path='/drafts' element={<Drafts />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/newNotice' element={<NewNotice />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
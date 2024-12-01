import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Mainlayout from './components/Mainlayout';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Table from './components/Table';
import { Navigate } from 'react-router-dom';
import Tabledata from './components/Tabledata';
import Mapdata from './components/Mapdata';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [user , setUser] = useState('')
  //const navigate = useNavigate();
  return (
    <Router>
      <Routes>
        <Route path="Login" element={<Form setUser={setUser}/>} />
        {user === 'Pranesh' ? (
           <Route path="/" element={<Mainlayout />}>
           {/* Nested Routes inside MainLayout */}
           <Route path="dashboard" element={<Dashboard userName={user} />} />
           <Route path="profile" element={<Profile />} />
           <Route path="table" element={<Table/>} />
           <Route path="tabledata" element={<Tabledata/>} />
           <Route path="mapdata" element={<Mapdata/>} />
         </Route>
        ) : (
          <Route path="*" element={<Navigate to="/Login" replace />} />
        )} 
       
      </Routes>
    </Router>
  );
};

export default App;

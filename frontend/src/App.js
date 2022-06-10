import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/admin/Dashboard';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/store/admin" element={<Dashboard />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

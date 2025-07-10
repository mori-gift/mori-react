import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoryPage from "./pages/CategoryPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
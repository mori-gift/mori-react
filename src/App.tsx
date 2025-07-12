import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoryPage from "./pages/CategoryPage";
import StorePage from "./pages/StorePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/store/:storeId" element={<StorePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoryPage from "./pages/CategoryPage";
import StorePage from "./pages/StorePage";
import PhotoGalleryPage from "./pages/PhotoGalleryPage"; // 새로 추가

function App() {
    return (
        <div style={{ height: 'auto', minHeight: 0 }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/category/:categoryId" element={<CategoryPage />} />
                    <Route path="/store/:storeId" element={<StorePage />} />
                    <Route path="/store/:storeId/gallery/:imageIndex" element={<PhotoGalleryPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
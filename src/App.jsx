import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Favorites from './pages/Favorites'
import ForSale from './pages/ForSale'
import Home from './pages/Home'
import Listings from './pages/Listings'
import NotFound from './pages/NotFound'
import PublishListing from './pages/PublishListing'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="anuncios" element={<Listings />} />
        <Route path="en-venta" element={<ForSale />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="publicar" element={<PublishListing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

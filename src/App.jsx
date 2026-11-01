import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PublishListing from './pages/PublishListing'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="publicar" element={<PublishListing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

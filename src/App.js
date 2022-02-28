import GlobalStyle from './utils/styles/GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/'
import Footer from './components/Footer/'
import Home from './pages/Home/'
import Login from './pages/Login/'
import Profile from './pages/Profile/'
import Error from './pages/Error/'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

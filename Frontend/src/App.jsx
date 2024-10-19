import Navbar from './components/Navbar.jsx'
import MainSlider from './components/MainSlider/MainSlider.jsx'
import CategorySlider from './components/CategorySlider/CategorySlider.jsx'
import Products from './components/Product/Products.jsx'

const App = () => {
  return (
    <>
      <Navbar/>
      <MainSlider/>
      <CategorySlider/>
      <Products/>
    </>
  )
}

export default App
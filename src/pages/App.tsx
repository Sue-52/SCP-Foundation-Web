/** @format */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
// 引入组件
import Layout from './Layouts'

// Layout 页面
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

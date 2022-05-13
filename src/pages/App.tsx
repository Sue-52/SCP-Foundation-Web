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
        {/* 重定向 */}
        {/* <Route path="/" element={<Redirect to="/SCP-Foundation-Web" />}></Route> */}
        {/* 外层路由为指向页面的布局页 */}
        <Route path="/SCP-Foundation-Web" element={<Layout />}>
          {/* 根据设定好的布局，只需更改需要变化的内容区域 */}
          <Route path="" element={<HomePage />} />
        </Route>
        {/* 登录页 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

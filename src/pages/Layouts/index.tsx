/** @format */
// 组件
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import TopNavBar from '@/components/TopNavBar'
// 路由
import {Outlet} from 'react-router'
// 样式引入
import {LayoutContainerStyle} from './index.style'

function Layout() {
  return (
    <>
      {/* 左侧侧边栏 */}
      <SideBar />
      {/* 右侧内容栏 */}
      <LayoutContainerStyle>
        {/* 顶部导航栏 */}
        <TopNavBar />
        {/* 中间内容变换区域 */}
        <Outlet />
        {/* 底部内容区域 */}
        <Footer />
      </LayoutContainerStyle>
    </>
  )
}

export default Layout

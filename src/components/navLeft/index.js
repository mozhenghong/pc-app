import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import './index.less';
// 引入侧边栏配置
import MenuConfig from '../../config/menuConfig';

const { SubMenu } = Menu;

const Index = (props) => {
    const [menuTreeNode, setMenuTreeNode] = useState(null)

    useEffect(() => {
         // 菜单渲染
        const renderMenu=(data)=>{
            return data.map((item)=>{
                if(item.children){
                    return(
                        <SubMenu title={item.title} key={item.key}>
                            {renderMenu(item.children)}
                        </SubMenu>
                    )
                }
                return <Menu.Item title={item.title} key={item.key}>
                            {item.title}
                        </Menu.Item>
            })
        }
        const menuTreeNode = renderMenu(MenuConfig);
        setMenuTreeNode(menuTreeNode)
    },[])
    return (
        <div>
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>博客后台管理系统</h1>   
            </div>
            <Menu theme="dark" defaultOpenKeys={['/admin/manage_blog']}  mode="inline">
                {menuTreeNode}
            </Menu>
        </div>
    );
}

export default Index;
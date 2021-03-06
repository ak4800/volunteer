import React from "react"
import {Menu,  Icon} from "antd"
import MenuConfig from "../../config/menuConfig"
import './index.css'
const SubMenu = Menu.SubMenu

export default class Herder extends React.Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({menuTreeNode})
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        });
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.png"/>
                </div>
                
                <Menu  theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

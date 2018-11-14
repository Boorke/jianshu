import React,{Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem
} from './style.js';


class Header extends Component{
    render(){   
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>

                    <NavItem className="right">
                        <i className="iconfont">&#xe607;</i>
                    </NavItem>
                </Nav>


            </HeaderWrapper>
        );
    }
}

export default Header;
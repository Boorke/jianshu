import React,{Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style.js';


class Header extends Component{
    render(){   
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavSearch>
                    </NavSearch>
                    <NavItem className="right">
                        <i className="iconfont">&#xe607;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <Addition>
                        <Button className='writting'>
                            <i className="iconfont">&#xe65f;</i>
                                写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

export default Header;
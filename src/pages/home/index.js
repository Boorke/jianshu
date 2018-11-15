import React,{Component} from 'react';
import {
    HomeWrapper, 
    HomeLeft, 
    HomeRight,
} from './style.js';
import Topic from './components/Topic';
import List  from './components/List';

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4573/8e236c77ce2141beeaee6515fb3abddfbb617fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
					<Topic />
					<List/>
                </HomeLeft>
                <HomeRight>
                    <img className='banner-img' src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"/>
                    <img className='banner-img' src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"/>
                    <img className='banner-img' src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"/>
                    <img className='banner-img' src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"/>
                    <img className='banner-img' src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"/>
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;
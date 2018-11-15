import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	padding-left:15px;
	padding-right:15px;
	margin: 0 151.667px auto; 
`;

export const HomeLeft = styled.div`
	float: left;
	position:relative;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	padding-top:30px;
	margin-left:30px;
	overflow:hidden;
	float: left;
	.banner-img{
		width:280px;
		height:47px;
		margin-bottom:6px;
	}
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 30px 0 10px 0;
	width:625px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-right: 18px;
	margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
	a{
		text-decoration:none;
		color: black;
		padding-bottom:10px;
	}
	a:hover{
		text-decoration:black;
	}
	p{
		margin: 0 0 8px;
    	font-size: 13px;
    	line-height: 24px;
    	color: #999;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	width: 280px;
	overflow:hidden;
	float:left;
	#xiazai{
		width:230px;
		height:60px;
		padding:10px 22px;
		margin-bottom:30px;
		border: 1px solid #f0f0f0;
		border-radius: 6px;
		background-color: #fff;
	}
	.banner-img{
		width:60px;
		height:60px;
		float:left;
	}		
	.title{
		padding-top:10px;
		width:143px;
		height:22px;
		font-size: 15px;
    	color: #333;
		float:right;
	}
	.description{
		width:143px;
		height:18px;
		margin-top: 4px;
    	font-size: 13px;
    	color: #999;
		float:right;
	}
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 559px;
	overflow:hidden;
	background-size: contain;
	.author{
		font-size: 14px;
    	color: #969696;
		text-align:left;
	}
	.page-change{
		font-size: 14px;
    	color: #969696;
		text-align:right;
		float:right;
	}
	.author-info{
		overflow:hidden;
		margin-top:20px;
		.author-img{
			width: 48px;
    		height: 48px;
			margin-right:10px;
    		border: 1px solid #ddd;
    		border-radius: 50%;
			float:left;
		}
		h3{
			padding-top: 5px;
    		margin-right: 60px;
			float:left;
    		font-size: 14px;
			color: #333;
		}
		p{
			float:left;
			margin-top: 10px;
    		font-size: 12px;
    		color: #969696
		}
		.follow{
			float: right;
    		padding: 0;
    		font-size: 13px;
    		color: #42c02e;
		}
	}
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`


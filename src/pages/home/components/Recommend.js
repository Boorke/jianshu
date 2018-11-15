import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				<div id="xiazai">
					<img className="banner-img" alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
					<div className="title">下载简书手机App</div>
					<div className="description">随时随地分享内容</div>
				</div>
				<RecommendItem>
					<div>
						<span className="author">推荐作者</span>
						<span className="page-change">换一批</span>
					</div>
					<div className="author-info">
						<img className="author-img" alt="" src="//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
						<h3>胡七筒</h3>
						<p>写了244.3k字 · 9.6k喜欢</p>
						<span className="follow">关注</span>
					</div>
					<div className="author-info">
						<img className="author-img" alt="" src="//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
						<h3>胡七筒</h3>
						<p>写了244.3k字 · 9.6k喜欢</p>
						<span className="follow">关注</span>
					</div>
					<div className="author-info">
						<img className="author-img" alt="" src="//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
						<h3>胡七筒</h3>
						<p>写了244.3k字 · 9.6k喜欢</p>
						<span className="follow">关注</span>
					</div>
					<div className="author-info">
						<img className="author-img" alt="" src="//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
						<h3>胡七筒</h3>
						<p>写了244.3k字 · 9.6k喜欢</p>
						<span className="follow">关注</span>
					</div>
					<div className="author-info">
						<img className="author-img" alt="" src="//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
						<h3>胡七筒</h3>
						<p>写了244.3k字 · 9.6k喜欢</p>
						<span className="follow">关注</span>
					</div>
					<div className="author-info">
						<img className="author-img" alt="" src="//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
						<h3>胡七筒</h3>
						<p>写了244.3k字 · 9.6k喜欢</p>
						<span className="follow">关注</span>
					</div>
				</RecommendItem>
			</RecommendWrapper>
		)
	}
}


export default Recommend;
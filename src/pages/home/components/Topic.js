import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
	render() {
		return (
			<TopicWrapper>
				<TopicItem>
					<img className="topic-pic" alt="" src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
					故事
				</TopicItem>
				<TopicItem>
					<img className="topic-pic" alt="" src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
					摄影
				</TopicItem>
				<TopicItem>
					<img className="topic-pic" alt="" src="//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
					旅行·在路上
				</TopicItem>
				<TopicItem>
					<img className="topic-pic" alt="" src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
					手绘
				</TopicItem>
				<TopicItem>
					<img className="topic-pic" alt="" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
					读书
				</TopicItem>
				<TopicItem>
					<img className="topic-pic" alt="" src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
					@IT·互联网
				</TopicItem>
				<TopicItem>
					<img className="topic-pic" alt="" src="//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
					自然科普
				</TopicItem>
			</TopicWrapper>
		)
	}
}


export default Topic;
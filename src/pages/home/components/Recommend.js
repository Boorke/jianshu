import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				<RecommendItem imgUrl=""/>
				<RecommendItem imgUrl=""/>
			</RecommendWrapper>
		)
	}
}


export default Recommend;
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

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);
import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends PureComponent {
	render() {
		return (
			<div>
				<ListItem>
					<ListInfo></ListInfo>
				</ListItem>
				<LoadMore>更多热门专题</LoadMore>
			</div>
		)
	}
}

export default List;
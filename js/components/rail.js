import React from 'react';
import PostSelect from './post-select';

export const RailItem = ( { post } ) => (
	<div className="rail-item">
		Post { post.id }
		<PostSelect />
	</div>
);

export default ( { posts = [] } ) => {
	return <div className="rail">
		{ posts.map( post => <RailItem key={ post.id } post={ post } /> ) }
	</div>
};

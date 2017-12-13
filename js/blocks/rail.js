import React from 'react'
import _uniq from 'lodash/uniq';
import wp from 'wp'

import Rail from '../components/rail';

const { registerBlockType } = wp.blocks;

registerBlockType( 'humanmade/gb-boilerplate-demo', {
	title:    'HM Test - Rail',
	icon:     'dashicons-grid-view',
	category: 'layout',

	attributes: {
		posts: {
			type:    'array',
			default: [
				{ id: 1 },
				{ id: 2 },
				{ id: 5 },
			],
		},
	},

	edit( { attributes, setAttributes, focus } ) {
		const { posts = [] } = attributes;

		return <div
				className="gb-rail-test"
				key="railContainer"
				data-focused={ focus ? true : false }
		>
			<Rail posts={ _uniq( posts, post => post.id ) } />
		</div>
	},

	save( { attributes } ) {
		const { posts = [] } = attributes;
		const postIds = posts.map( post => post.id );
		return <div>{ postIds.join( ',' ) }</div>
	},
} );

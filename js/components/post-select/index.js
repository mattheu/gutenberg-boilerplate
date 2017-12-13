import React from 'react';
import PropTypes from 'prop-types';
import wp from 'wp';
import _uniqueId from 'lodash/uniqueId';
import _pull from 'lodash/pull';
import classNames from 'classnames';

const { Button } = wp.components;
const { __ } = wp.i18n;

const PostSelectModalFilters = props => {
	const id = _uniqueId( 'post-select-modal-filters' );
	return <div className="media-menu post-select-filters">
		<label htmlFor={ id + '-search' } className="screen-reader-text">{ __( 'Search posts' ) }</label>
		<input id={ id + '-search' } placeholder={ __( 'Search posts...' ) } type="search" />
		<select>
			<option>Category</option>
			<option>Tag</option>
		</select>
	</div>
}

const PostSelectModalContent = props => {
	return <div>
		{ [ 1, 2, 3, 4 ].map( id => {
			return <div
				key={ id }
				onClick={ () => props.onToggleSelectedPosts( id ) }
				className={ classNames( {
					'post-select-result': true,
					'focused':            props.selectedPosts.indexOf( id ) >= 0,
				} )}
			>
				<h2>Post title</h2>
				<div className="post-select-result-meta">Type, Date, author</div>
			</div>
		} ) }
	</div>
}

class PostSelectModal extends React.Component {
	state = { selectedPosts: [] }

	constructor( props ) {
		super( props );
		this.id = _uniqueId( 'post-select-modal' );
	}

	componentDidMount() {
	}

	render() {
		const {
			onClose,
			modalTitle = __( 'Select a post' ),
		} = this.props;

		return <div>
			<div className="media-modal-backdrop"></div>
				<div className="modal media-modal wp-core-ui">
				<Button
					className="media-modal-close"
					onClick={ () => onClose() }
				>
					<span className="media-modal-icon"><span className="screen-reader-text">{ __( 'Close media panel' ) }</span></span>
				</Button>
				<div className="media-frame-title"><h1>{ modalTitle }</h1></div>
				<div className="media-frame-menu">
					<PostSelectModalFilters />
				</div>
				<div className="media-modal-content">
					<PostSelectModalContent
						onToggleSelectedPosts={ id => {
							this.togglePostSelected( id )
						} }
						selectedPosts={ this.state.selectedPosts }
					/>
				</div>
			</div>
		</div>
	}

	togglePostSelected( id ) {
		const { selectedPosts } = this.state;

		if ( selectedPosts.indexOf( id ) >= 0 ) {
			this.setState( { selectedPosts: _pull( selectedPosts, id ) } )
		} else {
			let newSelectedPosts = selectedPosts.slice();
			newSelectedPosts.push( id );
			this.setState( { selectedPosts: newSelectedPosts } );
		}
	}
}

class PostSelect extends React.Component {
	constructor( props ) {
		super( props );
		this.state = { modalVisible: false }
	}

	render(){
		const { btnText = 'Select post' } = this.props;

		const { modalVisible } = this.state;

		return <div className="post-select">
			<Button
				isLarge={true}
				onClick={ () => this.setState( { modalVisible: true } ) }
			>{ btnText }</Button>
			{ modalVisible && <PostSelectModal
				onClose={ () => this.setState( { modalVisible: false } ) }
				onSelect={ () => this.setState( { modalVisible: false } ) }
			/> }
		</div>
	}
}

export default PostSelect;

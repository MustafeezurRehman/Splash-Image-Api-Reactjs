import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imageref = React.createRef();
		this.state = { span: 0 };
	}

	componentDidMount() {
		this.imageref.current.addEventListener('load', this.setSpan);
	}

	setSpan = () => {
		const height = this.imageref.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ span: spans });
	};

	render() {
		const { urls, description } = this.props.image;
		return (
			<img
				style={{ gridRowEnd: `span ${this.state.span}` }}
				ref={this.imageref}
				src={urls.regular}
				alt={description}
			/>
		);
	}
}

export default ImageCard;

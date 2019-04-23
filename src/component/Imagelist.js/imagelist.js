import React from 'react';
import './imagelist.css';
import ImageCard from './Image-card';

const ImageList = (props) => {
	const images = props.images;

	var Imageslist = images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});

	return <div className="image-list">{Imageslist}</div>;
};

export default ImageList;

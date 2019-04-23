import React from 'react';
import SearchBar from './Searchbar';
import ImageList from './Imagelist.js/imagelist'
import Unsplash from '../api/unsplash';

class App extends React.Component {
	state = { images: [] };
	onSubmit = async (term) => {
		const response = await Unsplash.get('/search/photos', {
			params: { query: term }
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="container ui" style={{ marginTop: '20px' }}>
				<SearchBar Submit={this.onSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;

import React from 'react';

class SearchBar extends React.Component {
	state = {
		term: ''
	};
	onSubmit = (event) => {
		event.preventDefault();

		this.props.Submit(this.state.term);
	};

	render() {
		return (
			<div className=" segment ui">
				<form className="ui form" onSubmit={(event) => this.onSubmit(event)}>
					<div className="field">
						<label>Search Image </label>
						<input
							type="text"
							value={this.state.value}
							onChange={(event) => {
								this.setState({ term: event.target.value });
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;

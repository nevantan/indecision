class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.toggleVisibility = this.toggleVisibility.bind(this);
		this.state = {
			visible:false
		};
	}
	toggleVisibility() {
		this.setState((prevState) => {
			return {
				visible: !prevState.visible
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
				{this.state.visible && (
					<div>
						<p>This is togglable!</p>
					</div>
				)}
			</div>
		);
	}
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// Original, non-component solution

// const button = {
// 	hidden:true,
// 	message:'Here is the hidden text.',
// 	onToggle() {
// 		//console.log(this);
// 		this.hidden = !this.hidden;
// 		render();
// 	}
// };

// const appRoot = document.getElementById('app');

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={() => button.onToggle()}>{button.hidden ? 'Show details' : 'Hide details'}</button>
// 			{!button.hidden && (
// 				<div>
// 					<p>button.message</p>
// 				</div>
// 			)}
// 		</div>
// 	);

// 	ReactDOM.render(template, appRoot);
// };

// render();
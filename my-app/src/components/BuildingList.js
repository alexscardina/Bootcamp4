import React from 'react';

class BuilingList extends React.Component {


	render() {
		const { data, filterText } = this.props;

		const buildingList = data
			.filter(name => {
				return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td>{directory.code} </td>
						<td> <button onClick={console.log(directory.id)}> {directory.name} </button> </td>
					</tr>
				);
		});

		return (
		<div>
			{buildingList}
		</div>
		
		);
	}
}
export default BuilingList;

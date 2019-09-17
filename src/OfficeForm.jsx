import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addOffice } from './actionCreators';

class OfficeForm extends Component {
	state = {
		country: '',
		stateOrProvince: '',
		postalCode: '',
		city: '',
		streetAddress: '',
		address2: '',
		phone: '',
		fax: '',
		email: '',
		officeType: false 
	}

	handleInputChange = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	}

	handleSubmitForm = e => {
		e.preventDefault();

		this.props.addOffice({...this.state});
	}

	render() {
		const { 
			country, 
			stateOrProvince, 
			postalCode, 
			city, 
			streetAddress, 
			address2, 
			phone, 
			fax, 
			email, 
			officeType 
		} = this.state;

		return (
			<div className="OfficeForm">
				<form onSubmit={this.handleSubmitForm}>
					<div>
						<input className="OfficeForm__form_input" type="text" name="country" value={country} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="stateOrProvince" value={stateOrProvince} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="postalCode" value={postalCode} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="city" value={city} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="streetAddress" value={streetAddress} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="address2" value={address2} onChange={this.handleInputChange} />
					</div>
					<div>
						<input className="OfficeForm__form_input" type="text" name="phone" value={phone} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="fax" value={fax} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="email" value={email} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="checkbox" name="officeType" value={officeType} onChange={this.handleInputChange} />
					</div>
					<div>
						<button>Cancel</button>
						<input type="submit" value="Save" />
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => 
	bindActionCreators({
		addOffice: addOffice
	}, dispatch)

export default connect(null, mapDispatchToProps)(OfficeForm);

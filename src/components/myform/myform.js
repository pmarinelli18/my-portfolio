import React from "react";
import { TextArea, Form, FormField, TextInput, Button } from "grommet";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		const { status } = this.state;
		return (
			<Form
				onSubmit={this.submitForm}
				action="https://formspree.io/mbjzgoyz"
				method="POST"
			>
				<FormField label="Name" name="name" required>
					<TextInput name="name" type="name" />
				</FormField>
				<FormField label="Email" name="email" required>
					<TextInput name="email" type="email" />
				</FormField>
				<FormField label="Message" name="message" required>
					<TextArea name="message" />
				</FormField>
				{/* <label>Email:</label>
				<input type="email" name="email" />
				<label>Message:</label>
				<input type="text" name="message" /> */}
				{
					status === "SUCCESS" ? (
						<p>Thanks!</p>
					) : (
						<Button type="submit" label="Submit" primary />
					)
					// <button>Submit</button>
				}
				{status === "ERROR" && (
					<p>
						Ooops! There was an error. If you continue to have problems feel
						free to email me at pmarinelli@ufl.edu
					</p>
				)}
			</Form>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}

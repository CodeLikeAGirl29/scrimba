import React, { useState } from "react";

export default function Form() {
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		comments: "",
		isFriendly: true,
		employment: "",
		favColor: "",
	});
	console.log(formData.favColor);

	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		// submitToApi(formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<ul className='form-style-1'>
				<li>
					<label>
						Name <span className='required'>*</span>
					</label>
					<input
						type='text'
						placeholder='First Name'
						onChange={handleChange}
						name='firstName'
						value={formData.firstName}
					/>
				</li>
				<li>
					<input
						type='text'
						placeholder='Last Name'
						onChange={handleChange}
						name='lastName'
						value={formData.lastName}
					/>
				</li>
				<li>
					<input
						type='email'
						placeholder='Email'
						onChange={handleChange}
						name='email'
						value={formData.email}
					/>
				</li>
				<li>
					<textarea
						value={formData.comments}
						placeholder='Comments'
						onChange={handleChange}
						name='comments'
					/>
				</li>
				<li>
					<input
						type='checkbox'
						id='isFriendly'
						checked={formData.isFriendly}
						onChange={handleChange}
						name='isFriendly'
						className='legend-left'
					/>
				</li>
				<li>
					<label htmlFor='isFriendly' className='legend'>
						Are you friendly?
					</label>
				</li>
				<br />
				<br />

				<fieldset>
					<legend>Current employment status</legend>
					<li>
						<input
							type='radio'
							id='unemployed'
							name='employment'
							value='unemployed'
							checked={formData.employment === "unemployed"}
							onChange={handleChange}
						/>
						<label htmlFor='unemployed'>Unemployed</label>
						<br />

						<input
							type='radio'
							id='part-time'
							name='employment'
							value='part-time'
							checked={formData.employment === "part-time"}
							onChange={handleChange}
						/>
						<label htmlFor='part-time'>Part-time</label>
						<br />

						<input
							type='radio'
							id='full-time'
							name='employment'
							value='full-time'
							checked={formData.employment === "full-time"}
							onChange={handleChange}
						/>
						<label htmlFor='full-time'>Full-time</label>
						<br />
					</li>
				</fieldset>
				<br />
				<li>
					<label htmlFor='favColor'>What is your favorite color?</label>
					<br />
					<select
						id='favColor'
						value={formData.favColor}
						onChange={handleChange}
						name='favColor'
						className='field-select'
					>
						<option value='red'>Red</option>
						<option value='orange'>Orange</option>
						<option value='yellow'>Yellow</option>
						<option value='green'>Green</option>
						<option value='blue'>Blue</option>
						<option value='indigo'>Indigo</option>
						<option value='violet'>Violet</option>
					</select>
				</li>
				<br />
				<br />
				<li>
					<button className='simple'>Submit</button>
				</li>
			</ul>
		</form>
	);
}

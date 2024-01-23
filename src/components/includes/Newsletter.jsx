import React, { useState } from "react";
import { postData, checkPattern, getSiteImages } from '../../helpers/api';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
function Newsletter(props) {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [newsletter, setNewsletter] = useState({
		email: '',
	});
	function onSubmit() {

		if (newsletter.email_error === true || newsletter.email === '') {
			setNewsletter({ ...newsletter, email_error: true, email_error_msg: "Enter a valid email address" });
		}

		else {
			setNewsletter({ ...newsletter, btn_loading: true });
			var form_data = new FormData();

			for (var key in newsletter) {
				form_data.append(key, newsletter[key]);
			}
			postData("newsletter", form_data).then((data) => {
				if (data.status == 1) {
					// document.getElementById("frmnewsletter").reset();
					setNewsletter({ ...newsletter, btn_loading: false, email: "" });
					toast.success(`${data.msg}`, {
						position: "top-right",
						autoClose: 1000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
				else {
					setNewsletter({ ...newsletter, btn_loading: false });
					toast.error(`${data.msg}`, {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			});
		}
	}
	function handleNewsletterChange(e) {

		if (e.target.name === 'email') {

			let email_chk = checkPattern(e.target.value, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);

			if (email_chk === false) {
				if (e.target.value === '') {
					setNewsletter({ ...newsletter, email_error: false });
				}
				else {
					setNewsletter({ ...newsletter, [e.target.name]: e.target.value, email_error: true, email_error_msg: "Invalid e-mail address" });
				}

			}
			else {
				setNewsletter({ ...newsletter, [e.target.name]: e.target.value, email_error: false, email_error_msg: "" });
			}

		}

	}
	return (
		<>
			<ToastContainer />
			<div className="subscribe">
				<span className="fancy">{props.text}</span>
				<form method="post" onSubmit={handleSubmit(onSubmit)}>
					<input type="text" name="email" id="email" value={newsletter.email} onChange={handleNewsletterChange} className={(newsletter.email_error === true) ? 'input error' : 'input'} placeholder="Enter Email Address" />
					<button type="submit" disabled={(newsletter.btn_loading === true) ? 'disabled' : ''}>
						<img src={getSiteImages("/images/icon-send.svg")} alt="Send" /> {(newsletter.btn_loading === true) ? <i className="spinner"></i> : ''}
					</button>
				</form>
			</div>
		</>
	);
}

export default Newsletter;

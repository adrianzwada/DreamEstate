import React from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion';
function Contact() {

	const apiKey = import.meta.env.VITE_API_KEY;
	const apiUrl = import.meta.env.VITE_API_URL;
	console.log('API URL:', apiUrl);
	console.log('API Key:', apiKey);
	const [result, setResult] = React.useState('')
	const onSubmit = async event => {
		
		event.preventDefault()
		setResult('Sending....')
		const formData = new FormData(event.target)

		formData.append('access_key', apiKey)

		const response = await fetch(apiUrl, {
			method: 'POST',
			body: formData,
		})

		const data = await response.json()

		if (data.success) {
			setResult('')
			toast.success('Form Submitted Successfully')
			event.target.reset()
		} else {
			console.log('Error', data)
			toast.error(data.message)
			setResult('')
		}
	}
	const motionProps = {
		initial: { opacity: 0, x: 200 },
		transition: { duration: 1 },
		whileInView: { opacity: 1, x: 0 },
		viewport: { once: true },
	};
	return (

		<motion.div
			{...motionProps}
		 	className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
			<h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
				Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span>
			</h2>
			<p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
				Take the next step toward realizing your aspirations. Together, we can build a future that exceeds your
				expectations.
			</p>
			<form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
				<div className='flex flex-wrap'>
					<div className='w-full md:w-1/2 text-left'>
						Your Name
						<input
							className='w-full border border-gray-300 rounded py-3 mt-2'
							type='text'
							name='Name'
							placeholder='Your name'
							required
						></input>
					</div>
					<div className='w-full md:w-1/2 text-left md:pl-4'>
						Your Email
						<input
							className='w-full border border-gray-300 rounded py-3 mt-2'
							type='email'
							name='Email'
							placeholder='Your Email'
							required
						></input>
					</div>
				</div>
				<div className='my-6 text-left'>
					Message
					<textarea
						className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
						name='Message'
						placeholder='Message'
						required
					></textarea>
				</div>
				<button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : 'Send Message'}</button>
			</form>
		</motion.div>
	)
}

export default Contact

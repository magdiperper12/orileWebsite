'use client';

import BreadCrumb from '@/components/ui/BreadCrumb';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
	const t = useTranslations('Contact');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add form submission logic here
	};

	return (
		<>
			<BreadCrumb
				title={t('ContactUs')}
				breadcrumbs={[{ name: t('ContactUs') }]}
			/>

			{/* Contact Information Section */}
			<div
				className='bg-primary w-full max-w-3xl mx-auto px-5 -mt-16 relative z-10 mb-12 rounded-lg shadow-lg'
				data-aos='fade-up'
				data-aos-delay='250'>
				<div className='grid md:grid-cols-3 gap-6 py-10'>
					{/* Phone */}
					<div className='flex items-center space-x-3'>
						<div className='text-accent text-3xl'>
							<FaPhoneAlt />
						</div>
						<div>
							<h3 className='text-lg font-semibold text-secondary mb-1'>
								رقم الجوال
							</h3>
							<p className='text-transparentColor'>920006446</p>
						</div>
					</div>

					{/* Location */}
					<div className='flex items-center space-x-3'>
						<div className='text-accent text-3xl'>
							<FaEnvelopeOpenText />
						</div>
						<div>
							<h3 className='text-lg font-semibold text-secondary mb-1'>
								الموقع
							</h3>
							<p className='text-transparentColor'>
								جدة - المملكة العربية السعودية
							</p>
						</div>
					</div>

					{/* Email */}
					<div className='flex items-center space-x-3'>
						<div className='text-accent text-3xl'>
							<FaMapMarkerAlt />
						</div>
						<div>
							<h3 className='text-lg font-semibold text-secondary mb-1'>
								البريد
							</h3>
							<p className='text-transparentColor'>info@orielclinics.com</p>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className='py-12'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h3
							className='text-primary mb-3'
							data-aos='fade-up'>
							راسلنا
						</h3>
						<h2 className='text-3xl font-bold'>
							راسلنا<span className='text-accent'> لأى </span> إستفسار
						</h2>
					</div>

					<div
						className='bg-primary py-12 px-6 rounded-lg shadow-md'
						data-aos='fade-up'
						data-aos-delay='500'>
						<form
							onSubmit={handleSubmit}
							id='contactform'
							className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
							<input
								type='text'
								name='name'
								className='border-b border-transparentColor bg-transparent py-3 text-secondary placeholder-transparentColor focus:outline-none'
								placeholder='ادخل الإسم'
								required
							/>

							<input
								type='email'
								name='email'
								className='border-b border-transparentColor bg-transparent py-3 text-secondary placeholder-transparentColor focus:outline-none'
								placeholder='ادخل البريد'
								required
							/>

							<input
								type='tel'
								name='phone'
								className='border-b border-transparentColor bg-transparent py-3 text-secondary placeholder-transparentColor focus:outline-none'
								placeholder='ادخل رقم الجوال'
								required
							/>

							<input
								type='text'
								name='subject'
								className='border-b border-transparentColor bg-transparent py-3 text-secondary placeholder-transparentColor focus:outline-none'
								placeholder='ادخل الموضوع'
								required
							/>

							<textarea
								name='message'
								className='md:col-span-2 border-b border-transparentColor bg-transparent py-3 text-secondary placeholder-transparentColor focus:outline-none'
								placeholder='الرسالة'
								rows={4}
								required></textarea>

							<div className='md:col-span-2 text-center mt-6'>
								<button
									type='submit'
									className='btn-default relative px-6 py-3 rounded-lg text-white font-medium transition'>
									إرسال
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;

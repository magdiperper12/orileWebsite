'use client';

import BreadCrumb from '@/components/ui/BreadCrumb';
import { useTranslations } from 'next-intl';
import React from 'react';

const AccountPage = () => {
	const t = useTranslations('Auth');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add form submission logic here
	};

	return (
		<>
			<BreadCrumb
				title={t('MyAccount')}
				breadcrumbs={[{ name: t('MyAccount') }]}
			/>

			<section className='bg-white py-10'>
				<div className='container mx-auto px-4'>
					<div className='max-w-3xl mx-auto shadow-lg border border-gray-200 rounded-lg'>
						<form
							onSubmit={handleSubmit}
							className='p-6 md:p-8 text-right space-y-6'>
							{/* Title */}
							<div className='text-center'>
								<h2 className='text-2xl font-bold'>{t('MyAccount')}</h2>
								<p className='text-gray-500'>{t('MyData')}</p>
							</div>

							{/* Name */}
							<div className='space-y-2'>
								<label className='block font-medium'>{t('Name')}:</label>
								<input
									type='text'
									name='name'
									placeholder={t('EnterName')}
									defaultValue='مروان ممدوح'
									required
									className='w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none'
								/>
							</div>

							{/* Email */}
							<div className='space-y-2'>
								<label className='block font-medium'>{t('Email')}:</label>
								<input
									type='email'
									name='email'
									placeholder={t('EnterEmail')}
									defaultValue='marwan_mahmoud@gmail.com'
									required
									className='w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none'
								/>
							</div>

							{/* National ID */}
							<div className='space-y-2'>
								<label className='block font-medium'>{t('NationalID')}:</label>
								<input
									type='text'
									name='national_id'
									placeholder={t('EnterNationalID')}
									className='w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none'
								/>
							</div>

							{/* Nationality */}
							<div className='space-y-2'>
								<label className='block font-medium'>{t('Nationality')}:</label>
								<select
									name='nationality'
									required
									className='w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-primary focus:outline-none'>
									<option value=''>{t('Choose')}</option>
									<option value='none_saudi'>{t('NonSaudi')}</option>
									<option value='saudi'>{t('Saudi')}</option>
								</select>
							</div>

							{/* Phone */}
							<div className='space-y-2'>
								<label className='block font-medium'>{t('Phone')}:</label>
								<input
									type='text'
									name='phone'
									placeholder={t('EnterPhone')}
									required
									className='w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none'
								/>
							</div>

							{/* Password & Confirm Password */}
							<div className='grid md:grid-cols-2 gap-6'>
								<div className='space-y-2'>
									<label className='block font-medium'>{t('Password')}:</label>
									<input
										type='password'
										name='password'
										placeholder={t('EnterPassword')}
										className='w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none'
									/>
								</div>
								<div className='space-y-2'>
									<label className='block font-medium'>
										{t('ConfirmPassword')}:
									</label>
									<input
										type='password'
										name='password_confirmation'
										placeholder={t('ConfirmPassword')}
										className='w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none'
									/>
								</div>
							</div>

							{/* Age */}
							<div className='space-y-2'>
								<label className='block font-medium'>{t('Age')}:</label>
								<select
									name='age'
									required
									className='w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-primary focus:outline-none'>
									<option value=''>{t('Choose')}</option>
									{Array.from({ length: 76 }, (_, i) => i + 5).map((age) => (
										<option
											key={age}
											value={age}>
											{age}
										</option>
									))}
								</select>
							</div>

							{/* Save button */}
							<div className='text-center'>
								<button
									type='submit'
									className='bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition'>
									{t('Save')}
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default AccountPage;

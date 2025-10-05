'use client';

import BreadCrumb from '@/components/ui/BreadCrumb';
import Pagination from '@/components/ui/pagination';
import { useTranslations } from 'next-intl';
import React from 'react';

const ReservationPage = () => {
	const t = useTranslations('Reservations');

	const reservations = [
		{
			id: 1,
			clinic: 'اوريل',
			offer: 'كشفية',
			service: '---',
			date: '2025-03-20',
		},
		{
			id: 2,
			clinic: 'اوريل',
			offer: 'كشفية',
			service: '---',
			date: '2025-03-20',
		},
		{
			id: 3,
			clinic: 'اوريل',
			offer: 'كشفية',
			service: '---',
			date: '2025-03-20',
		},
		{
			id: 4,
			clinic: 'اوريل',
			offer: 'كشفية',
			service: '---',
			date: '2025-03-20',
		},
		{
			id: 5,
			clinic: 'اوريل',
			offer: 'كشفية',
			service: '---',
			date: '2025-03-20',
		},
	];

	return (
		<>
			<BreadCrumb
				title={t('Title')}
				breadcrumbs={[{ name: t('Title') }]}
			/>

			<section className='bg-white py-10'>
				<div className='container mx-auto px-4'>
					<div className='overflow-hidden rounded-lg shadow-lg border border-gray-200'>
						{/* Title */}
						<div className='bg-green-700 text-white text-center py-3 text-lg font-semibold'>
							{t('ReservationsHistory')}
						</div>

						{/* Table */}
						<div className='overflow-x-auto'>
							<table className='min-w-full table-auto text-center border-collapse'>
								<thead>
									<tr className='bg-gray-100 text-gray-700 text-sm uppercase'>
										<th className='px-4 py-3 border'>{t('#')}</th>
										<th className='px-4 py-3 border'>{t('Clinic')}</th>
										<th className='px-4 py-3 border'>{t('Offer')}</th>
										<th className='px-4 py-3 border'>{t('Service')}</th>
										<th className='px-4 py-3 border'>{t('RequestDate')}</th>
									</tr>
								</thead>
								<tbody className='text-gray-600'>
									{reservations.map((reservation, index) => (
										<tr
											key={reservation.id}
											className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
											<td className='px-4 py-3 border'>{reservation.id}</td>
											<td className='px-4 py-3 border'>{reservation.clinic}</td>
											<td className='px-4 py-3 border'>{reservation.offer}</td>
											<td className='px-4 py-3 border'>
												{reservation.service}
											</td>
											<td className='px-4 py-3 border'>{reservation.date}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					{/* Pagination */}
					<div className='mt-6'>
						<Pagination />
					</div>
				</div>
			</section>
		</>
	);
};

export default ReservationPage;

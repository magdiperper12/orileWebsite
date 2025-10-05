'use client';

import BreadCrumb from '@/components/ui/BreadCrumb';
import Pagination from '@/components/ui/pagination';
import { useTranslations } from 'next-intl';
import React from 'react';

interface Reservation {
	id: number;
	clinic: string;
	offer: string;
	service: string;
	date: string;
}

const PaidOffersPage = () => {
	const t = useTranslations('Reservations');
	const reservations: Reservation[] = []; // Empty array to show empty state

	return (
		<>
			<BreadCrumb
				title={t('payedTitle')}
				breadcrumbs={[{ name: t('payedTitle') }]}
			/>

			<section className='py-8'>
				<div className='container mx-auto px-4'>
					<div className='border border-gray-200 rounded-md shadow-md overflow-hidden'>
						{/* Title Header */}
						<div className='bg-green-700 text-white text-center py-3 font-semibold text-lg'>
							{t('PaidOffersHistory')}
						</div>

						{/* Table */}
						<div className='overflow-x-auto'>
							{reservations.length > 0 ? (
								<table className='w-full text-left border-collapse'>
									<thead>
										<tr className='bg-gray-100 text-gray-700'>
											<th className='p-3 border-b'>#</th>
											<th className='p-3 border-b'>{t('Clinic')}</th>
											<th className='p-3 border-b'>{t('Offer')}</th>
											<th className='p-3 border-b'>{t('Service')}</th>
											<th className='p-3 border-b'>{t('RequestDate')}</th>
										</tr>
									</thead>
									<tbody>
										{reservations.map((reservation: Reservation) => (
											<tr
												key={reservation.id}
												className='hover:bg-gray-50 border-b'>
												<td className='p-3'>{reservation.id}</td>
												<td className='p-3'>{reservation.clinic}</td>
												<td className='p-3'>{reservation.offer}</td>
												<td className='p-3'>{reservation.service}</td>
												<td className='p-3'>{reservation.date}</td>
											</tr>
										))}
									</tbody>
								</table>
							) : (
								<div className='p-4 bg-green-100 text-green-700 text-center'>
									{t('NoDataYet')}
								</div>
							)}
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

export default PaidOffersPage;

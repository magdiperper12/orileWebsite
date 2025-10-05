'use client';

import BreadCrumb from '@/components/ui/BreadCrumb';
import OfferSearch from '@/components/ui/OfferSearch';
import Pagination from '@/components/ui/pagination';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

interface OfferProps {
	id: number;
	title: string;
	price: number;
	image: string;
	slug: string;
}

const Offers = () => {
	const t = useTranslations('Offers');

	const offers: OfferProps[] = [
		{
			id: 1,
			title: 'جلسة ليزر جسم كامل مع الرتوش + جلسة تشقير وجه وحواجب',
			price: 490,
			image: '/images/layser.webp',
			slug: 'full-body-laser',
		},
		{
			id: 2,
			title: 'جلسة ليزر جسم كامل مع الرتوش + جلسة تشقير وجه وحواجب',
			price: 490,
			image: '/images/layser.webp',
			slug: 'full-body-laser',
		},
		{
			id: 3,
			title: 'جلسة ليزر جسم كامل مع الرتوش + جلسة تشقير وجه وحواجب',
			price: 490,
			image: '/images/layser.webp',
			slug: 'full-body-laser',
		},
		{
			id: 4,
			title: 'جلسة ليزر جسم كامل مع الرتوش + جلسة تشقير وجه وحواجب',
			price: 490,
			image: '/images/layser.webp',
			slug: 'full-body-laser',
		},
		{
			id: 5,
			title: 'جلسة ليزر جسم كامل مع الرتوش + جلسة تشقير وجه وحواجب',
			price: 490,
			image: '/images/layser.webp',
			slug: 'full-body-laser',
		},
		{
			id: 6,
			title: 'جلسة ليزر جسم كامل مع الرتوش + جلسة تشقير وجه وحواجب',
			price: 490,
			image: '/images/layser.webp',
			slug: 'full-body-laser',
		},
	];

	return (
		<>
			<BreadCrumb
				title={t('ourOffers')}
				breadcrumbs={[{ name: t('ourOffers') }]}
			/>

			<section className='py-20 bg-gray-50'>
				<div className='max-w-6xl mx-auto px-4'>
					{/* Section Title */}
					<div className='text-center mb-12'>
						<h3
							className='text-3xl font-semibold text-[#B1946A]'
							data-aos='fade-up'>
							{t('ourOffers')}
						</h3>
					</div>

					{/* Search Form */}
					<OfferSearch />

					{/* Offers Grid */}
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{offers.map((offer) => (
							<div
								key={offer.id}
								className='bg-white rounded-xl shadow-md transition hover:shadow-lg group overflow-hidden'
								data-aos='fade-up'
								data-aos-delay='100'>
								<Link href={`/offers/slugCategory/${offer.slug}`}>
									<div className='relative rounded-lg overflow-hidden'>
										<Image
											src={offer.image}
											alt={offer.title}
											width={400}
											height={400}
											className='w-full aspect-square object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110'
											loading='lazy'
										/>
										{/* Hover Overlay Social */}
										<div className='absolute left-0 right-0 bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 flex justify-center z-10'>
											<ul className='flex space-x-3 bg-black/40 p-2 rounded-t-lg'>
												<li>
													<button className='w-10 h-10 flex items-center justify-center rounded-md bg-[#B1946A] text-white text-xl hover:bg-white hover:text-[#B1946A] transition'>
														<FaCartPlus />
													</button>
												</li>
											</ul>
										</div>
									</div>
								</Link>

								{/* Content */}
								<div className='p-4 text-center'>
									<h3 className='text-lg text-[#24403f] font-medium mb-2'>
										{offer.title}
									</h3>
									<p className='flex justify-center items-center gap-2 text-gray-600'>
										{offer.price}
										<Image
											width={20}
											height={20}
											src={'/images/sar.png'}
											alt='SAR'
										/>
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Pagination */}
					<div className='mt-12 flex justify-center'>
						<Pagination />
					</div>
				</div>
			</section>
		</>
	);
};

export default Offers;

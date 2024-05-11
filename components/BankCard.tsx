import { formatAmount } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  card: number
}

const BankCard: React.FC<CreditCardProps & Props> = ({
	account,
	userName,
  showBalance = true,
  card
}) => {
	return (
		<div className='flex flex-col'>
			<Link
				href='/'
				className='flex justify-evenly bg-bank-gradient h-48 rounded-3xl border border-white shadow-creditCard text-white'
			>
				<div className='rounded-l-[25px] w-full flex flex-col justify-between bg-gray-700 bg-bank-gradient h-full py-3 pl-5 pr-8'>
					<h2 className='font-semibold'>{userName}</h2>
					<div className='flex flex-col gap-1'>
						<p className='flex justify-between'>
							<span className='text-sm'>
								{userName.toUpperCase()}
							</span>
							<span className='text-sm'>●● / ●●</span>
						</p>
						<p className='text-base'>●●●● ●●●● ●●●● 1234</p>
					</div>
				</div>

				<div className='flex flex-col justify-between items-center p-3'>
					<Image
						src='/icons/Paypass.svg'
						width={20}
						height={20}
						alt='paypass'
						className=''
					/>

					{card === 0 ? (
						<Image
							src='/icons/visa.svg'
							width={45}
							height={32}
							alt='mastercard'
							className=''
						/>
					) : (
						<Image
							src='/icons/mastercard.svg'
							width={45}
							height={32}
							alt='mastercard'
							className=''
						/>
					)}
				</div>

				<Image
					src='/icons/lines.png'
					width={316}
					height={190}
					alt='lines'
					className='absolute top-0 left-0'
				/>
			</Link>

			{/* {showBalance && <Copy title={account?.sharaebleId} />} */}
		</div>
	);
};

export default BankCard;

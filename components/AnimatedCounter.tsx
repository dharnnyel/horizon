'use client';

import React from 'react';
import CountUp from 'react-countup';

type AnimatedCounterProps = {
	amount: number;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
	amount,
}) => {
	return <CountUp end={amount} prefix='$' duration={2.75} decimal='.' decimals={2} className='w-full' />;
};

export default AnimatedCounter;

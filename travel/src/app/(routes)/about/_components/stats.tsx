"use client"
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
    const stats = [
        {label: "Visited Countries", end: 50, suffix: "+"},
        {label: "Happy Clients", end: 1200, suffix: "+"},
        {label: "Completed Tours", end: 300, suffix: "+"},
    ];

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })

    return (
        <div className='bg-blue-50 py-16'>
            <div className='mx-auto container text-center'>
                <h2 className='text-3xl lg:text-5xl font-bold text-blue-600 mb-8'>Why Choose Us?</h2>
                <p className='text-gray-600 max-w-3xl mx-auto mb-12'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur temporibus est, neque impedit autem dolores hic delectus molestias error magnam nostrum! Nostrum, neque numquam.
                </p>
                <div ref={ref} className='grid grid-cols-1 sm:grid-cols-3 gap-8 px-6'>
                    {stats.map((stat, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-lg p-8 flex flex-col items-center'>
                            <h3 className='text-4xl lg:text-6xl font-bold text-orange-500'>
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={stat.end}
                                        duration={2.5}
                                        suffix={stat.suffix}
                                    >
                                    </CountUp>
                                ):(
                                    "0"
                                )}
                            </h3>
                            <p className='text-gray-600 text-lg mt-4'>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats
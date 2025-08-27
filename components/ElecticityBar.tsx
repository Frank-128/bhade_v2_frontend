"use client"
import { data } from '@/constants/data'
import { BarLegendProps, ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react';

declare var window:Window;
const ElectricityBar = () => {
      const [isSmallerScreen, setIsSmallerScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsSmallerScreen(window.innerWidth < 400)
        handleResize() // set initial value
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const  legends: readonly BarLegendProps[] | undefined=!isSmallerScreen ?[
        {
            dataFrom: 'keys' as 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
           
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]:undefined;
    return (
    <ResponsiveBar
        data={data}
        keys={[
            'room101',
            'room102',
            'room103',
            'room104',
            'room105',
            'room106'
        ]}
        indexBy="room"
        margin={{ top: 50, right: isSmallerScreen? 0:130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'room105'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'room103'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'months',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'units',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={legends}
        role="application"
        ariaLabel="Electricity usage"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in room: "+e.indexValue}
    />
)}
export default ElectricityBar

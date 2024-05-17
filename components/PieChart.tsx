"use client"
import { ResponsivePie } from '@nivo/pie'


const PieChart = () => {
    const data = [
        {
          "id": "block1",
          "label": "block1",
          "value": 9,
          "color": "hsl(193, 70%, 50%)"
        },
        {
          "id": "block2",
          "label": "block2",
          "value": 476,
          "color": "hsl(254, 70%, 50%)"
        },
        {
          "id": "block3",
          "label": "block3",
          "value": 515,
          "color": "hsl(13, 70%, 50%)"
        },
        {
          "id": "block4",
          "label": "block4",
          "value": 142,
          "color": "hsl(176, 70%, 50%)"
        },
        {
          "id": "block5",
          "label": "block5",
          "value": 587,
          "color": "hsl(204, 70%, 50%)"
        }
      ]
    return (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'block1'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'block2'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'block3'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'block3'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'block4'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'block5'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'block6'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'block7'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    
)}

export default PieChart
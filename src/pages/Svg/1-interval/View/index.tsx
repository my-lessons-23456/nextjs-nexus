/* eslint-disable no-console */
import { useEffect, useState } from 'react'

type Colors = [number, number, number]

export const Svg1IntervalPageView: React.FC = () => {
  const [color, colorSetter] = useState<Colors>()

  useEffect(() => {
    const interval = setInterval(() => {
      const color = Array.from([1, 2, 3], () =>
        Math.round(Math.random() * 255)
      ) as Colors

      console.log('new color 2', color)

      colorSetter(color)
    }, 1000)

    return () => {
      clearInterval(interval)
      //
    }
  }, [])

  console.log('color', color)

  return (
    <>
      <div>Устанавливаем интервал для смены цвета</div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 414.46"
        width="200"
      >
        <title>dino</title>
        <path
          d="M133.69 256.8h-58c7.61-20.46 25.64-28.78 35-45.75-17.41-7.91-35.29-2-52.37-3.91-4.76-.52-11.55 1.95-12.86-4.74-.6-3.09 2.89-7.59 5.51-10.6 8.34-9.57 17.15-18.74 30.93-33.63-22.73 0-39.29-.09-55.84 0-10.74.08-16.4-4.14-7.2-13C57.05 108.24 87 62.32 134.46 35.32c39-22.14 79.91-31.45 123.76-15.18a123.51 123.51 0 0 0 60.72 6.71c23.58-3.11 43.19 6.3 49.79 31 5.75 21.58 19.44 33.48 39.24 40.65 11.3 4.1 22.39 8.81 33.53 13.35 45.5 18.6 59.5 69.61 30.21 110.25-13.63 18.9-59.71 34.51-83.43 27.24-13.33-4.08-26.55-7-40.52-6.78-33.2.47-52.75 16.75-59.78 49-6.67 30.56-6.49 61.72-7.83 92.6-1 22.2-7.58 23.35-26.54 16.32-43.44-16.1-81.35-40.38-117-69.37-16.91-13.74-24.93-27-11.84-47.67 4.32-6.88 5.42-15.82 8.92-26.64z"
          fill={color ? `#${color.join('')}` : '#0d0e0e'}
        />
      </svg>
    </>
  )
}
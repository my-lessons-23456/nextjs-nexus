import { NextSeo } from 'next-seo'
import { Page } from '../../_App/interfaces'
import { Svg1IntervalPageView } from './View'

export const Svg1IntervalPage: Page = () => {
  return (
    <>
      <NextSeo title="SVG interval lesson" />

      <Svg1IntervalPageView />
    </>
  )
}

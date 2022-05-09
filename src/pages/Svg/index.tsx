import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { Page } from '../_App/interfaces'

export const SvgPage: Page = () => {
  return (
    <>
      <NextSeo title="SVG lessons" />

      <ul>
        <li>
          <Link href="/svg/1-interval">Interval</Link>
        </li>
        <li>
          <Link href="/svg/2-editor">Editor</Link>
        </li>
      </ul>
    </>
  )
}

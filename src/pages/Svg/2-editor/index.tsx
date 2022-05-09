import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import { SvgEditorPageView } from './View'

export const SvgEditorPage: Page = () => {
  return (
    <>
      <NextSeo title="SVG Editor" />

      <SvgEditorPageView />
    </>
  )
}

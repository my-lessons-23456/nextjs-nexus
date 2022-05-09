import Link from 'next/link'
import { MainMenuStyled } from './styles'

export const MainMenu: React.FC = () => {
  return (
    <MainMenuStyled>
      <Link href="/">Главная</Link>

      <Link href="/svg">SVG</Link>
    </MainMenuStyled>
  )
}

import CardBase from './CardBase.astro'
import CardInfo from './CardInfo.astro'
import CardRecentPost from './CardRecentPost.astro'
import CardCategroies from './CardCategroies.astro'
import CardTagCloud from './CardTagCloud.astro'
const cards = {
  CardBase,
  CardInfo,
  CardRecentPost,
  CardCategroies,
  CardTagCloud,
}
export type CardNameAllow =
  | 'CardBase'
  | 'CardInfo'
  | 'CardRecentPost'
  | 'CardCategroies'
  | 'CardTagCloud'

export const useCard = (name: CardNameAllow) => cards[name]

export default cards

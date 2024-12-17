import CardBase from './CardBase.astro'
import CardInfo from './CardInfo.astro'
import CardRecentPost from './CardRecentPost.astro'
import CardCategroies from './CardCategroies.astro'
import CardTagCloud from './CardTagCloud.astro'
type Card = (_props: any) => any
const cards = {
  CardBase,
  CardInfo,
  CardRecentPost,
  CardCategroies,
  CardTagCloud,
}
type CardName =
  | 'CardBase'
  | 'CardInfo'
  | 'CardRecentPost'
  | 'CardCategroies'
  | 'CardTagCloud'

const getCardByName = (name: string|CardName) => {
  const cardNameAllow = Object.keys(cards)
  if (!cardNameAllow.includes(name)) {
    throw new Error(`Card [${name}] not exist or is not exported, available cards: ${cardNameAllow.join(', ')}`)
  }
  return cards[name as CardName]
}
//参数允许为 CardBase / 'CardBase' / [CardBase,props]
//统一输出为 Card
export type EnsuredCardParams = Card | CardName | string | [ Card | CardName | string , any]
export const ensuredCard = (p: EnsuredCardParams) => {
  let card, props = {}
  if (Array.isArray(p)) {
    let [ cardNameOrCard, _props = {} ] = p
    card = (typeof cardNameOrCard === 'string') ? getCardByName(cardNameOrCard) : cardNameOrCard as Card
    props = _props
  } else if (typeof p === 'string') {
    card = getCardByName(p)
  } else {
    card = p
  }
  return [card, props] as [Card, any]
}

export default cards
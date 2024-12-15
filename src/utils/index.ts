import { DEFAULT_FRONTMATTER } from '@/config'

export const titleColor2styleVars = (titleColor?: string) => {
  if (!titleColor) titleColor = DEFAULT_FRONTMATTER.titleColor
  let [lightColorsStr, darkColorsStr = lightColorsStr] = titleColor?.split('|')
  lightColorsStr = lightColorsStr.includes(',') ? lightColorsStr : lightColorsStr + ',' + lightColorsStr
  darkColorsStr = darkColorsStr.includes(',') ? darkColorsStr : darkColorsStr + ',' + darkColorsStr
  return `--gc-text-bgimg:linear-gradient(to right,${lightColorsStr}); --gc-text-bgimg-dark:linear-gradient(to right,${darkColorsStr});`
}

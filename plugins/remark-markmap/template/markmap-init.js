const { markmap } = window
const { Markmap, loadCSS, loadJS } = markmap

document.querySelectorAll('.markmap-wrap').forEach((wrap) => {
  const svg = wrap.querySelector('svg')
  const data = JSON.parse(wrap.getAttribute('data'))
  wrap.removeAttribute('data')
  Markmap.create(svg,null,data)
})

// Add sub-menu elements
let elements = [
  { text: 'Facade', href: '/docs/facade' },
  { text: 'Factory', href: '/docs/factory' },
  { text: 'Config', href: '/docs/config' },
  { text: 'Dependency Provider', href: '/docs/dependency-provider' },
]

let ul = document.createElement('ul')
ul.classList.add('dropdown')

for (const element of elements) {
  let li = document.createElement('li')
  let entry = document.createElement('a')
  entry.text = element.text
  entry.href = element.href
  li.appendChild(entry)
  ul.appendChild(li)
}

document.querySelector('.menu ul li:first-child').appendChild(ul)

// Add Gacela logo icon in title
let htmlLogo = '<div class="logo"><a href="\\">\n' +
  '  <svg width="50" viewBox="0 -20 260 235" xmlns="http://www.w3.org/2000/svg">\n' +
  '    <g fill="none" stroke="#000000" stroke-width="3" stroke-linejoin="round">\n' +
  '      <path d="M47,8.3l104.5,45.3l28.6,44.8l-15,30l-6.9-4.2l1.1-10.2l-21.1-53.2L47,8.3z"></path>\n' +
  '      <path d="M67.8,1.5L161,52.7l26,41.1l-6.9,4.6l-28.6-44.8l-36.4-15.8L67.8,1.5z"></path>\n' +
  '      <path d="M77.6,169.4l76.3-69.1l5.4,13.7l-1.1,10.2l6.9,4.2L112.8,185L77.6,169.4z"></path>\n' +
  '      <path d="M140,212.8l45.6-55.2l-20.5-29.2L112.8,185L140,212.8z"></path>\n' +
  '      <path d="M165.1,128.4l-6.9-4.2l5.9-53.2l10.9,37.7L165.1,128.4z"></path>\n' +
  '      <path d="M185.6,157.6l64.7,0.7l-85.2-29.9L185.6,157.6z"></path>\n' +
  '      <path d="M187,93.8l20.7,23.1l49.2,26.5l-6.6,14.9l-85.2-29.9l15-30L187,93.8z"></path>\n' +
  '      <path d="M189.2,69.1l-5.3,19.7l-3.6-5.7L189.2,69.1z"></path>\n' +
  '    </g>\n' +
  '  </svg>\n' +
  '</a></div>'

document.querySelector('#header .logo').innerHTML = htmlLogo
document.querySelector('#mobile-navbar .mobile-header-logo').innerHTML = htmlLogo

// Composer require
const copyButton = document.querySelector('#installation-composer .button-copy-code-snippet');
const codeText = document.querySelector('#installation-composer code')

copyButton.addEventListener('click', _ => {
  const selection = window.getSelection();

  const currentRange = selection.rangeCount === 0
      ? null : selection.getRangeAt(0);

  const range = document.createRange();
  range.selectNodeContents(codeText);
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand('copy');
  } finally {
    selection.removeAllRanges();
    currentRange && selection.addRange(currentRange);
  }
});

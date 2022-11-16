const capitalize = sen => sen.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

const shorten = (word, n) => word.length > n ? word.substring(0, n) + '...' : word

const formatCurrency = price => price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

export { capitalize, shorten, formatCurrency }
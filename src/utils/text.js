const capitalize = sen => sen.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

const shorten = (word, n) => word.length > n ? word.substring(0, n) + '...' : word

export { capitalize, shorten }
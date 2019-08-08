const capitalise = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export default class Dog {
  constructor (imageUrl) {
    this.imageUrl = imageUrl
    this.id = imageUrl.split('/')[4]
    this.displayName = this.id.split('-').map(s => capitalise(s)).reverse().join(' ')
  }
}
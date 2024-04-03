import { products } from '../data/products'

export const sessionInit = () => {
  const cart = []
  sessionStorage.setItem('cart', JSON.stringify(cart))
}

export const getCart = () => {
  if (sessionStorage.getItem('cart') === null) sessionInit()
  return(JSON.parse(sessionStorage.getItem('cart')))
}

export const addToCart = (newId) => {
  let isNewStuff = true
  if (sessionStorage.getItem('cart') === null) sessionInit()
  const cart = JSON.parse(sessionStorage.getItem('cart'))

  cart.forEach((item, i, arr) => {
    if (item.id === newId) {
      cart[i].count += 1
      isNewStuff = false
    }
  });

  if (isNewStuff) cart.push({id: newId, count: 1})

  sessionStorage.setItem('cart', JSON.stringify(cart))
}

export const incrementProduct = (id) => {
  const cart = JSON.parse(sessionStorage.getItem('cart'))

  cart.forEach((item, i, arr) => {
    if (item.id === id) {
      cart[i].count += 1
    }
  });

  sessionStorage.setItem('cart', JSON.stringify(cart))
}

export const decrementProduct = (id) => {

  const cart = JSON.parse(sessionStorage.getItem('cart'))

  cart.forEach((item, i, arr) => {
    if (item.id === id) {
      if (cart[i].count > 1)
        cart[i].count -= 1
    }
  });

  sessionStorage.setItem('cart', JSON.stringify(cart))
}

export const deleteProduct = (id) => {
  const cart = JSON.parse(sessionStorage.getItem('cart'))

  cart.forEach((item, i, arr) => {
    if (item.id === id) {
      cart.splice(i, 1)
    }
  });

  sessionStorage.setItem('cart', JSON.stringify(cart))
}

export const getProductsCount = () => {
  if (sessionStorage.getItem('cart') === null) sessionInit()
  const cart = JSON.parse(sessionStorage.getItem('cart'))
  let productsCount = 0;

  cart.forEach((item, i, arr) => {
    productsCount += cart[i].count

  });

  return productsCount
}

export const getProductsPrice = () => {
  if (sessionStorage.getItem('cart') === null) sessionInit()
  const cart = JSON.parse(sessionStorage.getItem('cart'))
  let productsPrice = 0;

  cart.forEach((item, i, arr) => {
    let currentProduct = products.filter(gg => {
      return gg.id === item.id;
    })
    productsPrice += cart[i].count * currentProduct[0].price
  });
  
  return productsPrice
}
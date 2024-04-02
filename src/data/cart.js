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
    if (item.id == newId) {
      cart[i].count += 1
      isNewStuff = false
    }
  });

  
  if (isNewStuff) cart.push({id: newId, count: 1})

  sessionStorage.setItem('cart', JSON.stringify(cart))
  console.log(cart);
}
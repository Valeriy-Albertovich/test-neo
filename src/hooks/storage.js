import { create } from 'zustand'
import { getProductsCount, getProductsPrice } from '../data/cart'

export const useStore = create((set) => ({
  count: getProductsCount(),
  price: getProductsPrice(),
  setCount: () => set(() => ({count: getProductsCount()})),
  setPrice: () => set(() => ({price: getProductsPrice()})),
}))

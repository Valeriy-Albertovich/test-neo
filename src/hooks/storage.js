import { create } from 'zustand'

const useCart = create(() => ({ cart: new Map() }))

export default useCart
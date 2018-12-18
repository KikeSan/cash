import { CHANGE_MENU, ADD_CATEGORY, ADD_CUENTA } from './action-types'

export const changeMenu = idMenu => ({
	type: CHANGE_MENU,
	payload: idMenu
})

export const addCategory = categ => ({
	type: ADD_CATEGORY,
	payload: categ
})

export const addCuenta = cta => ({
	type: ADD_CUENTA,
	payload: cta
})

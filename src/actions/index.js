import { CHANGE_MENU, ADD_CATEGORY } from './action-types'

export const changeMenu = idMenu => ({
	type: CHANGE_MENU,
	payload: idMenu
})

export const addCategory = categ => ({
	type: ADD_CATEGORY,
	payload: categ
})

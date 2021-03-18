import * as types from "../types"
import { getRandomColor } from "../utils"

const initialState = {
    contacts: [],
    selectedContact: [],
    addNewContact: false,
    contact: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
        company: "",
        color: getRandomColor()
    }
}

export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.GET_CONTACTS:
            return { ...state, contacts: [...state.contacts, ...payload], selectedContact: payload?.[0] }

        case types.SELECTED_CONTACT:
            return { ...state, selectedContact: payload }


        case types.ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, payload], addNewContact: false, contact: initialState.contact }

        case types.SHOW_MODAL_FORM:
            return { ...state, addNewContact: payload }

        case types.SORT_BY: {
            return {
                ...state, contacts: payload === "name" ?
                    [...state.contacts]?.sort((a, b) => (a.fullName > b.fullName) ? 1 : -1) :
                    [...state.contacts]?.sort((a, b) => (a.company > b.company) ? 1 : -1)
            }
        }

        default:
            return state
    }
}
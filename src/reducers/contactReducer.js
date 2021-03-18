import * as types from "../types"


const initialState = {
    contacts: [],
    selectedContact: [],
    addNewContact: false
}

export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.GET_CONTACTS:
            return { ...state, contacts: [...state.contacts, ...payload], selectedContact: payload?.[0] }

        case types.SELECTED_CONTACT:
            return { ...state, selectedContact: payload }
            
        
        case types.ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, payload], }
        
        case types.SHOW_MODAL_FORM:
            return { ...state, addNewContact: payload }

        default:
            return state
    }
}
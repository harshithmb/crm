import * as types from "../types"


const initialState = {
    contacts: [],
    selectedContact: []
}

export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.GET_CONTACTS:
            return { ...state, contacts: [...state.contacts, ...payload], selectedContact: payload?.[0] }

        case types.SELECTED_CONTACT:
            return { ...state, selectedContact: payload }
        
        default:
            return state
    }
}
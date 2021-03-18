import * as types from "../types";

export const addContact = (payload) => {
    return ({
        type: types.ADD_CONTACT,
        payload
    })
}

export const getContacts = (payload) => ({
    type: types.GET_CONTACTS,
    payload
})

export const setSelectedContact = (payload) => ({
    type: types.SELECTED_CONTACT,
    payload
})


export const sortContacts = (payload) => ({
    type: types.SORT_BY,
    payload
})

export const showModalForm = (payload) => ({
    type: types.SHOW_MODAL_FORM,
    payload
})
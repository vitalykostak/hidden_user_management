import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { filterUsers } from '../../helpers'
import { fetchUsersList } from '../services/fetch-users-list'
import { type UsersFilters, type UsersSchema } from '../types'

const initialState: UsersSchema = {
    items: [],
    filteredItems: [],
    loading: false,
    filters: {
        username: '',
        phone: '',
        email: '',
        name: ''
    }
}

export const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Partial<UsersFilters>>) => {
            state.filters = { ...action.payload }
            state.filteredItems = filterUsers(state.items, state.filters)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersList.pending, (state) => {
                state.error = undefined
                state.loading = true
            })
            .addCase(fetchUsersList.fulfilled, (state, action) => {
                state.loading = false
                state.items = [...action.payload]
                state.filteredItems = filterUsers(action.payload, state.filters)
            })
            .addCase(fetchUsersList.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const usersActions = usersListSlice.actions
export const usersReducer = usersListSlice.reducer

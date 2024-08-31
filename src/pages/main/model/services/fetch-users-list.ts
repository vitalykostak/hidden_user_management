import { createAsyncThunk } from '@reduxjs/toolkit'

import { type AppDispatch } from '@/app/providers/store-provider/config/create-store'
import { type StateSchema } from '@/app/providers/store-provider/types/state-schema'
import { type User } from '@/entities/user'
import { fetchUsers } from '@/shared/api/user-repository'

export const fetchUsersList = createAsyncThunk<
User[],
undefined,
{
    dispatch: AppDispatch
    rejectValue: string
    state: StateSchema
}
>('mainPage/fetchUsersList', async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi

    try {
        const result = await fetchUsers()

        if (!result) {
            throw new Error()
        }

        return result
    } catch (e) {
        return rejectWithValue('fetching error')
    }
})

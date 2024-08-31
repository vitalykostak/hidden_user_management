import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { usersReducer } from '@/pages/main'

import { type StateSchema } from '../types/state-schema'

export const createReduxStore = () => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        users: usersReducer
    }

    const store = configureStore<StateSchema>({
        reducer: rootReducer
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

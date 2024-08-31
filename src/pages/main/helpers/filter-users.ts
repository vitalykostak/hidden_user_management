import { type User } from '@/entities/user'

import { type UsersFilters } from '../model/types'

const isMatchFilter = (value: string, filter: string) =>
    value.trim().toLowerCase().includes(filter.trim().toLowerCase())

export const filterUsers = (users: User[], filters: UsersFilters) => {
    return users.filter((user) => {
        const filtersKeys = Object.keys(filters) as Array<keyof UsersFilters>

        for (const key of filtersKeys) {
            if (filters?.[key] && !isMatchFilter(user?.[key], filters?.[key] || '')) {
                return false
            }
        }

        return true
    })
}

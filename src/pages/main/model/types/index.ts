import { type User } from '@/entities/user'

export type UsersFilters = {
    name?: string
    email?: string
    username?: string
    phone?: string
}

export type UsersSchema = {
    items: User[]
    filteredItems: User[]
    loading: boolean
    error?: string
    filters: UsersFilters
}

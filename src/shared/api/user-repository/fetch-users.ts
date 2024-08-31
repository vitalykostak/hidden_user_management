import { $api } from '../api'

type UserDto = {
    id: number
    name: string
    username: string
    email: string
    phone: string
}

export const fetchUsers = async (): Promise<UserDto[]> => (await $api.get<UserDto[]>('/users')).data

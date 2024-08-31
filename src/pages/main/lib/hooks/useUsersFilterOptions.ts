import { useAppDispatch } from '@/shared/lib/hooks'
import { type FilterOption } from '@/shared/ui/components/filter/lib'

import { useUsersFilters } from '../../model/selectors/users'
import { usersActions } from '../../model/slices/users'
import { type UsersFilters } from '../../model/types'

export const useUsersFilterOptions = () => {
    const filters = useUsersFilters()

    const dispatch = useAppDispatch()

    const removeFilterField = (field: keyof UsersFilters) => () =>
        dispatch(usersActions.setFilters({ ...filters, [field]: '' }))
    const setFilterField = (field: keyof UsersFilters) => (value: string) =>
        dispatch(usersActions.setFilters({ ...filters, [field]: value }))

    const filterOptions: Array<FilterOption<keyof UsersFilters>> = [
        {
            key: 'name',
            label: 'Name',
            selected: Boolean(filters.name),
            filterRemoved: removeFilterField('name'),
            input: {
                value: filters.name || '',
                valueChanged: setFilterField('name')
            }
        },
        {
            key: 'username',
            label: 'Username',
            selected: Boolean(filters.username),
            filterRemoved: removeFilterField('username'),
            input: {
                value: filters.username || '',
                valueChanged: setFilterField('username')
            }
        },
        {
            key: 'email',
            label: 'Email',
            selected: Boolean(filters.email),
            filterRemoved: removeFilterField('email'),
            input: {
                value: filters.email || '',
                valueChanged: setFilterField('email')
            }
        },
        {
            key: 'phone',
            label: 'Phone',
            selected: Boolean(filters.phone),
            filterRemoved: removeFilterField('phone'),
            input: {
                value: filters.phone || '',
                valueChanged: setFilterField('phone')
            }
        }
    ]

    return filterOptions
}

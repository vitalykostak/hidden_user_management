import { type User } from '@/entities/user'
import { type FilterOption } from '@/shared/ui/components/filter/lib'
import { TableView } from '@/shared/ui/components/table-view'

import { mapUsersItemsToDataGridProps } from '../helpers'

type UsersListProps<T extends string> = {
    items: User[]
    filterOptions: Array<FilterOption<T>>
    loading?: boolean
}

export const UsersList = <T extends string>(props: UsersListProps<T>) => {
    const { items, filterOptions, loading } = props

    const dataGridProps = mapUsersItemsToDataGridProps(items, loading)

    return <TableView dataGrid={dataGridProps} filterOptions={filterOptions} />
}

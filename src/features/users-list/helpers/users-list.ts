import { type User } from '@/entities/user'
import { type DataGridProps } from '@/shared/ui/components/data-grid'

type UserDataTableCell = {
    key: keyof Pick<User, 'name' | 'username' | 'email' | 'phone'>
    title: string
}

export const mapUsersItemsToDataGridProps = (items: User[], loading?: boolean): DataGridProps => {
    const columnsCells: UserDataTableCell[] = [
        {
            key: 'name',
            title: 'Name'
        },
        {
            key: 'username',
            title: 'Username'
        },
        {
            key: 'email',
            title: 'Email'
        },
        {
            key: 'phone',
            title: 'Phone'
        }
    ]

    return {
        loading,
        columns: { cells: columnsCells },
        rows: [
            ...items.map((item) => ({
                key: `${item.id}`,
                cells: columnsCells.map((c) => ({ key: item.id + c.key, title: item[c.key] }))
            }))
        ]
    }
}

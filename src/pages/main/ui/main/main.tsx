import { type FC } from 'react'

import { UsersList } from '@/features/users-list'
import { Page } from '@/widgets/page'

import { useFetchUsers, useUsersFilterOptions } from '../../lib/hooks'
import { useUsersList, useUsersLoading } from '../../model/selectors/users'

const Main: FC = () => {
    const users = useUsersList()
    const loading = useUsersLoading()

    const filterOptions = useUsersFilterOptions()

    useFetchUsers()

    return (
        <Page>
            <h1 className='text-3xl text-sky-950 font-bold text-center mb-5'>Users table list</h1>
            <UsersList items={users} filterOptions={filterOptions} loading={loading} />
        </Page>
    )
}

export default Main

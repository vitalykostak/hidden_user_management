import { useEffect } from 'react'

import { useAppDispatch } from '@/shared/lib/hooks'

import { fetchUsersList } from '../../model/services/fetch-users-list'

export const useFetchUsers = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(fetchUsersList())
    }, [dispatch])
}

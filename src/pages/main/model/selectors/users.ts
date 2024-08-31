import { buildSelector } from '@/shared/lib/store'

export const [useUsersList, selectUsersList] = buildSelector((state) => state.users.filteredItems)

export const [useUsersLoading, selectUsersLoading] = buildSelector((state) => state.users.loading)

export const [useUsersError, selectUsersError] = buildSelector((state) => state.users.error)

export const [useUsersFilters, selectUsersFilters] = buildSelector((state) => state.users.filters)

import { useDispatch } from 'react-redux'

import { type AppDispatch } from '@/app/providers/store-provider/config/create-store'

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

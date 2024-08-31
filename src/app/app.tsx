import { memo, type FC } from 'react'

import AppRouter from './providers/router/ui/app-router/app-router'

const App: FC = memo(() => {
    return <AppRouter />
})

export default App

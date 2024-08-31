import { Suspense, memo, type FC } from 'react'
import { Route, Routes, type RouteProps } from 'react-router-dom'

import { routeConfig } from '../../config/route-config'

const AppRouter: FC = memo(() => {
    const renderRoute = (r: RouteProps) => (
        <Route key={r.path} path={r.path} element={<Suspense>{r.element} </Suspense>} />
    )

    return <Routes>{Object.values(routeConfig).map((r) => renderRoute(r))}</Routes>
})

export default AppRouter

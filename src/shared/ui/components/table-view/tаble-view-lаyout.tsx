import { type ReactNode } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

type Props = {
    className?: string
    children: ReactNode
}

export const TableViewLayout = (props: Props) => {
    const { className, children } = props

    return (
        <div className={classNames('flex flex-col gap-[10px] w-full', {}, [className])}>
            {children}
        </div>
    )
}

TableViewLayout.Header = (props: Props) => {
    const { children } = props

    return <div className="w-full flex items-center justify-end">{children}</div>
}

TableViewLayout.Body = (props: Props) => {
    const { children } = props

    return <>{children}</>
}

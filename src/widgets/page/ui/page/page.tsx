import { type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

type PageProps = {
    className?: string
    children?: ReactNode
}

const Page: FC<PageProps> = (props) => {
    const { className, children } = props

    return <main className={classNames('pt-[40px] px-[100px]', {}, [className])}>{children}</main>
}

export default Page

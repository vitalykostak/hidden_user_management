import { type FC, type PropsWithChildren } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

export const Table: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return (
        <table
            className={classNames(
                'border-collapse rounded-md overflow-hidden shadow-md w-full fz-[14px]',
                {},
                [className]
            )}
        >
            {children}
        </table>
    )
}

export const TableHeader: FC<PropsWithChildren> = ({ children }) => {
    return <thead className='text-left text-white bg-sky-950 font-bold'>{children}</thead>
}

export const TableBody: FC<PropsWithChildren & { className?: string }> = ({
    children,
    className
}) => {
    return (
        <tbody
            className={classNames(
                '[&>tr]:border [&>tr:nth-child(even)]:bg-zinc-50  [&>tr:last-of-type]:border-b-2 [&>tr:last-of-type]:border-t-0 [&>tr:last-of-type]:border-x-0 [&>tr:last-of-type]:border-sky-950 hover:cursor-pointer',
                {},
                [className]
            )}
        >
            {children}
        </tbody>
    )
}

export const TableFotter: FC<PropsWithChildren> = ({ children }) => {
    return <tfoot>{children}</tfoot>
}

export const TableRow: FC<PropsWithChildren & { className?: string }> = ({
    children,
    className
}) => {
    return <tr className={classNames('', {}, [className])}>{children}</tr>
}

export const TableHeaderCell: FC<PropsWithChildren> = ({ children }) => {
    return <th className='py-[12px] px-[15px]'>{children}</th>
}

export const TableDataCell: FC<PropsWithChildren & { className?: string }> = ({
    children,
    className
}) => {
    return (
        <td className={classNames('py-[12px] px-[15px]', {}, [className])}>
            <span>{children}</span>
        </td>
    )
}

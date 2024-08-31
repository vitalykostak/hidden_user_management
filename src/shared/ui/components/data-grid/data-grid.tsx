import { type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import { Loader } from '../../kit/loader'
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '../table'

import { type HeaderDef, type RowDef } from './lib'

export type DataGridProps = {
    columns: HeaderDef
    rows: RowDef[]
    className?: string
    loading?: boolean
}

export const DataGrid: FC<DataGridProps> = (props) => {
    const { columns, rows, className, loading } = props

    if (loading) {
        return (
            <div
                className={classNames(
                    'flex flex-col min-h-[300px] border-t-2 border-sky-950 items-center justify-center shadow-md',
                    {},
                    [className]
                )}
            >
                <Loader className='text-sky-950' />
            </div>
        )
    }

    if (!rows.length) {
        return (
            <div
                className={classNames(
                    'flex flex-col min-h-[300px] border-t-2 border-sky-950 items-center justify-center shadow-md',
                    {},
                    [className]
                )}
            >
                <span className='text-md text-sky-950'>No records</span>
            </div>
        )
    }

    return (
        <Table className={className}>
            <TableHeader>
                <TableRow>
                    {columns.cells.map((c) => (
                        <TableHeaderCell key={c.key}>{c.title}</TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((r) => (
                    <TableRow key={r.key}>
                        {r.cells.map((c) => (
                            <TableDataCell key={c.key}>{c.title}</TableDataCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

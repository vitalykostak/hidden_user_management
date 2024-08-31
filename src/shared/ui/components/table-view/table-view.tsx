import { classNames } from '@/shared/lib/styles/classNames/classNames'

import { DataGrid, type DataGridProps } from '../data-grid'
import { Filter } from '../filter'
import { type FilterOption } from '../filter/lib'

type TableViewProps<T extends string> = {
    dataGrid: DataGridProps
    className?: string
    filterOptions?: Array<FilterOption<T>>
}

export const TableView = <T extends string>(props: TableViewProps<T>) => {
    const { dataGrid, className, filterOptions } = props

    if (!filterOptions) {
        return (
            <DataGrid
                columns={dataGrid.columns}
                rows={dataGrid.rows}
                className={className}
                loading={dataGrid.loading}
            />
        )
    }

    return (
        <div className={classNames('flex flex-col gap-[10px] w-full', {}, [className])}>
            <div className='w-full flex items-center justify-end'>
                <Filter options={filterOptions} />
            </div>
            <DataGrid columns={dataGrid.columns} rows={dataGrid.rows} loading={dataGrid.loading} />
        </div>
    )
}

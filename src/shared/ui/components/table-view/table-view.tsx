import { DataGrid, type DataGridProps } from '../data-grid'
import { Filter } from '../filter'
import { type FilterOption } from '../filter/lib'

import { TableViewLayout } from './tаble-view-lаyout'

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
        <TableViewLayout className={className}>
            <TableViewLayout.Header>
                <Filter options={filterOptions} />
            </TableViewLayout.Header>
            <TableViewLayout.Body>
                <DataGrid
                    columns={dataGrid.columns}
                    rows={dataGrid.rows}
                    loading={dataGrid.loading}
                />
            </TableViewLayout.Body>
        </TableViewLayout>
    )
}

export type CellDef = {
    key: string
    title: string
}

export type HeaderDef = {
    cells: CellDef[]
}

export type RowDef = {
    key: string
    cells: CellDef[]
}

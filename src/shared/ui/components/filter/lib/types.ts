type BaseOption<T extends string> = {
    key: T
    label: string
    selected?: boolean
    filterRemoved?: () => void
}

export type InputOption<T extends string> = {
    input: {
        value: string
        valueChanged: (value: string) => void
        placeholder?: string
    }
} & BaseOption<T>

// In future in might be export type Option = InputOption | SelectOption | MultiselectOption | DateRangeOption | DateTimeRangeOption ... etc
export type FilterOption<T extends string> = InputOption<T>

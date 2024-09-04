import { type FilterOption } from '../../lib'

import { OptionInput } from './option-input'

type Props<T extends string> = {
    option: FilterOption<T>
}

export const Option = <T extends string>(props: Props<T>) => {
    const { option } = props

    if (option.input) {
        return <OptionInput option={option} />
    }

    return null
}

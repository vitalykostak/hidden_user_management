import { Input } from '@/shared/ui/kit/input'

import { type InputOption } from '../../lib/types'

type Props<T extends string> = {
    option: InputOption<T>
}

export const OptionInput = <T extends string>(props: Props<T>) => {
    const { option } = props
    const { value, valueChanged, placeholder } = option.input

    return (
        <Input
            value={value}
            onChange={valueChanged}
            placeholder={placeholder || 'Type...'}
        />
    )
}

import {
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger
} from '@/shared/ui/kit/dropdown-menu'
import { Input } from '@/shared/ui/kit/input'
import { MenuItem } from '@/shared/ui/kit/menu-item'

import { type FilterOption } from '../lib'

type OptionListProps<T extends string> = {
    options: Array<FilterOption<T>>
}

export const OptionList = <T extends string>(props: OptionListProps<T>) => {
    const { options } = props

    return (
        <ul className='min-w-[150px]'>
            {options.map((o) => (
                <DropdownMenuSub key={o.key}>
                    <DropdownMenuSubTrigger>
                        <MenuItem
                            label={o.label}
                            selected={o.selected}
                            className='my-[6px]'
                            onClick={o.filterRemoved}
                        />
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <Input
                            value={o.input?.value}
                            onChange={o.input?.valueChanged}
                            placeholder='Type...'
                        />
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            ))}
        </ul>
    )
}

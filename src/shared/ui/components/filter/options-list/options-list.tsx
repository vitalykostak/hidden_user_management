import {
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger
} from '@/shared/ui/kit/dropdown-menu'
import { MenuItem } from '@/shared/ui/kit/menu-item'

import { type FilterOption } from '../lib'

import { Option } from './option'

type OptionListProps<T extends string> = {
    options: Array<FilterOption<T>>
}

export const OptionList = <T extends string>(props: OptionListProps<T>) => {
    const { options } = props

    return (
        <ul className="min-w-[150px]">
            {options.map(o => (
                <DropdownMenuSub key={o.key}>
                    <DropdownMenuSubTrigger>
                        <MenuItem
                            label={o.label}
                            selected={o.selected}
                            className="my-[6px]"
                            onClick={o.filterRemoved}
                        />
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <Option
                            key={o.key}
                            option={o}
                        />
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            ))}
        </ul>
    )
}

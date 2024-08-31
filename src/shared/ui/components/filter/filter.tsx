import { useState } from 'react'

import { ActionTile } from '../../kit/action-tile'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuPortal,
    DropdownMenuTrigger
} from '../../kit/dropdown-menu'

import { type FilterOption } from './lib'
import { OptionList } from './options-list'

type FilterProps<T extends string> = {
    options: Array<FilterOption<T>>
}

export const Filter = <T extends string>(props: FilterProps<T>) => {
    const { options } = props

    const [open, setOpen] = useState<boolean>(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className='border-0 outline-none'>
                <ActionTile label='Filter' />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
                <DropdownMenuContent>
                    <OptionList options={options} />
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    )
}

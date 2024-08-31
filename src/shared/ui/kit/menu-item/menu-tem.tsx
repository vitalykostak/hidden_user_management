import { classNames } from '@/shared/lib/styles/classNames/classNames'

import { DropdownMenuItem } from '../dropdown-menu'

export type MenuItemDef = {
    onClick?: () => void
    label: string
    selected?: boolean
    asDropdownMenuItem?: boolean
    className?: string
}

export const MenuItem: React.FC<MenuItemDef> = ({
    onClick,
    label,
    selected,
    asDropdownMenuItem,
    className
}) => {
    const Container = asDropdownMenuItem ? DropdownMenuItem : 'li'

    return (
        <Container
            className={classNames(
                'min-w-200 flex cursor-pointer items-center p-1 hover:bg-transparent-light py-[6px] rounded-md',
                {
                    'bg-gray-200': selected,
                    'hover:bg-gray-100': !selected
                },
                [className]
            )}
            onClick={onClick}
        >
            <div className='flex items-center justify-between w-full'>
                <span className='text-xs text-black'>{label}</span>
                {selected && (
                    <div className='flex items-center gap-[4px]'>
                        <div className='w-[10px] h-[10px] bg-green-100 rounded-full' />
                        <span className='text-xs text-gray-300 underline'>reset</span>
                    </div>
                )}
            </div>
        </Container>
    )
}

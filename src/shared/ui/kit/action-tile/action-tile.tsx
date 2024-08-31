import { type FC, type ReactNode } from 'react'

type ActionTileProps = {
    label: string
    icon?: ReactNode
}

export const ActionTile: FC<ActionTileProps> = ({ label, icon }) => (
    <div className='flex items-center gap-1 rounded-lg border border-sky-950 bg-white py-[5px] px-[10px]'>
        {icon}
        <span className='text-xs font-bold text-sky-950'>{label}</span>
    </div>
)

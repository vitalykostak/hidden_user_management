import { type FC, type InputHTMLAttributes } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

type InputProps = {
    onChange?: (value: string) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

export const Input: FC<InputProps> = (props) => {
    const { onChange, className, ...rest } = props

    return (
        <input
            {...rest}
            onChange={(e) => {
                onChange?.(e.target.value)
            }}
            className={classNames('text-xs text-black outline-none py-[8px] pl-[8px]', {}, [
                className
            ])}
        />
    )
}

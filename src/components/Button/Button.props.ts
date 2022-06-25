import { MouseEvent } from 'react'

export interface Props {
	cooledDown: boolean,
	disabled: boolean,
	children: string,
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	overdrived?: boolean,
}

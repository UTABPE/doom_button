import { useState, useEffect, useRef } from 'react'

import { WrapperStyled, TrophetStyled } from './Trophets.style'
import Props from './Trophets.props'

const Trophets = ({ counter }: Props) => {
	const ref = useRef<HTMLDivElement>(null)

	const [trophets, setTrophets] = useState<Array<number>>([])

	useEffect(() => {
		const flooredCounter = Math.floor(counter / 10) * 10

		if (flooredCounter !== 0 && !trophets.includes(flooredCounter)) {
			setTrophets(prevState => [...prevState, flooredCounter])
		}

		scrollToTheEnd()
	}, [counter, trophets])

	const scrollToTheEnd = (): void => {
		if (ref.current) {
			ref.current.scroll({
				left: ref.current.scrollWidth,
				behavior: 'smooth',
			})
		}
	}

	return (
		<WrapperStyled ref={ref}>
			{trophets.map(t => (
				<TrophetStyled key={t}>
					<p>{t}</p>
					{' '}
					<p>points</p>
				</TrophetStyled>
			))}
		</WrapperStyled>
	)
}

export default Trophets

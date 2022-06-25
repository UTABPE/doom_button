import { useState, useEffect } from 'react'

const useOverdrive = () => {
	const [isOverdriveActive, setOverdriveActive] = useState<boolean>(false)
	const [overdriveTimerSeconds, setOverdriveTimerSeconds] = useState<number>(10)

	useEffect(() => {
		let overdriveTimer: NodeJS.Timer | null = null

		if (isOverdriveActive) {
			overdriveTimer = setInterval(() => setOverdriveTimerSeconds(prevState => prevState - 1), 1000)
		}

		if (overdriveTimer && overdriveTimerSeconds === 0) {
			clearInterval(overdriveTimer)
			resetOverdrive()
		}

		return () => { overdriveTimer && clearInterval(overdriveTimer) }
	}, [isOverdriveActive, overdriveTimerSeconds])

	const activateOverdrive = (): void => setOverdriveActive(true)

	const resetOverdrive = (): void => {
		setOverdriveActive(false)

		setOverdriveTimerSeconds(10)
	}

	return {
		isOverdriveActive, overdriveTimerSeconds, activateOverdrive,
	}
}

export default useOverdrive

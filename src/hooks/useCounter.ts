import { useState, useEffect } from 'react'

const counterDecreaseDelay = 1000

const coolDownActivationDelay = 10

const defaultIncreaseCounterNumber = 1

const defaultDecreaseCounterNumber = 1

const useCounter = () => {
	const [counter, setCounter] = useState<number>(0)

	const [isCoolDownActive, setCoolDownActive] = useState<boolean>(false)

	const [coolDownTimerSeconds, setCoolDownTimerSeconds] = useState<number>(0)

	const [isCoolDownTimerActive, setCoolDownTimerActive] = useState<boolean>(false)

	useEffect(() => {
		let decreaseCounterTimer: NodeJS.Timer | null = null

		if (isCoolDownActive) {
			decreaseCounterTimer = setInterval(decreaseCounter, counterDecreaseDelay)
		}

		if ((!isCoolDownActive || counter === 0) && decreaseCounterTimer) {
			clearInterval(decreaseCounterTimer)

			setCoolDownTimerSeconds(0)
			setCoolDownActive(false)
			setCoolDownTimerActive(false)
		}

		return () => {
			decreaseCounterTimer && clearInterval(decreaseCounterTimer)
		}
	}, [isCoolDownActive, counter])

	useEffect(() => {
		if (coolDownTimerSeconds >= coolDownActivationDelay) {
			setCoolDownActive(true)
		}
	}, [coolDownTimerSeconds])

	useEffect(() => {
		if (isCoolDownTimerActive) {
			const coolDownTimer: NodeJS.Timer = setInterval(() => {
				setCoolDownTimerSeconds(prevState => prevState + 1)
			}, 1000)

			return () => clearInterval(coolDownTimer)
		}
	}, [isCoolDownTimerActive])

	const resetCoolDown = (): void => {
		setCoolDownActive(false)

		setCoolDownTimerSeconds(0)
		setCoolDownTimerActive(true)
	}

	const increaseCounter = (number?: number): void => {
		setCounter(prevState => prevState + (number ?? defaultIncreaseCounterNumber))
	}

	const decreaseCounter = (number?: number): void => {
		setCounter(prevState => prevState - (number ?? defaultDecreaseCounterNumber))
	}

	return {
		counter, coolDownTimerSeconds, isCoolDownActive, increaseCounter, resetCoolDown,
	}
}

export default useCounter

//test
import {
	WrapperStyled,
	BodyStyled,
} from './App.style'
import { useCounter, useOverdrive, useClicksChecker } from './hooks'
import { Stats, Trophets, Button } from './components'

const App = () => {
	const {
		isOverdriveActive,
		overdriveTimerSeconds,
		activateOverdrive,
	} = useOverdrive()

	const {
		counter,
		coolDownTimerSeconds,
		isCoolDownActive,
		increaseCounter,
		resetCoolDown,
	} = useCounter()

	const {
		isClicksCheckActive,
		isMaxClicksPerSecond,
		activateClicksCheck,
		increaseClicksPerSecond,
		clicksPerSecond,
	} = useClicksChecker()

	const handleDefaultButtonClick = (): void => {
		const isOverdrived = Math.random() < overdriveProbability

		resetCoolDown()

		if (!isClicksCheckActive) {
			activateClicksCheck()
		}

		if (!isMaxClicksPerSecond) {
			increaseCounter()
			increaseClicksPerSecond()
		}

		if (isOverdrived) { activateOverdrive() }
	}

	const handleOverdrivedButtonClick = (): void => {
		resetCoolDown()

		if (!isClicksCheckActive) {
			activateClicksCheck()
		}

		if (!isMaxClicksPerSecond) {
			increaseCounter(2)
			increaseClicksPerSecond()
		}
	}

	return (
		<WrapperStyled>
			<Stats
				clicksCheck={{ isMaxClicksPerSecond, clicksPerSecond }}
				coolDown={{ isCoolDownActive, coolDownTimerSeconds }}
				counter={counter}
				overdrive={{ isOverdriveActive, overdriveTimerSeconds }}
			/>
			<BodyStyled>
				{isOverdriveActive
					? (
						<span>
							<Button
								cooledDown={isCoolDownActive}
								disabled={isMaxClicksPerSecond}
								overdrived
								onClick={handleOverdrivedButtonClick}
							>
								Fire!
							</Button>
						</span>
					)
					: (
						<Button
							cooledDown={isCoolDownActive}
							disabled={isMaxClicksPerSecond}
							onClick={handleDefaultButtonClick}
						>
							Increase counter
						</Button>
					)}
			</BodyStyled>
			<Trophets counter={counter} />
		</WrapperStyled>
	)
}

const overdriveProbability = 0.05

export default App

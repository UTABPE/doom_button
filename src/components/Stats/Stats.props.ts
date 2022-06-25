interface Props {
	counter: number,
	coolDown: {
		coolDownTimerSeconds: number,
		isCoolDownActive: boolean,
	}
	overdrive: {
		overdriveTimerSeconds: number,
		isOverdriveActive: boolean,
	},
	clicksCheck: {
		clicksPerSecond: number,
		isMaxClicksPerSecond: boolean,
	}
}

export default Props

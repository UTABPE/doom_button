import {
	WrapperStyled, CountStatsStyled, BlockStyled, ClickPerSecStatsStyled, OverdriveStatsStyled,
} from './Stats.style'
import Props from './Stats.props'

const Stats = ({
	counter,
	overdrive,
	coolDown,
	clicksCheck,
}: Props) => (
	<WrapperStyled>
		<CountStatsStyled isCoolDownActive={coolDown.isCoolDownActive}>
			<p>
				Count
			</p>
			<p>
				{counter}
				{' '}
				points
			</p>
		</CountStatsStyled>
		<BlockStyled>
			<p>
				Cool down
			</p>
			<p>
				{coolDown.coolDownTimerSeconds}
				{' '}
				sec.
			</p>
		</BlockStyled>
		<ClickPerSecStatsStyled isMaxClicksPerSecond={clicksCheck.isMaxClicksPerSecond}>
			<p>
				Click per sec:
			</p>
			<p>
				{clicksCheck.clicksPerSecond}
				{' '}
				clicks
			</p>
		</ClickPerSecStatsStyled>
		<OverdriveStatsStyled isOverdriveActive={overdrive.isOverdriveActive}>
			<p>
				Overdrive:
			</p>
			<p>
				{overdrive.isOverdriveActive ? (
					<>
						{overdrive.overdriveTimerSeconds}
						{' '}
						sec.
					</>
				) : '--'}
			</p>
		</OverdriveStatsStyled>
	</WrapperStyled>
)

export default Stats

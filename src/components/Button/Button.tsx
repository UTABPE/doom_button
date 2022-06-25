import { Props } from './Button.props'
import { ButtonStyled } from './Button.style'

const Button = ({
	overdrived, cooledDown, disabled, children, onClick,
}: Props) => (
	<ButtonStyled
		cooledDown={cooledDown}
		disabled={disabled}
		overdrived={overdrived}
		onClick={onClick}
	>
		{children}
	</ButtonStyled>
)

export default Button

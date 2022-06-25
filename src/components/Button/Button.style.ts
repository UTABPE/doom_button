import styled from 'styled-components'

import { Props } from './Button.props'

const displayBackgroundColor = ({ overdrived, cooledDown }: Props) => {
	if (overdrived && cooledDown) {
		return '#126ab3'
	}

	if (overdrived) {
		return '#bf5019'
	}

	return '#FFFFFF'
}

const displayColor = ({ overdrived, cooledDown }: Props) => {
	if (overdrived) {
		return '#FFFFFF'
	}

	if (cooledDown) {
		return '#126ab3'
	}

	return '#222222'
}

const displayBorder = ({ overdrived, cooledDown }: Props) => {
	if (overdrived) {
		return 'none'
	}

	if (cooledDown) {
		return '3px solid #126ab3'
	}

	return '3px solid #222222'
}

export const ButtonStyled = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 60px;

  font-size: 30px;
  font-family: 'Kdam Thmor Pro', sans-serif;

  border: none;
  border-radius: 6px;
  background-color: ${(props) => displayBackgroundColor(props)};
  border:  ${(props) => displayBorder(props)};

  color: ${(props) => displayColor(props)};

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  cursor:  ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

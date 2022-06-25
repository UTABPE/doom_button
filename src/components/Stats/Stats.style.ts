import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;

  width: 100%;
`

export const BlockStyled = styled.div`
  width: 200px;

  p:first-child {
    font-size: 30px;
    font-weight: 500;
  }

  p:last-child {
    font-size: 40px;
    font-weight: 600;
  }
`

export const ClickPerSecStatsStyled = styled(BlockStyled) <{ isMaxClicksPerSecond: boolean }>`  
  p {
    color: ${({ isMaxClicksPerSecond }) => (isMaxClicksPerSecond ? '#bf5019' : '#222222')};
  }
`

export const CountStatsStyled = styled(BlockStyled) <{ isCoolDownActive: boolean }>`  
  p {
    color: ${({ isCoolDownActive }) => (isCoolDownActive ? '#126ab3' : '#222222')};
  }
`

export const OverdriveStatsStyled = styled(BlockStyled) <{ isOverdriveActive: boolean }>`  
  p {
    color: ${({ isOverdriveActive }) => (isOverdriveActive ? '#bf5019' : '#222222')};
  }
`

import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;

  width: 100%;
  padding: 100px 150px 0;
`

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;

  width: 100%;
`

export const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ClickPerSecStatsStyled = styled(BlockStyled)<{ isMaxClicksPerSecond: boolean }>`  
  p {
    color: ${({ isMaxClicksPerSecond }) => (isMaxClicksPerSecond ? '#bf5019' : '#222222')};
  }
`

export const CountStatsStyled = styled(BlockStyled)<{ isCoolDownActive: boolean }>`  
  p {
    color: ${({ isCoolDownActive }) => (isCoolDownActive ? '#126ab3' : '#222222')};
  }
`

export const OverdriveStatsStyled = styled(BlockStyled)<{ isOverdriveActive: boolean }>`  
  p {
    color: ${({ isOverdriveActive }) => (isOverdriveActive ? '#bf5019' : '#222222')};
  }
`

export const TrophetsRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  width: 100%;
  padding: 20px 0 35px;

  font-size: 55px;

  overflow-x: auto;
`

export const TrophetStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid #222222;
  padding: 20px 40px 30px;

  scroll-behavior: smooth;

  p { 
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  p:last-child {
    font-size: 20px;
  }
`

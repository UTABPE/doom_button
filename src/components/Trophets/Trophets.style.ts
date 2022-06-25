import styled from 'styled-components'

export const WrapperStyled = styled.div`
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

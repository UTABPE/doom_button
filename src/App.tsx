import { useEffect, useState, useRef } from 'react'

import Button from './Button/Button'
import {
  WrapperStyled,
  HeaderStyled,
  BodyStyled,
  CountStatsStyled,
  BlockStyled,
  ClickPerSecStatsStyled,
  OverdriveStatsStyled,
  TrophetsRowStyled,
  TrophetStyled,
} from './App.style'
import { useCounter, useOverdrive, useClicksChecker } from './hooks'

const overdriveProbability = 0.05

const App = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [trophets, setTrophets] = useState<Array<number>>([])

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

  useEffect(() => {
    const flooredCount = Math.floor(counter / 10) * 10

    if (flooredCount !== 0 && !trophets.includes(flooredCount)) {
      setTrophets(prevState => [...prevState, flooredCount])
    }

    if (ref.current) {
      ref.current.scroll({
        left: ref.current.scrollWidth,
        behavior: 'smooth',
      })
    }
  }, [counter, trophets])

  return (
    <WrapperStyled>
      <HeaderStyled>
        <CountStatsStyled isCoolDownActive={isCoolDownActive}>
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
            {coolDownTimerSeconds}
            {' '}
            sec.
          </p>
        </BlockStyled>
        <ClickPerSecStatsStyled isMaxClicksPerSecond={isMaxClicksPerSecond}>
          <p>
            Click per sec:
          </p>
          <p>
            {clicksPerSecond}
            {' '}
            clicks
          </p>
        </ClickPerSecStatsStyled>
        <OverdriveStatsStyled isOverdriveActive={isOverdriveActive}>
          <p>
            Overdrive:
          </p>
          <p>
            {isOverdriveActive ? (
              <>
                {overdriveTimerSeconds}
                {' '}
                sec.
              </>
            ) : '--'}
          </p>
        </OverdriveStatsStyled>
      </HeaderStyled>
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
      <TrophetsRowStyled ref={ref}>
        {trophets.map(t => (
          <TrophetStyled key={t}>
            <p>{t}</p>
            {' '}
            <p>points</p>
          </TrophetStyled>
        ))}
      </TrophetsRowStyled>
    </WrapperStyled>
  )
}

export default App

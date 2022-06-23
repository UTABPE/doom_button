import { useState, useEffect } from 'react'

const maxClicksPerSecond = 3

const useClicksChecker = () => {
  const [clicksPerSecond, setClickPerSecond] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  const [isCheckActive, setCheckActive] = useState<boolean>(false)

  useEffect(() => {
    let interval: NodeJS.Timer | null = null

    if (isCheckActive) {
      interval = setInterval(() => setSeconds(prevState => prevState + 1), 1000)
    }

    if (interval && seconds >= 1) {
      clearInterval(interval)

      disableCheck()
    }

    return () => { interval && clearInterval(interval) }
  }, [isCheckActive, seconds])

  const isMaxClicksPerSecond = clicksPerSecond === maxClicksPerSecond

  const increaseClicksPerSecond = () => setClickPerSecond(prevState => prevState + 1)

  const activateClicksCheck = (): void => setCheckActive(true)

  const disableCheck = (): void => {
    setCheckActive(false)

    setClickPerSecond(0)
    setSeconds(0)
  }

  return {
    clicksPerSecond,
    isMaxClicksPerSecond,
    isClicksCheckActive: isCheckActive,
    activateClicksCheck,
    increaseClicksPerSecond,
  }
}

export default useClicksChecker

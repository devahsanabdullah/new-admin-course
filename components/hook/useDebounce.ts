import { useEffect, useState } from 'react'

const useDebounce = ({ value }: { value: string }) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}

export default useDebounce

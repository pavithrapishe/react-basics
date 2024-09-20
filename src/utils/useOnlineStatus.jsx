import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    // browser has an event listener
    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })
    }, [])

    return onlineStatus
}

export default useOnlineStatus

import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setBuyer] = useState(false)
    const [BuyerLoader, setBuyerLoader] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-six-chi.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setBuyer(data.isBuyer)
                    setBuyerLoader(false)
                })
        }
    }, [email])
    return [isBuyer, BuyerLoader]
}
export default useBuyer;
import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setBuyer] = useState(false)
    const [BuyerLoader, setBuyerLoader] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setBuyer(data.isAdmin)
                    setBuyerLoader(false)
                })
        }
    }, [email])
    return [isBuyer, BuyerLoader]
}
export default useBuyer;
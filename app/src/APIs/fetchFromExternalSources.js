import Axios from "axios"

export const fetchAvaxPrice = async () => {
    try {
        const URL = "https://api.binance.com/api/v3/avgPrice?symbol=AVAXUSDT"
        const data = await Axios.get(URL)
        const price = (data && data["data"] && data["data"]["price"]) || 0
        return price
    } catch (e) {
        return 0
    }
}

export const fetchStats = async () => {
    try {
        fetch('https://graphql.avascan.info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
            query {
                stats {
                    priceAvaxUsd,
                    connectedNodes,
                    stakingRewards
                }
            }`
            }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    } catch (e) {
        console.log(e)
    }
}
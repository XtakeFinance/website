export const CLAIMED = "claimed"
export const STAKED = "staked"
export const UNSTAKED = "unstaked"
export const INSTANT_UNSTAKE = "unstake_now"

export const transactionSuccessMessage = ({type, amount}) => {

    switch (type) {
        case CLAIMED:
            return `You have successfully claimed.`
            // return `You have successfully claimed ${amount} AVAX.`
        case STAKED:
            return `${amount} AVAX Successfully Staked.`
        case UNSTAKED:
            // return `Your request has been received. You will get your ${amount} AVAX within 2 weeks.`
            return `Your request has been received. Your request will be served within 2 weeks.`
        case INSTANT_UNSTAKE:
            return `You have successfully unstaked.`
        // return `You have successfully claimed ${amount} AVAX.`
    }

}
export const CLAIMED = "claimed"
export const STAKED = "staked"
export const UNSTAKED = "unstaked"


export const transactionSuccessMessage = ({type, amount}) => {

    switch (type) {
        case CLAIMED:
            return `You have successfully claimed ${amount} AVAX.`
        case STAKED:
            return `${amount} AVAX Successfully Staked.`
        case UNSTAKED:
            return `Your request has been received. You will get your ${amount} AVAX within 2 weeks.`
    }

}
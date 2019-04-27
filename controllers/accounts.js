import Account from '../models/account'

export const index = (req, res, next) => {
    Account.find().lean().exec((err, accounts) => res.json(
        //Iterate through each movie
        {
            accounts: accounts.map(account => ({
                ...account,
            }))
        }
    ))
}
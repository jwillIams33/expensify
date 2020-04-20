import React from 'react'

export default function Accounts(props) {
    const accounts = props.accounts;
    const accountList = accounts.map((account) =>
<h3>{account.name}: {account.balance}</h3>
    )
    return (
        <div>{accountList}</div>
    )
}

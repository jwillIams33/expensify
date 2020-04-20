import React from 'react'

export default function Accounts(props) {
    const accounts = props.accounts;
    const accountList = accounts.map((account) =>
        <li>{account}</li>
    )
    return (
        <ul>{accountList}</ul>
    )
}

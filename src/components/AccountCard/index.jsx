import { AccountCardContainer, Amount } from './style'
import Button from '../Button'

const formatAmount = (value) => {
  let [integerPart, decimalPart] = value.toString().split('.')

  decimalPart = decimalPart ? decimalPart.padEnd(2, '0') : '00'

  const parts = []

  while (integerPart.length > 3) {
    parts.push(integerPart.slice(-3))

    integerPart = integerPart.slice(0, -3)
  }

  parts.push(integerPart)
  parts.reverse()

  return `${parts.join(',')}.${decimalPart}`
}

const AccountCard = ({ accountName, amount, balanceType }) => {
  return (
    <AccountCardContainer>
      <div>
        <h3>Argent Bank {accountName}</h3>

        <Amount>${formatAmount(amount)}</Amount>

        <p>{balanceType} Balance</p>
      </div>

      <div>
        <Button type="button" text="View transations" />
      </div>
    </AccountCardContainer>
  )
}

export default AccountCard

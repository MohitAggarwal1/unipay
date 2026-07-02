import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) return null;
  const accounts = await getAccounts({ userId: loggedIn.$id });
// console.log(accounts) 
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox
          title='My Bank Accounts'
          subtext='Effortlessly manage your banking activities.'
        />

        <div className='space-y-4'>
          <h2 className='header-2'>Your cards</h2>
          <div className='flex flex-wrap gap-6'>
            {accounts && accounts.data.map((a: Account) => (
              <BankCard 
                key={a.appwriteItemId}
                account={a}
                userName={loggedIn?.firstName}
                showBalance={true}
              />
            ))}           
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks
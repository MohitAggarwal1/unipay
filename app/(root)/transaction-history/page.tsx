import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

// const TransactionHistory = async ({ searchParams: { id, page }}: SearchParamProps) => {
//   const currentPage = Number(page as string) || 1
//     const loggedIn = await getLoggedInUser();
//     const accounts = await getAccounts({ userId: loggedIn.$id });
//     if(!accounts) return;

//     const accountsData = accounts?.data
//     console.log(accountsData)
//     const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
//     console.log(appwriteItemId)    
//     const account = await getAccount({ appwriteItemId });    
    
//     // Fetch the account data
//     const accountData = account?.data;
//     console.log(accountData)
//     const accountIndex = accountsData.findIndex(account => account.appwriteItemId === appwriteItemId);

//     return (
//     <div className='transactions'>
//       <div className='transactions-header'>
//         <HeaderBox 
//           title='Transaction History'
//           subtext='See your bank details and transactions.'
//         />
//       </div>
//       <div className='space-y-6'>
//         <div className='transactions-account'>
//           <div className='flex flex-col gap-2'>
//             <h2 className='text-18 font-bold text-white'>{account?.name}</h2>
//             <p className='text-14 text-blue-25'>{accountData.officialName}</p>
//             <p className='text-14 font-semibold tracking-[1.1px] text-white'>
//               ●●●● ●●●● ●●●● 
//               <span className='text-16'> {accountData.mask}</span>
//             </p>
//           </div>

//           <div className='transactions-account-balance'>
//             <p className='text-14'>Current balance</p>
//             <p className='text-24 text-center font-bold'>{formatAmount(accountData.currentBalance)}</p>
//           </div>
//         </div>

//         <section className='flex w-full flex-col gap-6'>
//           {/* <TransactionsTable 
//            transactions={account?.transactions} 
//           /> */}
//         </section>
//       </div>
//     </div>
//   )
// }
const TransactionHistory = async ({ searchParams }: SearchParamProps) => {
  const params = await searchParams;
  const id = params.id;
  const page = params.page;
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) return null;
  const accounts = await getAccounts({ userId: loggedIn.$id, });
  if (!accounts) return null;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  // console.log(accountsData);
  // console.log(appwriteItemId);

  const accountIndex = (accountsData.findIndex((account: any) => account.appwriteItemId === appwriteItemId));
  // console.log(accountIndex);

  if (accountIndex === -1) {
      console.error("Account not found");
      return <div>Error: Account not found</div>;
  }

  const account = await getAccount({ appwriteItemId });
  const accountData = account?.data;

  const rowsPerPage = 10 
  const transactionsLength = account?.transactions ? account.transactions.length : 0;
  const totalPages = Math.max(Math.ceil(transactionsLength / rowsPerPage),1);

  const indexOfLastTransaction = currentPage * rowsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage
  const currentTransactions = account?.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
  
  return (
      <div className='transactions'>
          <div className='transactions-header'>
              <HeaderBox 
                  title='Transaction History'
                  subtext='See your bank details and transactions.'
              />
          </div>
          <div className='space-y-6'>
              <div className='transactions-account'>
                  <div className='flex flex-col gap-2'>
                      <h2 className='text-18 font-bold text-white'>{accountsData[accountIndex]?.name}</h2>
                      <p className='text-14 text-blue-25'>{accountsData[accountIndex]?.officialName}</p>
                      <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                          ●●●● ●●●● ●●●● 
                          <span className='text-16'> {accountsData[accountIndex]?.mask}</span>
                      </p>
                  </div>

                  <div className='transactions-account-balance'>
                      <p className='text-14'>Current balance</p>
                      <p className='text-24 text-center font-bold'>{formatAmount(accountsData[accountIndex]?.currentBalance)}</p>
                  </div>
              </div>

              <section className='flex w-full flex-col gap-6'>
                  <TransactionsTable 
                  transactions={currentTransactions || []} 
                  />

                  {totalPages > 1 && (
                    <div className='my-4 w-full'>
                      <Pagination totalPages={totalPages} page={currentPage} />
                    </div>
                  )}
              </section>
          </div>
      </div>
  );
}

export default TransactionHistory
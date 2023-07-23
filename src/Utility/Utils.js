import {JobCoins, Transaction} from '../data/Pojo';

import {deleteCookie} from '../Utility/CookieUtils'

export const createJobCoins = (size) => {
	const jCoins = {}
	for(let i=0; i<size;i++){
		const jobCoins = new JobCoins()
		jCoins[jobCoins.address] = jobCoins
	}
	return jCoins;
}

export const createTransactionRecord = (address, coins, action) => {
	return new Transaction (address, coins, action);
}

export const logOut = () => {
	deleteCookie('address');
}

export const transactionHandler = (defaultData, senderAddress, sendersData, receipentAddress, receipentData, transacAmount) => {
	sendersData.coins = Number(sendersData.coins) - Number(transacAmount);
	sendersData.transactions.push(createTransactionRecord(receipentAddress, transacAmount, "sent"))
	receipentData.coins = Number(receipentData.coins) + Number(transacAmount);
	receipentData.transactions.push(createTransactionRecord(senderAddress, transacAmount, "recieved"))
	defaultData[senderAddress] = sendersData
	defaultData[receipentAddress] = receipentData
	localStorage.setItem('initialCoins', JSON.stringify(defaultData));
	return sendersData;
}


export const convertTime = (timestamp) => {
    const date = new Date(timestamp);
    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
		return timeString;
}

const calculateBalance = (transactions) => {
	let balance = 0;
	return transactions.map(transaction => {
		if (transaction.action === 'sent') {
			balance -= Number(transaction.coins);
		} else {
			balance += Number(transaction.coins);
		}
		return {balance, time: transaction?.time};
	});
};

const calCulateTransactionDataSet = (transactions) => {
	return transactions.map((transaction) => {
		const coins = Number(transaction?.coins);
			const time = convertTime(transaction?.timeStamp)
		if(transaction.action === 'sent'){
			transaction.sentMoney =coins
		}
		else{
			transaction.recieveMoney = coins
		}
		transaction.time = time;
		return transaction
	})
}

export const parseUserData = (userData = {}) => {
	const {transactions} = userData;
	console.log(JSON.stringify({
		...userData,
		balanceDataSet: calculateBalance(transactions),
		transactionDataSet: calCulateTransactionDataSet(transactions)
	}))
	return {
		...userData,
		balanceDataSet: calculateBalance(transactions),
		transactionDataSet: calCulateTransactionDataSet(transactions)
	}
}





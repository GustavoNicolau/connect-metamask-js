import React, { useState } from 'react';

const Component = () => {

    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');




    const connectWalletHandler = async () => {
        if (window.ethereum) {
            try {
                const result = await window.ethereum.request({ method: 'eth_requestAccounts' })
                accountChangedHandler(result[0]);
                setConnButtonText('Wallet Connected');
            } catch (err) {
                alert(err)
            }

        } else {
            alert('Need to install MetaMask!')
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    }


    return (
        <div>
            <h3> {"Get/Set Interaction with contract!"} </h3>
            <button onClick={connectWalletHandler}> {connButtonText}  </button>
            <h3>Address: {defaultAccount} </h3>
        </div>
    )
}


export default Component;
# Contract updgradeability

This project demonstrates the use of proxy smart contracts to upgrade contracts. The project is based on a simple vending machine. It uses a proxy contract which the users directly interact with, and that does a `delegatecall` to a other contracts. VendingMachineV2 is an upgrade to VendingMachineV1. After upgrading, we set the proxy contract to point to the upgraded contract. The contracts have been deployed to the Sepolia testnet. 

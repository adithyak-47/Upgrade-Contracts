# Contract updgradeability

This project demonstrates the use of proxy smart contracts to upgrade contracts. The project is based on a simple vending machine. It uses a proxy contract which the users directly interact with, and that does a `delegatecall` to a other contracts. VendingMachineV2 is an upgrade to VendingMachineV1. After upgrading, we set the proxy contract to point to the upgraded contract. The contracts have been deployed to the Sepolia testnet. 


<img width="960" alt="cupgrade1" src="https://github.com/adithyak-47/Upgrade-Contracts/assets/76245460/48ca39a8-f772-476b-885c-feaffb1f9ed3">
<img width="960" alt="cupgrade2" src="https://github.com/adithyak-47/Upgrade-Contracts/assets/76245460/23594697-d3e0-4b3f-8f02-1dc5a7710bc3">

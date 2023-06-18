const {ethers, upgrades} = require('hardhat');

const proxyAddress = '0x0f4778Aa199cfcf92eaDf0CAd2fC9B9d408CD6C3';

async function main(){
    const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxyAddress
    );

    console.log(`The current contract owner is: ${upgraded.owner()}`);
    console.log(`Implementation contract address: ${implementationAddress}`); //0xF500965f96C26f6f3F2Ab5eAe2aE6060a45254DF
}

main();

//https://sepolia.etherscan.io/address/0xfd88c460f2acb41556c58f5badf8256acf51b04c#code
const {ethers, upgrades} = require("hardhat");

async function main(){
    const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
    const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
    await proxy.deployed();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.address
    );

    console.log(`Proxy contract address: ${proxy.address}`); //0x0f4778Aa199cfcf92eaDf0CAd2fC9B9d408CD6C3
    console.log(`Implementation address: ${implementationAddress}`); //0xF500965f96C26f6f3F2Ab5eAe2aE6060a45254DF
}

main();
// https://sepolia.etherscan.io/address/0xF500965f96C26f6f3F2Ab5eAe2aE6060a45254DF#code
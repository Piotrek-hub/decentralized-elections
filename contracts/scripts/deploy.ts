import { ethers } from 'hardhat';

async function main() {
	const Elections = await ethers.getContractFactory('Elections');
	const elections = await Elections.deploy();

	await elections.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});

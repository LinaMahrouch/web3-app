const main = async() =>
{
    //compile contract and generate the necessary files we need to work with our contract under the artifacts directory
    const cookieContractFactory = await hre.ethers.getContractFactory("CookiePortal");
    
    const cookieContract = await cookieContractFactory.deploy();
    await cookieContract.deployed();
    console.log("contract is being deployed to:", cookieContract.address);
};

const runMain = async () =>
{
    try
    {
        await main();
        process.exit(0);
    }catch(error)
    {
        console.log(error);
        process.exit(1);
    }
    
};
runMain();
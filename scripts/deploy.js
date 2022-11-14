const main = async() =>
{
    const [deployer]= await hre.ethers.getSigners();
    const accountBalance= await deployer.getBalance();

    
    console.log("deploying contracts with account:", deployer.address);
    console.log("Account Balance:", accountBalance.toString());
    //await cookieContract.getTotalCookies();
    //compile contract and generate the necessary files we need to work with our contract under the artifacts directory
    const cookieContractFactory = await hre.ethers.getContractFactory("CookiePortal");
    const cookieContract = await cookieContractFactory.deploy();
    await cookieContract.deployed();
    // cookieContract.functions.mint(id, amount, {gasLimit: 40000000});

    console.log("CookiePortal Address :", cookieContract.address);
    
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
const main = async() =>
{
    //const [owner,randomPerson]= await hre.ethers.getSigners();
    //compile contract and generate the necessary files we need to work with our contract under the artifacts directory
    const cookieContractFactory = await hre.ethers.getContractFactory("CookiePortal");
    const cookieContract = await cookieContractFactory.deploy();
    await cookieContract.deployed();
    // console.log("contract is being deployed to:", cookieContract.address);
    // console.log("contract is being deployed by:", owner.address);
    let cookieCount;
    cookieCount= await cookieContract.getTotalCookies();
    console.log(cookieCount.toNumber());

    let  cookieTkn = await cookieContract.cookie("A simple message");
    await cookieTkn.wait();//wait for mined transaction here
    const [_, randomPerson] = await hre.ethers.getSigners(); 
    cookieTkn = await cookieContract.connect(randomPerson).cookie("A simple message")
    //const secondcookieTkn = await cookieContract.connect(randomPerson).cookie();
    //await secondcookieTkn.wait();

    let allCookies = await cookieContract.getAllCookies();
    console.log(allCookies);

    
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
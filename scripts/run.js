const main = async() =>
{
    //const [owner,randomPerson]= await hre.ethers.getSigners();
    //compile contract and generate the necessary files we need to work with our contract under the artifacts directory
    const cookieContractFactory = await hre.ethers.getContractFactory("CookiePortal");
    const cookieContract = await cookieContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1"),});
    await cookieContract.deployed();
    console.log("Contract addy:", cookieContract.address);
    // console.log("contract is being deployed to:", cookieContract.address);
    // console.log("contract is being deployed by:", owner.address);
    let contractBalance = await hre.ethers.provider.getBalance(
        cookieContract.address
      );
      console.log(
        "Contract balance:",
        hre.ethers.utils.formatEther(contractBalance)
      );
    let cookieCount;
    cookieCount= await cookieContract.getTotalCookies();
    console.log(cookieCount.toNumber());

    let  cookieTkn = await cookieContract.cookie("A simple message");
    await cookieTkn.wait();//wait for mined transaction here
    const [_, randomPerson] = await hre.ethers.getSigners(); 
    cookieTkn = await cookieContract.connect(randomPerson).cookie("A simple message")
    //const secondcookieTkn = await cookieContract.connect(randomPerson).cookie();
    //await secondcookieTkn.wait();
//contract balance
contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );
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
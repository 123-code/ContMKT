const {ethers} = require('hardhat');
const {expect} = require('chai');


describe("Cartoken",function(){
    accounts  = ethers.getSigners()
    poster = accounts[0]
   
    it("mints a car token", async()=>{
        const CarToken = await ethers.getContractFactory("MyToken");
        const cartoken = await CarToken.deploy("0x390be0D2Da9eDC0F85Ff09bfBFC874Bc8Ab665A6");
        await cartoken.deployed();
        await cartoken.safeMint("0x390be0D2Da9eDC0F85Ff09bfBFC874Bc8Ab665A6")
        const numcars = await cartoken.count;
        expect(await numcars).to.equal(1);
    })
})
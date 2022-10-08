import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Coolbandar from "./Coolbandar.json";

const CoolbandarNFTAddress = "0x5E870783FbC4C17270DaEde4F18F0d36ab23D465";

const MaintMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CoolbandarNFTAddress,
        Coolbandar.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
            value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <div>
          <Text fontSize="48px" textShadow="0 5px #000000">
            RoboPunksNFT
          </Text>
        </div>

        {isConnected ? (
          <div>
            <Flex justify="center" align="center">
              <Button
               
                onClick={handleDecrement}
              >
                {" "}
                -
              </Button>

              <Input
               
                value={mintAmount}
              />

              <Button
                onClick={handleIncrement}
              >
                {" "}
                +
              </Button>
            </Flex>

            <Button
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </div>
        ) : (
          <Text
            
          >
            Connect your wallet to mint.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MaintMint;
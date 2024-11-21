import { setWalletConnectModalState } from "@/store/modalSlice";
import PrimaryButton from "./PrimaryButton";
import { useDispatch } from "react-redux";
import { useWallet } from "@/providers/WalletContext";
import { convertHexAddressToBech32, shortenAddress } from "@/utils/web3";
import { useState } from "react";
import { toast } from "react-toastify";
import Decimal from "decimal.js";
import { FaWallet } from "react-icons/fa";

const WalletConnectButton = () => {
  const { isConnected, disconnect, address, adaBalance } = useWallet();

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleOpenWalletModal = () => {
    dispatch(setWalletConnectModalState(true));
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleCopyAddress = () => {
    const addr = isConnected ? convertHexAddressToBech32(address) : "";
    navigator.clipboard.writeText(addr.toString());
    toast.success("Address successfully copied to clipboard");
  };

  const adaBalanceNumber = new Decimal(adaBalance).dividedBy(Math.pow(10, 6));

  return (
    <PrimaryButton
      onClick={!isConnected ? handleOpenWalletModal : handleClick}
      classNames="relative"
    >
      {isConnected ? (
        <div>
          {shortenAddress(convertHexAddressToBech32(address))}
          {show && (
            <div className="absolute right-0 top-11 flex h-36 w-44 flex-col rounded-xl bg-back2 py-4">
              <div className="border-b-2 pb-3">
                {isConnected ? (
                  <>₳ {adaBalanceNumber.toNumber().toFixed(2)}</>
                ) : (
                  <>---</>
                )}
              </div>
              <div
                className="cursor-pointer py-2 hover:bg-secondary"
                onClick={handleCopyAddress}
              >
                Copy Address
              </div>
              <div
                className="cursor-pointer py-2 hover:bg-secondary"
                onClick={disconnect}
              >
                Disconnect
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center gap-2 text-base">
          <FaWallet />
          Connect Wallet
        </div>
      )}
    </PrimaryButton>
  );
};

export default WalletConnectButton;
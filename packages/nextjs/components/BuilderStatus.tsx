"use client";

import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
import { CheckCircleIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const BuilderStatus = () => {
  const { address: connectedAddress, isConnected } = useAccount();

  const { data: isBatchMember } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [connectedAddress],
  });

  const { data: contractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [connectedAddress],
  });
  const isCheckedIn = contractAddress && contractAddress !== zeroAddress;

  if (!isConnected) return null;

  return (
    <div className="flex items-center mr-1">
      {!isBatchMember ? (
        <div className="tooltip tooltip-bottom tooltip-primary p-1" data-tip="🔴 Not a batch member">
          <XCircleIcon className="h-6 w-6 text-red-500" />
        </div>
      ) : isCheckedIn ? (
        <div className="tooltip tooltip-bottom tooltip-primary p-1" data-tip="🟢 Member checked-in">
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        </div>
      ) : (
        <div className="tooltip tooltip-bottom tooltip-primary p-1" data-tip="🟡 Member not checked-in">
          <ClockIcon className="h-6 w-6 text-yellow-500" />
        </div>
      )}
    </div>
  );
};

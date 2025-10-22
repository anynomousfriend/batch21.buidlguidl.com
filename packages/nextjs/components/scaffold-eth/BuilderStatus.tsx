"use client";

import { useMemo } from "react";
import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
import { CheckCircleIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type StatusConfig = {
  icon: React.ElementType;
  color: string;
  tooltip: string;
};

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

  const status = useMemo<StatusConfig>(() => {
    return !isBatchMember
      ? { icon: XCircleIcon, color: "text-red-500", tooltip: "🔴 Not a batch member" }
      : isCheckedIn
        ? { icon: CheckCircleIcon, color: "text-green-500", tooltip: "🟢 Member checked-in" }
        : { icon: ClockIcon, color: "text-yellow-500", tooltip: "🟡 Member not checked-in" };
  }, [isBatchMember, isCheckedIn]);

  if (!isConnected) return null;

  const Icon = status.icon;
  return (
    <div className="flex items-center mr-1">
      <div className="tooltip tooltip-bottom tooltip-primary p-1" data-tip={status.tooltip}>
        <Icon className={`h-6 w-6 ${status.color}`} />
      </div>
    </div>
  );
};

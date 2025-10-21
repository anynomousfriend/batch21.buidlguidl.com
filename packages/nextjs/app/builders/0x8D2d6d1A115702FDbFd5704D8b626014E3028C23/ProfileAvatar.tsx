"use client";

import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";

// Profile Avatar Component - matching Address component behavior
export const ProfileAvatar = ({ address, size }: { address: string; size: number }) => {
  // Always call hooks at the top level, matching Address component logic
  const ensNameResult = useEnsName({
    address: address as `0x${string}`,
    chainId: 1,
    query: {
      enabled: Boolean(address),
    },
  });

  const ensAvatarResult = useEnsAvatar({
    name: ensNameResult.data ? normalize(ensNameResult.data) : undefined,
    chainId: 1,
    query: {
      enabled: Boolean(ensNameResult.data),
      gcTime: 30_000,
    },
  });

  // Use the same BlockieAvatar component as Address, with the same props
  return <BlockieAvatar address={address as `0x${string}`} ensImage={ensAvatarResult.data} size={size} />;
};

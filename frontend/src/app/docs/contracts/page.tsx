import { loadMdx } from '@/lib/load-mdx';

const CONTRACT_DOCS = `
---
title: Smart Contract Reference
---

# NiffyInsure Smart Contract Reference

This page documents the on-chain Soroban smart contract interface.

## initiate_policy

Creates a new insurance policy on-chain.

## file_claim

Files a claim against an existing policy.

## generate_premium

Simulates the premium calculation for a given policy configuration.
`;

export default async function ContractsDocsPage() {
  const { content } = await loadMdx(CONTRACT_DOCS);
  return (
    <main className="prose mx-auto max-w-3xl px-4 py-8">
      {content}
    </main>
  );
}

export const metadata = {
  title: 'Contract Reference — NiffyInsure',
};

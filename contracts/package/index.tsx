import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseActionAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'echoFactory',
    outputs: [
      { name: '', internalType: 'contract EchoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lifeModule',
    outputs: [
      { name: '', internalType: 'contract EchoLifeModule', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'error',
    inputs: [{ name: 'echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'EchoIsDead',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'NotEchoAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721EnumerableAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Echo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const echoAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FACTORY_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'echos',
    outputs: [
      { name: '_initialized', internalType: 'bool', type: 'bool' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEcho',
    outputs: [
      {
        name: 'echo',
        internalType: 'struct Echo.s_Echo',
        type: 'tuple',
        components: [
          { name: '_initialized', internalType: 'bool', type: 'bool' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_echoId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_params',
        internalType: 'struct Echo.s_Params',
        type: 'tuple',
        components: [{ name: 'name', internalType: 'string', type: 'string' }],
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'echo',
        internalType: 'struct Echo.s_Echo',
        type: 'tuple',
        components: [
          { name: '_initialized', internalType: 'bool', type: 'bool' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'EchoInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'EchoAlreadyInitialized' },
] as const

/**
 *
 */
export const echoAddress = {
  31337: '0x654FB8fB55048BA0Df9241C4D0992118A5792b15',
} as const

/**
 *
 */
export const echoConfig = { address: echoAddress, abi: echoAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoAccount
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const echoAccountAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_echoId', internalType: 'uint256', type: 'uint256' },
      { name: '_echoERC721', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'echoERC721',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'echoId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'call_',
        internalType: 'struct EchoAccount.Call',
        type: 'tuple',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'execute',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct EchoAccount.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'executeBatch',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'result', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Executed',
  },
  {
    type: 'error',
    inputs: [{ name: 'returndata', internalType: 'bytes', type: 'bytes' }],
    name: 'CallFailed',
  },
  {
    type: 'error',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'NotEchoOwner',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const echoErc721Abi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenIdsIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
] as const

/**
 *
 */
export const echoErc721Address = {
  31337: '0xf6B55614076BA5D1C1bc737FEAC29D8c76FE1bb1',
} as const

/**
 *
 */
export const echoErc721Config = {
  address: echoErc721Address,
  abi: echoErc721Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const echoFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_echoERC721',
        internalType: 'contract EchoERC721',
        type: 'address',
      },
      {
        name: '_echoGenesis',
        internalType: 'contract EchoGenesis',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'echoERC721',
    outputs: [
      { name: '', internalType: 'contract EchoERC721', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'echoGenesis',
    outputs: [
      { name: '', internalType: 'contract EchoGenesis', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEchoContext',
    outputs: [
      {
        name: 'echoContext',
        internalType: 'struct EchoFactory.EchoContext',
        type: 'tuple',
        components: [
          { name: 'echoId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'echoAccount',
            internalType: 'contract EchoAccount',
            type: 'address',
          },
          {
            name: 'echoGenesis',
            internalType: 'struct EchoGenesis.s_EchoGenesis',
            type: 'tuple',
            components: [
              { name: '_initialized', internalType: 'bool', type: 'bool' },
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_params',
        internalType: 'struct EchoGenesis.s_Params',
        type: 'tuple',
        components: [{ name: 'name', internalType: 'string', type: 'string' }],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'echoId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'echoAccount',
        internalType: 'contract EchoAccount',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'echoContext',
        internalType: 'struct EchoFactory.EchoContext',
        type: 'tuple',
        components: [
          { name: 'echoId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'echoAccount',
            internalType: 'contract EchoAccount',
            type: 'address',
          },
          {
            name: 'echoGenesis',
            internalType: 'struct EchoGenesis.s_EchoGenesis',
            type: 'tuple',
            components: [
              { name: '_initialized', internalType: 'bool', type: 'bool' },
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'EchoCreated',
  },
] as const

/**
 *
 */
export const echoFactoryAddress = {
  31337: '0x1C6dDd12225B411f20d6dCAf45113de632166FAd',
} as const

/**
 *
 */
export const echoFactoryConfig = {
  address: echoFactoryAddress,
  abi: echoFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoGenesis
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const echoGenesisAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FACTORY_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'echosGenesis',
    outputs: [
      { name: '_initialized', internalType: 'bool', type: 'bool' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEchoGenesis',
    outputs: [
      {
        name: 'echo',
        internalType: 'struct EchoGenesis.s_EchoGenesis',
        type: 'tuple',
        components: [
          { name: '_initialized', internalType: 'bool', type: 'bool' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_echoId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_params',
        internalType: 'struct EchoGenesis.s_Params',
        type: 'tuple',
        components: [{ name: 'name', internalType: 'string', type: 'string' }],
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'echo',
        internalType: 'struct EchoGenesis.s_EchoGenesis',
        type: 'tuple',
        components: [
          { name: '_initialized', internalType: 'bool', type: 'bool' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'birthEpoch', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'EchoInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'EchoGenesisAlreadyInitialized' },
] as const

/**
 *
 */
export const echoGenesisAddress = {
  31337: '0xb302EB0Dd6A7f6dFA228e669b80fE5e2120B2e87',
} as const

/**
 *
 */
export const echoGenesisConfig = {
  address: echoGenesisAddress,
  abi: echoGenesisAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoLifeCycleModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const echoLifeCycleModuleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      {
        name: '_echoFactory',
        internalType: 'contract EchoFactory',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_PET_INTERVAL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'echoFactory',
    outputs: [
      { name: '', internalType: 'contract EchoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEchoLifecycle',
    outputs: [
      {
        name: '',
        internalType: 'struct EchoLifeCycleModule.s_EchoLifeCycle',
        type: 'tuple',
        components: [
          { name: 'hasBeenPetted', internalType: 'bool', type: 'bool' },
          { name: 'lastPettedCycle', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'isAlive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'pet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'timeBeforeDeath',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'petAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'EchoPetted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'EchoAlreadyPettedForCurrentCycle',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'EchoIsDead',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'NotEchoAccount',
  },
] as const

/**
 *
 */
export const echoLifeCycleModuleAddress = {
  31337: '0x88a42e46e04F136D26349bb2dB2b2b8d0f14ce3d',
} as const

/**
 *
 */
export const echoLifeCycleModuleConfig = {
  address: echoLifeCycleModuleAddress,
  abi: echoLifeCycleModuleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoLifeModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const echoLifeModuleAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LIFE_MANAGER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_PET_INTERVAL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEchoLife',
    outputs: [
      {
        name: '',
        internalType: 'struct EchoLifeModule.EchoLife',
        type: 'tuple',
        components: [
          { name: 'alive', internalType: 'bool', type: 'bool' },
          { name: 'lastPetAt', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'isAlive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'markAlive',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'markDead',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'alive', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'LifeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoLifecycle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const echoLifecycleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      {
        name: '_echoFactory',
        internalType: 'contract EchoFactory',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LIFECYCLE_MANAGER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_PET_INTERVAL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'echoFactory',
    outputs: [
      { name: '', internalType: 'contract EchoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEchoLifecycle',
    outputs: [
      {
        name: 'lifecycle',
        internalType: 'struct EchoLifecycle.EchoLifecycleState',
        type: 'tuple',
        components: [
          { name: 'alive', internalType: 'bool', type: 'bool' },
          { name: 'lastPetAt', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getLastPetAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'isAlive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'markDead',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'pet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'petAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'EchoPetted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'alive', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'LifecycleUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'EchoIsDead',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'NotEchoAccount',
  },
] as const

/**
 *
 */
export const echoLifecycleAddress = {
  31337: '0xB34e34fF88f0266d2591B56d9e6280567145330d',
} as const

/**
 *
 */
export const echoLifecycleConfig = {
  address: echoLifecycleAddress,
  abi: echoLifecycleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoPetAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const echoPetActionAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_echoFactory',
        internalType: 'contract EchoFactory',
        type: 'address',
      },
      {
        name: '_progressModule',
        internalType: 'contract EchoProgressModule',
        type: 'address',
      },
      {
        name: '_lifeModule',
        internalType: 'contract EchoLifeModule',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'XP_PER_PET',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'echoFactory',
    outputs: [
      { name: '', internalType: 'contract EchoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lifeModule',
    outputs: [
      { name: '', internalType: 'contract EchoLifeModule', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'pet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'progressModule',
    outputs: [
      {
        name: '',
        internalType: 'contract EchoProgressModule',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'xpGained',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'EchoPetted',
  },
  {
    type: 'error',
    inputs: [{ name: 'echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'EchoIsDead',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'NotEchoAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EchoProgressModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const echoProgressModuleAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PROGRESS_CONTROLLER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_echoId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addXp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_echoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEchoProgress',
    outputs: [
      {
        name: '',
        internalType: 'struct EchoProgressModule.s_EchoProgress',
        type: 'tuple',
        components: [
          { name: 'xp', internalType: 'uint256', type: 'uint256' },
          { name: 'level', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'newLevel',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LevelUp',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'echoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'xpBefore',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'xpAfter',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'XpAdded',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

/**
 *
 */
export const echoProgressModuleAddress = {
  31337: '0xE8e33B7326675Ed1f271f0315b796ef2402cd99E',
} as const

/**
 *
 */
export const echoProgressModuleConfig = {
  address: echoProgressModuleAddress,
  abi: echoProgressModuleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  { type: 'error', inputs: [], name: 'StringsInvalidAddressFormat' },
  { type: 'error', inputs: [], name: 'StringsInvalidChar' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UseEchoAccount
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const useEchoAccountAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'echoFactory',
    outputs: [
      { name: '', internalType: 'contract EchoFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'NotEchoAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useReadAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlHasRole = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWriteAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useSimulateAccessControl = /*#__PURE__*/ createUseSimulateContract(
  { abi: accessControlAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWatchAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: accessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionAbi}__
 */
export const useReadBaseAction = /*#__PURE__*/ createUseReadContract({
  abi: baseActionAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionAbi}__ and `functionName` set to `"echoFactory"`
 */
export const useReadBaseActionEchoFactory = /*#__PURE__*/ createUseReadContract(
  { abi: baseActionAbi, functionName: 'echoFactory' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionAbi}__ and `functionName` set to `"lifeModule"`
 */
export const useReadBaseActionLifeModule = /*#__PURE__*/ createUseReadContract({
  abi: baseActionAbi,
  functionName: 'lifeModule',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useReadErc721Enumerable = /*#__PURE__*/ createUseReadContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721EnumerableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721EnumerableGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc721EnumerableName = /*#__PURE__*/ createUseReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721EnumerableOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721EnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721EnumerableSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadErc721EnumerableTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadErc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721EnumerableTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc721EnumerableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useWriteErc721Enumerable = /*#__PURE__*/ createUseWriteContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721EnumerableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useSimulateErc721Enumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc721EnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721EnumerableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useWatchErc721EnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc721EnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721EnumerableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721EnumerableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__
 *
 *
 */
export const useReadEcho = /*#__PURE__*/ createUseReadContract({
  abi: echoAbi,
  address: echoAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadEchoDefaultAdminRole = /*#__PURE__*/ createUseReadContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'DEFAULT_ADMIN_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"FACTORY_ROLE"`
 *
 *
 */
export const useReadEchoFactoryRole = /*#__PURE__*/ createUseReadContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'FACTORY_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"echos"`
 *
 *
 */
export const useReadEchoEchos = /*#__PURE__*/ createUseReadContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'echos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"getEcho"`
 *
 *
 */
export const useReadEchoGetEcho = /*#__PURE__*/ createUseReadContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'getEcho',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadEchoGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadEchoHasRole = /*#__PURE__*/ createUseReadContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadEchoSupportsInterface = /*#__PURE__*/ createUseReadContract(
  { abi: echoAbi, address: echoAddress, functionName: 'supportsInterface' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAbi}__
 *
 *
 */
export const useWriteEcho = /*#__PURE__*/ createUseWriteContract({
  abi: echoAbi,
  address: echoAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteEchoGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useWriteEchoInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteEchoRenounceRole = /*#__PURE__*/ createUseWriteContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteEchoRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: echoAbi,
  address: echoAddress,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAbi}__
 *
 *
 */
export const useSimulateEcho = /*#__PURE__*/ createUseSimulateContract({
  abi: echoAbi,
  address: echoAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateEchoGrantRole = /*#__PURE__*/ createUseSimulateContract(
  { abi: echoAbi, address: echoAddress, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useSimulateEchoInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoAbi,
    address: echoAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateEchoRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoAbi,
    address: echoAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateEchoRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoAbi,
    address: echoAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoAbi}__
 *
 *
 */
export const useWatchEchoEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: echoAbi,
  address: echoAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoAbi}__ and `eventName` set to `"EchoInitialized"`
 *
 *
 */
export const useWatchEchoEchoInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoAbi,
    address: echoAddress,
    eventName: 'EchoInitialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchEchoRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoAbi,
    address: echoAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchEchoRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoAbi,
    address: echoAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchEchoRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoAbi,
    address: echoAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAccountAbi}__
 */
export const useReadEchoAccount = /*#__PURE__*/ createUseReadContract({
  abi: echoAccountAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAccountAbi}__ and `functionName` set to `"echoERC721"`
 */
export const useReadEchoAccountEchoErc721 = /*#__PURE__*/ createUseReadContract(
  { abi: echoAccountAbi, functionName: 'echoERC721' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoAccountAbi}__ and `functionName` set to `"echoId"`
 */
export const useReadEchoAccountEchoId = /*#__PURE__*/ createUseReadContract({
  abi: echoAccountAbi,
  functionName: 'echoId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAccountAbi}__
 */
export const useWriteEchoAccount = /*#__PURE__*/ createUseWriteContract({
  abi: echoAccountAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAccountAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteEchoAccountExecute = /*#__PURE__*/ createUseWriteContract({
  abi: echoAccountAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoAccountAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useWriteEchoAccountExecuteBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoAccountAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAccountAbi}__
 */
export const useSimulateEchoAccount = /*#__PURE__*/ createUseSimulateContract({
  abi: echoAccountAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAccountAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateEchoAccountExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoAccountAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoAccountAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useSimulateEchoAccountExecuteBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoAccountAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoAccountAbi}__
 */
export const useWatchEchoAccountEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: echoAccountAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoAccountAbi}__ and `eventName` set to `"Executed"`
 */
export const useWatchEchoAccountExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoAccountAbi,
    eventName: 'Executed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__
 *
 *
 */
export const useReadEchoErc721 = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadEchoErc721DefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"MINTER_ROLE"`
 *
 *
 */
export const useReadEchoErc721MinterRole = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'MINTER_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useReadEchoErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"getApproved"`
 *
 *
 */
export const useReadEchoErc721GetApproved = /*#__PURE__*/ createUseReadContract(
  {
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'getApproved',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadEchoErc721GetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadEchoErc721HasRole = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 *
 *
 */
export const useReadEchoErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useReadEchoErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"ownerOf"`
 *
 *
 */
export const useReadEchoErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadEchoErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useReadEchoErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"tokenByIndex"`
 *
 *
 */
export const useReadEchoErc721TokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"tokenIdsIndex"`
 *
 *
 */
export const useReadEchoErc721TokenIdsIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'tokenIdsIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 *
 *
 */
export const useReadEchoErc721TokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"tokenURI"`
 *
 *
 */
export const useReadEchoErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useReadEchoErc721TotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'totalSupply',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__
 *
 *
 */
export const useWriteEchoErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteEchoErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteEchoErc721GrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: echoErc721Abi, address: echoErc721Address, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useWriteEchoErc721Mint = /*#__PURE__*/ createUseWriteContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteEchoErc721RenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteEchoErc721RevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 *
 *
 */
export const useWriteEchoErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 *
 *
 */
export const useWriteEchoErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteEchoErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__
 *
 *
 */
export const useSimulateEchoErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: echoErc721Abi,
  address: echoErc721Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useSimulateEchoErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateEchoErc721GrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useSimulateEchoErc721Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateEchoErc721RenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateEchoErc721RevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 *
 *
 */
export const useSimulateEchoErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 *
 *
 */
export const useSimulateEchoErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoErc721Abi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useSimulateEchoErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoErc721Abi,
    address: echoErc721Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoErc721Abi}__
 *
 *
 */
export const useWatchEchoErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoErc721Abi,
    address: echoErc721Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoErc721Abi}__ and `eventName` set to `"Approval"`
 *
 *
 */
export const useWatchEchoErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoErc721Abi,
    address: echoErc721Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 *
 *
 */
export const useWatchEchoErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoErc721Abi,
    address: echoErc721Address,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoErc721Abi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchEchoErc721RoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoErc721Abi,
    address: echoErc721Address,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoErc721Abi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchEchoErc721RoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoErc721Abi,
    address: echoErc721Address,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoErc721Abi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchEchoErc721RoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoErc721Abi,
    address: echoErc721Address,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoErc721Abi}__ and `eventName` set to `"Transfer"`
 *
 *
 */
export const useWatchEchoErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoErc721Abi,
    address: echoErc721Address,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoFactoryAbi}__
 *
 *
 */
export const useReadEchoFactory = /*#__PURE__*/ createUseReadContract({
  abi: echoFactoryAbi,
  address: echoFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoFactoryAbi}__ and `functionName` set to `"echoERC721"`
 *
 *
 */
export const useReadEchoFactoryEchoErc721 = /*#__PURE__*/ createUseReadContract(
  {
    abi: echoFactoryAbi,
    address: echoFactoryAddress,
    functionName: 'echoERC721',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoFactoryAbi}__ and `functionName` set to `"echoGenesis"`
 *
 *
 */
export const useReadEchoFactoryEchoGenesis =
  /*#__PURE__*/ createUseReadContract({
    abi: echoFactoryAbi,
    address: echoFactoryAddress,
    functionName: 'echoGenesis',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoFactoryAbi}__ and `functionName` set to `"getEchoContext"`
 *
 *
 */
export const useReadEchoFactoryGetEchoContext =
  /*#__PURE__*/ createUseReadContract({
    abi: echoFactoryAbi,
    address: echoFactoryAddress,
    functionName: 'getEchoContext',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoFactoryAbi}__
 *
 *
 */
export const useWriteEchoFactory = /*#__PURE__*/ createUseWriteContract({
  abi: echoFactoryAbi,
  address: echoFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoFactoryAbi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useWriteEchoFactoryMint = /*#__PURE__*/ createUseWriteContract({
  abi: echoFactoryAbi,
  address: echoFactoryAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoFactoryAbi}__
 *
 *
 */
export const useSimulateEchoFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: echoFactoryAbi,
  address: echoFactoryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoFactoryAbi}__ and `functionName` set to `"mint"`
 *
 *
 */
export const useSimulateEchoFactoryMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoFactoryAbi,
    address: echoFactoryAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoFactoryAbi}__
 *
 *
 */
export const useWatchEchoFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoFactoryAbi,
    address: echoFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoFactoryAbi}__ and `eventName` set to `"EchoCreated"`
 *
 *
 */
export const useWatchEchoFactoryEchoCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoFactoryAbi,
    address: echoFactoryAddress,
    eventName: 'EchoCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__
 *
 *
 */
export const useReadEchoGenesis = /*#__PURE__*/ createUseReadContract({
  abi: echoGenesisAbi,
  address: echoGenesisAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadEchoGenesisDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"FACTORY_ROLE"`
 *
 *
 */
export const useReadEchoGenesisFactoryRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'FACTORY_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"echosGenesis"`
 *
 *
 */
export const useReadEchoGenesisEchosGenesis =
  /*#__PURE__*/ createUseReadContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'echosGenesis',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"getEchoGenesis"`
 *
 *
 */
export const useReadEchoGenesisGetEchoGenesis =
  /*#__PURE__*/ createUseReadContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'getEchoGenesis',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadEchoGenesisGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadEchoGenesisHasRole = /*#__PURE__*/ createUseReadContract({
  abi: echoGenesisAbi,
  address: echoGenesisAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadEchoGenesisSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoGenesisAbi}__
 *
 *
 */
export const useWriteEchoGenesis = /*#__PURE__*/ createUseWriteContract({
  abi: echoGenesisAbi,
  address: echoGenesisAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteEchoGenesisGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useWriteEchoGenesisInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteEchoGenesisRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteEchoGenesisRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoGenesisAbi}__
 *
 *
 */
export const useSimulateEchoGenesis = /*#__PURE__*/ createUseSimulateContract({
  abi: echoGenesisAbi,
  address: echoGenesisAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateEchoGenesisGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useSimulateEchoGenesisInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateEchoGenesisRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoGenesisAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateEchoGenesisRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoGenesisAbi}__
 *
 *
 */
export const useWatchEchoGenesisEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoGenesisAbi}__ and `eventName` set to `"EchoInitialized"`
 *
 *
 */
export const useWatchEchoGenesisEchoInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    eventName: 'EchoInitialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoGenesisAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchEchoGenesisRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoGenesisAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchEchoGenesisRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoGenesisAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchEchoGenesisRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoGenesisAbi,
    address: echoGenesisAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__
 *
 *
 */
export const useReadEchoLifeCycleModule = /*#__PURE__*/ createUseReadContract({
  abi: echoLifeCycleModuleAbi,
  address: echoLifeCycleModuleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadEchoLifeCycleModuleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"MAX_PET_INTERVAL"`
 *
 *
 */
export const useReadEchoLifeCycleModuleMaxPetInterval =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'MAX_PET_INTERVAL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"echoFactory"`
 *
 *
 */
export const useReadEchoLifeCycleModuleEchoFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'echoFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"getEchoLifecycle"`
 *
 *
 */
export const useReadEchoLifeCycleModuleGetEchoLifecycle =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'getEchoLifecycle',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadEchoLifeCycleModuleGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadEchoLifeCycleModuleHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"isAlive"`
 *
 *
 */
export const useReadEchoLifeCycleModuleIsAlive =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'isAlive',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadEchoLifeCycleModuleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"timeBeforeDeath"`
 *
 *
 */
export const useReadEchoLifeCycleModuleTimeBeforeDeath =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'timeBeforeDeath',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__
 *
 *
 */
export const useWriteEchoLifeCycleModule = /*#__PURE__*/ createUseWriteContract(
  { abi: echoLifeCycleModuleAbi, address: echoLifeCycleModuleAddress },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteEchoLifeCycleModuleGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"pet"`
 *
 *
 */
export const useWriteEchoLifeCycleModulePet =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'pet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteEchoLifeCycleModuleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteEchoLifeCycleModuleRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__
 *
 *
 */
export const useSimulateEchoLifeCycleModule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateEchoLifeCycleModuleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"pet"`
 *
 *
 */
export const useSimulateEchoLifeCycleModulePet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'pet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateEchoLifeCycleModuleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateEchoLifeCycleModuleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__
 *
 *
 */
export const useWatchEchoLifeCycleModuleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `eventName` set to `"EchoPetted"`
 *
 *
 */
export const useWatchEchoLifeCycleModuleEchoPettedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    eventName: 'EchoPetted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchEchoLifeCycleModuleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchEchoLifeCycleModuleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeCycleModuleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchEchoLifeCycleModuleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeCycleModuleAbi,
    address: echoLifeCycleModuleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__
 */
export const useReadEchoLifeModule = /*#__PURE__*/ createUseReadContract({
  abi: echoLifeModuleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadEchoLifeModuleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeModuleAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"LIFE_MANAGER_ROLE"`
 */
export const useReadEchoLifeModuleLifeManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeModuleAbi,
    functionName: 'LIFE_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"MAX_PET_INTERVAL"`
 */
export const useReadEchoLifeModuleMaxPetInterval =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeModuleAbi,
    functionName: 'MAX_PET_INTERVAL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"getEchoLife"`
 */
export const useReadEchoLifeModuleGetEchoLife =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeModuleAbi,
    functionName: 'getEchoLife',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadEchoLifeModuleGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeModuleAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadEchoLifeModuleHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: echoLifeModuleAbi, functionName: 'hasRole' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"isAlive"`
 */
export const useReadEchoLifeModuleIsAlive = /*#__PURE__*/ createUseReadContract(
  { abi: echoLifeModuleAbi, functionName: 'isAlive' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadEchoLifeModuleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifeModuleAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeModuleAbi}__
 */
export const useWriteEchoLifeModule = /*#__PURE__*/ createUseWriteContract({
  abi: echoLifeModuleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteEchoLifeModuleGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeModuleAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"markAlive"`
 */
export const useWriteEchoLifeModuleMarkAlive =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeModuleAbi,
    functionName: 'markAlive',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"markDead"`
 */
export const useWriteEchoLifeModuleMarkDead =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeModuleAbi,
    functionName: 'markDead',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteEchoLifeModuleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeModuleAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteEchoLifeModuleRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifeModuleAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeModuleAbi}__
 */
export const useSimulateEchoLifeModule =
  /*#__PURE__*/ createUseSimulateContract({ abi: echoLifeModuleAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateEchoLifeModuleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeModuleAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"markAlive"`
 */
export const useSimulateEchoLifeModuleMarkAlive =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeModuleAbi,
    functionName: 'markAlive',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"markDead"`
 */
export const useSimulateEchoLifeModuleMarkDead =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeModuleAbi,
    functionName: 'markDead',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateEchoLifeModuleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeModuleAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateEchoLifeModuleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifeModuleAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeModuleAbi}__
 */
export const useWatchEchoLifeModuleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: echoLifeModuleAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `eventName` set to `"LifeUpdated"`
 */
export const useWatchEchoLifeModuleLifeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeModuleAbi,
    eventName: 'LifeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchEchoLifeModuleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeModuleAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchEchoLifeModuleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeModuleAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifeModuleAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchEchoLifeModuleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifeModuleAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__
 *
 *
 */
export const useReadEchoLifecycle = /*#__PURE__*/ createUseReadContract({
  abi: echoLifecycleAbi,
  address: echoLifecycleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadEchoLifecycleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"LIFECYCLE_MANAGER_ROLE"`
 *
 *
 */
export const useReadEchoLifecycleLifecycleManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'LIFECYCLE_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"MAX_PET_INTERVAL"`
 *
 *
 */
export const useReadEchoLifecycleMaxPetInterval =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'MAX_PET_INTERVAL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"echoFactory"`
 *
 *
 */
export const useReadEchoLifecycleEchoFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'echoFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"getEchoLifecycle"`
 *
 *
 */
export const useReadEchoLifecycleGetEchoLifecycle =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'getEchoLifecycle',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"getLastPetAt"`
 *
 *
 */
export const useReadEchoLifecycleGetLastPetAt =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'getLastPetAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadEchoLifecycleGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadEchoLifecycleHasRole = /*#__PURE__*/ createUseReadContract({
  abi: echoLifecycleAbi,
  address: echoLifecycleAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"isAlive"`
 *
 *
 */
export const useReadEchoLifecycleIsAlive = /*#__PURE__*/ createUseReadContract({
  abi: echoLifecycleAbi,
  address: echoLifecycleAddress,
  functionName: 'isAlive',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadEchoLifecycleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifecycleAbi}__
 *
 *
 */
export const useWriteEchoLifecycle = /*#__PURE__*/ createUseWriteContract({
  abi: echoLifecycleAbi,
  address: echoLifecycleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteEchoLifecycleGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"markDead"`
 *
 *
 */
export const useWriteEchoLifecycleMarkDead =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'markDead',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"pet"`
 *
 *
 */
export const useWriteEchoLifecyclePet = /*#__PURE__*/ createUseWriteContract({
  abi: echoLifecycleAbi,
  address: echoLifecycleAddress,
  functionName: 'pet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteEchoLifecycleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteEchoLifecycleRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifecycleAbi}__
 *
 *
 */
export const useSimulateEchoLifecycle = /*#__PURE__*/ createUseSimulateContract(
  { abi: echoLifecycleAbi, address: echoLifecycleAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateEchoLifecycleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"markDead"`
 *
 *
 */
export const useSimulateEchoLifecycleMarkDead =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'markDead',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"pet"`
 *
 *
 */
export const useSimulateEchoLifecyclePet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'pet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateEchoLifecycleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoLifecycleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateEchoLifecycleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifecycleAbi}__
 *
 *
 */
export const useWatchEchoLifecycleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifecycleAbi}__ and `eventName` set to `"EchoPetted"`
 *
 *
 */
export const useWatchEchoLifecycleEchoPettedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    eventName: 'EchoPetted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifecycleAbi}__ and `eventName` set to `"LifecycleUpdated"`
 *
 *
 */
export const useWatchEchoLifecycleLifecycleUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    eventName: 'LifecycleUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifecycleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchEchoLifecycleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifecycleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchEchoLifecycleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoLifecycleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchEchoLifecycleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoLifecycleAbi,
    address: echoLifecycleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoPetActionAbi}__
 */
export const useReadEchoPetAction = /*#__PURE__*/ createUseReadContract({
  abi: echoPetActionAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoPetActionAbi}__ and `functionName` set to `"XP_PER_PET"`
 */
export const useReadEchoPetActionXpPerPet = /*#__PURE__*/ createUseReadContract(
  { abi: echoPetActionAbi, functionName: 'XP_PER_PET' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoPetActionAbi}__ and `functionName` set to `"echoFactory"`
 */
export const useReadEchoPetActionEchoFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: echoPetActionAbi,
    functionName: 'echoFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoPetActionAbi}__ and `functionName` set to `"lifeModule"`
 */
export const useReadEchoPetActionLifeModule =
  /*#__PURE__*/ createUseReadContract({
    abi: echoPetActionAbi,
    functionName: 'lifeModule',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoPetActionAbi}__ and `functionName` set to `"progressModule"`
 */
export const useReadEchoPetActionProgressModule =
  /*#__PURE__*/ createUseReadContract({
    abi: echoPetActionAbi,
    functionName: 'progressModule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoPetActionAbi}__
 */
export const useWriteEchoPetAction = /*#__PURE__*/ createUseWriteContract({
  abi: echoPetActionAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoPetActionAbi}__ and `functionName` set to `"pet"`
 */
export const useWriteEchoPetActionPet = /*#__PURE__*/ createUseWriteContract({
  abi: echoPetActionAbi,
  functionName: 'pet',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoPetActionAbi}__
 */
export const useSimulateEchoPetAction = /*#__PURE__*/ createUseSimulateContract(
  { abi: echoPetActionAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoPetActionAbi}__ and `functionName` set to `"pet"`
 */
export const useSimulateEchoPetActionPet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoPetActionAbi,
    functionName: 'pet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoPetActionAbi}__
 */
export const useWatchEchoPetActionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: echoPetActionAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoPetActionAbi}__ and `eventName` set to `"EchoPetted"`
 */
export const useWatchEchoPetActionEchoPettedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoPetActionAbi,
    eventName: 'EchoPetted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoProgressModuleAbi}__
 *
 *
 */
export const useReadEchoProgressModule = /*#__PURE__*/ createUseReadContract({
  abi: echoProgressModuleAbi,
  address: echoProgressModuleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadEchoProgressModuleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"PROGRESS_CONTROLLER_ROLE"`
 *
 *
 */
export const useReadEchoProgressModuleProgressControllerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'PROGRESS_CONTROLLER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"getEchoProgress"`
 *
 *
 */
export const useReadEchoProgressModuleGetEchoProgress =
  /*#__PURE__*/ createUseReadContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'getEchoProgress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadEchoProgressModuleGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadEchoProgressModuleHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadEchoProgressModuleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoProgressModuleAbi}__
 *
 *
 */
export const useWriteEchoProgressModule = /*#__PURE__*/ createUseWriteContract({
  abi: echoProgressModuleAbi,
  address: echoProgressModuleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"addXp"`
 *
 *
 */
export const useWriteEchoProgressModuleAddXp =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'addXp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteEchoProgressModuleGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteEchoProgressModuleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteEchoProgressModuleRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoProgressModuleAbi}__
 *
 *
 */
export const useSimulateEchoProgressModule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"addXp"`
 *
 *
 */
export const useSimulateEchoProgressModuleAddXp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'addXp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateEchoProgressModuleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateEchoProgressModuleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateEchoProgressModuleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoProgressModuleAbi}__
 *
 *
 */
export const useWatchEchoProgressModuleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `eventName` set to `"LevelUp"`
 *
 *
 */
export const useWatchEchoProgressModuleLevelUpEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    eventName: 'LevelUp',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchEchoProgressModuleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchEchoProgressModuleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchEchoProgressModuleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link echoProgressModuleAbi}__ and `eventName` set to `"XpAdded"`
 *
 *
 */
export const useWatchEchoProgressModuleXpAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: echoProgressModuleAbi,
    address: echoProgressModuleAddress,
    eventName: 'XpAdded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useReadIAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: iAccessControlAbi, functionName: 'hasRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWriteIAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useSimulateIAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWatchIAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useReadIerc721Enumerable = /*#__PURE__*/ createUseReadContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721EnumerableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721EnumerableGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721EnumerableOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721EnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadIerc721EnumerableTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadIerc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc721EnumerableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWriteIerc721Enumerable = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721EnumerableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useSimulateIerc721Enumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721EnumerableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWatchIerc721EnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721EnumerableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721EnumerableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link useEchoAccountAbi}__
 */
export const useReadUseEchoAccount = /*#__PURE__*/ createUseReadContract({
  abi: useEchoAccountAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link useEchoAccountAbi}__ and `functionName` set to `"echoFactory"`
 */
export const useReadUseEchoAccountEchoFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: useEchoAccountAbi,
    functionName: 'echoFactory',
  })

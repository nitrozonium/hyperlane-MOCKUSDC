import { TokenMetadata, WarpTokenConfig } from '../features/tokens/types';

export const tokenList: TokenMetadata[] = [
  // Example collateral token
  {
    "chainId": 80001,
    "name": "MOCKUSD",
    "symbol": "USDC",
    "decimals": 18,
    // "type": "collateral",
    "address": "0x4D86353d21Ae2898c868C579E81fc64e004ca1ca",
    "hypCollateralAddress": "0x9d79D60D036d000a460022dc0Bae4BcB9993623E"
  },
  // Example native token
  // {
  //   type: 'native',
  //   chainId: 11155111,
  //   name: 'Ether',
  //   symbol: 'ETH',
  //   decimals: 18,
  //   hypNativeAddress: '0xEa44A29da87B5464774978e6A4F4072A4c048949',
  //   logoURI: '/logos/weth.png',
  // },
];

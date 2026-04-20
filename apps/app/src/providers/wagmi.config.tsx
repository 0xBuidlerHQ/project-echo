import { cookieStorage, createConfig, createStorage, http } from "wagmi";

import { anvil } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const wagmiConfig = () =>
	createConfig({
		chains: [anvil],
		ssr: true,
		transports: {
			[anvil.id]: http(),
		},
		connectors: [injected()],
		storage: createStorage({ storage: cookieStorage }),
	});

export { wagmiConfig };

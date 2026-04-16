import { createRelay } from "@0xhq/relay";

type Config = {};
type StepBase = {
	label: string;
};
type StepTransactionSuccess = {
	type: "transaction";
	txHash: string;
	blockNumber: number;
};
type StepApiCallSuccess = {
	type: "apicall";
};
type StepSuccess = StepTransactionSuccess | StepApiCallSuccess;
type StepError = {
	message: string;
};

const petRelay = createRelay<Config, StepBase, StepSuccess, StepError>("my-relay");

export { petRelay };

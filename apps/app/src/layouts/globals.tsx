import { ActionDrawer } from "@/features/drawers/actionDrawer";
import { SelectDrawer } from "@/features/drawers/selectDrawer";

import { PetDialog } from "@/features/pet/dialog";
import { SettingsDialog } from "@/features/settings/dialog";

const Globals = () => {
	return (
		<div className="z-1000">
			<ActionDrawer />
			<SelectDrawer />

			<PetDialog />
			<SettingsDialog />
		</div>
	);
};

export { Globals };

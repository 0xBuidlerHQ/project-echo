import { MenuDrawer } from "@/features/drawers/menuDrawer";
import { PetActionDialog } from "@/features/pet/petActionDialog";

const Globals = () => {
	return (
		<div className="z-1000">
			<MenuDrawer />

			<PetActionDialog />
		</div>
	);
};

export { Globals };

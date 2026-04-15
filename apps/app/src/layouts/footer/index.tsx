import { SiGithub, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import { externalLinks } from "@/config/links";
import { FooterPrimitive } from "@/primitives/footer";

const Footer = () => {
	return (
		<FooterPrimitive>
			<div className="bg-muted h-px" />

			<div className="py-2">
				<div className="flex justify-between">
					<div className="text-muted-foreground">/</div>

					<div className="flex gap-2">
						<a
							className="flex items-center gap-2 group"
							href={externalLinks.github}
							target="_blank"
							rel="noopener"
						>
							<SiGithub className="size-4" />
						</a>

						<a
							className="flex items-center gap-2 group"
							href={externalLinks.x}
							target="_blank"
							rel="noopener"
						>
							<SiX className="size-4" />
						</a>

						<a
							className="flex items-center gap-2 group"
							href={externalLinks.telegram}
							target="_blank"
							rel="noopener"
						>
							<SiTelegram className="size-4" />
						</a>
					</div>
				</div>
			</div>
		</FooterPrimitive>
	);
};

export { Footer };

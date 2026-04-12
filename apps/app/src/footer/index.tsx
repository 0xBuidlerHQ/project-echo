import { SiGithub, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import { externalLinks } from "@/config/links";

const Footer = () => {
	return (
		<>
			<div className="bg-white/10 h-px" />

			<div className="py-2 px-4">
				<div className="flex justify-between">
					<div className="opacity-50">/</div>

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
		</>
	);
};

export { Footer };

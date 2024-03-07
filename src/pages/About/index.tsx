import { useStoryblok } from "@storyblok/react";
import { IonCol, IonImg } from "@ionic/react";

function About() {
	let slug = "about-us";
	const { content } = useStoryblok(slug, {
		version: "published",
	});

	return (
		<>
			<div className="image-background">
				{content &&
					content.body.map(
						(item: {
							_uid: React.Key | null | undefined;
							image: string;
							description: string;
							label: string;
						}) => (
							<IonCol key={item._uid}>
								{item && (
									<>
										<IonImg src={item.image} alt="Image" />
										{/* Use IonImg component for displaying images with adjusted width and height */}
										{item.description}
									</>
								)}
							</IonCol>
						),
					)}
			</div>
		</>
	);
}

export default About;

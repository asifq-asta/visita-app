import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonList,
} from "@ionic/react";
import Skeleton from "@components/Skelton";
import { RootState } from "@redux/store";
import { filterAttractions } from "@redux/Attractions/attractionSlice";
import { Attraction } from "@interfaces/attraction";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

interface Props {
	client?: ApolloClient<NormalizedCacheObject>;
}
const Attractions: React.FC<Props> = ({ client }: any) => {
	const [searchQuery, setSearchQuery] = useState("");
	const dispatch = useDispatch();

	const getAttractionData = useSelector(
		(state: RootState) => state.attractions,
	);
	const attractionData = getAttractionData.data;
	useEffect(() => {
		if (!attractionData) {
			const fetchDataAction = async () => {
				await dispatch(
					filterAttractions({ client, props: searchQuery }) as ReturnType<any>,
				);
			};
			fetchDataAction();
		}
	}, [searchQuery, dispatch, client, attractionData]);

	const handleSearch = (query: string) => {
		setTimeout(() => {
			dispatch(filterAttractions({ client, props: query }) as ReturnType<any>);
		}, 200); // Adjust the debounce delay as needed

		setSearchQuery(query);
	};
	console.log("handleSearch: ", handleSearch);

	if (getAttractionData.status === "loading") return <Skeleton />;
	if (getAttractionData.error) return <p>Error: {getAttractionData.error}</p>;

	const attractions: Attraction[] = attractionData ?? [];

	return (
		<>
			{/* <SearchBar onSearch={handleSearch} searchQuery={searchQuery} /> */}
			{attractions.length === 0 ? (
				<p>No results found.</p>
			) : (
				<IonList>
					{attractions.map((attraction, index) => (
						<IonCard key={index}>
							<IonCardHeader>
								<IonCardTitle>{attraction.title}</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<IonCardSubtitle>{attraction.location}</IonCardSubtitle>
								<p>{attraction.description}</p>
							</IonCardContent>
						</IonCard>
					))}
				</IonList>
			)}
		</>
	);
};

export default Attractions;

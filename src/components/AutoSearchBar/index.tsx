import React from "react";
import { IonSearchbar } from "@ionic/react";

interface SearchBarProps {
	onSearch: (query: string) => void;
	searchQuery: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchQuery }) => {
	const handleInput = (event: CustomEvent) => {
		const query = (event.target as HTMLInputElement).value;
		onSearch(query);
	};

	return (
		<IonSearchbar
			role="searchbox"
			data-testid="search-input"
			debounce={5000}
			value={searchQuery}
			onIonInput={handleInput}
		></IonSearchbar>
	);
};

export default SearchBar;

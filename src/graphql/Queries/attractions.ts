import { gql } from "@apollo/client";

// Define your GraphQL query
const GET_ATTRACTION = gql`
	query attraction {
		attraction {
			id
			title
			description
			location
		}
	}
`;

const GET_ATTRACTION_FILTER = gql`
	query attraction($where: attraction_bool_exp) {
		attraction(where: $where) {
			id
			title
			description
			location
			map
		}
	}
`;

export { GET_ATTRACTION, GET_ATTRACTION_FILTER };

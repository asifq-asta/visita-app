export interface Attraction {
	id: string;
	title: string;
	description: string;
	location: string;
	map: string | null; // You can replace 'any' with the type of the map data if known
	categories: { category: { title: string } }[];
	types: { type: { title: string } }[];
	tickets: Ticket[];
}

interface Ticket {
	title: string;
	overview: string;
	duration_minutes: number;
	included_activities: string[];
	included_amenities: string[];
	excluded_activities: string[];
	excluded_amenities: string[];
	highlights: string[];
	hosted_languages: string;
	pre_visit_notes: string[];
	terms_conditions: string[];
	ticket_info: string[];
	allowed_guests: AllowedGuest[];
}

interface AllowedGuest {
	id: string;
	guest: string;
	prices: Price[];
	depend_on: string | null;
	min_allowed: number;
	max_allowed: number;
	unit_dependent_factor: string | null; // You can replace 'any' with the appropriate type if known
}

interface Price {
	currency: string;
	unit_price: number;
}

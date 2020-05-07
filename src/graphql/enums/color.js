import { GraphQLEnumType } from 'graphql';

const colorEnum = new GraphQLEnumType({
	name: 'colorEnum',
	values: {
		'Beige': { value: 'Beige' },
		'Black': { value: 'Black' },
		'Blue': { value: 'Blue' },
		'Brown': { value: 'Brown' },
		'Colorful': { value: 'Colorful' },
		'Gray': { value: 'Gray' },
		'Green': { value: 'Green' },
		'LightBlue': { value: 'Light Blue' },
		'Orange': { value: 'Orange' },
		'Pink': { value: 'Pink' },
		'Purple': { value: 'Purple' },
		'Red': { value: 'Red' },
		'White': { value: 'White' },
		'Yellow': { value: 'Yellow' },
	}
});

export default colorEnum;
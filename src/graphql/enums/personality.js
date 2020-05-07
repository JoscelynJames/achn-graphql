import { GraphQLEnumType } from 'graphql';

const personalityEnum = new GraphQLEnumType({
	name: 'personalityEnum',
	values: {
		'BigSister': { value: 'Big Sister' },
		'Cranky': { value: 'Cranky' },
		'Jock': { value: 'Jock' },
		'Lazy': { value: 'Lazy' },
		'Normal': { value: 'Normal' },
		'Peppy': { value: 'Peppy' },
		'Smug': { value: 'Smug' },
		'Snooty': { value: 'Snooty' },
	}
});

export default personalityEnum;
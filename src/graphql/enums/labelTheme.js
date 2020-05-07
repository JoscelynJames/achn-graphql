import { GraphQLEnumType } from 'graphql';

const labelTitleEnum = new GraphQLEnumType({
	name: 'labelTitleEnum',
	values: {
		'Comfy': { value: 'comfy' },
		'Everyday': { value: 'everyday' },
		'FairyTale': { value: 'fairy tale' },
		'Formal': { value: 'formal' },
		'Goth': { value: 'goth' },
		'Outdoorsy': { value: 'outdoorsy' },
		'Party': { value: 'party' },
		'Sporty': { value: 'sporty' },
		'Theatrical': { value: 'theatrical' },
		'Vacation': { value: 'vacation' },
		'Work': { value: 'work' },
	}
});

export default labelTitleEnum;
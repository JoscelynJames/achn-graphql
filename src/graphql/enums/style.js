import { GraphQLEnumType } from 'graphql';

const styleEnum = new GraphQLEnumType({
	name: 'styleEnum',
	values: {
		'Active': { value: 'Active' },
		'Cool': { value: 'Cool' },
		'Cute': { value: 'Cute' },
		'Elegant': { value: 'Elegant' },
		'Gorgeous': { value: 'Gorgeous' },
		'Simple': { value: 'Simple' },
	}
});

export default styleEnum;
import { GraphQLEnumType } from 'graphql';

const genderEnum = new GraphQLEnumType({
	name: 'genderEnum',
	values: {
		'Female': { value: 'Female' },
		'Male': { value: 'Male' },
	}
});

export default genderEnum;
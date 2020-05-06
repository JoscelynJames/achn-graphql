import { GraphQLEnumType } from 'graphql';

const SecondaryShapeEnum = new GraphQLEnumType({
	name: 'SecondaryShapeEnum',
	values: {
		'H': { value: 'Height' },
		'L': { value: 'Length' },
		'W': { value: 'Width' },
	}
});

export default SecondaryShapeEnum;
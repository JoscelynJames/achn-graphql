import { GraphQLEnumType } from 'graphql';

const hobbyEnum = new GraphQLEnumType({
	name: 'hobbyEnum',
	values: {
		Education: { value: 'Education' },
		Fashion: { value: 'Fashion' },
		Fitness: { value: 'Fitness' },
		Music: { value: 'Music' },
		Nature: { value: 'Nature' },
		Play: { value: 'Play' },
	}
});

export default hobbyEnum;
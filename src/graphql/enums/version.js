import { GraphQLEnumType } from 'graphql';
// TODO - graphql does not allow keys to have any numbers or special chars in it
// I updated them to alpha but circle back to see if this works
const versionEnumType = new GraphQLEnumType({
	name: 'versionEnumType',
	values: {
		'a':  { value: '1.0.0' },
		'b': { value: '1.1.0' },
		'c': { value: '1.1.0a' },
		'd' : { value: '1.2.0' },
	}
});

export default versionEnumType;
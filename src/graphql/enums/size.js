import { GraphQLEnumType } from 'graphql';
// TODO - graphql does not allow keys to have any numbers or special chars in it
// I updated them to alpha but circle back to see if this works
const sizeEnumType = new GraphQLEnumType({
	name: 'sizeEnumType',
	values: {
		'a': { value: '0.5x1' },
		'b': { value: '1.5x1.5' },
		'c': { value: '1x0.5' },
		'd': { value: '1x1' },
		'e': { value: '1x1.5' },
		'f': { value: '1x2' },
		'g': { value: '2x0.5' },
		'h': { value: '2x1' },
		'i': { value: '2x1.5' },
		'j': { value: '2x2' },
		'k': { value: '3x1' },
		'l': { value: '3x2' },
		'm': { value: '3x3' },
		'n': { value: '4x3' },
		'o': { value: '4x4' },
		'p': { value: '5x5' },
	}
});

export default sizeEnumType;
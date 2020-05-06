import { GraphQLEnumType } from 'graphql';

const speakerTypeEnumType = new GraphQLEnumType({
	name: 'speakerTypeEnumType',
	values: {
		'Cheap': { value: 'Cheap' },
		'Hifi': { value: 'Hi-fi' },
		'Phono': { value: 'Phono' },
		'Retro': { value: 'Retro' },
	}
});

export default speakerTypeEnumType;
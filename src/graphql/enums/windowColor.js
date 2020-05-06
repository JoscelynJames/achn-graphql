import { GraphQLEnumType } from 'graphql';

const windowColorEnumType = new GraphQLEnumType({
	name: 'windowColorEnumType',
	values: {
		'BlackMetal': { value: 'Black Metal' },
		'DarkWood': { value: 'Dark Wood' },
		'GreyMetal': { value: 'Grey Metal' },
		'GreyWood': { value: 'Grey Wood' },
		'LightWood': { value: 'Light Wood' },
		'NaturalWood': { value: 'Natural Wood' },
		'WhiteMetal': { value: 'White Metal' },
		'WhiteWood': { value: 'White Wood' },
		'Wood': { value: 'Wood' },
	}
});

export default windowColorEnumType;
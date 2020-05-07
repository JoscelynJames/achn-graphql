import { GraphQLEnumType } from 'graphql';

const themeEnum = new GraphQLEnumType({
	name: 'themeEnum',
	values: {
		'Bathroom': { value: 'bathroom' },
		'ChildSRoom': { value: 'child\'s room' },
		'Concert': { value: 'concert' },
		'Den': { value: 'den' },
		'Expensive': { value: 'expensive' },
		'Facility': { value: 'facility' },
		'Fancy': { value: 'fancy' },
		'Fitness': { value: 'fitness' },
		'FolkArt': { value: 'folk art' },
		'FreezingCold': { value: 'freezing cold' },
		'Garage': { value: 'garage' },
		'Garden': { value: 'garden' },
		'Horror': { value: 'horror' },
		'Kitchen': { value: 'kitchen' },
		'LivingRoom': { value: 'living room' },
		'Music': { value: 'music' },
		'Ocean': { value: 'ocean' },
		'Office': { value: 'office' },
		'Outdoors': { value: 'outdoors' },
		'Party': { value: 'party' },
		'School': { value: 'school' },
		'Shop': { value: 'shop' },
		'Space': { value: 'space' },
		'ZenStyle': { value: 'zen-style' },
	}
});

export default themeEnum;
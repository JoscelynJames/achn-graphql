const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

const variantIdEnum = new GraphQLEnumType({
	name: 'variantIdEnum',
	values: {
		'The0_0': {type: '0_0'},
		'The0_1': {type: '0_1'},
		'The0_2': {type: '0_2'},
		'The0_3': {type: '0_3'},
		'The0_4': {type: '0_4'},
		'The0_5': {type: '0_5'},
		'The0_6': {type: '0_6'},
		'The0_7': {type: '0_7'},
		'The1_0': {type: '1_0'},
		'The1_1': {type: '1_1'},
		'The1_2': {type: '1_2'},
		'The1_3': {type: '1_3'},
		'The1_4': {type: '1_4'},
		'The1_5': {type: '1_5'},
		'The1_6': {type: '1_6'},
		'The1_7': {type: '1_7'},
		'The2_0': {type: '2_0'},
		'The2_1': {type: '2_1'},
		'The2_2': {type: '2_2'},
		'The2_3': {type: '2_3'},
		'The2_4': {type: '2_4'},
		'The2_5': {type: '2_5'},
		'The2_6': {type: '2_6'},
		'The2_7': {type: '2_7'},
		'The3_0': {type: '3_0'},
		'The3_1': {type: '3_1'},
		'The3_2': {type: '3_2'},
		'The3_3': {type: '3_3'},
		'The3_4': {type: '3_4'},
		'The3_5': {type: '3_5'},
		'The3_6': {type: '3_6'},
		'The3_7': {type: '3_7'},
		'The4_0': {type: '4_0'},
		'The4_1': {type: '4_1'},
		'The4_2': {type: '4_2'},
		'The4_3': {type: '4_3'},
		'The4_4': {type: '4_4'},
		'The4_5': {type: '4_5'},
		'The4_6': {type: '4_6'},
		'The4_7': {type: '4_7'},
		'The5_0': {type: '5_0'},
		'The5_1': {type: '5_1'},
		'The5_2': {type: '5_2'},
		'The5_3': {type: '5_3'},
		'The5_4': {type: '5_4'},
		'The5_5': {type: '5_5'},
		'The5_6': {type: '5_6'},
		'The5_7': {type: '5_7'},
		'The6_0': {type: '6_0'},
		'The6_1': {type: '6_1'},
		'The6_2': {type: '6_2'},
		'The6_3': {type: '6_3'},
		'The6_4': {type: '6_4'},
		'The6_5': {type: '6_5'},
		'The6_6': {type: '6_6'},
		'The6_7': {type: '6_7'},
		'The7_0': {type: '7_0'},
		'The7_1': {type: '7_1'},
		'The7_2': {type: '7_2'},
		'The7_3': {type: '7_3'},
		'The7_4': {type: '7_4'},
		'The7_5': {type: '7_5'},
		'The7_6': {type: '7_6'},
		'The7_7': {type: '7_7'},
	}
});

module.exports = variantIdEnum;
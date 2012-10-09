var surahArray = {};
var currentSelectedSurah = "";
var currentSurahIndex = "";
var currentHadithBookIndex=null;
var currentHadithVolumeIndex=null;
var currentHadithNumberIndex=null;

var keyValuePairObject={ 1:"1"}
		
var currentAyahValuesObject = new Array();		

/**
 * Ayah Array here we define how many counts each element of Ayah array will have, based on the value of
 * the currentSurahIndex variable defined here.
 */
	var ayah = new Array();

			ayah[1] = '7';{};
			ayah[2] = '286';
			ayah[3] = '200';
			ayah[4] = '176';
			ayah[5] = '120';
			ayah[6] = '165';
			ayah[7] = '206';
			ayah[8] = '75';
			ayah[9] = '129';
			ayah[10] = '109';
			ayah[11] = '123';
			ayah[12] = '111';
			ayah[13] = '43';
			ayah[14] = '52';
			ayah[15] = '99';
			ayah[16] = '128';
			ayah[17] = '111';
			ayah[18] = '110';
			ayah[19] = '98';
			ayah[20] = '135';
			ayah[21] = '112';
			ayah[22] = '78';
			ayah[23] = '118';
			ayah[24] = '64';
			ayah[25] = '77';
			ayah[26] = '227';
			ayah[27] = '93';
			ayah[28] = '88';
			ayah[29] = '69';
			ayah[30] = '60';
			ayah[31] = '34';
			ayah[32] = '30';
			ayah[33] = '73';
			ayah[34] = '54';
			ayah[35] = '45';
			ayah[36] = '83'
			ayah[37] = '182';
			ayah[38] = '88';
			ayah[39] = '75';
			ayah[40] = '85';
			ayah[41] = '54';
			ayah[42] = '53';
			ayah[43] = '89';
			ayah[44] = '59';
			ayah[45] = '37';
			ayah[46] = '35';
			ayah[47] = '38';
			ayah[48] = '29';
			ayah[49] = '18'
			ayah[50] = '45';
			ayah[51] = '60';
			ayah[52] = '49';
			ayah[53] = '62';
			ayah[54] = '55'
			ayah[55] = '78';
			ayah[56] = '96';
			ayah[57] = '29';
			ayah[58] = '22';
			ayah[59] = '24';
			ayah[60] = '13';
			ayah[61] = '14';
			ayah[62] = '11';
			ayah[63] = '11';
			ayah[64] = '18';
			ayah[65] = '12';
			ayah[66] = '12';
			ayah[67] = '30';
			ayah[68] = '52';
			ayah[69] = '52';
			ayah[70] = '44';
			ayah[71] = '28';
			ayah[72] = '28';
			ayah[73] = '20';
			ayah[74] = '56';
			ayah[75] = '40';
			ayah[76] = '31';
			ayah[77] = '50';
			ayah[78] = '40';
			ayah[79] = '46';
			ayah[80] = '42';
			ayah[81] = '29';
			ayah[82] = '19';
			ayah[83] = '36';
			ayah[84] = '25';
			ayah[85] = '22';
			ayah[86] = '17';
			ayah[87] = '19';
			ayah[88] = '26';
			ayah[89] = '30';
			ayah[90] = '20';
			ayah[91] = '15';
			ayah[92] = '21';
			ayah[93] = '11';
			ayah[94] = '8';
			ayah[95] = '8';
			ayah[96] = '19';
			ayah[97] = '5';
			ayah[98] = '8';
			ayah[99] = '8';
			ayah[100] = '11';
			ayah[101] = '11';
			ayah[102] = '8';
			ayah[103] = '3';
			ayah[104] = '9';
			ayah[105] = '5';
			ayah[106] = '4';
			ayah[107] = '7';
			ayah[108] = '3';
			ayah[109] = '6';
			ayah[110] = '3';
			ayah[111] = '5';
			ayah[112] = '4';
			ayah[113] = '5';
			ayah[114] = '6';
			
		
		
		/**
		 * Defining value objects for Ayah
		 */	
		 var value_Ayah_One = {1:'1',2:'2',3:'3',4:'4',5:'5'};
			
	/**
	 * Defining function for getting the Ayah array to be added to the Spinner for Ayah :
	 */		
	 	function getAyahObject(ayahCountString){
	 		currentAyahValuesObject.length = 0;
	 		var ayahCountInt = parseInt(ayahCountString);
	 		for(var index = 0; index<ayahCountInt;index++){
	 			currentAyahValuesObject[index]= ''+index;
	 		}
	 		
	 	}

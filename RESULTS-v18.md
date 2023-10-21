## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|577,281,385|97|
|Using dot notation|596,859,472|98|
|Using define property (writable)|3,012,047|98|
|Using define property initialized (writable)|4,192,037|96|
|Using define property (getter)|1,515,583|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":577281385.3039,"samples":6},{"name":"Using dot notation","opsSec":596859472.4835055,"samples":9},{"name":"Using define property (writable)","opsSec":3012046.7866212055,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4192036.557638278,"samples":6},{"name":"Using define property (getter)","opsSec":1515583.4986692374,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.002ms
array.push|100|0.036ms
new Array(length)|100|0.012ms
array.push|1,000|0.076ms
new Array(length)|1,000|0.042ms
array.push|10,000|0.554ms
new Array(length)|10,000|0.285ms
array.push|1,000,000|41.955ms
new Array(length)|1,000,000|25.684ms
array.push|100,000,000|2,285.268ms
new Array(length)|100,000,000|5,503.297ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.023ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.841ms
new Array(length)|10,000|5.147ms
array.push|1,000,000|403.519ms
new Array(length)|1,000,000|5.188ms
array.push|100,000,000|3,024.295ms
new Array(length)|100,000,000|6,319.052ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|364|83|
|Array.from|16|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":363.7162410428399,"samples":2},{"name":"Array.from","opsSec":15.588382374343805,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,234|85|
|new Blob (1024)|412|71|
|text (128)|30,628|84|
|text (1024)|20,449|86|
|arrayBuffer (128)|32,042|64|
|arrayBuffer (1024)|21,238|79|
|slice (0, 64)|58,269|77|
|slice (0, 512)|34,106|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Blob (128)","hz":3234.219257260789,"cycles":3,"stats":{"deviation":0.000027354775063951942,"mean":0.00030919363235965225,"moe":0.000005815402200586465,"rme":1.8808285785853516,"sem":0.0000029670419390747273,"variance":7.48283718799407e-10}},{"name":"new Blob (1024)","hz":412.46823434187644,"cycles":2,"stats":{"deviation":0.00036303756383781994,"mean":0.002424429123846528,"moe":0.00008444587911162854,"rme":3.4831242654620973,"sem":0.00004308463219981048,"variance":1.3179627275729918e-7}},{"name":"text (128)","hz":30627.609565946004,"cycles":4,"stats":{"deviation":0.0000019351977194077015,"mean":0.000032650279083871844,"moe":4.1384886824827953e-7,"rme":1.2675201556016933,"sem":2.111473817593263e-7,"variance":3.744990213200769e-12}},{"name":"text (1024)","hz":20449.178926076707,"cycles":3,"stats":{"deviation":0.00000580909428751391,"mean":0.00004890171892059706,"moe":0.0000012277650637728391,"rme":2.5106787468276766,"sem":6.264107468228771e-7,"variance":3.3745576441226745e-11}},{"name":"arrayBuffer (128)","hz":32042.072587258903,"cycles":4,"stats":{"deviation":0.0000016616413247973552,"mean":0.000031208967437319785,"moe":4.07102124575352e-7,"rme":1.3044395826070745,"sem":2.077051655996694e-7,"variance":2.7610518922743097e-12}},{"name":"arrayBuffer (1024)","hz":21237.649555655036,"cycles":4,"stats":{"deviation":0.000004693653750724436,"mean":0.00004708618989965986,"moe":0.0000010350315170309185,"rme":2.1981636637760644,"sem":5.280773046076115e-7,"variance":2.203038553168956e-11}},{"name":"slice (0, 64)","hz":58268.5888992351,"cycles":3,"stats":{"deviation":0.000004387213331200711,"mean":0.000017161905220140437,"moe":9.799399461390813e-7,"rme":5.709971786751672,"sem":4.999693602750414e-7,"variance":1.9247640813465237e-11}},{"name":"slice (0, 512)","hz":34106.32133996915,"cycles":4,"stats":{"deviation":0.000012751088416427317,"mean":0.000029320077941918094,"moe":0.0000028118346789882284,"rme":9.590133711644153,"sem":0.000001434609530096035,"variance":1.625902558035469e-10}}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,431|56|
|[True conditional] Using constructor name|147,039|96|
|[True conditional] Check if property is valid then instanceof |145,369|89|
|[False conditional] Using instanceof only|711,546,374|99|
|[False conditional] Using constructor name|711,012,360|97|
|[False conditional] Check if property is valid then instanceof |710,393,528|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":186431.22694752403,"cycles":4,"stats":{"deviation":0.000001067643555158578,"mean":0.00000536390826994598,"moe":2.79632947622048e-7,"rme":5.213231352013113,"sem":1.4266987123573877e-7,"variance":1.1398627608716476e-12}},{"name":"[True conditional] Using constructor name","hz":147039.09863156595,"cycles":3,"stats":{"deviation":2.1990088769223852e-7,"mean":0.000006800912201629361,"moe":4.3989339121202735e-8,"rme":0.6468152773779932,"sem":2.244354036796058e-8,"variance":4.83564004078345e-14}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":145368.9392529347,"cycles":3,"stats":{"deviation":4.0337741856876267e-7,"mean":0.000006879048613404613,"moe":8.380552487096401e-8,"rme":1.2182720254027477,"sem":4.275792085253266e-8,"variance":1.6271334181119876e-13}},{"name":"[False conditional] Using instanceof only","hz":711546373.8386632,"cycles":11,"stats":{"deviation":1.2003984263860308e-11,"mean":1.4053897774858748e-9,"moe":2.3646337913154004e-12,"rme":0.16825465996668434,"sem":1.2064458118956125e-12,"variance":1.4409563820700589e-22}},{"name":"[False conditional] Using constructor name","hz":711012359.7508119,"cycles":10,"stats":{"deviation":1.154460985267358e-11,"mean":1.40644531179524e-9,"moe":2.2974679670076795e-12,"rme":0.16335281206740307,"sem":1.1721775341875915e-12,"variance":1.3327801665044792e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":710393527.8499533,"cycles":6,"stats":{"deviation":3.159099495604374e-11,"mean":1.4076704823403407e-9,"moe":6.386390184071106e-12,"rme":0.45368502530885857,"sem":3.258362338811789e-12,"variance":9.97990962312781e-22}}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,515|90|
|crypto.verify('RSA-SHA256')|4,499|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4515.0193977735435,"cycles":4,"stats":{"deviation":0.0000042815054893696955,"mean":0.00022148299085782938,"moe":8.845681985135754e-7,"rme":0.39938425749423906,"sem":4.513103053640691e-7,"variance":1.8331289255502838e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":4499.40281607116,"cycles":3,"stats":{"deviation":0.000008100742834345195,"mean":0.0002222517167007491,"moe":0.0000016376345408851729,"rme":0.7368377464954147,"sem":8.355278269822311e-7,"variance":6.562203446819503e-11}}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,666,064|95|
|fromUnixToISOString(new Date())|1,334,039|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1666063.9439747168,"cycles":6,"stats":{"deviation":1.060312258120572e-8,"mean":6.002170586648116e-7,"moe":2.1322005496331767e-9,"rme":0.35523824570669094,"sem":1.0878574232822331e-9,"variance":1.1242620847207464e-16}},{"name":"fromUnixToISOString(new Date())","hz":1334039.489862225,"cycles":7,"stats":{"deviation":1.3324418663183106e-8,"mean":7.496029972120814e-7,"moe":2.6516638888903667e-9,"rme":0.3537424341621388,"sem":1.352889739229779e-9,"variance":1.7754013271178226e-16}}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,944|82|
|Intl.DateTimeFormat().format(new Date())|7,666|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,862|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,826|86|
|Reusing Intl.DateTimeFormat()|430,603|77|
|Date.toLocaleDateString()|491,721|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,396|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7944.4613513048225,"cycles":6,"stats":{"deviation":0.000015779563541602495,"mean":0.00012587385799740306,"moe":0.0000034154201140805802,"rme":2.713367309478228,"sem":0.0000017425612826941736,"variance":2.4899462556347064e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":7666.119237991691,"cycles":3,"stats":{"deviation":0.000009491155288929803,"mean":0.0001304440968050964,"moe":0.0000020543206150289434,"rme":1.5748666787876306,"sem":0.000001048122762769869,"variance":9.008202871858017e-11}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":7862.180806411928,"cycles":3,"stats":{"deviation":0.000017925039098917123,"mean":0.00012719117311375737,"moe":0.000004199205832674815,"rme":3.3014915499828947,"sem":0.0000021424519554463344,"variance":3.2130702669770754e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":8825.932529979014,"cycles":4,"stats":{"deviation":0.000006169983984539028,"mean":0.00011330247501930288,"moe":0.0000013040399080003427,"rme":1.1509368244411065,"sem":6.653264836736443e-7,"variance":3.80687023694681e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":430602.6032347564,"cycles":5,"stats":{"deviation":0.0000027610192515459207,"mean":0.000002322326879790875,"moe":6.167087972237692e-7,"rme":26.55564135223305,"sem":3.146473455223312e-7,"variance":7.623227307407196e-12}},{"name":"Date.toLocaleDateString()","hz":491720.65430414723,"cycles":4,"stats":{"deviation":9.74900811524331e-8,"mean":0.0000020336749966607328,"moe":2.003068526536544e-8,"rme":0.9849501664845937,"sem":1.021973738028849e-8,"variance":9.504315923107992e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":8395.541905661717,"cycles":5,"stats":{"deviation":0.00003498595184675237,"mean":0.0001191108342066196,"moe":0.000007619162846626072,"rme":6.396700096491001,"sem":0.000003887327982972485,"variance":1.2240168266232753e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|672,489|94|
|Using brackets {}|713,247|94|
|Using '' + |720,184|95|
|Using date.toString()|777,557|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":672489.399708557,"cycles":3,"stats":{"deviation":1.62171741464245e-7,"mean":0.0000014870122866373497,"moe":3.278440641904605e-8,"rme":2.2047165792545638,"sem":1.6726737968901044e-8,"variance":2.629967372954592e-14}},{"name":"Using brackets {}","hz":713246.6834180397,"cycles":4,"stats":{"deviation":1.2711752072357643e-7,"mean":0.0000014020394671977631,"moe":2.5697895482623683e-8,"rme":1.8328938723804766,"sem":1.311117116460392e-8,"variance":1.6158864074908884e-14}},{"name":"Using '' + ","hz":720183.597665866,"cycles":6,"stats":{"deviation":1.2178937069464751e-8,"mean":0.0000013885348170119763,"moe":2.449083853796935e-9,"rme":0.17637900208128604,"sem":1.2495325784678241e-9,"variance":1.4832650814198267e-16}},{"name":"Using date.toString()","hz":777557.1065528349,"cycles":4,"stats":{"deviation":1.13874605478121e-8,"mean":0.0000012860791722852708,"moe":2.277966537670798e-9,"rme":0.1771249069855485,"sem":1.1622278253422439e-9,"variance":1.2967425772797707e-16}}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,868,812|90|
|Using delete property (proto: null)|12,081,369|86|
|Using delete property (cached proto: null)|1,884,914|87|
|Using undefined assignment|645,404,547|88|
|Using undefined assignment (proto: null)|13,834,978|89|
|Using undefined property (cached proto: null)|606,650,613|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using delete property","hz":1868811.955246061,"cycles":6,"stats":{"deviation":2.2467343818702487e-8,"mean":5.350993165432383e-7,"moe":4.64180132349206e-9,"rme":0.867465380721895,"sem":2.3682659813735e-9,"variance":5.047815382677888e-16}},{"name":"Using delete property (proto: null)","hz":12081368.717680756,"cycles":5,"stats":{"deviation":4.877397802457425e-9,"mean":8.27720785093271e-8,"moe":1.0308489288684674e-9,"rme":1.2454066001886217,"sem":5.259433310553405e-10,"variance":2.378900932341652e-17}},{"name":"Using delete property (cached proto: null)","hz":1884913.9219353662,"cycles":4,"stats":{"deviation":1.7873861098606504e-8,"mean":5.305282052207634e-7,"moe":3.755906943834071e-9,"rme":0.7079561287926553,"sem":1.916279052976567e-9,"variance":3.1947491057227894e-16}},{"name":"Using undefined assignment","hz":645404547.0751381,"cycles":7,"stats":{"deviation":5.954544321017264e-11,"mean":1.5494157959249393e-9,"moe":1.2441228525158703e-11,"rme":0.8029625461338341,"sem":6.347565574060562e-12,"variance":3.545659807095894e-21}},{"name":"Using undefined assignment (proto: null)","hz":13834978.344652046,"cycles":5,"stats":{"deviation":3.601483921025853e-9,"mean":7.228056127652365e-8,"moe":7.482428029482218e-10,"rme":1.0351922975330397,"sem":3.817565321164397e-10,"variance":1.297068643340775e-17}},{"name":"Using undefined property (cached proto: null)","hz":606650613.4526665,"cycles":6,"stats":{"deviation":5.318701286325754e-11,"mean":1.6483952671021643e-9,"moe":1.080986317273595e-11,"rme":0.6557810125079653,"sem":5.515236312620383e-12,"variance":2.8288583373163226e-21}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|159,359|53|
|NodeError|127,525|94|
|NodeError Range|128,021|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:53:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":159358.81206566698,"cycles":4,"stats":{"deviation":0.0000012423952660947082,"mean":0.000006275147179108803,"moe":3.3448598421998337e-7,"rme":5.330328909791198,"sem":1.706561143979507e-7,"variance":1.543545997214541e-12}},{"name":"NodeError","hz":127525.39222469178,"cycles":3,"stats":{"deviation":2.5073826659181725e-7,"mean":0.00000784157556824497,"moe":5.068888798092874e-8,"rme":0.6464120321201402,"sem":2.586167754129017e-8,"variance":6.286967833346921e-14}},{"name":"NodeError Range","hz":128020.61660866113,"cycles":3,"stats":{"deviation":2.3686588788038565e-7,"mean":0.00000781124186471342,"moe":4.814122283683298e-8,"rme":0.6163069031866317,"sem":2.456184838613928e-8,"variance":5.610544884136343e-14}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,164,915|88|
|Function returning explicitly undefined|1,188,293|90|
|Function returning implicitly undefined|1,173,914|87|
|Function returning string|1,159,975|87|
|Function returning integer|1,157,917|84|
|Function returning float|1,172,789|85|
|Function returning functions|1,147,849|86|
|Function returning arrow functions|1,179,333|87|
|Function returning empty object|1,173,885|90|
|Function returning empty array|1,147,618|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","hz":1164915.4331034184,"cycles":5,"stats":{"deviation":6.52576111077138e-8,"mean":8.584314119145355e-7,"moe":1.3634710047104013e-8,"rme":1.5883284159761701,"sem":6.956484717910211e-9,"variance":4.258555807485612e-15}},{"name":"Function returning explicitly undefined","hz":1188293.0383114656,"cycles":6,"stats":{"deviation":3.774861334454164e-8,"mean":8.415432622755871e-7,"moe":7.798944316542828e-9,"rme":0.9267431237526614,"sem":3.979053222725933e-9,"variance":1.4249578094357069e-15}},{"name":"Function returning implicitly undefined","hz":1173913.9215762736,"cycles":4,"stats":{"deviation":5.3394924546463046e-8,"mean":8.518512146591203e-7,"moe":1.1220092108984333e-8,"rme":1.31714223281048,"sem":5.724536790298129e-9,"variance":2.8510179673224817e-15}},{"name":"Function returning string","hz":1159975.123514708,"cycles":5,"stats":{"deviation":5.809622787691148e-8,"mean":8.620874531946981e-7,"moe":1.2207996050191425e-8,"rme":1.4160971726187865,"sem":6.228569413362972e-9,"variance":3.375171693526027e-15}},{"name":"Function returning integer","hz":1157916.992829815,"cycles":6,"stats":{"deviation":5.935358823117846e-8,"mean":8.63619763931537e-7,"moe":1.269297450570872e-8,"rme":1.4697410869715746,"sem":6.476007400871796e-9,"variance":3.5228484359162867e-15}},{"name":"Function returning float","hz":1172788.9209042322,"cycles":6,"stats":{"deviation":6.711307655055778e-8,"mean":8.526683550429431e-7,"moe":1.4267693013296396e-8,"rme":1.6732992292856734,"sem":7.279435210865509e-9,"variance":4.5041650440810284e-15}},{"name":"Function returning functions","hz":1147848.5725373372,"cycles":7,"stats":{"deviation":5.6239679063080965e-8,"mean":8.711950547531582e-7,"moe":1.1886381892589013e-8,"rme":1.3643766488041953,"sem":6.064480557443374e-9,"variance":3.1629015011183475e-15}},{"name":"Function returning arrow functions","hz":1179333.1734010614,"cycles":4,"stats":{"deviation":5.748580070183465e-8,"mean":8.479368023847874e-7,"moe":1.2079724511494347e-8,"rme":1.4246019841951214,"sem":6.163124750762423e-9,"variance":3.3046172823310533e-15}},{"name":"Function returning empty object","hz":1173884.6964289045,"cycles":6,"stats":{"deviation":3.979477361757976e-8,"mean":8.518724224296626e-7,"moe":8.221685408685591e-9,"rme":0.9651310680108839,"sem":4.194737453411016e-9,"variance":1.5836240072744218e-15}},{"name":"Function returning empty array","hz":1147617.5917175354,"cycles":7,"stats":{"deviation":5.853071033347827e-8,"mean":8.71370400050587e-7,"moe":1.222921358446229e-8,"rme":1.4034460642399982,"sem":6.2393946859501484e-9,"variance":3.42584405214154e-15}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,252,357|98|
|using Array.includes (first item)|593,106,868|99|
|Using raw comparison|594,079,469|95|
|Using raw comparison (first item)|593,445,506|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":592252356.9330512,"cycles":8,"stats":{"deviation":2.606030499346733e-11,"mean":1.6884694307988054e-9,"moe":5.15967714658771e-12,"rme":0.3055830951080172,"sem":2.6324883400957708e-12,"variance":6.791394963525383e-22}},{"name":"using Array.includes (first item)","hz":593106868.4672588,"cycles":8,"stats":{"deviation":7.240106672473385e-12,"mean":1.6860367889251697e-9,"moe":1.4262098744998738e-12,"rme":0.08458948724417023,"sem":7.276580992346295e-13,"variance":5.2419144628793634e-23}},{"name":"Using raw comparison","hz":594079469.2423043,"cycles":7,"stats":{"deviation":7.746454833972606e-12,"mean":1.6832764836586784e-9,"moe":1.557748213152013e-12,"rme":0.09254262316824959,"sem":7.947694965061291e-13,"variance":6.000756249477755e-23}},{"name":"Using raw comparison (first item)","hz":593445506.2876067,"cycles":6,"stats":{"deviation":9.87665347498182e-12,"mean":1.6850746857207834e-9,"moe":1.98611360065008e-12,"rme":0.11786501912824882,"sem":1.013323265637796e-12,"variance":9.754828386487047e-23}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,962,332|95|
|Using Object.getOwnPropertyNames()|69,060,943|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":67962331.50642183,"cycles":7,"stats":{"deviation":4.0650284624481573e-10,"mean":1.4714033168587058e-8,"moe":8.174437158040344e-11,"rme":0.5555538080131506,"sem":4.170631203081808e-11,"variance":1.6524456400513628e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":69060943.16428575,"cycles":7,"stats":{"deviation":2.1047711078235198e-10,"mean":1.4479964422454357e-8,"moe":4.146134129422217e-11,"rme":0.2863359334635331,"sem":2.115374555827662e-11,"variance":4.430061416328647e-20}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,356,570|96|
|Length = 10_000 - Array.at|19,334,462|94|
|Length = 1_000_000 - Array.at|19,328,688|97|
|Length = 100 - Array[length - 1]|589,683,944|93|
|Length = 10_000 - Array[length - 1]|589,105,266|96|
|Length = 1_000_000 - Array[length - 1]|589,415,572|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":19356569.882253516,"cycles":6,"stats":{"deviation":4.853444334062847e-10,"mean":5.166204581095846e-8,"moe":9.708910725989129e-11,"rme":0.18793120894816928,"sem":4.953525880606698e-11,"variance":2.3555921903846747e-19}},{"name":"Length = 10_000 - Array.at","hz":19334461.982911915,"cycles":8,"stats":{"deviation":5.410928180305582e-10,"mean":5.17211185335188e-8,"moe":1.0938654722809312e-10,"rme":0.2114930038823565,"sem":5.580946287147608e-11,"variance":2.927814377242508e-19}},{"name":"Length = 1_000_000 - Array.at","hz":19328688.26504083,"cycles":5,"stats":{"deviation":4.4649851904117037e-10,"mean":5.1736568270319074e-8,"moe":8.885670957307334e-11,"rme":0.17174836395952037,"sem":4.533505590462925e-11,"variance":1.9936092750595836e-19}},{"name":"Length = 100 - Array[length - 1]","hz":589683944.0633514,"cycles":9,"stats":{"deviation":9.149234499831305e-12,"mean":1.6958236866842134e-9,"moe":1.8595135871368843e-12,"rme":0.10965253061022684,"sem":9.487314220086146e-13,"variance":8.37084919329034e-23}},{"name":"Length = 10_000 - Array[length - 1]","hz":589105266.2289438,"cycles":9,"stats":{"deviation":1.1844927863549256e-11,"mean":1.6974894935184135e-9,"moe":2.3694790599712632e-12,"rme":0.13958725924482787,"sem":1.2089178877404404e-12,"variance":1.4030231609268555e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":589415572.3421665,"cycles":7,"stats":{"deviation":9.050145786502405e-12,"mean":1.6965958263136652e-9,"moe":1.8104062074362864e-12,"rme":0.10670816109278698,"sem":9.23676636447085e-13,"variance":8.190513875694724e-23}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,202,090|93|
|Object.create({})|779,147|71|
|Cached Empty.prototype|579,263,004|91|
|Empty.prototype|857,966|75|
|Empty class|612,126|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":39202090.34309239,"cycles":6,"stats":{"deviation":6.752717697444371e-10,"mean":2.5508843820523595e-8,"moe":1.3724394438386108e-10,"rme":0.538024950677847,"sem":7.002242060401076e-11,"variance":4.55991963013784e-19}},{"name":"Object.create({})","hz":779147.32565691,"cycles":3,"stats":{"deviation":1.6844668078706863e-7,"mean":0.000001283454318677005,"moe":3.918224850377869e-8,"rme":3.052874413494363,"sem":1.99909431141728e-8,"variance":2.8374284268180597e-14}},{"name":"Cached Empty.prototype","hz":579263004.1979669,"cycles":8,"stats":{"deviation":1.5420885131019678e-10,"mean":1.726331550181726e-9,"moe":3.1684340901289706e-11,"rme":1.8353566496513596,"sem":1.616548005167842e-11,"variance":2.378036982241038e-20}},{"name":"Empty.prototype","hz":857966.414308959,"cycles":3,"stats":{"deviation":1.459047180989027e-7,"mean":0.0000011655467898535872,"moe":3.3021346282011665e-8,"rme":2.8331206065232024,"sem":1.6847625654087586e-8,"variance":2.128818676352027e-14}},{"name":"Empty class","hz":612126.3635638624,"cycles":3,"stats":{"deviation":1.6566267601185228e-7,"mean":0.0000016336496179937384,"moe":3.774547403214595e-8,"rme":2.31049997602917,"sem":1.925789491436018e-8,"variance":2.7444122223407936e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|706,318,499|95|
|Using optional chain (obj.field?.field2) (undefined)|696,612,267|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,909,667|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|705,549,163|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":706318498.7614833,"cycles":6,"stats":{"deviation":2.933850933038355e-11,"mean":1.4157918867387472e-9,"moe":5.899732389262679e-12,"rme":0.41670901242785147,"sem":3.0100675455421832e-12,"variance":8.607481297290025e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":696612266.7839152,"cycles":6,"stats":{"deviation":1.2856563357226162e-10,"mean":1.4355187924220028e-9,"moe":2.5990643897010077e-11,"rme":1.810540136026972,"sem":1.3260532600515345e-11,"variance":1.6529122135837046e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":708909666.636961,"cycles":10,"stats":{"deviation":9.380422970137804e-12,"mean":1.4106169615995784e-9,"moe":1.8764754042794886e-12,"rme":0.1330251553300229,"sem":9.573854103466778e-13,"variance":8.799233509868895e-23}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":705549162.6995541,"cycles":7,"stats":{"deviation":3.820782700524895e-11,"mean":1.4173356767568481e-9,"moe":7.683279063969593e-12,"rme":0.542093111037076,"sem":3.920040338759997e-12,"variance":1.4598380444630305e-21}}]}-->

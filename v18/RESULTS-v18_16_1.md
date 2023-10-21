## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,391,522|96|
|Using dot notation|595,081,085|94|
|Using define property (writable)|2,960,802|96|
|Using define property initialized (writable)|4,229,116|97|
|Using define property (getter)|1,559,280|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591391522.358185,"samples":7},{"name":"Using dot notation","opsSec":595081084.7213998,"samples":9},{"name":"Using define property (writable)","opsSec":2960801.7061163685,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4229115.713580088,"samples":6},{"name":"Using define property (getter)","opsSec":1559280.2059705523,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.038ms
new Array(length)|100|0.012ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.552ms
new Array(length)|10,000|0.28ms
array.push|1,000,000|39.672ms
new Array(length)|1,000,000|22.463ms
array.push|100,000,000|2,226.259ms
new Array(length)|100,000,000|5,580.812ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.024ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.067ms
array.push|10,000|1.374ms
new Array(length)|10,000|4.887ms
array.push|1,000,000|419.562ms
new Array(length)|1,000,000|5.429ms
array.push|100,000,000|3,308.465ms
new Array(length)|100,000,000|6,437.913ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|360|83|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":359.6537324754509,"samples":3},{"name":"Array.from","opsSec":15.146744451575481,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,271|88|
|new Blob (1024)|412|73|
|text (128)|31,361|63|
|text (1024)|21,020|87|
|arrayBuffer (128)|31,664|87|
|arrayBuffer (1024)|21,369|81|
|slice (0, 64)|66,013|82|
|slice (0, 512)|40,409|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3271.0525121326286,"samples":4},{"name":"new Blob (1024)","opsSec":412.36702349193297,"samples":2},{"name":"text (128)","opsSec":31361.13303942419,"samples":4},{"name":"text (1024)","opsSec":21020.17012780898,"samples":3},{"name":"arrayBuffer (128)","opsSec":31663.705209927833,"samples":3},{"name":"arrayBuffer (1024)","opsSec":21369.331575105818,"samples":3},{"name":"slice (0, 64)","opsSec":66013.08370593889,"samples":3},{"name":"slice (0, 512)","opsSec":40408.955241322255,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,778|59|
|[True conditional] Using constructor name|142,469|93|
|[True conditional] Check if property is valid then instanceof |142,795|92|
|[False conditional] Using instanceof only|709,975,328|94|
|[False conditional] Using constructor name|710,023,130|95|
|[False conditional] Check if property is valid then instanceof |707,952,581|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178778.27646198575,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":142469.4403113874,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":142794.8981362363,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":709975328.2270123,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":710023130.1245688,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":707952581.0012897,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,883|91|
|crypto.verify('RSA-SHA256')|4,859|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4882.503653532196,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":4858.643406800486,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,695,147|95|
|fromUnixToISOString(new Date())|1,439,686|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1695146.5897859924,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1439686.307682611,"samples":10}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,602|85|
|Intl.DateTimeFormat().format(new Date())|8,266|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,302|63|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,639|97|
|Reusing Intl.DateTimeFormat()|360,898|74|
|Date.toLocaleDateString()|464,063|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,409|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7601.741081670525,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8266.301403712936,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6301.656552907621,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10639.264810939765,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":360897.8904655501,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":464062.6386751792,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9409.440879578859,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|672,388|94|
|Using brackets {}|674,532|92|
|Using '' + |662,558|93|
|Using date.toString()|745,427|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":672388.3770604824,"samples":6},{"name":"Using brackets {}","opsSec":674531.9923515095,"samples":3},{"name":"Using '' + ","opsSec":662558.425209728,"samples":4},{"name":"Using date.toString()","opsSec":745426.6879807044,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,995,536|93|
|Using delete property (proto: null)|10,048,187|91|
|Using delete property (cached proto: null)|1,974,970|93|
|Using undefined assignment|597,316,752|92|
|Using undefined assignment (proto: null)|11,916,324|94|
|Using undefined property (cached proto: null)|601,882,763|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1995535.5071161715,"samples":7},{"name":"Using delete property (proto: null)","opsSec":10048187.162919452,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1974970.4867711435,"samples":5},{"name":"Using undefined assignment","opsSec":597316752.4188766,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":11916324.381241327,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":601882763.0746459,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|155,425|53|
|NodeError|113,468|86|
|NodeError Range|121,312|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":155424.91979041038,"samples":4},{"name":"NodeError","opsSec":113467.91508609682,"samples":3},{"name":"NodeError Range","opsSec":121311.88144562428,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,348,630|95|
|Function returning explicitly undefined|1,359,675|93|
|Function returning implicitly undefined|1,378,238|94|
|Function returning string|1,370,178|95|
|Function returning integer|1,379,127|94|
|Function returning float|1,349,901|94|
|Function returning functions|1,349,349|95|
|Function returning arrow functions|1,356,732|97|
|Function returning empty object|1,377,357|94|
|Function returning empty array|1,349,931|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1348630.3805796222,"cycles":6,"stats":{"deviation":2.449766440072456e-8,"mean":7.414930097972538e-7,"moe":4.926278376950945e-9,"rme":0.6643728682348516,"sem":2.5134073351790533e-9,"variance":6.001355610905275e-16}},{"name":"Function returning explicitly undefined","hz":1359675.1978095965,"cycles":6,"stats":{"deviation":3.4095850197544214e-9,"mean":7.354697663169671e-7,"moe":6.929726930541163e-10,"rme":0.09422177835050044,"sem":3.535574964561818e-10,"variance":1.162527000693376e-17}},{"name":"Function returning implicitly undefined","hz":1378237.971459044,"cycles":6,"stats":{"deviation":1.1047198516393975e-8,"mean":7.255641048268103e-7,"moe":2.2332857912436837e-9,"rme":0.30779992786120003,"sem":1.1394315261447366e-9,"variance":1.2204059506061725e-16}},{"name":"Function returning string","hz":1370177.5372684458,"cycles":5,"stats":{"deviation":4.566615629616799e-9,"mean":7.298324288643477e-7,"moe":9.183087605429884e-10,"rme":0.1258246035972831,"sem":4.685248778280553e-10,"variance":2.085397830866044e-17}},{"name":"Function returning integer","hz":1379126.9575395496,"cycles":5,"stats":{"deviation":1.174838068233439e-8,"mean":7.250964057609777e-7,"moe":2.3750357711996295e-9,"rme":0.3275475857182143,"sem":1.2117529444896069e-9,"variance":1.3802444865704784e-16}},{"name":"Function returning float","hz":1349900.936413915,"cycles":6,"stats":{"deviation":5.864119785517504e-9,"mean":7.407951006068299e-7,"moe":1.185482036528305e-9,"rme":0.1600283311211434,"sem":6.048377737389312e-10,"variance":3.4387900858897855e-17}},{"name":"Function returning functions","hz":1349349.2288148494,"cycles":6,"stats":{"deviation":4.123428286784767e-9,"mean":7.410979890493677e-7,"moe":8.291874390888822e-10,"rme":0.11188634314775431,"sem":4.230548158616746e-10,"variance":1.7002660836256763e-17}},{"name":"Function returning arrow functions","hz":1356731.6652769158,"cycles":7,"stats":{"deviation":1.7795563161300374e-8,"mean":7.370654239104052e-7,"moe":3.54145673519501e-9,"rme":0.48048064938472757,"sem":1.8068656812219438e-9,"variance":3.1668206822783095e-16}},{"name":"Function returning empty object","hz":1377357.4810688295,"cycles":5,"stats":{"deviation":1.2069247866375145e-8,"mean":7.260279293825739e-7,"moe":2.439901820445615e-9,"rme":0.33606170254642237,"sem":1.2448478675742934e-9,"variance":1.45666744060001e-16}},{"name":"Function returning empty array","hz":1349931.3194749572,"cycles":5,"stats":{"deviation":6.650633913958749e-9,"mean":7.407784274454351e-7,"moe":1.3235283454881392e-9,"rme":0.17866723657873107,"sem":6.752695640245608e-10,"variance":4.4230931457498267e-17}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|585,041,473|94|
|using Array.includes (first item)|591,495,583|94|
|Using raw comparison|592,777,154|93|
|Using raw comparison (first item)|592,101,230|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":585041473.3482649,"cycles":7,"stats":{"deviation":1.4003586369556463e-10,"mean":1.7092805306209763e-9,"moe":2.8309449150545933e-11,"rme":1.6562201840713178,"sem":1.4443596505380578e-11,"variance":1.9610043120962755e-20}},{"name":"using Array.includes (first item)","hz":591495583.4627279,"cycles":6,"stats":{"deviation":1.3537945280608635e-11,"mean":1.690629698612134e-9,"moe":2.7368115810493067e-12,"rme":0.16188119629603107,"sem":1.3963324393108708e-12,"variance":1.8327596242075363e-22}},{"name":"Using raw comparison","hz":592777153.6320626,"cycles":7,"stats":{"deviation":1.1584755839951157e-11,"mean":1.6869745972374319e-9,"moe":2.3545151114500064e-12,"rme":0.13957027659490134,"sem":1.2012832201275543e-12,"variance":1.3420656787128243e-22}},{"name":"Using raw comparison (first item)","hz":592101229.8973625,"cycles":8,"stats":{"deviation":1.0548075129657405e-11,"mean":1.6889003932205048e-9,"moe":2.1323837239890738e-12,"rme":0.12625870255870483,"sem":1.0879508795862622e-12,"variance":1.1126188894089706e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,618,611|93|
|Using Object.getOwnPropertyNames()|51,549,946|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":50618611.19395194,"cycles":6,"stats":{"deviation":4.6394567781190304e-10,"mean":1.9755579546984545e-8,"moe":9.429349434650211e-11,"rme":0.47730057284446964,"sem":4.810892568699087e-11,"variance":2.1524559196034614e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":51549946.385838084,"cycles":6,"stats":{"deviation":1.1919849471206322e-9,"mean":1.9398662270475655e-8,"moe":2.3844665029112157e-10,"rme":1.229191203839,"sem":1.2165645423016407e-10,"variance":1.4208281141621762e-18}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,563,411|95|
|Length = 10_000 - Array.at|15,631,139|96|
|Length = 1_000_000 - Array.at|15,558,015|95|
|Length = 100 - Array[length - 1]|709,240,018|93|
|Length = 10_000 - Array[length - 1]|708,409,889|94|
|Length = 1_000_000 - Array[length - 1]|708,281,698|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":15563411.477707516,"cycles":6,"stats":{"deviation":7.868671617398159e-10,"mean":6.425326487270255e-8,"moe":1.5823250008670078e-10,"rme":0.2462637507995714,"sem":8.073086739117387e-11,"variance":6.191599302244735e-19}},{"name":"Length = 10_000 - Array.at","hz":15631138.902434135,"cycles":8,"stats":{"deviation":5.431911974724731e-10,"mean":6.397486493094093e-8,"moe":1.0866087010394632e-10,"rme":0.16984931538541376,"sem":5.543921944078894e-11,"variance":2.9505667701157925e-19}},{"name":"Length = 1_000_000 - Array.at","hz":15558014.99875026,"cycles":6,"stats":{"deviation":6.774432164467265e-10,"mean":6.427555186701695e-8,"moe":1.3622824666889065e-10,"rme":0.21194411049280507,"sem":6.950420748412789e-11,"variance":4.589293115096864e-19}},{"name":"Length = 100 - Array[length - 1]","hz":709240017.8557194,"cycles":6,"stats":{"deviation":1.1268716897446176e-11,"mean":1.4099599216402787e-9,"moe":2.2902825565118615e-12,"rme":0.16243600412751152,"sem":1.1685115084244192e-12,"variance":1.26983980514789e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":708409888.9902258,"cycles":7,"stats":{"deviation":8.886742960305808e-12,"mean":1.4116121408545122e-9,"moe":1.796531197862834e-12,"rme":0.12726804664454877,"sem":9.165975499300174e-13,"variance":7.897420044254484e-23}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":708281698.481973,"cycles":7,"stats":{"deviation":8.713338437445196e-12,"mean":1.4118676257529356e-9,"moe":1.7251529948494503e-12,"rme":0.12218942933332312,"sem":8.801800994129848e-13,"variance":7.592226672545989e-23}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,406,822|84|
|Object.create({})|767,640|63|
|Cached Empty.prototype|661,523,887|89|
|Empty.prototype|871,263|68|
|Empty class|614,109|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Object.create(null)","hz":38406821.90711072,"cycles":5,"stats":{"deviation":2.2646552809932723e-9,"mean":2.6037041086569513e-8,"moe":4.843045315795474e-10,"rme":1.8600597893182358,"sem":2.470941487650752e-10,"variance":5.128663541730717e-18}},{"name":"Object.create({})","hz":767640.4903061095,"cycles":4,"stats":{"deviation":2.3410837057851065e-7,"mean":0.0000013026931390776863,"moe":5.780996931633369e-8,"rme":4.437727319057154,"sem":2.9494882304251885e-8,"variance":5.480672917492527e-14}},{"name":"Cached Empty.prototype","hz":661523887.1377531,"cycles":6,"stats":{"deviation":7.482792705667014e-11,"mean":1.511661210491956e-9,"moe":1.5546219032886816e-11,"rme":1.0284195244930208,"sem":7.93174440453409e-12,"variance":5.599218667598347e-21}},{"name":"Empty.prototype","hz":871262.7150294174,"cycles":3,"stats":{"deviation":1.517561929727367e-7,"mean":0.0000011477594332339079,"moe":3.6070157453461515e-8,"rme":3.142658331444146,"sem":1.8403141557888528e-8,"variance":2.3029942105578495e-14}},{"name":"Empty class","hz":614109.4851681658,"cycles":3,"stats":{"deviation":2.0246250724177752e-7,"mean":0.000001628374132221982,"moe":4.676645319018585e-8,"rme":2.8719722491766153,"sem":2.386043530111523e-8,"variance":4.099106683862682e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|708,824,891|98|
|Using optional chain (obj.field?.field2) (undefined)|710,886,034|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,159,421|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,392,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":708824890.6343275,"cycles":9,"stats":{"deviation":1.8385907650719465e-11,"mean":1.4107856724741985e-9,"moe":3.64022399386614e-12,"rme":0.25802813743366215,"sem":1.8572571397276225e-12,"variance":3.380416001407845e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":710886034.129177,"cycles":7,"stats":{"deviation":1.6322288483367044e-11,"mean":1.4066952394485884e-9,"moe":3.2482635114871074e-12,"rme":0.2309145165487584,"sem":1.6572773017791365e-12,"variance":2.6641710133425647e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":709159420.9559479,"cycles":10,"stats":{"deviation":1.4663767188473556e-11,"mean":1.4101201654375522e-9,"moe":2.918204757120848e-12,"rme":0.20694723957907132,"sem":1.4888799781228817e-12,"variance":2.150260681577536e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":708392505.3114617,"cycles":6,"stats":{"deviation":1.395615369861044e-11,"mean":1.4116467812718122e-9,"moe":2.806467468336904e-12,"rme":0.19880805209702945,"sem":1.431871157314747e-12,"variance":1.9477422605923788e-22}}]}-->

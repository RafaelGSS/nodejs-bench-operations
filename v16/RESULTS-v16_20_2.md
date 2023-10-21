## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|713,283,080|96|
|Using dot notation|707,542,860|95|
|Using define property (writable)|3,076,464|98|
|Using define property initialized (writable)|3,734,601|95|
|Using define property (getter)|1,536,237|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":713283079.6197867,"samples":8},{"name":"Using dot notation","opsSec":707542860.3084638,"samples":8},{"name":"Using define property (writable)","opsSec":3076464.3946698313,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3734601.4194992417,"samples":4},{"name":"Using define property (getter)","opsSec":1536236.6467177353,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.131ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.538ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|47.997ms
new Array(length)|1,000,000|7.646ms
array.push|100,000,000|2,067.147ms
new Array(length)|100,000,000|5,679.762ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.084ms
new Array(length)|100|0.013ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.703ms
new Array(length)|10,000|5.089ms
array.push|1,000,000|385.023ms
new Array(length)|1,000,000|7ms
array.push|100,000,000|2,981.636ms
new Array(length)|100,000,000|6,309.026ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|82|
|Array.from|12|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":271.5060177100338,"samples":3},{"name":"Array.from","opsSec":11.737238417929294,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,141|86|
|new Blob (1024)|417|71|
|text (128)|25,880|82|
|text (1024)|17,022|74|
|arrayBuffer (128)|31,655|88|
|arrayBuffer (1024)|20,111|88|
|slice (0, 64)|66,711|80|
|slice (0, 512)|33,436|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3140.6555558755676,"samples":4},{"name":"new Blob (1024)","opsSec":416.7626701926918,"samples":2},{"name":"text (128)","opsSec":25880.48897899092,"samples":4},{"name":"text (1024)","opsSec":17021.63439217799,"samples":3},{"name":"arrayBuffer (128)","opsSec":31654.791214231278,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20110.53845452326,"samples":3},{"name":"slice (0, 64)","opsSec":66711.38966037962,"samples":4},{"name":"slice (0, 512)","opsSec":33436.16728876442,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,972|53|
|[True conditional] Using constructor name|133,493|95|
|[True conditional] Check if property is valid then instanceof |136,027|92|
|[False conditional] Using instanceof only|594,588,611|98|
|[False conditional] Using constructor name|593,934,056|97|
|[False conditional] Check if property is valid then instanceof |594,722,137|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":171972.45633303712,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":133493.46654221704,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":136027.18949308738,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":594588610.5286802,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":593934055.9988905,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":594722137.3280324,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,437|92|
|crypto.verify('RSA-SHA256')|20,641|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":21436.759489327713,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":20641.1127505573,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,640,623|91|
|fromUnixToISOString(new Date())|1,420,635|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1640622.5192633655,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1420634.9212216632,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,713|84|
|Intl.DateTimeFormat().format(new Date())|8,710|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,149|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,992|76|
|Reusing Intl.DateTimeFormat()|422,277|97|
|Date.toLocaleDateString()|423,355|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,175|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8712.859097031851,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8710.313802791254,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10149.132105762517,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8992.277568939322,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":422277.28255833144,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":423354.68888506765,"samples":8},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11174.946354381002,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,828|96|
|Using brackets {}|703,351|96|
|Using '' + |700,587|97|
|Using date.toString()|754,854|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":703827.8908604542,"samples":7},{"name":"Using brackets {}","opsSec":703351.3931913908,"samples":6},{"name":"Using '' + ","opsSec":700586.5505075369,"samples":5},{"name":"Using date.toString()","opsSec":754853.6602382892,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,412,852|96|
|Using delete property (proto: null)|12,473,045|97|
|Using delete property (cached proto: null)|2,413,285|96|
|Using undefined assignment|711,764,486|94|
|Using undefined assignment (proto: null)|15,091,142|94|
|Using undefined property (cached proto: null)|709,315,951|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2412851.7847624985,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12473044.80008667,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2413285.3514511767,"samples":7},{"name":"Using undefined assignment","opsSec":711764485.5116663,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":15091141.759529714,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":709315951.2398508,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|192,864|56|
|NodeError|152,285|95|
|NodeError Range|152,475|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":192863.68781648375,"samples":4},{"name":"NodeError","opsSec":152285.25441070076,"samples":3},{"name":"NodeError Range","opsSec":152475.48123103732,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,001,275|92|
|Function returning explicitly undefined|1,018,067|92|
|Function returning implicitly undefined|1,039,456|84|
|Function returning string|1,041,434|97|
|Function returning integer|1,048,967|94|
|Function returning float|1,057,961|92|
|Function returning functions|1,030,447|90|
|Function returning arrow functions|1,039,952|93|
|Function returning empty object|1,054,509|95|
|Function returning empty array|1,047,643|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1001275.1910208459,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1018067.1322278648,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1039455.9780310849,"samples":6},{"name":"Function returning string","opsSec":1041433.6831286289,"samples":6},{"name":"Function returning integer","opsSec":1048967.0901457386,"samples":6},{"name":"Function returning float","opsSec":1057960.97518787,"samples":6},{"name":"Function returning functions","opsSec":1030447.1654165763,"samples":6},{"name":"Function returning arrow functions","opsSec":1039952.0799739569,"samples":7},{"name":"Function returning empty object","opsSec":1054508.854473309,"samples":6},{"name":"Function returning empty array","opsSec":1047643.3747266913,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,758,921|97|
|using Array.includes (first item)|590,797,569|93|
|Using raw comparison|594,483,680|97|
|Using raw comparison (first item)|592,961,886|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":592758920.7875453,"samples":9},{"name":"using Array.includes (first item)","opsSec":590797569.381624,"samples":6},{"name":"Using raw comparison","opsSec":594483679.5673215,"samples":8},{"name":"Using raw comparison (first item)","opsSec":592961885.5486453,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,216,023|93|
|Using Object.getOwnPropertyNames()|49,876,395|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":54216022.916601405,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":49876394.68310118,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,643,133|97|
|Length = 10_000 - Array.at|15,628,286|94|
|Length = 1_000_000 - Array.at|15,644,300|94|
|Length = 100 - Array[length - 1]|710,612,790|99|
|Length = 10_000 - Array[length - 1]|709,471,294|95|
|Length = 1_000_000 - Array[length - 1]|709,301,525|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":15643132.711286897,"cycles":5,"stats":{"deviation":1.333202206794082e-9,"mean":6.39258145063537e-8,"moe":2.653177026111457e-10,"rme":0.41504000325999024,"sem":1.3536617480160496e-10,"variance":1.7774281242006102e-18}},{"name":"Length = 10_000 - Array.at","hz":15628286.123771956,"cycles":5,"stats":{"deviation":8.057810349125894e-10,"mean":6.398654286722552e-8,"moe":1.6289553713128365e-10,"rme":0.25457780625732196,"sem":8.310996792412432e-11,"variance":6.4928307622480355e-19}},{"name":"Length = 1_000_000 - Array.at","hz":15644300.446870508,"cycles":6,"stats":{"deviation":4.2485676453251095e-10,"mean":6.392104289968686e-8,"moe":8.588843353689782e-11,"rme":0.13436644591622984,"sem":4.3820629355560114e-11,"variance":1.8050327036903347e-19}},{"name":"Length = 100 - Array[length - 1]","hz":710612790.3921739,"cycles":6,"stats":{"deviation":8.562936760442824e-12,"mean":1.4072361397380966e-9,"moe":1.6867907497679772e-12,"rme":0.11986550815003295,"sem":8.606075253918251e-13,"variance":7.332388596334305e-23}},{"name":"Length = 10_000 - Array[length - 1]","hz":709471293.9606862,"cycles":6,"stats":{"deviation":9.311874083627773e-12,"mean":1.4095002976334837e-9,"moe":1.872541120520396e-12,"rme":0.13285141717701987,"sem":9.553781227144877e-13,"variance":8.671099894933857e-23}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":709301524.6814475,"cycles":8,"stats":{"deviation":9.888193375309008e-12,"mean":1.4098376574745236e-9,"moe":1.9478496202891113e-12,"rme":0.13816127055212454,"sem":9.93800826678118e-13,"variance":9.777636822750494e-23}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,657,533|89|
|Object.create({})|1,459,287|82|
|Cached Empty.prototype|592,641,762|95|
|Empty.prototype|1,496,194|77|
|Empty class|910,132|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48657533.361721404,"cycles":7,"stats":{"deviation":1.92081626929498e-9,"mean":2.055180217554337e-8,"moe":3.9906798997354324e-10,"rme":1.9417664035732782,"sem":2.0360611733344044e-10,"variance":3.689535140388285e-18}},{"name":"Object.create({})","hz":1459287.0107181172,"cycles":3,"stats":{"deviation":7.882183281975854e-8,"mean":6.852661557700692e-7,"moe":1.7060653961152626e-8,"rme":2.4896390719866623,"sem":8.70441528630236e-9,"variance":6.212881329065964e-15}},{"name":"Cached Empty.prototype","hz":592641761.6810778,"cycles":7,"stats":{"deviation":2.2207424541729294e-11,"mean":1.687359994954484e-9,"moe":4.4657300197342504e-12,"rme":0.26465781060873805,"sem":2.278433683537883e-12,"variance":4.931697047766005e-22}},{"name":"Empty.prototype","hz":1496193.858803984,"cycles":3,"stats":{"deviation":7.230741517705401e-8,"mean":6.683625882540196e-7,"moe":1.615078164313156e-8,"rme":2.416470030933756,"sem":8.240194715883448e-9,"variance":5.228362289586861e-15}},{"name":"Empty class","hz":910132.2409731378,"cycles":4,"stats":{"deviation":5.603803537680471e-8,"mean":0.0000010987414300703964,"moe":1.191322953615733e-8,"rme":1.0842614294970245,"sem":6.078178334774148e-9,"variance":3.140261408892016e-15}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|772,208,377|84|
|Using optional chain (obj.field?.field2) (undefined)|820,763,446|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|828,166,140|84|
|Using and operator (obj.field && obj.field.field2) (undefined)|822,965,402|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":772208377.3193958,"cycles":5,"stats":{"deviation":1.8108625387647783e-10,"mean":1.2949872461515482e-9,"moe":3.8725935066231e-11,"rme":2.9904491477670527,"sem":1.9758130135832144e-11,"variance":3.2792231343016185e-20}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":820763445.9458706,"cycles":9,"stats":{"deviation":8.180557010841553e-11,"mean":1.2183778467955187e-9,"moe":1.749441014023878e-11,"rme":1.4358772351492763,"sem":8.9257194593055e-12,"variance":6.692151300762888e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":828166140.3354691,"cycles":8,"stats":{"deviation":6.879859371178713e-11,"mean":1.2074871831815358e-9,"moe":1.4712822291569612e-11,"rme":1.2184661250650857,"sem":7.5065419854947e-12,"variance":4.7332464967195554e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":822965402.3456701,"cycles":8,"stats":{"deviation":7.787424754409533e-11,"mean":1.2151179103638309e-9,"moe":1.645889630466927e-11,"rme":1.3545102219537808,"sem":8.397396073810852e-12,"variance":6.064398430559038e-21}}]}-->

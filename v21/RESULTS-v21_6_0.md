## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|821,351,323|97|
|Using dot notation|820,319,174|94|
|Using define property (writable)|4,201,787|93|
|Using define property initialized (writable)|6,190,788|95|
|Using define property (getter)|2,410,613|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":821351323.368965,"samples":7},{"name":"Using dot notation","opsSec":820319174.2976774,"samples":6},{"name":"Using define property (writable)","opsSec":4201786.648696174,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6190788.4554243125,"samples":4},{"name":"Using define property (getter)","opsSec":2410612.572721549,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.005ms
array.push|100|0.084ms
new Array(length)|100|0.015ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.281ms
new Array(length)|10,000|0.181ms
array.push|1,000,000|23.229ms
new Array(length)|1,000,000|5.658ms
array.push|100,000,000|978.339ms
new Array(length)|100,000,000|3,552.555ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.353ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|18.081ms
new Array(length)|1,000,000|6.181ms
array.push|100,000,000|1,131.526ms
new Array(length)|100,000,000|3,530.976ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|621|87|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":621.375556640941,"samples":5},{"name":"Array.from","opsSec":22.334616281993455,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,665,091|95|
|[async] async function|17,336,653|89|
|[async] function|186,335|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":822665091.0789245,"samples":7},{"name":"[async] async function","opsSec":17336653.28136399,"samples":10},{"name":"[async] function","opsSec":186335.1928222448,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,573|93|
|new Blob (1024)|699|77|
|text (128)|5,874|88|
|text (1024)|744|89|
|arrayBuffer (128)|5,845|87|
|arrayBuffer (1024)|749|89|
|slice (0, 64)|197,053|58|
|slice (0, 512)|30,079|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5573.04332025319,"samples":7},{"name":"new Blob (1024)","opsSec":699.3468510897019,"samples":2},{"name":"text (128)","opsSec":5873.502290047546,"samples":6},{"name":"text (1024)","opsSec":744.4357347965031,"samples":2},{"name":"arrayBuffer (128)","opsSec":5844.631103883418,"samples":6},{"name":"arrayBuffer (1024)","opsSec":748.5117203317021,"samples":4},{"name":"slice (0, 64)","opsSec":197053.04080328834,"samples":3},{"name":"slice (0, 512)","opsSec":30079.48107779887,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,709|54|
|[True conditional] Using constructor name|202,842|93|
|[True conditional] Check if property is valid then instanceof |205,905|96|
|[False conditional] Using instanceof only|823,419,857|97|
|[False conditional] Using constructor name|822,744,771|97|
|[False conditional] Check if property is valid then instanceof |824,372,608|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246708.61456165017,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202842.47968187582,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":205904.6384825214,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":823419856.7551914,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":822744770.7873706,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":824372608.2806928,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,900|96|
|crypto.verify('RSA-SHA256')|6,823|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6900.054993143359,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6823.142001641683,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,484,098|92|
|fromUnixToISOString(new Date())|2,214,258|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1484097.934859333,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2214257.53786107,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,139|79|
|Intl.DateTimeFormat().format(new Date())|18,138|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,497|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,734|78|
|Reusing Intl.DateTimeFormat()|688,391|87|
|Date.toLocaleDateString()|791,739|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|18,847|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16139.479316031033,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18137.86851861317,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15496.830035767467,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16733.94856405001,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":688391.2531903215,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":791738.7100514396,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":18847.3572947874,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,093,349|94|
|Using brackets {}|1,105,888|96|
|Using '' + |1,108,159|96|
|Using date.toString()|1,222,243|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1093348.6023001932,"samples":4},{"name":"Using brackets {}","opsSec":1105888.3262880368,"samples":3},{"name":"Using '' + ","opsSec":1108158.6951908208,"samples":4},{"name":"Using date.toString()","opsSec":1222242.9248464368,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,836,680|95|
|Using delete property (proto: null)|21,097,195|93|
|Using delete property (cached proto: null)|3,942,150|97|
|Using undefined assignment|812,119,262|96|
|Using undefined assignment (proto: null)|23,081,452|98|
|Using undefined property (cached proto: null)|785,710,602|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3836679.8041025833,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21097194.886954863,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3942150.0063574417,"samples":4},{"name":"Using undefined assignment","opsSec":812119262.163338,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23081452.125398125,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":785710602.4352272,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|238,043|54|
|NodeError|200,402|96|
|NodeError Range|197,878|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":238042.56181988845,"samples":3},{"name":"NodeError","opsSec":200401.59978926115,"samples":3},{"name":"NodeError Range","opsSec":197877.5838656288,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,824,007|96|
|Function returning explicitly undefined|1,792,730|93|
|Function returning implicitly undefined|1,811,328|95|
|Function returning string|1,836,120|97|
|Function returning integer|1,861,598|98|
|Function returning float|1,831,474|94|
|Function returning functions|1,792,782|96|
|Function returning arrow functions|1,825,915|97|
|Function returning empty object|1,843,093|95|
|Function returning empty array|1,812,493|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1824007.0087408063,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1792729.753048454,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1811328.4135254694,"samples":5},{"name":"Function returning string","opsSec":1836120.1949380813,"samples":6},{"name":"Function returning integer","opsSec":1861598.3044414092,"samples":6},{"name":"Function returning float","opsSec":1831474.4587916746,"samples":6},{"name":"Function returning functions","opsSec":1792782.0986824466,"samples":5},{"name":"Function returning arrow functions","opsSec":1825914.9617677429,"samples":6},{"name":"Function returning empty object","opsSec":1843093.4288592546,"samples":5},{"name":"Function returning empty array","opsSec":1812492.9443549297,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|820,862,321|97|
|using Array.includes (first item)|820,789,900|95|
|Using raw comparison|822,481,623|96|
|Using raw comparison (first item)|822,668,168|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":820862320.867945,"samples":6},{"name":"using Array.includes (first item)","opsSec":820789900.3641832,"samples":6},{"name":"Using raw comparison","opsSec":822481622.5259845,"samples":6},{"name":"Using raw comparison (first item)","opsSec":822668167.8367199,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,035,857|90|
|Using Object.getOwnPropertyNames()|90,439,786|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":90035857.38520935,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":90439785.87219489,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|869,557,077|97|
|Length = 10_000 - Array.at|870,627,431|98|
|Length = 1_000_000 - Array.at|873,600,630|96|
|Length = 100 - Array[length - 1]|822,624,418|96|
|Length = 10_000 - Array[length - 1]|821,936,212|97|
|Length = 1_000_000 - Array[length - 1]|822,817,786|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":869557077.2826685,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":870627431.1149796,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":873600630.2064217,"samples":9},{"name":"Length = 100 - Array[length - 1]","opsSec":822624417.601331,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":821936212.286512,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822817785.8072021,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|83,016,463|93|
|Object.create({})|2,530,944|82|
|Cached Empty.prototype|820,453,313|98|
|Empty.prototype|2,455,823|90|
|Empty class|1,489,720|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":83016463.25479427,"samples":5},{"name":"Object.create({})","opsSec":2530944.474153151,"samples":3},{"name":"Cached Empty.prototype","opsSec":820453313.1448027,"samples":6},{"name":"Empty.prototype","opsSec":2455823.1255187425,"samples":4},{"name":"Empty class","opsSec":1489719.5999415587,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,223,654|95|
|Using optional chain (obj.field?.field2) (undefined)|822,043,147|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,378,090|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,108,416|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821223653.9487972,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822043146.8237574,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822378090.1189699,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821108416.3986317,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|819,547,702|96|
|Using parseInt(x, 10) - big number (10 len)|820,731,790|97|
|Using + - small number (2 len)|821,306,892|95|
|Using + - big number (10 len)|820,728,941|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":819547701.739043,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":820731789.9722685,"samples":6},{"name":"Using + - small number (2 len)","opsSec":821306892.1167004,"samples":6},{"name":"Using + - big number (10 len)","opsSec":820728941.1855074,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,292,313|82|
|Using ? operator to avoid rejection|1,441,782|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:02:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1292313.3465331867,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1441781.9146156907,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|818,019,343|93|
|Raw usage underscore usage|818,852,715|96|
|Manipulating private properties using #|810,251,792|99|
|Manipulating private properties using underscore(_)|811,660,775|94|
|Manipulating private properties using Symbol|811,191,135|96|
|Manipulating private properties using PrivateSymbol|50,059,382|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:04:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":818019343.3339576,"samples":6},{"name":"Raw usage underscore usage","opsSec":818852714.9617779,"samples":8},{"name":"Manipulating private properties using #","opsSec":810251791.973542,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":811660775.4066021,"samples":10},{"name":"Manipulating private properties using Symbol","opsSec":811191135.2462817,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50059382.44881373,"samples":6}]}-->

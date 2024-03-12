## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|817,581,071|98|
|Using dot notation|820,104,302|96|
|Using define property (writable)|4,099,457|96|
|Using define property initialized (writable)|6,172,751|93|
|Using define property (getter)|2,314,756|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":817581070.7789321,"samples":6},{"name":"Using dot notation","opsSec":820104301.6098821,"samples":6},{"name":"Using define property (writable)","opsSec":4099457.1038036263,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6172750.552243146,"samples":5},{"name":"Using define property (getter)","opsSec":2314756.268737747,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.005ms
array.push|100|0.068ms
new Array(length)|100|0.012ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.28ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|22.263ms
new Array(length)|1,000,000|5.239ms
array.push|100,000,000|970.601ms
new Array(length)|100,000,000|3,457.452ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.011ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.336ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|15.829ms
new Array(length)|1,000,000|6.218ms
array.push|100,000,000|1,123.989ms
new Array(length)|100,000,000|3,485.716ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|566|88|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Array","opsSec":565.646952145888,"samples":3},{"name":"Array.from","opsSec":22.231299569098155,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|819,180,676|95|
|[async] async function|15,939,105|81|
|[async] function|180,144|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"function","opsSec":819180676.4569311,"samples":6},{"name":"[async] async function","opsSec":15939105.467807721,"samples":5},{"name":"[async] function","opsSec":180143.5163911745,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,563|94|
|new Blob (1024)|698|75|
|text (128)|5,989|87|
|text (1024)|765|89|
|arrayBuffer (128)|5,996|89|
|arrayBuffer (1024)|759|86|
|slice (0, 64)|176,730|54|
|slice (0, 512)|30,780|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5562.630066724412,"samples":4},{"name":"new Blob (1024)","opsSec":697.8456788429077,"samples":2},{"name":"text (128)","opsSec":5989.035713019709,"samples":6},{"name":"text (1024)","opsSec":765.4663738150861,"samples":2},{"name":"arrayBuffer (128)","opsSec":5996.460641140548,"samples":4},{"name":"arrayBuffer (1024)","opsSec":759.2857876648316,"samples":2},{"name":"slice (0, 64)","opsSec":176729.80182241416,"samples":3},{"name":"slice (0, 512)","opsSec":30779.96131149406,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,453|52|
|[True conditional] Using constructor name|202,278|92|
|[True conditional] Check if property is valid then instanceof |206,759|97|
|[False conditional] Using instanceof only|820,157,095|96|
|[False conditional] Using constructor name|819,483,616|96|
|[False conditional] Check if property is valid then instanceof |821,460,422|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246452.53425110647,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202277.96566640763,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":206759.3885698573,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":820157095.4423698,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":819483615.9163088,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":821460421.8007162,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,856|89|
|crypto.verify('RSA-SHA256')|6,777|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6855.62806542933,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6776.571153403153,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,484,413|92|
|fromUnixToISOString(new Date())|2,223,902|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1484412.9358801043,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2223901.9911191245,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,207|82|
|Intl.DateTimeFormat().format(new Date())|15,727|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,867|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,829|95|
|Reusing Intl.DateTimeFormat()|679,251|83|
|Date.toLocaleDateString()|786,507|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,500|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16206.880457573357,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15727.09278987326,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15867.276108055521,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19829.076283191433,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":679250.9822273682,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":786506.6740915033,"samples":8},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19499.627406290037,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,095,380|95|
|Using brackets {}|1,122,078|97|
|Using '' + |1,093,202|97|
|Using date.toString()|1,221,604|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using String()","opsSec":1095379.6937391257,"samples":4},{"name":"Using brackets {}","opsSec":1122078.3121085716,"samples":4},{"name":"Using '' + ","opsSec":1093201.757754235,"samples":6},{"name":"Using date.toString()","opsSec":1221603.5380818543,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,084,081|93|
|Using delete property (proto: null)|21,326,549|93|
|Using delete property (cached proto: null)|4,119,154|96|
|Using undefined assignment|819,962,524|98|
|Using undefined assignment (proto: null)|23,933,291|96|
|Using undefined property (cached proto: null)|819,293,142|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using delete property","opsSec":4084080.5124138165,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21326549.35827989,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4119153.5536976727,"samples":5},{"name":"Using undefined assignment","opsSec":819962524.205459,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23933290.51552728,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":819293141.5049844,"samples":8}]}-->

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

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,182,863|96|
|Adding property in the object creation - small object|5,195,820|95|
|Adding property after the function creation - small class|273,508|88|
|Adding property in the function creation - small class|278,409|91|
|Adding property after the class creation - small class|279,243|89|
|Adding property in the class creation - small class|276,642|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5182862.676573199,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5195820.437339371,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":273507.831695917,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":278408.7994117107,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":279242.7757530398,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":276641.8869444038,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|823,613,713|94|
|Getter|92,512,623|98|
|Method|823,278,185|93|
|DefineProperty (getter)|823,793,742|100|
|DefineProperty (getter & enumerable=false)|91,940,560|97|
|DefineProperty (getter & configurable=false)|823,845,217|98|
|DefineProperty (getter & enumerable=false & configurable=false)|92,658,665|96|
|DefineProperty (writable)|824,516,351|99|
|DefineProperty (writable & enumerable=false)|824,548,239|97|
|DefineProperty (writable & enumerable=false & configurable=false)|823,941,252|95|
|DefineProperties (getter)|92,594,018|99|
|DefineProperties (getter & enumerable=false)|73,705,927|79|
|DefineProperties (getter & enumerable=false & configurable=false)|57,520,211|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":823613712.550716,"samples":6},{"name":"Getter","opsSec":92512623.11552542,"samples":6},{"name":"Method","opsSec":823278185.181202,"samples":7},{"name":"DefineProperty (getter)","opsSec":823793741.9021515,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91940560.49344286,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":823845216.9665765,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92658664.59539141,"samples":6},{"name":"DefineProperty (writable)","opsSec":824516351.2366297,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":824548238.5259992,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823941251.5587251,"samples":6},{"name":"DefineProperties (getter)","opsSec":92594017.61917901,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":73705926.6710758,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":57520210.59446078,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|777,327,633|96|
|Setter|12,172,974|96|
|Method|781,836,049|99|
|DefineProperty (setter)|782,623,225|96|
|DefineProperty (setter & enumerable=false)|12,044,756|95|
|DefineProperty (setter & configurable=false)|12,301,427|94|
|DefineProperty (setter & enumerable=false & configurable=false)|12,267,897|93|
|DefineProperty (writable)|758,494,915|94|
|DefineProperty (writable & enumerable=false)|783,400,776|96|
|DefineProperty (writable & enumerable=false & configurable=false)|786,541,885|99|
|DefineProperties (setter)|737,358,272|96|
|DefineProperties (setter & enumerable=false)|11,141,012|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,883,279|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Setter (class)","opsSec":777327632.8753906,"samples":6},{"name":"Setter","opsSec":12172974.42615378,"samples":6},{"name":"Method","opsSec":781836049.3566316,"samples":7},{"name":"DefineProperty (setter)","opsSec":782623224.569596,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12044755.82407037,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12301426.75176534,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12267896.939266022,"samples":5},{"name":"DefineProperty (writable)","opsSec":758494915.2766654,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":783400775.701278,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":786541885.3913295,"samples":6},{"name":"DefineProperties (setter)","opsSec":737358271.8413352,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11141012.146952735,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11883278.77083871,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,264,457|90|
|Using replaceAll()|3,057,063|96|
|Using replaceAll(//g)|3,021,031|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3264457.318688972,"samples":4},{"name":"Using replaceAll()","opsSec":3057062.672376462,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3021031.450870527,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,090,742|90|
|{ ...object, __proto__: null }|2,488,950|98|
|{ ...object, newProp: true }|27,366,741|95|
|structuredClone|272,898|96|
|JSON.parse + JSON.stringify|235,271|97|
|loop + object.keys starting with {}|1,486,921|93|
|loop + object.keys starting with { __proto__: null }|798,347|96|
|loop + object.keys starting with { randomProp: true }|624,729|96|
|object.keys + reduce(FN, {})|611,444|88|
|object.keys + reduce(FN, { __proto__: null })|813,587|92|
|object.keys + reduce(FN, { newProp: true })|642,497|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30090742.32917829,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":2488949.8446187535,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":27366740.926504936,"samples":6},{"name":"structuredClone","opsSec":272898.4850593826,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":235270.83781871662,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1486921.3781500144,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":798346.7478626351,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":624729.2759721676,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":611443.7456211008,"samples":8},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":813586.8014343833,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":642497.0221957157,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|314,168|92|
|Sort using first char|1,389,784|94|
|Sort using localeCompare|1,286,135|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":314168.0888231405,"samples":4},{"name":"Sort using first char","opsSec":1389784.4018337163,"samples":4},{"name":"Sort using localeCompare","opsSec":1286135.3096053605,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,025|94|
|{...smallObject} - Total keys: 2|114,073,626|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,181|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,230|98|
|{ ...bigObject, ...anotherBigObject }|1,272|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,895,850|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,793,280|93|
|{ ...smallObject, ...anotherSmallObject }|24,729,765|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2025.15749006035,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":114073625.80552158,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2180.526648678572,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6230.04873696318,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1271.6081720689947,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14895849.978942387,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36793280.436171964,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24729765.03653396,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,983|88|
|streams.web.Readable reading 1e3 * "some data"|1,970|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1983.490794197828,"samples":9},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1969.7917155706848,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,712|92|
|streams.web.WritableStream writing 1e3 * "some data"|1,561|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5712.371558332818,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1561.0334670545506,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|821,661,948|97|
|Using backtick (`)|820,804,837|99|
|Using array.join|10,981,494|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":821661947.8254424,"samples":6},{"name":"Using backtick (`)","opsSec":820804836.508192,"samples":7},{"name":"Using array.join","opsSec":10981494.211287633,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|821,671,545|97|
|Using indexof|824,222,070|96|
|Using RegExp.test|16,888,863|94|
|Using RegExp.text with cached regex pattern|17,679,079|97|
|Using new RegExp.test|4,564,882|92|
|Using new RegExp.test with cached regex pattern|5,113,626|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":821671545.0958134,"samples":6},{"name":"Using indexof","opsSec":824222070.0004787,"samples":8},{"name":"Using RegExp.test","opsSec":16888863.222291186,"samples":4},{"name":"Using RegExp.text with cached regex pattern","opsSec":17679078.95115059,"samples":5},{"name":"Using new RegExp.test","opsSec":4564881.878687553,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5113625.889352267,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|817,336,582|96|
|Using this|820,685,030|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using super","opsSec":817336582.2995492,"samples":7},{"name":"Using this","opsSec":820685030.380763,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,248,660|94|
|Date.now()|21,872,249|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":12248659.82189344,"samples":5},{"name":"Date.now()","opsSec":21872248.707424782,"samples":6}]}-->

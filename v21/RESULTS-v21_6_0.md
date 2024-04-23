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
|Error|238,733|53|
|NodeError|198,560|95|
|NodeError Range|199,489|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":238732.6083074235,"samples":3},{"name":"NodeError","opsSec":198559.50042087235,"samples":3},{"name":"NodeError Range","opsSec":199489.39346000997,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,818,106|95|
|Function returning explicitly undefined|1,798,279|94|
|Function returning implicitly undefined|1,830,442|95|
|Function returning string|1,824,834|97|
|Function returning integer|1,830,620|95|
|Function returning float|1,836,272|93|
|Function returning functions|1,776,136|95|
|Function returning arrow functions|1,823,750|96|
|Function returning empty object|1,852,128|90|
|Function returning empty array|1,776,879|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1818106.3248672395,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1798278.7735379592,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1830441.9404392887,"samples":4},{"name":"Function returning string","opsSec":1824834.0268365622,"samples":9},{"name":"Function returning integer","opsSec":1830619.934200613,"samples":5},{"name":"Function returning float","opsSec":1836271.7538500582,"samples":5},{"name":"Function returning functions","opsSec":1776135.9585136746,"samples":5},{"name":"Function returning arrow functions","opsSec":1823750.0832966578,"samples":5},{"name":"Function returning empty object","opsSec":1852127.5704021032,"samples":5},{"name":"Function returning empty array","opsSec":1776879.1613653614,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|824,325,604|94|
|using Array.includes (first item)|823,688,922|97|
|Using raw comparison|825,201,831|95|
|Using raw comparison (first item)|823,469,612|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":824325604.0161159,"samples":6},{"name":"using Array.includes (first item)","opsSec":823688921.7341486,"samples":7},{"name":"Using raw comparison","opsSec":825201831.0708421,"samples":8},{"name":"Using raw comparison (first item)","opsSec":823469611.6598248,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,750,785|90|
|Using Object.getOwnPropertyNames()|88,529,295|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using Object.keys()","opsSec":91750784.8889546,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":88529295.31470245,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|873,075,836|97|
|Length = 10_000 - Array.at|868,925,575|97|
|Length = 1_000_000 - Array.at|871,189,994|99|
|Length = 100 - Array[length - 1]|823,011,881|99|
|Length = 10_000 - Array[length - 1]|822,449,887|97|
|Length = 1_000_000 - Array[length - 1]|822,523,516|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":873075836.1404177,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":868925574.6931117,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":871189993.7957231,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":823011881.1318436,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":822449886.8308239,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822523516.1095618,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|83,521,175|87|
|Object.create({})|2,595,557|81|
|Cached Empty.prototype|820,136,952|93|
|Empty.prototype|2,496,303|89|
|Empty class|1,527,351|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Object.create(null)","opsSec":83521175.42069623,"samples":7},{"name":"Object.create({})","opsSec":2595556.762480156,"samples":3},{"name":"Cached Empty.prototype","opsSec":820136952.3836398,"samples":6},{"name":"Empty.prototype","opsSec":2496302.675067764,"samples":3},{"name":"Empty class","opsSec":1527351.434351819,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,312,754|98|
|Using optional chain (obj.field?.field2) (undefined)|823,725,801|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|823,028,586|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,853,155|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821312754.1882082,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":823725800.5543889,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":823028586.2472985,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821853155.1104124,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|819,072,970|99|
|Using parseInt(x, 10) - big number (10 len)|819,998,348|97|
|Using + - small number (2 len)|820,723,925|99|
|Using + - big number (10 len)|819,713,885|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":819072970.3212365,"samples":9},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":819998347.638094,"samples":6},{"name":"Using + - small number (2 len)","opsSec":820723925.3725563,"samples":6},{"name":"Using + - big number (10 len)","opsSec":819713884.559093,"samples":10}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,308,652|82|
|Using ? operator to avoid rejection|1,373,106|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1308652.0229933206,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1373105.7655222977,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|819,627,318|98|
|Raw usage underscore usage|819,589,331|96|
|Manipulating private properties using #|811,170,403|96|
|Manipulating private properties using underscore(_)|812,154,242|99|
|Manipulating private properties using Symbol|811,664,592|94|
|Manipulating private properties using PrivateSymbol|49,968,287|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":819627317.7095484,"samples":7},{"name":"Raw usage underscore usage","opsSec":819589330.5228049,"samples":7},{"name":"Manipulating private properties using #","opsSec":811170402.8458471,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":812154241.6763865,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":811664591.7061346,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49968287.2506075,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,143,410|96|
|Adding property in the object creation - small object|5,137,635|96|
|Adding property after the function creation - small class|264,966|88|
|Adding property in the function creation - small class|269,002|90|
|Adding property after the class creation - small class|270,255|87|
|Adding property in the class creation - small class|270,516|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5143410.065012102,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5137635.206526525,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":264966.3148418472,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":269001.5831652251,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":270255.358845122,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":270515.6286423038,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|818,201,430|98|
|Getter|92,034,617|95|
|Method|818,612,510|98|
|DefineProperty (getter)|818,280,148|99|
|DefineProperty (getter & enumerable=false)|89,056,328|98|
|DefineProperty (getter & configurable=false)|818,366,697|99|
|DefineProperty (getter & enumerable=false & configurable=false)|83,724,939|92|
|DefineProperty (writable)|819,345,111|95|
|DefineProperty (writable & enumerable=false)|819,371,572|95|
|DefineProperty (writable & enumerable=false & configurable=false)|819,666,660|98|
|DefineProperties (getter)|92,074,965|98|
|DefineProperties (getter & enumerable=false)|74,788,926|79|
|DefineProperties (getter & enumerable=false & configurable=false)|56,664,095|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Getter (class)","opsSec":818201429.6566632,"samples":6},{"name":"Getter","opsSec":92034616.83355825,"samples":7},{"name":"Method","opsSec":818612510.0357095,"samples":7},{"name":"DefineProperty (getter)","opsSec":818280148.0938064,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":89056327.95297518,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":818366697.1447096,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":83724938.91282296,"samples":6},{"name":"DefineProperty (writable)","opsSec":819345111.2637435,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":819371572.2369227,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":819666660.0864315,"samples":6},{"name":"DefineProperties (getter)","opsSec":92074965.21903564,"samples":8},{"name":"DefineProperties (getter & enumerable=false)","opsSec":74788925.963557,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56664095.16228401,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|710,488,926|85|
|Setter|11,226,168|94|
|Method|737,175,039|95|
|DefineProperty (setter)|742,428,564|94|
|DefineProperty (setter & enumerable=false)|11,266,591|95|
|DefineProperty (setter & configurable=false)|11,064,574|97|
|DefineProperty (setter & enumerable=false & configurable=false)|11,237,183|95|
|DefineProperty (writable)|741,847,725|95|
|DefineProperty (writable & enumerable=false)|745,073,826|91|
|DefineProperty (writable & enumerable=false & configurable=false)|745,271,514|97|
|DefineProperties (setter)|743,624,497|93|
|DefineProperties (setter & enumerable=false)|11,289,678|90|
|DefineProperties (setter & enumerable=false & configurable=false)|10,884,756|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:07:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.60647964477539},"benchmarks":[{"name":"Setter (class)","opsSec":710488925.6919887,"samples":5},{"name":"Setter","opsSec":11226167.741417218,"samples":6},{"name":"Method","opsSec":737175038.7392316,"samples":6},{"name":"DefineProperty (setter)","opsSec":742428563.5011148,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11266591.173853615,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":11064573.587442318,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11237183.427304583,"samples":7},{"name":"DefineProperty (writable)","opsSec":741847724.8043569,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":745073826.3973267,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":745271514.3914068,"samples":6},{"name":"DefineProperties (setter)","opsSec":743624496.9755663,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11289678.139777916,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10884755.665486634,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,241,430|93|
|Using replaceAll()|3,033,948|97|
|Using replaceAll(//g)|3,024,460|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3241429.762633252,"samples":5},{"name":"Using replaceAll()","opsSec":3033947.9433665695,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3024459.501628955,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,719,404|95|
|{ ...object, __proto__: null }|2,494,632|92|
|{ ...object, newProp: true }|28,206,092|97|
|structuredClone|284,421|97|
|JSON.parse + JSON.stringify|232,992|98|
|loop + object.keys starting with {}|1,486,275|95|
|loop + object.keys starting with { __proto__: null }|801,470|92|
|loop + object.keys starting with { randomProp: true }|632,529|98|
|object.keys + reduce(FN, {})|617,730|99|
|object.keys + reduce(FN, { __proto__: null })|808,415|93|
|object.keys + reduce(FN, { newProp: true })|646,408|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30719404.112520285,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2494632.385833377,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":28206091.915051915,"samples":6},{"name":"structuredClone","opsSec":284420.82279447344,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":232992.22012263958,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1486274.5237173974,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":801469.5862333274,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":632529.3771593951,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":617730.2971571848,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":808414.6974505424,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":646408.1284718547,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|308,458|92|
|Sort using first char|1,399,026|96|
|Sort using localeCompare|1,286,736|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Sort using default","opsSec":308457.74214387964,"samples":5},{"name":"Sort using first char","opsSec":1399026.4641861492,"samples":6},{"name":"Sort using localeCompare","opsSec":1286736.4246150528,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,957|95|
|{...smallObject} - Total keys: 2|112,368,576|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,169|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,195|99|
|{ ...bigObject, ...anotherBigObject }|1,235|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,673,127|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,519,845|96|
|{ ...smallObject, ...anotherSmallObject }|24,385,893|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1957.4893655310743,"samples":7},{"name":"{...smallObject} - Total keys: 2","opsSec":112368576.01528081,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1169.378511929641,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6195.1268332622985,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1234.5635669647193,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14673126.590860235,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36519845.47170966,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24385893.29396752,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,042|86|
|streams.web.Readable reading 1e3 * "some data"|2,046|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2042.155959910988,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2045.5930942204645,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,425|97|
|streams.web.WritableStream writing 1e3 * "some data"|1,361|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5424.978423661346,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1361.0392413927786,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|816,855,351|96|
|Using backtick (`)|820,003,341|98|
|Using array.join|10,785,113|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using + sign","opsSec":816855351.204252,"samples":6},{"name":"Using backtick (`)","opsSec":820003340.5568525,"samples":6},{"name":"Using array.join","opsSec":10785113.251633074,"samples":7}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|276,696,945|95|
|(short string) (true) String#slice and strict comparison|817,331,994|96|
|(long string) (true) String#endsWith|172,474,302|96|
|(long string) (true) String#slice and strict comparison|814,297,437|95|
|(short string) (false) String#endsWith|777,414,790|96|
|(short string) (false) String#slice and strict comparison|816,464,828|95|
|(long string) (false) String#endsWith|777,595,117|96|
|(long string) (false) String#slice and strict comparison|817,326,188|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":276696945.46437174,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":817331994.2625623,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":172474302.34546503,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":814297437.0316592,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":777414789.880812,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":816464827.7652367,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":777595117.262578,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":817326188.4945211,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|827,246,493|91|
|Using indexof|834,758,889|95|
|Using RegExp.test|17,230,510|91|
|Using RegExp.text with cached regex pattern|17,670,422|95|
|Using new RegExp.test|4,622,265|96|
|Using new RegExp.test with cached regex pattern|5,136,248|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":827246492.9247993,"samples":8},{"name":"Using indexof","opsSec":834758889.3994161,"samples":7},{"name":"Using RegExp.test","opsSec":17230509.647239905,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17670422.393615462,"samples":5},{"name":"Using new RegExp.test","opsSec":4622265.252634564,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5136247.887870352,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|817,368,797|96|
|Using this|817,150,027|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:30:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using super","opsSec":817368797.0922321,"samples":6},{"name":"Using this","opsSec":817150027.0530708,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,694,972|92|
|Date.now()|21,485,692|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11694971.77555715,"samples":6},{"name":"Date.now()","opsSec":21485692.15743163,"samples":5}]}-->

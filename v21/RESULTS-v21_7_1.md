## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,682,338|95|
|Using dot notation|821,016,568|93|
|Using define property (writable)|4,437,716|95|
|Using define property initialized (writable)|6,211,155|89|
|Using define property (getter)|2,456,443|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:20:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":820682338.4857408,"samples":6},{"name":"Using dot notation","opsSec":821016567.8338205,"samples":6},{"name":"Using define property (writable)","opsSec":4437716.2085599825,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6211155.103549735,"samples":4},{"name":"Using define property (getter)","opsSec":2456443.4383145166,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.097ms
new Array(length)|100|0.013ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.28ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|26.18ms
new Array(length)|1,000,000|5.489ms
array.push|100,000,000|995.158ms
new Array(length)|100,000,000|3,629.398ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.336ms
new Array(length)|10,000|0.222ms
array.push|1,000,000|15.973ms
new Array(length)|1,000,000|6.636ms
array.push|100,000,000|1,136.818ms
new Array(length)|100,000,000|3,584.353ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|604|84|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":604.2308094740906,"samples":4},{"name":"Array.from","opsSec":22.550231506448434,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|817,382,639|99|
|[async] async function|16,029,211|84|
|[async] function|271,685|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"function","opsSec":817382638.8484887,"samples":9},{"name":"[async] async function","opsSec":16029211.29120887,"samples":7},{"name":"[async] function","opsSec":271684.7991591355,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,474|90|
|new Blob (1024)|699|78|
|text (128)|5,883|87|
|text (1024)|755|90|
|arrayBuffer (128)|5,894|87|
|arrayBuffer (1024)|754|88|
|slice (0, 64)|194,095|58|
|slice (0, 512)|29,918|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5473.567234534995,"samples":3},{"name":"new Blob (1024)","opsSec":698.5926217527641,"samples":2},{"name":"text (128)","opsSec":5883.330981963861,"samples":8},{"name":"text (1024)","opsSec":754.6613501406663,"samples":2},{"name":"arrayBuffer (128)","opsSec":5894.26944202564,"samples":3},{"name":"arrayBuffer (1024)","opsSec":754.0757952044708,"samples":2},{"name":"slice (0, 64)","opsSec":194095.2085102952,"samples":4},{"name":"slice (0, 512)","opsSec":29918.285767534602,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,786|50|
|[True conditional] Using constructor name|200,939|95|
|[True conditional] Check if property is valid then instanceof |202,228|94|
|[False conditional] Using instanceof only|818,393,053|97|
|[False conditional] Using constructor name|821,817,717|93|
|[False conditional] Check if property is valid then instanceof |818,952,933|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:33:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246786.42799221072,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":200939.00628326967,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":202228.06938940173,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":818393052.5169063,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":821817717.3629736,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":818952933.4210017,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,679|90|
|crypto.verify('RSA-SHA256')|6,671|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6679.398500308009,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6671.390903540662,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,149|94|
|fromUnixToISOString(new Date())|2,193,597|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396149.0986145088,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2193597.186286845,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,783|83|
|Intl.DateTimeFormat().format(new Date())|19,218|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,135|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,419|83|
|Reusing Intl.DateTimeFormat()|692,943|86|
|Date.toLocaleDateString()|788,152|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,053|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16783.155040540678,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19217.62973272406,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16134.817087016814,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17419.3866168038,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":692943.0641317979,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":788151.7795957364,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20052.616249230956,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,119,395|90|
|Using brackets {}|1,151,127|94|
|Using '' + |1,154,433|96|
|Using date.toString()|1,293,793|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1119395.0520366258,"samples":4},{"name":"Using brackets {}","opsSec":1151126.6057682394,"samples":4},{"name":"Using '' + ","opsSec":1154433.2969477058,"samples":6},{"name":"Using date.toString()","opsSec":1293793.0370958813,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,892,744|94|
|Using delete property (proto: null)|20,829,654|91|
|Using delete property (cached proto: null)|3,983,586|94|
|Using undefined assignment|819,863,437|96|
|Using undefined assignment (proto: null)|23,410,117|99|
|Using undefined property (cached proto: null)|818,302,979|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3892743.699560664,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20829653.655546788,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3983585.6303053712,"samples":4},{"name":"Using undefined assignment","opsSec":819863437.3852675,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23410116.987833936,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":818302978.5280856,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|236,555|52|
|NodeError|197,068|94|
|NodeError Range|197,283|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":236555.28586807966,"samples":3},{"name":"NodeError","opsSec":197067.71846854928,"samples":3},{"name":"NodeError Range","opsSec":197283.48033025616,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,766,806|91|
|Function returning explicitly undefined|1,859,844|99|
|Function returning implicitly undefined|1,910,840|96|
|Function returning string|1,853,416|92|
|Function returning integer|1,840,595|96|
|Function returning float|1,839,237|96|
|Function returning functions|1,787,563|96|
|Function returning arrow functions|1,858,741|93|
|Function returning empty object|1,851,225|94|
|Function returning empty array|1,884,395|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:48:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Function returning null","opsSec":1766805.9930144341,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1859844.3935461424,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1910839.7076219106,"samples":5},{"name":"Function returning string","opsSec":1853415.9539396646,"samples":6},{"name":"Function returning integer","opsSec":1840595.1070678087,"samples":6},{"name":"Function returning float","opsSec":1839237.3930477027,"samples":6},{"name":"Function returning functions","opsSec":1787563.240938797,"samples":5},{"name":"Function returning arrow functions","opsSec":1858741.306221022,"samples":6},{"name":"Function returning empty object","opsSec":1851224.9852623618,"samples":6},{"name":"Function returning empty array","opsSec":1884395.4292499095,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|819,781,392|96|
|using Array.includes (first item)|822,244,135|95|
|Using raw comparison|823,387,015|96|
|Using raw comparison (first item)|824,314,994|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"using Array.includes","opsSec":819781391.7118386,"samples":8},{"name":"using Array.includes (first item)","opsSec":822244135.0732285,"samples":6},{"name":"Using raw comparison","opsSec":823387015.3938857,"samples":9},{"name":"Using raw comparison (first item)","opsSec":824314994.4864911,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,855,960|92|
|Using Object.getOwnPropertyNames()|91,493,830|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using Object.keys()","opsSec":91855960.24512209,"samples":11},{"name":"Using Object.getOwnPropertyNames()","opsSec":91493829.86690155,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|866,836,825|93|
|Length = 10_000 - Array.at|872,860,834|97|
|Length = 1_000_000 - Array.at|872,666,586|99|
|Length = 100 - Array[length - 1]|820,265,782|99|
|Length = 10_000 - Array[length - 1]|819,804,151|97|
|Length = 1_000_000 - Array[length - 1]|821,175,649|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":866836825.2977268,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":872860833.708197,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":872666586.3043401,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":820265782.1211121,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":819804151.1415759,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":821175649.1701002,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|83,454,143|91|
|Object.create({})|2,676,859|82|
|Cached Empty.prototype|822,734,244|94|
|Empty.prototype|2,495,376|91|
|Empty class|1,591,273|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":83454143.13485217,"samples":6},{"name":"Object.create({})","opsSec":2676858.7910247566,"samples":3},{"name":"Cached Empty.prototype","opsSec":822734244.1221519,"samples":7},{"name":"Empty.prototype","opsSec":2495376.019396675,"samples":3},{"name":"Empty class","opsSec":1591273.3026618662,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|825,012,334|95|
|Using optional chain (obj.field?.field2) (undefined)|837,318,115|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|834,826,637|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|832,659,535|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":825012333.6299334,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":837318114.96839,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":834826636.6850075,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":832659535.3826927,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|826,854,281|93|
|Using parseInt(x, 10) - big number (10 len)|830,055,717|91|
|Using + - small number (2 len)|838,741,522|90|
|Using + - big number (10 len)|833,121,103|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":826854280.7039752,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":830055717.4357983,"samples":7},{"name":"Using + - small number (2 len)","opsSec":838741522.3079258,"samples":6},{"name":"Using + - big number (10 len)","opsSec":833121102.6200039,"samples":9}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,297,501|82|
|Using ? operator to avoid rejection|1,412,604|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:02:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1297500.9434913648,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1412603.6802997054,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|820,779,768|92|
|Raw usage underscore usage|820,254,170|96|
|Manipulating private properties using #|811,480,822|97|
|Manipulating private properties using underscore(_)|812,144,244|96|
|Manipulating private properties using Symbol|808,743,262|95|
|Manipulating private properties using PrivateSymbol|50,003,915|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Raw usage private field","opsSec":820779768.4457337,"samples":8},{"name":"Raw usage underscore usage","opsSec":820254170.2220386,"samples":12},{"name":"Manipulating private properties using #","opsSec":811480821.9088366,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":812144243.9835055,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":808743261.628245,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50003915.298723854,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,233,533|92|
|Adding property in the object creation - small object|5,399,371|90|
|Adding property after the function creation - small class|276,349|88|
|Adding property in the function creation - small class|286,554|90|
|Adding property after the class creation - small class|287,013|87|
|Adding property in the class creation - small class|290,195|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5233533.015148082,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5399371.102111538,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":276348.9796733091,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":286554.05966905894,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":287013.1816753348,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":290195.4483681481,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|821,037,663|97|
|Getter|92,513,146|99|
|Method|823,086,970|97|
|DefineProperty (getter)|823,237,905|97|
|DefineProperty (getter & enumerable=false)|91,876,533|97|
|DefineProperty (getter & configurable=false)|823,996,700|98|
|DefineProperty (getter & enumerable=false & configurable=false)|92,557,269|97|
|DefineProperty (writable)|824,331,520|97|
|DefineProperty (writable & enumerable=false)|823,797,422|97|
|DefineProperty (writable & enumerable=false & configurable=false)|823,860,552|99|
|DefineProperties (getter)|92,483,665|97|
|DefineProperties (getter & enumerable=false)|92,415,931|98|
|DefineProperties (getter & enumerable=false & configurable=false)|61,063,960|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":821037663.4944291,"samples":6},{"name":"Getter","opsSec":92513146.1444005,"samples":6},{"name":"Method","opsSec":823086969.8301795,"samples":6},{"name":"DefineProperty (getter)","opsSec":823237905.4346099,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91876533.11164825,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":823996700.281731,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92557268.98736267,"samples":6},{"name":"DefineProperty (writable)","opsSec":824331519.6929677,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":823797422.1336697,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823860551.6141144,"samples":10},{"name":"DefineProperties (getter)","opsSec":92483665.20693585,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":92415930.82338217,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":61063960.20547375,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|773,482,124|98|
|Setter|12,619,655|97|
|Method|779,956,285|98|
|DefineProperty (setter)|754,391,130|93|
|DefineProperty (setter & enumerable=false)|12,437,901|93|
|DefineProperty (setter & configurable=false)|12,569,726|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,315,855|97|
|DefineProperty (writable)|785,587,571|97|
|DefineProperty (writable & enumerable=false)|782,902,517|98|
|DefineProperty (writable & enumerable=false & configurable=false)|784,254,432|97|
|DefineProperties (setter)|784,728,890|100|
|DefineProperties (setter & enumerable=false)|12,375,490|99|
|DefineProperties (setter & enumerable=false & configurable=false)|11,476,612|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Setter (class)","opsSec":773482124.0777382,"samples":6},{"name":"Setter","opsSec":12619655.09540419,"samples":6},{"name":"Method","opsSec":779956285.1543115,"samples":6},{"name":"DefineProperty (setter)","opsSec":754391129.8472301,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12437901.088609403,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12569725.684605356,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12315854.811847435,"samples":5},{"name":"DefineProperty (writable)","opsSec":785587571.4759763,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":782902517.1241683,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":784254432.3768657,"samples":8},{"name":"DefineProperties (setter)","opsSec":784728890.2221268,"samples":9},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12375490.422656614,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11476611.92873566,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,247,988|94|
|Using replaceAll()|3,047,423|97|
|Using replaceAll(//g)|2,992,190|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3247988.055249141,"samples":4},{"name":"Using replaceAll()","opsSec":3047422.9348826795,"samples":6},{"name":"Using replaceAll(//g)","opsSec":2992190.050364378,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,530,625|93|
|{ ...object, __proto__: null }|2,526,506|95|
|{ ...object, newProp: true }|27,576,696|91|
|structuredClone|266,932|96|
|JSON.parse + JSON.stringify|233,993|99|
|loop + object.keys starting with {}|1,466,931|94|
|loop + object.keys starting with { __proto__: null }|796,638|96|
|loop + object.keys starting with { randomProp: true }|625,747|95|
|object.keys + reduce(FN, {})|611,985|94|
|object.keys + reduce(FN, { __proto__: null })|793,650|96|
|object.keys + reduce(FN, { newProp: true })|634,705|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30530624.93738457,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":2526506.426288135,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":27576695.78156796,"samples":4},{"name":"structuredClone","opsSec":266931.540711031,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":233992.92049881263,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":1466930.8495437799,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":796638.441894288,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":625746.6822823875,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":611985.390780642,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":793649.5521112782,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":634704.9798458576,"samples":9}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|313,582|92|
|Sort using first char|1,407,847|97|
|Sort using localeCompare|1,286,723|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Sort using default","opsSec":313582.3750445209,"samples":4},{"name":"Sort using first char","opsSec":1407847.431053554,"samples":7},{"name":"Sort using localeCompare","opsSec":1286723.1739985393,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,121|94|
|{...smallObject} - Total keys: 2|111,988,053|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,235|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,236|96|
|{ ...bigObject, ...anotherBigObject }|1,276|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,612,700|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,880,159|97|
|{ ...smallObject, ...anotherSmallObject }|24,636,738|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2120.6432730495217,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":111988052.92557597,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2234.596228398227,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6236.381455950583,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1276.1475012677315,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14612699.700755196,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36880158.599188246,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24636737.886549193,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,105|88|
|streams.web.Readable reading 1e3 * "some data"|2,017|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2104.7409577497574,"samples":6},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2016.6812587599363,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,922|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,513|66|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4921.805016780058,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1513.2953435190693,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|821,683,568|97|
|Using backtick (`)|822,012,890|97|
|Using array.join|11,486,253|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":821683568.1304778,"samples":6},{"name":"Using backtick (`)","opsSec":822012890.1144607,"samples":7},{"name":"Using array.join","opsSec":11486253.306379799,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|821,910,412|98|
|Using indexof|822,028,642|97|
|Using RegExp.test|16,915,604|94|
|Using RegExp.text with cached regex pattern|17,682,302|97|
|Using new RegExp.test|4,758,805|97|
|Using new RegExp.test with cached regex pattern|5,517,466|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":821910412.4523641,"samples":7},{"name":"Using indexof","opsSec":822028641.9327419,"samples":7},{"name":"Using RegExp.test","opsSec":16915603.83072449,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":17682302.400918946,"samples":6},{"name":"Using new RegExp.test","opsSec":4758805.211934894,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5517466.088890914,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|799,936,735|99|
|Using this|806,110,682|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using super","opsSec":799936734.9215721,"samples":6},{"name":"Using this","opsSec":806110682.1497909,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,888,130|95|
|Date.now()|21,808,559|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().getTime()","opsSec":11888129.703679383,"samples":5},{"name":"Date.now()","opsSec":21808559.133952476,"samples":5}]}-->

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,501,125|95|
|Using dot notation|817,784,327|97|
|Using define property (writable)|4,416,419|92|
|Using define property initialized (writable)|6,265,623|95|
|Using define property (getter)|2,483,912|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":822501125.4191921,"samples":8},{"name":"Using dot notation","opsSec":817784326.7236955,"samples":6},{"name":"Using define property (writable)","opsSec":4416418.552217441,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6265623.350427806,"samples":5},{"name":"Using define property (getter)","opsSec":2483911.7509763613,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.011ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.279ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|25.081ms
new Array(length)|1,000,000|5.239ms
array.push|100,000,000|1,011.34ms
new Array(length)|100,000,000|3,616.321ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.356ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|16.89ms
new Array(length)|1,000,000|5.691ms
array.push|100,000,000|1,149.705ms
new Array(length)|100,000,000|3,591.471ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|617|80|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":616.5175546256347,"samples":2},{"name":"Array.from","opsSec":22.740016279155338,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,104,847|94|
|[async] async function|16,754,381|84|
|[async] function|204,595|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":822104846.9222684,"samples":6},{"name":"[async] async function","opsSec":16754380.719680255,"samples":6},{"name":"[async] function","opsSec":204595.31457990562,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,560|89|
|new Blob (1024)|704|77|
|text (128)|5,981|89|
|text (1024)|746|89|
|arrayBuffer (128)|5,983|89|
|arrayBuffer (1024)|751|90|
|slice (0, 64)|174,750|53|
|slice (0, 512)|24,307|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5560.302575968935,"samples":5},{"name":"new Blob (1024)","opsSec":704.3495690586105,"samples":2},{"name":"text (128)","opsSec":5981.4200111769405,"samples":5},{"name":"text (1024)","opsSec":746.0643185612771,"samples":2},{"name":"arrayBuffer (128)","opsSec":5983.004045934672,"samples":3},{"name":"arrayBuffer (1024)","opsSec":750.6311800967388,"samples":3},{"name":"slice (0, 64)","opsSec":174750.0570754478,"samples":3},{"name":"slice (0, 512)","opsSec":24306.87762378252,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,721|52|
|[True conditional] Using constructor name|202,867|95|
|[True conditional] Check if property is valid then instanceof |204,985|98|
|[False conditional] Using instanceof only|824,293,333|98|
|[False conditional] Using constructor name|823,404,041|98|
|[False conditional] Check if property is valid then instanceof |824,803,604|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246721.46906887201,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202867.3858783728,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":204985.26491637417,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":824293333.4402988,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":823404040.512674,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":824803604.0712243,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,671|91|
|crypto.verify('RSA-SHA256')|6,709|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6670.530312273687,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6709.118260124717,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,369,644|95|
|fromUnixToISOString(new Date())|2,231,067|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1369643.7274465105,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2231066.6164413407,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,868|81|
|Intl.DateTimeFormat().format(new Date())|17,115|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,817|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,364|81|
|Reusing Intl.DateTimeFormat()|681,753|84|
|Date.toLocaleDateString()|782,947|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,052|89|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:45:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16868.142315007135,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17115.29548717906,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15817.297327150287,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20364.04063439477,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":681752.9054480148,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":782947.172481649,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20051.55665147416,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,399|92|
|Using brackets {}|1,068,228|96|
|Using '' + |1,056,210|94|
|Using date.toString()|1,186,044|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1034398.8987885935,"samples":4},{"name":"Using brackets {}","opsSec":1068228.497586988,"samples":4},{"name":"Using '' + ","opsSec":1056209.8142862655,"samples":4},{"name":"Using date.toString()","opsSec":1186044.1789596693,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,203,756|96|
|Using delete property (proto: null)|22,323,659|96|
|Using delete property (cached proto: null)|4,277,704|95|
|Using undefined assignment|881,107,114|96|
|Using undefined assignment (proto: null)|24,876,199|98|
|Using undefined property (cached proto: null)|880,433,464|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":4203755.78387056,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22323658.70514654,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4277703.868538703,"samples":5},{"name":"Using undefined assignment","opsSec":881107114.4572463,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24876199.14843088,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":880433463.7431455,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|231,923|53|
|NodeError|195,083|94|
|NodeError Range|194,335|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":231922.8951321432,"samples":3},{"name":"NodeError","opsSec":195083.3255261575,"samples":3},{"name":"NodeError Range","opsSec":194334.69596125153,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,852,340|94|
|Function returning explicitly undefined|1,842,631|96|
|Function returning implicitly undefined|1,877,072|95|
|Function returning string|1,855,828|98|
|Function returning integer|1,869,638|94|
|Function returning float|1,894,458|95|
|Function returning functions|1,837,415|97|
|Function returning arrow functions|1,825,935|99|
|Function returning empty object|1,878,370|96|
|Function returning empty array|1,792,221|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1852340.0518463398,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1842631.0720755733,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1877071.7504063745,"samples":5},{"name":"Function returning string","opsSec":1855828.053525665,"samples":4},{"name":"Function returning integer","opsSec":1869637.9985880319,"samples":7},{"name":"Function returning float","opsSec":1894457.9347780626,"samples":5},{"name":"Function returning functions","opsSec":1837414.5396582333,"samples":5},{"name":"Function returning arrow functions","opsSec":1825934.615032212,"samples":5},{"name":"Function returning empty object","opsSec":1878369.7435473052,"samples":5},{"name":"Function returning empty array","opsSec":1792221.3508624653,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|819,271,246|95|
|using Array.includes (first item)|822,581,559|97|
|Using raw comparison|822,110,800|99|
|Using raw comparison (first item)|821,772,630|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":819271245.9360431,"samples":6},{"name":"using Array.includes (first item)","opsSec":822581558.7687856,"samples":9},{"name":"Using raw comparison","opsSec":822110800.4738634,"samples":6},{"name":"Using raw comparison (first item)","opsSec":821772630.3187479,"samples":6}]}-->

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

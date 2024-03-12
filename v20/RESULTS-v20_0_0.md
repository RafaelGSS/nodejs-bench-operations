## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|826,840,828|98|
|Using dot notation|826,246,106|95|
|Using define property (writable)|4,433,330|90|
|Using define property initialized (writable)|6,146,343|94|
|Using define property (getter)|2,397,219|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":826840828.4585024,"samples":7},{"name":"Using dot notation","opsSec":826246106.1196157,"samples":8},{"name":"Using define property (writable)","opsSec":4433329.7980143875,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6146343.483490669,"samples":5},{"name":"Using define property (getter)","opsSec":2397219.3972986885,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.412ms
new Array(length)|10,000|0.347ms
array.push|1,000,000|28.831ms
new Array(length)|1,000,000|5.239ms
array.push|100,000,000|1,125.902ms
new Array(length)|100,000,000|3,606.82ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.031ms
new Array(length)|100|0.014ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.294ms
new Array(length)|10,000|0.172ms
array.push|1,000,000|22.943ms
new Array(length)|1,000,000|2.466ms
array.push|100,000,000|1,324.655ms
new Array(length)|100,000,000|3,500.312ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|589|82|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":588.561450876469,"samples":3},{"name":"Array.from","opsSec":22.371766721267196,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,877,407|98|
|[async] async function|16,467,134|82|
|[async] function|347,875|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":822877406.9997112,"samples":6},{"name":"[async] async function","opsSec":16467133.73367403,"samples":6},{"name":"[async] function","opsSec":347874.8311839141,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,332|89|
|new Blob (1024)|692|77|
|text (128)|5,836|88|
|text (1024)|732|86|
|arrayBuffer (128)|5,877|88|
|arrayBuffer (1024)|750|87|
|slice (0, 64)|75,926|70|
|slice (0, 512)|21,436|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Blob (128)","opsSec":5332.3949761928725,"samples":3},{"name":"new Blob (1024)","opsSec":692.3163376166036,"samples":2},{"name":"text (128)","opsSec":5836.343214553255,"samples":4},{"name":"text (1024)","opsSec":731.9183671693315,"samples":2},{"name":"arrayBuffer (128)","opsSec":5877.474200661566,"samples":4},{"name":"arrayBuffer (1024)","opsSec":750.0560603861633,"samples":2},{"name":"slice (0, 64)","opsSec":75925.62395449633,"samples":3},{"name":"slice (0, 512)","opsSec":21435.58334929115,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,117|57|
|[True conditional] Using constructor name|193,161|96|
|[True conditional] Check if property is valid then instanceof |196,364|97|
|[False conditional] Using instanceof only|827,650,680|97|
|[False conditional] Using constructor name|826,888,840|98|
|[False conditional] Check if property is valid then instanceof |827,518,494|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":239116.80991963012,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":193161.34991541068,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":196364.23180952383,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":827650680.4010621,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":826888840.131358,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":827518494.1217151,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,337|95|
|crypto.verify('RSA-SHA256')|6,341|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6337.202995491022,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6340.5273380142335,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,498,726|95|
|fromUnixToISOString(new Date())|2,313,687|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1498725.555129517,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2313687.4734178875,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,413|84|
|Intl.DateTimeFormat().format(new Date())|8,575|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,959|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,235|92|
|Reusing Intl.DateTimeFormat()|567,246|96|
|Date.toLocaleDateString()|672,371|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,437|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10413.140995740121,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8575.38494101811,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11958.7204771467,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14235.249895481908,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":567245.684903137,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":672370.6180612766,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13437.322031010237,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,123,380|98|
|Using brackets {}|1,111,349|93|
|Using '' + |1,122,891|94|
|Using date.toString()|1,218,253|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1123380.4297108627,"samples":6},{"name":"Using brackets {}","opsSec":1111348.9748848826,"samples":8},{"name":"Using '' + ","opsSec":1122890.6469466565,"samples":4},{"name":"Using date.toString()","opsSec":1218253.4945327495,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,800,282|94|
|Using delete property (proto: null)|20,101,416|98|
|Using delete property (cached proto: null)|3,825,813|93|
|Using undefined assignment|825,744,956|92|
|Using undefined assignment (proto: null)|22,294,303|97|
|Using undefined property (cached proto: null)|822,669,256|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3800281.5814989544,"samples":6},{"name":"Using delete property (proto: null)","opsSec":20101416.437465444,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3825813.4913993534,"samples":5},{"name":"Using undefined assignment","opsSec":825744956.2078588,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22294302.577389978,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":822669256.2618788,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|240,410|52|
|NodeError|196,124|91|
|NodeError Range|192,900|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":240410.03484580116,"samples":3},{"name":"NodeError","opsSec":196123.7578561827,"samples":3},{"name":"NodeError Range","opsSec":192900.2806314232,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,733,187|94|
|Function returning explicitly undefined|1,771,561|98|
|Function returning implicitly undefined|1,732,429|95|
|Function returning string|1,721,263|98|
|Function returning integer|1,799,757|95|
|Function returning float|1,738,444|96|
|Function returning functions|1,725,200|96|
|Function returning arrow functions|1,736,170|93|
|Function returning empty object|1,738,440|98|
|Function returning empty array|1,741,639|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1733187.2348522511,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1771560.6710454272,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1732428.9447714519,"samples":6},{"name":"Function returning string","opsSec":1721263.0546174524,"samples":5},{"name":"Function returning integer","opsSec":1799757.2095855286,"samples":6},{"name":"Function returning float","opsSec":1738443.9639073657,"samples":5},{"name":"Function returning functions","opsSec":1725200.2615021707,"samples":5},{"name":"Function returning arrow functions","opsSec":1736169.7309572105,"samples":5},{"name":"Function returning empty object","opsSec":1738440.091241788,"samples":6},{"name":"Function returning empty array","opsSec":1741638.5167569804,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|825,027,795|96|
|using Array.includes (first item)|825,772,998|98|
|Using raw comparison|827,598,924|94|
|Using raw comparison (first item)|827,013,180|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":825027794.5727352,"samples":6},{"name":"using Array.includes (first item)","opsSec":825772998.1645721,"samples":7},{"name":"Using raw comparison","opsSec":827598923.9092534,"samples":6},{"name":"Using raw comparison (first item)","opsSec":827013179.8720958,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|94,600,094|93|
|Using Object.getOwnPropertyNames()|98,233,001|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":94600093.86640275,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":98233000.9221624,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|903,929,235|96|
|Length = 10_000 - Array.at|903,990,922|98|
|Length = 1_000_000 - Array.at|903,315,134|97|
|Length = 100 - Array[length - 1]|823,302,357|97|
|Length = 10_000 - Array[length - 1]|817,230,766|95|
|Length = 1_000_000 - Array[length - 1]|822,334,924|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":903929235.3235872,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":903990922.0074391,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":903315134.212804,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":823302356.8809669,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":817230765.5700922,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822334923.7325208,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|88,027,015|89|
|Object.create({})|2,546,004|83|
|Cached Empty.prototype|818,840,969|98|
|Empty.prototype|2,440,176|88|
|Empty class|1,519,598|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":88027014.81950334,"samples":8},{"name":"Object.create({})","opsSec":2546004.0232429868,"samples":3},{"name":"Cached Empty.prototype","opsSec":818840969.0666947,"samples":6},{"name":"Empty.prototype","opsSec":2440176.421062614,"samples":4},{"name":"Empty class","opsSec":1519597.9402879775,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|827,644,572|95|
|Using optional chain (obj.field?.field2) (undefined)|827,551,523|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|827,006,773|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|827,288,878|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":827644572.255388,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":827551523.200255,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":827006773.1400179,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":827288878.430596,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|825,105,012|97|
|Using parseInt(x, 10) - big number (10 len)|824,558,206|95|
|Using + - small number (2 len)|825,950,711|98|
|Using + - big number (10 len)|825,472,342|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":825105011.8738407,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":824558206.314111,"samples":7},{"name":"Using + - small number (2 len)","opsSec":825950711.1944588,"samples":7},{"name":"Using + - big number (10 len)","opsSec":825472341.6512837,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,306,537|82|
|Using ? operator to avoid rejection|1,345,465|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1306537.413345281,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1345465.1394236481,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|817,294,175|96|
|Raw usage underscore usage|818,991,485|98|
|Manipulating private properties using #|807,746,344|90|
|Manipulating private properties using underscore(_)|810,280,159|99|
|Manipulating private properties using Symbol|805,694,589|94|
|Manipulating private properties using PrivateSymbol|49,848,255|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":817294174.9505538,"samples":7},{"name":"Raw usage underscore usage","opsSec":818991484.824302,"samples":7},{"name":"Manipulating private properties using #","opsSec":807746343.5412002,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":810280158.8605478,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":805694589.3238381,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49848254.706194974,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,046,384|94|
|Adding property in the object creation - small object|5,090,051|96|
|Adding property after the function creation - small class|260,564|89|
|Adding property in the function creation - small class|266,825|90|
|Adding property after the class creation - small class|226,140|85|
|Adding property in the class creation - small class|225,012|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5046384.246029757,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":5090050.743961978,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":260564.44044226583,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":266824.89082881476,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":226139.5793038871,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":225011.9384997395,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|820,682,699|96|
|Getter|85,109,016|94|
|Method|820,589,855|93|
|DefineProperty (getter)|820,324,274|97|
|DefineProperty (getter & enumerable=false)|84,049,815|93|
|DefineProperty (getter & configurable=false)|822,076,655|99|
|DefineProperty (getter & enumerable=false & configurable=false)|85,060,270|94|
|DefineProperty (writable)|821,749,447|95|
|DefineProperty (writable & enumerable=false)|824,096,634|97|
|DefineProperty (writable & enumerable=false & configurable=false)|822,392,728|97|
|DefineProperties (getter)|85,036,619|90|
|DefineProperties (getter & enumerable=false)|86,059,123|94|
|DefineProperties (getter & enumerable=false & configurable=false)|85,424,501|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Getter (class)","opsSec":820682699.2453617,"samples":6},{"name":"Getter","opsSec":85109015.53554134,"samples":5},{"name":"Method","opsSec":820589854.5376649,"samples":7},{"name":"DefineProperty (getter)","opsSec":820324273.9391966,"samples":5},{"name":"DefineProperty (getter & enumerable=false)","opsSec":84049814.54814915,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":822076655.0939614,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":85060269.59595576,"samples":6},{"name":"DefineProperty (writable)","opsSec":821749447.1338984,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":824096634.497673,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":822392728.0562522,"samples":6},{"name":"DefineProperties (getter)","opsSec":85036618.61480096,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":86059123.35724133,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":85424501.29568031,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|752,110,885|86|
|Setter|11,739,024|90|
|Method|786,410,993|99|
|DefineProperty (setter)|788,709,219|98|
|DefineProperty (setter & enumerable=false)|11,072,694|93|
|DefineProperty (setter & configurable=false)|11,823,341|93|
|DefineProperty (setter & enumerable=false & configurable=false)|11,828,609|95|
|DefineProperty (writable)|789,216,249|99|
|DefineProperty (writable & enumerable=false)|788,588,642|96|
|DefineProperty (writable & enumerable=false & configurable=false)|614,549,752|79|
|DefineProperties (setter)|116,590,745|88|
|DefineProperties (setter & enumerable=false)|10,673,926|93|
|DefineProperties (setter & enumerable=false & configurable=false)|10,965,303|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":752110885.0745436,"samples":5},{"name":"Setter","opsSec":11739023.565749062,"samples":5},{"name":"Method","opsSec":786410993.4447494,"samples":9},{"name":"DefineProperty (setter)","opsSec":788709218.9194579,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11072694.413536156,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":11823341.293780774,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11828608.920866158,"samples":7},{"name":"DefineProperty (writable)","opsSec":789216249.0999235,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":788588641.5862683,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":614549751.718216,"samples":7},{"name":"DefineProperties (setter)","opsSec":116590745.18369545,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10673925.636942951,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10965303.04586169,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,217,604|92|
|Using replaceAll()|2,842,298|95|
|Using replaceAll(//g)|3,030,863|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3217603.767992619,"samples":5},{"name":"Using replaceAll()","opsSec":2842298.1456802827,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3030863.246968681,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,211,969|93|
|{ ...object, __proto__: null }|26,876,258|95|
|{ ...object, newProp: true }|845,380|92|
|structuredClone|253,750|95|
|JSON.parse + JSON.stringify|174,184|97|
|loop + object.keys starting with {}|1,457,271|94|
|loop + object.keys starting with { __proto__: null }|769,030|93|
|loop + object.keys starting with { randomProp: true }|613,058|94|
|object.keys + reduce(FN, {})|570,548|96|
|object.keys + reduce(FN, { __proto__: null })|774,853|95|
|object.keys + reduce(FN, { newProp: true })|617,300|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26211969.145927154,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":26876257.516975548,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":845380.4132052643,"samples":3},{"name":"structuredClone","opsSec":253749.7535141092,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":174183.79884858854,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1457271.0823472533,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":769029.9985283656,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":613058.4815872835,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":570548.3417061786,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":774852.7203878431,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":617300.1514280981,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|257,508|94|
|Sort using first char|1,396,805|94|
|Sort using localeCompare|1,294,248|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":257507.72094100938,"samples":4},{"name":"Sort using first char","opsSec":1396805.0468806503,"samples":6},{"name":"Sort using localeCompare","opsSec":1294247.8425584615,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,191|88|
|{...smallObject} - Total keys: 2|105,080,144|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,264|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,085|94|
|{ ...bigObject, ...anotherBigObject }|1,316|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,931,070|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,471,486|94|
|{ ...smallObject, ...anotherSmallObject }|25,081,598|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2191.297394669498,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":105080144.48824868,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1263.7258298696117,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6084.579081440129,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1315.5348572676419,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13931070.463881228,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37471485.7899704,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25081597.68965937,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,284|87|
|streams.web.Readable reading 1e3 * "some data"|579|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2284.0581862309928,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":579.3084816655061,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,791|92|
|streams.web.WritableStream writing 1e3 * "some data"|1,559|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5790.911884416082,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1559.0026783990052,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|826,197,646|95|
|Using backtick (`)|827,044,121|97|
|Using array.join|10,851,882|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":826197645.534185,"samples":6},{"name":"Using backtick (`)","opsSec":827044121.1965657,"samples":8},{"name":"Using array.join","opsSec":10851881.930040155,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|824,406,914|97|
|Using indexof|824,625,541|96|
|Using RegExp.test|15,028,029|94|
|Using RegExp.text with cached regex pattern|15,676,430|98|
|Using new RegExp.test|4,358,728|95|
|Using new RegExp.test with cached regex pattern|5,190,412|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using includes","opsSec":824406913.693955,"samples":6},{"name":"Using indexof","opsSec":824625541.0497199,"samples":7},{"name":"Using RegExp.test","opsSec":15028028.961541282,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":15676430.151629694,"samples":4},{"name":"Using new RegExp.test","opsSec":4358727.9998251675,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5190411.6209793985,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|818,234,984|98|
|Using this|820,216,878|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using super","opsSec":818234984.2010114,"samples":8},{"name":"Using this","opsSec":820216877.941574,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,930,396|94|
|Date.now()|21,308,638|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11930395.708597274,"samples":4},{"name":"Date.now()","opsSec":21308637.81584324,"samples":7}]}-->

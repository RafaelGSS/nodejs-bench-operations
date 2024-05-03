## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|914,953,648|97|
|Using dot notation|914,610,585|97|
|Using define property (writable)|4,917,765|93|
|Using define property initialized (writable)|6,782,845|94|
|Using define property (getter)|2,663,453|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:16:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":914953648.0933666,"samples":7},{"name":"Using dot notation","opsSec":914610584.6567296,"samples":6},{"name":"Using define property (writable)","opsSec":4917765.331750559,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6782845.422155006,"samples":4},{"name":"Using define property (getter)","opsSec":2663452.987433868,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.423ms
new Array(length)|10,000|0.341ms
array.push|1,000,000|32.52ms
new Array(length)|1,000,000|7.619ms
array.push|100,000,000|2,035.753ms
new Array(length)|100,000,000|4,750.853ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.283ms
new Array(length)|10,000|0.161ms
array.push|1,000,000|25.717ms
new Array(length)|1,000,000|4.369ms
array.push|100,000,000|2,817.251ms
new Array(length)|100,000,000|4,303.947ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|85|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:31:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.42398689452324,"samples":2},{"name":"Array.from","opsSec":23.285604925489636,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|916,920,915|98|
|[async] async function|19,478,582|87|
|[async] function|392,799|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:38:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":916920915.2119774,"samples":6},{"name":"[async] async function","opsSec":19478582.476929903,"samples":6},{"name":"[async] function","opsSec":392799.22467141727,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,781|90|
|new Blob (1024)|753|79|
|text (128)|6,196|90|
|text (1024)|790|89|
|arrayBuffer (128)|6,228|90|
|arrayBuffer (1024)|792|90|
|slice (0, 64)|83,611|70|
|slice (0, 512)|27,376|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5781.09165227992,"samples":6},{"name":"new Blob (1024)","opsSec":753.1680276147437,"samples":2},{"name":"text (128)","opsSec":6195.827548705374,"samples":5},{"name":"text (1024)","opsSec":789.6881188410536,"samples":2},{"name":"arrayBuffer (128)","opsSec":6228.361351078386,"samples":3},{"name":"arrayBuffer (1024)","opsSec":792.3378036449587,"samples":2},{"name":"slice (0, 64)","opsSec":83610.73947590876,"samples":3},{"name":"slice (0, 512)","opsSec":27376.447277714968,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|260,628|53|
|[True conditional] Using constructor name|213,422|97|
|[True conditional] Check if property is valid then instanceof |214,866|97|
|[False conditional] Using instanceof only|916,266,149|95|
|[False conditional] Using constructor name|916,931,038|99|
|[False conditional] Check if property is valid then instanceof |917,245,242|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:01:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":260627.89823526435,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":213422.2307025607,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":214866.4762376148,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":916266148.5159158,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":916931037.9747696,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":917245241.5597596,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,021|93|
|crypto.verify('RSA-SHA256')|6,891|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:08:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7021.345146316398,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6891.011874264464,"samples":3}]}-->

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
|Intl.DateTimeFormat().format(Date.now())|11,012|85|
|Intl.DateTimeFormat().format(new Date())|9,409|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,334|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,557|89|
|Reusing Intl.DateTimeFormat()|623,141|96|
|Date.toLocaleDateString()|759,018|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,954|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:28:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11011.741119083226,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9409.061016327247,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13334.160735805095,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14556.928886775604,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":623141.3847792421,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":759017.5279646413,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13953.886349435648,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

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
|{ ...object }|26,215,067|91|
|{ ...object, __proto__: null }|27,607,190|99|
|{ ...object, newProp: true }|888,711|92|
|structuredClone|258,687|96|
|JSON.parse + JSON.stringify|176,384|97|
|loop + object.keys starting with {}|1,463,421|95|
|loop + object.keys starting with { __proto__: null }|780,538|96|
|loop + object.keys starting with { randomProp: true }|623,366|95|
|object.keys + reduce(FN, {})|601,081|92|
|object.keys + reduce(FN, { __proto__: null })|780,328|94|
|object.keys + reduce(FN, { newProp: true })|624,203|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26215067.144866683,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27607189.657290004,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":888710.9477902829,"samples":3},{"name":"structuredClone","opsSec":258687.02649252678,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":176384.29812346943,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1463421.009400247,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":780537.9041323254,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":623365.524344489,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":601081.2496126775,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":780328.2252550052,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":624203.0314529144,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|262,904|96|
|Sort using first char|1,377,758|96|
|Sort using localeCompare|1,251,086|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":262903.7894862935,"samples":4},{"name":"Sort using first char","opsSec":1377758.2628433714,"samples":7},{"name":"Sort using localeCompare","opsSec":1251085.7943761607,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,035|94|
|{...smallObject} - Total keys: 2|100,745,196|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,182|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,906|97|
|{ ...bigObject, ...anotherBigObject }|1,228|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,567,329|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,990,407|97|
|{ ...smallObject, ...anotherSmallObject }|24,920,896|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2035.051877468924,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":100745195.85545954,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1181.5579647961233,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5906.329700370342,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1228.3094106533395,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13567328.598475555,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36990406.96079676,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24920896.404538404,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,622|85|
|streams.web.Readable reading 1e3 * "some data"|599|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2622.4435758133927,"samples":7},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":599.3508878264101,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,256|92|
|streams.web.WritableStream writing 1e3 * "some data"|1,554|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6256.0803693962525,"samples":6},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1554.450788325885,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|826,109,980|95|
|Using backtick (`)|826,272,565|96|
|Using array.join|10,845,832|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":826109980.2191832,"samples":8},{"name":"Using backtick (`)","opsSec":826272565.4238867,"samples":7},{"name":"Using array.join","opsSec":10845831.751375772,"samples":6}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,719,306|95|
|(short string) (true) String#slice and strict comparison|821,984,134|96|
|(long string) (true) String#endsWith|76,784,525|95|
|(long string) (true) String#slice and strict comparison|823,335,410|98|
|(short string) (false) String#endsWith|98,235,072|99|
|(short string) (false) String#slice and strict comparison|822,875,654|95|
|(long string) (false) String#endsWith|89,943,062|99|
|(long string) (false) String#slice and strict comparison|822,258,553|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81719305.71540216,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821984134.2424747,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":76784524.71672489,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":823335410.4968786,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":98235072.2437452,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":822875654.3653206,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":89943062.23049812,"samples":9},{"name":"(long string) (false) String#slice and strict comparison","opsSec":822258552.9449673,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|824,566,452|96|
|Using indexof|823,541,626|95|
|Using RegExp.test|14,994,503|94|
|Using RegExp.text with cached regex pattern|15,550,794|97|
|Using new RegExp.test|4,347,699|96|
|Using new RegExp.test with cached regex pattern|5,197,494|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":824566452.0837116,"samples":6},{"name":"Using indexof","opsSec":823541625.9079466,"samples":6},{"name":"Using RegExp.test","opsSec":14994503.249165468,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":15550794.483596783,"samples":5},{"name":"Using new RegExp.test","opsSec":4347698.744021544,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5197494.14267201,"samples":5}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|281,734,335|93|
|(short string) (true) String#slice and strict comparison|849,220,055|90|
|(long string) (true) String#startsWith|175,936,013|93|
|(long string) (true) String#slice and strict comparison|846,056,014|95|
|(short string) (false) String#startsWith|868,727,800|94|
|(short string) (false) String#slice and strict comparison|832,857,779|93|
|(long string) (false) String#startsWith|871,393,400|94|
|(long string) (false) String#slice and strict comparison|824,159,244|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":281734334.936168,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":849220054.7245272,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":175936013.4898651,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":846056014.1817936,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":868727799.740036,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":832857778.961,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":871393400.077952,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":824159243.9626979,"samples":7}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|821,900,772|98|
|Using this|824,856,397|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using super","opsSec":821900771.938402,"samples":7},{"name":"Using this","opsSec":824856397.1742603,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,730,136|92|
|Date.now()|21,373,007|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11730135.811108222,"samples":5},{"name":"Date.now()","opsSec":21373006.58321159,"samples":5}]}-->

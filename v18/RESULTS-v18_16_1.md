## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,338,115|99|
|Using dot notation|847,266,101|96|
|Using define property (writable)|4,278,073|95|
|Using define property initialized (writable)|6,061,101|98|
|Using define property (getter)|2,258,760|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:52:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848338114.6568011,"samples":6},{"name":"Using dot notation","opsSec":847266100.5851912,"samples":7},{"name":"Using define property (writable)","opsSec":4278073.154757511,"samples":7},{"name":"Using define property initialized (writable)","opsSec":6061101.166413099,"samples":7},{"name":"Using define property (getter)","opsSec":2258759.8135865703,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.001ms
array.push|100|0.023ms
new Array(length)|100|0.007ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.265ms
new Array(length)|10,000|0.176ms
array.push|1,000,000|26.345ms
new Array(length)|1,000,000|13.647ms
array.push|100,000,000|1,810.871ms
new Array(length)|100,000,000|3,860.978ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.462ms
new Array(length)|10,000|3.232ms
array.push|1,000,000|257.617ms
new Array(length)|1,000,000|4.502ms
array.push|100,000,000|2,229.434ms
new Array(length)|100,000,000|4,141.973ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|86|
|Array.from|20|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:08:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":303.038839042749,"samples":3},{"name":"Array.from","opsSec":20.120082804396542,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,505,686|100|
|[async] async function|17,633,212|87|
|[async] function|330,261|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:15:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848505686.1385969,"samples":6},{"name":"[async] async function","opsSec":17633211.745696396,"samples":8},{"name":"[async] function","opsSec":330260.7084237526,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,392|85|
|new Blob (1024)|560|74|
|text (128)|49,945|87|
|text (1024)|33,300|79|
|arrayBuffer (128)|50,434|86|
|arrayBuffer (1024)|34,206|80|
|slice (0, 64)|94,569|86|
|slice (0, 512)|57,036|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:26:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4392.028438618791,"samples":3},{"name":"new Blob (1024)","opsSec":559.8306667597847,"samples":2},{"name":"text (128)","opsSec":49945.387613071325,"samples":4},{"name":"text (1024)","opsSec":33300.36816243092,"samples":3},{"name":"arrayBuffer (128)","opsSec":50433.70186425532,"samples":4},{"name":"arrayBuffer (1024)","opsSec":34205.52814895966,"samples":3},{"name":"slice (0, 64)","opsSec":94568.87686851204,"samples":3},{"name":"slice (0, 512)","opsSec":57036.35796037526,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|238,925|54|
|[True conditional] Using constructor name|181,450|97|
|[True conditional] Check if property is valid then instanceof |183,909|96|
|[False conditional] Using instanceof only|848,868,738|96|
|[False conditional] Using constructor name|848,615,740|95|
|[False conditional] Check if property is valid then instanceof |849,461,541|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:39:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":238925.24082689275,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":181449.87875746156,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183909.14932915338,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848868738.2684655,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848615740.2897859,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":849461541.1584353,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,718|93|
|crypto.verify('RSA-SHA256')|6,741|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:50:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6717.992274129945,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6740.515558387568,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,584,883|98|
|fromUnixToISOString(new Date())|2,127,369|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:00:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2584883.048689806,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2127369.4812063426,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,398|86|
|Intl.DateTimeFormat().format(new Date())|12,515|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,783|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,571|93|
|Reusing Intl.DateTimeFormat()|481,464|81|
|Date.toLocaleDateString()|580,893|100|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,078|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:10:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12397.902183421056,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12514.745166826524,"samples":7},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15782.70105611353,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15571.14621660142,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":481463.9323479556,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":580892.6591167705,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14078.180027627785,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|996,445|97|
|Using brackets {}|951,991|97|
|Using '' + |997,822|95|
|Using date.toString()|1,096,211|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:24:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":996445.4944288247,"samples":7},{"name":"Using brackets {}","opsSec":951990.8655750658,"samples":3},{"name":"Using '' + ","opsSec":997822.4477765108,"samples":6},{"name":"Using date.toString()","opsSec":1096211.4712642503,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,396,855|96|
|Using delete property (proto: null)|23,454,152|96|
|Using delete property (cached proto: null)|3,424,700|95|
|Using undefined assignment|846,843,872|100|
|Using undefined assignment (proto: null)|25,880,444|95|
|Using undefined property (cached proto: null)|844,730,175|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:35:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3396855.3768691267,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23454151.61505042,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3424700.3380157514,"samples":5},{"name":"Using undefined assignment","opsSec":846843872.0626692,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":25880443.85587047,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":844730174.9922055,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|234,076|53|
|NodeError|180,564|94|
|NodeError Range|181,045|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:45:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":234075.98985084044,"samples":3},{"name":"NodeError","opsSec":180564.06675106531,"samples":3},{"name":"NodeError Range","opsSec":181045.05184998544,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,835,093|98|
|Function returning explicitly undefined|1,812,670|94|
|Function returning implicitly undefined|1,855,742|92|
|Function returning string|1,812,482|98|
|Function returning integer|1,847,252|96|
|Function returning float|1,832,637|96|
|Function returning functions|1,771,339|96|
|Function returning arrow functions|1,817,057|98|
|Function returning empty object|1,853,535|98|
|Function returning empty array|1,828,461|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1835092.79790616,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1812670.075631727,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1855741.9376233919,"samples":6},{"name":"Function returning string","opsSec":1812482.0812505702,"samples":5},{"name":"Function returning integer","opsSec":1847252.458260646,"samples":7},{"name":"Function returning float","opsSec":1832636.6642706348,"samples":5},{"name":"Function returning functions","opsSec":1771338.5721204588,"samples":7},{"name":"Function returning arrow functions","opsSec":1817056.926147935,"samples":6},{"name":"Function returning empty object","opsSec":1853535.01181154,"samples":5},{"name":"Function returning empty array","opsSec":1828461.1144877556,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|754,763,898|84|
|using Array.includes (first item)|785,801,477|86|
|Using raw comparison|793,701,804|91|
|Using raw comparison (first item)|750,081,632|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":754763897.8771604,"samples":8},{"name":"using Array.includes (first item)","opsSec":785801476.682705,"samples":6},{"name":"Using raw comparison","opsSec":793701804.4857492,"samples":8},{"name":"Using raw comparison (first item)","opsSec":750081632.1775306,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,584,201|97|
|Using Object.getOwnPropertyNames()|67,810,357|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":67584200.80755392,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":67810357.2882766,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,267,043|91|
|Length = 10_000 - Array.at|13,055,130|90|
|Length = 1_000_000 - Array.at|13,017,089|92|
|Length = 100 - Array[length - 1]|596,405,528|93|
|Length = 10_000 - Array[length - 1]|594,678,634|91|
|Length = 1_000_000 - Array[length - 1]|606,238,766|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13267043.16107722,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":13055130.492993433,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":13017088.872294309,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":596405527.5786836,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":594678634.3247615,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":606238765.9463577,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,114,458|84|
|Object.create({})|814,585|68|
|Cached Empty.prototype|665,399,712|84|
|Empty.prototype|899,354|73|
|Empty class|593,178|71|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":38114458.160805315,"samples":5},{"name":"Object.create({})","opsSec":814585.2893740727,"samples":4},{"name":"Cached Empty.prototype","opsSec":665399711.7645352,"samples":7},{"name":"Empty.prototype","opsSec":899354.1076410958,"samples":3},{"name":"Empty class","opsSec":593177.651611445,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|629,345,297|88|
|Using optional chain (obj.field?.field2) (undefined)|639,830,065|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|638,825,103|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|622,451,027|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":629345297.129566,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":639830065.0819613,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":638825102.6936415,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":622451027.3022897,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,339,063|92|
|Using parseInt(x, 10) - big number (10 len)|14,584,965|96|
|Using + - small number (2 len)|592,779,845|96|
|Using + - big number (10 len)|593,402,074|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":203339062.50233692,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14584964.815536462,"samples":8},{"name":"Using + - small number (2 len)","opsSec":592779844.676323,"samples":6},{"name":"Using + - big number (10 len)","opsSec":593402073.9666631,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|461,779|74|
|Using ? operator to avoid rejection|517,157|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":461779.20655339916,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":517156.6372046946,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|206,750,045|88|
|Raw usage underscore usage|210,974,406|88|
|Manipulating private properties using #|149,086,705|83|
|Manipulating private properties using underscore(_)|126,885,081|90|
|Manipulating private properties using Symbol|126,485,585|92|
|Manipulating private properties using PrivateSymbol|23,396,014|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":206750045.15267664,"samples":6},{"name":"Raw usage underscore usage","opsSec":210974406.14883605,"samples":7},{"name":"Manipulating private properties using #","opsSec":149086705.00429526,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":126885080.72192505,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":126485585.13553186,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":23396013.646906294,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,335,956|90|
|Adding property in the object creation - small object|2,321,547|91|
|Adding property after the function creation - small class|127,332|81|
|Adding property in the function creation - small class|134,359|83|
|Adding property after the class creation - small class|108,056|81|
|Adding property in the class creation - small class|108,281|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2335956.0152767636,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":2321547.3013241366,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":127332.44841373153,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":134359.074403954,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":108056.28588286894,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":108280.68664935039,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|568,214,721|94|
|Getter|43,139,298|96|
|Method|587,869,434|98|
|DefineProperty (getter)|587,242,367|96|
|DefineProperty (getter & enumerable=false)|43,964,895|94|
|DefineProperty (getter & configurable=false)|588,474,767|96|
|DefineProperty (getter & enumerable=false & configurable=false)|44,009,991|95|
|DefineProperty (writable)|587,293,756|92|
|DefineProperty (writable & enumerable=false)|565,585,642|91|
|DefineProperty (writable & enumerable=false & configurable=false)|213,909,780|40|
|DefineProperties (getter)|27,717,463|92|
|DefineProperties (getter & enumerable=false)|43,823,299|95|
|DefineProperties (getter & enumerable=false & configurable=false)|43,620,044|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":568214720.8115177,"samples":6},{"name":"Getter","opsSec":43139298.38702793,"samples":7},{"name":"Method","opsSec":587869433.7803354,"samples":8},{"name":"DefineProperty (getter)","opsSec":587242366.7580006,"samples":11},{"name":"DefineProperty (getter & enumerable=false)","opsSec":43964894.85569145,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":588474766.6695818,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":44009990.64854625,"samples":7},{"name":"DefineProperty (writable)","opsSec":587293755.9035716,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":565585642.4451222,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":213909779.94864962,"samples":9},{"name":"DefineProperties (getter)","opsSec":27717463.379753303,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":43823299.267246015,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":43620043.61490927,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|473,743,414|96|
|Setter|7,511,648|99|
|Method|475,904,953|97|
|DefineProperty (setter)|475,635,672|95|
|DefineProperty (setter & enumerable=false)|7,421,817|98|
|DefineProperty (setter & configurable=false)|7,439,984|99|
|DefineProperty (setter & enumerable=false & configurable=false)|7,417,731|98|
|DefineProperty (writable)|708,028,771|92|
|DefineProperty (writable & enumerable=false)|708,561,444|95|
|DefineProperty (writable & enumerable=false & configurable=false)|708,119,467|99|
|DefineProperties (setter)|307,856,261|45|
|DefineProperties (setter & enumerable=false)|6,799,864|97|
|DefineProperties (setter & enumerable=false & configurable=false)|6,769,192|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":473743413.9514346,"samples":7},{"name":"Setter","opsSec":7511647.676952753,"samples":6},{"name":"Method","opsSec":475904952.6214233,"samples":10},{"name":"DefineProperty (setter)","opsSec":475635671.7319749,"samples":10},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7421816.878246935,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7439983.725434065,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7417731.077410906,"samples":8},{"name":"DefineProperty (writable)","opsSec":708028771.2213888,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":708561443.9119787,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":708119466.8636388,"samples":8},{"name":"DefineProperties (setter)","opsSec":307856261.1910923,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6799863.671806135,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6769191.882478211,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,818,548|84|
|Using replaceAll()|1,711,644|91|
|Using replaceAll(//g)|1,663,499|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1818548.4776414393,"samples":5},{"name":"Using replaceAll()","opsSec":1711643.6426983718,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1663498.8159040404,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,973,856|93|
|{ ...object, __proto__: null }|15,250,906|94|
|{ ...object, newProp: true }|454,555|84|
|structuredClone|174,971|91|
|JSON.parse + JSON.stringify|147,735|96|
|loop + object.keys starting with {}|658,030|97|
|loop + object.keys starting with { __proto__: null }|420,846|98|
|loop + object.keys starting with { randomProp: true }|308,772|96|
|object.keys + reduce(FN, {})|293,097|96|
|object.keys + reduce(FN, { __proto__: null })|415,194|96|
|object.keys + reduce(FN, { newProp: true })|301,646|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":14973856.109967947,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":15250905.908839418,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":454555.4395373111,"samples":3},{"name":"structuredClone","opsSec":174970.9821200697,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":147734.72191125457,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":658030.3213166612,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":420846.39852423273,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":308772.31918952806,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":293096.62529358896,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":415194.33234738227,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":301646.1421777729,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|157,481|86|
|Sort using first char|766,382|92|
|Sort using localeCompare|680,009|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":157481.41003317625,"samples":4},{"name":"Sort using first char","opsSec":766381.7173477566,"samples":7},{"name":"Sort using localeCompare","opsSec":680008.9606415936,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,348|94|
|{...smallObject} - Total keys: 2|75,842,863|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,560|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,393|96|
|{ ...bigObject, ...anotherBigObject }|810|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,581,000|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,331,504|93|
|{ ...smallObject, ...anotherSmallObject }|16,512,859|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1348.473608141412,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":75842862.74764885,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1560.3376267089775,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4393.390763950163,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":809.8133333213416,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9580999.54491503,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":25331503.598787677,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16512859.345739853,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,585|82|
|streams.web.Readable reading 1e3 * "some data"|437|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1585.218450523065,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":436.5446781247475,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,258|83|
|streams.web.WritableStream writing 1e3 * "some data"|879|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3258.425082669411,"samples":7},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":879.4668956706267,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|793,583,621|83|
|Using backtick (`)|819,408,768|84|
|Using array.join|6,282,370|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":793583621.3882593,"samples":8},{"name":"Using backtick (`)","opsSec":819408768.0888501,"samples":7},{"name":"Using array.join","opsSec":6282370.36249109,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,257,760|97|
|Using indexof|714,546,479|99|
|Using RegExp.test|10,941,202|99|
|Using RegExp.text with cached regex pattern|11,259,867|96|
|Using new RegExp.test|3,008,127|96|
|Using new RegExp.test with cached regex pattern|3,473,184|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":714257759.770902,"samples":8},{"name":"Using indexof","opsSec":714546478.6957994,"samples":7},{"name":"Using RegExp.test","opsSec":10941201.659057654,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11259867.214007856,"samples":6},{"name":"Using new RegExp.test","opsSec":3008126.6891231304,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3473184.250767408,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,427,894|90|
|Using this|134,410,106|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":131427894.06768356,"samples":6},{"name":"Using this","opsSec":134410105.9680441,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,504,975|96|
|Date.now()|15,477,140|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7504975.082936297,"samples":5},{"name":"Date.now()","opsSec":15477139.602749502,"samples":6}]}-->

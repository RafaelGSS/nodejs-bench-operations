## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|570,659,597|92|
|Using dot notation|585,830,378|92|
|Using define property (writable)|2,410,346|95|
|Using define property initialized (writable)|3,040,983|94|
|Using define property (getter)|1,267,524|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":570659597.1228856,"samples":7},{"name":"Using dot notation","opsSec":585830378.0294738,"samples":8},{"name":"Using define property (writable)","opsSec":2410345.531767152,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3040983.3671818683,"samples":6},{"name":"Using define property (getter)","opsSec":1267524.487084279,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.01ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.384ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|40.832ms
new Array(length)|1,000,000|7.033ms
array.push|100,000,000|1,551.469ms
new Array(length)|100,000,000|4,366.957ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.601ms
new Array(length)|10,000|4.34ms
array.push|1,000,000|319.931ms
new Array(length)|1,000,000|4.054ms
array.push|100,000,000|2,190.372ms
new Array(length)|100,000,000|4,821.431ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|69|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":308.9086504676448,"samples":5},{"name":"Array.from","opsSec":14.55278821404406,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,880|87|
|new Blob (1024)|363|69|
|text (128)|26,893|65|
|text (1024)|18,281|83|
|arrayBuffer (128)|26,513|80|
|arrayBuffer (1024)|18,721|83|
|slice (0, 64)|55,914|77|
|slice (0, 512)|34,356|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2879.754507296435,"samples":4},{"name":"new Blob (1024)","opsSec":362.93789739156887,"samples":2},{"name":"text (128)","opsSec":26892.54864639577,"samples":3},{"name":"text (1024)","opsSec":18280.59022978663,"samples":4},{"name":"arrayBuffer (128)","opsSec":26512.739555712447,"samples":3},{"name":"arrayBuffer (1024)","opsSec":18721.44371026026,"samples":3},{"name":"slice (0, 64)","opsSec":55913.94785695802,"samples":3},{"name":"slice (0, 512)","opsSec":34356.33201675555,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,867|59|
|[True conditional] Using constructor name|123,116|92|
|[True conditional] Check if property is valid then instanceof |125,520|87|
|[False conditional] Using instanceof only|618,414,432|89|
|[False conditional] Using constructor name|623,393,970|88|
|[False conditional] Check if property is valid then instanceof |661,685,214|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":164867.12776311286,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":123115.62952362682,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":125519.70478486127,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":618414431.5622146,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":623393970.3612261,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":661685214.2276506,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,775|91|
|crypto.verify('RSA-SHA256')|4,611|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4775.389813703348,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":4610.601334405286,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,543,283|89|
|fromUnixToISOString(new Date())|1,287,535|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1543282.744536282,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1287534.6551054954,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,042|76|
|Intl.DateTimeFormat().format(new Date())|6,104|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,737|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,019|71|
|Reusing Intl.DateTimeFormat()|426,584|90|
|Date.toLocaleDateString()|351,446|80|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,501|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5042.19822652876,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":6103.603672097857,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5736.681449513852,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":5019.119580250903,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":426584.21759409504,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":351446.39512612834,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6501.146034994636,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|673,964|95|
|Using brackets {}|675,999|94|
|Using '' + |680,518|94|
|Using date.toString()|729,422|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":673963.971121304,"samples":6},{"name":"Using brackets {}","opsSec":675999.3141837417,"samples":3},{"name":"Using '' + ","opsSec":680518.4572787951,"samples":4},{"name":"Using date.toString()","opsSec":729422.1617296027,"samples":3}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,006,846|87|
|Using delete property (proto: null)|9,591,043|89|
|Using delete property (cached proto: null)|2,025,309|91|
|Using undefined assignment|644,339,132|84|
|Using undefined assignment (proto: null)|12,647,331|88|
|Using undefined property (cached proto: null)|635,647,257|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2006845.9449217245,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9591042.781750834,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2025308.962914075,"samples":6},{"name":"Using undefined assignment","opsSec":644339131.812047,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":12647330.50804694,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":635647256.9027691,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,300|54|
|NodeError|127,840|92|
|NodeError Range|128,356|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":165300.1146253776,"samples":4},{"name":"NodeError","opsSec":127840.13627881891,"samples":3},{"name":"NodeError Range","opsSec":128356.39664701212,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,349,728|93|
|Function returning explicitly undefined|1,344,114|95|
|Function returning implicitly undefined|1,369,933|93|
|Function returning string|1,360,070|95|
|Function returning integer|1,363,682|94|
|Function returning float|1,368,686|96|
|Function returning functions|1,322,963|96|
|Function returning arrow functions|1,326,155|95|
|Function returning empty object|1,353,752|97|
|Function returning empty array|1,350,494|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1349728.089963084,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1344114.3566508286,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1369933.2048434087,"samples":6},{"name":"Function returning string","opsSec":1360070.0339710398,"samples":5},{"name":"Function returning integer","opsSec":1363681.9435561732,"samples":6},{"name":"Function returning float","opsSec":1368685.6659016781,"samples":6},{"name":"Function returning functions","opsSec":1322963.2222790562,"samples":5},{"name":"Function returning arrow functions","opsSec":1326154.8578961862,"samples":6},{"name":"Function returning empty object","opsSec":1353752.3106438396,"samples":5},{"name":"Function returning empty array","opsSec":1350494.4864527485,"samples":5}]}-->

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

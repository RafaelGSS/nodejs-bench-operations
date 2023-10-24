## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|695,281,859|84|
|Using dot notation|588,071,604|81|
|Using define property (writable)|2,320,144|88|
|Using define property initialized (writable)|2,901,227|83|
|Using define property (getter)|1,140,204|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":695281858.900967,"samples":8},{"name":"Using dot notation","opsSec":588071603.9380878,"samples":7},{"name":"Using define property (writable)","opsSec":2320143.7917821673,"samples":4},{"name":"Using define property initialized (writable)","opsSec":2901227.27833272,"samples":5},{"name":"Using define property (getter)","opsSec":1140204.457488914,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.034ms
new Array(length)|100|0.011ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.55ms
new Array(length)|10,000|0.283ms
array.push|1,000,000|53.556ms
new Array(length)|1,000,000|7.152ms
array.push|100,000,000|2,255.266ms
new Array(length)|100,000,000|5,471.764ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.018ms
new Array(length)|100|0.014ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.042ms
array.push|10,000|0.722ms
new Array(length)|10,000|4.885ms
array.push|1,000,000|391.919ms
new Array(length)|1,000,000|5.448ms
array.push|100,000,000|3,193.045ms
new Array(length)|100,000,000|6,464.699ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|261|79|
|Array.from|12|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":260.95876786438464,"samples":4},{"name":"Array.from","opsSec":11.817705650591044,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,152|88|
|new Blob (1024)|388|67|
|text (128)|31,614|66|
|text (1024)|20,728|84|
|arrayBuffer (128)|31,523|83|
|arrayBuffer (1024)|21,496|88|
|slice (0, 64)|55,396|75|
|slice (0, 512)|31,508|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3152.030460852718,"samples":4},{"name":"new Blob (1024)","opsSec":387.9989221577653,"samples":2},{"name":"text (128)","opsSec":31613.559854198076,"samples":3},{"name":"text (1024)","opsSec":20728.21561537973,"samples":3},{"name":"arrayBuffer (128)","opsSec":31523.268430217275,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21496.2188337662,"samples":3},{"name":"slice (0, 64)","opsSec":55396.13545230414,"samples":4},{"name":"slice (0, 512)","opsSec":31507.704233406846,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|182,062|56|
|[True conditional] Using constructor name|144,416|92|
|[True conditional] Check if property is valid then instanceof |144,434|93|
|[False conditional] Using instanceof only|710,071,309|94|
|[False conditional] Using constructor name|711,334,395|99|
|[False conditional] Check if property is valid then instanceof |709,527,134|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":182062.3572310811,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":144415.8291504846,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":144434.05338431467,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710071308.9308871,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":711334395.2177022,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":709527134.2716991,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,278|85|
|crypto.verify('RSA-SHA256')|3,368|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3278.0496334182712,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3367.6278991660297,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,258,423|86|
|fromUnixToISOString(new Date())|997,462|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1258422.641301338,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":997462.0310220224,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,020|83|
|Intl.DateTimeFormat().format(new Date())|9,992|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,698|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,889|85|
|Reusing Intl.DateTimeFormat()|379,900|96|
|Date.toLocaleDateString()|464,073|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,919|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10020.448718728576,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9992.131544466682,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11697.696181193474,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10888.53362269811,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":379899.61678800656,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":464072.68197089166,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10918.777730983153,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|669,899|98|
|Using brackets {}|676,975|98|
|Using '' + |672,536|96|
|Using date.toString()|736,496|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":669898.9395890161,"samples":3},{"name":"Using brackets {}","opsSec":676975.4350389527,"samples":7},{"name":"Using '' + ","opsSec":672536.2483644421,"samples":6},{"name":"Using date.toString()","opsSec":736496.449342291,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,645,919|88|
|Using delete property (proto: null)|9,966,275|86|
|Using delete property (cached proto: null)|1,483,836|78|
|Using undefined assignment|626,019,729|87|
|Using undefined assignment (proto: null)|11,791,843|86|
|Using undefined property (cached proto: null)|551,637,873|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":1645919.3491459824,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9966275.162971672,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":1483836.149898622,"samples":7},{"name":"Using undefined assignment","opsSec":626019729.4123694,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":11791842.922232747,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":551637873.2356355,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|176,273|53|
|NodeError|139,502|92|
|NodeError Range|140,192|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Error","opsSec":176272.6122150345,"samples":4},{"name":"NodeError","opsSec":139501.86584137072,"samples":3},{"name":"NodeError Range","opsSec":140191.51263170064,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,277,686|92|
|Function returning explicitly undefined|1,231,898|92|
|Function returning implicitly undefined|1,246,518|90|
|Function returning string|1,275,684|91|
|Function returning integer|1,316,538|93|
|Function returning float|1,297,040|91|
|Function returning functions|1,246,731|93|
|Function returning arrow functions|1,276,580|96|
|Function returning empty object|1,300,724|95|
|Function returning empty array|1,291,177|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1277685.8581701294,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1231897.5030168307,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1246518.0172205986,"samples":6},{"name":"Function returning string","opsSec":1275683.5674011803,"samples":7},{"name":"Function returning integer","opsSec":1316538.3187882076,"samples":6},{"name":"Function returning float","opsSec":1297040.1746325372,"samples":7},{"name":"Function returning functions","opsSec":1246731.2513834944,"samples":9},{"name":"Function returning arrow functions","opsSec":1276579.7304058475,"samples":7},{"name":"Function returning empty object","opsSec":1300723.5607051414,"samples":5},{"name":"Function returning empty array","opsSec":1291177.16382715,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|706,687,133|96|
|using Array.includes (first item)|712,017,955|98|
|Using raw comparison|713,642,902|96|
|Using raw comparison (first item)|711,710,881|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"using Array.includes","opsSec":706687132.7685359,"samples":9},{"name":"using Array.includes (first item)","opsSec":712017954.8574747,"samples":6},{"name":"Using raw comparison","opsSec":713642902.1723611,"samples":6},{"name":"Using raw comparison (first item)","opsSec":711710881.2252192,"samples":10}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,368,136|85|
|Using Object.getOwnPropertyNames()|43,031,416|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":42368136.31052481,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":43031415.9900131,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,803,050|84|
|Length = 10_000 - Array.at|15,350,499|87|
|Length = 1_000_000 - Array.at|15,390,370|91|
|Length = 100 - Array[length - 1]|718,383,640|87|
|Length = 10_000 - Array[length - 1]|717,697,684|86|
|Length = 1_000_000 - Array[length - 1]|726,403,355|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14803050.149390005,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":15350499.283007946,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":15390369.980549054,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":718383639.707176,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":717697684.1483736,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":726403355.2433705,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,716,951|89|
|Object.create({})|826,542|73|
|Cached Empty.prototype|591,290,566|96|
|Empty.prototype|879,643|74|
|Empty class|626,201|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":37716951.07499896,"samples":6},{"name":"Object.create({})","opsSec":826542.0271547645,"samples":4},{"name":"Cached Empty.prototype","opsSec":591290566.4709147,"samples":9},{"name":"Empty.prototype","opsSec":879642.6075022463,"samples":3},{"name":"Empty class","opsSec":626200.6384387305,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,741,320|94|
|Using optional chain (obj.field?.field2) (undefined)|708,298,777|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,642,740|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,965,724|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":709741319.9193391,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":708298776.8257365,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":709642740.203177,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":708965723.7828028,"samples":9}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|158,380,282|98|
|Using parseInt(x, 10) - big number (10 len)|14,077,002|96|
|Using + - small number (2 len)|710,816,940|98|
|Using + - big number (10 len)|709,980,539|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":158380282.45844007,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14077002.354949778,"samples":9},{"name":"Using + - small number (2 len)","opsSec":710816940.2885693,"samples":7},{"name":"Using + - big number (10 len)","opsSec":709980539.4072638,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|483,768|74|
|Using ? operator to avoid rejection|523,902|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":483768.28621441673,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":523901.79508402466,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|250,027,161|90|
|Raw usage underscore usage|261,174,347|95|
|Manipulating private properties using #|188,049,416|95|
|Manipulating private properties using underscore(_)|183,657,582|91|
|Manipulating private properties using Symbol|184,413,485|92|
|Manipulating private properties using PrivateSymbol|36,362,902|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":250027160.84362474,"samples":6},{"name":"Raw usage underscore usage","opsSec":261174347.16139615,"samples":7},{"name":"Manipulating private properties using #","opsSec":188049415.67715707,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":183657582.34564096,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":184413485.0076941,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36362902.00388521,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,964,839|98|
|Adding property in the object creation - small object|1,964,816|95|
|Adding property after the function creation - small class|148,328|84|
|Adding property in the function creation - small class|146,573|86|
|Adding property after the class creation - small class|121,812|82|
|Adding property in the class creation - small class|121,026|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1964838.8537229435,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1964816.2692240006,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":148328.18906499443,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":146572.6952300472,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":121812.13925804,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":121025.82897449717,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|586,204,334|96|
|Getter|43,911,645|93|
|Method|598,495,572|93|
|DefineProperty (getter)|598,054,668|94|
|DefineProperty (getter & enumerable=false)|44,244,485|92|
|DefineProperty (getter & configurable=false)|597,395,732|94|
|DefineProperty (getter & enumerable=false & configurable=false)|44,289,020|91|
|DefineProperty (writable)|592,924,785|93|
|DefineProperty (writable & enumerable=false)|600,508,461|94|
|DefineProperty (writable & enumerable=false & configurable=false)|601,526,395|91|
|DefineProperties (getter)|34,452,476|76|
|DefineProperties (getter & enumerable=false)|44,603,112|93|
|DefineProperties (getter & enumerable=false & configurable=false)|44,223,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Getter (class)","opsSec":586204334.3223919,"samples":6},{"name":"Getter","opsSec":43911644.68038753,"samples":5},{"name":"Method","opsSec":598495572.1469394,"samples":6},{"name":"DefineProperty (getter)","opsSec":598054668.3880986,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":44244484.67803517,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":597395731.7323202,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":44289019.55545369,"samples":6},{"name":"DefineProperty (writable)","opsSec":592924785.2533602,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":600508461.2979916,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":601526395.4421029,"samples":6},{"name":"DefineProperties (getter)","opsSec":34452476.14912288,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":44603112.28274886,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":44223194.21136635,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|470,236,603|95|
|Setter|7,584,404|98|
|Method|474,581,446|95|
|DefineProperty (setter)|472,719,962|95|
|DefineProperty (setter & enumerable=false)|7,238,966|96|
|DefineProperty (setter & configurable=false)|7,591,407|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,585,889|92|
|DefineProperty (writable)|706,237,900|97|
|DefineProperty (writable & enumerable=false)|114,280,867|17|
|DefineProperty (writable & enumerable=false & configurable=false)|81,183,149|80|
|DefineProperties (setter)|60,551,865|84|
|DefineProperties (setter & enumerable=false)|6,778,107|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,456,071|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":470236603.26226556,"samples":6},{"name":"Setter","opsSec":7584404.158396774,"samples":6},{"name":"Method","opsSec":474581445.67165065,"samples":7},{"name":"DefineProperty (setter)","opsSec":472719961.7573935,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7238965.5395196,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7591406.8977264045,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7585888.571802496,"samples":5},{"name":"DefineProperty (writable)","opsSec":706237900.4787194,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":114280867.02495912,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":81183148.5531953,"samples":7},{"name":"DefineProperties (setter)","opsSec":60551865.42832905,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6778106.764135617,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7456071.488787084,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,107,780|96|
|Using replaceAll()|1,998,614|95|
|Using replaceAll(//g)|1,893,526|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2107780.409275513,"samples":7},{"name":"Using replaceAll()","opsSec":1998613.5556424712,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1893525.5619247204,"samples":8}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,286,041|92|
|{ ...object, __proto__: null }|15,555,016|96|
|{ ...object, newProp: true }|452,862|78|
|structuredClone|176,673|98|
|JSON.parse + JSON.stringify|147,341|95|
|loop + object.keys starting with {}|672,077|96|
|loop + object.keys starting with { __proto__: null }|428,357|98|
|loop + object.keys starting with { randomProp: true }|314,325|98|
|object.keys + reduce(FN, {})|676,076|95|
|object.keys + reduce(FN, { __proto__: null })|422,873|93|
|object.keys + reduce(FN, { newProp: true })|322,355|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15286041.237427384,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15555016.160934266,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":452861.61761314893,"samples":3},{"name":"structuredClone","opsSec":176673.00576178925,"samples":10},{"name":"JSON.parse + JSON.stringify","opsSec":147341.44251633846,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":672076.5766873166,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":428356.7322576324,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":314324.80230980593,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":676076.3071081657,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":422872.6345137444,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":322355.3076085978,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|139,192|92|
|Sort using first char|622,537|96|
|Sort using localeCompare|560,135|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":139191.55206183044,"samples":5},{"name":"Sort using first char","opsSec":622536.857567679,"samples":6},{"name":"Sort using localeCompare","opsSec":560134.6298025483,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,331|92|
|{...smallObject} - Total keys: 2|76,516,312|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,524|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,416|96|
|{ ...bigObject, ...anotherBigObject }|832|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,146,937|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,590,790|97|
|{ ...smallObject, ...anotherSmallObject }|16,586,220|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1330.6894617536154,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":76516312.05385968,"samples":8},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1524.1036210058185,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4415.918553494069,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":831.7064064782643,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":10146937.01332543,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":25590790.443093907,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16586220.102061722,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,631|86|
|streams.web.Readable reading 1e3 * "some data"|420|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1630.9178747889825,"samples":6},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":419.72978538748777,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,779|91|
|streams.web.WritableStream writing 1e3 * "some data"|803|53|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2779.3541745501975,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":802.5724275359393,"samples":2}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,560,861|97|
|Using backtick (`)|712,472,077|98|
|Using array.join|6,211,350|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":712560860.9316577,"samples":7},{"name":"Using backtick (`)","opsSec":712472076.5780462,"samples":6},{"name":"Using array.join","opsSec":6211350.343042749,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|688,752,661|89|
|Using indexof|694,149,410|87|
|Using RegExp.test|9,240,146|87|
|Using RegExp.text with cached regex pattern|9,920,021|88|
|Using new RegExp.test|2,295,876|86|
|Using new RegExp.test with cached regex pattern|2,758,731|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":688752661.1334761,"samples":9},{"name":"Using indexof","opsSec":694149409.6367636,"samples":6},{"name":"Using RegExp.test","opsSec":9240145.65300417,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":9920021.251961557,"samples":6},{"name":"Using new RegExp.test","opsSec":2295876.176967583,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2758731.156435859,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|130,710,317|88|
|Using this|132,201,365|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":130710317.35104145,"samples":6},{"name":"Using this","opsSec":132201365.44874254,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,534,548|96|
|Date.now()|15,152,903|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7534547.607374597,"samples":6},{"name":"Date.now()","opsSec":15152902.72955485,"samples":5}]}-->

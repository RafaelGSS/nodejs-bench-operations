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
|using Array.includes|745,351,078|87|
|using Array.includes (first item)|740,323,099|87|
|Using raw comparison|733,376,614|83|
|Using raw comparison (first item)|724,490,731|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":745351078.1577241,"samples":7},{"name":"using Array.includes (first item)","opsSec":740323098.8802328,"samples":6},{"name":"Using raw comparison","opsSec":733376613.6945821,"samples":7},{"name":"Using raw comparison (first item)","opsSec":724490731.0334412,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,617,339|78|
|Using Object.getOwnPropertyNames()|46,155,844|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":53617339.194245934,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":46155844.36253286,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,557,598|95|
|Length = 10_000 - Array.at|18,618,662|96|
|Length = 1_000_000 - Array.at|18,630,253|96|
|Length = 100 - Array[length - 1]|589,128,315|98|
|Length = 10_000 - Array[length - 1]|589,124,982|95|
|Length = 1_000_000 - Array[length - 1]|589,519,827|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18557598.351042245,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":18618661.608132984,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18630253.018077005,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":589128314.9421817,"samples":10},{"name":"Length = 10_000 - Array[length - 1]","opsSec":589124982.162378,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":589519827.2884185,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,148,789|92|
|Object.create({})|810,137|71|
|Cached Empty.prototype|588,082,791|96|
|Empty.prototype|864,617|76|
|Empty class|613,422|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":38148788.54867026,"samples":5},{"name":"Object.create({})","opsSec":810137.2885149219,"samples":4},{"name":"Cached Empty.prototype","opsSec":588082790.6339048,"samples":7},{"name":"Empty.prototype","opsSec":864617.0140534561,"samples":3},{"name":"Empty class","opsSec":613422.0147199002,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|702,670,103|85|
|Using optional chain (obj.field?.field2) (undefined)|711,029,323|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|718,486,354|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,960,379|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":702670103.3076619,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":711029323.1888188,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":718486353.5767224,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":714960378.7442616,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|129,968,406|83|
|Using parseInt(x, 10) - big number (10 len)|11,954,708|90|
|Using + - small number (2 len)|599,707,592|92|
|Using + - big number (10 len)|591,269,704|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129968406.28584336,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11954708.220006684,"samples":8},{"name":"Using + - small number (2 len)","opsSec":599707591.8495234,"samples":7},{"name":"Using + - big number (10 len)","opsSec":591269704.0287939,"samples":9}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|446,880|73|
|Using ? operator to avoid rejection|458,549|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":446880.39101933496,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":458548.75151626265,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|181,701,731|89|
|Raw usage underscore usage|189,567,970|87|
|Manipulating private properties using #|131,759,768|87|
|Manipulating private properties using underscore(_)|115,491,590|91|
|Manipulating private properties using Symbol|116,007,746|88|
|Manipulating private properties using PrivateSymbol|21,908,179|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":181701730.67184445,"samples":7},{"name":"Raw usage underscore usage","opsSec":189567970.44203952,"samples":7},{"name":"Manipulating private properties using #","opsSec":131759767.69631453,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":115491590.32095617,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":116007745.99126281,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21908179.39757548,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,125,838|81|
|Adding property in the object creation - small object|2,162,923|90|
|Adding property after the function creation - small class|122,657|82|
|Adding property in the function creation - small class|121,573|82|
|Adding property after the class creation - small class|101,780|79|
|Adding property in the class creation - small class|102,221|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2125838.0234026993,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":2162923.102766822,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":122657.20770159758,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":121572.84018101917,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":101780.12111581322,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":102221.20229318323,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|707,589,144|96|
|Getter|52,794,411|97|
|Method|707,800,433|94|
|DefineProperty (getter)|707,407,945|98|
|DefineProperty (getter & enumerable=false)|52,654,553|93|
|DefineProperty (getter & configurable=false)|706,759,827|99|
|DefineProperty (getter & enumerable=false & configurable=false)|52,604,150|97|
|DefineProperty (writable)|707,409,400|95|
|DefineProperty (writable & enumerable=false)|708,082,333|96|
|DefineProperty (writable & enumerable=false & configurable=false)|179,970,087|26|
|DefineProperties (getter)|32,427,643|89|
|DefineProperties (getter & enumerable=false)|53,075,186|96|
|DefineProperties (getter & enumerable=false & configurable=false)|52,717,327|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":707589143.8695506,"samples":9},{"name":"Getter","opsSec":52794411.179088816,"samples":8},{"name":"Method","opsSec":707800432.7745126,"samples":6},{"name":"DefineProperty (getter)","opsSec":707407944.7180982,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52654552.54530432,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":706759827.3194871,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52604149.60261449,"samples":7},{"name":"DefineProperty (writable)","opsSec":707409400.1726266,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":708082333.1216109,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":179970087.38117823,"samples":6},{"name":"DefineProperties (getter)","opsSec":32427643.165990204,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53075186.37127027,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52717327.16830748,"samples":9}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|601,364,682|84|
|Setter|6,290,211|87|
|Method|598,448,700|87|
|DefineProperty (setter)|581,524,509|86|
|DefineProperty (setter & enumerable=false)|5,903,149|89|
|DefineProperty (setter & configurable=false)|6,017,230|86|
|DefineProperty (setter & enumerable=false & configurable=false)|6,079,634|89|
|DefineProperty (writable)|686,630,516|90|
|DefineProperty (writable & enumerable=false)|393,884,181|55|
|DefineProperty (writable & enumerable=false & configurable=false)|75,301,593|73|
|DefineProperties (setter)|61,245,230|79|
|DefineProperties (setter & enumerable=false)|5,704,803|89|
|DefineProperties (setter & enumerable=false & configurable=false)|6,377,723|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":601364681.5545217,"samples":5},{"name":"Setter","opsSec":6290211.47022825,"samples":9},{"name":"Method","opsSec":598448699.8587598,"samples":9},{"name":"DefineProperty (setter)","opsSec":581524508.5225494,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5903148.706284188,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6017230.33104378,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6079634.031446778,"samples":5},{"name":"DefineProperty (writable)","opsSec":686630515.6881071,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":393884181.38446265,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":75301592.6066736,"samples":6},{"name":"DefineProperties (setter)","opsSec":61245229.807232544,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5704803.095944642,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6377722.670214731,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,396,651|91|
|Using replaceAll()|2,175,079|95|
|Using replaceAll(//g)|2,144,481|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":2396651.1392480046,"samples":5},{"name":"Using replaceAll()","opsSec":2175079.1694188705,"samples":7},{"name":"Using replaceAll(//g)","opsSec":2144480.605679037,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,225,905|94|
|{ ...object, __proto__: null }|12,108,200|94|
|{ ...object, newProp: true }|376,125|74|
|structuredClone|142,912|92|
|JSON.parse + JSON.stringify|123,283|96|
|loop + object.keys starting with {}|557,098|95|
|loop + object.keys starting with { __proto__: null }|351,194|94|
|loop + object.keys starting with { randomProp: true }|260,468|95|
|object.keys + reduce(FN, {})|251,171|96|
|object.keys + reduce(FN, { __proto__: null })|355,714|94|
|object.keys + reduce(FN, { newProp: true })|262,156|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":12225905.040838035,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":12108199.93222299,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":376125.114694793,"samples":3},{"name":"structuredClone","opsSec":142911.88836042865,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":123282.63779483731,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":557098.4594274142,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":351194.13200181304,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":260468.00734445718,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":251170.54991967647,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":355714.35815250786,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":262156.43380635016,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,529|97|
|Sort using first char|839,721|95|
|Sort using localeCompare|762,885|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:34:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":190528.82197318022,"samples":6},{"name":"Sort using first char","opsSec":839721.1584252584,"samples":6},{"name":"Sort using localeCompare","opsSec":762885.36995449,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,118|86|
|{...smallObject} - Total keys: 2|54,223,657|86|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,134|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,122|86|
|{ ...bigObject, ...anotherBigObject }|686|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,126,679|82|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,416,226|87|
|{ ...smallObject, ...anotherSmallObject }|12,916,049|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1117.7628806761486,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":54223656.64248248,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1133.5750334695767,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3121.713540917329,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":685.7271354729049,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8126678.807799977,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":20416225.61873879,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12916049.331189174,"samples":4}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,285|87|
|streams.web.Readable reading 1e3 * "some data"|419|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:42:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1284.8139607339617,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":418.8726111571709,"samples":5}]}-->

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

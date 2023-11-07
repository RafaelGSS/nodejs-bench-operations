## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,064,487|91|
|Using dot notation|680,391,326|99|
|Using define property (writable)|4,519,380|96|
|Using define property initialized (writable)|6,443,327|96|
|Using define property (getter)|2,469,749|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:57:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":847064487.0915711,"samples":6},{"name":"Using dot notation","opsSec":680391326.4644071,"samples":8},{"name":"Using define property (writable)","opsSec":4519379.650730098,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6443326.920516256,"samples":5},{"name":"Using define property (getter)","opsSec":2469748.8582799397,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.002ms
array.push|100|0.075ms
new Array(length)|100|0.01ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.155ms
array.push|1,000,000|26.758ms
new Array(length)|1,000,000|6.808ms
array.push|100,000,000|1,705.45ms
new Array(length)|100,000,000|3,579.748ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.334ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|18.851ms
new Array(length)|1,000,000|7.514ms
array.push|100,000,000|1,960.328ms
new Array(length)|100,000,000|4,276.416ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|86|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:11:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":303.44024478227345,"samples":4},{"name":"Array.from","opsSec":22.91329505713221,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,030,478|97|
|[async] async function|17,421,265|88|
|[async] function|178,736|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846030478.3479972,"samples":6},{"name":"[async] async function","opsSec":17421265.35641136,"samples":7},{"name":"[async] function","opsSec":178735.71804531565,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,812|87|
|new Blob (1024)|587|73|
|text (128)|4,936|85|
|text (1024)|617|87|
|arrayBuffer (128)|4,923|87|
|arrayBuffer (1024)|615|87|
|slice (0, 64)|168,177|57|
|slice (0, 512)|29,925|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:33:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4812.253534016254,"samples":8},{"name":"new Blob (1024)","opsSec":587.1688912737525,"samples":2},{"name":"text (128)","opsSec":4935.913853951404,"samples":5},{"name":"text (1024)","opsSec":617.148106964497,"samples":3},{"name":"arrayBuffer (128)","opsSec":4923.386108099483,"samples":4},{"name":"arrayBuffer (1024)","opsSec":615.0943467541347,"samples":2},{"name":"slice (0, 64)","opsSec":168177.28475880792,"samples":4},{"name":"slice (0, 512)","opsSec":29925.30912774519,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,220|49|
|[True conditional] Using constructor name|185,205|93|
|[True conditional] Check if property is valid then instanceof |185,891|93|
|[False conditional] Using instanceof only|847,103,378|100|
|[False conditional] Using constructor name|846,508,411|95|
|[False conditional] Check if property is valid then instanceof |848,261,881|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":231219.53187162467,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185205.1936055138,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":185891.28061579863,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847103377.5816537,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":846508411.4443091,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848261880.5215658,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,358|92|
|crypto.verify('RSA-SHA256')|6,324|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:09:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6357.860446230705,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6324.091811516023,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,483,398|92|
|fromUnixToISOString(new Date())|2,187,871|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:10:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1483398.2436451355,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":2187870.9465366066,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,313|80|
|Intl.DateTimeFormat().format(new Date())|11,290|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,283|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,607|76|
|Reusing Intl.DateTimeFormat()|481,251|86|
|Date.toLocaleDateString()|464,119|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,703|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:11:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10312.688792421455,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11289.86064729094,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12282.55434950144,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11606.844633386112,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":481251.2479674371,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":464118.5076270662,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12703.219418464932,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,215|93|
|Using brackets {}|724,712|97|
|Using '' + |719,196|98|
|Using date.toString()|773,932|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":703214.9877394234,"samples":5},{"name":"Using brackets {}","opsSec":724712.2778841893,"samples":5},{"name":"Using '' + ","opsSec":719196.4954585568,"samples":5},{"name":"Using date.toString()","opsSec":773932.4270978996,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,874,583|95|
|Using delete property (proto: null)|13,965,148|98|
|Using delete property (cached proto: null)|2,901,961|97|
|Using undefined assignment|709,383,723|96|
|Using undefined assignment (proto: null)|15,203,266|94|
|Using undefined property (cached proto: null)|711,567,261|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:15:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2874582.511943404,"samples":4},{"name":"Using delete property (proto: null)","opsSec":13965147.723686738,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2901961.245361903,"samples":6},{"name":"Using undefined assignment","opsSec":709383723.4963546,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":15203265.655995462,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":711567261.0928358,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|246,014|53|
|NodeError|205,321|94|
|NodeError Range|204,643|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:16:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Error","opsSec":246014.23073437423,"samples":3},{"name":"NodeError","opsSec":205320.87775352626,"samples":3},{"name":"NodeError Range","opsSec":204643.26785462163,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,524,672|95|
|Function returning explicitly undefined|1,515,726|92|
|Function returning implicitly undefined|1,549,997|97|
|Function returning string|1,529,365|99|
|Function returning integer|1,563,908|97|
|Function returning float|1,545,612|98|
|Function returning functions|1,512,319|96|
|Function returning arrow functions|1,538,784|98|
|Function returning empty object|1,525,054|97|
|Function returning empty array|1,547,381|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:18:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Function returning null","opsSec":1524672.437082224,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1515725.9682633914,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1549997.3850691386,"samples":5},{"name":"Function returning string","opsSec":1529365.0283631594,"samples":4},{"name":"Function returning integer","opsSec":1563908.1480309176,"samples":8},{"name":"Function returning float","opsSec":1545611.8310749256,"samples":6},{"name":"Function returning functions","opsSec":1512318.5679233407,"samples":5},{"name":"Function returning arrow functions","opsSec":1538784.1872013847,"samples":6},{"name":"Function returning empty object","opsSec":1525054.4788102605,"samples":6},{"name":"Function returning empty array","opsSec":1547381.1835323053,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|703,931,615|96|
|using Array.includes (first item)|710,322,369|95|
|Using raw comparison|710,544,561|99|
|Using raw comparison (first item)|709,022,177|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:19:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":703931615.1054384,"samples":6},{"name":"using Array.includes (first item)","opsSec":710322369.0328821,"samples":7},{"name":"Using raw comparison","opsSec":710544561.379697,"samples":9},{"name":"Using raw comparison (first item)","opsSec":709022176.5600064,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,693,565|94|
|Using Object.getOwnPropertyNames()|89,331,068|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using Object.keys()","opsSec":91693565.38924392,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":89331068.16948788,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|469,054,888|95|
|Length = 10_000 - Array.at|475,155,531|94|
|Length = 1_000_000 - Array.at|477,175,162|97|
|Length = 100 - Array[length - 1]|709,210,387|95|
|Length = 10_000 - Array[length - 1]|709,904,119|94|
|Length = 1_000_000 - Array[length - 1]|708,776,444|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":469054888.413436,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":475155531.2872154,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":477175162.13329935,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":709210387.0663595,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":709904118.8204696,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":708776444.4857594,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,922,787|89|
|Object.create({})|2,407,396|82|
|Cached Empty.prototype|823,094,236|96|
|Empty.prototype|2,466,289|90|
|Empty class|1,532,782|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Object.create(null)","opsSec":82922786.97740807,"samples":5},{"name":"Object.create({})","opsSec":2407395.8418029076,"samples":3},{"name":"Cached Empty.prototype","opsSec":823094236.4460421,"samples":8},{"name":"Empty.prototype","opsSec":2466289.4266340137,"samples":4},{"name":"Empty class","opsSec":1532781.72967432,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|683,627,176|85|
|Using optional chain (obj.field?.field2) (undefined)|689,133,230|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|684,908,509|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|694,870,707|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":683627175.7003326,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":689133229.9296433,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":684908508.8296854,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":694870706.5004257,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|822,943,347|99|
|Using parseInt(x, 10) - big number (10 len)|823,613,617|99|
|Using + - small number (2 len)|821,196,932|94|
|Using + - big number (10 len)|823,924,162|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":822943346.7172403,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":823613616.8819836,"samples":7},{"name":"Using + - small number (2 len)","opsSec":821196931.8782394,"samples":6},{"name":"Using + - big number (10 len)","opsSec":823924162.1681443,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|787,099|70|
|Using ? operator to avoid rejection|904,229|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:28:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":787099.0458984433,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":904228.6440508441,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|820,268,985|88|
|Raw usage underscore usage|816,983,174|93|
|Manipulating private properties using #|808,946,041|92|
|Manipulating private properties using underscore(_)|809,212,363|96|
|Manipulating private properties using Symbol|809,667,529|96|
|Manipulating private properties using PrivateSymbol|48,875,521|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:29:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Raw usage private field","opsSec":820268985.1067932,"samples":7},{"name":"Raw usage underscore usage","opsSec":816983174.3452677,"samples":9},{"name":"Manipulating private properties using #","opsSec":808946041.334411,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":809212363.3983548,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":809667528.8458967,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":48875520.515659444,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,058,804|87|
|Adding property in the object creation - small object|5,191,050|85|
|Adding property after the function creation - small class|178,483|78|
|Adding property in the function creation - small class|177,429|79|
|Adding property after the class creation - small class|164,051|75|
|Adding property in the class creation - small class|167,565|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:33:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5058803.725914061,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5191049.554436277,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":178482.71175664628,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":177428.94821629493,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":164050.67717165413,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":167565.08291538648,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|587,545,012|98|
|Getter|75,244,715|96|
|Method|590,633,189|96|
|DefineProperty (getter)|591,822,075|95|
|DefineProperty (getter & enumerable=false)|75,118,659|97|
|DefineProperty (getter & configurable=false)|592,588,618|98|
|DefineProperty (getter & enumerable=false & configurable=false)|75,426,987|96|
|DefineProperty (writable)|592,577,911|96|
|DefineProperty (writable & enumerable=false)|592,562,572|99|
|DefineProperty (writable & enumerable=false & configurable=false)|590,715,427|97|
|DefineProperties (getter)|61,790,989|79|
|DefineProperties (getter & enumerable=false)|45,544,683|92|
|DefineProperties (getter & enumerable=false & configurable=false)|46,013,189|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:35:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":587545012.0190506,"samples":10},{"name":"Getter","opsSec":75244714.90911673,"samples":5},{"name":"Method","opsSec":590633189.2110747,"samples":6},{"name":"DefineProperty (getter)","opsSec":591822074.8853347,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":75118659.16998959,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":592588618.0187888,"samples":10},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":75426986.9983979,"samples":5},{"name":"DefineProperty (writable)","opsSec":592577910.8242893,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":592562572.3127769,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":590715426.5911704,"samples":6},{"name":"DefineProperties (getter)","opsSec":61790989.37900196,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45544683.47326164,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":46013189.2081578,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|569,634,495|98|
|Setter|8,531,764|98|
|Method|571,800,677|97|
|DefineProperty (setter)|549,503,229|94|
|DefineProperty (setter & enumerable=false)|8,606,044|97|
|DefineProperty (setter & configurable=false)|8,640,297|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,610,942|95|
|DefineProperty (writable)|574,908,475|96|
|DefineProperty (writable & enumerable=false)|573,882,707|97|
|DefineProperty (writable & enumerable=false & configurable=false)|505,261,845|86|
|DefineProperties (setter)|679,064,751|94|
|DefineProperties (setter & enumerable=false)|8,608,439|95|
|DefineProperties (setter & enumerable=false & configurable=false)|8,261,714|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:38:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":569634495.3070189,"samples":7},{"name":"Setter","opsSec":8531764.0588526,"samples":5},{"name":"Method","opsSec":571800677.0765457,"samples":7},{"name":"DefineProperty (setter)","opsSec":549503228.7475004,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8606044.42669506,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":8640297.310283573,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8610941.754826458,"samples":5},{"name":"DefineProperty (writable)","opsSec":574908475.2233828,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":573882706.7558352,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":505261844.5429109,"samples":7},{"name":"DefineProperties (setter)","opsSec":679064751.101804,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8608439.100354645,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8261713.550216781,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,309,412|91|
|Using replaceAll()|2,955,301|95|
|Using replaceAll(//g)|3,033,560|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:39:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3309411.641370602,"samples":4},{"name":"Using replaceAll()","opsSec":2955300.596667123,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3033559.7346116193,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,364,661|92|
|{ ...object, __proto__: null }|1,454,605|95|
|{ ...object, newProp: true }|19,188,829|85|
|structuredClone|184,738|95|
|JSON.parse + JSON.stringify|182,585|95|
|loop + object.keys starting with {}|838,723|96|
|loop + object.keys starting with { __proto__: null }|435,152|97|
|loop + object.keys starting with { randomProp: true }|355,274|97|
|object.keys + reduce(FN, {})|418,313|50|
|object.keys + reduce(FN, { __proto__: null })|433,756|97|
|object.keys + reduce(FN, { newProp: true })|356,296|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:41:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":23364660.557119418,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":1454604.9155645228,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":19188829.010068808,"samples":7},{"name":"structuredClone","opsSec":184738.09927741834,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":182584.6192775835,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":838722.7662830203,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":435152.2171845587,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":355274.19391179265,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":418313.31463234,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":433756.08558694005,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":356295.7724488862,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|163,187|86|
|Sort using first char|720,520|84|
|Sort using localeCompare|656,243|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:43:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":163187.15590856355,"samples":4},{"name":"Sort using first char","opsSec":720520.3510119892,"samples":6},{"name":"Sort using localeCompare","opsSec":656243.1784514433,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,104|94|
|{...smallObject} - Total keys: 2|111,541,051|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,204|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,216|98|
|{ ...bigObject, ...anotherBigObject }|1,297|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,754,293|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,719,816|99|
|{ ...smallObject, ...anotherSmallObject }|24,707,627|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2104.3180337040685,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":111541050.9283766,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2203.6858326915194,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6215.692284827441,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1296.6349985879967,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14754293.489213547,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36719816.04165986,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24707627.49853793,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,219|85|
|streams.web.Readable reading 1e3 * "some data"|1,520|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:48:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1219.1277068103398,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1519.6279917701975,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,309|93|
|streams.web.WritableStream writing 1e3 * "some data"|765|47|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:51:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4309.301149937839,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":765.4343280911611,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|572,947,833|88|
|Using backtick (`)|588,481,679|93|
|Using array.join|5,608,080|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:53:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":572947832.5209266,"samples":7},{"name":"Using backtick (`)","opsSec":588481679.1632054,"samples":6},{"name":"Using array.join","opsSec":5608080.454754198,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|610,151,954|88|
|Using indexof|620,949,758|89|
|Using RegExp.test|8,784,493|86|
|Using RegExp.text with cached regex pattern|10,211,038|91|
|Using new RegExp.test|2,772,178|89|
|Using new RegExp.test with cached regex pattern|3,192,327|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:55:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":610151954.0970978,"samples":6},{"name":"Using indexof","opsSec":620949758.1836402,"samples":7},{"name":"Using RegExp.test","opsSec":8784493.158865856,"samples":4},{"name":"Using RegExp.text with cached regex pattern","opsSec":10211038.344543811,"samples":5},{"name":"Using new RegExp.test","opsSec":2772177.9201582656,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3192326.9114144277,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|703,827,434|96|
|Using this|706,213,323|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:57:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":703827434.3042774,"samples":8},{"name":"Using this","opsSec":706213323.2291683,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,721,777|89|
|Date.now()|16,953,563|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:58:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7721777.355119308,"samples":6},{"name":"Date.now()","opsSec":16953563.098794278,"samples":5}]}-->

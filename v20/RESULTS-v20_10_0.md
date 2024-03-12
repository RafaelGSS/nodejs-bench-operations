## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,930,359|96|
|Using dot notation|845,054,018|98|
|Using define property (writable)|4,228,204|96|
|Using define property initialized (writable)|6,233,276|93|
|Using define property (getter)|2,359,825|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":844930358.5202413,"samples":6},{"name":"Using dot notation","opsSec":845054018.2433643,"samples":8},{"name":"Using define property (writable)","opsSec":4228203.931429936,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6233276.381456986,"samples":5},{"name":"Using define property (getter)","opsSec":2359825.3392644483,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.383ms
new Array(length)|10,000|0.423ms
array.push|1,000,000|28.156ms
new Array(length)|1,000,000|6.259ms
array.push|100,000,000|1,094.815ms
new Array(length)|100,000,000|3,656.261ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.023ms
array.push|100|0.062ms
new Array(length)|100|0.008ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.242ms
new Array(length)|10,000|0.285ms
array.push|1,000,000|22.67ms
new Array(length)|1,000,000|4.277ms
array.push|100,000,000|1,366.068ms
new Array(length)|100,000,000|3,606.565ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|608|85|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":608.4183269166142,"samples":3},{"name":"Array.from","opsSec":22.60430384045284,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,036,242|99|
|[async] async function|17,561,451|87|
|[async] function|170,898|21|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846036241.9196303,"samples":6},{"name":"[async] async function","opsSec":17561450.548105612,"samples":8},{"name":"[async] function","opsSec":170898.31883534475,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,040|86|
|new Blob (1024)|657|92|
|text (128)|5,809|87|
|text (1024)|715|87|
|arrayBuffer (128)|5,811|87|
|arrayBuffer (1024)|724|87|
|slice (0, 64)|72,054|69|
|slice (0, 512)|21,166|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5039.749061483441,"samples":3},{"name":"new Blob (1024)","opsSec":657.0431827455141,"samples":2},{"name":"text (128)","opsSec":5808.885950022862,"samples":5},{"name":"text (1024)","opsSec":715.4204035066023,"samples":3},{"name":"arrayBuffer (128)","opsSec":5811.078932967013,"samples":3},{"name":"arrayBuffer (1024)","opsSec":723.6753180777985,"samples":3},{"name":"slice (0, 64)","opsSec":72053.91145949837,"samples":4},{"name":"slice (0, 512)","opsSec":21166.416108613234,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|245,265|52|
|[True conditional] Using constructor name|196,568|93|
|[True conditional] Check if property is valid then instanceof |201,856|97|
|[False conditional] Using instanceof only|843,863,438|98|
|[False conditional] Using constructor name|842,125,617|94|
|[False conditional] Check if property is valid then instanceof |845,501,757|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":245264.83725095188,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":196568.00405147678,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":201855.65139103914,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":843863438.0169462,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":842125616.8175888,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845501756.7404281,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,775|92|
|crypto.verify('RSA-SHA256')|6,804|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6774.940806005787,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":6803.789579284278,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,466,598|94|
|fromUnixToISOString(new Date())|2,310,484|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1466598.4995490075,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2310483.588136979,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,047|84|
|Intl.DateTimeFormat().format(new Date())|16,439|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,830|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,761|82|
|Reusing Intl.DateTimeFormat()|778,705|94|
|Date.toLocaleDateString()|779,579|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,183|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15046.606612331389,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16439.328940111754,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14829.562429552323,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16761.498649867528,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":778704.8433350296,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":779579.1842503572,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17183.43276577993,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,072,232|95|
|Using brackets {}|1,112,158|95|
|Using '' + |1,104,963|98|
|Using date.toString()|1,210,937|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1072232.1793343488,"samples":8},{"name":"Using brackets {}","opsSec":1112157.6318417431,"samples":5},{"name":"Using '' + ","opsSec":1104962.973017933,"samples":5},{"name":"Using date.toString()","opsSec":1210937.1668775934,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,691,754|93|
|Using delete property (proto: null)|21,410,845|97|
|Using delete property (cached proto: null)|3,794,331|95|
|Using undefined assignment|847,341,630|95|
|Using undefined assignment (proto: null)|23,334,514|94|
|Using undefined property (cached proto: null)|844,224,977|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3691754.3095918032,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21410845.41231661,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3794331.2811436816,"samples":5},{"name":"Using undefined assignment","opsSec":847341630.2709672,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23334513.863828797,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":844224977.1418829,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|242,227|53|
|NodeError|198,212|93|
|NodeError Range|199,557|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":242227.46028599195,"samples":3},{"name":"NodeError","opsSec":198211.66871436013,"samples":3},{"name":"NodeError Range","opsSec":199556.94638802632,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,800,414|93|
|Function returning explicitly undefined|1,830,422|95|
|Function returning implicitly undefined|1,873,150|96|
|Function returning string|1,856,825|96|
|Function returning integer|1,881,105|97|
|Function returning float|1,851,945|95|
|Function returning functions|1,814,127|96|
|Function returning arrow functions|1,839,085|98|
|Function returning empty object|1,833,976|97|
|Function returning empty array|1,864,063|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:48:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1800414.056947276,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1830422.3510921053,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1873150.2837409482,"samples":6},{"name":"Function returning string","opsSec":1856825.3067363875,"samples":8},{"name":"Function returning integer","opsSec":1881105.4427662387,"samples":5},{"name":"Function returning float","opsSec":1851945.0481330038,"samples":6},{"name":"Function returning functions","opsSec":1814126.6265287793,"samples":5},{"name":"Function returning arrow functions","opsSec":1839084.6308139157,"samples":5},{"name":"Function returning empty object","opsSec":1833976.151667884,"samples":5},{"name":"Function returning empty array","opsSec":1864062.8895762798,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|858,259,669|95|
|using Array.includes (first item)|858,484,217|93|
|Using raw comparison|850,199,005|95|
|Using raw comparison (first item)|848,503,401|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":858259668.6238912,"samples":5},{"name":"using Array.includes (first item)","opsSec":858484217.2944096,"samples":6},{"name":"Using raw comparison","opsSec":850199004.5222129,"samples":6},{"name":"Using raw comparison (first item)","opsSec":848503401.4876283,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,210,453|93|
|Using Object.getOwnPropertyNames()|95,235,851|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":93210453.42560941,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":95235850.93754026,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|894,607,954|96|
|Length = 10_000 - Array.at|894,159,431|98|
|Length = 1_000_000 - Array.at|895,265,279|94|
|Length = 100 - Array[length - 1]|785,512,339|98|
|Length = 10_000 - Array[length - 1]|780,352,230|91|
|Length = 1_000_000 - Array[length - 1]|780,973,570|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":894607953.8257273,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":894159431.3725663,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":895265279.4795567,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":785512338.5323402,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":780352229.993793,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":780973570.2665823,"samples":5}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|86,703,262|95|
|Object.create({})|2,395,528|82|
|Cached Empty.prototype|848,882,856|98|
|Empty.prototype|2,479,712|81|
|Empty class|1,503,940|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":86703261.5702655,"samples":6},{"name":"Object.create({})","opsSec":2395528.089156037,"samples":4},{"name":"Cached Empty.prototype","opsSec":848882855.7092237,"samples":7},{"name":"Empty.prototype","opsSec":2479712.0129024945,"samples":3},{"name":"Empty class","opsSec":1503940.3853559403,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|844,841,942|94|
|Using optional chain (obj.field?.field2) (undefined)|848,490,874|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,270,459|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|846,241,176|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":844841941.7545221,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848490873.5921545,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848270458.7832884,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":846241175.7610834,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|844,758,679|97|
|Using parseInt(x, 10) - big number (10 len)|846,129,292|99|
|Using + - small number (2 len)|844,776,517|98|
|Using + - big number (10 len)|847,035,642|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":844758679.2603317,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":846129292.110329,"samples":7},{"name":"Using + - small number (2 len)","opsSec":844776516.5994061,"samples":7},{"name":"Using + - big number (10 len)","opsSec":847035642.1723263,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,205,744|80|
|Using ? operator to avoid rejection|1,278,306|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1205744.471984777,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1278306.122083547,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|841,917,429|98|
|Raw usage underscore usage|843,570,448|95|
|Manipulating private properties using #|838,142,794|96|
|Manipulating private properties using underscore(_)|836,685,290|95|
|Manipulating private properties using Symbol|835,857,455|97|
|Manipulating private properties using PrivateSymbol|50,385,577|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":841917428.8776969,"samples":6},{"name":"Raw usage underscore usage","opsSec":843570448.1109484,"samples":6},{"name":"Manipulating private properties using #","opsSec":838142793.8169416,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":836685290.307195,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":835857455.4950895,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50385577.4052268,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,140,985|96|
|Adding property in the object creation - small object|5,171,856|96|
|Adding property after the function creation - small class|253,664|89|
|Adding property in the function creation - small class|256,221|89|
|Adding property after the class creation - small class|256,910|85|
|Adding property in the class creation - small class|257,262|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5140984.790783605,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5171855.870435822,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":253663.96522042344,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":256221.46527519473,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":256910.44053762816,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":257261.68309360213,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|844,852,330|97|
|Getter|87,725,527|95|
|Method|795,061,635|97|
|DefineProperty (getter)|845,626,474|94|
|DefineProperty (getter & enumerable=false)|88,301,627|91|
|DefineProperty (getter & configurable=false)|844,401,489|98|
|DefineProperty (getter & enumerable=false & configurable=false)|87,694,039|92|
|DefineProperty (writable)|845,309,395|99|
|DefineProperty (writable & enumerable=false)|765,801,783|91|
|DefineProperty (writable & enumerable=false & configurable=false)|128,990,300|87|
|DefineProperties (getter)|55,384,919|92|
|DefineProperties (getter & enumerable=false)|87,953,593|97|
|DefineProperties (getter & enumerable=false & configurable=false)|87,973,545|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":844852330.0108006,"samples":7},{"name":"Getter","opsSec":87725527.37824814,"samples":6},{"name":"Method","opsSec":795061635.3745862,"samples":6},{"name":"DefineProperty (getter)","opsSec":845626473.8684117,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":88301627.2445621,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":844401489.0270805,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":87694039.43792778,"samples":5},{"name":"DefineProperty (writable)","opsSec":845309395.2922592,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":765801783.3826052,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":128990300.10946357,"samples":5},{"name":"DefineProperties (getter)","opsSec":55384919.20470695,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":87953592.53002949,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":87973545.04841952,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|775,475,277|97|
|Setter|11,998,290|94|
|Method|628,065,025|99|
|DefineProperty (setter)|783,658,770|93|
|DefineProperty (setter & enumerable=false)|12,136,399|96|
|DefineProperty (setter & configurable=false)|12,016,013|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,019,807|98|
|DefineProperty (writable)|785,582,545|93|
|DefineProperty (writable & enumerable=false)|782,670,764|97|
|DefineProperty (writable & enumerable=false & configurable=false)|786,592,841|98|
|DefineProperties (setter)|646,807,776|77|
|DefineProperties (setter & enumerable=false)|11,749,840|95|
|DefineProperties (setter & enumerable=false & configurable=false)|10,877,335|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":775475276.7850553,"samples":6},{"name":"Setter","opsSec":11998290.140313676,"samples":5},{"name":"Method","opsSec":628065024.8977271,"samples":6},{"name":"DefineProperty (setter)","opsSec":783658770.3014977,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12136398.613771249,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12016012.950997269,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12019807.23147694,"samples":5},{"name":"DefineProperty (writable)","opsSec":785582544.765919,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":782670763.9485544,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":786592840.5405314,"samples":6},{"name":"DefineProperties (setter)","opsSec":646807775.522417,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11749840.16039514,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10877335.053994484,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,235,206|93|
|Using replaceAll()|2,812,400|92|
|Using replaceAll(//g)|3,066,098|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3235205.9057904915,"samples":5},{"name":"Using replaceAll()","opsSec":2812399.9796908214,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3066098.0463219695,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,421,274|92|
|{ ...object, __proto__: null }|27,127,730|98|
|{ ...object, newProp: true }|895,454|88|
|structuredClone|261,860|97|
|JSON.parse + JSON.stringify|172,396|93|
|loop + object.keys starting with {}|1,461,448|92|
|loop + object.keys starting with { __proto__: null }|778,047|98|
|loop + object.keys starting with { randomProp: true }|614,420|91|
|object.keys + reduce(FN, {})|1,471,931|94|
|object.keys + reduce(FN, { __proto__: null })|779,538|97|
|object.keys + reduce(FN, { newProp: true })|618,167|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"{ ...object }","opsSec":26421273.845582608,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":27127729.992757663,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":895453.9129377009,"samples":3},{"name":"structuredClone","opsSec":261859.97199136054,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":172395.67056729487,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1461448.1139412255,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":778046.8638887528,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":614419.8866962406,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1471931.017498355,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":779538.1131759277,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":618167.123353708,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|268,388|94|
|Sort using first char|1,371,870|93|
|Sort using localeCompare|1,247,114|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":268387.98297898,"samples":5},{"name":"Sort using first char","opsSec":1371870.1927646946,"samples":4},{"name":"Sort using localeCompare","opsSec":1247113.8401527,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,062|93|
|{...smallObject} - Total keys: 2|101,864,480|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,283|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,226|97|
|{ ...bigObject, ...anotherBigObject }|1,248|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,561,459|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,327,024|99|
|{ ...smallObject, ...anotherSmallObject }|24,792,295|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2062.394750184095,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":101864480.03276393,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2283.141323856033,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6226.16868079178,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1247.5276214244966,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13561458.835682377,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37327023.67133779,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24792294.645377375,"samples":8}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,457|84|
|streams.web.Readable reading 1e3 * "some data"|2,298|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2457.0698989189996,"samples":6},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2297.5928295954573,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,368|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,661|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5368.212617607717,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1660.9140167736798,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|847,276,996|98|
|Using backtick (`)|843,030,846|98|
|Using array.join|11,470,812|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using + sign","opsSec":847276996.4869925,"samples":7},{"name":"Using backtick (`)","opsSec":843030846.0203892,"samples":11},{"name":"Using array.join","opsSec":11470812.223881178,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|847,640,333|95|
|Using indexof|846,747,967|94|
|Using RegExp.test|15,094,076|98|
|Using RegExp.text with cached regex pattern|15,648,856|97|
|Using new RegExp.test|4,232,247|97|
|Using new RegExp.test with cached regex pattern|5,104,519|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":847640333.3987265,"samples":6},{"name":"Using indexof","opsSec":846747966.6731491,"samples":7},{"name":"Using RegExp.test","opsSec":15094076.18327157,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":15648855.56284358,"samples":5},{"name":"Using new RegExp.test","opsSec":4232246.824506711,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5104519.205738489,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|883,908,242|96|
|Using this|844,037,140|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using super","opsSec":883908241.9000084,"samples":6},{"name":"Using this","opsSec":844037140.3466302,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,093,851|97|
|Date.now()|21,271,880|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().getTime()","opsSec":12093851.030023022,"samples":4},{"name":"Date.now()","opsSec":21271879.851717416,"samples":4}]}-->

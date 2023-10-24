## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|578,568,244|92|
|Using dot notation|571,501,309|94|
|Using define property (writable)|2,452,843|96|
|Using define property initialized (writable)|3,085,000|93|
|Using define property (getter)|1,252,117|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":578568244.1663089,"samples":7},{"name":"Using dot notation","opsSec":571501308.611334,"samples":8},{"name":"Using define property (writable)","opsSec":2452842.747195422,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3085000.2901863456,"samples":5},{"name":"Using define property (getter)","opsSec":1252116.6190295815,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.013ms
array.push|1,000|0.076ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.688ms
new Array(length)|10,000|0.413ms
array.push|1,000,000|37.995ms
new Array(length)|1,000,000|11.773ms
array.push|100,000,000|2,064.318ms
new Array(length)|100,000,000|6,215.387ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.017ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.627ms
new Array(length)|10,000|5.123ms
array.push|1,000,000|111.511ms
new Array(length)|1,000,000|8.189ms
array.push|100,000,000|2,995.23ms
new Array(length)|100,000,000|6,006.845ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|83|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":309.4490031534857,"samples":4},{"name":"Array.from","opsSec":14.64404382922486,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,675|86|
|new Blob (1024)|575|70|
|text (128)|23,513|66|
|text (1024)|7,949|85|
|arrayBuffer (128)|24,579|83|
|arrayBuffer (1024)|8,807|83|
|slice (0, 64)|121,995|78|
|slice (0, 512)|22,429|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":4675.305176966804,"samples":4},{"name":"new Blob (1024)","opsSec":574.8932646633065,"samples":2},{"name":"text (128)","opsSec":23513.060108484457,"samples":4},{"name":"text (1024)","opsSec":7949.230290199846,"samples":4},{"name":"arrayBuffer (128)","opsSec":24578.702562179496,"samples":5},{"name":"arrayBuffer (1024)","opsSec":8806.835008697853,"samples":3},{"name":"slice (0, 64)","opsSec":121995.01519379718,"samples":4},{"name":"slice (0, 512)","opsSec":22429.474729447877,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|295,758|88|
|[True conditional] Using constructor name|291,376|83|
|[True conditional] Check if property is valid then instanceof |295,042|83|
|[False conditional] Using instanceof only|597,504,842|95|
|[False conditional] Using constructor name|597,530,054|93|
|[False conditional] Check if property is valid then instanceof |598,254,873|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":295757.5800036129,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":291376.063662766,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":295042.30199481087,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":597504841.5619338,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":597530053.752214,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598254873.2192885,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|20,873|90|
|crypto.verify('RSA-SHA256')|20,255|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":20873.101092789806,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":20255.253343689743,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,585,569|89|
|fromUnixToISOString(new Date())|1,285,374|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1585569.390133239,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":1285374.2044676389,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,245|79|
|Intl.DateTimeFormat().format(new Date())|5,650|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,259|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,466|85|
|Reusing Intl.DateTimeFormat()|321,814|70|
|Date.toLocaleDateString()|411,805|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,427|76|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5244.723010011627,"samples":2},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5650.031979939175,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6258.824465414754,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6466.196750528312,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":321813.9888941722,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":411804.72938273515,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6427.15551913333,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|602,633|85|
|Using brackets {}|624,557|87|
|Using '' + |631,879|85|
|Using date.toString()|660,845|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":602632.5086052603,"samples":3},{"name":"Using brackets {}","opsSec":624557.080372521,"samples":5},{"name":"Using '' + ","opsSec":631879.4615605058,"samples":3},{"name":"Using date.toString()","opsSec":660845.4290266474,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,769,510|87|
|Using delete property (proto: null)|10,298,837|92|
|Using delete property (cached proto: null)|1,745,042|89|
|Using undefined assignment|571,939,082|92|
|Using undefined assignment (proto: null)|11,435,782|90|
|Using undefined property (cached proto: null)|579,535,601|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1769510.3151767957,"samples":5},{"name":"Using delete property (proto: null)","opsSec":10298837.02813179,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1745041.6688852273,"samples":5},{"name":"Using undefined assignment","opsSec":571939081.8263825,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":11435781.661284108,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":579535601.132231,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|239,222|84|
|NodeError|243,158|86|
|NodeError Range|243,718|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":239222.0356333716,"samples":3},{"name":"NodeError","opsSec":243157.61094120945,"samples":3},{"name":"NodeError Range","opsSec":243718.21966106232,"samples":4}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,295,358|94|
|Function returning explicitly undefined|1,283,309|96|
|Function returning implicitly undefined|1,306,118|88|
|Function returning string|1,295,888|92|
|Function returning integer|1,330,354|98|
|Function returning float|1,313,096|99|
|Function returning functions|1,263,742|96|
|Function returning arrow functions|1,294,076|94|
|Function returning empty object|1,310,648|97|
|Function returning empty array|1,305,093|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1295357.5982621468,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1283308.7470868772,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1306118.055527547,"samples":6},{"name":"Function returning string","opsSec":1295887.7998964335,"samples":7},{"name":"Function returning integer","opsSec":1330354.0449128817,"samples":6},{"name":"Function returning float","opsSec":1313096.3163652516,"samples":6},{"name":"Function returning functions","opsSec":1263741.7982533835,"samples":6},{"name":"Function returning arrow functions","opsSec":1294075.9515865142,"samples":6},{"name":"Function returning empty object","opsSec":1310648.1202543615,"samples":7},{"name":"Function returning empty array","opsSec":1305092.6116368575,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|609,099,946|87|
|using Array.includes (first item)|603,482,926|86|
|Using raw comparison|621,440,855|91|
|Using raw comparison (first item)|616,196,573|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":609099946.1543404,"samples":6},{"name":"using Array.includes (first item)","opsSec":603482925.7168638,"samples":6},{"name":"Using raw comparison","opsSec":621440855.4705133,"samples":9},{"name":"Using raw comparison (first item)","opsSec":616196573.4826695,"samples":8}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,056,421|89|
|Using Object.getOwnPropertyNames()|42,080,913|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":45056421.1738794,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":42080912.96011394,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|707,509,017|96|
|Length = 10_000 - Array[length - 1]|706,626,125|96|
|Length = 1_000_000 - Array[length - 1]|705,700,147|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":707509016.5630956,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":706626124.8029162,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":705700146.8084501,"samples":10}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,906,549|94|
|Object.create({})|1,000,903|77|
|Cached Empty.prototype|587,014,621|94|
|Empty.prototype|1,061,617|74|
|Empty class|712,749|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":34906549.40645038,"samples":6},{"name":"Object.create({})","opsSec":1000902.6725223667,"samples":3},{"name":"Cached Empty.prototype","opsSec":587014620.6880277,"samples":6},{"name":"Empty.prototype","opsSec":1061617.0809504641,"samples":3},{"name":"Empty class","opsSec":712749.2102381273,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|563,487,561|90|
|Using optional chain (obj.field?.field2) (undefined)|585,394,589|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,004,263|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|586,573,918|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":563487560.7074554,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":585394588.570228,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":590004263.4474694,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":586573917.5671669,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|135,404,822|95|
|Using parseInt(x, 10) - big number (10 len)|10,977,184|93|
|Using + - small number (2 len)|707,610,284|98|
|Using + - big number (10 len)|706,303,418|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":135404822.11346397,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":10977183.814084128,"samples":8},{"name":"Using + - small number (2 len)","opsSec":707610283.7488618,"samples":6},{"name":"Using + - big number (10 len)","opsSec":706303418.0426124,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|565,754|70|
|Using ? operator to avoid rejection|664,783|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759738922119141},"benchmarks":[{"name":"Using if to check function existence","opsSec":565754.3262328012,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":664782.808813511,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,431,354|94|
|Raw usage underscore usage|7,049,102|94|
|Manipulating private properties using #|2,548,278|97|
|Manipulating private properties using underscore(_)|585,316,150|99|
|Manipulating private properties using Symbol|582,885,872|97|
|Manipulating private properties using PrivateSymbol|33,191,976|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":8431354.277482197,"samples":6},{"name":"Raw usage underscore usage","opsSec":7049101.842579237,"samples":5},{"name":"Manipulating private properties using #","opsSec":2548277.7810156653,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":585316149.5600588,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":582885872.3271545,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":33191975.635551024,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,556,901|91|
|Adding property in the object creation - small object|1,598,637|96|
|Adding property after the function creation - small class|133,262|79|
|Adding property in the function creation - small class|137,049|85|
|Adding property after the class creation - small class|113,195|81|
|Adding property in the class creation - small class|112,035|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1556901.2434001693,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1598636.874260115,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":133261.6161523999,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":137049.03049619123,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":113195.45083197727,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":112035.14473345227,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|707,127,635|95|
|Getter|50,799,072|93|
|Method|707,144,984|98|
|DefineProperty (getter)|706,693,174|97|
|DefineProperty (getter & enumerable=false)|50,657,528|96|
|DefineProperty (getter & configurable=false)|707,937,083|97|
|DefineProperty (getter & enumerable=false & configurable=false)|50,154,032|94|
|DefineProperty (writable)|707,236,014|98|
|DefineProperty (writable & enumerable=false)|217,913,922|32|
|DefineProperty (writable & enumerable=false & configurable=false)|72,281,663|84|
|DefineProperties (getter)|33,663,341|89|
|DefineProperties (getter & enumerable=false)|33,462,528|91|
|DefineProperties (getter & enumerable=false & configurable=false)|50,616,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":707127635.2954327,"samples":6},{"name":"Getter","opsSec":50799072.14719254,"samples":5},{"name":"Method","opsSec":707144983.5848236,"samples":6},{"name":"DefineProperty (getter)","opsSec":706693174.0195552,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50657527.77917076,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":707937083.1411144,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50154031.630216554,"samples":5},{"name":"DefineProperty (writable)","opsSec":707236014.0235801,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":217913921.86767563,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":72281662.71555169,"samples":4},{"name":"DefineProperties (getter)","opsSec":33663341.292395994,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":33462528.4042638,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50616621.0265901,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|646,885,449|86|
|Setter|6,416,374|97|
|Method|357,544,615|99|
|DefineProperty (setter)|610,584,206|86|
|DefineProperty (setter & enumerable=false)|6,574,597|97|
|DefineProperty (setter & configurable=false)|6,591,369|98|
|DefineProperty (setter & enumerable=false & configurable=false)|6,502,869|98|
|DefineProperty (writable)|704,239,347|92|
|DefineProperty (writable & enumerable=false)|239,455,701|36|
|DefineProperty (writable & enumerable=false & configurable=false)|81,343,319|79|
|DefineProperties (setter)|58,400,960|84|
|DefineProperties (setter & enumerable=false)|6,039,027|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,463,459|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":646885448.9081404,"samples":7},{"name":"Setter","opsSec":6416373.714309715,"samples":7},{"name":"Method","opsSec":357544615.0625766,"samples":7},{"name":"DefineProperty (setter)","opsSec":610584205.9737909,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6574596.994926109,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":6591369.161006351,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6502869.4028822705,"samples":6},{"name":"DefineProperty (writable)","opsSec":704239347.2509137,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":239455701.4753167,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":81343319.39371625,"samples":7},{"name":"DefineProperties (setter)","opsSec":58400960.090056635,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6039026.577664434,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6463459.106884909,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,994,894|89|
|Using replaceAll()|1,932,926|96|
|Using replaceAll(//g)|1,790,459|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1994893.584890773,"samples":7},{"name":"Using replaceAll()","opsSec":1932925.6582696296,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1790458.6283354855,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,532,478|84|
|{ ...object, __proto__: null }|11,994,117|87|
|{ ...object, newProp: true }|391,212|79|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|110,564|86|
|loop + object.keys starting with {}|255,813|87|
|loop + object.keys starting with { __proto__: null }|345,024|87|
|loop + object.keys starting with { randomProp: true }|264,852|87|
|object.keys + reduce(FN, {})|257,786|85|
|object.keys + reduce(FN, { __proto__: null })|362,149|90|
|object.keys + reduce(FN, { newProp: true })|274,671|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":11532478.212407364,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":11994116.638217885,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":391211.98481761216,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":110564.3489696545,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":255812.51248947243,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":345023.8452136282,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":264851.9328333818,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":257786.27767813063,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":362148.62708281004,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":274671.43422536884,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|136,480|83|
|Sort using first char|596,865|84|
|Sort using localeCompare|305,579|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:34:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":136479.80119429764,"samples":4},{"name":"Sort using first char","opsSec":596864.8995330686,"samples":6},{"name":"Sort using localeCompare","opsSec":305578.83897642716,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,032|85|
|{...smallObject} - Total keys: 2|52,025,684|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,139|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,173|84|
|{ ...bigObject, ...anotherBigObject }|673|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,870,858|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,402,695|87|
|{ ...smallObject, ...anotherSmallObject }|12,275,599|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1032.430371377474,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":52025684.276068,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1139.4837337299039,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3173.352426561678,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":673.1667215485379,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7870858.095177052,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18402694.627249986,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12275599.074066337,"samples":5}]}-->



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,277,618|97|
|Using backtick (`)|596,943,191|93|
|Using array.join|8,066,988|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:51:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":591277617.5751361,"samples":8},{"name":"Using backtick (`)","opsSec":596943190.9230639,"samples":7},{"name":"Using array.join","opsSec":8066988.416916891,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,531,586|92|
|Using indexof|596,551,413|96|
|Using RegExp.test|11,066,539|96|
|Using RegExp.text with cached regex pattern|11,553,085|98|
|Using new RegExp.test|3,438,223|95|
|Using new RegExp.test with cached regex pattern|4,101,841|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using includes","opsSec":11531586.03465377,"samples":5},{"name":"Using indexof","opsSec":596551413.2727462,"samples":7},{"name":"Using RegExp.test","opsSec":11066539.079333935,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11553085.28548778,"samples":7},{"name":"Using new RegExp.test","opsSec":3438222.844117143,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4101840.8149476843,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|104,491,381|88|
|Using this|107,738,940|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:58:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":104491380.62234516,"samples":6},{"name":"Using this","opsSec":107738940.32682516,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,381,414|93|
|Date.now()|14,022,907|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7381413.813634522,"samples":6},{"name":"Date.now()","opsSec":14022906.700828476,"samples":7}]}-->

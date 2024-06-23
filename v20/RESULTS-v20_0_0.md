## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,091,475|8045738|
|Using dot notation|16,195,882|8097942|
|Using define property (writable)|3,341,708|1670855|
|Using define property initialized (writable)|4,022,149|2011075|
|Using define property (getter)|2,040,142|1020102|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:39:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16091475.872417415,"samples":8045738},{"name":"Using dot notation","opsSec":16195882.510573635,"samples":8097942},{"name":"Using define property (writable)","opsSec":3341708.1888498114,"samples":1670855},{"name":"Using define property initialized (writable)","opsSec":4022149.3403320494,"samples":2011075},{"name":"Using define property (getter)","opsSec":2040142.1020623841,"samples":1020102}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.008ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.043ms
array.push|10,000|0.316ms
new Array(length)|10,000|0.423ms
array.push|1,000,000|33.993ms
new Array(length)|1,000,000|9.355ms
array.push|100,000,000|2,387.278ms
new Array(length)|100,000,000|4,602.077ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.024ms
new Array(length)|100|0.01ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.253ms
array.push|1,000,000|27.314ms
new Array(length)|1,000,000|4.535ms
array.push|100,000,000|2,323.989ms
new Array(length)|100,000,000|5,052.399ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|227|114|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:50:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":227.88167380819934,"samples":114},{"name":"Array.from","opsSec":23.484216436224216,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,670|2836|
|new Blob (1024)|703|352|
|text (128)|6,071|3036|
|text (1024)|774|388|
|arrayBuffer (128)|6,087|3044|
|arrayBuffer (1024)|774|388|
|slice (0, 64)|79,767|39884|
|slice (0, 512)|25,412|12707|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:53:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5670.6490697708705,"samples":2836},{"name":"new Blob (1024)","opsSec":703.4885216358247,"samples":352},{"name":"text (128)","opsSec":6071.276558789721,"samples":3036},{"name":"text (1024)","opsSec":774.2791985460547,"samples":388},{"name":"arrayBuffer (128)","opsSec":6087.780925086025,"samples":3044},{"name":"arrayBuffer (1024)","opsSec":774.2646916571953,"samples":388},{"name":"slice (0, 64)","opsSec":79767.78685981633,"samples":39884},{"name":"slice (0, 512)","opsSec":25412.644793519692,"samples":12707}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|310,116|155059|
|[True conditional] Using constructor name|304,587|152294|
|[True conditional] Check if property is valid then instanceof |308,364|154183|
|[False conditional] Using instanceof only|12,476,423|6238212|
|[False conditional] Using constructor name|15,961,666|7980834|
|[False conditional] Check if property is valid then instanceof |15,994,588|7997295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:58:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":310116.87307103566,"samples":155059},{"name":"[True conditional] Using constructor name","opsSec":304587.40726356977,"samples":152294},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":308364.56916874496,"samples":154183},{"name":"[False conditional] Using instanceof only","opsSec":12476423.501723582,"samples":6238212},{"name":"[False conditional] Using constructor name","opsSec":15961666.43517246,"samples":7980834},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15994588.17361639,"samples":7997295}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,731|3366|
|crypto.verify('RSA-SHA256')|6,947|3474|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:03:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6731.932330636995,"samples":3366},{"name":"crypto.verify('RSA-SHA256')","opsSec":6947.3069922098,"samples":3474}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,327,206|663604|
|fromUnixToISOString(new Date())|1,835,718|917860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1327206.7048360158,"samples":663604},{"name":"fromUnixToISOString(new Date())","opsSec":1835718.2127431065,"samples":917860}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,871|5436|
|Intl.DateTimeFormat().format(new Date())|10,369|5185|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,224|5613|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,578|5290|
|Reusing Intl.DateTimeFormat()|666,775|333388|
|Date.toLocaleDateString()|682,453|341227|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|15,987|7994|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:12:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10871.898086917025,"samples":5436},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10369.77030963015,"samples":5185},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11224.875761125037,"samples":5613},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10578.276629632372,"samples":5290},{"name":"Reusing Intl.DateTimeFormat()","opsSec":666775.885142904,"samples":333388},{"name":"Date.toLocaleDateString()","opsSec":682453.0282932573,"samples":341227},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":15987.581637947162,"samples":7994}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,032,561|516281|
|Using brackets {}|1,046,037|523019|
|Using '' + |1,041,133|520567|
|Using date.toString()|1,154,776|577402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:16:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1032561.1549099352,"samples":516281},{"name":"Using brackets {}","opsSec":1046037.6004899911,"samples":523019},{"name":"Using '' + ","opsSec":1041133.6732614039,"samples":520567},{"name":"Using date.toString()","opsSec":1154776.6832207341,"samples":577402}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,013,092|1506547|
|Using delete property (proto: null)|8,689,687|4344844|
|Using delete property (cached proto: null)|3,013,451|1506726|
|Using undefined assignment|14,780,665|7390334|
|Using undefined assignment (proto: null)|9,014,351|4507176|
|Using undefined property (cached proto: null)|14,677,826|7338914|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:21:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3013092.751460266,"samples":1506547},{"name":"Using delete property (proto: null)","opsSec":8689687.502772093,"samples":4344844},{"name":"Using delete property (cached proto: null)","opsSec":3013451.968387631,"samples":1506726},{"name":"Using undefined assignment","opsSec":14780665.970184421,"samples":7390334},{"name":"Using undefined assignment (proto: null)","opsSec":9014351.548670333,"samples":4507176},{"name":"Using undefined property (cached proto: null)","opsSec":14677826.285261422,"samples":7338914}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|300,146|150074|
|NodeError|297,344|148673|
|NodeError Range|301,994|150998|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":300146.2861271971,"samples":150074},{"name":"NodeError","opsSec":297344.6244022627,"samples":148673},{"name":"NodeError Range","opsSec":301994.2859430382,"samples":150998}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,508,932|754467|
|Function returning explicitly undefined|1,552,979|776490|
|Function returning implicitly undefined|1,540,580|770291|
|Function returning string|1,511,194|755598|
|Function returning integer|1,572,305|786153|
|Function returning float|1,530,382|765192|
|Function returning functions|1,478,878|739440|
|Function returning arrow functions|1,481,533|740767|
|Function returning empty object|1,544,968|772485|
|Function returning empty array|1,548,579|774290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1508932.6401163626,"samples":754467},{"name":"Function returning explicitly undefined","opsSec":1552979.0373264558,"samples":776490},{"name":"Function returning implicitly undefined","opsSec":1540580.423535543,"samples":770291},{"name":"Function returning string","opsSec":1511194.4420765,"samples":755598},{"name":"Function returning integer","opsSec":1572305.4766858947,"samples":786153},{"name":"Function returning float","opsSec":1530382.3770511595,"samples":765192},{"name":"Function returning functions","opsSec":1478878.4239133464,"samples":739440},{"name":"Function returning arrow functions","opsSec":1481533.3641948567,"samples":740767},{"name":"Function returning empty object","opsSec":1544968.3637930222,"samples":772485},{"name":"Function returning empty array","opsSec":1548579.0127324392,"samples":774290}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,102,958|8051480|
|using Array.includes (first item)|16,142,381|8071191|
|Using raw comparison|16,148,465|8074234|
|Using raw comparison (first item)|16,099,624|8049813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16102958.425909767,"samples":8051480},{"name":"using Array.includes (first item)","opsSec":16142381.538162759,"samples":8071191},{"name":"Using raw comparison","opsSec":16148465.774645515,"samples":8074234},{"name":"Using raw comparison (first item)","opsSec":16099624.54138915,"samples":8049813}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,171,017|7085509|
|Using Object.getOwnPropertyNames()|13,852,090|6926046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:48:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14171017.729709286,"samples":7085509},{"name":"Using Object.getOwnPropertyNames()","opsSec":13852090.474200774,"samples":6926046}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,642,293|7821147|
|Length = 10_000 - Array.at|16,008,337|8004169|
|Length = 1_000_000 - Array.at|16,008,859|8004430|
|Length = 100 - Array[length - 1]|16,023,471|8011736|
|Length = 10_000 - Array[length - 1]|16,028,467|8014234|
|Length = 1_000_000 - Array[length - 1]|15,979,573|7989787|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:55:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15642293.485340953,"samples":7821147},{"name":"Length = 10_000 - Array.at","opsSec":16008337.213762889,"samples":8004169},{"name":"Length = 1_000_000 - Array.at","opsSec":16008859.442745809,"samples":8004430},{"name":"Length = 100 - Array[length - 1]","opsSec":16023471.877750613,"samples":8011736},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16028467.228060152,"samples":8014234},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15979573.169457685,"samples":7989787}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,108,388|6554195|
|Object.create({})|1,961,994|980998|
|Cached Empty.prototype|15,908,280|7954141|
|Empty.prototype|1,711,176|855590|
|Empty class|1,171,212|585607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:04:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13108388.856146257,"samples":6554195},{"name":"Object.create({})","opsSec":1961994.7660069007,"samples":980998},{"name":"Cached Empty.prototype","opsSec":15908280.854565427,"samples":7954141},{"name":"Empty.prototype","opsSec":1711176.436735392,"samples":855590},{"name":"Empty class","opsSec":1171212.9383336087,"samples":585607}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,038,180|8019091|
|Using optional chain (obj.field?.field2) (undefined)|16,120,657|8060329|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,148,810|8074406|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,665,594|7832798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:12:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16038180.699907916,"samples":8019091},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16120657.154437881,"samples":8060329},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16148810.421427662,"samples":8074406},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15665594.47613274,"samples":7832798}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,163,376|7081689|
|Using parseInt(x, 10) - big number (10 len)|15,346,143|7673072|
|Using + - small number (2 len)|15,494,957|7747480|
|Using + - big number (10 len)|15,532,523|7766262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:20:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14163376.088724406,"samples":7081689},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15346143.465814363,"samples":7673072},{"name":"Using + - small number (2 len)","opsSec":15494957.857314216,"samples":7747480},{"name":"Using + - big number (10 len)","opsSec":15532523.200099705,"samples":7766262}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,020,230|510116|
|Using ? operator to avoid rejection|1,020,015|510008|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:27:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1020230.776006397,"samples":510116},{"name":"Using ? operator to avoid rejection","opsSec":1020015.7178987903,"samples":510008}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,974,513|7987257|
|Raw usage underscore usage|16,018,081|8009041|
|Manipulating private properties using #|15,886,373|7943187|
|Manipulating private properties using underscore(_)|16,080,314|8040158|
|Manipulating private properties using Symbol|16,057,635|8028818|
|Manipulating private properties using PrivateSymbol|12,619,870|6309936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:34:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15974513.124017235,"samples":7987257},{"name":"Raw usage underscore usage","opsSec":16018081.274388447,"samples":8009041},{"name":"Manipulating private properties using #","opsSec":15886373.871221373,"samples":7943187},{"name":"Manipulating private properties using underscore(_)","opsSec":16080314.382117113,"samples":8040158},{"name":"Manipulating private properties using Symbol","opsSec":16057635.946401855,"samples":8028818},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12619870.886739677,"samples":6309936}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,773,469|1886735|
|Adding property in the object creation - small object|3,721,012|1860507|
|Adding property after the function creation - small class|260,234|130118|
|Adding property in the function creation - small class|256,331|128168|
|Adding property after the class creation - small class|223,968|111985|
|Adding property in the class creation - small class|223,291|111646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:42:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3773469.5681606787,"samples":1886735},{"name":"Adding property in the object creation - small object","opsSec":3721012.646196056,"samples":1860507},{"name":"Adding property after the function creation - small class","opsSec":260234.84546995055,"samples":130118},{"name":"Adding property in the function creation - small class","opsSec":256331.7799382047,"samples":128168},{"name":"Adding property after the class creation - small class","opsSec":223968.4503830838,"samples":111985},{"name":"Adding property in the class creation - small class","opsSec":223291.55259747314,"samples":111646}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,085,475|8042738|
|Getter|13,669,171|6834586|
|Method|16,118,258|8059130|
|DefineProperty (getter)|16,166,774|8083388|
|DefineProperty (getter & enumerable=false)|13,848,954|6924478|
|DefineProperty (getter & configurable=false)|16,125,653|8062827|
|DefineProperty (getter & enumerable=false & configurable=false)|13,787,584|6893793|
|DefineProperty (writable)|16,115,595|8057798|
|DefineProperty (writable & enumerable=false)|16,096,185|8048093|
|DefineProperty (writable & enumerable=false & configurable=false)|16,179,845|8089923|
|DefineProperties (getter)|13,924,370|6962186|
|DefineProperties (getter & enumerable=false)|13,917,121|6958561|
|DefineProperties (getter & enumerable=false & configurable=false)|13,743,446|6871724|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:51:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16085475.432408722,"samples":8042738},{"name":"Getter","opsSec":13669171.296059372,"samples":6834586},{"name":"Method","opsSec":16118258.639616117,"samples":8059130},{"name":"DefineProperty (getter)","opsSec":16166774.81282648,"samples":8083388},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13848954.600016417,"samples":6924478},{"name":"DefineProperty (getter & configurable=false)","opsSec":16125653.938485513,"samples":8062827},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13787584.26434982,"samples":6893793},{"name":"DefineProperty (writable)","opsSec":16115595.86167873,"samples":8057798},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16096185.82346903,"samples":8048093},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16179845.24391516,"samples":8089923},{"name":"DefineProperties (getter)","opsSec":13924370.71854613,"samples":6962186},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13917121.50228495,"samples":6958561},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13743446.872817583,"samples":6871724}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,609,239|7804620|
|Setter|6,269,112|3134557|
|Method|15,265,700|7632851|
|DefineProperty (setter)|15,458,369|7729185|
|DefineProperty (setter & enumerable=false)|6,388,418|3194210|
|DefineProperty (setter & configurable=false)|6,336,478|3168240|
|DefineProperty (setter & enumerable=false & configurable=false)|6,359,259|3179630|
|DefineProperty (writable)|15,336,379|7668190|
|DefineProperty (writable & enumerable=false)|15,522,353|7761177|
|DefineProperty (writable & enumerable=false & configurable=false)|15,643,742|7821872|
|DefineProperties (setter)|15,672,547|7836274|
|DefineProperties (setter & enumerable=false)|6,168,723|3084362|
|DefineProperties (setter & enumerable=false & configurable=false)|6,221,189|3110595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:09:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15609239.985113867,"samples":7804620},{"name":"Setter","opsSec":6269112.920846098,"samples":3134557},{"name":"Method","opsSec":15265700.238420743,"samples":7632851},{"name":"DefineProperty (setter)","opsSec":15458369.697783872,"samples":7729185},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6388418.239276055,"samples":3194210},{"name":"DefineProperty (setter & configurable=false)","opsSec":6336478.634296254,"samples":3168240},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6359259.102430012,"samples":3179630},{"name":"DefineProperty (writable)","opsSec":15336379.290643314,"samples":7668190},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15522353.844565663,"samples":7761177},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15643742.739341484,"samples":7821872},{"name":"DefineProperties (setter)","opsSec":15672547.820641924,"samples":7836274},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6168723.879399453,"samples":3084362},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6221189.712250041,"samples":3110595}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,064,262|5032132|
|{ ...object, __proto__: null }|10,087,544|5043773|
|{ ...object, newProp: true }|681,443|340722|
|structuredClone|274,844|137423|
|JSON.parse + JSON.stringify|188,005|94003|
|loop + object.keys starting with {}|1,409,454|704729|
|loop + object.keys starting with { __proto__: null }|785,000|392501|
|loop + object.keys starting with { randomProp: true }|618,758|309380|
|object.keys + reduce(FN, {})|1,426,279|713140|
|object.keys + reduce(FN, { __proto__: null })|804,126|402064|
|object.keys + reduce(FN, { newProp: true })|629,187|314594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10064262.267555868,"samples":5032132},{"name":"{ ...object, __proto__: null }","opsSec":10087544.504053906,"samples":5043773},{"name":"{ ...object, newProp: true }","opsSec":681443.226323928,"samples":340722},{"name":"structuredClone","opsSec":274844.83530328213,"samples":137423},{"name":"JSON.parse + JSON.stringify","opsSec":188005.5336509771,"samples":94003},{"name":"loop + object.keys starting with {}","opsSec":1409454.6026339454,"samples":704729},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":785000.6562002393,"samples":392501},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":618758.7832254304,"samples":309380},{"name":"object.keys + reduce(FN, {})","opsSec":1426279.4246328387,"samples":713140},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":804126.8937825735,"samples":402064},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":629187.6009733633,"samples":314594}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|268,853|134427|
|Sort using first char|1,272,554|636278|
|Sort using localeCompare|1,197,474|598738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:32:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":268853.4936126233,"samples":134427},{"name":"Sort using first char","opsSec":1272554.242097073,"samples":636278},{"name":"Sort using localeCompare","opsSec":1197474.7260980061,"samples":598738}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,248|1125|
|{...smallObject} - Total keys: 2|11,925,001|5962501|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,436|1219|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,490|3246|
|{ ...bigObject, ...anotherBigObject }|1,349|675|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,028,354|3514178|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,048,968|5524485|
|{ ...smallObject, ...anotherSmallObject }|9,038,796|4519399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2248.6677550244676,"samples":1125},{"name":"{...smallObject} - Total keys: 2","opsSec":11925001.329018518,"samples":5962501},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2436.37484896679,"samples":1219},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6490.9456212265795,"samples":3246},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1349.5344919654476,"samples":675},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7028354.622582555,"samples":3514178},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11048968.403626716,"samples":5524485},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9038796.866461003,"samples":4519399}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,938,313|7969157|
|Using backtick (`)|15,899,672|7949837|
|Using array.join|6,134,128|3067065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:00:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15938313.293201858,"samples":7969157},{"name":"Using backtick (`)","opsSec":15899672.172845367,"samples":7949837},{"name":"Using array.join","opsSec":6134128.841707696,"samples":3067065}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,734,189|6367096|
|(short string) (true) String#slice and strict comparison|16,131,637|8065819|
|(long string) (true) String#endsWith|13,475,024|6737513|
|(long string) (true) String#slice and strict comparison|16,104,811|8052406|
|(short string) (false) String#endsWith|13,972,160|6986081|
|(short string) (false) String#slice and strict comparison|16,156,004|8078003|
|(long string) (false) String#endsWith|13,771,283|6885642|
|(long string) (false) String#slice and strict comparison|16,106,330|8053166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:09:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12734189.99619546,"samples":6367096},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16131637.853848876,"samples":8065819},{"name":"(long string) (true) String#endsWith","opsSec":13475024.541435923,"samples":6737513},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16104811.408688316,"samples":8052406},{"name":"(short string) (false) String#endsWith","opsSec":13972160.640861142,"samples":6986081},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16156004.967693012,"samples":8078003},{"name":"(long string) (false) String#endsWith","opsSec":13771283.409000631,"samples":6885642},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16106330.402539862,"samples":8053166}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,887,795|7943898|
|Using indexof|15,950,901|7975451|
|Using RegExp.test|7,574,880|3787441|
|Using RegExp.text with cached regex pattern|7,823,738|3911870|
|Using new RegExp.test|3,508,606|1754304|
|Using new RegExp.test with cached regex pattern|3,807,786|1903894|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:20:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15887795.59847776,"samples":7943898},{"name":"Using indexof","opsSec":15950901.117706047,"samples":7975451},{"name":"Using RegExp.test","opsSec":7574880.190395844,"samples":3787441},{"name":"Using RegExp.text with cached regex pattern","opsSec":7823738.86588258,"samples":3911870},{"name":"Using new RegExp.test","opsSec":3508606.485904279,"samples":1754304},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3807786.569233028,"samples":1903894}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,149,881|7574941|
|(short string) (true) String#slice and strict comparison|15,908,517|7954259|
|(long string) (true) String#startsWith|14,761,992|7380997|
|(long string) (true) String#slice and strict comparison|15,977,048|7988525|
|(short string) (false) String#startsWith|15,592,396|7796199|
|(short string) (false) String#slice and strict comparison|15,846,341|7923171|
|(long string) (false) String#startsWith|15,499,464|7749733|
|(long string) (false) String#slice and strict comparison|15,948,603|7974302|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:32:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15149881.270373339,"samples":7574941},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15908517.651054472,"samples":7954259},{"name":"(long string) (true) String#startsWith","opsSec":14761992.113530213,"samples":7380997},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15977048.986746063,"samples":7988525},{"name":"(short string) (false) String#startsWith","opsSec":15592396.289942196,"samples":7796199},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15846341.22927532,"samples":7923171},{"name":"(long string) (false) String#startsWith","opsSec":15499464.40360436,"samples":7749733},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15948603.254721107,"samples":7974302}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,295,103|7647552|
|Using this|15,871,957|7935979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:39:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15295103.715562321,"samples":7647552},{"name":"Using this","opsSec":15871957.228029422,"samples":7935979}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,446,500|3223251|
|Date.now()|9,080,274|4540138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:44:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6446500.668987851,"samples":3223251},{"name":"Date.now()","opsSec":9080274.03426532,"samples":4540138}]}-->

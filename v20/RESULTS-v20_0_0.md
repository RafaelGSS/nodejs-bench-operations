## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,075,220|8037611|
|Using dot notation|16,112,841|8056421|
|Using define property (writable)|3,390,546|1695274|
|Using define property initialized (writable)|3,947,937|1973969|
|Using define property (getter)|2,011,045|1005523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:23:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16075220.076019175,"samples":8037611},{"name":"Using dot notation","opsSec":16112841.669622328,"samples":8056421},{"name":"Using define property (writable)","opsSec":3390546.1132663186,"samples":1695274},{"name":"Using define property initialized (writable)","opsSec":3947937.098271432,"samples":1973969},{"name":"Using define property (getter)","opsSec":2011045.5588870256,"samples":1005523}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.007ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.328ms
array.push|1,000,000|31.709ms
new Array(length)|1,000,000|7.276ms
array.push|100,000,000|2,035.353ms
new Array(length)|100,000,000|4,723.197ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.03ms
new Array(length)|100|0.013ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.26ms
array.push|1,000,000|26.226ms
new Array(length)|1,000,000|4.373ms
array.push|100,000,000|2,805.041ms
new Array(length)|100,000,000|4,285.07ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|117|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":232.1924753926441,"samples":117},{"name":"Array.from","opsSec":23.583588246839337,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|312,412|156207|
|[True conditional] Using constructor name|306,265|153133|
|[True conditional] Check if property is valid then instanceof |312,174|156088|
|[False conditional] Using instanceof only|12,504,221|6252111|
|[False conditional] Using constructor name|15,909,029|7954515|
|[False conditional] Check if property is valid then instanceof |15,961,782|7980908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:52:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":312412.51819643093,"samples":156207},{"name":"[True conditional] Using constructor name","opsSec":306265.6205911244,"samples":153133},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":312174.66401309514,"samples":156088},{"name":"[False conditional] Using instanceof only","opsSec":12504221.385864828,"samples":6252111},{"name":"[False conditional] Using constructor name","opsSec":15909029.99241398,"samples":7954515},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15961782.054178255,"samples":7980908}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,713|3357|
|crypto.verify('RSA-SHA256')|6,863|3432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:58:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6713.002491962647,"samples":3357},{"name":"crypto.verify('RSA-SHA256')","opsSec":6863.205005890635,"samples":3432}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,007,662|503832|
|Using brackets {}|1,039,547|519774|
|Using '' + |1,030,821|515411|
|Using date.toString()|1,153,718|576860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1007662.3495139263,"samples":503832},{"name":"Using brackets {}","opsSec":1039547.4532485767,"samples":519774},{"name":"Using '' + ","opsSec":1030821.9577280576,"samples":515411},{"name":"Using date.toString()","opsSec":1153718.4051562995,"samples":576860}]}-->

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

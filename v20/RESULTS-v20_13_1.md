## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,003,072|10001537|
|Using dot notation|18,531,625|9265813|
|Using define property (writable)|3,493,732|1746867|
|Using define property initialized (writable)|4,186,154|2093078|
|Using define property (getter)|2,148,437|1074219|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:38:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20003072.99983302,"samples":10001537},{"name":"Using dot notation","opsSec":18531625.962887384,"samples":9265813},{"name":"Using define property (writable)","opsSec":3493732.3928849827,"samples":1746867},{"name":"Using define property initialized (writable)","opsSec":4186154.8362570596,"samples":2093078},{"name":"Using define property (getter)","opsSec":2148437.0117225717,"samples":1074219}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.087ms
new Array(length)|100|0.008ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.332ms
array.push|1,000,000|32.85ms
new Array(length)|1,000,000|9.188ms
array.push|100,000,000|2,257.658ms
new Array(length)|100,000,000|4,443.837ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.221ms
new Array(length)|10,000|0.175ms
array.push|1,000,000|25.146ms
new Array(length)|1,000,000|4.722ms
array.push|100,000,000|2,248.355ms
new Array(length)|100,000,000|4,842.155ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|222|112|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:49:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":222.86974373051876,"samples":112},{"name":"Array.from","opsSec":22.77909110416622,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,347|2674|
|new Blob (1024)|728|365|
|text (128)|6,196|3099|
|text (1024)|803|402|
|arrayBuffer (128)|6,397|3199|
|arrayBuffer (1024)|796|399|
|slice (0, 64)|82,541|41271|
|slice (0, 512)|29,480|14741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5347.911010760799,"samples":2674},{"name":"new Blob (1024)","opsSec":728.6979973957565,"samples":365},{"name":"text (128)","opsSec":6196.1284098446,"samples":3099},{"name":"text (1024)","opsSec":803.7301090368419,"samples":402},{"name":"arrayBuffer (128)","opsSec":6397.893615824931,"samples":3199},{"name":"arrayBuffer (1024)","opsSec":796.8139042564502,"samples":399},{"name":"slice (0, 64)","opsSec":82541.20430278653,"samples":41271},{"name":"slice (0, 512)","opsSec":29480.842641079522,"samples":14741}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|322,746|161374|
|[True conditional] Using constructor name|315,790|157896|
|[True conditional] Check if property is valid then instanceof |320,642|160322|
|[False conditional] Using instanceof only|19,872,338|9936170|
|[False conditional] Using constructor name|19,889,774|9944888|
|[False conditional] Check if property is valid then instanceof |19,877,970|9938986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":322746.4798640826,"samples":161374},{"name":"[True conditional] Using constructor name","opsSec":315790.57515287225,"samples":157896},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320642.7821987122,"samples":160322},{"name":"[False conditional] Using instanceof only","opsSec":19872338.489690557,"samples":9936170},{"name":"[False conditional] Using constructor name","opsSec":19889774.209887225,"samples":9944888},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19877970.80734362,"samples":9938986}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,202|3602|
|crypto.verify('RSA-SHA256')|7,268|3635|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:54:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7202.1350791426,"samples":3602},{"name":"crypto.verify('RSA-SHA256')","opsSec":7268.594079458875,"samples":3635}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,044,430|522216|
|Using brackets {}|1,069,940|534971|
|Using '' + |1,065,282|532642|
|Using date.toString()|1,173,823|586912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:09:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1044430.1638916855,"samples":522216},{"name":"Using brackets {}","opsSec":1069940.6390354638,"samples":534971},{"name":"Using '' + ","opsSec":1065282.836711234,"samples":532642},{"name":"Using date.toString()","opsSec":1173823.2863156497,"samples":586912}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,139,621|1569811|
|Using delete property (proto: null)|8,975,383|4487692|
|Using delete property (cached proto: null)|3,218,024|1609013|
|Using undefined assignment|19,998,313|9999157|
|Using undefined assignment (proto: null)|10,233,861|5116931|
|Using undefined property (cached proto: null)|19,977,183|9988592|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:21:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3139621.196257221,"samples":1569811},{"name":"Using delete property (proto: null)","opsSec":8975383.102463158,"samples":4487692},{"name":"Using delete property (cached proto: null)","opsSec":3218024.255833652,"samples":1609013},{"name":"Using undefined assignment","opsSec":19998313.880008366,"samples":9999157},{"name":"Using undefined assignment (proto: null)","opsSec":10233861.304119386,"samples":5116931},{"name":"Using undefined property (cached proto: null)","opsSec":19977183.68027047,"samples":9988592}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|307,057|153529|
|NodeError|299,054|149528|
|NodeError Range|318,652|159327|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:28:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":307057.9969294159,"samples":153529},{"name":"NodeError","opsSec":299054.87316124805,"samples":149528},{"name":"NodeError Range","opsSec":318652.026906655,"samples":159327}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,592,982|796492|
|Function returning explicitly undefined|1,586,970|793486|
|Function returning implicitly undefined|1,640,283|820142|
|Function returning string|1,595,506|797754|
|Function returning integer|1,626,137|813069|
|Function returning float|1,590,566|795284|
|Function returning functions|1,586,033|793017|
|Function returning arrow functions|1,596,911|798456|
|Function returning empty object|1,635,104|817553|
|Function returning empty array|1,622,077|811039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1592982.1871864968,"samples":796492},{"name":"Function returning explicitly undefined","opsSec":1586970.733596881,"samples":793486},{"name":"Function returning implicitly undefined","opsSec":1640283.635857548,"samples":820142},{"name":"Function returning string","opsSec":1595506.2640891715,"samples":797754},{"name":"Function returning integer","opsSec":1626137.6975385079,"samples":813069},{"name":"Function returning float","opsSec":1590566.743452527,"samples":795284},{"name":"Function returning functions","opsSec":1586033.121337587,"samples":793017},{"name":"Function returning arrow functions","opsSec":1596911.6774246846,"samples":798456},{"name":"Function returning empty object","opsSec":1635104.652676088,"samples":817553},{"name":"Function returning empty array","opsSec":1622077.8896955505,"samples":811039}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|19,893,651|9946826|
|using Array.includes (first item)|19,861,191|9930596|
|Using raw comparison|19,939,038|9969520|
|Using raw comparison (first item)|19,900,584|9950293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:41:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":19893651.64194739,"samples":9946826},{"name":"using Array.includes (first item)","opsSec":19861191.40408754,"samples":9930596},{"name":"Using raw comparison","opsSec":19939038.64421114,"samples":9969520},{"name":"Using raw comparison (first item)","opsSec":19900584.686552133,"samples":9950293}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,959,154|8479578|
|Using Object.getOwnPropertyNames()|16,361,323|8180662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:49:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16959154.473662738,"samples":8479578},{"name":"Using Object.getOwnPropertyNames()","opsSec":16361323.96725383,"samples":8180662}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,669,322|9834662|
|Length = 10_000 - Array.at|19,712,321|9856161|
|Length = 1_000_000 - Array.at|19,805,707|9902854|
|Length = 100 - Array[length - 1]|19,834,283|9917142|
|Length = 10_000 - Array[length - 1]|19,887,730|9943866|
|Length = 1_000_000 - Array[length - 1]|19,919,314|9959658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:56:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19669322.93786005,"samples":9834662},{"name":"Length = 10_000 - Array.at","opsSec":19712321.48755717,"samples":9856161},{"name":"Length = 1_000_000 - Array.at","opsSec":19805707.485099923,"samples":9902854},{"name":"Length = 100 - Array[length - 1]","opsSec":19834283.920660455,"samples":9917142},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19887730.568161923,"samples":9943866},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19919314.9642731,"samples":9959658}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,411,793|7205897|
|Object.create({})|1,878,343|939175|
|Cached Empty.prototype|19,824,384|9912193|
|Empty.prototype|1,921,634|960818|
|Empty class|1,280,617|640309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:04:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":14411793.711767586,"samples":7205897},{"name":"Object.create({})","opsSec":1878343.940464206,"samples":939175},{"name":"Cached Empty.prototype","opsSec":19824384.61230238,"samples":9912193},{"name":"Empty.prototype","opsSec":1921634.9661597447,"samples":960818},{"name":"Empty class","opsSec":1280617.9923183767,"samples":640309}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,915,677|9957839|
|Using optional chain (obj.field?.field2) (undefined)|19,970,257|9985129|
|Using and operator (obj.field && obj.field.field2) (Valid)|19,706,199|9853100|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,557,016|9278509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19915677.561850265,"samples":9957839},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19970257.92018313,"samples":9985129},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":19706199.64532664,"samples":9853100},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18557016.812378474,"samples":9278509}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|19,964,712|9982357|
|Using parseInt(x, 10) - big number (10 len)|19,951,021|9975511|
|Using + - small number (2 len)|20,022,968|10011485|
|Using + - big number (10 len)|19,943,938|9971970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:21:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":19964712.602484133,"samples":9982357},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19951021.76061386,"samples":9975511},{"name":"Using + - small number (2 len)","opsSec":20022968.478247978,"samples":10011485},{"name":"Using + - big number (10 len)","opsSec":19943938.165136535,"samples":9971970}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,086,195|543099|
|Using ? operator to avoid rejection|1,077,741|538871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:27:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1086195.768953935,"samples":543099},{"name":"Using ? operator to avoid rejection","opsSec":1077741.17660533,"samples":538871}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|19,850,729|9925366|
|Raw usage underscore usage|19,872,382|9936192|
|Manipulating private properties using #|19,921,033|9960517|
|Manipulating private properties using underscore(_)|19,883,151|9941576|
|Manipulating private properties using Symbol|19,924,133|9962067|
|Manipulating private properties using PrivateSymbol|14,887,271|7443636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:34:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":19850729.97524878,"samples":9925366},{"name":"Raw usage underscore usage","opsSec":19872382.966619216,"samples":9936192},{"name":"Manipulating private properties using #","opsSec":19921033.760905482,"samples":9960517},{"name":"Manipulating private properties using underscore(_)","opsSec":19883151.005912784,"samples":9941576},{"name":"Manipulating private properties using Symbol","opsSec":19924133.561486978,"samples":9962067},{"name":"Manipulating private properties using PrivateSymbol","opsSec":14887271.434287935,"samples":7443636}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,970,323|1985162|
|Adding property in the object creation - small object|4,054,408|2027205|
|Adding property after the function creation - small class|275,167|137585|
|Adding property in the function creation - small class|265,748|132875|
|Adding property after the class creation - small class|268,473|134237|
|Adding property in the class creation - small class|268,565|134283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:41:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3970323.5394427907,"samples":1985162},{"name":"Adding property in the object creation - small object","opsSec":4054408.402562589,"samples":2027205},{"name":"Adding property after the function creation - small class","opsSec":275167.7738926323,"samples":137585},{"name":"Adding property in the function creation - small class","opsSec":265748.4448402112,"samples":132875},{"name":"Adding property after the class creation - small class","opsSec":268473.5699053341,"samples":134237},{"name":"Adding property in the class creation - small class","opsSec":268565.8485288473,"samples":134283}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,893,449|9946725|
|Getter|16,031,760|8015881|
|Method|19,864,551|9932276|
|DefineProperty (getter)|19,974,259|9987130|
|DefineProperty (getter & enumerable=false)|16,125,119|8062560|
|DefineProperty (getter & configurable=false)|19,983,139|9991570|
|DefineProperty (getter & enumerable=false & configurable=false)|15,970,091|7985046|
|DefineProperty (writable)|20,001,298|10000650|
|DefineProperty (writable & enumerable=false)|19,966,973|9983487|
|DefineProperty (writable & enumerable=false & configurable=false)|19,940,209|9970105|
|DefineProperties (getter)|16,234,319|8117160|
|DefineProperties (getter & enumerable=false)|16,433,660|8216831|
|DefineProperties (getter & enumerable=false & configurable=false)|16,159,406|8079704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:52:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19893449.522535447,"samples":9946725},{"name":"Getter","opsSec":16031760.108186109,"samples":8015881},{"name":"Method","opsSec":19864551.84110109,"samples":9932276},{"name":"DefineProperty (getter)","opsSec":19974259.4410769,"samples":9987130},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16125119.000371225,"samples":8062560},{"name":"DefineProperty (getter & configurable=false)","opsSec":19983139.64032052,"samples":9991570},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":15970091.967966149,"samples":7985046},{"name":"DefineProperty (writable)","opsSec":20001298.44030713,"samples":10000650},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19966973.12171584,"samples":9983487},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19940209.282452837,"samples":9970105},{"name":"DefineProperties (getter)","opsSec":16234319.123094875,"samples":8117160},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16433660.19239027,"samples":8216831},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16159406.448840838,"samples":8079704}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,258,319|9629160|
|Setter|6,821,833|3410917|
|Method|19,183,680|9591841|
|DefineProperty (setter)|19,226,153|9613077|
|DefineProperty (setter & enumerable=false)|6,783,336|3391669|
|DefineProperty (setter & configurable=false)|6,737,434|3368718|
|DefineProperty (setter & enumerable=false & configurable=false)|6,864,497|3432249|
|DefineProperty (writable)|19,192,946|9596474|
|DefineProperty (writable & enumerable=false)|19,154,430|9577216|
|DefineProperty (writable & enumerable=false & configurable=false)|19,190,671|9595336|
|DefineProperties (setter)|19,183,323|9591662|
|DefineProperties (setter & enumerable=false)|6,920,356|3460179|
|DefineProperties (setter & enumerable=false & configurable=false)|6,954,774|3477388|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:11:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19258319.691871386,"samples":9629160},{"name":"Setter","opsSec":6821833.249592554,"samples":3410917},{"name":"Method","opsSec":19183680.311838772,"samples":9591841},{"name":"DefineProperty (setter)","opsSec":19226153.115533706,"samples":9613077},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6783336.399115978,"samples":3391669},{"name":"DefineProperty (setter & configurable=false)","opsSec":6737434.167394246,"samples":3368718},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6864497.972575062,"samples":3432249},{"name":"DefineProperty (writable)","opsSec":19192946.61795544,"samples":9596474},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19154430.276191976,"samples":9577216},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19190671.385709107,"samples":9595336},{"name":"DefineProperties (setter)","opsSec":19183323.807191893,"samples":9591662},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6920356.380660127,"samples":3460179},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6954774.915058491,"samples":3477388}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,679,046|5839524|
|{ ...object, __proto__: null }|10,838,698|5419353|
|{ ...object, newProp: true }|869,467|434734|
|structuredClone|301,381|150691|
|JSON.parse + JSON.stringify|186,719|93363|
|loop + object.keys starting with {}|1,416,953|708477|
|loop + object.keys starting with { __proto__: null }|857,825|428913|
|loop + object.keys starting with { randomProp: true }|636,536|318269|
|object.keys + reduce(FN, {})|1,449,664|724833|
|object.keys + reduce(FN, { __proto__: null })|824,315|412158|
|object.keys + reduce(FN, { newProp: true })|648,508|324255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:25:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11679046.505085552,"samples":5839524},{"name":"{ ...object, __proto__: null }","opsSec":10838698.586303072,"samples":5419353},{"name":"{ ...object, newProp: true }","opsSec":869467.3305100112,"samples":434734},{"name":"structuredClone","opsSec":301381.8553367433,"samples":150691},{"name":"JSON.parse + JSON.stringify","opsSec":186719.8494480965,"samples":93363},{"name":"loop + object.keys starting with {}","opsSec":1416953.4502213597,"samples":708477},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":857825.471579209,"samples":428913},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":636536.2240646466,"samples":318269},{"name":"object.keys + reduce(FN, {})","opsSec":1449664.245906565,"samples":724833},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":824315.8301910644,"samples":412158},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":648508.2114140895,"samples":324255}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|262,762|131382|
|Sort using first char|1,326,742|663372|
|Sort using localeCompare|1,255,138|627570|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:33:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":262762.78813802206,"samples":131382},{"name":"Sort using first char","opsSec":1326742.9677937927,"samples":663372},{"name":"Sort using localeCompare","opsSec":1255138.466220415,"samples":627570}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,283|1142|
|{...smallObject} - Total keys: 2|15,399,434|7699718|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,539|1270|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,798|3400|
|{ ...bigObject, ...anotherBigObject }|1,373|687|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,746,286|3873144|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|12,923,066|6461534|
|{ ...smallObject, ...anotherSmallObject }|11,314,583|5657293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:41:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2283.77413017096,"samples":1142},{"name":"{...smallObject} - Total keys: 2","opsSec":15399434.18286821,"samples":7699718},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2539.6539010455717,"samples":1270},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6798.217942341347,"samples":3400},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1373.5911560867717,"samples":687},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7746286.109933562,"samples":3873144},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":12923066.087390792,"samples":6461534},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11314583.986116484,"samples":5657293}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|20,007,746|10003874|
|Using backtick (`)|20,011,079|10005540|
|Using array.join|6,878,505|3439253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:01:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":20007746.919576727,"samples":10003874},{"name":"Using backtick (`)","opsSec":20011079.759926002,"samples":10005540},{"name":"Using array.join","opsSec":6878505.4634890035,"samples":3439253}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,120,285|8060143|
|(short string) (true) String#slice and strict comparison|20,050,319|10025160|
|(long string) (true) String#endsWith|15,731,196|7865599|
|(long string) (true) String#slice and strict comparison|19,945,290|9972646|
|(short string) (false) String#endsWith|16,301,679|8150840|
|(short string) (false) String#slice and strict comparison|19,998,911|9999456|
|(long string) (false) String#endsWith|16,194,333|8097167|
|(long string) (false) String#slice and strict comparison|19,339,169|9669585|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:10:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16120285.064961983,"samples":8060143},{"name":"(short string) (true) String#slice and strict comparison","opsSec":20050319.238051433,"samples":10025160},{"name":"(long string) (true) String#endsWith","opsSec":15731196.143699685,"samples":7865599},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19945290.04535794,"samples":9972646},{"name":"(short string) (false) String#endsWith","opsSec":16301679.57619177,"samples":8150840},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19998911.28013659,"samples":9999456},{"name":"(long string) (false) String#endsWith","opsSec":16194333.708592858,"samples":8097167},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19339169.96126663,"samples":9669585}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,661,785|9830893|
|Using indexof|19,687,397|9843699|
|Using RegExp.test|9,245,646|4622824|
|Using RegExp.text with cached regex pattern|9,407,774|4703888|
|Using new RegExp.test|3,658,511|1829256|
|Using new RegExp.test with cached regex pattern|4,137,490|2068746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:22:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19661785.606771756,"samples":9830893},{"name":"Using indexof","opsSec":19687397.33049322,"samples":9843699},{"name":"Using RegExp.test","opsSec":9245646.039925639,"samples":4622824},{"name":"Using RegExp.text with cached regex pattern","opsSec":9407774.965127222,"samples":4703888},{"name":"Using new RegExp.test","opsSec":3658511.5975502916,"samples":1829256},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4137490.9490631856,"samples":2068746}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|18,409,141|9204572|
|(short string) (true) String#slice and strict comparison|19,923,796|9961899|
|(long string) (true) String#startsWith|17,619,568|8809785|
|(long string) (true) String#slice and strict comparison|19,985,623|9992812|
|(short string) (false) String#startsWith|19,505,805|9752903|
|(short string) (false) String#slice and strict comparison|19,955,970|9977986|
|(long string) (false) String#startsWith|19,160,563|9580282|
|(long string) (false) String#slice and strict comparison|19,818,590|9909296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:30:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":18409141.82766819,"samples":9204572},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19923796.047510453,"samples":9961899},{"name":"(long string) (true) String#startsWith","opsSec":17619568.519984588,"samples":8809785},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19985623.68001121,"samples":9992812},{"name":"(short string) (false) String#startsWith","opsSec":19505805.41469876,"samples":9752903},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19955970.16396954,"samples":9977986},{"name":"(long string) (false) String#startsWith","opsSec":19160563.425086427,"samples":9580282},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19818590.097525164,"samples":9909296}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,251,118|9625560|
|Using this|19,430,616|9715309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:39:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":19251118.498439573,"samples":9625560},{"name":"Using this","opsSec":19430616.601020012,"samples":9715309}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,154,543|3577272|
|Date.now()|10,240,664|5120333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:46:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":7154543.62796334,"samples":3577272},{"name":"Date.now()","opsSec":10240664.99641191,"samples":5120333}]}-->

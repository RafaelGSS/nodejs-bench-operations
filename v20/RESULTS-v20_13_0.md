## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,934,418|9967210|
|Using dot notation|19,968,250|9984126|
|Using define property (writable)|3,590,025|1795013|
|Using define property initialized (writable)|3,946,251|1973126|
|Using define property (getter)|2,185,765|1092883|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:24:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19934418.325500306,"samples":9967210},{"name":"Using dot notation","opsSec":19968250.16281365,"samples":9984126},{"name":"Using define property (writable)","opsSec":3590025.9856333607,"samples":1795013},{"name":"Using define property initialized (writable)","opsSec":3946251.384385279,"samples":1973126},{"name":"Using define property (getter)","opsSec":2185765.4710485926,"samples":1092883}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.079ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.328ms
array.push|1,000,000|31.444ms
new Array(length)|1,000,000|8.358ms
array.push|100,000,000|2,030.506ms
new Array(length)|100,000,000|4,703.547ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|23.978ms
new Array(length)|1,000,000|4.69ms
array.push|100,000,000|2,813.259ms
new Array(length)|100,000,000|4,215.718ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|235|118|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":235.57581323880123,"samples":118},{"name":"Array.from","opsSec":23.44092081781577,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|316,315|158158|
|[True conditional] Using constructor name|321,276|160639|
|[True conditional] Check if property is valid then instanceof |323,701|161851|
|[False conditional] Using instanceof only|19,901,088|9950545|
|[False conditional] Using constructor name|19,977,676|9988839|
|[False conditional] Check if property is valid then instanceof |19,847,148|9923575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:53:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":316315.98038837593,"samples":158158},{"name":"[True conditional] Using constructor name","opsSec":321276.2901675791,"samples":160639},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323701.28008834104,"samples":161851},{"name":"[False conditional] Using instanceof only","opsSec":19901088.487519223,"samples":9950545},{"name":"[False conditional] Using constructor name","opsSec":19977676.80146534,"samples":9988839},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19847148.72975223,"samples":9923575}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,197|3599|
|crypto.verify('RSA-SHA256')|7,258|3630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:59:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7197.043901505861,"samples":3599},{"name":"crypto.verify('RSA-SHA256')","opsSec":7258.464776631941,"samples":3630}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,066,566|533284|
|Using brackets {}|1,072,586|536294|
|Using '' + |1,072,022|536012|
|Using date.toString()|1,176,594|588298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:15:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1066566.8801047292,"samples":533284},{"name":"Using brackets {}","opsSec":1072586.5305563917,"samples":536294},{"name":"Using '' + ","opsSec":1072022.2161553502,"samples":536012},{"name":"Using date.toString()","opsSec":1176594.9222383578,"samples":588298}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,157,216|1578609|
|Using delete property (proto: null)|8,974,525|4487264|
|Using delete property (cached proto: null)|3,084,729|1542365|
|Using undefined assignment|19,973,050|9986526|
|Using undefined assignment (proto: null)|9,401,509|4700755|
|Using undefined property (cached proto: null)|19,932,384|9966193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:20:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3157216.6108240886,"samples":1578609},{"name":"Using delete property (proto: null)","opsSec":8974525.971756566,"samples":4487264},{"name":"Using delete property (cached proto: null)","opsSec":3084729.117769536,"samples":1542365},{"name":"Using undefined assignment","opsSec":19973050.80158316,"samples":9986526},{"name":"Using undefined assignment (proto: null)","opsSec":9401509.379525173,"samples":4700755},{"name":"Using undefined property (cached proto: null)","opsSec":19932384.126341987,"samples":9966193}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|316,673|158337|
|NodeError|315,831|157916|
|NodeError Range|322,609|161305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:27:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":316673.6985266283,"samples":158337},{"name":"NodeError","opsSec":315831.463718172,"samples":157916},{"name":"NodeError Range","opsSec":322609.8251454621,"samples":161305}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,558,763|779382|
|Function returning explicitly undefined|1,539,769|769885|
|Function returning implicitly undefined|1,594,161|797081|
|Function returning string|1,546,637|773319|
|Function returning integer|1,594,011|797006|
|Function returning float|1,567,646|783824|
|Function returning functions|1,555,775|777888|
|Function returning arrow functions|1,568,179|784090|
|Function returning empty object|1,596,511|798256|
|Function returning empty array|1,621,901|810951|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1558763.791125692,"samples":779382},{"name":"Function returning explicitly undefined","opsSec":1539769.5996598161,"samples":769885},{"name":"Function returning implicitly undefined","opsSec":1594161.3591473848,"samples":797081},{"name":"Function returning string","opsSec":1546637.4463055,"samples":773319},{"name":"Function returning integer","opsSec":1594011.3368922046,"samples":797006},{"name":"Function returning float","opsSec":1567646.4480293626,"samples":783824},{"name":"Function returning functions","opsSec":1555775.5519368828,"samples":777888},{"name":"Function returning arrow functions","opsSec":1568179.1061379265,"samples":784090},{"name":"Function returning empty object","opsSec":1596511.744556106,"samples":798256},{"name":"Function returning empty array","opsSec":1621901.704814952,"samples":810951}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|19,894,873|9947437|
|using Array.includes (first item)|19,925,966|9962984|
|Using raw comparison|19,918,442|9959222|
|Using raw comparison (first item)|19,932,608|9966305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:42:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":19894873.960213903,"samples":9947437},{"name":"using Array.includes (first item)","opsSec":19925966.52546819,"samples":9962984},{"name":"Using raw comparison","opsSec":19918442.167477556,"samples":9959222},{"name":"Using raw comparison (first item)","opsSec":19932608.28581374,"samples":9966305}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,777,646|8388824|
|Using Object.getOwnPropertyNames()|16,329,566|8164784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16777646.657752782,"samples":8388824},{"name":"Using Object.getOwnPropertyNames()","opsSec":16329566.75896914,"samples":8164784}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,855,307|9927654|
|Length = 10_000 - Array.at|19,712,747|9856374|
|Length = 1_000_000 - Array.at|19,825,594|9912798|
|Length = 100 - Array[length - 1]|19,301,403|9650702|
|Length = 10_000 - Array[length - 1]|19,323,086|9661544|
|Length = 1_000_000 - Array[length - 1]|19,280,407|9640204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:56:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19855307.96026743,"samples":9927654},{"name":"Length = 10_000 - Array.at","opsSec":19712747.44804152,"samples":9856374},{"name":"Length = 1_000_000 - Array.at","opsSec":19825594.29502197,"samples":9912798},{"name":"Length = 100 - Array[length - 1]","opsSec":19301403.30528343,"samples":9650702},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19323086.99530627,"samples":9661544},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19280407.151674423,"samples":9640204}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,475,812|7237907|
|Object.create({})|1,918,409|959205|
|Cached Empty.prototype|19,870,033|9935017|
|Empty.prototype|1,933,981|966991|
|Empty class|1,277,062|643641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":14475812.320804464,"samples":7237907},{"name":"Object.create({})","opsSec":1918409.7007268826,"samples":959205},{"name":"Cached Empty.prototype","opsSec":19870033.00649227,"samples":9935017},{"name":"Empty.prototype","opsSec":1933981.6944285936,"samples":966991},{"name":"Empty class","opsSec":1277062.9271320405,"samples":643641}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,855,047|9927524|
|Using optional chain (obj.field?.field2) (undefined)|20,025,490|10012746|
|Using and operator (obj.field && obj.field.field2) (Valid)|20,016,385|10008193|
|Using and operator (obj.field && obj.field.field2) (undefined)|19,975,001|9987501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:13:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19855047.205815107,"samples":9927524},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":20025490.3579194,"samples":10012746},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":20016385.519569594,"samples":10008193},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":19975001.121093113,"samples":9987501}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|20,002,587|10001294|
|Using parseInt(x, 10) - big number (10 len)|20,128,565|10064283|
|Using + - small number (2 len)|20,048,516|10024259|
|Using + - big number (10 len)|20,072,042|10036022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:21:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":20002587.279908344,"samples":10001294},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20128565.718195334,"samples":10064283},{"name":"Using + - small number (2 len)","opsSec":20048516.275868006,"samples":10024259},{"name":"Using + - big number (10 len)","opsSec":20072042.835878223,"samples":10036022}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,101,576|550790|
|Using ? operator to avoid rejection|1,113,095|556548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1101576.7503485426,"samples":550790},{"name":"Using ? operator to avoid rejection","opsSec":1113095.41228582,"samples":556548}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|19,550,665|9775333|
|Raw usage underscore usage|18,918,211|9459106|
|Manipulating private properties using #|19,945,079|9972540|
|Manipulating private properties using underscore(_)|19,950,003|9975002|
|Manipulating private properties using Symbol|19,977,392|9988697|
|Manipulating private properties using PrivateSymbol|14,830,520|7415261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:33:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":19550665.178852476,"samples":9775333},{"name":"Raw usage underscore usage","opsSec":18918211.432537258,"samples":9459106},{"name":"Manipulating private properties using #","opsSec":19945079.28205113,"samples":9972540},{"name":"Manipulating private properties using underscore(_)","opsSec":19950003.0424176,"samples":9975002},{"name":"Manipulating private properties using Symbol","opsSec":19977392.361842662,"samples":9988697},{"name":"Manipulating private properties using PrivateSymbol","opsSec":14830520.250027044,"samples":7415261}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,011,616|2005809|
|Adding property in the object creation - small object|3,995,720|1997861|
|Adding property after the function creation - small class|265,149|132576|
|Adding property in the function creation - small class|272,031|136017|
|Adding property after the class creation - small class|264,461|132231|
|Adding property in the class creation - small class|265,627|132814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:42:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4011616.315120849,"samples":2005809},{"name":"Adding property in the object creation - small object","opsSec":3995720.002140671,"samples":1997861},{"name":"Adding property after the function creation - small class","opsSec":265149.6486529322,"samples":132576},{"name":"Adding property in the function creation - small class","opsSec":272031.3857783532,"samples":136017},{"name":"Adding property after the class creation - small class","opsSec":264461.4160692299,"samples":132231},{"name":"Adding property in the class creation - small class","opsSec":265627.9930935843,"samples":132814}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,834,233|9917117|
|Getter|16,058,072|8029037|
|Method|19,759,030|9879516|
|DefineProperty (getter)|19,983,779|9991890|
|DefineProperty (getter & enumerable=false)|16,367,314|8183658|
|DefineProperty (getter & configurable=false)|19,872,039|9936020|
|DefineProperty (getter & enumerable=false & configurable=false)|16,322,122|8161062|
|DefineProperty (writable)|19,844,478|9922240|
|DefineProperty (writable & enumerable=false)|19,874,833|9937417|
|DefineProperty (writable & enumerable=false & configurable=false)|19,914,229|9957115|
|DefineProperties (getter)|16,407,781|8203891|
|DefineProperties (getter & enumerable=false)|16,348,552|8174277|
|DefineProperties (getter & enumerable=false & configurable=false)|16,275,564|8137783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:53:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19834233.365273148,"samples":9917117},{"name":"Getter","opsSec":16058072.6511732,"samples":8029037},{"name":"Method","opsSec":19759030.933029506,"samples":9879516},{"name":"DefineProperty (getter)","opsSec":19983779.200691164,"samples":9991890},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16367314.264981095,"samples":8183658},{"name":"DefineProperty (getter & configurable=false)","opsSec":19872039.324482586,"samples":9936020},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16322122.628819743,"samples":8161062},{"name":"DefineProperty (writable)","opsSec":19844478.13498228,"samples":9922240},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19874833.28493756,"samples":9937417},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19914229.4025109,"samples":9957115},{"name":"DefineProperties (getter)","opsSec":16407781.015876867,"samples":8203891},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16348552.888324909,"samples":8174277},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16275564.567886017,"samples":8137783}]}-->

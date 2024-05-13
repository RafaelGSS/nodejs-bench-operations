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
new Array(length)|10|0.002ms
array.push|100|0.086ms
new Array(length)|100|0.008ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.279ms
new Array(length)|10,000|0.332ms
array.push|1,000,000|32.722ms
new Array(length)|1,000,000|8.889ms
array.push|100,000,000|2,025.452ms
new Array(length)|100,000,000|4,722.061ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.011ms
new Array(length)|100|0.03ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.229ms
new Array(length)|10,000|0.259ms
array.push|1,000,000|23.62ms
new Array(length)|1,000,000|4.627ms
array.push|100,000,000|2,797.573ms
new Array(length)|100,000,000|4,250.577ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|243|122|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":243.31112537627837,"samples":122},{"name":"Array.from","opsSec":22.977626369261884,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|326,046|163024|
|[True conditional] Using constructor name|325,184|162593|
|[True conditional] Check if property is valid then instanceof |329,514|164758|
|[False conditional] Using instanceof only|19,872,984|9936493|
|[False conditional] Using constructor name|19,876,673|9938337|
|[False conditional] Check if property is valid then instanceof |19,828,750|9914376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:47:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":326046.7160280248,"samples":163024},{"name":"[True conditional] Using constructor name","opsSec":325184.88136408606,"samples":162593},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":329514.23314456234,"samples":164758},{"name":"[False conditional] Using instanceof only","opsSec":19872984.9665893,"samples":9936493},{"name":"[False conditional] Using constructor name","opsSec":19876673.64224792,"samples":9938337},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19828750.651676673,"samples":9914376}]}-->

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

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,720,938|9860470|
|Setter|6,830,514|3415258|
|Method|19,484,299|9742150|
|DefineProperty (setter)|19,677,560|9838781|
|DefineProperty (setter & enumerable=false)|6,861,004|3430503|
|DefineProperty (setter & configurable=false)|6,775,388|3387695|
|DefineProperty (setter & enumerable=false & configurable=false)|6,948,691|3474346|
|DefineProperty (writable)|19,708,893|9854447|
|DefineProperty (writable & enumerable=false)|19,493,213|9746607|
|DefineProperty (writable & enumerable=false & configurable=false)|19,729,249|9864625|
|DefineProperties (setter)|18,721,195|9360598|
|DefineProperties (setter & enumerable=false)|6,587,079|3293540|
|DefineProperties (setter & enumerable=false & configurable=false)|6,726,083|3363042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:10:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19720938.50123082,"samples":9860470},{"name":"Setter","opsSec":6830514.674865391,"samples":3415258},{"name":"Method","opsSec":19484299.53237814,"samples":9742150},{"name":"DefineProperty (setter)","opsSec":19677560.66198856,"samples":9838781},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6861004.833647004,"samples":3430503},{"name":"DefineProperty (setter & configurable=false)","opsSec":6775388.888814303,"samples":3387695},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6948691.72203439,"samples":3474346},{"name":"DefineProperty (writable)","opsSec":19708893.842444807,"samples":9854447},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19493213.688282646,"samples":9746607},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19729249.99947791,"samples":9864625},{"name":"DefineProperties (setter)","opsSec":18721195.289067004,"samples":9360598},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6587079.776007005,"samples":3293540},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6726083.4753771555,"samples":3363042}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,786,643|5893322|
|{ ...object, __proto__: null }|11,529,024|5764513|
|{ ...object, newProp: true }|858,713|429615|
|structuredClone|306,740|153371|
|JSON.parse + JSON.stringify|189,424|94715|
|loop + object.keys starting with {}|1,438,971|719486|
|loop + object.keys starting with { __proto__: null }|890,258|445130|
|loop + object.keys starting with { randomProp: true }|652,335|326168|
|object.keys + reduce(FN, {})|1,474,573|737287|
|object.keys + reduce(FN, { __proto__: null })|853,783|426892|
|object.keys + reduce(FN, { newProp: true })|655,193|327597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:26:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11786643.905707326,"samples":5893322},{"name":"{ ...object, __proto__: null }","opsSec":11529024.708750367,"samples":5764513},{"name":"{ ...object, newProp: true }","opsSec":858713.2916033529,"samples":429615},{"name":"structuredClone","opsSec":306740.6165998413,"samples":153371},{"name":"JSON.parse + JSON.stringify","opsSec":189424.67148390663,"samples":94715},{"name":"loop + object.keys starting with {}","opsSec":1438971.873367621,"samples":719486},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":890258.4794382841,"samples":445130},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652335.1558780582,"samples":326168},{"name":"object.keys + reduce(FN, {})","opsSec":1474573.967556819,"samples":737287},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":853783.745571047,"samples":426892},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":655193.7929584648,"samples":327597}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|256,749|128375|
|Sort using first char|1,317,475|658738|
|Sort using localeCompare|1,250,558|625280|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:34:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":256749.1840510926,"samples":128375},{"name":"Sort using first char","opsSec":1317475.9683806226,"samples":658738},{"name":"Sort using localeCompare","opsSec":1250558.8444834766,"samples":625280}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,336|1169|
|{...smallObject} - Total keys: 2|15,329,380|7664691|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,528|1265|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,825|3413|
|{ ...bigObject, ...anotherBigObject }|1,361|681|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,851,441|3925721|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|13,005,340|6502671|
|{ ...smallObject, ...anotherSmallObject }|11,358,535|5679268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:40:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2336.5860850282484,"samples":1169},{"name":"{...smallObject} - Total keys: 2","opsSec":15329380.22179567,"samples":7664691},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2528.6191008800834,"samples":1265},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6825.816603959106,"samples":3413},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1361.9773285253943,"samples":681},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7851441.13637026,"samples":3925721},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":13005340.465357477,"samples":6502671},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11358535.636503803,"samples":5679268}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|19,854,691|9927346|
|Using backtick (`)|19,905,461|9952731|
|Using array.join|6,554,937|3277469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:59:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":19854691.0866664,"samples":9927346},{"name":"Using backtick (`)","opsSec":19905461.24357864,"samples":9952731},{"name":"Using array.join","opsSec":6554937.029874642,"samples":3277469}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,108,782|7554392|
|(short string) (true) String#slice and strict comparison|18,384,197|9192099|
|(long string) (true) String#endsWith|14,901,118|7450560|
|(long string) (true) String#slice and strict comparison|18,503,398|9251700|
|(short string) (false) String#endsWith|15,288,817|7644409|
|(short string) (false) String#slice and strict comparison|18,427,000|9213501|
|(long string) (false) String#endsWith|15,160,384|7580193|
|(long string) (false) String#slice and strict comparison|18,405,475|9202738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:11:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15108782.428691303,"samples":7554392},{"name":"(short string) (true) String#slice and strict comparison","opsSec":18384197.926462818,"samples":9192099},{"name":"(long string) (true) String#endsWith","opsSec":14901118.390673246,"samples":7450560},{"name":"(long string) (true) String#slice and strict comparison","opsSec":18503398.96389668,"samples":9251700},{"name":"(short string) (false) String#endsWith","opsSec":15288817.69432277,"samples":7644409},{"name":"(short string) (false) String#slice and strict comparison","opsSec":18427000.488957293,"samples":9213501},{"name":"(long string) (false) String#endsWith","opsSec":15160384.635584556,"samples":7580193},{"name":"(long string) (false) String#slice and strict comparison","opsSec":18405475.042951666,"samples":9202738}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,964,637|9982319|
|Using indexof|19,905,462|9952732|
|Using RegExp.test|9,262,800|4631401|
|Using RegExp.text with cached regex pattern|9,409,758|4704880|
|Using new RegExp.test|3,514,424|1757213|
|Using new RegExp.test with cached regex pattern|4,099,707|2049854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:20:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19964637.76040973,"samples":9982319},{"name":"Using indexof","opsSec":19905462.407566343,"samples":9952732},{"name":"Using RegExp.test","opsSec":9262800.18445739,"samples":4631401},{"name":"Using RegExp.text with cached regex pattern","opsSec":9409758.118031478,"samples":4704880},{"name":"Using new RegExp.test","opsSec":3514424.727778125,"samples":1757213},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4099707.713013532,"samples":2049854}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|18,489,640|9244821|
|(short string) (true) String#slice and strict comparison|19,935,077|9967539|
|(long string) (true) String#startsWith|16,770,293|8385147|
|(long string) (true) String#slice and strict comparison|19,884,960|9942481|
|(short string) (false) String#startsWith|18,573,352|9286677|
|(short string) (false) String#slice and strict comparison|19,630,435|9815218|
|(long string) (false) String#startsWith|18,154,482|9077242|
|(long string) (false) String#slice and strict comparison|19,718,365|9859183|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:29:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":18489640.557811316,"samples":9244821},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19935077.122782916,"samples":9967539},{"name":"(long string) (true) String#startsWith","opsSec":16770293.295665136,"samples":8385147},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19884960.608010113,"samples":9942481},{"name":"(short string) (false) String#startsWith","opsSec":18573352.142765377,"samples":9286677},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19630435.332362868,"samples":9815218},{"name":"(long string) (false) String#startsWith","opsSec":18154482.76540361,"samples":9077242},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19718365.369535044,"samples":9859183}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,408,435|9704218|
|Using this|19,591,433|9795717|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:39:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":19408435.262540247,"samples":9704218},{"name":"Using this","opsSec":19591433.96077546,"samples":9795717}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,946,136|3473069|
|Date.now()|10,178,226|5089114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:45:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6946136.471854488,"samples":3473069},{"name":"Date.now()","opsSec":10178226.351125449,"samples":5089114}]}-->

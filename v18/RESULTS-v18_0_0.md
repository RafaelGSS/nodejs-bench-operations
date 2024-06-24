## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,321,841|10160921|
|Using dot notation|20,603,142|10301572|
|Using define property (writable)|3,703,781|1851891|
|Using define property initialized (writable)|4,405,291|2202646|
|Using define property (getter)|2,144,224|1072115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:36:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20321841.227994815,"samples":10160921},{"name":"Using dot notation","opsSec":20603142.92914649,"samples":10301572},{"name":"Using define property (writable)","opsSec":3703781.4073495544,"samples":1851891},{"name":"Using define property initialized (writable)","opsSec":4405291.797344136,"samples":2202646},{"name":"Using define property (getter)","opsSec":2144224.309231562,"samples":1072115}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.007ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.381ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|27.604ms
new Array(length)|1,000,000|17.815ms
array.push|100,000,000|2,136.169ms
new Array(length)|100,000,000|4,377.658ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.456ms
new Array(length)|10,000|3.023ms
array.push|1,000,000|262.917ms
new Array(length)|1,000,000|6.074ms
array.push|100,000,000|2,668.955ms
new Array(length)|100,000,000|4,810.238ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|109|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:49:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.13618102762067,"samples":109},{"name":"Array.from","opsSec":22.103456462088513,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,194|2598|
|new Blob (1024)|709|355|
|text (128)|35,261|17631|
|text (1024)|17,709|8855|
|arrayBuffer (128)|39,899|19951|
|arrayBuffer (1024)|17,694|8848|
|slice (0, 64)|95,989|48347|
|slice (0, 512)|26,414|13208|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:52:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5194.593293725939,"samples":2598},{"name":"new Blob (1024)","opsSec":709.1463154820458,"samples":355},{"name":"text (128)","opsSec":35261.26825862353,"samples":17631},{"name":"text (1024)","opsSec":17709.48383956053,"samples":8855},{"name":"arrayBuffer (128)","opsSec":39899.845728228465,"samples":19951},{"name":"arrayBuffer (1024)","opsSec":17694.73472047816,"samples":8848},{"name":"slice (0, 64)","opsSec":95989.30031102509,"samples":48347},{"name":"slice (0, 512)","opsSec":26414.036010540935,"samples":13208}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|302,615|151308|
|[True conditional] Using constructor name|312,309|156155|
|[True conditional] Check if property is valid then instanceof |318,812|159407|
|[False conditional] Using instanceof only|14,610,168|7305085|
|[False conditional] Using constructor name|20,742,533|10371267|
|[False conditional] Check if property is valid then instanceof |20,692,694|10346348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:58:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":302615.248288699,"samples":151308},{"name":"[True conditional] Using constructor name","opsSec":312309.8494623069,"samples":156155},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318812.64440766675,"samples":159407},{"name":"[False conditional] Using instanceof only","opsSec":14610168.948481636,"samples":7305085},{"name":"[False conditional] Using constructor name","opsSec":20742533.87053083,"samples":10371267},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":20692694.349543914,"samples":10346348}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,350|1676|
|crypto.verify('RSA-SHA256')|3,329|1665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:02:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3350.817262051664,"samples":1676},{"name":"crypto.verify('RSA-SHA256')","opsSec":3329.041509059294,"samples":1665}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,210,794|1105398|
|fromUnixToISOString(new Date())|2,083,341|1041671|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2210794.160579515,"samples":1105398},{"name":"fromUnixToISOString(new Date())","opsSec":2083341.6670101022,"samples":1041671}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,813|5407|
|Intl.DateTimeFormat().format(new Date())|10,271|5136|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,092|5547|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,570|5286|
|Reusing Intl.DateTimeFormat()|690,825|345413|
|Date.toLocaleDateString()|700,138|350070|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|15,892|7947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:11:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10813.484391796277,"samples":5407},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10271.730243990438,"samples":5136},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11092.35358413656,"samples":5547},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10570.356838123436,"samples":5286},{"name":"Reusing Intl.DateTimeFormat()","opsSec":690825.9818347573,"samples":345413},{"name":"Date.toLocaleDateString()","opsSec":700138.4806882542,"samples":350070},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":15892.045755978463,"samples":7947}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,023,948|511975|
|Using brackets {}|1,036,387|518194|
|Using '' + |1,049,967|524984|
|Using date.toString()|1,139,448|569725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1023948.7184288995,"samples":511975},{"name":"Using brackets {}","opsSec":1036387.5271797602,"samples":518194},{"name":"Using '' + ","opsSec":1049967.3412941224,"samples":524984},{"name":"Using date.toString()","opsSec":1139448.192836793,"samples":569725}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,140,202|1570102|
|Using delete property (proto: null)|9,602,344|4801173|
|Using delete property (cached proto: null)|3,186,017|1593009|
|Using undefined assignment|21,061,591|10530796|
|Using undefined assignment (proto: null)|10,743,953|5371977|
|Using undefined property (cached proto: null)|21,055,252|10527627|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:20:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3140202.9055487015,"samples":1570102},{"name":"Using delete property (proto: null)","opsSec":9602344.735521423,"samples":4801173},{"name":"Using delete property (cached proto: null)","opsSec":3186017.401881691,"samples":1593009},{"name":"Using undefined assignment","opsSec":21061591.91696913,"samples":10530796},{"name":"Using undefined assignment (proto: null)","opsSec":10743953.311411161,"samples":5371977},{"name":"Using undefined property (cached proto: null)","opsSec":21055252.603665803,"samples":10527627}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|305,199|152600|
|NodeError|304,114|152058|
|NodeError Range|309,263|154632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:27:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":305199.1850933532,"samples":152600},{"name":"NodeError","opsSec":304114.2427990892,"samples":152058},{"name":"NodeError Range","opsSec":309263.99811459135,"samples":154632}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,592,954|796478|
|Function returning explicitly undefined|1,591,630|795816|
|Function returning implicitly undefined|1,677,275|838638|
|Function returning string|1,572,788|786395|
|Function returning integer|1,655,295|827648|
|Function returning float|1,636,385|818193|
|Function returning functions|1,586,350|793176|
|Function returning arrow functions|1,599,858|799930|
|Function returning empty object|1,634,687|817344|
|Function returning empty array|1,632,157|816079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:30:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1592954.8050144352,"samples":796478},{"name":"Function returning explicitly undefined","opsSec":1591630.711220674,"samples":795816},{"name":"Function returning implicitly undefined","opsSec":1677275.1211089548,"samples":838638},{"name":"Function returning string","opsSec":1572788.2096678163,"samples":786395},{"name":"Function returning integer","opsSec":1655295.0492436986,"samples":827648},{"name":"Function returning float","opsSec":1636385.69276558,"samples":818193},{"name":"Function returning functions","opsSec":1586350.860766105,"samples":793176},{"name":"Function returning arrow functions","opsSec":1599858.773973628,"samples":799930},{"name":"Function returning empty object","opsSec":1634687.817566689,"samples":817344},{"name":"Function returning empty array","opsSec":1632157.719180091,"samples":816079}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,967,738|8983870|
|using Array.includes (first item)|19,785,738|9910460|
|Using raw comparison|20,498,631|10249316|
|Using raw comparison (first item)|21,179,559|10589780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:36:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17967738.216181163,"samples":8983870},{"name":"using Array.includes (first item)","opsSec":19785738.53099119,"samples":9910460},{"name":"Using raw comparison","opsSec":20498631.65842672,"samples":10249316},{"name":"Using raw comparison (first item)","opsSec":21179559.379135843,"samples":10589780}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|17,584,077|8792040|
|Using Object.getOwnPropertyNames()|16,642,868|8321435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:43:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":17584077.909366183,"samples":8792040},{"name":"Using Object.getOwnPropertyNames()","opsSec":16642868.49178426,"samples":8321435}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|10,626,839|5313420|
|Length = 10_000 - Array.at|10,807,930|5403966|
|Length = 1_000_000 - Array.at|10,577,223|5288612|
|Length = 100 - Array[length - 1]|20,873,985|10436993|
|Length = 10_000 - Array[length - 1]|20,882,719|10441360|
|Length = 1_000_000 - Array[length - 1]|20,906,907|10453454|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:48:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":10626839.177459065,"samples":5313420},{"name":"Length = 10_000 - Array.at","opsSec":10807930.382607954,"samples":5403966},{"name":"Length = 1_000_000 - Array.at","opsSec":10577223.435883688,"samples":5288612},{"name":"Length = 100 - Array[length - 1]","opsSec":20873985.52619823,"samples":10436993},{"name":"Length = 10_000 - Array[length - 1]","opsSec":20882719.91143131,"samples":10441360},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":20906907.844737645,"samples":10453454}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|16,573,683|8286842|
|Object.create({})|1,873,300|936651|
|Cached Empty.prototype|20,910,051|10455026|
|Empty.prototype|1,926,978|963490|
|Empty class|1,195,716|597859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:56:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":16573683.66616218,"samples":8286842},{"name":"Object.create({})","opsSec":1873300.6802057873,"samples":936651},{"name":"Cached Empty.prototype","opsSec":20910051.857450295,"samples":10455026},{"name":"Empty.prototype","opsSec":1926978.8213673283,"samples":963490},{"name":"Empty class","opsSec":1195716.8549962065,"samples":597859}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,459,370|10229686|
|Using optional chain (obj.field?.field2) (undefined)|20,663,993|10331997|
|Using and operator (obj.field && obj.field.field2) (Valid)|20,733,429|10366715|
|Using and operator (obj.field && obj.field.field2) (undefined)|20,687,067|10343534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:00:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20459370.89557617,"samples":10229686},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":20663993.48851055,"samples":10331997},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":20733429.70811743,"samples":10366715},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":20687067.630625863,"samples":10343534}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|19,708,530|9854266|
|Using parseInt(x, 10) - big number (10 len)|9,742,792|4871397|
|Using + - small number (2 len)|21,062,563|10531282|
|Using + - big number (10 len)|21,024,645|10512323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:07:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":19708530.76089069,"samples":9854266},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9742792.54757562,"samples":4871397},{"name":"Using + - small number (2 len)","opsSec":21062563.85421358,"samples":10531282},{"name":"Using + - big number (10 len)","opsSec":21024645.253426053,"samples":10512323}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|980,772|490387|
|Using ? operator to avoid rejection|992,345|496173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:13:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":980772.9121490017,"samples":490387},{"name":"Using ? operator to avoid rejection","opsSec":992345.2045947205,"samples":496173}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,771,980|7385991|
|Raw usage underscore usage|20,137,771|10068886|
|Manipulating private properties using #|17,220,608|8610305|
|Manipulating private properties using underscore(_)|16,961,803|8480902|
|Manipulating private properties using Symbol|16,484,492|8242247|
|Manipulating private properties using PrivateSymbol|12,200,454|6100228|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:19:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":14771980.275252411,"samples":7385991},{"name":"Raw usage underscore usage","opsSec":20137771.762527213,"samples":10068886},{"name":"Manipulating private properties using #","opsSec":17220608.753082108,"samples":8610305},{"name":"Manipulating private properties using underscore(_)","opsSec":16961803.331158817,"samples":8480902},{"name":"Manipulating private properties using Symbol","opsSec":16484492.89085193,"samples":8242247},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12200454.818612015,"samples":6100228}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,107,939|1553970|
|Adding property in the object creation - small object|3,106,887|1553444|
|Adding property after the function creation - small class|247,460|123731|
|Adding property in the function creation - small class|245,670|122836|
|Adding property after the class creation - small class|214,623|107312|
|Adding property in the class creation - small class|213,134|106568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:25:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3107939.9076135214,"samples":1553970},{"name":"Adding property in the object creation - small object","opsSec":3106887.1286471584,"samples":1553444},{"name":"Adding property after the function creation - small class","opsSec":247460.51426825474,"samples":123731},{"name":"Adding property in the function creation - small class","opsSec":245670.51822632866,"samples":122836},{"name":"Adding property after the class creation - small class","opsSec":214623.04873383397,"samples":107312},{"name":"Adding property in the class creation - small class","opsSec":213134.23144820545,"samples":106568}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|21,070,157|10535079|
|Getter|17,272,778|8636390|
|Method|20,206,433|10103217|
|DefineProperty (getter)|20,212,913|10106457|
|DefineProperty (getter & enumerable=false)|16,498,829|8249416|
|DefineProperty (getter & configurable=false)|20,497,764|10248883|
|DefineProperty (getter & enumerable=false & configurable=false)|16,306,998|8153500|
|DefineProperty (writable)|19,798,632|9899317|
|DefineProperty (writable & enumerable=false)|20,195,271|10097636|
|DefineProperty (writable & enumerable=false & configurable=false)|19,666,147|9833075|
|DefineProperties (getter)|16,853,498|8426750|
|DefineProperties (getter & enumerable=false)|16,523,479|8261740|
|DefineProperties (getter & enumerable=false & configurable=false)|16,743,010|8371506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:31:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":21070157.440113332,"samples":10535079},{"name":"Getter","opsSec":17272778.492853142,"samples":8636390},{"name":"Method","opsSec":20206433.55482465,"samples":10103217},{"name":"DefineProperty (getter)","opsSec":20212913.489661228,"samples":10106457},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16498829.893603893,"samples":8249416},{"name":"DefineProperty (getter & configurable=false)","opsSec":20497764.161477342,"samples":10248883},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16306998.054505268,"samples":8153500},{"name":"DefineProperty (writable)","opsSec":19798632.096145354,"samples":9899317},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20195271.901782993,"samples":10097636},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19666147.43370161,"samples":9833075},{"name":"DefineProperties (getter)","opsSec":16853498.09754538,"samples":8426750},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16523479.756981812,"samples":8261740},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16743010.7609376,"samples":8371506}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|20,351,173|10175587|
|Setter|6,116,768|3058385|
|Method|20,727,785|10363893|
|DefineProperty (setter)|20,796,506|10398254|
|DefineProperty (setter & enumerable=false)|6,196,711|3098356|
|DefineProperty (setter & configurable=false)|6,225,923|3112962|
|DefineProperty (setter & enumerable=false & configurable=false)|6,352,321|3176161|
|DefineProperty (writable)|20,173,050|10086526|
|DefineProperty (writable & enumerable=false)|20,125,349|10062675|
|DefineProperty (writable & enumerable=false & configurable=false)|20,155,590|10077796|
|DefineProperties (setter)|20,792,080|10396041|
|DefineProperties (setter & enumerable=false)|6,173,093|3086547|
|DefineProperties (setter & enumerable=false & configurable=false)|6,118,847|3059424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:43:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":20351173.199782934,"samples":10175587},{"name":"Setter","opsSec":6116768.184649009,"samples":3058385},{"name":"Method","opsSec":20727785.132273775,"samples":10363893},{"name":"DefineProperty (setter)","opsSec":20796506.826089986,"samples":10398254},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6196711.655359213,"samples":3098356},{"name":"DefineProperty (setter & configurable=false)","opsSec":6225923.440552669,"samples":3112962},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6352321.238082443,"samples":3176161},{"name":"DefineProperty (writable)","opsSec":20173050.919298653,"samples":10086526},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20125349.183284152,"samples":10062675},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20155590.76758535,"samples":10077796},{"name":"DefineProperties (setter)","opsSec":20792080.13426573,"samples":10396041},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6173093.3473000005,"samples":3086547},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6118847.006548117,"samples":3059424}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,767,107|1383554|
|Using replaceAll()|2,645,592|1322797|
|Using replaceAll(//g)|2,616,506|1308254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2767107.280775988,"samples":1383554},{"name":"Using replaceAll()","opsSec":2645592.9710209635,"samples":1322797},{"name":"Using replaceAll(//g)","opsSec":2616506.5340287616,"samples":1308254}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,998,404|5999203|
|{ ...object, __proto__: null }|10,873,160|5436581|
|{ ...object, newProp: true }|710,633|355318|
|structuredClone|273,154|136578|
|JSON.parse + JSON.stringify|180,536|90269|
|loop + object.keys starting with {}|1,269,147|634574|
|loop + object.keys starting with { __proto__: null }|704,327|352164|
|loop + object.keys starting with { randomProp: true }|565,823|282912|
|object.keys + reduce(FN, {})|1,241,043|620522|
|object.keys + reduce(FN, { __proto__: null })|700,336|350169|
|object.keys + reduce(FN, { newProp: true })|572,308|286155|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:59:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11998404.982102882,"samples":5999203},{"name":"{ ...object, __proto__: null }","opsSec":10873160.233506862,"samples":5436581},{"name":"{ ...object, newProp: true }","opsSec":710633.7063752686,"samples":355318},{"name":"structuredClone","opsSec":273154.54968088516,"samples":136578},{"name":"JSON.parse + JSON.stringify","opsSec":180536.93382069957,"samples":90269},{"name":"loop + object.keys starting with {}","opsSec":1269147.481084638,"samples":634574},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":704327.8817389224,"samples":352164},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":565823.0499117074,"samples":282912},{"name":"object.keys + reduce(FN, {})","opsSec":1241043.9671286992,"samples":620522},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":700336.7568159899,"samples":350169},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":572308.2598796882,"samples":286155}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|280,192|140097|
|Sort using first char|1,236,613|618307|
|Sort using localeCompare|1,168,345|584173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:04:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":280192.1177971065,"samples":140097},{"name":"Sort using first char","opsSec":1236613.279169032,"samples":618307},{"name":"Sort using localeCompare","opsSec":1168345.0836100567,"samples":584173}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,043|1022|
|{...smallObject} - Total keys: 2|14,840,742|7420372|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,386|1194|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,439|3220|
|{ ...bigObject, ...anotherBigObject }|1,296|649|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,717,851|3358926|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,725,305|5862653|
|{ ...smallObject, ...anotherSmallObject }|10,280,287|5140144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:08:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2043.1755622465714,"samples":1022},{"name":"{...smallObject} - Total keys: 2","opsSec":14840742.88300013,"samples":7420372},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2386.260339801804,"samples":1194},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6439.36983066778,"samples":3220},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1296.1152255057793,"samples":649},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6717851.4839399485,"samples":3358926},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11725305.923734425,"samples":5862653},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":10280287.392455522,"samples":5140144}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,332|1167|
|streams.web.Readable reading 1e3 * "some data"|558|280|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:15:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2332.700891139162,"samples":1167},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":558.1188548285969,"samples":280}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,729|2365|
|streams.web.WritableStream writing 1e3 * "some data"|2,101|1051|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:20:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4729.233041424892,"samples":2365},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2101.7407460079176,"samples":1051}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|21,016,822|10508412|
|Using backtick (`)|21,050,721|10525362|
|Using array.join|6,640,344|3320173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:58:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":21016822.45667331,"samples":10508412},{"name":"Using backtick (`)","opsSec":21050721.912144586,"samples":10525362},{"name":"Using array.join","opsSec":6640344.647962969,"samples":3320173}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,388,955|8194478|
|(short string) (true) String#slice and strict comparison|18,616,941|9308471|
|(long string) (true) String#endsWith|15,615,145|7807573|
|(long string) (true) String#slice and strict comparison|20,831,993|10415997|
|(short string) (false) String#endsWith|17,087,418|8543710|
|(short string) (false) String#slice and strict comparison|21,028,177|10514089|
|(long string) (false) String#endsWith|16,829,781|8414891|
|(long string) (false) String#slice and strict comparison|20,829,983|10414992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16388955.58581226,"samples":8194478},{"name":"(short string) (true) String#slice and strict comparison","opsSec":18616941.39634704,"samples":9308471},{"name":"(long string) (true) String#endsWith","opsSec":15615145.828744719,"samples":7807573},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20831993.92053225,"samples":10415997},{"name":"(short string) (false) String#endsWith","opsSec":17087418.24819807,"samples":8543710},{"name":"(short string) (false) String#slice and strict comparison","opsSec":21028177.09756854,"samples":10514089},{"name":"(long string) (false) String#endsWith","opsSec":16829781.349969726,"samples":8414891},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20829983.553037044,"samples":10414992}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,696,757|4848379|
|Using indexof|20,942,070|10471036|
|Using RegExp.test|8,753,845|4376923|
|Using RegExp.text with cached regex pattern|9,364,932|4682467|
|Using new RegExp.test|3,054,547|1527274|
|Using new RegExp.test with cached regex pattern|3,379,154|1689578|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:19:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":9696757.620850503,"samples":4848379},{"name":"Using indexof","opsSec":20942070.64190979,"samples":10471036},{"name":"Using RegExp.test","opsSec":8753845.87477523,"samples":4376923},{"name":"Using RegExp.text with cached regex pattern","opsSec":9364932.16465992,"samples":4682467},{"name":"Using new RegExp.test","opsSec":3054547.533913035,"samples":1527274},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3379154.474092824,"samples":1689578}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|16,513,781|8256891|
|(short string) (true) String#slice and strict comparison|20,304,765|10152383|
|(long string) (true) String#startsWith|15,331,436|7665719|
|(long string) (true) String#slice and strict comparison|20,450,610|10225306|
|(short string) (false) String#startsWith|16,088,043|8044022|
|(short string) (false) String#slice and strict comparison|20,787,652|10393827|
|(long string) (false) String#startsWith|16,004,928|8002465|
|(long string) (false) String#slice and strict comparison|20,713,507|10356754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:28:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":16513781.133817708,"samples":8256891},{"name":"(short string) (true) String#slice and strict comparison","opsSec":20304765.302891206,"samples":10152383},{"name":"(long string) (true) String#startsWith","opsSec":15331436.691402834,"samples":7665719},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20450610.225206822,"samples":10225306},{"name":"(short string) (false) String#startsWith","opsSec":16088043.102448918,"samples":8044022},{"name":"(short string) (false) String#slice and strict comparison","opsSec":20787652.998855136,"samples":10393827},{"name":"(long string) (false) String#startsWith","opsSec":16004928.534705028,"samples":8002465},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20713507.367873922,"samples":10356754}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|10,873,373|5436687|
|Using this|18,550,480|9275241|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:38:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":10873373.860009626,"samples":5436687},{"name":"Using this","opsSec":18550480.991606314,"samples":9275241}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,717,564|3358783|
|Date.now()|10,024,453|5012227|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:43:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6717564.359969639,"samples":3358783},{"name":"Date.now()","opsSec":10024453.187394598,"samples":5012227}]}-->

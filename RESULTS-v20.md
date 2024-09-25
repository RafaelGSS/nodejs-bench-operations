## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,898,575|8949288|
|Using dot notation|16,941,992|8470997|
|Using define property (writable)|3,320,543|1660272|
|Using define property initialized (writable)|4,123,583|2061792|
|Using define property (getter)|1,838,887|919444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:19:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17898575.248280033,"samples":8949288},{"name":"Using dot notation","opsSec":16941992.37344935,"samples":8470997},{"name":"Using define property (writable)","opsSec":3320543.9468424316,"samples":1660272},{"name":"Using define property initialized (writable)","opsSec":4123583.7031132737,"samples":2061792},{"name":"Using define property (getter)","opsSec":1838887.5586644416,"samples":919444}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.117ms
new Array(length)|100|0.011ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.289ms
new Array(length)|10,000|0.321ms
array.push|1,000,000|34.085ms
new Array(length)|1,000,000|7.666ms
array.push|100,000,000|1,869.925ms
new Array(length)|100,000,000|4,694.926ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.233ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|26.722ms
new Array(length)|1,000,000|4.872ms
array.push|100,000,000|2,612.364ms
new Array(length)|100,000,000|4,323.708ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|237|119|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:04:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":237.55024042858977,"samples":119},{"name":"Array.from","opsSec":22.700591750134674,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|627|314|
|new Blob (1024)|505|260|
|text (128)|4,422|2212|
|text (1024)|552|277|
|arrayBuffer (128)|4,484|2243|
|arrayBuffer (1024)|553|277|
|slice (0, 64)|69,102|34552|
|slice (0, 512)|29,045|14523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:13:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":627.9110212408193,"samples":314},{"name":"new Blob (1024)","opsSec":505.4308977636943,"samples":260},{"name":"text (128)","opsSec":4422.7611492205015,"samples":2212},{"name":"text (1024)","opsSec":552.9069814105337,"samples":277},{"name":"arrayBuffer (128)","opsSec":4484.860307298507,"samples":2243},{"name":"arrayBuffer (1024)","opsSec":553.5035825629352,"samples":277},{"name":"slice (0, 64)","opsSec":69102.59514424126,"samples":34552},{"name":"slice (0, 512)","opsSec":29045.556416260915,"samples":14523}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|299,276|149639|
|[True conditional] Using constructor name|294,434|147218|
|[True conditional] Check if property is valid then instanceof |299,194|149598|
|[False conditional] Using instanceof only|17,901,891|8950946|
|[False conditional] Using constructor name|17,693,827|8846914|
|[False conditional] Check if property is valid then instanceof |18,126,667|9063334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:21:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":299276.25521980604,"samples":149639},{"name":"[True conditional] Using constructor name","opsSec":294434.7845733055,"samples":147218},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":299194.48248553806,"samples":149598},{"name":"[False conditional] Using instanceof only","opsSec":17901891.89279363,"samples":8950946},{"name":"[False conditional] Using constructor name","opsSec":17693827.539809447,"samples":8846914},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":18126667.52866863,"samples":9063334}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,157|3579|
|crypto.verify('RSA-SHA256')|7,033|3517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:29:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7157.696442093799,"samples":3579},{"name":"crypto.verify('RSA-SHA256')","opsSec":7033.519019835161,"samples":3517}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,278,324|639163|
|fromUnixToISOString(new Date())|1,779,199|889600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:34:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1278324.9364337265,"samples":639163},{"name":"fromUnixToISOString(new Date())","opsSec":1779199.2705278224,"samples":889600}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,666|9334|
|Intl.DateTimeFormat().format(new Date())|21,048|10526|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,773|10887|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,109|10055|
|Reusing Intl.DateTimeFormat()|903,005|451503|
|Date.toLocaleDateString()|908,747|454374|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,319|10660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:40:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18666.536095573014,"samples":9334},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21048.30008771838,"samples":10526},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21773.929670206882,"samples":10887},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20109.208179819943,"samples":10055},{"name":"Reusing Intl.DateTimeFormat()","opsSec":903005.911504678,"samples":451503},{"name":"Date.toLocaleDateString()","opsSec":908747.2221131889,"samples":454374},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21319.18279308859,"samples":10660}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|965,835|482918|
|Using brackets {}|968,727|484364|
|Using '' + |968,876|484439|
|Using date.toString()|1,057,397|528699|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:46:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":965835.847398062,"samples":482918},{"name":"Using brackets {}","opsSec":968727.1765822712,"samples":484364},{"name":"Using '' + ","opsSec":968876.3180308087,"samples":484439},{"name":"Using date.toString()","opsSec":1057397.3803659026,"samples":528699}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,830,478|1415240|
|Using delete property (proto: null)|8,118,953|4059477|
|Using delete property (cached proto: null)|2,808,161|1404081|
|Using undefined assignment|18,458,939|9229470|
|Using undefined assignment (proto: null)|8,690,471|4345236|
|Using undefined property (cached proto: null)|18,234,002|9117002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:54:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2830478.6583535164,"samples":1415240},{"name":"Using delete property (proto: null)","opsSec":8118953.593960353,"samples":4059477},{"name":"Using delete property (cached proto: null)","opsSec":2808161.5619059093,"samples":1404081},{"name":"Using undefined assignment","opsSec":18458939.55721362,"samples":9229470},{"name":"Using undefined assignment (proto: null)","opsSec":8690471.530685293,"samples":4345236},{"name":"Using undefined property (cached proto: null)","opsSec":18234002.76034756,"samples":9117002}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|287,783|143892|
|NodeError|281,807|140904|
|NodeError Range|283,200|141601|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:02:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":287783.83135869127,"samples":143892},{"name":"NodeError","opsSec":281807.7289010563,"samples":140904},{"name":"NodeError Range","opsSec":283200.5879618638,"samples":141601}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,429,171|714586|
|Function returning explicitly undefined|1,416,343|708177|
|Function returning implicitly undefined|1,451,387|725694|
|Function returning string|1,420,873|710437|
|Function returning integer|1,460,338|730170|
|Function returning float|1,477,395|738698|
|Function returning functions|1,446,247|723124|
|Function returning arrow functions|1,465,679|732840|
|Function returning empty object|1,483,059|741530|
|Function returning empty array|1,471,744|735873|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:11:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1429171.3654473922,"samples":714586},{"name":"Function returning explicitly undefined","opsSec":1416343.3604282176,"samples":708177},{"name":"Function returning implicitly undefined","opsSec":1451387.6603735515,"samples":725694},{"name":"Function returning string","opsSec":1420873.087796233,"samples":710437},{"name":"Function returning integer","opsSec":1460338.6126790277,"samples":730170},{"name":"Function returning float","opsSec":1477395.3883592847,"samples":738698},{"name":"Function returning functions","opsSec":1446247.140922478,"samples":723124},{"name":"Function returning arrow functions","opsSec":1465679.111792943,"samples":732840},{"name":"Function returning empty object","opsSec":1483059.1991517325,"samples":741530},{"name":"Function returning empty array","opsSec":1471744.860870645,"samples":735873}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,108,338|7554170|
|using Array.includes (first item)|16,208,113|8104057|
|Using raw comparison|17,039,517|8519759|
|Using raw comparison (first item)|16,687,375|8343688|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:22:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":15108338.82157638,"samples":7554170},{"name":"using Array.includes (first item)","opsSec":16208113.74045947,"samples":8104057},{"name":"Using raw comparison","opsSec":17039517.591005817,"samples":8519759},{"name":"Using raw comparison (first item)","opsSec":16687375.33238383,"samples":8343688}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|15,662,117|7831059|
|Using Object.getOwnPropertyNames()|15,648,712|7824357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:31:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":15662117.999966156,"samples":7831059},{"name":"Using Object.getOwnPropertyNames()","opsSec":15648712.560186334,"samples":7824357}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,407,795|8203898|
|Length = 10_000 - Array.at|16,405,417|8202709|
|Length = 1_000_000 - Array.at|16,413,302|8206652|
|Length = 100 - Array[length - 1]|16,472,552|8236277|
|Length = 10_000 - Array[length - 1]|16,270,199|8135100|
|Length = 1_000_000 - Array[length - 1]|16,514,524|8257263|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:40:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16407795.21233686,"samples":8203898},{"name":"Length = 10_000 - Array.at","opsSec":16405417.212513568,"samples":8202709},{"name":"Length = 1_000_000 - Array.at","opsSec":16413302.65412664,"samples":8206652},{"name":"Length = 100 - Array[length - 1]","opsSec":16472552.517439088,"samples":8236277},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16270199.511789674,"samples":8135100},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16514524.745181192,"samples":8257263}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|18,268,178|9134090|
|~ (small)|18,492,944|9246473|
|Math.floor (long)|16,471,174|8235588|
|~ (long)|16,590,781|8295391|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:52:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":18268178.28260238,"samples":9134090},{"name":"~ (small)","opsSec":18492944.927416906,"samples":9246473},{"name":"Math.floor (long)","opsSec":16471174.7152006,"samples":8235588},{"name":"~ (long)","opsSec":16590781.070937553,"samples":8295391}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,692,564|6846284|
|Object.create({})|1,793,646|901273|
|Cached Empty.prototype|17,765,127|8882564|
|Empty.prototype|1,870,518|935266|
|Empty class|1,085,274|542638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:03:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":13692564.659029681,"samples":6846284},{"name":"Object.create({})","opsSec":1793646.664240789,"samples":901273},{"name":"Cached Empty.prototype","opsSec":17765127.786677826,"samples":8882564},{"name":"Empty.prototype","opsSec":1870518.842766183,"samples":935266},{"name":"Empty class","opsSec":1085274.9624778507,"samples":542638}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|17,507,336|8753670|
|Using optional chain (obj.field?.field2) (undefined)|18,375,231|9187616|
|Using and operator (obj.field && obj.field.field2) (Valid)|17,916,771|8958386|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,105,133|9052567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:12:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":17507336.813659035,"samples":8753670},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":18375231.338665657,"samples":9187616},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":17916771.426534973,"samples":8958386},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18105133.529354893,"samples":9052567}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,521,254|8260628|
|Using parseInt(x, 10) - big number (10 len)|16,803,035|8401518|
|Using + - small number (2 len)|17,440,724|8720364|
|Using + - big number (10 len)|17,651,451|8825733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:24:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16521254.24876563,"samples":8260628},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16803035.529463377,"samples":8401518},{"name":"Using + - small number (2 len)","opsSec":17440724.02336739,"samples":8720364},{"name":"Using + - big number (10 len)","opsSec":17651451.1726807,"samples":8825733}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|953,321|476661|
|Using ? operator to avoid rejection|938,876|469439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:32:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":953321.994279903,"samples":476661},{"name":"Using ? operator to avoid rejection","opsSec":938876.9766240435,"samples":469439}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|17,367,988|8683995|
|Raw usage underscore usage|15,306,204|7653103|
|Manipulating private properties using #|15,325,228|7662615|
|Manipulating private properties using underscore(_)|15,443,409|7721705|
|Manipulating private properties using Symbol|15,493,265|7746633|
|Manipulating private properties using PrivateSymbol|12,129,552|6064777|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":17367988.47148874,"samples":8683995},{"name":"Raw usage underscore usage","opsSec":15306204.898133736,"samples":7653103},{"name":"Manipulating private properties using #","opsSec":15325228.590332612,"samples":7662615},{"name":"Manipulating private properties using underscore(_)","opsSec":15443409.073707068,"samples":7721705},{"name":"Manipulating private properties using Symbol","opsSec":15493265.008369831,"samples":7746633},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12129552.617313141,"samples":6064777}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,013,953|2506977|
|Adding property in the object creation - small object|4,998,735|2499368|
|Adding property after the function creation - small class|243,377|121689|
|Adding property in the function creation - small class|241,107|120554|
|Adding property after the class creation - small class|227,465|113734|
|Adding property in the class creation - small class|236,385|118217|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:51:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5013953.157664833,"samples":2506977},{"name":"Adding property in the object creation - small object","opsSec":4998735.800066703,"samples":2499368},{"name":"Adding property after the function creation - small class","opsSec":243377.72741704513,"samples":121689},{"name":"Adding property in the function creation - small class","opsSec":241107.38324733556,"samples":120554},{"name":"Adding property after the class creation - small class","opsSec":227465.8377098356,"samples":113734},{"name":"Adding property in the class creation - small class","opsSec":236385.4048340708,"samples":118217}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|18,208,976|9104489|
|Getter|13,908,006|6954004|
|Method|17,956,883|8978442|
|DefineProperty (getter)|17,614,005|8807003|
|DefineProperty (getter & enumerable=false)|14,123,035|7061518|
|DefineProperty (getter & configurable=false)|17,560,858|8780430|
|DefineProperty (getter & enumerable=false & configurable=false)|13,952,682|6976342|
|DefineProperty (writable)|18,011,727|9005864|
|DefineProperty (writable & enumerable=false)|18,487,579|9243790|
|DefineProperty (writable & enumerable=false & configurable=false)|18,143,341|9071671|
|DefineProperties (getter)|13,585,146|6792574|
|DefineProperties (getter & enumerable=false)|13,651,237|6825621|
|DefineProperties (getter & enumerable=false & configurable=false)|13,780,239|6890120|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":18208976.251828782,"samples":9104489},{"name":"Getter","opsSec":13908006.775897661,"samples":6954004},{"name":"Method","opsSec":17956883.533622842,"samples":8978442},{"name":"DefineProperty (getter)","opsSec":17614005.049046665,"samples":8807003},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14123035.519728875,"samples":7061518},{"name":"DefineProperty (getter & configurable=false)","opsSec":17560858.736218274,"samples":8780430},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13952682.325851353,"samples":6976342},{"name":"DefineProperty (writable)","opsSec":18011727.459651925,"samples":9005864},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18487579.520181783,"samples":9243790},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18143341.527843926,"samples":9071671},{"name":"DefineProperties (getter)","opsSec":13585146.559694247,"samples":6792574},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13651237.87735357,"samples":6825621},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13780239.42089226,"samples":6890120}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,459,440|8229721|
|Setter|6,005,754|3002878|
|Method|16,471,659|8235830|
|DefineProperty (setter)|17,741,581|8870791|
|DefineProperty (setter & enumerable=false)|6,151,788|3075895|
|DefineProperty (setter & configurable=false)|6,163,987|3081994|
|DefineProperty (setter & enumerable=false & configurable=false)|6,203,825|3101913|
|DefineProperty (writable)|18,199,112|9099557|
|DefineProperty (writable & enumerable=false)|18,317,469|9158735|
|DefineProperty (writable & enumerable=false & configurable=false)|16,401,286|8200644|
|DefineProperties (setter)|16,359,801|8179901|
|DefineProperties (setter & enumerable=false)|6,079,865|3039933|
|DefineProperties (setter & enumerable=false & configurable=false)|6,144,344|3072173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":16459440.946471594,"samples":8229721},{"name":"Setter","opsSec":6005754.4745164355,"samples":3002878},{"name":"Method","opsSec":16471659.538928324,"samples":8235830},{"name":"DefineProperty (setter)","opsSec":17741581.680366654,"samples":8870791},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6151788.9665968595,"samples":3075895},{"name":"DefineProperty (setter & configurable=false)","opsSec":6163987.186383286,"samples":3081994},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6203825.205889973,"samples":3101913},{"name":"DefineProperty (writable)","opsSec":18199112.180181384,"samples":9099557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18317469.193889275,"samples":9158735},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16401286.621469954,"samples":8200644},{"name":"DefineProperties (setter)","opsSec":16359801.738883484,"samples":8179901},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6079865.513598915,"samples":3039933},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6144344.377734813,"samples":3072173}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,770,850|1385426|
|Using replaceAll()|2,446,185|1223093|
|Using replaceAll(//g)|2,515,458|1257730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:03:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2770850.6312000505,"samples":1385426},{"name":"Using replaceAll()","opsSec":2446185.681993115,"samples":1223093},{"name":"Using replaceAll(//g)","opsSec":2515458.4202931602,"samples":1257730}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,072,429|5036215|
|{ ...object, __proto__: null }|9,971,803|4985903|
|{ ...object, newProp: true }|775,893|388507|
|structuredClone|280,107|140054|
|JSON.parse + JSON.stringify|188,884|94443|
|loop + object.keys starting with {}|1,320,373|660187|
|loop + object.keys starting with { __proto__: null }|763,335|381668|
|loop + object.keys starting with { randomProp: true }|532,691|266346|
|object.keys + reduce(FN, {})|1,302,763|651382|
|object.keys + reduce(FN, { __proto__: null })|681,493|340747|
|object.keys + reduce(FN, { newProp: true })|528,416|264209|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:11:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10072429.456084814,"samples":5036215},{"name":"{ ...object, __proto__: null }","opsSec":9971803.307713844,"samples":4985903},{"name":"{ ...object, newProp: true }","opsSec":775893.2795732272,"samples":388507},{"name":"structuredClone","opsSec":280107.2616372081,"samples":140054},{"name":"JSON.parse + JSON.stringify","opsSec":188884.80549248424,"samples":94443},{"name":"loop + object.keys starting with {}","opsSec":1320373.0255678645,"samples":660187},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":763335.4320777854,"samples":381668},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":532691.4151046243,"samples":266346},{"name":"object.keys + reduce(FN, {})","opsSec":1302763.0385615663,"samples":651382},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":681493.9850047026,"samples":340747},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":528416.7074929188,"samples":264209}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|268,244|134123|
|Sort using first char|1,137,112|568557|
|Sort using localeCompare|1,045,489|522745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":268244.3143527727,"samples":134123},{"name":"Sort using first char","opsSec":1137112.9515818222,"samples":568557},{"name":"Sort using localeCompare","opsSec":1045489.5755310601,"samples":522745}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,840|921|
|{...smallObject} - Total keys: 2|13,198,462|6599232|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,201|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,759|3380|
|{ ...bigObject, ...anotherBigObject }|1,152|577|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,281,993|3640997|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,975,829|5487915|
|{ ...smallObject, ...anotherSmallObject }|9,785,466|4892734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:27:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1840.7474744254625,"samples":921},{"name":"{...smallObject} - Total keys: 2","opsSec":13198462.601007625,"samples":6599232},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2201.9585899669974,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6759.755121110071,"samples":3380},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1152.1489643867635,"samples":577},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7281993.140719592,"samples":3640997},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10975829.517093126,"samples":5487915},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9785466.982352028,"samples":4892734}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,071|1036|
|streams.web.Readable reading 1e3 * "some data"|1,527|764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:33:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2071.398764080312,"samples":1036},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1527.824413251488,"samples":764}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,014|3008|
|streams.web.WritableStream writing 1e3 * "some data"|1,536|777|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:39:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6014.752877079518,"samples":3008},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1536.516318841458,"samples":777}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|17,238,268|8619135|
|Using backtick (`)|17,200,351|8600176|
|Using array.join|6,194,890|3097446|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:45:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":17238268.620999627,"samples":8619135},{"name":"Using backtick (`)","opsSec":17200351.896743037,"samples":8600176},{"name":"Using array.join","opsSec":6194890.414172288,"samples":3097446}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,386,517|7193259|
|(short string) (true) String#slice and strict comparison|14,212,518|7106260|
|(long string) (true) String#endsWith|13,517,725|6758863|
|(long string) (true) String#slice and strict comparison|13,579,221|6789611|
|(short string) (false) String#endsWith|14,830,462|7415232|
|(short string) (false) String#slice and strict comparison|14,657,651|7328827|
|(long string) (false) String#endsWith|14,637,711|7318856|
|(long string) (false) String#slice and strict comparison|14,111,782|7055892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14386517.107983299,"samples":7193259},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14212518.123974895,"samples":7106260},{"name":"(long string) (true) String#endsWith","opsSec":13517725.756552009,"samples":6758863},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13579221.484032487,"samples":6789611},{"name":"(short string) (false) String#endsWith","opsSec":14830462.101656832,"samples":7415232},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14657651.185567275,"samples":7328827},{"name":"(long string) (false) String#endsWith","opsSec":14637711.033874108,"samples":7318856},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14111782.250095695,"samples":7055892}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,006,879|4503440|
|Using indexof|8,881,962|4440982|
|Using RegExp.test|8,155,952|4077977|
|Using RegExp.text with cached regex pattern|8,399,742|4199872|
|Using new RegExp.test|3,433,650|1716826|
|Using new RegExp.test with cached regex pattern|4,011,182|2005592|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:11:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":9006879.459562901,"samples":4503440},{"name":"Using indexof","opsSec":8881962.98741817,"samples":4440982},{"name":"Using RegExp.test","opsSec":8155952.36870916,"samples":4077977},{"name":"Using RegExp.text with cached regex pattern","opsSec":8399742.303219333,"samples":4199872},{"name":"Using new RegExp.test","opsSec":3433650.434272435,"samples":1716826},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4011182.5720265172,"samples":2005592}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|17,293,776|8646889|
|(short string) (true) String#slice and strict comparison|15,161,007|7580504|
|(long string) (true) String#startsWith|16,711,279|8355640|
|(long string) (true) String#slice and strict comparison|14,038,766|7019384|
|(short string) (false) String#startsWith|18,418,756|9209379|
|(short string) (false) String#slice and strict comparison|15,349,438|7674720|
|(long string) (false) String#startsWith|18,319,288|9159645|
|(long string) (false) String#slice and strict comparison|14,476,633|7238317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:24:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":17293776.339597218,"samples":8646889},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15161007.424045445,"samples":7580504},{"name":"(long string) (true) String#startsWith","opsSec":16711279.632666886,"samples":8355640},{"name":"(long string) (true) String#slice and strict comparison","opsSec":14038766.146573149,"samples":7019384},{"name":"(short string) (false) String#startsWith","opsSec":18418756.71119022,"samples":9209379},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15349438.311351253,"samples":7674720},{"name":"(long string) (false) String#startsWith","opsSec":18319288.424328998,"samples":9159645},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14476633.971138151,"samples":7238317}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,141,143|9570572|
|Using this|19,233,446|9616724|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:36:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":19141143.578765664,"samples":9570572},{"name":"Using this","opsSec":19233446.76903877,"samples":9616724}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,388,746|3194374|
|Date.now()|9,124,657|4562329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:42:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6388746.377258986,"samples":3194374},{"name":"Date.now()","opsSec":9124657.83576613,"samples":4562329}]}-->

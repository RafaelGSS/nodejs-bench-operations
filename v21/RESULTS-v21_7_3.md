## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|101,201,863|50609978|
|Using dot notation|70,660,815|35334950|
|Using define property (writable)|4,206,612|2103308|
|Using define property initialized (writable)|5,963,283|2981843|
|Using define property (getter)|2,245,392|1122727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:44:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":101201863.13090946,"samples":50609978},{"name":"Using dot notation","opsSec":70660815.98681837,"samples":35334950},{"name":"Using define property (writable)","opsSec":4206612.760908174,"samples":2103308},{"name":"Using define property initialized (writable)","opsSec":5963283.609548595,"samples":2981843},{"name":"Using define property (getter)","opsSec":2245392.3505076244,"samples":1122727}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.013ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.249ms
new Array(length)|10,000|0.142ms
array.push|1,000,000|24.293ms
new Array(length)|1,000,000|14.371ms
array.push|100,000,000|1,760.975ms
new Array(length)|100,000,000|4,468.255ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.323ms
new Array(length)|10,000|0.219ms
array.push|1,000,000|19.999ms
new Array(length)|1,000,000|7.432ms
array.push|100,000,000|1,938.284ms
new Array(length)|100,000,000|4,447.11ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|264|133|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:58:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":264.59357034003324,"samples":133},{"name":"Array.from","opsSec":23.39012941450635,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,635|2318|
|new Blob (1024)|607|304|
|text (128)|4,895|2448|
|text (1024)|614|308|
|arrayBuffer (128)|4,877|2442|
|arrayBuffer (1024)|620|312|
|slice (0, 64)|161,535|80927|
|slice (0, 512)|31,776|15889|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:04:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4635.159645556261,"samples":2318},{"name":"new Blob (1024)","opsSec":607.2698939809443,"samples":304},{"name":"text (128)","opsSec":4895.894914511555,"samples":2448},{"name":"text (1024)","opsSec":614.3484642253799,"samples":308},{"name":"arrayBuffer (128)","opsSec":4877.695120553344,"samples":2442},{"name":"arrayBuffer (1024)","opsSec":620.7820211976168,"samples":312},{"name":"slice (0, 64)","opsSec":161535.74679466605,"samples":80927},{"name":"slice (0, 512)","opsSec":31776.305306085414,"samples":15889}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|426,866|213467|
|[True conditional] Using constructor name|351,140|175571|
|[True conditional] Check if property is valid then instanceof |343,706|172190|
|[False conditional] Using instanceof only|93,583,673|46791846|
|[False conditional] Using constructor name|95,525,588|47766146|
|[False conditional] Check if property is valid then instanceof |95,824,032|47921762|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:10:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":426866.25888591236,"samples":213467},{"name":"[True conditional] Using constructor name","opsSec":351140.3011832229,"samples":175571},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":343706.49200582894,"samples":172190},{"name":"[False conditional] Using instanceof only","opsSec":93583673.65759996,"samples":46791846},{"name":"[False conditional] Using constructor name","opsSec":95525588.77838424,"samples":47766146},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":95824032.2419536,"samples":47921762}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,795|3398|
|crypto.verify('RSA-SHA256')|6,891|3447|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:16:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6795.786123019136,"samples":3398},{"name":"crypto.verify('RSA-SHA256')","opsSec":6891.897199461679,"samples":3447}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,510,585|755302|
|fromUnixToISOString(new Date())|2,097,247|1048784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:21:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1510585.7188916302,"samples":755302},{"name":"fromUnixToISOString(new Date())","opsSec":2097247.0247318526,"samples":1048784}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,059|9530|
|Intl.DateTimeFormat().format(new Date())|18,949|9475|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,109|9555|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,572|9314|
|Reusing Intl.DateTimeFormat()|393,558|205605|
|Date.toLocaleDateString()|718,524|359427|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,424|11713|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:28:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19059.373404039972,"samples":9530},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18949.234071958814,"samples":9475},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19109.744617372933,"samples":9555},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18572.460468476016,"samples":9314},{"name":"Reusing Intl.DateTimeFormat()","opsSec":393558.45163889317,"samples":205605},{"name":"Date.toLocaleDateString()","opsSec":718524.1815931167,"samples":359427},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23424.210015567453,"samples":11713}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|911,226|455614|
|Using brackets {}|910,457|455233|
|Using '' + |1,090,541|545271|
|Using date.toString()|1,165,321|582970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:33:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":911226.4199333878,"samples":455614},{"name":"Using brackets {}","opsSec":910457.8368350349,"samples":455233},{"name":"Using '' + ","opsSec":1090541.6706564156,"samples":545271},{"name":"Using date.toString()","opsSec":1165321.2144351348,"samples":582970}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,946,863|1973434|
|Using delete property (proto: null)|16,215,056|8124300|
|Using delete property (cached proto: null)|3,873,358|1936681|
|Using undefined assignment|77,742,529|39235537|
|Using undefined assignment (proto: null)|18,277,869|9140756|
|Using undefined property (cached proto: null)|78,314,465|39163054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:39:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3946863.5400441997,"samples":1973434},{"name":"Using delete property (proto: null)","opsSec":16215056.690546988,"samples":8124300},{"name":"Using delete property (cached proto: null)","opsSec":3873358.056921498,"samples":1936681},{"name":"Using undefined assignment","opsSec":77742529.47613186,"samples":39235537},{"name":"Using undefined assignment (proto: null)","opsSec":18277869.80543961,"samples":9140756},{"name":"Using undefined property (cached proto: null)","opsSec":78314465.30170146,"samples":39163054}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|392,217|196140|
|NodeError|331,055|165528|
|NodeError Range|326,164|163091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:45:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":392217.2805346697,"samples":196140},{"name":"NodeError","opsSec":331055.2286413172,"samples":165528},{"name":"NodeError Range","opsSec":326164.0524968473,"samples":163091}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,953,803|977016|
|Function returning explicitly undefined|1,844,722|922483|
|Function returning implicitly undefined|1,927,092|964112|
|Function returning string|1,888,703|944352|
|Function returning integer|1,954,012|977102|
|Function returning float|1,944,657|972567|
|Function returning functions|1,869,613|934807|
|Function returning arrow functions|1,919,298|959650|
|Function returning empty object|1,855,366|927685|
|Function returning empty array|1,941,881|970941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:50:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1953803.2174584484,"samples":977016},{"name":"Function returning explicitly undefined","opsSec":1844722.4412960755,"samples":922483},{"name":"Function returning implicitly undefined","opsSec":1927092.6039322314,"samples":964112},{"name":"Function returning string","opsSec":1888703.8715681366,"samples":944352},{"name":"Function returning integer","opsSec":1954012.2097935842,"samples":977102},{"name":"Function returning float","opsSec":1944657.6522187735,"samples":972567},{"name":"Function returning functions","opsSec":1869613.2297193496,"samples":934807},{"name":"Function returning arrow functions","opsSec":1919298.875290859,"samples":959650},{"name":"Function returning empty object","opsSec":1855366.645497105,"samples":927685},{"name":"Function returning empty array","opsSec":1941881.3086902543,"samples":970941}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|89,798,914|44900677|
|using Array.includes (first item)|79,858,458|39929236|
|Using raw comparison|94,669,378|47335183|
|Using raw comparison (first item)|92,835,632|46417821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:57:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":89798914.88187397,"samples":44900677},{"name":"using Array.includes (first item)","opsSec":79858458.26434518,"samples":39929236},{"name":"Using raw comparison","opsSec":94669378.59838124,"samples":47335183},{"name":"Using raw comparison (first item)","opsSec":92835632.53076549,"samples":46417821}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,284,779|26142458|
|Using Object.getOwnPropertyNames()|42,781,095|21390549|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:02:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":52284779.74586398,"samples":26142458},{"name":"Using Object.getOwnPropertyNames()","opsSec":42781095.17644772,"samples":21390549}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|135,595,432|67800103|
|Length = 10_000 - Array.at|95,556,900|47778483|
|Length = 1_000_000 - Array.at|96,835,809|48423677|
|Length = 100 - Array[length - 1]|94,659,272|47334478|
|Length = 10_000 - Array[length - 1]|97,264,221|48791441|
|Length = 1_000_000 - Array[length - 1]|96,898,484|48456396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:07:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":135595432.76957563,"samples":67800103},{"name":"Length = 10_000 - Array.at","opsSec":95556900.83019362,"samples":47778483},{"name":"Length = 1_000_000 - Array.at","opsSec":96835809.23482303,"samples":48423677},{"name":"Length = 100 - Array[length - 1]","opsSec":94659272.16713876,"samples":47334478},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97264221.45615338,"samples":48791441},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96898484.93869881,"samples":48456396}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|129,517,485|64758769|
|~ (small)|89,417,247|44708628|
|Math.floor (long)|88,125,691|44062850|
|~ (long)|90,874,320|45437164|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:13:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":129517485.6749358,"samples":64758769},{"name":"~ (small)","opsSec":89417247.7736132,"samples":44708628},{"name":"Math.floor (long)","opsSec":88125691.01117952,"samples":44062850},{"name":"~ (long)","opsSec":90874320.18480846,"samples":45437164}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,921,144|22960573|
|Object.create({})|2,057,137|1042896|
|Cached Empty.prototype|115,699,846|57850337|
|Empty.prototype|2,204,891|1102470|
|Empty class|1,377,975|688995|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:19:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":45921144.438681096,"samples":22960573},{"name":"Object.create({})","opsSec":2057137.8065786676,"samples":1042896},{"name":"Cached Empty.prototype","opsSec":115699846.2832997,"samples":57850337},{"name":"Empty.prototype","opsSec":2204891.8539814767,"samples":1102470},{"name":"Empty class","opsSec":1377975.1757430595,"samples":688995}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|144,790,472|72395257|
|Using optional chain (obj.field?.field2) (undefined)|98,635,833|49351409|
|Using and operator (obj.field && obj.field.field2) (Valid)|102,522,932|51262001|
|Using and operator (obj.field && obj.field.field2) (undefined)|101,554,652|51219617|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:25:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":144790472.8795057,"samples":72395257},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98635833.22202891,"samples":49351409},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":102522932.89085582,"samples":51262001},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":101554652.35611728,"samples":51219617}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,987,453|71020690|
|Using parseInt(x, 10) - big number (10 len)|102,335,399|51167811|
|Using + - small number (2 len)|101,350,815|50815311|
|Using + - big number (10 len)|101,833,022|50916512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:30:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141987453.4491549,"samples":71020690},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":102335399.11350074,"samples":51167811},{"name":"Using + - small number (2 len)","opsSec":101350815.10208574,"samples":50815311},{"name":"Using + - big number (10 len)","opsSec":101833022.77800372,"samples":50916512}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,037,863|521543|
|Using ? operator to avoid rejection|1,177,121|588585|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:36:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":1037863.6692859775,"samples":521543},{"name":"Using ? operator to avoid rejection","opsSec":1177121.8792575758,"samples":588585}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|136,647,711|68364745|
|Raw usage underscore usage|95,030,765|47515950|
|Manipulating private properties using #|95,581,216|49018486|
|Manipulating private properties using underscore(_)|96,857,458|48428736|
|Manipulating private properties using Symbol|99,057,946|49536653|
|Manipulating private properties using PrivateSymbol|34,268,963|17134876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:42:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":136647711.537258,"samples":68364745},{"name":"Raw usage underscore usage","opsSec":95030765.71278046,"samples":47515950},{"name":"Manipulating private properties using #","opsSec":95581216.98228216,"samples":49018486},{"name":"Manipulating private properties using underscore(_)","opsSec":96857458.43995582,"samples":48428736},{"name":"Manipulating private properties using Symbol","opsSec":99057946.86722234,"samples":49536653},{"name":"Manipulating private properties using PrivateSymbol","opsSec":34268963.19700513,"samples":17134876}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,858,415|2429208|
|Adding property in the object creation - small object|4,831,872|2415937|
|Adding property after the function creation - small class|238,565|119283|
|Adding property in the function creation - small class|247,043|123523|
|Adding property after the class creation - small class|231,465|115733|
|Adding property in the class creation - small class|224,886|112444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:53:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4858415.416993222,"samples":2429208},{"name":"Adding property in the object creation - small object","opsSec":4831872.608419918,"samples":2415937},{"name":"Adding property after the function creation - small class","opsSec":238565.11396921915,"samples":119283},{"name":"Adding property in the function creation - small class","opsSec":247043.93915949162,"samples":123523},{"name":"Adding property after the class creation - small class","opsSec":231465.388005381,"samples":115733},{"name":"Adding property in the class creation - small class","opsSec":224886.26522729945,"samples":112444}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,865,466|6932734|
|Getter|12,020,660|6010331|
|Method|13,989,304|6994653|
|DefineProperty (getter)|14,012,324|7006163|
|DefineProperty (getter & enumerable=false)|11,872,445|5936223|
|DefineProperty (getter & configurable=false)|13,558,597|6779299|
|DefineProperty (getter & enumerable=false & configurable=false)|12,047,403|6023702|
|DefineProperty (writable)|14,037,702|7018852|
|DefineProperty (writable & enumerable=false)|12,919,662|6459874|
|DefineProperty (writable & enumerable=false & configurable=false)|13,092,252|6546127|
|DefineProperties (getter)|11,870,848|5935425|
|DefineProperties (getter & enumerable=false)|11,988,136|5994069|
|DefineProperties (getter & enumerable=false & configurable=false)|12,299,803|6149902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:13:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":13865466.558083603,"samples":6932734},{"name":"Getter","opsSec":12020660.31683533,"samples":6010331},{"name":"Method","opsSec":13989304.181305358,"samples":6994653},{"name":"DefineProperty (getter)","opsSec":14012324.458419694,"samples":7006163},{"name":"DefineProperty (getter & enumerable=false)","opsSec":11872445.738823554,"samples":5936223},{"name":"DefineProperty (getter & configurable=false)","opsSec":13558597.810167138,"samples":6779299},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12047403.494353373,"samples":6023702},{"name":"DefineProperty (writable)","opsSec":14037702.34383471,"samples":7018852},{"name":"DefineProperty (writable & enumerable=false)","opsSec":12919662.756003376,"samples":6459874},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13092252.84814656,"samples":6546127},{"name":"DefineProperties (getter)","opsSec":11870848.527734438,"samples":5935425},{"name":"DefineProperties (getter & enumerable=false)","opsSec":11988136.465482775,"samples":5994069},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12299803.13857408,"samples":6149902}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|13,444,455|6722228|
|Setter|5,732,877|2866439|
|Method|13,168,254|6584128|
|DefineProperty (setter)|13,322,739|6661370|
|DefineProperty (setter & enumerable=false)|5,770,518|2885260|
|DefineProperty (setter & configurable=false)|5,709,195|2854598|
|DefineProperty (setter & enumerable=false & configurable=false)|5,673,542|2836772|
|DefineProperty (writable)|13,385,608|6692805|
|DefineProperty (writable & enumerable=false)|13,065,362|6532682|
|DefineProperty (writable & enumerable=false & configurable=false)|13,411,879|6705940|
|DefineProperties (setter)|13,237,067|6618534|
|DefineProperties (setter & enumerable=false)|5,677,532|2838767|
|DefineProperties (setter & enumerable=false & configurable=false)|5,859,932|2929967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:34:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":13444455.972835615,"samples":6722228},{"name":"Setter","opsSec":5732877.72491638,"samples":2866439},{"name":"Method","opsSec":13168254.288041666,"samples":6584128},{"name":"DefineProperty (setter)","opsSec":13322739.57374431,"samples":6661370},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5770518.718954992,"samples":2885260},{"name":"DefineProperty (setter & configurable=false)","opsSec":5709195.611809627,"samples":2854598},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5673542.97876167,"samples":2836772},{"name":"DefineProperty (writable)","opsSec":13385608.848823614,"samples":6692805},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13065362.327408897,"samples":6532682},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13411879.490644477,"samples":6705940},{"name":"DefineProperties (setter)","opsSec":13237067.311211893,"samples":6618534},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5677532.785031615,"samples":2838767},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5859932.324072688,"samples":2929967}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,608,238|1304120|
|Using replaceAll()|2,417,085|1208543|
|Using replaceAll(//g)|2,390,640|1195321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:44:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2608238.7689105854,"samples":1304120},{"name":"Using replaceAll()","opsSec":2417085.874314033,"samples":1208543},{"name":"Using replaceAll(//g)","opsSec":2390640.2787355944,"samples":1195321}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,160,198|4580100|
|{ ...object, __proto__: null }|2,127,573|1063787|
|{ ...object, newProp: true }|8,602,931|4303044|
|structuredClone|269,802|134902|
|JSON.parse + JSON.stringify|241,771|120886|
|loop + object.keys starting with {}|1,236,405|618204|
|loop + object.keys starting with { __proto__: null }|662,815|331408|
|loop + object.keys starting with { randomProp: true }|477,101|238551|
|object.keys + reduce(FN, {})|1,243,600|621801|
|object.keys + reduce(FN, { __proto__: null })|657,015|328508|
|object.keys + reduce(FN, { newProp: true })|477,317|238659|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9160198.845805624,"samples":4580100},{"name":"{ ...object, __proto__: null }","opsSec":2127573.0851573506,"samples":1063787},{"name":"{ ...object, newProp: true }","opsSec":8602931.56723628,"samples":4303044},{"name":"structuredClone","opsSec":269802.1572510544,"samples":134902},{"name":"JSON.parse + JSON.stringify","opsSec":241771.4366726644,"samples":120886},{"name":"loop + object.keys starting with {}","opsSec":1236405.984661611,"samples":618204},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":662815.0044493368,"samples":331408},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":477101.96278612805,"samples":238551},{"name":"object.keys + reduce(FN, {})","opsSec":1243600.0152108264,"samples":621801},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":657015.4901551043,"samples":328508},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":477317.07591425534,"samples":238659}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|305,081|152541|
|Sort using first char|1,109,897|554949|
|Sort using localeCompare|1,031,358|515680|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:59:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":305081.3642103577,"samples":152541},{"name":"Sort using first char","opsSec":1109897.4783491371,"samples":554949},{"name":"Sort using localeCompare","opsSec":1031358.4302723241,"samples":515680}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,779|890|
|{...smallObject} - Total keys: 2|10,726,574|5363288|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,218|1110|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,463|3232|
|{ ...bigObject, ...anotherBigObject }|1,100|551|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,191,153|3095577|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,813,106|4906554|
|{ ...smallObject, ...anotherSmallObject }|8,310,450|4155226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:09:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1779.8359062487464,"samples":890},{"name":"{...smallObject} - Total keys: 2","opsSec":10726574.605534136,"samples":5363288},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2218.7998245490685,"samples":1110},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6463.414156139415,"samples":3232},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1100.166851384643,"samples":551},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6191153.54187579,"samples":3095577},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9813106.488774307,"samples":4906554},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8310450.554035654,"samples":4155226}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,086|1044|
|streams.web.Readable reading 1e3 * "some data"|1,697|849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2086.7813781050704,"samples":1044},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1697.9670152927133,"samples":849}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,164|3083|
|streams.web.WritableStream writing 1e3 * "some data"|2,025|1022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:20:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6164.804792305698,"samples":3083},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2025.674436411132,"samples":1022}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|13,522,924|6761463|
|Using backtick (`)|14,409,903|7204952|
|Using array.join|5,569,815|2784908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:28:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":13522924.809980296,"samples":6761463},{"name":"Using backtick (`)","opsSec":14409903.279503178,"samples":7204952},{"name":"Using array.join","opsSec":5569815.643523451,"samples":2784908}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,576,020|7288011|
|(short string) (true) String#slice and strict comparison|12,297,375|6148688|
|(long string) (true) String#endsWith|13,585,069|6792535|
|(long string) (true) String#slice and strict comparison|11,699,620|5849811|
|(short string) (false) String#endsWith|14,892,924|7446463|
|(short string) (false) String#slice and strict comparison|12,349,434|6174718|
|(long string) (false) String#endsWith|14,496,524|7248263|
|(long string) (false) String#slice and strict comparison|12,001,264|6000633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:47:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14576020.30925425,"samples":7288011},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12297375.65573045,"samples":6148688},{"name":"(long string) (true) String#endsWith","opsSec":13585069.157892276,"samples":6792535},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11699620.548987096,"samples":5849811},{"name":"(short string) (false) String#endsWith","opsSec":14892924.391525261,"samples":7446463},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12349434.1723462,"samples":6174718},{"name":"(long string) (false) String#endsWith","opsSec":14496524.637143116,"samples":7248263},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12001264.487910893,"samples":6000633}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,769,278|3884640|
|Using indexof|7,798,396|3899199|
|Using RegExp.test|7,256,853|3628427|
|Using RegExp.text with cached regex pattern|7,306,610|3653306|
|Using new RegExp.test|3,326,510|1663256|
|Using new RegExp.test with cached regex pattern|3,612,684|1806343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:57:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":7769278.2752245,"samples":3884640},{"name":"Using indexof","opsSec":7798396.549512986,"samples":3899199},{"name":"Using RegExp.test","opsSec":7256853.608148307,"samples":3628427},{"name":"Using RegExp.text with cached regex pattern","opsSec":7306610.567950998,"samples":3653306},{"name":"Using new RegExp.test","opsSec":3326510.223629264,"samples":1663256},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3612684.45374569,"samples":1806343}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,162,201|7081101|
|(short string) (true) String#slice and strict comparison|12,904,780|6452391|
|(long string) (true) String#startsWith|13,664,667|6832334|
|(long string) (true) String#slice and strict comparison|12,372,579|6186290|
|(short string) (false) String#startsWith|14,747,169|7373585|
|(short string) (false) String#slice and strict comparison|12,736,573|6368287|
|(long string) (false) String#startsWith|12,845,476|6422739|
|(long string) (false) String#slice and strict comparison|12,207,917|6103959|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:12:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14162201.716588836,"samples":7081101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12904780.373998063,"samples":6452391},{"name":"(long string) (true) String#startsWith","opsSec":13664667.562487697,"samples":6832334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12372579.307927342,"samples":6186290},{"name":"(short string) (false) String#startsWith","opsSec":14747169.056106608,"samples":7373585},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12736573.21013258,"samples":6368287},{"name":"(long string) (false) String#startsWith","opsSec":12845476.612675158,"samples":6422739},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12207917.487547088,"samples":6103959}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,939,108|7469555|
|Using this|14,609,711|7304856|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:25:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":14939108.446264233,"samples":7469555},{"name":"Using this","opsSec":14609711.532403022,"samples":7304856}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,311,584|3155793|
|Date.now()|7,940,276|3970139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:31:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6311584.914408829,"samples":3155793},{"name":"Date.now()","opsSec":7940276.983646397,"samples":3970139}]}-->

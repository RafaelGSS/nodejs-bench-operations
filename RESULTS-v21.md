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
|Adding property after object creation - small object|7,605,274|3802844|
|Adding property in the object creation - small object|7,352,817|3676816|
|Adding property after the function creation - small class|237,578|119201|
|Adding property in the function creation - small class|250,902|126024|
|Adding property after the class creation - small class|242,140|121072|
|Adding property in the class creation - small class|241,428|121382|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:47:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7605274.987936505,"samples":3802844},{"name":"Adding property in the object creation - small object","opsSec":7352817.469586354,"samples":3676816},{"name":"Adding property after the function creation - small class","opsSec":237578.34344237312,"samples":119201},{"name":"Adding property in the function creation - small class","opsSec":250902.55856382952,"samples":126024},{"name":"Adding property after the class creation - small class","opsSec":242140.15094016065,"samples":121072},{"name":"Adding property in the class creation - small class","opsSec":241428.70323102543,"samples":121382}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|138,793,632|69397766|
|Getter|50,204,090|25150313|
|Method|99,207,808|49618166|
|DefineProperty (getter)|97,187,230|48593617|
|DefineProperty (getter & enumerable=false)|48,228,113|24150754|
|DefineProperty (getter & configurable=false)|95,758,104|47879060|
|DefineProperty (getter & enumerable=false & configurable=false)|51,165,081|25582552|
|DefineProperty (writable)|97,656,848|48830966|
|DefineProperty (writable & enumerable=false)|97,624,563|48817541|
|DefineProperty (writable & enumerable=false & configurable=false)|97,850,971|48927524|
|DefineProperties (getter)|51,520,069|25760048|
|DefineProperties (getter & enumerable=false)|51,149,559|25576158|
|DefineProperties (getter & enumerable=false & configurable=false)|50,563,156|25281736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:54:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":138793632.19276255,"samples":69397766},{"name":"Getter","opsSec":50204090.562421136,"samples":25150313},{"name":"Method","opsSec":99207808.76290259,"samples":49618166},{"name":"DefineProperty (getter)","opsSec":97187230.5012597,"samples":48593617},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48228113.01077681,"samples":24150754},{"name":"DefineProperty (getter & configurable=false)","opsSec":95758104.67870326,"samples":47879060},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51165081.38503403,"samples":25582552},{"name":"DefineProperty (writable)","opsSec":97656848.76570804,"samples":48830966},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97624563.34379795,"samples":48817541},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":97850971.9199137,"samples":48927524},{"name":"DefineProperties (getter)","opsSec":51520069.10652393,"samples":25760048},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51149559.85711666,"samples":25576158},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50563156.081400804,"samples":25281736}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|142,313,880|71156982|
|Setter|11,325,090|5662550|
|Method|93,340,326|46684329|
|DefineProperty (setter)|99,974,733|49987448|
|DefineProperty (setter & enumerable=false)|11,696,351|5851173|
|DefineProperty (setter & configurable=false)|11,509,578|5754793|
|DefineProperty (setter & enumerable=false & configurable=false)|11,711,929|5855967|
|DefineProperty (writable)|98,981,158|49495219|
|DefineProperty (writable & enumerable=false)|99,368,868|49700904|
|DefineProperty (writable & enumerable=false & configurable=false)|99,417,864|49714778|
|DefineProperties (setter)|96,410,659|48210427|
|DefineProperties (setter & enumerable=false)|11,352,534|5676278|
|DefineProperties (setter & enumerable=false & configurable=false)|11,416,136|5708128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:01:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":142313880.60406595,"samples":71156982},{"name":"Setter","opsSec":11325090.96257741,"samples":5662550},{"name":"Method","opsSec":93340326.59734856,"samples":46684329},{"name":"DefineProperty (setter)","opsSec":99974733.04118514,"samples":49987448},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11696351.058657588,"samples":5851173},{"name":"DefineProperty (setter & configurable=false)","opsSec":11509578.12744856,"samples":5754793},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11711929.479195222,"samples":5855967},{"name":"DefineProperty (writable)","opsSec":98981158.71433285,"samples":49495219},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99368868.21387579,"samples":49700904},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99417864.4591396,"samples":49714778},{"name":"DefineProperties (setter)","opsSec":96410659.1512587,"samples":48210427},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11352534.56641474,"samples":5676278},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11416136.107738595,"samples":5708128}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,403,134|1701568|
|Using replaceAll()|3,114,553|1557873|
|Using replaceAll(//g)|3,168,608|1584305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:06:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3403134.0397947934,"samples":1701568},{"name":"Using replaceAll()","opsSec":3114553.169739734,"samples":1557873},{"name":"Using replaceAll(//g)","opsSec":3168608.675521574,"samples":1584305}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,714,609|12357630|
|{ ...object, __proto__: null }|2,566,008|1283005|
|{ ...object, newProp: true }|21,237,459|10619982|
|structuredClone|294,611|147321|
|JSON.parse + JSON.stringify|273,863|136932|
|loop + object.keys starting with {}|1,584,145|792258|
|loop + object.keys starting with { __proto__: null }|842,892|421447|
|loop + object.keys starting with { randomProp: true }|649,831|324933|
|object.keys + reduce(FN, {})|1,653,605|826948|
|object.keys + reduce(FN, { __proto__: null })|870,600|435364|
|object.keys + reduce(FN, { newProp: true })|665,892|332989|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:12:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":24714609.363193907,"samples":12357630},{"name":"{ ...object, __proto__: null }","opsSec":2566008.8042398975,"samples":1283005},{"name":"{ ...object, newProp: true }","opsSec":21237459.211585667,"samples":10619982},{"name":"structuredClone","opsSec":294611.02518603404,"samples":147321},{"name":"JSON.parse + JSON.stringify","opsSec":273863.959468134,"samples":136932},{"name":"loop + object.keys starting with {}","opsSec":1584145.576071656,"samples":792258},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":842892.8941245229,"samples":421447},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":649831.0027015185,"samples":324933},{"name":"object.keys + reduce(FN, {})","opsSec":1653605.0977911965,"samples":826948},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":870600.7599577308,"samples":435364},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":665892.8842397507,"samples":332989}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|307,245|153654|
|Sort using first char|1,368,288|684892|
|Sort using localeCompare|1,279,376|639854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:19:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":307245.92280477285,"samples":153654},{"name":"Sort using first char","opsSec":1368288.6137934483,"samples":684892},{"name":"Sort using localeCompare","opsSec":1279376.6465660462,"samples":639854}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,870|938|
|{...smallObject} - Total keys: 2|59,146,405|29596653|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,095|548|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,533|3267|
|{ ...bigObject, ...anotherBigObject }|1,167|584|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,678,430|6341033|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|29,165,903|14583249|
|{ ...smallObject, ...anotherSmallObject }|20,792,578|10396306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:25:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1870.321986737208,"samples":938},{"name":"{...smallObject} - Total keys: 2","opsSec":59146405.38467898,"samples":29596653},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1095.8327781097262,"samples":548},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6533.680529156846,"samples":3267},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1167.3835747771745,"samples":584},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12678430.637512721,"samples":6341033},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":29165903.307231568,"samples":14583249},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20792578.731874026,"samples":10396306}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,167|1100|
|streams.web.Readable reading 1e3 * "some data"|1,811|906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:30:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2167.467718400821,"samples":1100},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1811.6103407318121,"samples":906}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,528|3265|
|streams.web.WritableStream writing 1e3 * "some data"|1,841|932|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:36:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6528.711088799427,"samples":3265},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1841.9942546064697,"samples":932}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|136,701,211|68350609|
|Using backtick (`)|98,384,466|49232334|
|Using array.join|10,366,621|5183312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:42:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":136701211.98514667,"samples":68350609},{"name":"Using backtick (`)","opsSec":98384466.75362284,"samples":49232334},{"name":"Using array.join","opsSec":10366621.59494379,"samples":5183312}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|111,693,599|56088955|
|(short string) (true) String#slice and strict comparison|59,265,544|29637282|
|(long string) (true) String#endsWith|62,732,661|31366352|
|(long string) (true) String#slice and strict comparison|53,692,569|26846294|
|(short string) (false) String#endsWith|96,674,201|48351590|
|(short string) (false) String#slice and strict comparison|59,439,353|29719678|
|(long string) (false) String#endsWith|89,338,837|44673021|
|(long string) (false) String#slice and strict comparison|53,599,009|26799550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:48:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":111693599.18216857,"samples":56088955},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59265544.37680129,"samples":29637282},{"name":"(long string) (true) String#endsWith","opsSec":62732661.96911649,"samples":31366352},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53692569.959296495,"samples":26846294},{"name":"(short string) (false) String#endsWith","opsSec":96674201.13481623,"samples":48351590},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59439353.503547154,"samples":29719678},{"name":"(long string) (false) String#endsWith","opsSec":89338837.18013677,"samples":44673021},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53599009.41767409,"samples":26799550}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|134,737,796|67368915|
|Using indexof|15,736,670|7868337|
|Using RegExp.test|13,326,873|6663492|
|Using RegExp.text with cached regex pattern|14,237,984|7119037|
|Using new RegExp.test|4,592,313|2296158|
|Using new RegExp.test with cached regex pattern|5,194,839|2597628|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:54:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":134737796.854502,"samples":67368915},{"name":"Using indexof","opsSec":15736670.380565813,"samples":7868337},{"name":"Using RegExp.test","opsSec":13326873.786753785,"samples":6663492},{"name":"Using RegExp.text with cached regex pattern","opsSec":14237984.84173892,"samples":7119037},{"name":"Using new RegExp.test","opsSec":4592313.575258433,"samples":2296158},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5194839.65438106,"samples":2597628}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|106,238,828|53181782|
|(short string) (true) String#slice and strict comparison|59,554,357|29785901|
|(long string) (true) String#startsWith|64,145,400|32073264|
|(long string) (true) String#slice and strict comparison|53,724,477|26887018|
|(short string) (false) String#startsWith|99,102,557|49552007|
|(short string) (false) String#slice and strict comparison|59,809,998|29905149|
|(long string) (false) String#startsWith|82,695,957|41352782|
|(long string) (false) String#slice and strict comparison|53,790,207|26895110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:59:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":106238828.35419638,"samples":53181782},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59554357.218574814,"samples":29785901},{"name":"(long string) (true) String#startsWith","opsSec":64145400.32386231,"samples":32073264},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53724477.85540228,"samples":26887018},{"name":"(short string) (false) String#startsWith","opsSec":99102557.78701587,"samples":49552007},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59809998.95000525,"samples":29905149},{"name":"(long string) (false) String#startsWith","opsSec":82695957.70676894,"samples":41352782},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53790207.843413025,"samples":26895110}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|121,250,684|60625897|
|Using this|90,374,201|45187267|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:09:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":121250684.31373715,"samples":60625897},{"name":"Using this","opsSec":90374201.0614433,"samples":45187267}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,672,894|5836835|
|Date.now()|19,354,623|9677314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:15:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11672894.803056128,"samples":5836835},{"name":"Date.now()","opsSec":19354623.006507263,"samples":9677314}]}-->

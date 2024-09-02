## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,377,166|9688584|
|Using dot notation|19,496,891|9748446|
|Using define property (writable)|3,298,636|1649319|
|Using define property initialized (writable)|4,136,324|2068163|
|Using define property (getter)|1,854,986|927494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:18:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":19377166.139760967,"samples":9688584},{"name":"Using dot notation","opsSec":19496891.298288573,"samples":9748446},{"name":"Using define property (writable)","opsSec":3298636.7399204588,"samples":1649319},{"name":"Using define property initialized (writable)","opsSec":4136324.5770968515,"samples":2068163},{"name":"Using define property (getter)","opsSec":1854986.7757120926,"samples":927494}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.09ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.261ms
new Array(length)|10,000|0.303ms
array.push|1,000,000|33.043ms
new Array(length)|1,000,000|7.515ms
array.push|100,000,000|1,818.207ms
new Array(length)|100,000,000|4,528.664ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.012ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|23.125ms
new Array(length)|1,000,000|4.625ms
array.push|100,000,000|2,528.888ms
new Array(length)|100,000,000|4,140.393ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|137|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:32:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":273.40622892869817,"samples":137},{"name":"Array.from","opsSec":23.129795342655715,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,400|2201|
|new Blob (1024)|506|257|
|text (128)|4,344|2173|
|text (1024)|544|273|
|arrayBuffer (128)|4,379|2190|
|arrayBuffer (1024)|545|273|
|slice (0, 64)|66,920|33461|
|slice (0, 512)|28,583|14292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4400.652370622016,"samples":2201},{"name":"new Blob (1024)","opsSec":506.825221001075,"samples":257},{"name":"text (128)","opsSec":4344.653782957618,"samples":2173},{"name":"text (1024)","opsSec":544.3196634262116,"samples":273},{"name":"arrayBuffer (128)","opsSec":4379.911254238047,"samples":2190},{"name":"arrayBuffer (1024)","opsSec":545.5854140085693,"samples":273},{"name":"slice (0, 64)","opsSec":66920.75995833614,"samples":33461},{"name":"slice (0, 512)","opsSec":28583.226080571625,"samples":14292}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|278,922|139462|
|[True conditional] Using constructor name|288,055|144028|
|[True conditional] Check if property is valid then instanceof |292,332|146167|
|[False conditional] Using instanceof only|19,239,873|9619937|
|[False conditional] Using constructor name|19,588,264|9794133|
|[False conditional] Check if property is valid then instanceof |19,343,301|9671651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":278922.26008303446,"samples":139462},{"name":"[True conditional] Using constructor name","opsSec":288055.8046980763,"samples":144028},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":292332.80494337063,"samples":146167},{"name":"[False conditional] Using instanceof only","opsSec":19239873.96149182,"samples":9619937},{"name":"[False conditional] Using constructor name","opsSec":19588264.74629804,"samples":9794133},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19343301.96139811,"samples":9671651}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,076|3539|
|crypto.verify('RSA-SHA256')|7,001|3501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:53:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7076.371047690146,"samples":3539},{"name":"crypto.verify('RSA-SHA256')","opsSec":7001.649371403115,"samples":3501}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,295,988|647995|
|fromUnixToISOString(new Date())|1,878,000|939001|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1295988.0456500752,"samples":647995},{"name":"fromUnixToISOString(new Date())","opsSec":1878000.354870427,"samples":939001}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,093|9547|
|Intl.DateTimeFormat().format(new Date())|20,111|10056|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,189|11095|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,636|10819|
|Reusing Intl.DateTimeFormat()|920,668|460335|
|Date.toLocaleDateString()|904,369|452185|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,680|10841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:05:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19093.40745519683,"samples":9547},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20111.771811836377,"samples":10056},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22189.52989261667,"samples":11095},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21636.00156908968,"samples":10819},{"name":"Reusing Intl.DateTimeFormat()","opsSec":920668.2139051806,"samples":460335},{"name":"Date.toLocaleDateString()","opsSec":904369.4175865625,"samples":452185},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21680.215111249996,"samples":10841}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|965,237|482619|
|Using brackets {}|971,754|485878|
|Using '' + |952,095|476048|
|Using date.toString()|1,058,561|529281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:11:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":965237.0212494644,"samples":482619},{"name":"Using brackets {}","opsSec":971754.3344128251,"samples":485878},{"name":"Using '' + ","opsSec":952095.7010423664,"samples":476048},{"name":"Using date.toString()","opsSec":1058561.3458092308,"samples":529281}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,883,505|1441753|
|Using delete property (proto: null)|8,463,561|4231781|
|Using delete property (cached proto: null)|2,866,974|1433488|
|Using undefined assignment|19,392,256|9696129|
|Using undefined assignment (proto: null)|8,906,971|4453486|
|Using undefined property (cached proto: null)|19,111,386|9555694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:19:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2883505.4175274917,"samples":1441753},{"name":"Using delete property (proto: null)","opsSec":8463561.492197715,"samples":4231781},{"name":"Using delete property (cached proto: null)","opsSec":2866974.216739368,"samples":1433488},{"name":"Using undefined assignment","opsSec":19392256.332056005,"samples":9696129},{"name":"Using undefined assignment (proto: null)","opsSec":8906971.803996783,"samples":4453486},{"name":"Using undefined property (cached proto: null)","opsSec":19111386.203410894,"samples":9555694}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|290,900|145451|
|NodeError|289,041|144521|
|NodeError Range|289,890|144946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:27:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":290900.3872482347,"samples":145451},{"name":"NodeError","opsSec":289041.416714374,"samples":144521},{"name":"NodeError Range","opsSec":289890.0246892119,"samples":144946}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,446,504|723253|
|Function returning explicitly undefined|1,437,575|718788|
|Function returning implicitly undefined|1,505,885|752943|
|Function returning string|1,496,475|748238|
|Function returning integer|1,507,013|753507|
|Function returning float|1,438,580|719291|
|Function returning functions|1,437,605|718803|
|Function returning arrow functions|1,500,136|750069|
|Function returning empty object|1,467,537|733769|
|Function returning empty array|1,500,098|750050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1446504.7415416802,"samples":723253},{"name":"Function returning explicitly undefined","opsSec":1437575.3013366347,"samples":718788},{"name":"Function returning implicitly undefined","opsSec":1505885.235011844,"samples":752943},{"name":"Function returning string","opsSec":1496475.7396144453,"samples":748238},{"name":"Function returning integer","opsSec":1507013.0475643394,"samples":753507},{"name":"Function returning float","opsSec":1438580.9728528901,"samples":719291},{"name":"Function returning functions","opsSec":1437605.6837304393,"samples":718803},{"name":"Function returning arrow functions","opsSec":1500136.8809015683,"samples":750069},{"name":"Function returning empty object","opsSec":1467537.9383586661,"samples":733769},{"name":"Function returning empty array","opsSec":1500098.7609176438,"samples":750050}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,694,131|7847066|
|using Array.includes (first item)|17,685,397|8842699|
|Using raw comparison|19,354,659|9677330|
|Using raw comparison (first item)|19,604,130|9802066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":15694131.592095178,"samples":7847066},{"name":"using Array.includes (first item)","opsSec":17685397.363221638,"samples":8842699},{"name":"Using raw comparison","opsSec":19354659.76776738,"samples":9677330},{"name":"Using raw comparison (first item)","opsSec":19604130.196503427,"samples":9802066}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,985,565|8492783|
|Using Object.getOwnPropertyNames()|16,500,786|8250394|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":16985565.422506645,"samples":8492783},{"name":"Using Object.getOwnPropertyNames()","opsSec":16500786.646968594,"samples":8250394}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,645,686|9322844|
|Length = 10_000 - Array.at|19,351,232|9675617|
|Length = 1_000_000 - Array.at|18,234,563|9117282|
|Length = 100 - Array[length - 1]|18,814,818|9407410|
|Length = 10_000 - Array[length - 1]|19,006,003|9503002|
|Length = 1_000_000 - Array[length - 1]|19,206,307|9603154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:01:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18645686.54553543,"samples":9322844},{"name":"Length = 10_000 - Array.at","opsSec":19351232.21998157,"samples":9675617},{"name":"Length = 1_000_000 - Array.at","opsSec":18234563.70918462,"samples":9117282},{"name":"Length = 100 - Array[length - 1]","opsSec":18814818.15559824,"samples":9407410},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19006003.772004765,"samples":9503002},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19206307.154808447,"samples":9603154}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|18,993,161|9496581|
|~ (small)|19,218,594|9609298|
|Math.floor (long)|19,561,552|9780777|
|~ (long)|19,706,272|9853137|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:13:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":18993161.39223922,"samples":9496581},{"name":"~ (small)","opsSec":19218594.84710024,"samples":9609298},{"name":"Math.floor (long)","opsSec":19561552.39610417,"samples":9780777},{"name":"~ (long)","opsSec":19706272.22641339,"samples":9853137}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|15,146,494|7573248|
|Object.create({})|1,914,841|957421|
|Cached Empty.prototype|18,878,366|9439184|
|Empty.prototype|1,945,125|972563|
|Empty class|1,222,394|611199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:24:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":15146494.57626964,"samples":7573248},{"name":"Object.create({})","opsSec":1914841.4063990258,"samples":957421},{"name":"Cached Empty.prototype","opsSec":18878366.980786648,"samples":9439184},{"name":"Empty.prototype","opsSec":1945125.1558223737,"samples":972563},{"name":"Empty class","opsSec":1222394.851108846,"samples":611199}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,356,399|9678201|
|Using optional chain (obj.field?.field2) (undefined)|19,528,567|9764284|
|Using and operator (obj.field && obj.field.field2) (Valid)|18,534,542|9267272|
|Using and operator (obj.field && obj.field.field2) (undefined)|17,198,698|8599350|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:34:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19356399.94784002,"samples":9678201},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19528567.609337296,"samples":9764284},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":18534542.739616007,"samples":9267272},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":17198698.348839305,"samples":8599350}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|18,967,079|9483540|
|Using parseInt(x, 10) - big number (10 len)|18,712,167|9356084|
|Using + - small number (2 len)|18,776,286|9388151|
|Using + - big number (10 len)|18,599,244|9299625|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":18967079.27929228,"samples":9483540},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18712167.40105986,"samples":9356084},{"name":"Using + - small number (2 len)","opsSec":18776286.566528488,"samples":9388151},{"name":"Using + - big number (10 len)","opsSec":18599244.71768767,"samples":9299625}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|997,812|498907|
|Using ? operator to avoid rejection|1,073,925|536964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:52:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":997812.5132590905,"samples":498907},{"name":"Using ? operator to avoid rejection","opsSec":1073925.5686331303,"samples":536964}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|18,104,091|9052046|
|Raw usage underscore usage|16,771,071|8385536|
|Manipulating private properties using #|18,231,900|9115951|
|Manipulating private properties using underscore(_)|18,231,725|9115863|
|Manipulating private properties using Symbol|18,042,320|9021161|
|Manipulating private properties using PrivateSymbol|12,474,225|6237113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:01:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":18104091.02249915,"samples":9052046},{"name":"Raw usage underscore usage","opsSec":16771071.932790613,"samples":8385536},{"name":"Manipulating private properties using #","opsSec":18231900.687702395,"samples":9115951},{"name":"Manipulating private properties using underscore(_)","opsSec":18231725.1610074,"samples":9115863},{"name":"Manipulating private properties using Symbol","opsSec":18042320.267763384,"samples":9021161},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12474225.251609584,"samples":6237113}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,072,193|2536097|
|Adding property in the object creation - small object|5,020,913|2510457|
|Adding property after the function creation - small class|252,731|126366|
|Adding property in the function creation - small class|251,913|125957|
|Adding property after the class creation - small class|237,221|118611|
|Adding property in the class creation - small class|230,346|116333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:11:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5072193.786964827,"samples":2536097},{"name":"Adding property in the object creation - small object","opsSec":5020913.708783417,"samples":2510457},{"name":"Adding property after the function creation - small class","opsSec":252731.12757229267,"samples":126366},{"name":"Adding property in the function creation - small class","opsSec":251913.4301718883,"samples":125957},{"name":"Adding property after the class creation - small class","opsSec":237221.5103743762,"samples":118611},{"name":"Adding property in the class creation - small class","opsSec":230346.41893248807,"samples":116333}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,190,768|9595385|
|Getter|15,403,678|7701840|
|Method|19,080,251|9540126|
|DefineProperty (getter)|19,503,526|9751764|
|DefineProperty (getter & enumerable=false)|15,034,188|7517095|
|DefineProperty (getter & configurable=false)|19,288,381|9644191|
|DefineProperty (getter & enumerable=false & configurable=false)|14,496,925|7248463|
|DefineProperty (writable)|17,299,254|8649628|
|DefineProperty (writable & enumerable=false)|17,565,011|8782506|
|DefineProperty (writable & enumerable=false & configurable=false)|18,649,841|9324921|
|DefineProperties (getter)|15,262,574|7631288|
|DefineProperties (getter & enumerable=false)|14,751,623|7375813|
|DefineProperties (getter & enumerable=false & configurable=false)|15,286,006|7643004|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:27:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":19190768.925022513,"samples":9595385},{"name":"Getter","opsSec":15403678.89091502,"samples":7701840},{"name":"Method","opsSec":19080251.465856068,"samples":9540126},{"name":"DefineProperty (getter)","opsSec":19503526.127795383,"samples":9751764},{"name":"DefineProperty (getter & enumerable=false)","opsSec":15034188.436516507,"samples":7517095},{"name":"DefineProperty (getter & configurable=false)","opsSec":19288381.305632073,"samples":9644191},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14496925.420751018,"samples":7248463},{"name":"DefineProperty (writable)","opsSec":17299254.47772601,"samples":8649628},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17565011.859255437,"samples":8782506},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18649841.88802085,"samples":9324921},{"name":"DefineProperties (getter)","opsSec":15262574.351925699,"samples":7631288},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14751623.787174754,"samples":7375813},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":15286006.472337537,"samples":7643004}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,103,799|9551900|
|Setter|6,155,525|3077763|
|Method|18,950,353|9475177|
|DefineProperty (setter)|18,801,731|9400866|
|DefineProperty (setter & enumerable=false)|6,241,571|3120786|
|DefineProperty (setter & configurable=false)|6,218,919|3109460|
|DefineProperty (setter & enumerable=false & configurable=false)|6,276,731|3138366|
|DefineProperty (writable)|19,197,669|9598835|
|DefineProperty (writable & enumerable=false)|18,790,173|9395087|
|DefineProperty (writable & enumerable=false & configurable=false)|19,356,975|9678488|
|DefineProperties (setter)|18,861,699|9430850|
|DefineProperties (setter & enumerable=false)|6,133,159|3066580|
|DefineProperties (setter & enumerable=false & configurable=false)|6,174,493|3087248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":19103799.388127502,"samples":9551900},{"name":"Setter","opsSec":6155525.692247617,"samples":3077763},{"name":"Method","opsSec":18950353.92432679,"samples":9475177},{"name":"DefineProperty (setter)","opsSec":18801731.474167492,"samples":9400866},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6241571.862650313,"samples":3120786},{"name":"DefineProperty (setter & configurable=false)","opsSec":6218919.664221391,"samples":3109460},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6276731.096165304,"samples":3138366},{"name":"DefineProperty (writable)","opsSec":19197669.07922898,"samples":9598835},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18790173.623810314,"samples":9395087},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19356975.651074897,"samples":9678488},{"name":"DefineProperties (setter)","opsSec":18861699.548495453,"samples":9430850},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6133159.914265053,"samples":3066580},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6174493.727937926,"samples":3087248}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,775,439|1387720|
|Using replaceAll()|2,450,552|1225277|
|Using replaceAll(//g)|2,536,491|1268246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:02:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2775439.800167363,"samples":1387720},{"name":"Using replaceAll()","opsSec":2450552.2307072254,"samples":1225277},{"name":"Using replaceAll(//g)","opsSec":2536491.426754252,"samples":1268246}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,825,064|5412533|
|{ ...object, __proto__: null }|10,824,428|5412215|
|{ ...object, newProp: true }|817,201|408601|
|structuredClone|274,466|137234|
|JSON.parse + JSON.stringify|194,920|97461|
|loop + object.keys starting with {}|1,323,106|661554|
|loop + object.keys starting with { __proto__: null }|772,411|386206|
|loop + object.keys starting with { randomProp: true }|488,704|244353|
|object.keys + reduce(FN, {})|1,291,695|645848|
|object.keys + reduce(FN, { __proto__: null })|719,463|359732|
|object.keys + reduce(FN, { newProp: true })|524,875|262438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10825064.354622308,"samples":5412533},{"name":"{ ...object, __proto__: null }","opsSec":10824428.073237447,"samples":5412215},{"name":"{ ...object, newProp: true }","opsSec":817201.4720865049,"samples":408601},{"name":"structuredClone","opsSec":274466.8373585806,"samples":137234},{"name":"JSON.parse + JSON.stringify","opsSec":194920.90922236597,"samples":97461},{"name":"loop + object.keys starting with {}","opsSec":1323106.737754089,"samples":661554},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":772411.8038095103,"samples":386206},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":488704.54463734134,"samples":244353},{"name":"object.keys + reduce(FN, {})","opsSec":1291695.2327336648,"samples":645848},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":719463.8805726616,"samples":359732},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":524875.0793697347,"samples":262438}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|261,702|130852|
|Sort using first char|1,159,680|579841|
|Sort using localeCompare|1,070,781|535391|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":261702.60878890462,"samples":130852},{"name":"Sort using first char","opsSec":1159680.6756440282,"samples":579841},{"name":"Sort using localeCompare","opsSec":1070781.39822082,"samples":535391}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,819|910|
|{...smallObject} - Total keys: 2|14,466,066|7233034|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,221|1111|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,601|3301|
|{ ...bigObject, ...anotherBigObject }|1,131|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,627,868|3813935|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,975,649|5987825|
|{ ...smallObject, ...anotherSmallObject }|9,998,442|4999222|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:25:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1819.0793130254358,"samples":910},{"name":"{...smallObject} - Total keys: 2","opsSec":14466066.321888953,"samples":7233034},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2221.0854414164314,"samples":1111},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6601.428184292393,"samples":3301},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1131.16518425776,"samples":566},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7627868.825364192,"samples":3813935},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11975649.952214492,"samples":5987825},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9998442.540326342,"samples":4999222}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,097|1049|
|streams.web.Readable reading 1e3 * "some data"|1,492|747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2097.881306071435,"samples":1049},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1492.6390594700267,"samples":747}]}-->

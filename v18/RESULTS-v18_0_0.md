## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,217,657|100|
|Using dot notation|909,790,954|95|
|Using define property (writable)|4,992,943|98|
|Using define property initialized (writable)|6,442,186|94|
|Using define property (getter)|2,610,236|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912217656.66744,"samples":6},{"name":"Using dot notation","opsSec":909790953.5908649,"samples":7},{"name":"Using define property (writable)","opsSec":4992942.853746876,"samples":7},{"name":"Using define property initialized (writable)","opsSec":6442186.268837996,"samples":7},{"name":"Using define property (getter)","opsSec":2610235.904254199,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.321ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|27.197ms
new Array(length)|1,000,000|16.971ms
array.push|100,000,000|2,161.004ms
new Array(length)|100,000,000|4,243.146ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.424ms
new Array(length)|10,000|3.044ms
array.push|1,000,000|254.734ms
new Array(length)|1,000,000|4.445ms
array.push|100,000,000|2,589.446ms
new Array(length)|100,000,000|4,625.693ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|216|83|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:30:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":215.6497129086748,"samples":2},{"name":"Array.from","opsSec":22.060671820843652,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,405,458|98|
|[async] async function|18,815,139|87|
|[async] function|329,820|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:37:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911405457.9563723,"samples":6},{"name":"[async] async function","opsSec":18815138.608408354,"samples":9},{"name":"[async] function","opsSec":329820.4757901804,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,824|95|
|new Blob (1024)|749|78|
|text (128)|33,289|76|
|text (1024)|15,861|82|
|arrayBuffer (128)|37,937|75|
|arrayBuffer (1024)|17,359|83|
|slice (0, 64)|92,680|81|
|slice (0, 512)|28,646|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:45:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5823.656913428497,"samples":5},{"name":"new Blob (1024)","opsSec":749.4485532923568,"samples":3},{"name":"text (128)","opsSec":33289.316691075845,"samples":4},{"name":"text (1024)","opsSec":15860.583011873106,"samples":4},{"name":"arrayBuffer (128)","opsSec":37937.42707690699,"samples":3},{"name":"arrayBuffer (1024)","opsSec":17359.013656625888,"samples":6},{"name":"slice (0, 64)","opsSec":92680.01520471221,"samples":3},{"name":"slice (0, 512)","opsSec":28645.833763617185,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|282,464|53|
|[True conditional] Using constructor name|217,096|94|
|[True conditional] Check if property is valid then instanceof |221,825|98|
|[False conditional] Using instanceof only|911,031,780|95|
|[False conditional] Using constructor name|911,700,850|99|
|[False conditional] Check if property is valid then instanceof |912,391,181|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:57:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":282463.9810966396,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217096.20964387385,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":221825.02678540227,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":911031779.9659613,"samples":10},{"name":"[False conditional] Using constructor name","opsSec":911700850.3458937,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912391180.7573806,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,371|93|
|crypto.verify('RSA-SHA256')|3,264|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:07:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3370.7174611881696,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3263.6036894799263,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,492,994|92|
|fromUnixToISOString(new Date())|2,115,925|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2492994.369263105,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":2115925.244898756,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,539|84|
|Intl.DateTimeFormat().format(new Date())|8,467|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,468|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,047|93|
|Reusing Intl.DateTimeFormat()|564,926|80|
|Date.toLocaleDateString()|739,304|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,746|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:27:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11538.922448973073,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8466.762640107847,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13467.935380751727,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15047.009497231902,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":564926.120669956,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":739303.8499273668,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13746.252855543107,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,176,276|97|
|Using brackets {}|1,207,085|94|
|Using '' + |1,188,314|92|
|Using date.toString()|1,338,093|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1176276.1020611096,"samples":4},{"name":"Using brackets {}","opsSec":1207084.5198412158,"samples":4},{"name":"Using '' + ","opsSec":1188314.4164808537,"samples":4},{"name":"Using date.toString()","opsSec":1338093.3897024072,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,834,405|93|
|Using delete property (proto: null)|23,283,979|99|
|Using delete property (cached proto: null)|3,863,518|96|
|Using undefined assignment|909,320,322|100|
|Using undefined assignment (proto: null)|25,720,024|96|
|Using undefined property (cached proto: null)|906,458,343|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:48:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3834404.5726473676,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23283978.64253624,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3863517.7295859307,"samples":5},{"name":"Using undefined assignment","opsSec":909320321.6430678,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":25720024.38167484,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":906458343.247205,"samples":11}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|277,347|51|
|NodeError|219,266|93|
|NodeError Range|219,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:58:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":277346.9032556492,"samples":3},{"name":"NodeError","opsSec":219266.35749701076,"samples":3},{"name":"NodeError Range","opsSec":219204.9616794176,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,825,667|98|
|Function returning explicitly undefined|1,817,734|94|
|Function returning implicitly undefined|1,872,390|97|
|Function returning string|1,841,194|97|
|Function returning integer|1,852,997|97|
|Function returning float|1,845,332|95|
|Function returning functions|1,803,872|96|
|Function returning arrow functions|1,830,838|95|
|Function returning empty object|1,849,350|98|
|Function returning empty array|1,801,807|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1825666.537380393,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1817733.8847298669,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1872389.5878778733,"samples":5},{"name":"Function returning string","opsSec":1841193.517479964,"samples":6},{"name":"Function returning integer","opsSec":1852996.5290338092,"samples":6},{"name":"Function returning float","opsSec":1845332.006537664,"samples":6},{"name":"Function returning functions","opsSec":1803872.3709411472,"samples":6},{"name":"Function returning arrow functions","opsSec":1830838.2911739352,"samples":7},{"name":"Function returning empty object","opsSec":1849350.2608745433,"samples":5},{"name":"Function returning empty array","opsSec":1801807.419692909,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|104,226,042|94|
|using Array.includes (first item)|114,999,781|94|
|Using raw comparison|820,257,708|94|
|Using raw comparison (first item)|819,242,249|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"using Array.includes","opsSec":104226041.82179572,"samples":7},{"name":"using Array.includes (first item)","opsSec":114999781.39441405,"samples":6},{"name":"Using raw comparison","opsSec":820257708.463046,"samples":7},{"name":"Using raw comparison (first item)","opsSec":819242249.2563151,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,357,146|92|
|Using Object.getOwnPropertyNames()|92,389,759|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using Object.keys()","opsSec":92357145.8921346,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":92389758.92970736,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,257,096|99|
|Length = 10_000 - Array.at|23,318,152|94|
|Length = 1_000_000 - Array.at|23,316,601|96|
|Length = 100 - Array[length - 1]|815,469,237|92|
|Length = 10_000 - Array[length - 1]|815,774,844|97|
|Length = 1_000_000 - Array[length - 1]|815,950,710|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23257095.780231107,"samples":4},{"name":"Length = 10_000 - Array.at","opsSec":23318151.692381207,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23316601.12019535,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":815469236.5606205,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":815774844.0958465,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":815950709.830403,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|76,735,282|86|
|Object.create({})|2,026,625|85|
|Cached Empty.prototype|818,426,937|97|
|Empty.prototype|2,166,140|81|
|Empty class|1,305,253|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":76735282.1292372,"samples":4},{"name":"Object.create({})","opsSec":2026625.2893820798,"samples":3},{"name":"Cached Empty.prototype","opsSec":818426936.5027847,"samples":6},{"name":"Empty.prototype","opsSec":2166140.204868909,"samples":3},{"name":"Empty class","opsSec":1305252.6974477344,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|818,125,095|98|
|Using optional chain (obj.field?.field2) (undefined)|819,693,775|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,836,159|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|820,718,379|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":818125094.6486292,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":819693774.7827154,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822836158.6445191,"samples":11},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":820718379.1694856,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|240,495,217|96|
|Using parseInt(x, 10) - big number (10 len)|18,429,507|96|
|Using + - small number (2 len)|822,407,470|99|
|Using + - big number (10 len)|817,337,410|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":240495217.03042325,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18429507.330844767,"samples":7},{"name":"Using + - small number (2 len)","opsSec":822407470.4643235,"samples":8},{"name":"Using + - big number (10 len)","opsSec":817337410.2447379,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,001,195|80|
|Using ? operator to avoid rejection|1,080,803|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1001194.9289826307,"samples":5},{"name":"Using ? operator to avoid rejection","opsSec":1080802.937404011,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|529,502,829|89|
|Raw usage underscore usage|569,383,751|99|
|Manipulating private properties using #|435,586,576|93|
|Manipulating private properties using underscore(_)|372,771,269|96|
|Manipulating private properties using Symbol|367,631,613|94|
|Manipulating private properties using PrivateSymbol|46,720,786|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Raw usage private field","opsSec":529502828.6570939,"samples":8},{"name":"Raw usage underscore usage","opsSec":569383750.7982923,"samples":6},{"name":"Manipulating private properties using #","opsSec":435586575.7789269,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":372771268.7001138,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":367631612.63246524,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":46720785.945257425,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,569,655|97|
|Adding property in the object creation - small object|3,584,865|95|
|Adding property after the function creation - small class|235,312|90|
|Adding property in the function creation - small class|235,616|91|
|Adding property after the class creation - small class|199,391|81|
|Adding property in the class creation - small class|200,959|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3569655.3239753633,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":3584864.836758191,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":235312.3855065383,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":235615.63982749268,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":199391.05213817823,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":200958.59821169934,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|820,425,082|96|
|Getter|91,202,826|91|
|Method|821,173,251|90|
|DefineProperty (getter)|819,977,185|94|
|DefineProperty (getter & enumerable=false)|91,757,884|98|
|DefineProperty (getter & configurable=false)|821,446,848|99|
|DefineProperty (getter & enumerable=false & configurable=false)|91,856,716|100|
|DefineProperty (writable)|591,749,791|71|
|DefineProperty (writable & enumerable=false)|135,339,108|84|
|DefineProperty (writable & enumerable=false & configurable=false)|131,837,269|84|
|DefineProperties (getter)|57,510,796|91|
|DefineProperties (getter & enumerable=false)|91,994,537|98|
|DefineProperties (getter & enumerable=false & configurable=false)|90,661,244|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Getter (class)","opsSec":820425082.004631,"samples":6},{"name":"Getter","opsSec":91202826.31495252,"samples":7},{"name":"Method","opsSec":821173251.1287384,"samples":6},{"name":"DefineProperty (getter)","opsSec":819977184.9303006,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91757884.22530389,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":821446848.0161554,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":91856715.55010831,"samples":8},{"name":"DefineProperty (writable)","opsSec":591749791.199858,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":135339108.07958296,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":131837269.37105508,"samples":6},{"name":"DefineProperties (getter)","opsSec":57510795.559244126,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":91994537.25646529,"samples":9},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":90661243.74302937,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|760,171,179|90|
|Setter|9,520,702|94|
|Method|775,754,901|98|
|DefineProperty (setter)|777,516,053|95|
|DefineProperty (setter & enumerable=false)|9,395,275|93|
|DefineProperty (setter & configurable=false)|9,544,241|93|
|DefineProperty (setter & enumerable=false & configurable=false)|9,548,974|93|
|DefineProperty (writable)|647,456,463|79|
|DefineProperty (writable & enumerable=false)|128,938,655|81|
|DefineProperty (writable & enumerable=false & configurable=false)|118,156,687|75|
|DefineProperties (setter)|98,669,606|83|
|DefineProperties (setter & enumerable=false)|8,836,930|95|
|DefineProperties (setter & enumerable=false & configurable=false)|9,536,096|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Setter (class)","opsSec":760171179.3714331,"samples":6},{"name":"Setter","opsSec":9520702.193538263,"samples":6},{"name":"Method","opsSec":775754901.3449109,"samples":6},{"name":"DefineProperty (setter)","opsSec":777516052.5106035,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9395275.483704451,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9544240.784575325,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9548974.427769259,"samples":4},{"name":"DefineProperty (writable)","opsSec":647456463.3237431,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":128938654.73386441,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":118156687.34558979,"samples":5},{"name":"DefineProperties (setter)","opsSec":98669606.20025624,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8836930.139485897,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9536095.730355538,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,300,437|96|
|Using replaceAll()|3,000,229|97|
|Using replaceAll(//g)|2,983,614|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3300436.894756047,"samples":7},{"name":"Using replaceAll()","opsSec":3000229.2022370286,"samples":4},{"name":"Using replaceAll(//g)","opsSec":2983614.225904383,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,965,965|95|
|{ ...object, __proto__: null }|25,796,870|97|
|{ ...object, newProp: true }|745,248|89|
|structuredClone|262,609|93|
|JSON.parse + JSON.stringify|172,852|97|
|loop + object.keys starting with {}|1,196,536|95|
|loop + object.keys starting with { __proto__: null }|652,845|98|
|loop + object.keys starting with { randomProp: true }|542,272|98|
|object.keys + reduce(FN, {})|1,214,399|97|
|object.keys + reduce(FN, { __proto__: null })|658,997|93|
|object.keys + reduce(FN, { newProp: true })|544,148|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":24965964.71491103,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":25796869.59529215,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":745248.197624582,"samples":3},{"name":"structuredClone","opsSec":262609.1549208619,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":172851.96007627255,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":1196536.0443641685,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":652845.0737195908,"samples":3},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":542271.8879777235,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1214398.540838012,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":658997.2118838602,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":544147.7631982714,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|251,337|90|
|Sort using first char|1,211,047|96|
|Sort using localeCompare|1,088,497|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Sort using default","opsSec":251336.96416787172,"samples":4},{"name":"Sort using first char","opsSec":1211047.0286270345,"samples":6},{"name":"Sort using localeCompare","opsSec":1088497.244924244,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,000|94|
|{...smallObject} - Total keys: 2|105,644,768|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,235|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,913|99|
|{ ...bigObject, ...anotherBigObject }|1,229|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,013,304|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,905,019|99|
|{ ...smallObject, ...anotherSmallObject }|22,458,761|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2000.2460954687174,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":105644767.9014057,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2234.635786331603,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5913.083007379234,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1229.057245285751,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13013304.36495149,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":31905019.409998093,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22458761.03750916,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,363|83|
|streams.web.Readable reading 1e3 * "some data"|529|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2363.257598285833,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":528.9596202800525,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,796|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,266|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4795.850863587107,"samples":7},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1265.7868414771558,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|817,841,431|96|
|Using backtick (`)|818,248,620|98|
|Using array.join|10,698,077|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":817841431.462485,"samples":6},{"name":"Using backtick (`)","opsSec":818248619.8206687,"samples":7},{"name":"Using array.join","opsSec":10698076.591914805,"samples":7}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|79,739,438|98|
|(short string) (true) String#slice and strict comparison|821,281,958|97|
|(long string) (true) String#endsWith|72,370,232|99|
|(long string) (true) String#slice and strict comparison|818,792,770|97|
|(short string) (false) String#endsWith|94,292,980|100|
|(short string) (false) String#slice and strict comparison|821,549,253|97|
|(long string) (false) String#endsWith|84,019,200|98|
|(long string) (false) String#slice and strict comparison|819,202,101|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":79739438.01542498,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821281957.6301477,"samples":10},{"name":"(long string) (true) String#endsWith","opsSec":72370232.07392138,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":818792769.7415771,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":94292980.49270156,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":821549253.4965684,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":84019199.62841463,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":819202101.2365745,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,617,008|99|
|Using indexof|822,164,765|97|
|Using RegExp.test|16,008,216|99|
|Using RegExp.text with cached regex pattern|17,006,218|93|
|Using new RegExp.test|3,640,819|94|
|Using new RegExp.test with cached regex pattern|4,049,283|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":17617008.07838536,"samples":6},{"name":"Using indexof","opsSec":822164764.541563,"samples":6},{"name":"Using RegExp.test","opsSec":16008215.901736343,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17006218.184705235,"samples":6},{"name":"Using new RegExp.test","opsSec":3640818.63696416,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4049282.673459846,"samples":5}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|78,566,910|94|
|(short string) (true) String#slice and strict comparison|819,777,792|94|
|(long string) (true) String#startsWith|70,511,931|96|
|(long string) (true) String#slice and strict comparison|819,133,341|99|
|(short string) (false) String#startsWith|94,229,775|99|
|(short string) (false) String#slice and strict comparison|818,923,722|92|
|(long string) (false) String#startsWith|81,953,717|98|
|(long string) (false) String#slice and strict comparison|813,687,427|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":78566910.17740718,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":819777792.2757788,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":70511931.05424722,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":819133341.1905167,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":94229775.3396775,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":818923722.4021693,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":81953717.02408113,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":813687426.6883082,"samples":8}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,808,250|85|
|Using this|162,908,495|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:30:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using super","opsSec":19808250.098691333,"samples":6},{"name":"Using this","opsSec":162908495.44075486,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,221,400|94|
|Date.now()|19,459,753|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11221400.470779033,"samples":7},{"name":"Date.now()","opsSec":19459753.153565325,"samples":5}]}-->

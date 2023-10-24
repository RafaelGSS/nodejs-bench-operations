## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|692,166,389|82|
|Using dot notation|581,809,482|85|
|Using define property (writable)|2,321,262|87|
|Using define property initialized (writable)|2,959,906|83|
|Using define property (getter)|1,267,400|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":692166388.5857795,"samples":6},{"name":"Using dot notation","opsSec":581809481.8956726,"samples":8},{"name":"Using define property (writable)","opsSec":2321262.309302133,"samples":6},{"name":"Using define property initialized (writable)","opsSec":2959905.7641658145,"samples":7},{"name":"Using define property (getter)","opsSec":1267399.9961745276,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.008ms
array.push|100|0.04ms
new Array(length)|100|0.015ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.053ms
array.push|10,000|0.471ms
new Array(length)|10,000|3.163ms
array.push|1,000,000|36.206ms
new Array(length)|1,000,000|10.241ms
array.push|100,000,000|2,038.004ms
new Array(length)|100,000,000|5,714.251ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.094ms
new Array(length)|100|0.011ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.45ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|26.154ms
new Array(length)|1,000,000|9.437ms
array.push|100,000,000|2,565.62ms
new Array(length)|100,000,000|5,861.293ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|314|75|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":314.2509322802274,"samples":4},{"name":"Array.from","opsSec":12.801938252141676,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,579|78|
|new Blob (1024)|331|65|
|text (128)|2,589|76|
|text (1024)|349|77|
|arrayBuffer (128)|2,537|75|
|arrayBuffer (1024)|361|80|
|slice (0, 64)|45,068|68|
|slice (0, 512)|13,102|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2579.0438944899224,"samples":2},{"name":"new Blob (1024)","opsSec":330.5992831930977,"samples":2},{"name":"text (128)","opsSec":2588.7041181385885,"samples":4},{"name":"text (1024)","opsSec":348.69986139631214,"samples":3},{"name":"arrayBuffer (128)","opsSec":2536.6672304775293,"samples":4},{"name":"arrayBuffer (1024)","opsSec":360.5738630772147,"samples":4},{"name":"slice (0, 64)","opsSec":45067.91375222453,"samples":5},{"name":"slice (0, 512)","opsSec":13102.139421901235,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|161,710|51|
|[True conditional] Using constructor name|127,632|95|
|[True conditional] Check if property is valid then instanceof |129,680|97|
|[False conditional] Using instanceof only|595,773,670|94|
|[False conditional] Using constructor name|598,776,586|97|
|[False conditional] Check if property is valid then instanceof |598,992,779|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":161710.21872010638,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":127632.35874130242,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":129679.53020944096,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":595773670.0482652,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":598776585.9179529,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598992778.6349702,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,314|81|
|crypto.verify('RSA-SHA256')|3,448|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3313.6105182800666,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":3448.1039809729186,"samples":2}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|817,438|89|
|fromUnixToISOString(new Date())|1,317,288|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":817437.8556480674,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1317287.6916279485,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,209|85|
|Intl.DateTimeFormat().format(new Date())|5,988|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,509|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,498|69|
|Reusing Intl.DateTimeFormat()|416,119|88|
|Date.toLocaleDateString()|378,009|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,311|77|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5209.187637538558,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5988.485837047693,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5508.626207615852,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6497.830491123804,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":416118.90334009094,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":378008.8411605298,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6311.223592875513,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|755,081|96|
|Using brackets {}|774,894|97|
|Using '' + |768,008|96|
|Using date.toString()|838,708|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":755081.1598400435,"samples":5},{"name":"Using brackets {}","opsSec":774894.4555005629,"samples":7},{"name":"Using '' + ","opsSec":768008.4789810458,"samples":4},{"name":"Using date.toString()","opsSec":838707.9709677681,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,204,062|83|
|Using delete property (proto: null)|13,252,680|85|
|Using delete property (cached proto: null)|2,326,496|85|
|Using undefined assignment|830,816,079|83|
|Using undefined assignment (proto: null)|14,665,888|81|
|Using undefined property (cached proto: null)|709,228,405|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2204062.105778394,"samples":6},{"name":"Using delete property (proto: null)","opsSec":13252680.342019182,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2326495.7532857955,"samples":4},{"name":"Using undefined assignment","opsSec":830816078.5860058,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14665887.891578779,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":709228404.7937949,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|143,950|57|
|NodeError|115,422|88|
|NodeError Range|111,566|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":143949.78804633944,"samples":3},{"name":"NodeError","opsSec":115421.94236248726,"samples":3},{"name":"NodeError Range","opsSec":111566.2313675752,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,161,283|86|
|Function returning explicitly undefined|1,167,277|88|
|Function returning implicitly undefined|1,223,432|91|
|Function returning string|1,187,572|90|
|Function returning integer|1,168,870|88|
|Function returning float|1,208,098|89|
|Function returning functions|1,155,691|90|
|Function returning arrow functions|1,185,744|87|
|Function returning empty object|1,207,680|91|
|Function returning empty array|1,188,512|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1161283.221129664,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1167277.339763347,"samples":9},{"name":"Function returning implicitly undefined","opsSec":1223432.4375684587,"samples":8},{"name":"Function returning string","opsSec":1187572.4957052304,"samples":5},{"name":"Function returning integer","opsSec":1168869.672341759,"samples":7},{"name":"Function returning float","opsSec":1208097.7275906047,"samples":5},{"name":"Function returning functions","opsSec":1155690.9711825503,"samples":5},{"name":"Function returning arrow functions","opsSec":1185744.1866156133,"samples":5},{"name":"Function returning empty object","opsSec":1207680.0711909356,"samples":5},{"name":"Function returning empty array","opsSec":1188512.0644031153,"samples":4}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|706,302,375|93|
|using Array.includes (first item)|717,662,509|94|
|Using raw comparison|719,838,782|96|
|Using raw comparison (first item)|718,461,646|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":706302374.5670784,"samples":7},{"name":"using Array.includes (first item)","opsSec":717662508.9334534,"samples":7},{"name":"Using raw comparison","opsSec":719838782.2667984,"samples":7},{"name":"Using raw comparison (first item)","opsSec":718461645.6167814,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,403,001|84|
|Using Object.getOwnPropertyNames()|40,318,181|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using Object.keys()","opsSec":44403001.4276347,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":40318180.937042065,"samples":10}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|585,143,559|90|
|Length = 10_000 - Array.at|588,155,213|95|
|Length = 1_000_000 - Array.at|589,084,070|93|
|Length = 100 - Array[length - 1]|589,857,345|97|
|Length = 10_000 - Array[length - 1]|589,112,909|97|
|Length = 1_000_000 - Array[length - 1]|586,618,764|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":585143559.3406457,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":588155212.5877043,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":589084070.1366146,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":589857344.7448335,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":589112908.6186161,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":586618763.8125651,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,647,702|92|
|Object.create({})|1,286,730|76|
|Cached Empty.prototype|603,177,011|94|
|Empty.prototype|1,186,013|80|
|Empty class|813,776|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:42:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":41647701.62652146,"samples":6},{"name":"Object.create({})","opsSec":1286730.131003567,"samples":5},{"name":"Cached Empty.prototype","opsSec":603177010.9000883,"samples":6},{"name":"Empty.prototype","opsSec":1186013.3943237353,"samples":3},{"name":"Empty class","opsSec":813775.5075094836,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|681,612,262|90|
|Using optional chain (obj.field?.field2) (undefined)|687,800,713|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|693,196,489|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|687,311,037|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":681612261.767552,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":687800713.2040915,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":693196488.8683201,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":687311037.4144589,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,525,386|91|
|Using parseInt(x, 10) - big number (10 len)|12,421,384|90|
|Using + - small number (2 len)|606,644,162|91|
|Using + - big number (10 len)|611,323,827|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133525386.29669821,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":12421383.843354285,"samples":6},{"name":"Using + - small number (2 len)","opsSec":606644162.0602872,"samples":7},{"name":"Using + - big number (10 len)","opsSec":611323827.3537323,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|752,172|71|
|Using ? operator to avoid rejection|850,213|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":752171.7632901852,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":850212.5780763833,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|596,226,592|94|
|Raw usage underscore usage|588,099,854|90|
|Manipulating private properties using #|591,523,114|97|
|Manipulating private properties using underscore(_)|592,033,985|97|
|Manipulating private properties using Symbol|590,559,809|98|
|Manipulating private properties using PrivateSymbol|38,541,282|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":596226591.9477341,"samples":8},{"name":"Raw usage underscore usage","opsSec":588099854.3806354,"samples":7},{"name":"Manipulating private properties using #","opsSec":591523114.3744696,"samples":10},{"name":"Manipulating private properties using underscore(_)","opsSec":592033985.3053677,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":590559809.3347491,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":38541282.30632964,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,673,796|98|
|Adding property in the object creation - small object|2,700,208|99|
|Adding property after the function creation - small class|171,803|86|
|Adding property in the function creation - small class|172,613|84|
|Adding property after the class creation - small class|146,365|84|
|Adding property in the class creation - small class|147,373|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2673796.2264717594,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":2700208.237373141,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":171802.7189695752,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":172613.4196577682,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":146364.76017923807,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":147372.7611018779,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|592,430,305|96|
|Getter|71,598,216|95|
|Method|597,002,304|96|
|DefineProperty (getter)|596,219,056|98|
|DefineProperty (getter & enumerable=false)|71,784,207|93|
|DefineProperty (getter & configurable=false)|596,902,654|94|
|DefineProperty (getter & enumerable=false & configurable=false)|71,675,508|95|
|DefineProperty (writable)|597,360,512|94|
|DefineProperty (writable & enumerable=false)|597,956,404|98|
|DefineProperty (writable & enumerable=false & configurable=false)|306,470,492|52|
|DefineProperties (getter)|45,189,087|92|
|DefineProperties (getter & enumerable=false)|70,468,113|98|
|DefineProperties (getter & enumerable=false & configurable=false)|71,396,493|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":592430305.2619624,"samples":6},{"name":"Getter","opsSec":71598216.11042655,"samples":6},{"name":"Method","opsSec":597002303.6605844,"samples":6},{"name":"DefineProperty (getter)","opsSec":596219056.2329857,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":71784206.9752081,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":596902654.1485534,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":71675508.18467958,"samples":5},{"name":"DefineProperty (writable)","opsSec":597360511.7933724,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":597956403.7025591,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":306470491.904601,"samples":6},{"name":"DefineProperties (getter)","opsSec":45189086.978065036,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":70468113.00381406,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":71396492.9342811,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|578,360,642|91|
|Setter|6,114,925|87|
|Method|578,204,716|90|
|DefineProperty (setter)|571,544,430|90|
|DefineProperty (setter & enumerable=false)|5,951,347|89|
|DefineProperty (setter & configurable=false)|5,913,990|89|
|DefineProperty (setter & enumerable=false & configurable=false)|6,064,959|90|
|DefineProperty (writable)|683,452,986|90|
|DefineProperty (writable & enumerable=false)|686,646,617|86|
|DefineProperty (writable & enumerable=false & configurable=false)|692,034,100|91|
|DefineProperties (setter)|686,857,088|87|
|DefineProperties (setter & enumerable=false)|5,646,579|85|
|DefineProperties (setter & enumerable=false & configurable=false)|5,445,289|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":578360641.9612421,"samples":8},{"name":"Setter","opsSec":6114925.216746814,"samples":4},{"name":"Method","opsSec":578204715.9669001,"samples":9},{"name":"DefineProperty (setter)","opsSec":571544429.5353497,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5951347.333658515,"samples":9},{"name":"DefineProperty (setter & configurable=false)","opsSec":5913990.215706207,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6064958.902013326,"samples":4},{"name":"DefineProperty (writable)","opsSec":683452985.684821,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":686646616.8445038,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":692034099.7572569,"samples":8},{"name":"DefineProperties (setter)","opsSec":686857087.8852257,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5646578.867567056,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5445288.962831583,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,269,378|94|
|Using replaceAll()|2,154,854|92|
|Using replaceAll(//g)|1,994,236|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2269378.464541263,"samples":5},{"name":"Using replaceAll()","opsSec":2154854.3720719577,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1994235.9211052463,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,598,985|86|
|{ ...object, __proto__: null }|11,995,217|87|
|{ ...object, newProp: true }|407,334|78|
|structuredClone|143,457|88|
|JSON.parse + JSON.stringify|111,615|88|
|loop + object.keys starting with {}|729,698|86|
|loop + object.keys starting with { __proto__: null }|368,685|83|
|loop + object.keys starting with { randomProp: true }|275,521|86|
|object.keys + reduce(FN, {})|261,997|84|
|object.keys + reduce(FN, { __proto__: null })|369,137|87|
|object.keys + reduce(FN, { newProp: true })|268,473|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":11598985.152135428,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":11995217.345300237,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":407334.18692103546,"samples":3},{"name":"structuredClone","opsSec":143456.9373619053,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":111615.18628682136,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":729697.5855420296,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":368684.819808064,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":275521.3221572913,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":261997.1181008369,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":369137.29719785246,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":268473.10105602257,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|172,133|90|
|Sort using first char|845,188|93|
|Sort using localeCompare|742,255|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:34:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":172133.384134668,"samples":5},{"name":"Sort using first char","opsSec":845188.2398300361,"samples":4},{"name":"Sort using localeCompare","opsSec":742255.1590140843,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,314|95|
|{...smallObject} - Total keys: 2|68,675,239|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,505|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,182|97|
|{ ...bigObject, ...anotherBigObject }|810|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,643,926|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,111,951|96|
|{ ...smallObject, ...anotherSmallObject }|17,206,502|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1313.5885973589468,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":68675239.21881333,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1505.470974770125,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4182.345604839226,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":809.5580125520062,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":10643926.325811096,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28111950.77710866,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":17206501.902118377,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,197|73|
|streams.web.Readable reading 1e3 * "some data"|355|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:42:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1197.097838020015,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":355.0000921405909,"samples":3}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,637|92|
|streams.web.WritableStream writing 1e3 * "some data"|835|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:46:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4636.560474237914,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":834.7190172250607,"samples":6}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|701,486,744|91|
|Using backtick (`)|716,167,198|95|
|Using array.join|6,774,404|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:51:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":701486743.8337687,"samples":7},{"name":"Using backtick (`)","opsSec":716167198.4198806,"samples":7},{"name":"Using array.join","opsSec":6774404.110937956,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|658,987,659|87|
|Using indexof|647,149,598|89|
|Using RegExp.test|10,220,896|89|
|Using RegExp.text with cached regex pattern|11,016,059|90|
|Using new RegExp.test|2,714,931|88|
|Using new RegExp.test with cached regex pattern|2,993,886|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":658987658.9939677,"samples":8},{"name":"Using indexof","opsSec":647149597.860574,"samples":7},{"name":"Using RegExp.test","opsSec":10220896.172745954,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11016059.0002731,"samples":6},{"name":"Using new RegExp.test","opsSec":2714931.3332201447,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2993886.2056882926,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,878,155|98|
|Using this|120,643,180|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:58:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":115878154.82219562,"samples":6},{"name":"Using this","opsSec":120643179.95004292,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,722,488|90|
|Date.now()|12,649,009|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6722488.370965943,"samples":6},{"name":"Date.now()","opsSec":12649009.342064051,"samples":6}]}-->

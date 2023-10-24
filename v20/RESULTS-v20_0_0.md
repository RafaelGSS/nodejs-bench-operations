## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|588,639,959|96|
|Using dot notation|592,568,568|92|
|Using define property (writable)|2,591,364|98|
|Using define property initialized (writable)|3,398,661|92|
|Using define property (getter)|1,388,167|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:48 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|641,406,850|89|
|Using dot notation|619,830,405|89|
|Using define property (writable)|2,868,879|91|
|Using define property initialized (writable)|3,688,138|91|
|Using define property (getter)|1,525,956|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":641406850.148402,"samples":9},{"name":"Using dot notation","opsSec":619830405.0831674,"samples":7},{"name":"Using define property (writable)","opsSec":2868879.357801959,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3688138.3736254964,"samples":6},{"name":"Using define property (getter)","opsSec":1525955.7799537,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.013ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.439ms
new Array(length)|10,000|0.41ms
array.push|1,000,000|34.555ms
new Array(length)|1,000,000|9.068ms
array.push|100,000,000|1,865.123ms
new Array(length)|100,000,000|4,362.19ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.307ms
new Array(length)|10,000|0.202ms
array.push|1,000,000|29.751ms
new Array(length)|1,000,000|4.044ms
array.push|100,000,000|1,690.975ms
new Array(length)|100,000,000|4,649.012ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|327|83|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":327.382289689957,"samples":4},{"name":"Array.from","opsSec":14.708644270201722,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,165|80|
|new Blob (1024)|388|62|
|text (128)|3,550|82|
|text (1024)|446|86|
|arrayBuffer (128)|3,611|87|
|arrayBuffer (1024)|449|87|
|slice (0, 64)|48,379|63|
|slice (0, 512)|14,921|62|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3165.2249175745583,"samples":6},{"name":"new Blob (1024)","opsSec":387.9895969444173,"samples":2},{"name":"text (128)","opsSec":3549.6626387408146,"samples":4},{"name":"text (1024)","opsSec":446.0646387364213,"samples":2},{"name":"arrayBuffer (128)","opsSec":3611.072240950129,"samples":3},{"name":"arrayBuffer (1024)","opsSec":448.9891745074843,"samples":2},{"name":"slice (0, 64)","opsSec":48378.80262724382,"samples":3},{"name":"slice (0, 512)","opsSec":14920.716999166565,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|153,380|57|
|[True conditional] Using constructor name|119,161|85|
|[True conditional] Check if property is valid then instanceof |122,317|88|
|[False conditional] Using instanceof only|770,373,111|89|
|[False conditional] Using constructor name|760,338,493|87|
|[False conditional] Check if property is valid then instanceof |773,301,557|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":153380.33628971706,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":119161.48142880373,"samples":4},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":122316.98247547568,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":770373111.3333162,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":760338493.3078115,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":773301556.6298565,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,877|90|
|crypto.verify('RSA-SHA256')|3,886|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3876.7318094890284,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":3886.030123465615,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|778,091|89|
|fromUnixToISOString(new Date())|1,197,828|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":778090.8650176844,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1197827.609240521,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,818|87|
|Intl.DateTimeFormat().format(new Date())|8,994|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,792|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,279|82|
|Reusing Intl.DateTimeFormat()|444,256|98|
|Date.toLocaleDateString()|411,527|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,122|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8817.658517367827,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8993.700033410349,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":9792.17063099481,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10278.550204588128,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":444255.98094782187,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":411527.03408731776,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11122.233125637415,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|648,850|88|
|Using brackets {}|654,206|91|
|Using '' + |659,233|93|
|Using date.toString()|707,167|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":648850.254240718,"samples":5},{"name":"Using brackets {}","opsSec":654205.528078814,"samples":5},{"name":"Using '' + ","opsSec":659233.1901111603,"samples":5},{"name":"Using date.toString()","opsSec":707166.657784722,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,680,086|95|
|Using delete property (proto: null)|14,180,588|94|
|Using delete property (cached proto: null)|2,766,076|91|
|Using undefined assignment|598,179,134|93|
|Using undefined assignment (proto: null)|14,905,941|91|
|Using undefined property (cached proto: null)|599,415,127|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2680085.768911378,"samples":4},{"name":"Using delete property (proto: null)","opsSec":14180587.55056651,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2766075.714674383,"samples":5},{"name":"Using undefined assignment","opsSec":598179133.9061767,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14905940.955454985,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":599415126.7463826,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|150,058|51|
|NodeError|117,441|94|
|NodeError Range|117,703|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":150057.97413124103,"samples":3},{"name":"NodeError","opsSec":117440.82918306321,"samples":3},{"name":"NodeError Range","opsSec":117702.67486601435,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,146,205|90|
|Function returning explicitly undefined|1,141,134|96|
|Function returning implicitly undefined|1,157,457|91|
|Function returning string|1,143,783|96|
|Function returning integer|1,167,805|94|
|Function returning float|1,153,147|95|
|Function returning functions|1,130,644|95|
|Function returning arrow functions|1,129,671|96|
|Function returning empty object|1,156,223|93|
|Function returning empty array|1,174,723|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1146205.0231708447,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1141133.769956881,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1157457.3145061822,"samples":5},{"name":"Function returning string","opsSec":1143783.2125700763,"samples":6},{"name":"Function returning integer","opsSec":1167805.253584906,"samples":6},{"name":"Function returning float","opsSec":1153146.8331424703,"samples":5},{"name":"Function returning functions","opsSec":1130643.9839868143,"samples":5},{"name":"Function returning arrow functions","opsSec":1129670.5453115313,"samples":6},{"name":"Function returning empty object","opsSec":1156222.5199732946,"samples":6},{"name":"Function returning empty array","opsSec":1174723.371126073,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,890,745|94|
|using Array.includes (first item)|599,054,223|97|
|Using raw comparison|599,342,701|97|
|Using raw comparison (first item)|599,606,194|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":590890744.8952146,"samples":9},{"name":"using Array.includes (first item)","opsSec":599054222.5028611,"samples":8},{"name":"Using raw comparison","opsSec":599342701.0488621,"samples":6},{"name":"Using raw comparison (first item)","opsSec":599606193.5937462,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|60,994,711|96|
|Using Object.getOwnPropertyNames()|61,874,273|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":60994711.40529692,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":61874272.907482766,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,726,721|96|
|Length = 10_000 - Array.at|600,551,342|98|
|Length = 1_000_000 - Array.at|599,687,836|96|
|Length = 100 - Array[length - 1]|598,538,731|99|
|Length = 10_000 - Array[length - 1]|598,238,992|97|
|Length = 1_000_000 - Array[length - 1]|595,366,612|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":594726720.8303853,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":600551341.89811,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":599687836.452827,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":598538731.3701419,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":598238991.7510219,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":595366612.2985417,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,350,432|87|
|Object.create({})|1,613,527|80|
|Cached Empty.prototype|750,452,337|92|
|Empty.prototype|1,528,925|78|
|Empty class|1,058,619|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":50350431.67739145,"samples":8},{"name":"Object.create({})","opsSec":1613526.7041785999,"samples":3},{"name":"Cached Empty.prototype","opsSec":750452337.0765913,"samples":6},{"name":"Empty.prototype","opsSec":1528925.0358748713,"samples":3},{"name":"Empty class","opsSec":1058618.972849253,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|558,953,809|90|
|Using optional chain (obj.field?.field2) (undefined)|593,285,493|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,559,151|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,784,947|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":558953808.5839281,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":593285492.9841253,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":592559151.4127845,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":590784946.7373401,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|596,658,059|94|
|Using parseInt(x, 10) - big number (10 len)|600,404,772|95|
|Using + - small number (2 len)|598,982,907|93|
|Using + - big number (10 len)|599,960,329|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":596658058.8931874,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":600404772.4364338,"samples":6},{"name":"Using + - small number (2 len)","opsSec":598982906.5426883,"samples":7},{"name":"Using + - big number (10 len)","opsSec":599960329.0487723,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|767,915|72|
|Using ? operator to avoid rejection|872,835|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":767914.5508713372,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":872834.7571453903,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|705,946,238|97|
|Raw usage underscore usage|711,371,030|96|
|Manipulating private properties using #|702,246,960|94|
|Manipulating private properties using underscore(_)|702,515,726|96|
|Manipulating private properties using Symbol|702,742,999|95|
|Manipulating private properties using PrivateSymbol|32,272,112|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Raw usage private field","opsSec":705946238.3996183,"samples":7},{"name":"Raw usage underscore usage","opsSec":711371030.1414776,"samples":11},{"name":"Manipulating private properties using #","opsSec":702246960.2183269,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":702515725.969517,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":702742999.4460471,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":32272112.129433263,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,814,346|95|
|Adding property in the object creation - small object|5,842,648|98|
|Adding property after the function creation - small class|204,517|85|
|Adding property in the function creation - small class|208,429|84|
|Adding property after the class creation - small class|168,854|81|
|Adding property in the class creation - small class|166,508|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5814345.77960689,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5842648.344450931,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":204516.84287888077,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":208429.1350304664,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":168853.65087613455,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":166507.89904165512,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,721,147|98|
|Getter|68,337,863|96|
|Method|598,061,350|96|
|DefineProperty (getter)|598,807,769|97|
|DefineProperty (getter & enumerable=false)|68,392,511|98|
|DefineProperty (getter & configurable=false)|597,399,176|99|
|DefineProperty (getter & enumerable=false & configurable=false)|61,795,896|91|
|DefineProperty (writable)|597,476,702|96|
|DefineProperty (writable & enumerable=false)|598,743,398|95|
|DefineProperty (writable & enumerable=false & configurable=false)|179,894,392|32|
|DefineProperties (getter)|68,249,914|97|
|DefineProperties (getter & enumerable=false)|68,172,657|96|
|DefineProperties (getter & enumerable=false & configurable=false)|68,413,493|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597721146.7622209,"samples":6},{"name":"Getter","opsSec":68337862.58695109,"samples":6},{"name":"Method","opsSec":598061349.8495392,"samples":7},{"name":"DefineProperty (getter)","opsSec":598807768.6854368,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":68392511.09328263,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":597399176.4362254,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":61795896.06141269,"samples":5},{"name":"DefineProperty (writable)","opsSec":597476702.2761172,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":598743397.532756,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":179894392.4702201,"samples":7},{"name":"DefineProperties (getter)","opsSec":68249913.61999902,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68172656.50255169,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":68413493.0540717,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|479,549,636|93|
|Setter|8,162,315|94|
|Method|480,925,589|95|
|DefineProperty (setter)|481,384,632|98|
|DefineProperty (setter & enumerable=false)|8,308,862|93|
|DefineProperty (setter & configurable=false)|8,306,827|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,316,907|98|
|DefineProperty (writable)|483,114,504|97|
|DefineProperty (writable & enumerable=false)|484,314,558|96|
|DefineProperty (writable & enumerable=false & configurable=false)|483,714,983|97|
|DefineProperties (setter)|521,556,846|73|
|DefineProperties (setter & enumerable=false)|8,315,714|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,462,250|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":479549635.88956606,"samples":5},{"name":"Setter","opsSec":8162314.780124082,"samples":5},{"name":"Method","opsSec":480925588.9750447,"samples":7},{"name":"DefineProperty (setter)","opsSec":481384631.63604635,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8308861.525685197,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8306826.837357643,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8316906.516797279,"samples":8},{"name":"DefineProperty (writable)","opsSec":483114504.1703881,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":484314558.3213598,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":483714983.4113202,"samples":8},{"name":"DefineProperties (setter)","opsSec":521556845.56981146,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8315713.700526846,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7462250.477824795,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,830,527|92|
|Using replaceAll()|1,550,428|91|
|Using replaceAll(//g)|1,674,743|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1830526.8724434783,"samples":6},{"name":"Using replaceAll()","opsSec":1550428.4319635606,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1674743.449196181,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,567,132|93|
|{ ...object, __proto__: null }|20,867,304|92|
|{ ...object, newProp: true }|601,149|84|
|structuredClone|182,917|97|
|JSON.parse + JSON.stringify|147,633|96|
|loop + object.keys starting with {}|370,489|94|
|loop + object.keys starting with { __proto__: null }|492,120|93|
|loop + object.keys starting with { randomProp: true }|377,902|93|
|object.keys + reduce(FN, {})|365,875|95|
|object.keys + reduce(FN, { __proto__: null })|493,487|96|
|object.keys + reduce(FN, { newProp: true })|379,079|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20567132.216218166,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":20867303.672608715,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":601148.8556594953,"samples":3},{"name":"structuredClone","opsSec":182916.8925366023,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":147633.14409526985,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":370489.24516725104,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":492120.47466014366,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":377901.57100323826,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":365874.7388809437,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":493487.1070454872,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":379078.6634657649,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|165,893|84|
|Sort using first char|822,541|81|
|Sort using localeCompare|775,131|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":165893.22531978285,"samples":4},{"name":"Sort using first char","opsSec":822541.4887391302,"samples":6},{"name":"Sort using localeCompare","opsSec":775130.6471299805,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,320|94|
|{...smallObject} - Total keys: 2|70,597,354|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|785|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,689|97|
|{ ...bigObject, ...anotherBigObject }|814|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,999,571|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,793,757|98|
|{ ...smallObject, ...anotherSmallObject }|14,697,363|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1320.0493306568335,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":70597354.09740353,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":784.8419644751314,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3688.542564720888,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":814.2682036972594,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7999570.82873022,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19793757.176898394,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14697362.577226818,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,396|80|
|streams.web.Readable reading 1e3 * "some data"|372|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1396.4759551365573,"samples":3},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":371.9418865137751,"samples":2}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,203|94|
|streams.web.WritableStream writing 1e3 * "some data"|775|50|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4202.534246787694,"samples":8},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":774.7683939951687,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|580,743,812|93|
|Using backtick (`)|597,370,445|95|
|Using array.join|5,742,596|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":580743811.8169199,"samples":6},{"name":"Using backtick (`)","opsSec":597370444.7374444,"samples":6},{"name":"Using array.join","opsSec":5742596.337165756,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|704,867,895|95|
|Using indexof|716,661,892|93|
|Using RegExp.test|11,175,434|87|
|Using RegExp.text with cached regex pattern|11,816,446|96|
|Using new RegExp.test|3,313,268|96|
|Using new RegExp.test with cached regex pattern|4,012,640|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":704867894.6692827,"samples":5},{"name":"Using indexof","opsSec":716661891.7412158,"samples":8},{"name":"Using RegExp.test","opsSec":11175433.734687818,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11816446.49157919,"samples":7},{"name":"Using new RegExp.test","opsSec":3313268.2960559768,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4012640.245081775,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|590,898,363|98|
|Using this|593,478,723|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":590898362.6602161,"samples":6},{"name":"Using this","opsSec":593478722.9950508,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,671,117|89|
|Date.now()|17,757,075|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":9671117.220433807,"samples":4},{"name":"Date.now()","opsSec":17757075.32656472,"samples":6}]}-->

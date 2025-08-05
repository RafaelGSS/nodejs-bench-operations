## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|109,199,882|54609066|
|Using dot notation|78,951,978|39476101|
|Using define property (writable)|5,102,447|2551402|
|Using define property initialized (writable)|6,883,027|3442765|
|Using define property (getter)|2,402,271|1201147|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:15:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":54609066,"opsSec":109199882.73399726},{"name":"Using dot notation","samples":39476101,"opsSec":78951978.88170768},{"name":"Using define property (writable)","samples":2551402,"opsSec":5102447.543014646},{"name":"Using define property initialized (writable)","samples":3442765,"opsSec":6883027.689049702},{"name":"Using define property (getter)","samples":1201147,"opsSec":2402271.389821679}]}-->

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|163|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:17:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":163,"opsSec":324.01914653388604},{"name":"Array.from","samples":12,"opsSec":23.978157672743798}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,502|2252|
|new Blob (1024)|619|313|
|text (128)|4,393|2203|
|text (1024)|555|279|
|arrayBuffer (128)|4,412|2209|
|arrayBuffer (1024)|557|280|
|slice (0, 64)|158,203|91419|
|slice (0, 512)|32,088|16047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:18:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2252,"opsSec":4502.214196738863},{"name":"new Blob (1024)","samples":313,"opsSec":619.8497319484588},{"name":"text (128)","samples":2203,"opsSec":4393.633485870794},{"name":"text (1024)","samples":279,"opsSec":555.9786019100627},{"name":"arrayBuffer (128)","samples":2209,"opsSec":4412.64110331321},{"name":"arrayBuffer (1024)","samples":280,"opsSec":557.5662134421332},{"name":"slice (0, 64)","samples":91419,"opsSec":158203.3495971455},{"name":"slice (0, 512)","samples":16047,"opsSec":32088.663013567584}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.14 ms|1|
|Gzip|134.81 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:19:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134141968},{"name":"Gzip","samples":1,"totalTime":0.13480594}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,927|10964|
|crypto.verify('RSA-SHA256')|21,687|10892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:20:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10964,"opsSec":21927.39888228704},{"name":"crypto.verify('RSA-SHA256')","samples":10892,"opsSec":21687.99475128226}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,537,833|768918|
|fromUnixToISOString(new Date())|2,760,631|1380317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:21:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":768918,"opsSec":1537833.7240060882},{"name":"fromUnixToISOString(new Date())","samples":1380317,"opsSec":2760631.4823040883}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,148|11076|
|Intl.DateTimeFormat().format(new Date())|21,462|10732|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,589|10795|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,604|10304|
|Reusing Intl.DateTimeFormat()|463,907|231958|
|Date.toLocaleDateString()|1,042,247|521125|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,644|13323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:22:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11076,"opsSec":22148.69005546073},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10732,"opsSec":21462.66764051821},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10795,"opsSec":21589.374167221642},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10304,"opsSec":20604.53011471056},{"name":"Reusing Intl.DateTimeFormat()","samples":231958,"opsSec":463907.75914256653},{"name":"Date.toLocaleDateString()","samples":521125,"opsSec":1042247.1692566883},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13323,"opsSec":26644.734161969434}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,092,048|546092|
|Using brackets {}|1,116,223|558112|
|Using '' + |1,114,844|557481|
|Using date.toString()|1,241,043|620522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:24:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":546092,"opsSec":1092048.566320902},{"name":"Using brackets {}","samples":558112,"opsSec":1116223.294546878},{"name":"Using '' + ","samples":557481,"opsSec":1114844.1409071116},{"name":"Using date.toString()","samples":620522,"opsSec":1241043.5035825986}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,099,066|2049983|
|Using delete property (proto: null)|17,272,153|8636079|
|Using delete property (cached proto: null)|4,191,539|2096071|
|Using undefined assignment|76,958,486|38480804|
|Using undefined assignment (proto: null)|19,572,337|9786236|
|Using undefined property (cached proto: null)|76,397,643|38397925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:25:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2049983,"opsSec":4099066.107423041},{"name":"Using delete property (proto: null)","samples":8636079,"opsSec":17272153.889227375},{"name":"Using delete property (cached proto: null)","samples":2096071,"opsSec":4191539.4494379857},{"name":"Using undefined assignment","samples":38480804,"opsSec":76958486.40987425},{"name":"Using undefined assignment (proto: null)","samples":9786236,"opsSec":19572337.733763147},{"name":"Using undefined property (cached proto: null)","samples":38397925,"opsSec":76397643.78366868}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|349,132|174603|
|NodeError|312,399|156255|
|NodeError Range|306,095|153048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:25:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":174603,"opsSec":349132.9781393562},{"name":"NodeError","samples":156255,"opsSec":312399.0508522917},{"name":"NodeError Range","samples":153048,"opsSec":306095.1992549588}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,393,172|35198755|
|using Array.includes (first item)|79,433,044|39723036|
|Using raw comparison|97,195,973|48616205|
|Using raw comparison (first item)|98,364,336|49191405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:27:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":35198755,"opsSec":70393172.51349607},{"name":"using Array.includes (first item)","samples":39723036,"opsSec":79433044.50410305},{"name":"Using raw comparison","samples":48616205,"opsSec":97195973.17357668},{"name":"Using raw comparison (first item)","samples":49191405,"opsSec":98364336.58740287}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,861,266|20437185|
|Using Object.getOwnPropertyNames()|45,406,922|22707688|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:27:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":20437185,"opsSec":40861266.363934815},{"name":"Using Object.getOwnPropertyNames()","samples":22707688,"opsSec":45406922.048439175}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|92,266,461|46133263|
|Length = 10_000 - Array.at|91,604,897|45839527|
|Length = 1_000_000 - Array.at|92,959,039|46495237|
|Length = 100 - Array[length - 1]|94,642,917|47321522|
|Length = 10_000 - Array[length - 1]|94,081,996|47041145|
|Length = 1_000_000 - Array[length - 1]|91,196,766|45599274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:28:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46133263,"opsSec":92266461.59800981},{"name":"Length = 10_000 - Array.at","samples":45839527,"opsSec":91604897.45378383},{"name":"Length = 1_000_000 - Array.at","samples":46495237,"opsSec":92959039.9006576},{"name":"Length = 100 - Array[length - 1]","samples":47321522,"opsSec":94642917.74634773},{"name":"Length = 10_000 - Array[length - 1]","samples":47041145,"opsSec":94081996.27600762},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45599274,"opsSec":91196766.19758202}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|91,260,555|45701911|
|~ (small)|90,014,195|45008031|
|Math.floor (long)|92,057,852|46028935|
|~ (long)|89,369,930|44693683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:29:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":45701911,"opsSec":91260555.52178746},{"name":"~ (small)","samples":45008031,"opsSec":90014195.1055935},{"name":"Math.floor (long)","samples":46028935,"opsSec":92057852.6931237},{"name":"~ (long)","samples":44693683,"opsSec":89369930.6414913}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,031,235|20015664|
|Object.create({})|2,078,111|1039868|
|new Function with empty prototype|73,693,881|36867731|
|Empty class|76,778,988|38389859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:30:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":20015664,"opsSec":40031235.12753451},{"name":"Object.create({})","samples":1039868,"opsSec":2078111.3574780598},{"name":"new Function with empty prototype","samples":36867731,"opsSec":73693881.25921382},{"name":"Empty class","samples":38389859,"opsSec":76778988.75316481}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|94,625,002|47312518|
|Using parseInt(x, 10) - big number (10 len)|96,673,338|48339035|
|Using + - small number (2 len)|89,451,116|44725624|
|Using + - big number (10 len)|95,836,570|47919091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:31:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47312518,"opsSec":94625002.69199905},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48339035,"opsSec":96673338.80679879},{"name":"Using + - small number (2 len)","samples":44725624,"opsSec":89451116.1490548},{"name":"Using + - big number (10 len)","samples":47919091,"opsSec":95836570.02889211}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,173,127|596442|
|Using ? operator to avoid rejection|1,279,948|639975|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:32:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":596442,"opsSec":1173127.6043715752},{"name":"Using ? operator to avoid rejection","samples":639975,"opsSec":1279948.4333431176}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|93,360,816|46680416|
|Raw usage underscore usage|97,625,647|48813403|
|Manipulating private properties using #|98,326,202|49166371|
|Manipulating private properties using underscore(_)|98,242,961|49121490|
|Manipulating private properties using Symbol|98,337,093|49168553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:33:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":46680416,"opsSec":93360816.68882605},{"name":"Raw usage underscore usage","samples":48813403,"opsSec":97625647.18356793},{"name":"Manipulating private properties using #","samples":49166371,"opsSec":98326202.71756206},{"name":"Manipulating private properties using underscore(_)","samples":49121490,"opsSec":98242961.72680911},{"name":"Manipulating private properties using Symbol","samples":49168553,"opsSec":98337093.41285205}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,599,844|3799923|
|Adding property in the object creation - small object|7,782,058|3891033|
|Adding property after the function creation - small class|285,774|142896|
|Adding property in the function creation - small class|299,528|149932|
|Adding property after the class creation - small class|286,963|143485|
|Adding property in the class creation - small class|271,686|135844|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:33:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3799923,"opsSec":7599844.66242734},{"name":"Adding property in the object creation - small object","samples":3891033,"opsSec":7782058.80937766},{"name":"Adding property after the function creation - small class","samples":142896,"opsSec":285774.78892756207},{"name":"Adding property in the function creation - small class","samples":149932,"opsSec":299528.92537798954},{"name":"Adding property after the class creation - small class","samples":143485,"opsSec":286963.25980695366},{"name":"Adding property in the class creation - small class","samples":135844,"opsSec":271686.3356495078}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|88,806,223|44404500|
|Getter|51,431,316|25715665|
|Method|95,312,612|47702235|
|DefineProperty (getter)|90,738,210|45370208|
|DefineProperty (getter & enumerable=false)|46,797,894|23400917|
|DefineProperty (getter & configurable=false)|91,913,304|45956667|
|DefineProperty (getter & enumerable=false & configurable=false)|51,100,181|25556989|
|DefineProperty (writable)|90,545,182|45273748|
|DefineProperty (writable & enumerable=false)|95,585,905|47793072|
|DefineProperty (writable & enumerable=false & configurable=false)|94,411,335|47205691|
|DefineProperties (getter)|53,219,784|26609912|
|DefineProperties (getter & enumerable=false)|52,896,827|26502098|
|DefineProperties (getter & enumerable=false & configurable=false)|51,815,186|25907599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:34:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":44404500,"opsSec":88806223.02940586},{"name":"Getter","samples":25715665,"opsSec":51431316.73072028},{"name":"Method","samples":47702235,"opsSec":95312612.2792906},{"name":"DefineProperty (getter)","samples":45370208,"opsSec":90738210.33558317},{"name":"DefineProperty (getter & enumerable=false)","samples":23400917,"opsSec":46797894.36606068},{"name":"DefineProperty (getter & configurable=false)","samples":45956667,"opsSec":91913304.40391599},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25556989,"opsSec":51100181.66635263},{"name":"DefineProperty (writable)","samples":45273748,"opsSec":90545182.20841384},{"name":"DefineProperty (writable & enumerable=false)","samples":47793072,"opsSec":95585905.41758008},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47205691,"opsSec":94411335.17197776},{"name":"DefineProperties (getter)","samples":26609912,"opsSec":53219784.617359385},{"name":"DefineProperties (getter & enumerable=false)","samples":26502098,"opsSec":52896827.711809054},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25907599,"opsSec":51815186.497028604}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|89,640,828|44825092|
|Setter|10,652,405|5326206|
|Method|86,468,376|43995154|
|DefineProperty (setter)|89,784,356|44967386|
|DefineProperty (setter & enumerable=false)|10,635,296|5322117|
|DefineProperty (setter & configurable=false)|10,642,531|5321268|
|DefineProperty (setter & enumerable=false & configurable=false)|10,657,902|5329338|
|DefineProperty (writable)|89,084,186|44542119|
|DefineProperty (writable & enumerable=false)|90,034,267|45017145|
|DefineProperty (writable & enumerable=false & configurable=false)|90,291,475|45145762|
|DefineProperties (setter)|91,596,796|45808531|
|DefineProperties (setter & enumerable=false)|10,413,976|5206989|
|DefineProperties (setter & enumerable=false & configurable=false)|10,336,479|5168242|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:36:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":44825092,"opsSec":89640828.3660251},{"name":"Setter","samples":5326206,"opsSec":10652405.416813452},{"name":"Method","samples":43995154,"opsSec":86468376.88783985},{"name":"DefineProperty (setter)","samples":44967386,"opsSec":89784356.44721268},{"name":"DefineProperty (setter & enumerable=false)","samples":5322117,"opsSec":10635296.670983726},{"name":"DefineProperty (setter & configurable=false)","samples":5321268,"opsSec":10642531.359856326},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5329338,"opsSec":10657902.982296694},{"name":"DefineProperty (writable)","samples":44542119,"opsSec":89084186.68750848},{"name":"DefineProperty (writable & enumerable=false)","samples":45017145,"opsSec":90034267.85157011},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45145762,"opsSec":90291475.96493478},{"name":"DefineProperties (setter)","samples":45808531,"opsSec":91596796.02568573},{"name":"DefineProperties (setter & enumerable=false)","samples":5206989,"opsSec":10413976.250451991},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5168242,"opsSec":10336479.183200702}]}-->

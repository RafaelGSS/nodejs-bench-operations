## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,163,678|44729011|
|Using dot notation|63,463,127|31994557|
|Using define property (writable)|4,886,776|2443391|
|Using define property initialized (writable)|7,139,212|3569997|
|Using define property (getter)|2,396,915|1200090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:13:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44729011,"opsSec":89163678.7867909},{"name":"Using dot notation","samples":31994557,"opsSec":63463127.7890963},{"name":"Using define property (writable)","samples":2443391,"opsSec":4886776.36066008},{"name":"Using define property initialized (writable)","samples":3569997,"opsSec":7139212.299088524},{"name":"Using define property (getter)","samples":1200090,"opsSec":2396915.3868616023}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.255ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|32.392ms
new Array(length)|1,000,000|8.219ms
array.push|10,000,000|263.631ms
new Array(length)|10,000,000|68.973ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.024ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.184ms
array.push|1,000,000|23.423ms
new Array(length)|1,000,000|12.352ms
array.push|10,000,000|229.923ms
new Array(length)|10,000,000|68.909ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|139|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:21:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":139,"opsSec":273.0150439754661},{"name":"Array.from","samples":12,"opsSec":23.405125043635927}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,839|2428|
|new Blob (1024)|631|321|
|text (128)|4,226|2114|
|text (1024)|534|269|
|arrayBuffer (128)|4,231|2116|
|arrayBuffer (1024)|530|266|
|slice (0, 64)|204,221|111367|
|slice (0, 512)|35,220|22933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2428,"opsSec":4839.7775303369535},{"name":"new Blob (1024)","samples":321,"opsSec":631.5917680910406},{"name":"text (128)","samples":2114,"opsSec":4226.398389424734},{"name":"text (1024)","samples":269,"opsSec":534.1758945982712},{"name":"arrayBuffer (128)","samples":2116,"opsSec":4231.466885949973},{"name":"arrayBuffer (1024)","samples":266,"opsSec":530.1477919108291},{"name":"slice (0, 64)","samples":111367,"opsSec":204221.01233767997},{"name":"slice (0, 512)","samples":22933,"opsSec":35220.24288474151}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.80 ms|1|
|Gzip|134.92 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:36:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133798025},{"name":"Gzip","samples":1,"totalTime":0.13492343}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,623|3312|
|crypto.verify('RSA-SHA256')|6,805|3403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3312,"opsSec":6623.570951568041},{"name":"crypto.verify('RSA-SHA256')","samples":3403,"opsSec":6805.072060373848}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,502,048|751123|
|fromUnixToISOString(new Date())|2,108,032|1054132|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":751123,"opsSec":1502048.729932103},{"name":"fromUnixToISOString(new Date())","samples":1054132,"opsSec":2108032.1206827895}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,832|10417|
|Intl.DateTimeFormat().format(new Date())|19,860|9944|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,960|9981|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,840|9421|
|Reusing Intl.DateTimeFormat()|453,377|226826|
|Date.toLocaleDateString()|1,025,529|512766|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,496|12249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:51:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10417,"opsSec":20832.023624254718},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9944,"opsSec":19860.556881107255},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9981,"opsSec":19960.033856824964},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9421,"opsSec":18840.00318574235},{"name":"Reusing Intl.DateTimeFormat()","samples":226826,"opsSec":453377.60952342994},{"name":"Date.toLocaleDateString()","samples":512766,"opsSec":1025529.9386848232},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12249,"opsSec":24496.8830401209}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|913,840|456921|
|Using brackets {}|933,548|466775|
|Using '' + |933,857|466930|
|Using date.toString()|1,217,581|608791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":456921,"opsSec":913840.82297302},{"name":"Using brackets {}","samples":466775,"opsSec":933548.6034112892},{"name":"Using '' + ","samples":466930,"opsSec":933857.9361739611},{"name":"Using date.toString()","samples":608791,"opsSec":1217581.3765983353}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,040,063|2020734|
|Using delete property (proto: null)|18,006,912|9003459|
|Using delete property (cached proto: null)|4,075,069|2038333|
|Using undefined assignment|77,322,601|38663260|
|Using undefined assignment (proto: null)|19,071,367|9535785|
|Using undefined property (cached proto: null)|77,240,491|38620246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2020734,"opsSec":4040063.4719339823},{"name":"Using delete property (proto: null)","samples":9003459,"opsSec":18006912.48988478},{"name":"Using delete property (cached proto: null)","samples":2038333,"opsSec":4075069.990688007},{"name":"Using undefined assignment","samples":38663260,"opsSec":77322601.90911606},{"name":"Using undefined assignment (proto: null)","samples":9535785,"opsSec":19071367.347650565},{"name":"Using undefined property (cached proto: null)","samples":38620246,"opsSec":77240491.38207607}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|340,789|170410|
|NodeError|314,846|157424|
|NodeError Range|291,922|145962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:05:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":170410,"opsSec":340789.40188276256},{"name":"NodeError","samples":157424,"opsSec":314846.253232987},{"name":"NodeError Range","samples":145962,"opsSec":291922.03711622243}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,361,280|35680673|
|using Array.includes (first item)|82,246,610|41123312|
|Using raw comparison|99,669,285|49836501|
|Using raw comparison (first item)|99,771,139|49904093|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35680673,"opsSec":71361280.77578938},{"name":"using Array.includes (first item)","samples":41123312,"opsSec":82246610.67604907},{"name":"Using raw comparison","samples":49836501,"opsSec":99669285.5316811},{"name":"Using raw comparison (first item)","samples":49904093,"opsSec":99771139.57907835}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,671,735|20337117|
|Using Object.getOwnPropertyNames()|39,391,396|19697704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:12:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20337117,"opsSec":40671735.94197845},{"name":"Using Object.getOwnPropertyNames()","samples":19697704,"opsSec":39391396.45896741}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|92,972,583|46487174|
|Length = 10_000 - Array.at|99,184,634|49643927|
|Length = 1_000_000 - Array.at|100,386,487|50196786|
|Length = 100 - Array[length - 1]|99,077,098|49543792|
|Length = 10_000 - Array[length - 1]|98,697,587|49348801|
|Length = 1_000_000 - Array[length - 1]|99,099,881|49558382|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46487174,"opsSec":92972583.56630908},{"name":"Length = 10_000 - Array.at","samples":49643927,"opsSec":99184634.13820653},{"name":"Length = 1_000_000 - Array.at","samples":50196786,"opsSec":100386487.7255612},{"name":"Length = 100 - Array[length - 1]","samples":49543792,"opsSec":99077098.47251445},{"name":"Length = 10_000 - Array[length - 1]","samples":49348801,"opsSec":98697587.5901522},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49558382,"opsSec":99099881.74054621}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,104,624|48632267|
|~ (small)|98,634,765|49317451|
|Math.floor (long)|96,483,737|48291845|
|~ (long)|98,842,655|49426212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48632267,"opsSec":97104624.62888141},{"name":"~ (small)","samples":49317451,"opsSec":98634765.68675382},{"name":"Math.floor (long)","samples":48291845,"opsSec":96483737.67195874},{"name":"~ (long)","samples":49426212,"opsSec":98842655.18270299}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,471,105|14756164|
|Object.create({})|2,092,202|1052776|
|new Function with empty prototype|96,636,869|48339379|
|Empty class|77,853,562|38928503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14756164,"opsSec":29471105.468053192},{"name":"Object.create({})","samples":1052776,"opsSec":2092202.8503519348},{"name":"new Function with empty prototype","samples":48339379,"opsSec":96636869.58923411},{"name":"Empty class","samples":38928503,"opsSec":77853562.53692898}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,196,743|48122857|
|Using parseInt(x, 10) - big number (10 len)|95,981,619|47996557|
|Using + - small number (2 len)|94,621,624|47310835|
|Using + - big number (10 len)|97,472,375|48736207|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48122857,"opsSec":96196743.31627348},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47996557,"opsSec":95981619.04933941},{"name":"Using + - small number (2 len)","samples":47310835,"opsSec":94621624.5816202},{"name":"Using + - big number (10 len)","samples":48736207,"opsSec":97472375.40093935}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|867,609|433851|
|Using ? operator to avoid rejection|1,121,679|561799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:35:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":433851,"opsSec":867609.7609358759},{"name":"Using ? operator to avoid rejection","samples":561799,"opsSec":1121679.2241122152}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,873,327|49437149|
|Raw usage underscore usage|99,493,516|49746771|
|Manipulating private properties using #|99,321,324|49660670|
|Manipulating private properties using underscore(_)|99,622,324|49820869|
|Manipulating private properties using Symbol|99,624,689|49812352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:44:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":49437149,"opsSec":98873327.65716237},{"name":"Raw usage underscore usage","samples":49746771,"opsSec":99493516.72864676},{"name":"Manipulating private properties using #","samples":49660670,"opsSec":99321324.90315862},{"name":"Manipulating private properties using underscore(_)","samples":49820869,"opsSec":99622324.39839983},{"name":"Manipulating private properties using Symbol","samples":49812352,"opsSec":99624689.45479533}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,065,347|4032795|
|Adding property in the object creation - small object|7,825,452|3912728|
|Adding property after the function creation - small class|269,655|134846|
|Adding property in the function creation - small class|280,660|140331|
|Adding property after the class creation - small class|274,438|137840|
|Adding property in the class creation - small class|274,893|137448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:49:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4032795,"opsSec":8065347.007225367},{"name":"Adding property in the object creation - small object","samples":3912728,"opsSec":7825452.11857575},{"name":"Adding property after the function creation - small class","samples":134846,"opsSec":269655.13490719657},{"name":"Adding property in the function creation - small class","samples":140331,"opsSec":280660.0814076835},{"name":"Adding property after the class creation - small class","samples":137840,"opsSec":274438.34924560424},{"name":"Adding property in the class creation - small class","samples":137448,"opsSec":274893.3203399133}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,985,154|48994021|
|Getter|47,274,427|23793327|
|Method|98,603,605|49301810|
|DefineProperty (getter)|97,851,295|49222911|
|DefineProperty (getter & enumerable=false)|51,711,784|25855901|
|DefineProperty (getter & configurable=false)|98,504,973|49264340|
|DefineProperty (getter & enumerable=false & configurable=false)|49,244,569|24623368|
|DefineProperty (writable)|93,124,821|46562416|
|DefineProperty (writable & enumerable=false)|93,359,713|46697924|
|DefineProperty (writable & enumerable=false & configurable=false)|99,001,499|49500757|
|DefineProperties (getter)|51,129,112|25648996|
|DefineProperties (getter & enumerable=false)|51,222,342|25611375|
|DefineProperties (getter & enumerable=false & configurable=false)|49,377,744|24694184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:54:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":48994021,"opsSec":97985154.57346503},{"name":"Getter","samples":23793327,"opsSec":47274427.58474631},{"name":"Method","samples":49301810,"opsSec":98603605.99828795},{"name":"DefineProperty (getter)","samples":49222911,"opsSec":97851295.92202143},{"name":"DefineProperty (getter & enumerable=false)","samples":25855901,"opsSec":51711784.4179933},{"name":"DefineProperty (getter & configurable=false)","samples":49264340,"opsSec":98504973.98996952},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24623368,"opsSec":49244569.63289271},{"name":"DefineProperty (writable)","samples":46562416,"opsSec":93124821.01127112},{"name":"DefineProperty (writable & enumerable=false)","samples":46697924,"opsSec":93359713.68297729},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49500757,"opsSec":99001499.3477781},{"name":"DefineProperties (getter)","samples":25648996,"opsSec":51129112.8470409},{"name":"DefineProperties (getter & enumerable=false)","samples":25611375,"opsSec":51222342.67993101},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24694184,"opsSec":49377744.575765505}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,558,021|49779541|
|Setter|11,615,055|5807530|
|Method|99,229,395|49614706|
|DefineProperty (setter)|99,303,405|49651717|
|DefineProperty (setter & enumerable=false)|11,260,108|5630057|
|DefineProperty (setter & configurable=false)|11,383,470|5691738|
|DefineProperty (setter & enumerable=false & configurable=false)|11,441,566|5720851|
|DefineProperty (writable)|99,459,598|49729810|
|DefineProperty (writable & enumerable=false)|96,557,864|48284028|
|DefineProperty (writable & enumerable=false & configurable=false)|95,218,607|47613078|
|DefineProperties (setter)|101,313,087|50656550|
|DefineProperties (setter & enumerable=false)|11,721,831|5860919|
|DefineProperties (setter & enumerable=false & configurable=false)|11,812,795|5912218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:00:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49779541,"opsSec":99558021.30884098},{"name":"Setter","samples":5807530,"opsSec":11615055.098446747},{"name":"Method","samples":49614706,"opsSec":99229395.7263791},{"name":"DefineProperty (setter)","samples":49651717,"opsSec":99303405.59922601},{"name":"DefineProperty (setter & enumerable=false)","samples":5630057,"opsSec":11260108.887910565},{"name":"DefineProperty (setter & configurable=false)","samples":5691738,"opsSec":11383470.649768794},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5720851,"opsSec":11441566.188609341},{"name":"DefineProperty (writable)","samples":49729810,"opsSec":99459598.11888841},{"name":"DefineProperty (writable & enumerable=false)","samples":48284028,"opsSec":96557864.51051664},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47613078,"opsSec":95218607.64009795},{"name":"DefineProperties (setter)","samples":50656550,"opsSec":101313087.23455101},{"name":"DefineProperties (setter & enumerable=false)","samples":5860919,"opsSec":11721831.763985502},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5912218,"opsSec":11812795.293508327}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,291,103|1645814|
|Using replaceAll()|3,147,122|1573980|
|Using replaceAll(//g)|3,041,591|1520832|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1645814,"opsSec":3291103.8851240864},{"name":"Using replaceAll()","samples":1573980,"opsSec":3147122.2234756215},{"name":"Using replaceAll(//g)","samples":1520832,"opsSec":3041591.95076987}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,977,425|12490477|
|{ ...object, __proto__: null }|2,536,841|1268424|
|{ ...object, newProp: true }|23,137,222|11569365|
|structuredClone|285,057|142529|
|JSON.parse + JSON.stringify|297,490|148782|
|loop + object.keys starting with {}|1,672,222|836297|
|loop + object.keys starting with { __proto__: null }|902,157|451080|
|loop + object.keys starting with { randomProp: true }|653,933|326968|
|object.keys + reduce(FN, {})|1,646,230|823148|
|object.keys + reduce(FN, { __proto__: null })|879,689|440052|
|object.keys + reduce(FN, { newProp: true })|620,753|310377|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:11:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12490477,"opsSec":24977425.788742784},{"name":"{ ...object, __proto__: null }","samples":1268424,"opsSec":2536841.0592028624},{"name":"{ ...object, newProp: true }","samples":11569365,"opsSec":23137222.47113267},{"name":"structuredClone","samples":142529,"opsSec":285057.8187032273},{"name":"JSON.parse + JSON.stringify","samples":148782,"opsSec":297490.5257899404},{"name":"loop + object.keys starting with {}","samples":836297,"opsSec":1672222.983886565},{"name":"loop + object.keys starting with { __proto__: null }","samples":451080,"opsSec":902157.7446056386},{"name":"loop + object.keys starting with { randomProp: true }","samples":326968,"opsSec":653933.7073084221},{"name":"object.keys + reduce(FN, {})","samples":823148,"opsSec":1646230.2495638325},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":440052,"opsSec":879689.6380304191},{"name":"object.keys + reduce(FN, { newProp: true })","samples":310377,"opsSec":620753.1532926989}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|299,524|149816|
|Sort using first char|1,304,237|652139|
|Sort using localeCompare|1,222,565|611434|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:14:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":149816,"opsSec":299524.1377637016},{"name":"Sort using first char","samples":652139,"opsSec":1304237.041739941},{"name":"Sort using localeCompare","samples":611434,"opsSec":1222565.102160549}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,661|831|
|{...smallObject} - Total keys: 2|38,579,238|19289701|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,016|509|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,715|3358|
|{ ...bigObject, ...anotherBigObject }|1,069|535|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,151,493|6079108|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,410,461|14207164|
|{ ...smallObject, ...anotherSmallObject }|20,423,529|10213361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:20:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1661.3571710697981},{"name":"{...smallObject} - Total keys: 2","samples":19289701,"opsSec":38579238.50118723},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":509,"opsSec":1016.8622348791181},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3358,"opsSec":6715.676049218738},{"name":"{ ...bigObject, ...anotherBigObject }","samples":535,"opsSec":1069.5832219234123},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6079108,"opsSec":12151493.963660218},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14207164,"opsSec":28410461.336212143},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10213361,"opsSec":20423529.843132578}]}-->

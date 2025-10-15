## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,152,737|44077180|
|Using dot notation|85,519,325|42766262|
|Using define property (writable)|4,532,651|2267603|
|Using define property initialized (writable)|6,038,142|3019965|
|Using define property (getter)|2,184,571|1092331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:47:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44077180,"opsSec":88152737.10810983},{"name":"Using dot notation","samples":42766262,"opsSec":85519325.28941213},{"name":"Using define property (writable)","samples":2267603,"opsSec":4532651.442973254},{"name":"Using define property initialized (writable)","samples":3019965,"opsSec":6038142.601103506},{"name":"Using define property (getter)","samples":1092331,"opsSec":2184571.423299647}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.101ms
new Array(length)|100|0.009ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.292ms
new Array(length)|10,000|0.277ms
array.push|1,000,000|32.044ms
new Array(length)|1,000,000|9.014ms
array.push|10,000,000|228.946ms
new Array(length)|10,000,000|67.437ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.013ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.025ms
array.push|10,000|16.652ms
new Array(length)|10,000|0.236ms
array.push|1,000,000|40.017ms
new Array(length)|1,000,000|4.989ms
array.push|10,000,000|223.061ms
new Array(length)|10,000,000|109.633ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|234|118|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:58:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":118,"opsSec":234.30458933014668},{"name":"Array.from","samples":12,"opsSec":22.288055897522952}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,295|2152|
|new Blob (1024)|537|276|
|text (128)|4,531|2273|
|text (1024)|578|290|
|arrayBuffer (128)|4,507|2254|
|arrayBuffer (1024)|570|288|
|slice (0, 64)|63,142|31572|
|slice (0, 512)|24,572|12289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:01:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2152,"opsSec":4295.53867369379},{"name":"new Blob (1024)","samples":276,"opsSec":537.3010906009052},{"name":"text (128)","samples":2273,"opsSec":4531.984583883205},{"name":"text (1024)","samples":290,"opsSec":578.5077519809357},{"name":"arrayBuffer (128)","samples":2254,"opsSec":4507.931533535868},{"name":"arrayBuffer (1024)","samples":288,"opsSec":570.5819150388908},{"name":"slice (0, 64)","samples":31572,"opsSec":63142.886664622325},{"name":"slice (0, 512)","samples":12289,"opsSec":24572.920040240082}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.50 ms|1|
|Gzip|134.84 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:05:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133496558},{"name":"Gzip","samples":1,"totalTime":0.134842711}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,545|3273|
|crypto.verify('RSA-SHA256')|6,526|3264|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:13:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3273,"opsSec":6545.270699757551},{"name":"crypto.verify('RSA-SHA256')","samples":3264,"opsSec":6526.394846240356}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,490,771|746188|
|fromUnixToISOString(new Date())|2,190,376|1095189|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":746188,"opsSec":1490771.601786725},{"name":"fromUnixToISOString(new Date())","samples":1095189,"opsSec":2190376.2214145083}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,688|9892|
|Intl.DateTimeFormat().format(new Date())|18,905|9453|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,602|9802|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,579|9291|
|Reusing Intl.DateTimeFormat()|428,259|214132|
|Date.toLocaleDateString()|971,836|486249|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,621|11812|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:21:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9892,"opsSec":19688.83264917194},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9453,"opsSec":18905.011872839434},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9802,"opsSec":19602.574187163926},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9291,"opsSec":18579.946432840563},{"name":"Reusing Intl.DateTimeFormat()","samples":214132,"opsSec":428259.6146215463},{"name":"Date.toLocaleDateString()","samples":486249,"opsSec":971836.4922801078},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11812,"opsSec":23621.547138545135}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,065,416|532758|
|Using brackets {}|1,092,426|546285|
|Using '' + |1,078,226|539114|
|Using date.toString()|1,218,168|609118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":532758,"opsSec":1065416.4922304587},{"name":"Using brackets {}","samples":546285,"opsSec":1092426.6146371225},{"name":"Using '' + ","samples":539114,"opsSec":1078226.1583897213},{"name":"Using date.toString()","samples":609118,"opsSec":1218168.6913071305}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,685,816|1844428|
|Using delete property (proto: null)|17,441,395|8723702|
|Using delete property (cached proto: null)|3,727,724|1864483|
|Using undefined assignment|85,794,731|42900969|
|Using undefined assignment (proto: null)|18,323,951|9163327|
|Using undefined property (cached proto: null)|83,815,537|41930538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:30:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1844428,"opsSec":3685816.60191373},{"name":"Using delete property (proto: null)","samples":8723702,"opsSec":17441395.857720517},{"name":"Using delete property (cached proto: null)","samples":1864483,"opsSec":3727724.8391039204},{"name":"Using undefined assignment","samples":42900969,"opsSec":85794731.07100058},{"name":"Using undefined assignment (proto: null)","samples":9163327,"opsSec":18323951.070625477},{"name":"Using undefined property (cached proto: null)","samples":41930538,"opsSec":83815537.00717112}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|308,921|154462|
|NodeError|289,547|144774|
|NodeError Range|270,296|135149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:35:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":154462,"opsSec":308921.8684391078},{"name":"NodeError","samples":144774,"opsSec":289547.1105112765},{"name":"NodeError Range","samples":135149,"opsSec":270296.99557636445}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,138,696|33627826|
|using Array.includes (first item)|76,462,377|38231286|
|Using raw comparison|99,187,516|49606807|
|Using raw comparison (first item)|99,826,949|49913480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33627826,"opsSec":67138696.79301874},{"name":"using Array.includes (first item)","samples":38231286,"opsSec":76462377.4797117},{"name":"Using raw comparison","samples":49606807,"opsSec":99187516.17749345},{"name":"Using raw comparison (first item)","samples":49913480,"opsSec":99826949.01903561}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,419,280|21237287|
|Using Object.getOwnPropertyNames()|43,430,177|21716926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:12:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21237287,"opsSec":42419280.80682256},{"name":"Using Object.getOwnPropertyNames()","samples":21716926,"opsSec":43430177.54639851}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,146,551|50073287|
|Length = 10_000 - Array.at|96,690,386|48345203|
|Length = 1_000_000 - Array.at|100,710,223|50355241|
|Length = 100 - Array[length - 1]|94,196,982|47098723|
|Length = 10_000 - Array[length - 1]|99,554,008|49780837|
|Length = 1_000_000 - Array[length - 1]|99,626,471|49813245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:20:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50073287,"opsSec":100146551.96775857},{"name":"Length = 10_000 - Array.at","samples":48345203,"opsSec":96690386.8553034},{"name":"Length = 1_000_000 - Array.at","samples":50355241,"opsSec":100710223.17472644},{"name":"Length = 100 - Array[length - 1]","samples":47098723,"opsSec":94196982.17405978},{"name":"Length = 10_000 - Array[length - 1]","samples":49780837,"opsSec":99554008.34135771},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49813245,"opsSec":99626471.0709705}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|98,507,952|49253991|
|~ (small)|98,273,241|49459560|
|Math.floor (long)|89,526,098|44779342|
|~ (long)|100,461,981|50241773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:24:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":49253991,"opsSec":98507952.44761427},{"name":"~ (small)","samples":49459560,"opsSec":98273241.91689335},{"name":"Math.floor (long)","samples":44779342,"opsSec":89526098.46973118},{"name":"~ (long)","samples":50241773,"opsSec":100461981.23295645}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,589,144|17301832|
|Object.create({})|1,919,201|987209|
|new Function with empty prototype|113,277,690|56640045|
|Empty class|81,563,428|40783726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:28:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":17301832,"opsSec":34589144.722254805},{"name":"Object.create({})","samples":987209,"opsSec":1919201.5429182162},{"name":"new Function with empty prototype","samples":56640045,"opsSec":113277690.55195872},{"name":"Empty class","samples":40783726,"opsSec":81563428.47607328}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,300,646|50156067|
|Using parseInt(x, 10) - big number (10 len)|100,112,374|50056193|
|Using + - small number (2 len)|98,410,116|49205064|
|Using + - big number (10 len)|100,789,628|50395773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50156067,"opsSec":100300646.96810533},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50056193,"opsSec":100112374.78741403},{"name":"Using + - small number (2 len)","samples":49205064,"opsSec":98410116.58442648},{"name":"Using + - big number (10 len)","samples":50395773,"opsSec":100789628.98125677}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|971,761|486575|
|Using ? operator to avoid rejection|986,947|493497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:37:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":486575,"opsSec":971761.4112490098},{"name":"Using ? operator to avoid rejection","samples":493497,"opsSec":986947.9213754467}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|94,714,831|47357626|
|Raw usage underscore usage|95,315,267|47669313|
|Manipulating private properties using #|95,072,650|47547020|
|Manipulating private properties using underscore(_)|95,904,048|47958820|
|Manipulating private properties using Symbol|94,090,885|47048932|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:43:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":47357626,"opsSec":94714831.08729064},{"name":"Raw usage underscore usage","samples":47669313,"opsSec":95315267.65924636},{"name":"Manipulating private properties using #","samples":47547020,"opsSec":95072650.93528318},{"name":"Manipulating private properties using underscore(_)","samples":47958820,"opsSec":95904048.47824965},{"name":"Manipulating private properties using Symbol","samples":47048932,"opsSec":94090885.84354231}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,517,472|3758738|
|Adding property in the object creation - small object|7,350,104|3675054|
|Adding property after the function creation - small class|231,341|116774|
|Adding property in the function creation - small class|239,066|120076|
|Adding property after the class creation - small class|233,482|116760|
|Adding property in the class creation - small class|228,564|115790|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3758738,"opsSec":7517472.5720325075},{"name":"Adding property in the object creation - small object","samples":3675054,"opsSec":7350104.35434824},{"name":"Adding property after the function creation - small class","samples":116774,"opsSec":231341.61680704475},{"name":"Adding property in the function creation - small class","samples":120076,"opsSec":239066.74217986994},{"name":"Adding property after the class creation - small class","samples":116760,"opsSec":233482.06383426822},{"name":"Adding property in the class creation - small class","samples":115790,"opsSec":228564.0254578516}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,833,899|49416963|
|Getter|53,276,577|26638295|
|Method|101,694,897|50912591|
|DefineProperty (getter)|99,443,435|49723962|
|DefineProperty (getter & enumerable=false)|53,461,367|26748367|
|DefineProperty (getter & configurable=false)|102,499,202|51249606|
|DefineProperty (getter & enumerable=false & configurable=false)|52,734,371|26375385|
|DefineProperty (writable)|102,615,135|51308002|
|DefineProperty (writable & enumerable=false)|100,922,204|50461285|
|DefineProperty (writable & enumerable=false & configurable=false)|101,371,884|50685952|
|DefineProperties (getter)|53,128,016|26564410|
|DefineProperties (getter & enumerable=false)|50,721,122|25389822|
|DefineProperties (getter & enumerable=false & configurable=false)|53,380,950|26696829|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:50:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":49416963,"opsSec":98833899.51251493},{"name":"Getter","samples":26638295,"opsSec":53276577.63983398},{"name":"Method","samples":50912591,"opsSec":101694897.4126879},{"name":"DefineProperty (getter)","samples":49723962,"opsSec":99443435.12333852},{"name":"DefineProperty (getter & enumerable=false)","samples":26748367,"opsSec":53461367.48772038},{"name":"DefineProperty (getter & configurable=false)","samples":51249606,"opsSec":102499202.77507176},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26375385,"opsSec":52734371.930641934},{"name":"DefineProperty (writable)","samples":51308002,"opsSec":102615135.67072195},{"name":"DefineProperty (writable & enumerable=false)","samples":50461285,"opsSec":100922204.8634628},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50685952,"opsSec":101371884.94208562},{"name":"DefineProperties (getter)","samples":26564410,"opsSec":53128016.38562415},{"name":"DefineProperties (getter & enumerable=false)","samples":25389822,"opsSec":50721122.07079696},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26696829,"opsSec":53380950.984903745}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|101,438,265|50754390|
|Setter|11,583,416|5791955|
|Method|99,790,230|49895132|
|DefineProperty (setter)|102,969,726|51515322|
|DefineProperty (setter & enumerable=false)|11,723,103|5862003|
|DefineProperty (setter & configurable=false)|11,605,880|5803044|
|DefineProperty (setter & enumerable=false & configurable=false)|11,674,414|5837211|
|DefineProperty (writable)|103,524,339|51945872|
|DefineProperty (writable & enumerable=false)|104,791,170|52406266|
|DefineProperty (writable & enumerable=false & configurable=false)|104,112,753|52072068|
|DefineProperties (setter)|95,294,048|47762049|
|DefineProperties (setter & enumerable=false)|11,637,206|5820209|
|DefineProperties (setter & enumerable=false & configurable=false)|11,450,799|5726183|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:58:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50754390,"opsSec":101438265.79816},{"name":"Setter","samples":5791955,"opsSec":11583416.708616048},{"name":"Method","samples":49895132,"opsSec":99790230.67006294},{"name":"DefineProperty (setter)","samples":51515322,"opsSec":102969726.90362436},{"name":"DefineProperty (setter & enumerable=false)","samples":5862003,"opsSec":11723103.250711076},{"name":"DefineProperty (setter & configurable=false)","samples":5803044,"opsSec":11605880.97429518},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5837211,"opsSec":11674414.551723517},{"name":"DefineProperty (writable)","samples":51945872,"opsSec":103524339.63845068},{"name":"DefineProperty (writable & enumerable=false)","samples":52406266,"opsSec":104791170.94854915},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52072068,"opsSec":104112753.50093772},{"name":"DefineProperties (setter)","samples":47762049,"opsSec":95294048.82731408},{"name":"DefineProperties (setter & enumerable=false)","samples":5820209,"opsSec":11637206.759343587},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5726183,"opsSec":11450799.896999687}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,379,322|1690110|
|Using replaceAll()|2,873,999|1437001|
|Using replaceAll(//g)|2,992,268|1496500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1690110,"opsSec":3379322.1546553737},{"name":"Using replaceAll()","samples":1437001,"opsSec":2873999.67780826},{"name":"Using replaceAll(//g)","samples":1496500,"opsSec":2992268.294649373}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,303,620|10153896|
|{ ...object, __proto__: null }|20,482,753|10241463|
|{ ...object, newProp: true }|811,869|407235|
|structuredClone|280,957|140481|
|JSON.parse + JSON.stringify|187,790|93896|
|loop + object.keys starting with {}|1,502,809|751565|
|loop + object.keys starting with { __proto__: null }|721,423|360927|
|loop + object.keys starting with { randomProp: true }|568,590|285002|
|object.keys + reduce(FN, {})|1,503,805|752139|
|object.keys + reduce(FN, { __proto__: null })|772,968|386551|
|object.keys + reduce(FN, { newProp: true })|553,747|276965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:09:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10153896,"opsSec":20303620.377549987},{"name":"{ ...object, __proto__: null }","samples":10241463,"opsSec":20482753.12556362},{"name":"{ ...object, newProp: true }","samples":407235,"opsSec":811869.2628745233},{"name":"structuredClone","samples":140481,"opsSec":280957.01413682714},{"name":"JSON.parse + JSON.stringify","samples":93896,"opsSec":187790.90780808017},{"name":"loop + object.keys starting with {}","samples":751565,"opsSec":1502809.5198586523},{"name":"loop + object.keys starting with { __proto__: null }","samples":360927,"opsSec":721423.0435164946},{"name":"loop + object.keys starting with { randomProp: true }","samples":285002,"opsSec":568590.1993321801},{"name":"object.keys + reduce(FN, {})","samples":752139,"opsSec":1503805.8621039223},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":386551,"opsSec":772968.4975189194},{"name":"object.keys + reduce(FN, { newProp: true })","samples":276965,"opsSec":553747.5080787325}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|262,127|131064|
|Sort using first char|1,357,367|678830|
|Sort using localeCompare|1,221,743|610944|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:12:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":131064,"opsSec":262127.70117442068},{"name":"Sort using first char","samples":678830,"opsSec":1357367.604014949},{"name":"Sort using localeCompare","samples":610944,"opsSec":1221743.2087688423}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,682|842|
|{...smallObject} - Total keys: 2|39,599,591|19808107|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,033|519|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,649|3325|
|{ ...bigObject, ...anotherBigObject }|1,097|549|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,308,663|6155239|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,447,376|14223691|
|{ ...smallObject, ...anotherSmallObject }|20,105,322|10059972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:18:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":842,"opsSec":1682.984046484531},{"name":"{...smallObject} - Total keys: 2","samples":19808107,"opsSec":39599591.121236674},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":519,"opsSec":1033.3330134447576},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3325,"opsSec":6649.086668157089},{"name":"{ ...bigObject, ...anotherBigObject }","samples":549,"opsSec":1097.358764989831},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6155239,"opsSec":12308663.826038681},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14223691,"opsSec":28447376.196735255},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10059972,"opsSec":20105322.12301153}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,004|1003|
|streams.web.Readable reading 1e3 * "some data"|1,514|758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:22:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1003,"opsSec":2004.4747951283869},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":758,"opsSec":1514.6040863482744}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,818|3910|
|streams.web.WritableStream writing 1e3 * "some data"|1,445|723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:26:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3910,"opsSec":7818.453791304417},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":723,"opsSec":1445.703015012438}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,087,748|50194935|
|Using backtick (`)|99,455,756|49727887|
|Using array.join|10,777,706|5389122|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50194935,"opsSec":100087748.32571194},{"name":"Using backtick (`)","samples":49727887,"opsSec":99455756.29687537},{"name":"Using array.join","samples":5389122,"opsSec":10777706.752873784}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,548,860|26275734|
|(short string) (true) String#slice and strict comparison|64,510,729|32256561|
|(long string) (true) String#endsWith|50,898,454|25449232|
|(long string) (true) String#slice and strict comparison|58,925,776|29470425|
|(short string) (false) String#endsWith|58,962,576|29481302|
|(short string) (false) String#slice and strict comparison|63,662,751|31831400|
|(long string) (false) String#endsWith|55,328,259|27664790|
|(long string) (false) String#slice and strict comparison|58,303,991|29157168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26275734,"opsSec":52548860.84081825},{"name":"(short string) (true) String#slice and strict comparison","samples":32256561,"opsSec":64510729.29705037},{"name":"(long string) (true) String#endsWith","samples":25449232,"opsSec":50898454.53288745},{"name":"(long string) (true) String#slice and strict comparison","samples":29470425,"opsSec":58925776.07936958},{"name":"(short string) (false) String#endsWith","samples":29481302,"opsSec":58962576.28758914},{"name":"(short string) (false) String#slice and strict comparison","samples":31831400,"opsSec":63662751.48898336},{"name":"(long string) (false) String#endsWith","samples":27664790,"opsSec":55328259.75706568},{"name":"(long string) (false) String#slice and strict comparison","samples":29157168,"opsSec":58303991.00626777}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,985,311|8010208|
|Using indexof|16,136,402|8068203|
|Using RegExp.test|13,461,170|6731682|
|Using RegExp.text with cached regex pattern|14,372,411|7186208|
|Using new RegExp.test|4,455,054|2228971|
|Using new RegExp.test with cached regex pattern|5,159,733|2581068|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:43:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8010208,"opsSec":15985311.552477052},{"name":"Using indexof","samples":8068203,"opsSec":16136402.67590105},{"name":"Using RegExp.test","samples":6731682,"opsSec":13461170.556102565},{"name":"Using RegExp.text with cached regex pattern","samples":7186208,"opsSec":14372411.65953168},{"name":"Using new RegExp.test","samples":2228971,"opsSec":4455054.768105886},{"name":"Using new RegExp.test with cached regex pattern","samples":2581068,"opsSec":5159733.318582869}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,906,400|42957493|
|(short string) (true) String#slice and strict comparison|64,339,742|32183234|
|(long string) (true) String#startsWith|65,115,019|32574432|
|(long string) (true) String#slice and strict comparison|59,078,012|29541494|
|(short string) (false) String#startsWith|100,737,779|50376956|
|(short string) (false) String#slice and strict comparison|62,754,355|31388336|
|(long string) (false) String#startsWith|90,899,954|45450010|
|(long string) (false) String#slice and strict comparison|58,358,007|29179011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42957493,"opsSec":85906400.5143326},{"name":"(short string) (true) String#slice and strict comparison","samples":32183234,"opsSec":64339742.42911032},{"name":"(long string) (true) String#startsWith","samples":32574432,"opsSec":65115019.556974985},{"name":"(long string) (true) String#slice and strict comparison","samples":29541494,"opsSec":59078012.44979148},{"name":"(short string) (false) String#startsWith","samples":50376956,"opsSec":100737779.85193451},{"name":"(short string) (false) String#slice and strict comparison","samples":31388336,"opsSec":62754355.17070548},{"name":"(long string) (false) String#startsWith","samples":45450010,"opsSec":90899954.0066334},{"name":"(long string) (false) String#slice and strict comparison","samples":29179011,"opsSec":58358007.877362095}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|97,022,753|48511385|
|Using this|100,115,614|50117649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:51:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":48511385,"opsSec":97022753.5061319},{"name":"Using this","samples":50117649,"opsSec":100115614.18832488}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,659,683|5329843|
|Date.now()|20,046,504|10130233|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:56:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5329843,"opsSec":10659683.292440444},{"name":"Date.now()","samples":10130233,"opsSec":20046504.76331399}]}-->

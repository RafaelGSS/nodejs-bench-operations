## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,518,344|37760908|
|Using dot notation|65,898,271|32950559|
|Using define property (writable)|4,409,409|2204710|
|Using define property initialized (writable)|5,890,074|2945568|
|Using define property (getter)|2,215,812|1108963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37760908,"opsSec":75518344.11964744},{"name":"Using dot notation","samples":32950559,"opsSec":65898271.721847795},{"name":"Using define property (writable)","samples":2204710,"opsSec":4409409.946545322},{"name":"Using define property initialized (writable)","samples":2945568,"opsSec":5890074.149212528},{"name":"Using define property (getter)","samples":1108963,"opsSec":2215812.947593664}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.004ms
array.push|100|0.119ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.274ms
new Array(length)|10,000|0.3ms
array.push|1,000,000|38.049ms
new Array(length)|1,000,000|9.295ms
array.push|100,000,000|1,955.267ms
new Array(length)|100,000,000|4,863.588ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.232ms
new Array(length)|10,000|0.168ms
array.push|1,000,000|24.928ms
new Array(length)|1,000,000|5.159ms
array.push|100,000,000|2,702.877ms
new Array(length)|100,000,000|4,482.771ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|238|120|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:12:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":120,"opsSec":238.56348899675208},{"name":"Array.from","samples":11,"opsSec":21.50217119639713}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,361|2194|
|new Blob (1024)|538|273|
|text (128)|4,582|2297|
|text (1024)|575|289|
|arrayBuffer (128)|4,575|2297|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|56,456|29234|
|slice (0, 512)|24,793|12399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2194,"opsSec":4361.873381674646},{"name":"new Blob (1024)","samples":273,"opsSec":538.7344451800592},{"name":"text (128)","samples":2297,"opsSec":4582.218355958583},{"name":"text (1024)","samples":289,"opsSec":575.2387321351401},{"name":"arrayBuffer (128)","samples":2297,"opsSec":4575.103213292769},{"name":"arrayBuffer (1024)","samples":284,"opsSec":567.276679121093},{"name":"slice (0, 64)","samples":29234,"opsSec":56456.478044055606},{"name":"slice (0, 512)","samples":12399,"opsSec":24793.415598282216}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.81 ms|1|
|Gzip|135.60 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:18:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134807963},{"name":"Gzip","samples":1,"totalTime":0.135601805}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,790|3396|
|crypto.verify('RSA-SHA256')|6,821|3411|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:27:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3396,"opsSec":6790.273885217282},{"name":"crypto.verify('RSA-SHA256')","samples":3411,"opsSec":6821.292645595237}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,475,261|737772|
|fromUnixToISOString(new Date())|2,095,701|1047921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":737772,"opsSec":1475261.5877237387},{"name":"fromUnixToISOString(new Date())","samples":1047921,"opsSec":2095701.571229115}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,144|9074|
|Intl.DateTimeFormat().format(new Date())|17,402|8702|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,592|9297|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,448|8941|
|Reusing Intl.DateTimeFormat()|473,779|237004|
|Date.toLocaleDateString()|1,013,663|506848|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,930|10685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:34:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9074,"opsSec":18144.421412053744},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8702,"opsSec":17402.942318777634},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9297,"opsSec":18592.554428893152},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8941,"opsSec":17448.106489956397},{"name":"Reusing Intl.DateTimeFormat()","samples":237004,"opsSec":473779.61074840184},{"name":"Date.toLocaleDateString()","samples":506848,"opsSec":1013663.3600398068},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10685,"opsSec":20930.30633843172}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,071,184|535708|
|Using brackets {}|886,667|443334|
|Using '' + |1,034,394|517198|
|Using date.toString()|1,158,234|579278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":535708,"opsSec":1071184.8790081353},{"name":"Using brackets {}","samples":443334,"opsSec":886667.4963728621},{"name":"Using '' + ","samples":517198,"opsSec":1034394.4215141129},{"name":"Using date.toString()","samples":579278,"opsSec":1158234.1336836542}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,632,094|1816414|
|Using delete property (proto: null)|16,524,702|8262354|
|Using delete property (cached proto: null)|3,682,737|1841372|
|Using undefined assignment|83,310,958|41658614|
|Using undefined assignment (proto: null)|16,808,915|8404460|
|Using undefined property (cached proto: null)|82,693,101|41351191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1816414,"opsSec":3632094.411363359},{"name":"Using delete property (proto: null)","samples":8262354,"opsSec":16524702.183304831},{"name":"Using delete property (cached proto: null)","samples":1841372,"opsSec":3682737.5036510434},{"name":"Using undefined assignment","samples":41658614,"opsSec":83310958.51712775},{"name":"Using undefined assignment (proto: null)","samples":8404460,"opsSec":16808915.663299758},{"name":"Using undefined property (cached proto: null)","samples":41351191,"opsSec":82693101.51860276}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|316,240|158122|
|NodeError|303,501|151751|
|NodeError Range|270,976|135489|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:47:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":158122,"opsSec":316240.89957422053},{"name":"NodeError","samples":151751,"opsSec":303501.1034577404},{"name":"NodeError Range","samples":135489,"opsSec":270976.537810602}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,415,572|36766852|
|using Array.includes (first item)|86,825,660|43416039|
|Using raw comparison|100,661,656|50343249|
|Using raw comparison (first item)|100,248,247|50127651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:49:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":36766852,"opsSec":73415572.61724418},{"name":"using Array.includes (first item)","samples":43416039,"opsSec":86825660.889055},{"name":"Using raw comparison","samples":50343249,"opsSec":100661656.51508188},{"name":"Using raw comparison (first item)","samples":50127651,"opsSec":100248247.73130363}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,305,859|21156062|
|Using Object.getOwnPropertyNames()|42,584,638|21314432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:53:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":21156062,"opsSec":42305859.43294688},{"name":"Using Object.getOwnPropertyNames()","samples":21314432,"opsSec":42584638.234976724}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|98,055,344|49091516|
|Length = 10_000 - Array.at|100,098,288|50049322|
|Length = 1_000_000 - Array.at|99,959,714|49987640|
|Length = 100 - Array[length - 1]|96,513,682|48257668|
|Length = 10_000 - Array[length - 1]|99,452,303|49728015|
|Length = 1_000_000 - Array[length - 1]|96,616,127|48308073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49091516,"opsSec":98055344.72232397},{"name":"Length = 10_000 - Array.at","samples":50049322,"opsSec":100098288.85127115},{"name":"Length = 1_000_000 - Array.at","samples":49987640,"opsSec":99959714.67306995},{"name":"Length = 100 - Array[length - 1]","samples":48257668,"opsSec":96513682.91363905},{"name":"Length = 10_000 - Array[length - 1]","samples":49728015,"opsSec":99452303.32328987},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48308073,"opsSec":96616127.64293575}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,782,643|44895293|
|~ (small)|90,267,281|45217858|
|Math.floor (long)|88,367,555|44183921|
|~ (long)|90,132,634|45066323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":44895293,"opsSec":89782643.82732704},{"name":"~ (small)","samples":45217858,"opsSec":90267281.58539118},{"name":"Math.floor (long)","samples":44183921,"opsSec":88367555.86585411},{"name":"~ (long)","samples":45066323,"opsSec":90132634.64328803}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,807,526|15403888|
|Object.create({})|1,914,161|957134|
|new Function with empty prototype|77,352,405|38698626|
|Empty class|78,691,818|39347942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:05:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15403888,"opsSec":30807526.82872301},{"name":"Object.create({})","samples":957134,"opsSec":1914161.3046488788},{"name":"new Function with empty prototype","samples":38698626,"opsSec":77352405.55053878},{"name":"Empty class","samples":39347942,"opsSec":78691818.46589078}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|99,837,523|49920110|
|Using parseInt(x, 10) - big number (10 len)|99,855,586|49968427|
|Using + - small number (2 len)|98,691,263|49490190|
|Using + - big number (10 len)|99,643,937|49822691|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49920110,"opsSec":99837523.98750223},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49968427,"opsSec":99855586.13180429},{"name":"Using + - small number (2 len)","samples":49490190,"opsSec":98691263.7454751},{"name":"Using + - big number (10 len)","samples":49822691,"opsSec":99643937.7607661}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|850,239|433931|
|Using ? operator to avoid rejection|961,499|484632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:15:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":433931,"opsSec":850239.2892085678},{"name":"Using ? operator to avoid rejection","samples":484632,"opsSec":961499.3351986563}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|101,405,541|50703364|
|Raw usage underscore usage|97,895,012|48949377|
|Manipulating private properties using #|98,493,428|49253635|
|Manipulating private properties using underscore(_)|100,046,827|50037446|
|Manipulating private properties using Symbol|102,501,470|51252439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:16:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":50703364,"opsSec":101405541.55516382},{"name":"Raw usage underscore usage","samples":48949377,"opsSec":97895012.25684153},{"name":"Manipulating private properties using #","samples":49253635,"opsSec":98493428.91542138},{"name":"Manipulating private properties using underscore(_)","samples":50037446,"opsSec":100046827.0641656},{"name":"Manipulating private properties using Symbol","samples":51252439,"opsSec":102501470.64611278}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,550,324|3775529|
|Adding property in the object creation - small object|7,596,700|3799129|
|Adding property after the function creation - small class|240,195|120098|
|Adding property in the function creation - small class|248,951|124942|
|Adding property after the class creation - small class|235,592|119657|
|Adding property in the class creation - small class|231,936|115973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:19:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3775529,"opsSec":7550324.712463926},{"name":"Adding property in the object creation - small object","samples":3799129,"opsSec":7596700.752312783},{"name":"Adding property after the function creation - small class","samples":120098,"opsSec":240195.8020786591},{"name":"Adding property in the function creation - small class","samples":124942,"opsSec":248951.63628983276},{"name":"Adding property after the class creation - small class","samples":119657,"opsSec":235592.73036640696},{"name":"Adding property in the class creation - small class","samples":115973,"opsSec":231936.40618249465}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,368,807|49213548|
|Getter|51,151,204|25575649|
|Method|100,621,882|50310948|
|DefineProperty (getter)|100,919,671|50461735|
|DefineProperty (getter & enumerable=false)|52,970,271|26504609|
|DefineProperty (getter & configurable=false)|102,779,682|51426362|
|DefineProperty (getter & enumerable=false & configurable=false)|52,528,193|26264205|
|DefineProperty (writable)|101,135,446|50567775|
|DefineProperty (writable & enumerable=false)|102,703,678|51351844|
|DefineProperty (writable & enumerable=false & configurable=false)|102,986,020|51493513|
|DefineProperties (getter)|50,083,257|25041632|
|DefineProperties (getter & enumerable=false)|54,035,425|27041021|
|DefineProperties (getter & enumerable=false & configurable=false)|53,857,793|26928973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:24:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":49213548,"opsSec":98368807.36645739},{"name":"Getter","samples":25575649,"opsSec":51151204.49559818},{"name":"Method","samples":50310948,"opsSec":100621882.31542401},{"name":"DefineProperty (getter)","samples":50461735,"opsSec":100919671.98906438},{"name":"DefineProperty (getter & enumerable=false)","samples":26504609,"opsSec":52970271.39607494},{"name":"DefineProperty (getter & configurable=false)","samples":51426362,"opsSec":102779682.59077005},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26264205,"opsSec":52528193.37373053},{"name":"DefineProperty (writable)","samples":50567775,"opsSec":101135446.63957354},{"name":"DefineProperty (writable & enumerable=false)","samples":51351844,"opsSec":102703678.1404469},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51493513,"opsSec":102986020.85643645},{"name":"DefineProperties (getter)","samples":25041632,"opsSec":50083257.88984253},{"name":"DefineProperties (getter & enumerable=false)","samples":27041021,"opsSec":54035425.85425723},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26928973,"opsSec":53857793.905590005}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,475,075|51260889|
|Setter|11,524,527|5762266|
|Method|101,169,983|50599611|
|DefineProperty (setter)|102,645,019|51322536|
|DefineProperty (setter & enumerable=false)|11,543,790|5772112|
|DefineProperty (setter & configurable=false)|11,541,415|5770752|
|DefineProperty (setter & enumerable=false & configurable=false)|11,963,494|5982276|
|DefineProperty (writable)|101,798,658|50901308|
|DefineProperty (writable & enumerable=false)|104,267,958|52134887|
|DefineProperty (writable & enumerable=false & configurable=false)|104,400,673|52200357|
|DefineProperties (setter)|95,236,229|47624606|
|DefineProperties (setter & enumerable=false)|11,660,307|5830820|
|DefineProperties (setter & enumerable=false & configurable=false)|11,579,191|5789921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":51260889,"opsSec":102475075.18943256},{"name":"Setter","samples":5762266,"opsSec":11524527.98946426},{"name":"Method","samples":50599611,"opsSec":101169983.67237872},{"name":"DefineProperty (setter)","samples":51322536,"opsSec":102645019.65103997},{"name":"DefineProperty (setter & enumerable=false)","samples":5772112,"opsSec":11543790.50757886},{"name":"DefineProperty (setter & configurable=false)","samples":5770752,"opsSec":11541415.938996386},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5982276,"opsSec":11963494.307468276},{"name":"DefineProperty (writable)","samples":50901308,"opsSec":101798658.27176371},{"name":"DefineProperty (writable & enumerable=false)","samples":52134887,"opsSec":104267958.48630683},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52200357,"opsSec":104400673.49253869},{"name":"DefineProperties (setter)","samples":47624606,"opsSec":95236229.01631558},{"name":"DefineProperties (setter & enumerable=false)","samples":5830820,"opsSec":11660307.623289118},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5789921,"opsSec":11579191.527336761}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,265,541|1633547|
|Using replaceAll()|2,957,102|1478552|
|Using replaceAll(//g)|2,992,583|1496752|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:37:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1633547,"opsSec":3265541.9858603803},{"name":"Using replaceAll()","samples":1478552,"opsSec":2957102.237567066},{"name":"Using replaceAll(//g)","samples":1496752,"opsSec":2992583.385587925}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,123,983|10152285|
|{ ...object, __proto__: null }|20,129,240|10069606|
|{ ...object, newProp: true }|818,820|409618|
|structuredClone|282,023|141014|
|JSON.parse + JSON.stringify|186,412|93207|
|loop + object.keys starting with {}|1,502,487|751404|
|loop + object.keys starting with { __proto__: null }|733,161|366800|
|loop + object.keys starting with { randomProp: true }|524,586|262361|
|object.keys + reduce(FN, {})|1,527,605|764655|
|object.keys + reduce(FN, { __proto__: null })|753,117|376711|
|object.keys + reduce(FN, { newProp: true })|505,001|252611|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:38:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10152285,"opsSec":20123983.92864312},{"name":"{ ...object, __proto__: null }","samples":10069606,"opsSec":20129240.85976467},{"name":"{ ...object, newProp: true }","samples":409618,"opsSec":818820.2440210984},{"name":"structuredClone","samples":141014,"opsSec":282023.7143676364},{"name":"JSON.parse + JSON.stringify","samples":93207,"opsSec":186412.9598156842},{"name":"loop + object.keys starting with {}","samples":751404,"opsSec":1502487.1528834247},{"name":"loop + object.keys starting with { __proto__: null }","samples":366800,"opsSec":733161.7012717456},{"name":"loop + object.keys starting with { randomProp: true }","samples":262361,"opsSec":524586.6849629605},{"name":"object.keys + reduce(FN, {})","samples":764655,"opsSec":1527605.433697652},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":376711,"opsSec":753117.0041818805},{"name":"object.keys + reduce(FN, { newProp: true })","samples":252611,"opsSec":505001.56883520965}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|253,196|126603|
|Sort using first char|1,333,372|666824|
|Sort using localeCompare|1,215,255|607758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:44:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":126603,"opsSec":253196.53095613534},{"name":"Sort using first char","samples":666824,"opsSec":1333372.1786311283},{"name":"Sort using localeCompare","samples":607758,"opsSec":1215255.5828811445}]}-->

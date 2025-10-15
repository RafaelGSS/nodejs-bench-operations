## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,851,271|39031866|
|Using dot notation|78,379,137|39189578|
|Using define property (writable)|4,964,864|2482434|
|Using define property initialized (writable)|6,984,363|3492528|
|Using define property (getter)|2,311,256|1155808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:50:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":39031866,"opsSec":77851271.36507098},{"name":"Using dot notation","samples":39189578,"opsSec":78379137.50252356},{"name":"Using define property (writable)","samples":2482434,"opsSec":4964864.604032611},{"name":"Using define property initialized (writable)","samples":3492528,"opsSec":6984363.444489571},{"name":"Using define property (getter)","samples":1155808,"opsSec":2311256.830688511}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.008ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.457ms
new Array(length)|10,000|0.253ms
array.push|1,000,000|28.209ms
new Array(length)|1,000,000|7.835ms
array.push|10,000,000|238.906ms
new Array(length)|10,000,000|68.185ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.383ms
new Array(length)|10,000|0.13ms
array.push|1,000,000|18.097ms
new Array(length)|1,000,000|11.014ms
array.push|10,000,000|360.993ms
new Array(length)|10,000,000|51.209ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|152|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:56:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":152,"opsSec":303.8404952859137},{"name":"Array.from","samples":12,"opsSec":23.77727880013384}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,998|2500|
|new Blob (1024)|672|343|
|text (128)|4,705|2358|
|text (1024)|581|291|
|arrayBuffer (128)|4,692|2347|
|arrayBuffer (1024)|580|292|
|slice (0, 64)|153,435|85077|
|slice (0, 512)|31,069|15539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:02:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2500,"opsSec":4998.84487692353},{"name":"new Blob (1024)","samples":343,"opsSec":672.9868833482992},{"name":"text (128)","samples":2358,"opsSec":4705.883517496495},{"name":"text (1024)","samples":291,"opsSec":581.6219992097376},{"name":"arrayBuffer (128)","samples":2347,"opsSec":4692.677443945264},{"name":"arrayBuffer (1024)","samples":292,"opsSec":580.9798691072251},{"name":"slice (0, 64)","samples":85077,"opsSec":153435.5149983608},{"name":"slice (0, 512)","samples":15539,"opsSec":31069.20902944354}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.97 ms|1|
|Gzip|136.11 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:10:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133966635},{"name":"Gzip","samples":1,"totalTime":0.136114862}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,444|10723|
|crypto.verify('RSA-SHA256')|21,578|10804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:14:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10723,"opsSec":21444.153872793093},{"name":"crypto.verify('RSA-SHA256')","samples":10804,"opsSec":21578.621440581774}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,565,729|782865|
|fromUnixToISOString(new Date())|2,996,484|1498363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":782865,"opsSec":1565729.8121124227},{"name":"fromUnixToISOString(new Date())","samples":1498363,"opsSec":2996484.507320586}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,109|11055|
|Intl.DateTimeFormat().format(new Date())|20,827|10414|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,044|10523|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,934|9968|
|Reusing Intl.DateTimeFormat()|444,691|222348|
|Date.toLocaleDateString()|1,048,253|524132|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,403|13203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:22:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11055,"opsSec":22109.238380956253},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10414,"opsSec":20827.057617296934},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10523,"opsSec":21044.680624792913},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9968,"opsSec":19934.386112100365},{"name":"Reusing Intl.DateTimeFormat()","samples":222348,"opsSec":444691.9559713524},{"name":"Date.toLocaleDateString()","samples":524132,"opsSec":1048253.1484834068},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13203,"opsSec":26403.834146292647}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,109,727|554888|
|Using brackets {}|1,115,874|558044|
|Using '' + |1,118,676|559917|
|Using date.toString()|1,262,021|631012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:26:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":554888,"opsSec":1109727.8489086358},{"name":"Using brackets {}","samples":558044,"opsSec":1115874.6648498247},{"name":"Using '' + ","samples":559917,"opsSec":1118676.4338985535},{"name":"Using date.toString()","samples":631012,"opsSec":1262021.4633368587}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,211,499|2105821|
|Using delete property (proto: null)|18,246,343|9125807|
|Using delete property (cached proto: null)|4,305,800|2153307|
|Using undefined assignment|79,334,063|39673481|
|Using undefined assignment (proto: null)|20,417,028|10215241|
|Using undefined property (cached proto: null)|78,733,874|39370890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:31:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2105821,"opsSec":4211499.221753384},{"name":"Using delete property (proto: null)","samples":9125807,"opsSec":18246343.79904246},{"name":"Using delete property (cached proto: null)","samples":2153307,"opsSec":4305800.918389377},{"name":"Using undefined assignment","samples":39673481,"opsSec":79334063.39196935},{"name":"Using undefined assignment (proto: null)","samples":10215241,"opsSec":20417028.11765376},{"name":"Using undefined property (cached proto: null)","samples":39370890,"opsSec":78733874.64658223}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|355,748|177898|
|NodeError|325,767|162891|
|NodeError Range|311,059|155565|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:36:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":177898,"opsSec":355748.5445671489},{"name":"NodeError","samples":162891,"opsSec":325767.6518895402},{"name":"NodeError Range","samples":155565,"opsSec":311059.2825384706}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,517,543|34263713|
|using Array.includes (first item)|73,639,854|36819936|
|Using raw comparison|99,095,517|49547868|
|Using raw comparison (first item)|96,268,417|48145794|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34263713,"opsSec":68517543.30362406},{"name":"using Array.includes (first item)","samples":36819936,"opsSec":73639854.91555366},{"name":"Using raw comparison","samples":49547868,"opsSec":99095517.39528863},{"name":"Using raw comparison (first item)","samples":48145794,"opsSec":96268417.15467504}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,420,195|22211728|
|Using Object.getOwnPropertyNames()|47,639,460|23826904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:43:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":22211728,"opsSec":44420195.37997832},{"name":"Using Object.getOwnPropertyNames()","samples":23826904,"opsSec":47639460.13795349}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|91,613,130|45806576|
|Length = 10_000 - Array.at|90,904,931|45452473|
|Length = 1_000_000 - Array.at|91,665,790|45832921|
|Length = 100 - Array[length - 1]|89,528,530|44764291|
|Length = 10_000 - Array[length - 1]|90,686,142|45383290|
|Length = 1_000_000 - Array[length - 1]|90,670,134|45335179|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:49:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45806576,"opsSec":91613130.56252745},{"name":"Length = 10_000 - Array.at","samples":45452473,"opsSec":90904931.6370208},{"name":"Length = 1_000_000 - Array.at","samples":45832921,"opsSec":91665790.8504887},{"name":"Length = 100 - Array[length - 1]","samples":44764291,"opsSec":89528530.2525095},{"name":"Length = 10_000 - Array[length - 1]","samples":45383290,"opsSec":90686142.47985408},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45335179,"opsSec":90670134.95146802}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,274,994|44650992|
|~ (small)|95,382,162|47691099|
|Math.floor (long)|95,054,380|47535973|
|~ (long)|95,733,572|47866795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:53:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":44650992,"opsSec":89274994.38369791},{"name":"~ (small)","samples":47691099,"opsSec":95382162.89936405},{"name":"Math.floor (long)","samples":47535973,"opsSec":95054380.71087968},{"name":"~ (long)","samples":47866795,"opsSec":95733572.00208846}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,792,862|18401246|
|Object.create({})|2,056,363|1028183|
|new Function with empty prototype|67,269,458|33638643|
|Empty class|77,857,243|38940124|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:56:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18401246,"opsSec":36792862.277741775},{"name":"Object.create({})","samples":1028183,"opsSec":2056363.5118001509},{"name":"new Function with empty prototype","samples":33638643,"opsSec":67269458.52580594},{"name":"Empty class","samples":38940124,"opsSec":77857243.52025707}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,619,904|47868658|
|Using parseInt(x, 10) - big number (10 len)|95,955,693|47977853|
|Using + - small number (2 len)|94,720,125|47404866|
|Using + - big number (10 len)|92,308,080|46154139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:01:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47868658,"opsSec":95619904.51049137},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47977853,"opsSec":95955693.52575983},{"name":"Using + - small number (2 len)","samples":47404866,"opsSec":94720125.6245177},{"name":"Using + - big number (10 len)","samples":46154139,"opsSec":92308080.27609205}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,062,706|531364|
|Using ? operator to avoid rejection|1,110,436|557069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:02:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":531364,"opsSec":1062706.2187733399},{"name":"Using ? operator to avoid rejection","samples":557069,"opsSec":1110436.8274400698}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|93,860,771|46931176|
|Raw usage underscore usage|97,058,813|48598604|
|Manipulating private properties using #|97,606,408|48803233|
|Manipulating private properties using underscore(_)|95,906,007|47953012|
|Manipulating private properties using Symbol|97,889,240|48944631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:09:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":46931176,"opsSec":93860771.57232825},{"name":"Raw usage underscore usage","samples":48598604,"opsSec":97058813.39092688},{"name":"Manipulating private properties using #","samples":48803233,"opsSec":97606408.99785715},{"name":"Manipulating private properties using underscore(_)","samples":47953012,"opsSec":95906007.12054275},{"name":"Manipulating private properties using Symbol","samples":48944631,"opsSec":97889240.26858866}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,348,498|3674290|
|Adding property in the object creation - small object|7,394,150|3697077|
|Adding property after the function creation - small class|275,386|137695|
|Adding property in the function creation - small class|281,506|140755|
|Adding property after the class creation - small class|272,497|139928|
|Adding property in the class creation - small class|278,505|139253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:13:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3674290,"opsSec":7348498.490454744},{"name":"Adding property in the object creation - small object","samples":3697077,"opsSec":7394150.598690724},{"name":"Adding property after the function creation - small class","samples":137695,"opsSec":275386.26631300134},{"name":"Adding property in the function creation - small class","samples":140755,"opsSec":281506.06060418795},{"name":"Adding property after the class creation - small class","samples":139928,"opsSec":272497.98754059},{"name":"Adding property in the class creation - small class","samples":139253,"opsSec":278505.44131808466}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|86,609,551|43572828|
|Getter|52,407,084|26209954|
|Method|95,371,576|47686644|
|DefineProperty (getter)|95,104,989|47554359|
|DefineProperty (getter & enumerable=false)|53,396,123|26698073|
|DefineProperty (getter & configurable=false)|94,642,376|47321193|
|DefineProperty (getter & enumerable=false & configurable=false)|53,902,536|26953099|
|DefineProperty (writable)|96,042,673|48021437|
|DefineProperty (writable & enumerable=false)|93,318,254|46811880|
|DefineProperty (writable & enumerable=false & configurable=false)|94,907,783|47459619|
|DefineProperties (getter)|53,483,654|26742312|
|DefineProperties (getter & enumerable=false)|53,736,811|26871334|
|DefineProperties (getter & enumerable=false & configurable=false)|53,699,674|26862936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:15:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":43572828,"opsSec":86609551.02048102},{"name":"Getter","samples":26209954,"opsSec":52407084.824856706},{"name":"Method","samples":47686644,"opsSec":95371576.2709491},{"name":"DefineProperty (getter)","samples":47554359,"opsSec":95104989.5039915},{"name":"DefineProperty (getter & enumerable=false)","samples":26698073,"opsSec":53396123.3600437},{"name":"DefineProperty (getter & configurable=false)","samples":47321193,"opsSec":94642376.15719289},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26953099,"opsSec":53902536.1851068},{"name":"DefineProperty (writable)","samples":48021437,"opsSec":96042673.65498275},{"name":"DefineProperty (writable & enumerable=false)","samples":46811880,"opsSec":93318254.88379794},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47459619,"opsSec":94907783.3898071},{"name":"DefineProperties (getter)","samples":26742312,"opsSec":53483654.23438143},{"name":"DefineProperties (getter & enumerable=false)","samples":26871334,"opsSec":53736811.117482685},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26862936,"opsSec":53699674.50639271}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|90,514,917|45257483|
|Setter|10,491,199|5245603|
|Method|90,010,790|45005397|
|DefineProperty (setter)|90,484,057|45242860|
|DefineProperty (setter & enumerable=false)|10,533,931|5267045|
|DefineProperty (setter & configurable=false)|10,614,540|5307479|
|DefineProperty (setter & enumerable=false & configurable=false)|10,620,809|5310654|
|DefineProperty (writable)|90,478,471|45257623|
|DefineProperty (writable & enumerable=false)|89,407,968|44704164|
|DefineProperty (writable & enumerable=false & configurable=false)|90,798,983|45400091|
|DefineProperties (setter)|90,821,200|45415624|
|DefineProperties (setter & enumerable=false)|10,478,683|5239345|
|DefineProperties (setter & enumerable=false & configurable=false)|10,489,036|5244521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:20:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":45257483,"opsSec":90514917.48400423},{"name":"Setter","samples":5245603,"opsSec":10491199.390544385},{"name":"Method","samples":45005397,"opsSec":90010790.93963312},{"name":"DefineProperty (setter)","samples":45242860,"opsSec":90484057.80785806},{"name":"DefineProperty (setter & enumerable=false)","samples":5267045,"opsSec":10533931.59073674},{"name":"DefineProperty (setter & configurable=false)","samples":5307479,"opsSec":10614540.105556043},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5310654,"opsSec":10620809.119354045},{"name":"DefineProperty (writable)","samples":45257623,"opsSec":90478471.56810197},{"name":"DefineProperty (writable & enumerable=false)","samples":44704164,"opsSec":89407968.22233586},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45400091,"opsSec":90798983.27182284},{"name":"DefineProperties (setter)","samples":45415624,"opsSec":90821200.81383878},{"name":"DefineProperties (setter & enumerable=false)","samples":5239345,"opsSec":10478683.503216228},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5244521,"opsSec":10489036.021249468}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,997,308|1998993|
|Using replaceAll()|3,107,923|1553963|
|Using replaceAll(//g)|3,454,443|1727604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:27:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1998993,"opsSec":3997308.751967389},{"name":"Using replaceAll()","samples":1553963,"opsSec":3107923.961201881},{"name":"Using replaceAll(//g)","samples":1727604,"opsSec":3454443.8148481664}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,706,208|12353976|
|{ ...object, __proto__: null }|2,359,645|1180748|
|{ ...object, newProp: true }|23,531,552|11765780|
|structuredClone|291,433|145717|
|JSON.parse + JSON.stringify|312,694|156348|
|loop + object.keys starting with {}|1,730,555|865383|
|loop + object.keys starting with { __proto__: null }|933,491|466822|
|loop + object.keys starting with { randomProp: true }|684,452|342305|
|object.keys + reduce(FN, {})|1,780,388|890195|
|object.keys + reduce(FN, { __proto__: null })|945,635|472890|
|object.keys + reduce(FN, { newProp: true })|705,259|352692|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:31:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12353976,"opsSec":24706208.779320948},{"name":"{ ...object, __proto__: null }","samples":1180748,"opsSec":2359645.5470848116},{"name":"{ ...object, newProp: true }","samples":11765780,"opsSec":23531552.98759721},{"name":"structuredClone","samples":145717,"opsSec":291433.8105680231},{"name":"JSON.parse + JSON.stringify","samples":156348,"opsSec":312694.0312783791},{"name":"loop + object.keys starting with {}","samples":865383,"opsSec":1730555.142239249},{"name":"loop + object.keys starting with { __proto__: null }","samples":466822,"opsSec":933491.4581608218},{"name":"loop + object.keys starting with { randomProp: true }","samples":342305,"opsSec":684452.3583017406},{"name":"object.keys + reduce(FN, {})","samples":890195,"opsSec":1780388.5507637195},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":472890,"opsSec":945635.0833147522},{"name":"object.keys + reduce(FN, { newProp: true })","samples":352692,"opsSec":705259.3806674362}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|323,714|161862|
|Sort using first char|1,348,933|674530|
|Sort using localeCompare|1,241,749|620964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:36:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":161862,"opsSec":323714.058741256},{"name":"Sort using first char","samples":674530,"opsSec":1348933.0815842198},{"name":"Sort using localeCompare","samples":620964,"opsSec":1241749.4761613111}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,058|1530|
|{...smallObject} - Total keys: 2|40,841,740|20420981|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,094|548|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,189|3095|
|{ ...bigObject, ...anotherBigObject }|1,518|760|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,489,273|6244644|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,859,209|13929840|
|{ ...smallObject, ...anotherSmallObject }|20,392,377|10198596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:40:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1530,"opsSec":3058.957213721671},{"name":"{...smallObject} - Total keys: 2","samples":20420981,"opsSec":40841740.22935055},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":548,"opsSec":1094.007521297716},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3095,"opsSec":6189.511412348133},{"name":"{ ...bigObject, ...anotherBigObject }","samples":760,"opsSec":1518.703573881192},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6244644,"opsSec":12489273.937077548},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13929840,"opsSec":27859209.68082217},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10198596,"opsSec":20392377.44125563}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,054|1028|
|streams.web.Readable reading 1e3 * "some data"|1,755|879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:46:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1028,"opsSec":2054.411574167908},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":879,"opsSec":1755.991191732429}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,066|5034|
|streams.web.WritableStream writing 1e3 * "some data"|1,662|892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:50:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5034,"opsSec":10066.227136076795},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":892,"opsSec":1662.3018353815598}]}-->

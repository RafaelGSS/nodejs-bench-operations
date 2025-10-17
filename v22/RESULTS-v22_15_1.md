## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,049,553|52613644|
|Using dot notation|71,338,128|35670411|
|Using define property (writable)|4,935,541|2468808|
|Using define property initialized (writable)|7,022,392|3512087|
|Using define property (getter)|2,444,314|1222922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:39:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":52613644,"opsSec":105049553.81949636},{"name":"Using dot notation","samples":35670411,"opsSec":71338128.55761819},{"name":"Using define property (writable)","samples":2468808,"opsSec":4935541.276127002},{"name":"Using define property initialized (writable)","samples":3512087,"opsSec":7022392.096095184},{"name":"Using define property (getter)","samples":1222922,"opsSec":2444314.880608359}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.288ms
new Array(length)|10,000|0.15ms
array.push|1,000,000|28.508ms
new Array(length)|1,000,000|6.859ms
array.push|10,000,000|241.475ms
new Array(length)|10,000,000|63.135ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.324ms
new Array(length)|10,000|0.184ms
array.push|1,000,000|22.851ms
new Array(length)|1,000,000|12.055ms
array.push|10,000,000|217.352ms
new Array(length)|10,000,000|66.234ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|318|161|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:46:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":161,"opsSec":318.30956348430186},{"name":"Array.from","samples":13,"opsSec":24.4337463771074}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,555|2278|
|new Blob (1024)|597|304|
|text (128)|4,373|2187|
|text (1024)|548|275|
|arrayBuffer (128)|4,396|2200|
|arrayBuffer (1024)|551|277|
|slice (0, 64)|149,529|82129|
|slice (0, 512)|19,938|15677|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2278,"opsSec":4555.741908109421},{"name":"new Blob (1024)","samples":304,"opsSec":597.0028106244263},{"name":"text (128)","samples":2187,"opsSec":4373.2875914513525},{"name":"text (1024)","samples":275,"opsSec":548.7530771628121},{"name":"arrayBuffer (128)","samples":2200,"opsSec":4396.816898025772},{"name":"arrayBuffer (1024)","samples":277,"opsSec":551.9109277289755},{"name":"slice (0, 64)","samples":82129,"opsSec":149529.1265374844},{"name":"slice (0, 512)","samples":15677,"opsSec":19938.523187837935}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.76 ms|1|
|Gzip|133.22 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:53:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132762742},{"name":"Gzip","samples":1,"totalTime":0.133219204}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,635|3320|
|crypto.verify('RSA-SHA256')|6,853|3428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:59:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3320,"opsSec":6635.581591827776},{"name":"crypto.verify('RSA-SHA256')","samples":3428,"opsSec":6853.9992901911955}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,448,390|724196|
|fromUnixToISOString(new Date())|2,163,837|1082046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:03:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":724196,"opsSec":1448390.603751458},{"name":"fromUnixToISOString(new Date())","samples":1082046,"opsSec":2163837.995713035}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,323|9666|
|Intl.DateTimeFormat().format(new Date())|19,143|9572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,221|9611|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,263|9134|
|Reusing Intl.DateTimeFormat()|537,850|268928|
|Date.toLocaleDateString()|937,813|468907|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,179|11590|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:06:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9666,"opsSec":19323.768345217693},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9572,"opsSec":19143.366852284726},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9611,"opsSec":19221.023226041696},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9134,"opsSec":18263.500969171255},{"name":"Reusing Intl.DateTimeFormat()","samples":268928,"opsSec":537850.2611377137},{"name":"Date.toLocaleDateString()","samples":468907,"opsSec":937813.2853862765},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11590,"opsSec":23179.43632246751}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|921,612|460854|
|Using brackets {}|925,479|462773|
|Using '' + |912,946|456474|
|Using date.toString()|1,021,513|510757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:08:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":460854,"opsSec":921612.4803960818},{"name":"Using brackets {}","samples":462773,"opsSec":925479.195209773},{"name":"Using '' + ","samples":456474,"opsSec":912946.8186468167},{"name":"Using date.toString()","samples":510757,"opsSec":1021513.526017724}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,099,565|2050117|
|Using delete property (proto: null)|17,963,982|8985724|
|Using delete property (cached proto: null)|4,133,722|2066863|
|Using undefined assignment|78,840,218|39421649|
|Using undefined assignment (proto: null)|19,719,675|9861383|
|Using undefined property (cached proto: null)|73,365,492|36682753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:11:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2050117,"opsSec":4099565.155944808},{"name":"Using delete property (proto: null)","samples":8985724,"opsSec":17963982.312662717},{"name":"Using delete property (cached proto: null)","samples":2066863,"opsSec":4133722.6268823366},{"name":"Using undefined assignment","samples":39421649,"opsSec":78840218.8164139},{"name":"Using undefined assignment (proto: null)","samples":9861383,"opsSec":19719675.926782273},{"name":"Using undefined property (cached proto: null)","samples":36682753,"opsSec":73365492.7942113}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|348,845|174423|
|NodeError|309,239|154665|
|NodeError Range|297,481|148830|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:16:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":174423,"opsSec":348845.5862691347},{"name":"NodeError","samples":154665,"opsSec":309239.3712174773},{"name":"NodeError Range","samples":148830,"opsSec":297481.0907073134}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|74,235,312|37118345|
|using Array.includes (first item)|81,892,156|40951703|
|Using raw comparison|96,947,058|48474071|
|Using raw comparison (first item)|99,676,391|49844471|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:18:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":37118345,"opsSec":74235312.48954146},{"name":"using Array.includes (first item)","samples":40951703,"opsSec":81892156.31070329},{"name":"Using raw comparison","samples":48474071,"opsSec":96947058.71356595},{"name":"Using raw comparison (first item)","samples":49844471,"opsSec":99676391.14753227}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,638,531|21320762|
|Using Object.getOwnPropertyNames()|46,555,039|23300518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:22:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":21320762,"opsSec":42638531.883663595},{"name":"Using Object.getOwnPropertyNames()","samples":23300518,"opsSec":46555039.24878189}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,368,731|49684377|
|Length = 10_000 - Array.at|100,246,021|50123021|
|Length = 1_000_000 - Array.at|98,055,278|49037132|
|Length = 100 - Array[length - 1]|96,413,218|48206620|
|Length = 10_000 - Array[length - 1]|95,910,314|47955166|
|Length = 1_000_000 - Array[length - 1]|97,716,307|48858163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49684377,"opsSec":99368731.54266667},{"name":"Length = 10_000 - Array.at","samples":50123021,"opsSec":100246021.95079562},{"name":"Length = 1_000_000 - Array.at","samples":49037132,"opsSec":98055278.53696968},{"name":"Length = 100 - Array[length - 1]","samples":48206620,"opsSec":96413218.40343907},{"name":"Length = 10_000 - Array[length - 1]","samples":47955166,"opsSec":95910314.54432276},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48858163,"opsSec":97716307.4339016}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|96,071,711|48037909|
|~ (small)|98,900,499|49467100|
|Math.floor (long)|98,535,524|49277433|
|~ (long)|98,906,227|49485657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":48037909,"opsSec":96071711.5107632},{"name":"~ (small)","samples":49467100,"opsSec":98900499.2592754},{"name":"Math.floor (long)","samples":49277433,"opsSec":98535524.46190336},{"name":"~ (long)","samples":49485657,"opsSec":98906227.37239042}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,297,659|17656667|
|Object.create({})|2,102,941|1052972|
|new Function with empty prototype|100,244,722|50127165|
|Empty class|80,255,282|40140504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:32:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17656667,"opsSec":35297659.86235216},{"name":"Object.create({})","samples":1052972,"opsSec":2102941.8948274334},{"name":"new Function with empty prototype","samples":50127165,"opsSec":100244722.74626145},{"name":"Empty class","samples":40140504,"opsSec":80255282.32975976}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,560,213|49280112|
|Using parseInt(x, 10) - big number (10 len)|94,647,439|47323765|
|Using + - small number (2 len)|98,037,819|49041688|
|Using + - big number (10 len)|98,961,387|49480704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:35:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49280112,"opsSec":98560213.15837656},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47323765,"opsSec":94647439.32775313},{"name":"Using + - small number (2 len)","samples":49041688,"opsSec":98037819.98188646},{"name":"Using + - big number (10 len)","samples":49480704,"opsSec":98961387.41603144}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|889,084|444580|
|Using ? operator to avoid rejection|1,114,501|561000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:39:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":444580,"opsSec":889084.6358517574},{"name":"Using ? operator to avoid rejection","samples":561000,"opsSec":1114501.3783908691}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|85,996,883|42998443|
|Raw usage underscore usage|90,082,494|45050160|
|Manipulating private properties using #|93,652,918|46847827|
|Manipulating private properties using underscore(_)|94,996,020|47498031|
|Manipulating private properties using Symbol|95,081,633|47541780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:42:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":42998443,"opsSec":85996883.76408103},{"name":"Raw usage underscore usage","samples":45050160,"opsSec":90082494.29586375},{"name":"Manipulating private properties using #","samples":46847827,"opsSec":93652918.48754162},{"name":"Manipulating private properties using underscore(_)","samples":47498031,"opsSec":94996020.96171895},{"name":"Manipulating private properties using Symbol","samples":47541780,"opsSec":95081633.83626175}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,903,804|3951906|
|Adding property in the object creation - small object|7,419,733|3709867|
|Adding property after the function creation - small class|249,331|124670|
|Adding property in the function creation - small class|265,936|135234|
|Adding property after the class creation - small class|279,681|139973|
|Adding property in the class creation - small class|274,126|137064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:43:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3951906,"opsSec":7903804.428155358},{"name":"Adding property in the object creation - small object","samples":3709867,"opsSec":7419733.970321063},{"name":"Adding property after the function creation - small class","samples":124670,"opsSec":249331.73664758404},{"name":"Adding property in the function creation - small class","samples":135234,"opsSec":265936.22493627435},{"name":"Adding property after the class creation - small class","samples":139973,"opsSec":279681.4359050685},{"name":"Adding property in the class creation - small class","samples":137064,"opsSec":274126.20611810713}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,613,957|48807151|
|Getter|50,159,974|25080748|
|Method|100,972,045|50486031|
|DefineProperty (getter)|98,425,924|49229965|
|DefineProperty (getter & enumerable=false)|51,072,164|25544680|
|DefineProperty (getter & configurable=false)|97,684,536|49125139|
|DefineProperty (getter & enumerable=false & configurable=false)|50,036,351|25117648|
|DefineProperty (writable)|98,612,745|49438831|
|DefineProperty (writable & enumerable=false)|95,744,744|49188253|
|DefineProperty (writable & enumerable=false & configurable=false)|98,585,169|49292594|
|DefineProperties (getter)|50,976,323|25488175|
|DefineProperties (getter & enumerable=false)|51,550,152|25775589|
|DefineProperties (getter & enumerable=false & configurable=false)|51,623,134|25812518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:48:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":48807151,"opsSec":97613957.22750308},{"name":"Getter","samples":25080748,"opsSec":50159974.1463844},{"name":"Method","samples":50486031,"opsSec":100972045.03669645},{"name":"DefineProperty (getter)","samples":49229965,"opsSec":98425924.040096},{"name":"DefineProperty (getter & enumerable=false)","samples":25544680,"opsSec":51072164.30871024},{"name":"DefineProperty (getter & configurable=false)","samples":49125139,"opsSec":97684536.83271886},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25117648,"opsSec":50036351.466568924},{"name":"DefineProperty (writable)","samples":49438831,"opsSec":98612745.17131296},{"name":"DefineProperty (writable & enumerable=false)","samples":49188253,"opsSec":95744744.17431033},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49292594,"opsSec":98585169.66315843},{"name":"DefineProperties (getter)","samples":25488175,"opsSec":50976323.69621697},{"name":"DefineProperties (getter & enumerable=false)","samples":25775589,"opsSec":51550152.25507043},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25812518,"opsSec":51623134.20373594}]}-->

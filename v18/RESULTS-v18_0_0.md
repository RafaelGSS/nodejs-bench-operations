## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,621,459|38822369|
|Using dot notation|67,935,193|33968708|
|Using define property (writable)|4,596,485|2298318|
|Using define property initialized (writable)|5,562,598|2781303|
|Using define property (getter)|2,090,041|1050156|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":38822369,"opsSec":77621459.16915224},{"name":"Using dot notation","samples":33968708,"opsSec":67935193.02461384},{"name":"Using define property (writable)","samples":2298318,"opsSec":4596485.106586921},{"name":"Using define property initialized (writable)","samples":2781303,"opsSec":5562598.279113588},{"name":"Using define property (getter)","samples":1050156,"opsSec":2090041.298793023}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.008ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.399ms
new Array(length)|10,000|0.145ms
array.push|1,000,000|29.861ms
new Array(length)|1,000,000|16.102ms
array.push|10,000,000|240.124ms
new Array(length)|10,000,000|136.569ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.011ms
new Array(length)|100|0.009ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.244ms
new Array(length)|10,000|3.114ms
array.push|1,000,000|17.616ms
new Array(length)|1,000,000|5.009ms
array.push|10,000,000|231.226ms
new Array(length)|10,000,000|64.484ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|221|111|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:18:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":111,"opsSec":221.03321046289656},{"name":"Array.from","samples":11,"opsSec":20.95751506454285}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,893|1947|
|new Blob (1024)|493|253|
|text (128)|32,329|16165|
|text (1024)|13,175|6608|
|arrayBuffer (128)|40,736|20641|
|arrayBuffer (1024)|15,577|7789|
|slice (0, 64)|74,222|37419|
|slice (0, 512)|25,629|12815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":1947,"opsSec":3893.3234104710814},{"name":"new Blob (1024)","samples":253,"opsSec":493.57932408619166},{"name":"text (128)","samples":16165,"opsSec":32329.03071100122},{"name":"text (1024)","samples":6608,"opsSec":13175.776094785067},{"name":"arrayBuffer (128)","samples":20641,"opsSec":40736.288370782175},{"name":"arrayBuffer (1024)","samples":7789,"opsSec":15577.905037090895},{"name":"slice (0, 64)","samples":37419,"opsSec":74222.18270652618},{"name":"slice (0, 512)","samples":12815,"opsSec":25629.428104941268}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|163.62 ms|1|
|Gzip|163.76 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:32:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.163617533},{"name":"Gzip","samples":1,"totalTime":0.16375766}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,055|1030|
|crypto.verify('RSA-SHA256')|2,038|1020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:40:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":1030,"opsSec":2055.1455120140345},{"name":"crypto.verify('RSA-SHA256')","samples":1020,"opsSec":2038.9278134978495}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,468,691|1234347|
|fromUnixToISOString(new Date())|2,049,148|1024607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1234347,"opsSec":2468691.4473730433},{"name":"fromUnixToISOString(new Date())","samples":1024607,"opsSec":2049148.9600120091}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,288|6145|
|Intl.DateTimeFormat().format(new Date())|11,803|5902|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,611|6306|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,402|6202|
|Reusing Intl.DateTimeFormat()|642,483|321242|
|Date.toLocaleDateString()|671,254|335661|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,148|6077|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:47:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6145,"opsSec":12288.813220152077},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5902,"opsSec":11803.559703615936},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6306,"opsSec":12611.32360426981},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6202,"opsSec":12402.24914968304},{"name":"Reusing Intl.DateTimeFormat()","samples":321242,"opsSec":642483.4860132112},{"name":"Date.toLocaleDateString()","samples":335661,"opsSec":671254.0744576975},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6077,"opsSec":12148.92782263405}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|998,275|499162|
|Using brackets {}|1,008,752|504536|
|Using '' + |1,016,381|508191|
|Using date.toString()|1,121,951|560976|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":499162,"opsSec":998275.7293753817},{"name":"Using brackets {}","samples":504536,"opsSec":1008752.0541109976},{"name":"Using '' + ","samples":508191,"opsSec":1016381.3088607099},{"name":"Using date.toString()","samples":560976,"opsSec":1121951.605073035}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,302,764|1651384|
|Using delete property (proto: null)|16,239,535|8122009|
|Using delete property (cached proto: null)|3,351,369|1675991|
|Using undefined assignment|73,880,120|36949758|
|Using undefined assignment (proto: null)|18,233,457|9117786|
|Using undefined property (cached proto: null)|78,722,496|39371772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:58:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1651384,"opsSec":3302764.360353675},{"name":"Using delete property (proto: null)","samples":8122009,"opsSec":16239535.855624774},{"name":"Using delete property (cached proto: null)","samples":1675991,"opsSec":3351369.429992847},{"name":"Using undefined assignment","samples":36949758,"opsSec":73880120.84291607},{"name":"Using undefined assignment (proto: null)","samples":9117786,"opsSec":18233457.17423619},{"name":"Using undefined property (cached proto: null)","samples":39371772,"opsSec":78722496.75326805}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|294,535|147493|
|NodeError|293,981|146991|
|NodeError Range|269,076|134563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:02:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":147493,"opsSec":294535.7390921495},{"name":"NodeError","samples":146991,"opsSec":293981.4643657719},{"name":"NodeError Range","samples":134563,"opsSec":269076.9079944441}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,568,979|33793786|
|using Array.includes (first item)|86,108,755|43054438|
|Using raw comparison|104,869,248|52440065|
|Using raw comparison (first item)|102,547,261|51275397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33793786,"opsSec":67568979.4493388},{"name":"using Array.includes (first item)","samples":43054438,"opsSec":86108755.2755251},{"name":"Using raw comparison","samples":52440065,"opsSec":104869248.55703123},{"name":"Using raw comparison (first item)","samples":51275397,"opsSec":102547261.04176259}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,382,234|20192905|
|Using Object.getOwnPropertyNames()|42,803,884|21406260|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:14:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20192905,"opsSec":40382234.47619501},{"name":"Using Object.getOwnPropertyNames()","samples":21406260,"opsSec":42803884.31633918}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,785,255|10392632|
|Length = 10_000 - Array.at|20,849,691|10428108|
|Length = 1_000_000 - Array.at|20,188,602|10094313|
|Length = 100 - Array[length - 1]|93,986,403|46993222|
|Length = 10_000 - Array[length - 1]|93,665,380|46842138|
|Length = 1_000_000 - Array[length - 1]|102,339,344|51169682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10392632,"opsSec":20785255.394904267},{"name":"Length = 10_000 - Array.at","samples":10428108,"opsSec":20849691.756155044},{"name":"Length = 1_000_000 - Array.at","samples":10094313,"opsSec":20188602.17744943},{"name":"Length = 100 - Array[length - 1]","samples":46993222,"opsSec":93986403.20990102},{"name":"Length = 10_000 - Array[length - 1]","samples":46842138,"opsSec":93665380.3208356},{"name":"Length = 1_000_000 - Array[length - 1]","samples":51169682,"opsSec":102339344.96488182}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|102,472,660|51236341|
|~ (small)|104,571,695|52370091|
|Math.floor (long)|102,359,793|51179909|
|~ (long)|104,439,003|52219515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:22:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":51236341,"opsSec":102472660.89063185},{"name":"~ (small)","samples":52370091,"opsSec":104571695.6656567},{"name":"Math.floor (long)","samples":51179909,"opsSec":102359793.22893004},{"name":"~ (long)","samples":52219515,"opsSec":104439003.26361516}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,066,304|15051862|
|Object.create({})|1,690,134|860172|
|new Function with empty prototype|97,933,330|48969369|
|Empty class|76,032,749|38024059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:30:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15051862,"opsSec":30066304.55973192},{"name":"Object.create({})","samples":860172,"opsSec":1690134.3626284064},{"name":"new Function with empty prototype","samples":48969369,"opsSec":97933330.70907822},{"name":"Empty class","samples":38024059,"opsSec":76032749.5003435}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,762,936|48387337|
|Using parseInt(x, 10) - big number (10 len)|14,067,243|7034512|
|Using + - small number (2 len)|106,837,939|53425096|
|Using + - big number (10 len)|105,200,566|52600301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48387337,"opsSec":96762936.46228126},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":7034512,"opsSec":14067243.143287031},{"name":"Using + - small number (2 len)","samples":53425096,"opsSec":106837939.61140949},{"name":"Using + - big number (10 len)","samples":52600301,"opsSec":105200566.86301066}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|911,357|455706|
|Using ? operator to avoid rejection|968,373|484917|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:39:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":455706,"opsSec":911357.9765218678},{"name":"Using ? operator to avoid rejection","samples":484917,"opsSec":968373.2109480314}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|78,902,808|39465019|
|Raw usage underscore usage|78,347,414|39179953|
|Manipulating private properties using #|73,065,785|36535629|
|Manipulating private properties using underscore(_)|73,319,148|36674587|
|Manipulating private properties using Symbol|72,856,084|36439024|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:43:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":39465019,"opsSec":78902808.32523572},{"name":"Raw usage underscore usage","samples":39179953,"opsSec":78347414.75827543},{"name":"Manipulating private properties using #","samples":36535629,"opsSec":73065785.81103747},{"name":"Manipulating private properties using underscore(_)","samples":36674587,"opsSec":73319148.0492143},{"name":"Manipulating private properties using Symbol","samples":36439024,"opsSec":72856084.80467479}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,760,728|1880400|
|Adding property in the object creation - small object|3,734,387|1867195|
|Adding property after the function creation - small class|230,123|115204|
|Adding property in the function creation - small class|224,665|114161|
|Adding property after the class creation - small class|198,008|100259|
|Adding property in the class creation - small class|197,399|98708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:48:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1880400,"opsSec":3760728.959829949},{"name":"Adding property in the object creation - small object","samples":1867195,"opsSec":3734387.677210865},{"name":"Adding property after the function creation - small class","samples":115204,"opsSec":230123.9566196007},{"name":"Adding property in the function creation - small class","samples":114161,"opsSec":224665.58424171928},{"name":"Adding property after the class creation - small class","samples":100259,"opsSec":198008.55481722538},{"name":"Adding property in the class creation - small class","samples":98708,"opsSec":197399.40423728697}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|106,362,494|53181551|
|Getter|55,493,514|27746765|
|Method|104,462,564|52232781|
|DefineProperty (getter)|107,145,996|53577970|
|DefineProperty (getter & enumerable=false)|54,204,770|27103235|
|DefineProperty (getter & configurable=false)|107,282,750|53641388|
|DefineProperty (getter & enumerable=false & configurable=false)|56,145,737|28073338|
|DefineProperty (writable)|105,309,353|52654691|
|DefineProperty (writable & enumerable=false)|106,489,284|53245161|
|DefineProperty (writable & enumerable=false & configurable=false)|107,305,778|53652908|
|DefineProperties (getter)|54,810,340|27405181|
|DefineProperties (getter & enumerable=false)|55,222,823|27611422|
|DefineProperties (getter & enumerable=false & configurable=false)|53,695,883|26847950|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:53:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":53181551,"opsSec":106362494.88287921},{"name":"Getter","samples":27746765,"opsSec":55493514.23984196},{"name":"Method","samples":52232781,"opsSec":104462564.34225364},{"name":"DefineProperty (getter)","samples":53577970,"opsSec":107145996.42294797},{"name":"DefineProperty (getter & enumerable=false)","samples":27103235,"opsSec":54204770.57203303},{"name":"DefineProperty (getter & configurable=false)","samples":53641388,"opsSec":107282750.89583628},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28073338,"opsSec":56145737.58014208},{"name":"DefineProperty (writable)","samples":52654691,"opsSec":105309353.56647454},{"name":"DefineProperty (writable & enumerable=false)","samples":53245161,"opsSec":106489284.15543664},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":53652908,"opsSec":107305778.22836606},{"name":"DefineProperties (getter)","samples":27405181,"opsSec":54810340.84320844},{"name":"DefineProperties (getter & enumerable=false)","samples":27611422,"opsSec":55222823.01532726},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26847950,"opsSec":53695883.7838431}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|101,866,913|50933470|
|Setter|9,975,356|4987681|
|Method|101,545,470|50772749|
|DefineProperty (setter)|104,631,610|52324513|
|DefineProperty (setter & enumerable=false)|9,902,041|4951023|
|DefineProperty (setter & configurable=false)|9,943,008|4972269|
|DefineProperty (setter & enumerable=false & configurable=false)|9,935,824|4970340|
|DefineProperty (writable)|98,748,771|49374398|
|DefineProperty (writable & enumerable=false)|101,222,636|50614792|
|DefineProperty (writable & enumerable=false & configurable=false)|99,124,764|49569762|
|DefineProperties (setter)|97,744,059|48875556|
|DefineProperties (setter & enumerable=false)|9,855,365|4930702|
|DefineProperties (setter & enumerable=false & configurable=false)|9,962,220|4984835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:59:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50933470,"opsSec":101866913.31086873},{"name":"Setter","samples":4987681,"opsSec":9975356.45370181},{"name":"Method","samples":50772749,"opsSec":101545470.17654116},{"name":"DefineProperty (setter)","samples":52324513,"opsSec":104631610.90541768},{"name":"DefineProperty (setter & enumerable=false)","samples":4951023,"opsSec":9902041.108391693},{"name":"DefineProperty (setter & configurable=false)","samples":4972269,"opsSec":9943008.248294983},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":4970340,"opsSec":9935824.720148955},{"name":"DefineProperty (writable)","samples":49374398,"opsSec":98748771.11530969},{"name":"DefineProperty (writable & enumerable=false)","samples":50614792,"opsSec":101222636.07825959},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49569762,"opsSec":99124764.32259238},{"name":"DefineProperties (setter)","samples":48875556,"opsSec":97744059.37513985},{"name":"DefineProperties (setter & enumerable=false)","samples":4930702,"opsSec":9855365.164416963},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":4984835,"opsSec":9962220.231786229}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,366,015|1683017|
|Using replaceAll()|2,946,422|1473213|
|Using replaceAll(//g)|3,028,795|1515014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:04:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1683017,"opsSec":3366015.958154464},{"name":"Using replaceAll()","samples":1473213,"opsSec":2946422.806077678},{"name":"Using replaceAll(//g)","samples":1515014,"opsSec":3028795.128942764}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,601,770|10801505|
|{ ...object, __proto__: null }|21,465,206|10732627|
|{ ...object, newProp: true }|711,755|358024|
|structuredClone|247,197|123683|
|JSON.parse + JSON.stringify|200,670|100355|
|loop + object.keys starting with {}|1,293,325|646986|
|loop + object.keys starting with { __proto__: null }|717,467|358762|
|loop + object.keys starting with { randomProp: true }|535,501|267865|
|object.keys + reduce(FN, {})|1,288,819|644597|
|object.keys + reduce(FN, { __proto__: null })|711,026|355888|
|object.keys + reduce(FN, { newProp: true })|527,739|264017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:08:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10801505,"opsSec":21601770.01519759},{"name":"{ ...object, __proto__: null }","samples":10732627,"opsSec":21465206.089660008},{"name":"{ ...object, newProp: true }","samples":358024,"opsSec":711755.9252904463},{"name":"structuredClone","samples":123683,"opsSec":247197.96718180817},{"name":"JSON.parse + JSON.stringify","samples":100355,"opsSec":200670.66212876156},{"name":"loop + object.keys starting with {}","samples":646986,"opsSec":1293325.3916238544},{"name":"loop + object.keys starting with { __proto__: null }","samples":358762,"opsSec":717467.152207662},{"name":"loop + object.keys starting with { randomProp: true }","samples":267865,"opsSec":535501.4758161984},{"name":"object.keys + reduce(FN, {})","samples":644597,"opsSec":1288819.8710572706},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":355888,"opsSec":711026.5524167968},{"name":"object.keys + reduce(FN, { newProp: true })","samples":264017,"opsSec":527739.7808502577}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|258,132|129067|
|Sort using first char|1,256,010|637205|
|Sort using localeCompare|1,100,580|550297|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:12:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":129067,"opsSec":258132.41455070986},{"name":"Sort using first char","samples":637205,"opsSec":1256010.449215334},{"name":"Sort using localeCompare","samples":550297,"opsSec":1100580.3682115593}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,661|831|
|{...smallObject} - Total keys: 2|38,954,958|19477510|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,021|511|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,415|3210|
|{ ...bigObject, ...anotherBigObject }|1,073|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,733,216|5370131|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,488,863|13744463|
|{ ...smallObject, ...anotherSmallObject }|19,400,272|9700289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:18:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1661.4047319757708},{"name":"{...smallObject} - Total keys: 2","samples":19477510,"opsSec":38954958.60698523},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":511,"opsSec":1021.67760554486},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3210,"opsSec":6415.549430711125},{"name":"{ ...bigObject, ...anotherBigObject }","samples":538,"opsSec":1073.0830148329533},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5370131,"opsSec":10733216.072976733},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13744463,"opsSec":27488863.160458818},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9700289,"opsSec":19400272.212909378}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,032|1017|
|streams.web.Readable reading 1e3 * "some data"|466|234|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:24:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1017,"opsSec":2032.8800010264745},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":234,"opsSec":466.06039087855606}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,159|2087|
|streams.web.WritableStream writing 1e3 * "some data"|1,409|710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:28:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2087,"opsSec":4159.847234623253},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":710,"opsSec":1409.6815763207105}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|106,399,539|53217217|
|Using backtick (`)|105,811,265|52928588|
|Using array.join|10,155,995|5078368|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:32:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":53217217,"opsSec":106399539.84530957},{"name":"Using backtick (`)","samples":52928588,"opsSec":105811265.33845976},{"name":"Using array.join","samples":5078368,"opsSec":10155995.973197417}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,545,927|26291634|
|(short string) (true) String#slice and strict comparison|48,657,441|24328727|
|(long string) (true) String#endsWith|49,758,282|24879153|
|(long string) (true) String#slice and strict comparison|43,875,740|21938900|
|(short string) (false) String#endsWith|56,829,262|28414640|
|(short string) (false) String#slice and strict comparison|54,797,037|27405795|
|(long string) (false) String#endsWith|54,041,969|27111201|
|(long string) (false) String#slice and strict comparison|48,783,748|24394459|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:37:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26291634,"opsSec":52545927.91779491},{"name":"(short string) (true) String#slice and strict comparison","samples":24328727,"opsSec":48657441.05712068},{"name":"(long string) (true) String#endsWith","samples":24879153,"opsSec":49758282.2155411},{"name":"(long string) (true) String#slice and strict comparison","samples":21938900,"opsSec":43875740.64823694},{"name":"(short string) (false) String#endsWith","samples":28414640,"opsSec":56829262.15561169},{"name":"(short string) (false) String#slice and strict comparison","samples":27405795,"opsSec":54797037.55073765},{"name":"(long string) (false) String#endsWith","samples":27111201,"opsSec":54041969.80564716},{"name":"(long string) (false) String#slice and strict comparison","samples":24394459,"opsSec":48783748.87396932}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,756,601|7378304|
|Using indexof|16,012,017|8006033|
|Using RegExp.test|13,593,276|6797564|
|Using RegExp.text with cached regex pattern|14,597,648|7299091|
|Using new RegExp.test|4,243,154|2122275|
|Using new RegExp.test with cached regex pattern|4,820,932|2411374|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7378304,"opsSec":14756601.27098982},{"name":"Using indexof","samples":8006033,"opsSec":16012017.163347654},{"name":"Using RegExp.test","samples":6797564,"opsSec":13593276.514179109},{"name":"Using RegExp.text with cached regex pattern","samples":7299091,"opsSec":14597648.309977787},{"name":"Using new RegExp.test","samples":2122275,"opsSec":4243154.876135656},{"name":"Using new RegExp.test with cached regex pattern","samples":2411374,"opsSec":4820932.803097246}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|51,093,789|25590726|
|(short string) (true) String#slice and strict comparison|47,496,849|23751788|
|(long string) (true) String#startsWith|49,987,732|24993921|
|(long string) (true) String#slice and strict comparison|44,116,244|22058127|
|(short string) (false) String#startsWith|55,916,137|27958377|
|(short string) (false) String#slice and strict comparison|54,504,949|27255244|
|(long string) (false) String#startsWith|53,487,850|26744404|
|(long string) (false) String#slice and strict comparison|48,800,827|24402247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":25590726,"opsSec":51093789.26170034},{"name":"(short string) (true) String#slice and strict comparison","samples":23751788,"opsSec":47496849.686134845},{"name":"(long string) (true) String#startsWith","samples":24993921,"opsSec":49987732.526865765},{"name":"(long string) (true) String#slice and strict comparison","samples":22058127,"opsSec":44116244.11796131},{"name":"(short string) (false) String#startsWith","samples":27958377,"opsSec":55916137.24500619},{"name":"(short string) (false) String#slice and strict comparison","samples":27255244,"opsSec":54504949.09806275},{"name":"(long string) (false) String#startsWith","samples":26744404,"opsSec":53487850.8883962},{"name":"(long string) (false) String#slice and strict comparison","samples":24402247,"opsSec":48800827.886605844}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|22,524,703|11263863|
|Using this|85,579,873|42824943|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:50:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":11263863,"opsSec":22524703.86048304},{"name":"Using this","samples":42824943,"opsSec":85579873.27683195}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,760,596|4880927|
|Date.now()|19,174,738|9597357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:58:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4880927,"opsSec":9760596.776571598},{"name":"Date.now()","samples":9597357,"opsSec":19174738.10298959}]}-->

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|94,676,427|47370133|
|Using dot notation|64,105,980|32059883|
|Using define property (writable)|4,905,356|2452680|
|Using define property initialized (writable)|6,933,641|3466828|
|Using define property (getter)|2,364,371|1183551|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":47370133,"opsSec":94676427.95686296},{"name":"Using dot notation","samples":32059883,"opsSec":64105980.008999065},{"name":"Using define property (writable)","samples":2452680,"opsSec":4905356.360225581},{"name":"Using define property initialized (writable)","samples":3466828,"opsSec":6933641.536423755},{"name":"Using define property (getter)","samples":1183551,"opsSec":2364371.6189257214}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|34.192ms
new Array(length)|1,000,000|6.943ms
array.push|10,000,000|265.447ms
new Array(length)|10,000,000|68.42ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.003ms
array.push|100|0.023ms
new Array(length)|100|0.013ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.334ms
new Array(length)|10,000|0.186ms
array.push|1,000,000|21.636ms
new Array(length)|1,000,000|12.397ms
array.push|10,000,000|231.148ms
new Array(length)|10,000,000|70.001ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|326|164|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:23:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":164,"opsSec":326.1328295424289},{"name":"Array.from","samples":12,"opsSec":23.88372884907726}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,534|2279|
|new Blob (1024)|617|314|
|text (128)|4,411|2206|
|text (1024)|553|277|
|arrayBuffer (128)|4,414|2208|
|arrayBuffer (1024)|561|281|
|slice (0, 64)|209,766|110265|
|slice (0, 512)|36,606|22427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2279,"opsSec":4534.2509267156365},{"name":"new Blob (1024)","samples":314,"opsSec":617.3020323194967},{"name":"text (128)","samples":2206,"opsSec":4411.249875781124},{"name":"text (1024)","samples":277,"opsSec":553.0350511698775},{"name":"arrayBuffer (128)","samples":2208,"opsSec":4414.09940356341},{"name":"arrayBuffer (1024)","samples":281,"opsSec":561.1139360058302},{"name":"slice (0, 64)","samples":110265,"opsSec":209766.6372271102},{"name":"slice (0, 512)","samples":22427,"opsSec":36606.77926310425}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.58 ms|1|
|Gzip|134.95 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:32:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133581843},{"name":"Gzip","samples":1,"totalTime":0.134954727}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,654|3331|
|crypto.verify('RSA-SHA256')|6,829|3415|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:42:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3331,"opsSec":6654.284729496094},{"name":"crypto.verify('RSA-SHA256')","samples":3415,"opsSec":6829.4340994316535}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,518,536|759404|
|fromUnixToISOString(new Date())|2,020,839|1010876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":759404,"opsSec":1518536.482639831},{"name":"fromUnixToISOString(new Date())","samples":1010876,"opsSec":2020839.0172654237}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,780|10391|
|Intl.DateTimeFormat().format(new Date())|19,841|9945|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,981|9991|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,783|9394|
|Reusing Intl.DateTimeFormat()|414,154|207080|
|Date.toLocaleDateString()|1,023,438|511889|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,620|12311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:49:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10391,"opsSec":20780.08789943185},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9945,"opsSec":19841.16458446729},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9991,"opsSec":19981.921910649173},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9394,"opsSec":18783.231763917338},{"name":"Reusing Intl.DateTimeFormat()","samples":207080,"opsSec":414154.5936259348},{"name":"Date.toLocaleDateString()","samples":511889,"opsSec":1023438.8282785532},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12311,"opsSec":24620.823026176055}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|903,709|451863|
|Using brackets {}|924,488|462350|
|Using '' + |913,093|456587|
|Using date.toString()|1,186,492|593247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":451863,"opsSec":903709.9464965104},{"name":"Using brackets {}","samples":462350,"opsSec":924488.4326711602},{"name":"Using '' + ","samples":456587,"opsSec":913093.1729923267},{"name":"Using date.toString()","samples":593247,"opsSec":1186492.1775480153}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,942,784|1971393|
|Using delete property (proto: null)|17,604,102|8802053|
|Using delete property (cached proto: null)|4,056,984|2028494|
|Using undefined assignment|78,915,935|39458446|
|Using undefined assignment (proto: null)|18,709,132|9354569|
|Using undefined property (cached proto: null)|78,323,238|39168206|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1971393,"opsSec":3942784.706766616},{"name":"Using delete property (proto: null)","samples":8802053,"opsSec":17604102.197513923},{"name":"Using delete property (cached proto: null)","samples":2028494,"opsSec":4056984.4055118165},{"name":"Using undefined assignment","samples":39458446,"opsSec":78915935.85452119},{"name":"Using undefined assignment (proto: null)","samples":9354569,"opsSec":18709132.761442825},{"name":"Using undefined property (cached proto: null)","samples":39168206,"opsSec":78323238.34460339}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|333,143|166589|
|NodeError|312,690|156389|
|NodeError Range|287,201|143783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:05:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":166589,"opsSec":333143.3317723224},{"name":"NodeError","samples":156389,"opsSec":312690.34476641304},{"name":"NodeError Range","samples":143783,"opsSec":287201.4511772005}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,957,925|37008371|
|using Array.includes (first item)|80,929,455|40464733|
|Using raw comparison|96,569,508|48302836|
|Using raw comparison (first item)|98,258,262|49130725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37008371,"opsSec":73957925.03720811},{"name":"using Array.includes (first item)","samples":40464733,"opsSec":80929455.80288857},{"name":"Using raw comparison","samples":48302836,"opsSec":96569508.6504006},{"name":"Using raw comparison (first item)","samples":49130725,"opsSec":98258262.69847459}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,267,898|20639679|
|Using Object.getOwnPropertyNames()|41,280,443|20658439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:14:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20639679,"opsSec":41267898.39982915},{"name":"Using Object.getOwnPropertyNames()","samples":20658439,"opsSec":41280443.63276706}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,911,182|50023941|
|Length = 10_000 - Array.at|100,441,447|50223470|
|Length = 1_000_000 - Array.at|100,324,967|50162497|
|Length = 100 - Array[length - 1]|99,119,189|49567890|
|Length = 10_000 - Array[length - 1]|98,730,224|49365120|
|Length = 1_000_000 - Array[length - 1]|98,698,522|49351199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:18:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50023941,"opsSec":99911182.52096298},{"name":"Length = 10_000 - Array.at","samples":50223470,"opsSec":100441447.86163092},{"name":"Length = 1_000_000 - Array.at","samples":50162497,"opsSec":100324967.11290881},{"name":"Length = 100 - Array[length - 1]","samples":49567890,"opsSec":99119189.6282784},{"name":"Length = 10_000 - Array[length - 1]","samples":49365120,"opsSec":98730224.99300581},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49351199,"opsSec":98698522.30642606}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,028,223|44514134|
|~ (small)|93,117,131|46558573|
|Math.floor (long)|98,720,402|49360222|
|~ (long)|98,653,285|49326650|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:22:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":44514134,"opsSec":89028223.84200098},{"name":"~ (small)","samples":46558573,"opsSec":93117131.84619597},{"name":"Math.floor (long)","samples":49360222,"opsSec":98720402.53743094},{"name":"~ (long)","samples":49326650,"opsSec":98653285.00470069}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|27,629,996|13815005|
|Object.create({})|2,035,711|1017869|
|new Function with empty prototype|71,692,736|35847676|
|Empty class|77,838,299|38919654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":13815005,"opsSec":27629996.958641436},{"name":"Object.create({})","samples":1017869,"opsSec":2035711.5805351078},{"name":"new Function with empty prototype","samples":35847676,"opsSec":71692736.93572754},{"name":"Empty class","samples":38919654,"opsSec":77838299.21564215}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,551,952|48276962|
|Using parseInt(x, 10) - big number (10 len)|97,098,877|48650334|
|Using + - small number (2 len)|96,971,883|48505643|
|Using + - big number (10 len)|97,255,312|48634963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:32:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48276962,"opsSec":96551952.79533175},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48650334,"opsSec":97098877.69496758},{"name":"Using + - small number (2 len)","samples":48505643,"opsSec":96971883.02688216},{"name":"Using + - big number (10 len)","samples":48634963,"opsSec":97255312.61123767}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|920,127|460089|
|Using ? operator to avoid rejection|1,134,954|572019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:38:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":460089,"opsSec":920127.6414141854},{"name":"Using ? operator to avoid rejection","samples":572019,"opsSec":1134954.5591590453}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,304,261|49155268|
|Raw usage underscore usage|97,093,380|48546701|
|Manipulating private properties using #|92,574,559|46448013|
|Manipulating private properties using underscore(_)|99,719,943|49869878|
|Manipulating private properties using Symbol|98,944,148|49472919|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:41:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":49155268,"opsSec":98304261.04240915},{"name":"Raw usage underscore usage","samples":48546701,"opsSec":97093380.44526954},{"name":"Manipulating private properties using #","samples":46448013,"opsSec":92574559.73044132},{"name":"Manipulating private properties using underscore(_)","samples":49869878,"opsSec":99719943.44219702},{"name":"Manipulating private properties using Symbol","samples":49472919,"opsSec":98944148.0339516}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,165,791|4082969|
|Adding property in the object creation - small object|8,157,633|4078820|
|Adding property after the function creation - small class|269,513|134767|
|Adding property in the function creation - small class|280,325|141007|
|Adding property after the class creation - small class|266,710|135754|
|Adding property in the class creation - small class|270,311|138375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:46:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4082969,"opsSec":8165791.848657493},{"name":"Adding property in the object creation - small object","samples":4078820,"opsSec":8157633.865459333},{"name":"Adding property after the function creation - small class","samples":134767,"opsSec":269513.0626082182},{"name":"Adding property in the function creation - small class","samples":141007,"opsSec":280325.72653824295},{"name":"Adding property after the class creation - small class","samples":135754,"opsSec":266710.77621851716},{"name":"Adding property in the class creation - small class","samples":138375,"opsSec":270311.4779381393}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,125,051|46564334|
|Getter|49,344,646|24674776|
|Method|95,005,006|47512320|
|DefineProperty (getter)|86,946,676|43473347|
|DefineProperty (getter & enumerable=false)|49,286,107|24649492|
|DefineProperty (getter & configurable=false)|94,652,120|47326360|
|DefineProperty (getter & enumerable=false & configurable=false)|49,105,503|24556669|
|DefineProperty (writable)|93,969,534|47019918|
|DefineProperty (writable & enumerable=false)|91,461,521|45731045|
|DefineProperty (writable & enumerable=false & configurable=false)|93,935,026|46971240|
|DefineProperties (getter)|49,874,388|24937659|
|DefineProperties (getter & enumerable=false)|49,079,373|24541185|
|DefineProperties (getter & enumerable=false & configurable=false)|49,779,156|24896811|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:53:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46564334,"opsSec":93125051.20926113},{"name":"Getter","samples":24674776,"opsSec":49344646.94471511},{"name":"Method","samples":47512320,"opsSec":95005006.07543443},{"name":"DefineProperty (getter)","samples":43473347,"opsSec":86946676.95845132},{"name":"DefineProperty (getter & enumerable=false)","samples":24649492,"opsSec":49286107.01881919},{"name":"DefineProperty (getter & configurable=false)","samples":47326360,"opsSec":94652120.28416587},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24556669,"opsSec":49105503.609743096},{"name":"DefineProperty (writable)","samples":47019918,"opsSec":93969534.00870487},{"name":"DefineProperty (writable & enumerable=false)","samples":45731045,"opsSec":91461521.65810442},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46971240,"opsSec":93935026.44352175},{"name":"DefineProperties (getter)","samples":24937659,"opsSec":49874388.2416544},{"name":"DefineProperties (getter & enumerable=false)","samples":24541185,"opsSec":49079373.6060826},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24896811,"opsSec":49779156.77439125}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|100,197,340|50187540|
|Setter|11,378,765|5694367|
|Method|96,707,627|48353840|
|DefineProperty (setter)|100,550,561|50277501|
|DefineProperty (setter & enumerable=false)|11,455,586|5730020|
|DefineProperty (setter & configurable=false)|11,442,527|5721266|
|DefineProperty (setter & enumerable=false & configurable=false)|11,652,939|5826472|
|DefineProperty (writable)|98,734,624|49374050|
|DefineProperty (writable & enumerable=false)|100,740,597|50375289|
|DefineProperty (writable & enumerable=false & configurable=false)|101,021,411|50520677|
|DefineProperties (setter)|99,942,593|49987999|
|DefineProperties (setter & enumerable=false)|11,295,885|5655360|
|DefineProperties (setter & enumerable=false & configurable=false)|11,668,166|5834601|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:01:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50187540,"opsSec":100197340.53880225},{"name":"Setter","samples":5694367,"opsSec":11378765.746055825},{"name":"Method","samples":48353840,"opsSec":96707627.0042204},{"name":"DefineProperty (setter)","samples":50277501,"opsSec":100550561.28501141},{"name":"DefineProperty (setter & enumerable=false)","samples":5730020,"opsSec":11455586.549084352},{"name":"DefineProperty (setter & configurable=false)","samples":5721266,"opsSec":11442527.19413858},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5826472,"opsSec":11652939.059153838},{"name":"DefineProperty (writable)","samples":49374050,"opsSec":98734624.50097886},{"name":"DefineProperty (writable & enumerable=false)","samples":50375289,"opsSec":100740597.83045414},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50520677,"opsSec":101021411.76718868},{"name":"DefineProperties (setter)","samples":49987999,"opsSec":99942593.58728975},{"name":"DefineProperties (setter & enumerable=false)","samples":5655360,"opsSec":11295885.362263218},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5834601,"opsSec":11668166.823575746}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,356,487|1678755|
|Using replaceAll()|3,194,844|1598077|
|Using replaceAll(//g)|3,094,531|1547529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1678755,"opsSec":3356487.74138051},{"name":"Using replaceAll()","samples":1598077,"opsSec":3194844.4652021583},{"name":"Using replaceAll(//g)","samples":1547529,"opsSec":3094531.7563076494}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,768,708|11885402|
|{ ...object, __proto__: null }|2,537,992|1268998|
|{ ...object, newProp: true }|22,787,319|11393663|
|structuredClone|277,637|138819|
|JSON.parse + JSON.stringify|289,582|144831|
|loop + object.keys starting with {}|1,663,739|831981|
|loop + object.keys starting with { __proto__: null }|877,480|438801|
|loop + object.keys starting with { randomProp: true }|634,206|317138|
|object.keys + reduce(FN, {})|1,720,000|860460|
|object.keys + reduce(FN, { __proto__: null })|844,226|422891|
|object.keys + reduce(FN, { newProp: true })|583,325|291726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:10:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11885402,"opsSec":23768708.693253856},{"name":"{ ...object, __proto__: null }","samples":1268998,"opsSec":2537992.436658619},{"name":"{ ...object, newProp: true }","samples":11393663,"opsSec":22787319.118229628},{"name":"structuredClone","samples":138819,"opsSec":277637.1054532463},{"name":"JSON.parse + JSON.stringify","samples":144831,"opsSec":289582.8905876177},{"name":"loop + object.keys starting with {}","samples":831981,"opsSec":1663739.2951854249},{"name":"loop + object.keys starting with { __proto__: null }","samples":438801,"opsSec":877480.7356722531},{"name":"loop + object.keys starting with { randomProp: true }","samples":317138,"opsSec":634206.0610240024},{"name":"object.keys + reduce(FN, {})","samples":860460,"opsSec":1720000.0098347394},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":422891,"opsSec":844226.6980387372},{"name":"object.keys + reduce(FN, { newProp: true })","samples":291726,"opsSec":583325.7088173896}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|319,198|159600|
|Sort using first char|1,385,122|693790|
|Sort using localeCompare|1,270,044|635627|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:15:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":159600,"opsSec":319198.9919695834},{"name":"Sort using first char","samples":693790,"opsSec":1385122.9912711957},{"name":"Sort using localeCompare","samples":635627,"opsSec":1270044.6558584236}]}-->

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|71,335,616|35843576|
|Using dot notation|73,412,732|36786926|
|Using define property (writable)|4,955,154|2478274|
|Using define property initialized (writable)|6,819,212|3409612|
|Using define property (getter)|2,380,929|1195703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":35843576,"opsSec":71335616.50208323},{"name":"Using dot notation","samples":36786926,"opsSec":73412732.34220125},{"name":"Using define property (writable)","samples":2478274,"opsSec":4955154.7888589455},{"name":"Using define property initialized (writable)","samples":3409612,"opsSec":6819212.270954894},{"name":"Using define property (getter)","samples":1195703,"opsSec":2380929.31103725}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.138ms
array.push|1,000,000|28.735ms
new Array(length)|1,000,000|6.54ms
array.push|10,000,000|243.287ms
new Array(length)|10,000,000|63.264ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.02ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.32ms
new Array(length)|10,000|0.182ms
array.push|1,000,000|21.442ms
new Array(length)|1,000,000|12.402ms
array.push|10,000,000|216.404ms
new Array(length)|10,000,000|65.692ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|319|161|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:46:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":161,"opsSec":319.86084551264923},{"name":"Array.from","samples":13,"opsSec":24.092807436496322}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,917|2459|
|new Blob (1024)|594|298|
|text (128)|4,316|2166|
|text (1024)|542|272|
|arrayBuffer (128)|4,349|2176|
|arrayBuffer (1024)|546|274|
|slice (0, 64)|156,022|78014|
|slice (0, 512)|19,164|9694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2459,"opsSec":4917.951784400705},{"name":"new Blob (1024)","samples":298,"opsSec":594.7496304933309},{"name":"text (128)","samples":2166,"opsSec":4316.094535589981},{"name":"text (1024)","samples":272,"opsSec":542.7472319247657},{"name":"arrayBuffer (128)","samples":2176,"opsSec":4349.165127186797},{"name":"arrayBuffer (1024)","samples":274,"opsSec":546.4869459646034},{"name":"slice (0, 64)","samples":78014,"opsSec":156022.22811369316},{"name":"slice (0, 512)","samples":9694,"opsSec":19164.075898691968}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.49 ms|1|
|Gzip|135.46 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:55:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134491521},{"name":"Gzip","samples":1,"totalTime":0.135460783}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,471|3237|
|crypto.verify('RSA-SHA256')|6,810|3406|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:59:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3237,"opsSec":6471.845380292303},{"name":"crypto.verify('RSA-SHA256')","samples":3406,"opsSec":6810.518507908974}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,521,720|760861|
|fromUnixToISOString(new Date())|2,096,102|1048052|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:01:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":760861,"opsSec":1521720.3169773293},{"name":"fromUnixToISOString(new Date())","samples":1048052,"opsSec":2096102.666878704}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,462|10242|
|Intl.DateTimeFormat().format(new Date())|19,935|9970|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,645|9832|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,081|9543|
|Reusing Intl.DateTimeFormat()|445,955|223461|
|Date.toLocaleDateString()|978,505|489253|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,330|12168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10242,"opsSec":20462.866074695252},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9970,"opsSec":19935.517618476595},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9832,"opsSec":19645.24480265837},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9543,"opsSec":19081.397719521232},{"name":"Reusing Intl.DateTimeFormat()","samples":223461,"opsSec":445955.385458643},{"name":"Date.toLocaleDateString()","samples":489253,"opsSec":978505.0097529301},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12168,"opsSec":24330.966117757966}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,091,522|545892|
|Using brackets {}|1,117,399|558726|
|Using '' + |1,088,905|544536|
|Using date.toString()|1,234,441|617221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:10:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":545892,"opsSec":1091522.9229981399},{"name":"Using brackets {}","samples":558726,"opsSec":1117399.2632243729},{"name":"Using '' + ","samples":544536,"opsSec":1088905.438846263},{"name":"Using date.toString()","samples":617221,"opsSec":1234441.2494597204}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,090,867|2045983|
|Using delete property (proto: null)|16,899,458|8463657|
|Using delete property (cached proto: null)|4,089,168|2044585|
|Using undefined assignment|80,024,180|40042094|
|Using undefined assignment (proto: null)|18,347,798|9175144|
|Using undefined property (cached proto: null)|79,131,904|39772583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:14:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2045983,"opsSec":4090867.847435035},{"name":"Using delete property (proto: null)","samples":8463657,"opsSec":16899458.41989299},{"name":"Using delete property (cached proto: null)","samples":2044585,"opsSec":4089168.274370988},{"name":"Using undefined assignment","samples":40042094,"opsSec":80024180.58779934},{"name":"Using undefined assignment (proto: null)","samples":9175144,"opsSec":18347798.864214882},{"name":"Using undefined property (cached proto: null)","samples":39772583,"opsSec":79131904.3773038}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|345,508|173024|
|NodeError|316,533|158314|
|NodeError Range|293,243|146853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:16:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":173024,"opsSec":345508.0331356549},{"name":"NodeError","samples":158314,"opsSec":316533.50461979886},{"name":"NodeError Range","samples":146853,"opsSec":293243.96656574286}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|63,903,060|32229819|
|using Array.includes (first item)|82,883,929|41454824|
|Using raw comparison|99,384,457|49692236|
|Using raw comparison (first item)|98,873,085|49447212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:18:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":32229819,"opsSec":63903060.744992614},{"name":"using Array.includes (first item)","samples":41454824,"opsSec":82883929.44822793},{"name":"Using raw comparison","samples":49692236,"opsSec":99384457.6886381},{"name":"Using raw comparison (first item)","samples":49447212,"opsSec":98873085.60615681}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,326,858|22168324|
|Using Object.getOwnPropertyNames()|46,203,056|23106063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:21:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":22168324,"opsSec":44326858.05878285},{"name":"Using Object.getOwnPropertyNames()","samples":23106063,"opsSec":46203056.24765247}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,414,535|50212991|
|Length = 10_000 - Array.at|99,275,123|49638429|
|Length = 1_000_000 - Array.at|93,379,959|46697277|
|Length = 100 - Array[length - 1]|98,787,980|49394002|
|Length = 10_000 - Array[length - 1]|98,385,095|49199441|
|Length = 1_000_000 - Array[length - 1]|94,614,830|47316601|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50212991,"opsSec":100414535.34545784},{"name":"Length = 10_000 - Array.at","samples":49638429,"opsSec":99275123.06794927},{"name":"Length = 1_000_000 - Array.at","samples":46697277,"opsSec":93379959.08591472},{"name":"Length = 100 - Array[length - 1]","samples":49394002,"opsSec":98787980.88361247},{"name":"Length = 10_000 - Array[length - 1]","samples":49199441,"opsSec":98385095.69008133},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47316601,"opsSec":94614830.63833494}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,654,270|47327141|
|~ (small)|92,282,676|46213417|
|Math.floor (long)|93,770,362|46885186|
|~ (long)|94,333,538|47167366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:28:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47327141,"opsSec":94654270.452179},{"name":"~ (small)","samples":46213417,"opsSec":92282676.64689495},{"name":"Math.floor (long)","samples":46885186,"opsSec":93770362.81050445},{"name":"~ (long)","samples":47167366,"opsSec":94333538.492071}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,328,903|16668278|
|Object.create({})|2,150,646|1083707|
|new Function with empty prototype|72,996,129|36528337|
|Empty class|75,101,141|37552040|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:31:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":16668278,"opsSec":33328903.350501686},{"name":"Object.create({})","samples":1083707,"opsSec":2150646.2755493443},{"name":"new Function with empty prototype","samples":36528337,"opsSec":72996129.25848591},{"name":"Empty class","samples":37552040,"opsSec":75101141.44253764}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,187,149|49093580|
|Using parseInt(x, 10) - big number (10 len)|98,337,856|49205677|
|Using + - small number (2 len)|98,239,841|49119928|
|Using + - big number (10 len)|94,367,110|47194003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:36:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49093580,"opsSec":98187149.59216213},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49205677,"opsSec":98337856.08968286},{"name":"Using + - small number (2 len)","samples":49119928,"opsSec":98239841.85346279},{"name":"Using + - big number (10 len)","samples":47194003,"opsSec":94367110.85684563}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,008,206|504104|
|Using ? operator to avoid rejection|1,041,857|533172|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:37:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":504104,"opsSec":1008206.0763428063},{"name":"Using ? operator to avoid rejection","samples":533172,"opsSec":1041857.9359800682}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|93,611,832|46811140|
|Raw usage underscore usage|91,371,848|46406212|
|Manipulating private properties using #|94,101,609|47307501|
|Manipulating private properties using underscore(_)|94,696,442|47355050|
|Manipulating private properties using Symbol|94,695,868|47347942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:40:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":46811140,"opsSec":93611832.73224342},{"name":"Raw usage underscore usage","samples":46406212,"opsSec":91371848.67231546},{"name":"Manipulating private properties using #","samples":47307501,"opsSec":94101609.96448456},{"name":"Manipulating private properties using underscore(_)","samples":47355050,"opsSec":94696442.50027683},{"name":"Manipulating private properties using Symbol","samples":47347942,"opsSec":94695868.46987757}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,148,758|4081898|
|Adding property in the object creation - small object|8,218,589|4109299|
|Adding property after the function creation - small class|244,654|125400|
|Adding property in the function creation - small class|265,962|132982|
|Adding property after the class creation - small class|265,497|132752|
|Adding property in the class creation - small class|270,111|135059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:43:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4081898,"opsSec":8148758.899632295},{"name":"Adding property in the object creation - small object","samples":4109299,"opsSec":8218589.107486585},{"name":"Adding property after the function creation - small class","samples":125400,"opsSec":244654.8896176058},{"name":"Adding property in the function creation - small class","samples":132982,"opsSec":265962.94625480694},{"name":"Adding property after the class creation - small class","samples":132752,"opsSec":265497.1156597909},{"name":"Adding property in the class creation - small class","samples":135059,"opsSec":270111.21534649294}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,990,656|47995825|
|Getter|51,353,924|25676973|
|Method|101,157,798|50578923|
|DefineProperty (getter)|96,942,918|48471467|
|DefineProperty (getter & enumerable=false)|51,845,381|25928467|
|DefineProperty (getter & configurable=false)|96,915,206|48457612|
|DefineProperty (getter & enumerable=false & configurable=false)|51,688,510|25844260|
|DefineProperty (writable)|95,805,241|47902737|
|DefineProperty (writable & enumerable=false)|95,714,132|48151318|
|DefineProperty (writable & enumerable=false & configurable=false)|95,673,817|47847766|
|DefineProperties (getter)|51,577,980|25876147|
|DefineProperties (getter & enumerable=false)|51,863,482|25931747|
|DefineProperties (getter & enumerable=false & configurable=false)|48,460,725|24235074|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:46:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":47995825,"opsSec":95990656.8806639},{"name":"Getter","samples":25676973,"opsSec":51353924.73947515},{"name":"Method","samples":50578923,"opsSec":101157798.05120373},{"name":"DefineProperty (getter)","samples":48471467,"opsSec":96942918.87690465},{"name":"DefineProperty (getter & enumerable=false)","samples":25928467,"opsSec":51845381.397353984},{"name":"DefineProperty (getter & configurable=false)","samples":48457612,"opsSec":96915206.74909319},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25844260,"opsSec":51688510.282560065},{"name":"DefineProperty (writable)","samples":47902737,"opsSec":95805241.76809394},{"name":"DefineProperty (writable & enumerable=false)","samples":48151318,"opsSec":95714132.8683523},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47847766,"opsSec":95673817.4876877},{"name":"DefineProperties (getter)","samples":25876147,"opsSec":51577980.54118321},{"name":"DefineProperties (getter & enumerable=false)","samples":25931747,"opsSec":51863482.07139913},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24235074,"opsSec":48460725.49037856}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,424,404|49712212|
|Setter|11,644,288|5822147|
|Method|89,598,010|44799012|
|DefineProperty (setter)|98,141,055|49077339|
|DefineProperty (setter & enumerable=false)|11,532,394|5766270|
|DefineProperty (setter & configurable=false)|11,461,213|5730610|
|DefineProperty (setter & enumerable=false & configurable=false)|11,616,825|5808418|
|DefineProperty (writable)|100,827,997|50414010|
|DefineProperty (writable & enumerable=false)|101,053,833|50526925|
|DefineProperty (writable & enumerable=false & configurable=false)|100,349,180|50175667|
|DefineProperties (setter)|99,696,106|50267877|
|DefineProperties (setter & enumerable=false)|11,760,366|5880583|
|DefineProperties (setter & enumerable=false & configurable=false)|11,894,983|5947492|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:51:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":49712212,"opsSec":99424404.51281671},{"name":"Setter","samples":5822147,"opsSec":11644288.014835961},{"name":"Method","samples":44799012,"opsSec":89598010.9186904},{"name":"DefineProperty (setter)","samples":49077339,"opsSec":98141055.43265961},{"name":"DefineProperty (setter & enumerable=false)","samples":5766270,"opsSec":11532394.553439893},{"name":"DefineProperty (setter & configurable=false)","samples":5730610,"opsSec":11461213.467108322},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5808418,"opsSec":11616825.266053453},{"name":"DefineProperty (writable)","samples":50414010,"opsSec":100827997.41452856},{"name":"DefineProperty (writable & enumerable=false)","samples":50526925,"opsSec":101053833.42717132},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50175667,"opsSec":100349180.30589227},{"name":"DefineProperties (setter)","samples":50267877,"opsSec":99696106.21533482},{"name":"DefineProperties (setter & enumerable=false)","samples":5880583,"opsSec":11760366.153977135},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5947492,"opsSec":11894983.167351179}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,399,716|1700215|
|Using replaceAll()|3,199,860|1604799|
|Using replaceAll(//g)|3,090,791|1545397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:55:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1700215,"opsSec":3399716.494699824},{"name":"Using replaceAll()","samples":1604799,"opsSec":3199860.6193442554},{"name":"Using replaceAll(//g)","samples":1545397,"opsSec":3090791.4284615316}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,156,880|12579738|
|{ ...object, __proto__: null }|2,565,735|1282878|
|{ ...object, newProp: true }|23,277,621|11638814|
|structuredClone|293,182|146599|
|JSON.parse + JSON.stringify|308,584|154314|
|loop + object.keys starting with {}|1,705,771|852886|
|loop + object.keys starting with { __proto__: null }|926,134|463128|
|loop + object.keys starting with { randomProp: true }|662,971|331548|
|object.keys + reduce(FN, {})|1,766,141|883155|
|object.keys + reduce(FN, { __proto__: null })|962,449|481429|
|object.keys + reduce(FN, { newProp: true })|659,504|329877|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:59:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12579738,"opsSec":25156880.715557862},{"name":"{ ...object, __proto__: null }","samples":1282878,"opsSec":2565735.864104938},{"name":"{ ...object, newProp: true }","samples":11638814,"opsSec":23277621.85470783},{"name":"structuredClone","samples":146599,"opsSec":293182.23207319464},{"name":"JSON.parse + JSON.stringify","samples":154314,"opsSec":308584.2125174122},{"name":"loop + object.keys starting with {}","samples":852886,"opsSec":1705771.696372638},{"name":"loop + object.keys starting with { __proto__: null }","samples":463128,"opsSec":926134.0596329045},{"name":"loop + object.keys starting with { randomProp: true }","samples":331548,"opsSec":662971.1771127156},{"name":"object.keys + reduce(FN, {})","samples":883155,"opsSec":1766141.5630791292},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":481429,"opsSec":962449.3594011881},{"name":"object.keys + reduce(FN, { newProp: true })","samples":329877,"opsSec":659504.4646147327}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|315,804|157926|
|Sort using first char|1,346,031|673017|
|Sort using localeCompare|1,253,989|627062|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:00:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Sort using default","samples":157926,"opsSec":315804.19735025545},{"name":"Sort using first char","samples":673017,"opsSec":1346031.490997301},{"name":"Sort using localeCompare","samples":627062,"opsSec":1253989.8005195279}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,767|884|
|{...smallObject} - Total keys: 2|41,034,695|20524966|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,071|536|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,599|3301|
|{ ...bigObject, ...anotherBigObject }|1,118|560|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,882,653|5941329|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,389,999|14197992|
|{ ...smallObject, ...anotherSmallObject }|20,530,879|10265508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:03:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":884,"opsSec":1767.473773568343},{"name":"{...smallObject} - Total keys: 2","samples":20524966,"opsSec":41034695.161131546},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":536,"opsSec":1071.7318376899643},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3301,"opsSec":6599.7372932684775},{"name":"{ ...bigObject, ...anotherBigObject }","samples":560,"opsSec":1118.9541158258457},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5941329,"opsSec":11882653.033051033},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14197992,"opsSec":28389999.38812898},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10265508,"opsSec":20530879.79814342}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,828|915|
|streams.web.Readable reading 1e3 * "some data"|1,703|854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:07:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":915,"opsSec":1828.842675435816},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":854,"opsSec":1703.3630573910045}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,860|5431|
|streams.web.WritableStream writing 1e3 * "some data"|1,699|855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:12:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5431,"opsSec":10860.30368572611},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":855,"opsSec":1699.9766520633568}]}-->

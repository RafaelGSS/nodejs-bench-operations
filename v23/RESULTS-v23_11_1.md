## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,238,029|44620971|
|Using dot notation|63,624,208|31855939|
|Using define property (writable)|4,764,241|2382122|
|Using define property initialized (writable)|7,050,322|3528097|
|Using define property (getter)|2,419,700|1209851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:11:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44620971,"opsSec":89238029.26936865},{"name":"Using dot notation","samples":31855939,"opsSec":63624208.930031136},{"name":"Using define property (writable)","samples":2382122,"opsSec":4764241.332024855},{"name":"Using define property initialized (writable)","samples":3528097,"opsSec":7050322.533695874},{"name":"Using define property (getter)","samples":1209851,"opsSec":2419700.1513490845}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.342ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|31.779ms
new Array(length)|1,000,000|7.626ms
array.push|10,000,000|262.749ms
new Array(length)|10,000,000|69.69ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.353ms
new Array(length)|10,000|0.119ms
array.push|1,000,000|18.15ms
new Array(length)|1,000,000|11.164ms
array.push|10,000,000|224.835ms
new Array(length)|10,000,000|65.885ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|260|132|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:19:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":132,"opsSec":260.54897103674676},{"name":"Array.from","samples":12,"opsSec":22.774712712656743}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,377|2208|
|new Blob (1024)|579|294|
|text (128)|4,156|2084|
|text (1024)|514|258|
|arrayBuffer (128)|4,078|2041|
|arrayBuffer (1024)|512|257|
|slice (0, 64)|148,771|81994|
|slice (0, 512)|31,803|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2208,"opsSec":4377.806336443236},{"name":"new Blob (1024)","samples":294,"opsSec":579.9863632185904},{"name":"text (128)","samples":2084,"opsSec":4156.7828466661795},{"name":"text (1024)","samples":258,"opsSec":514.1884247109574},{"name":"arrayBuffer (128)","samples":2041,"opsSec":4078.4595952653},{"name":"arrayBuffer (1024)","samples":257,"opsSec":512.8189369626601},{"name":"slice (0, 64)","samples":81994,"opsSec":148771.88935972087},{"name":"slice (0, 512)","samples":15910,"opsSec":31803.61299758132}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.19 ms|1|
|Gzip|135.62 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:33:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134190953},{"name":"Gzip","samples":1,"totalTime":0.135618911}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,804|3403|
|crypto.verify('RSA-SHA256')|6,833|3417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3403,"opsSec":6804.146768153051},{"name":"crypto.verify('RSA-SHA256')","samples":3417,"opsSec":6833.136100269116}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,212,236|606186|
|fromUnixToISOString(new Date())|2,154,696|1095128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":606186,"opsSec":1212236.389539575},{"name":"fromUnixToISOString(new Date())","samples":1095128,"opsSec":2154696.339567715}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,571|10286|
|Intl.DateTimeFormat().format(new Date())|20,122|10067|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,799|9900|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,987|9494|
|Reusing Intl.DateTimeFormat()|643,910|322113|
|Date.toLocaleDateString()|1,106,925|553464|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,634|12318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10286,"opsSec":20571.048794703733},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10067,"opsSec":20122.396339661147},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9900,"opsSec":19799.63826060898},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9494,"opsSec":18987.903161693874},{"name":"Reusing Intl.DateTimeFormat()","samples":322113,"opsSec":643910.1633526959},{"name":"Date.toLocaleDateString()","samples":553464,"opsSec":1106925.6621730016},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12318,"opsSec":24634.7060866975}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|900,461|450282|
|Using brackets {}|896,553|448278|
|Using '' + |897,772|448981|
|Using date.toString()|975,127|487694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":450282,"opsSec":900461.5923040303},{"name":"Using brackets {}","samples":448278,"opsSec":896553.5703398244},{"name":"Using '' + ","samples":448981,"opsSec":897772.6166620603},{"name":"Using date.toString()","samples":487694,"opsSec":975127.0969441958}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,017,764|2009144|
|Using delete property (proto: null)|17,460,846|8730636|
|Using delete property (cached proto: null)|4,018,646|2009683|
|Using undefined assignment|75,383,320|37691765|
|Using undefined assignment (proto: null)|19,465,831|9732917|
|Using undefined property (cached proto: null)|75,492,084|37746048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2009144,"opsSec":4017764.7182875606},{"name":"Using delete property (proto: null)","samples":8730636,"opsSec":17460846.02520037},{"name":"Using delete property (cached proto: null)","samples":2009683,"opsSec":4018646.9515382554},{"name":"Using undefined assignment","samples":37691765,"opsSec":75383320.28360298},{"name":"Using undefined assignment (proto: null)","samples":9732917,"opsSec":19465831.70303186},{"name":"Using undefined property (cached proto: null)","samples":37746048,"opsSec":75492084.82717144}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|334,673|167339|
|NodeError|311,394|155699|
|NodeError Range|302,886|151445|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:04:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":167339,"opsSec":334673.42300626694},{"name":"NodeError","samples":155699,"opsSec":311394.08951302385},{"name":"NodeError Range","samples":151445,"opsSec":302886.9135823506}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|65,531,218|32765636|
|using Array.includes (first item)|77,987,443|38995587|
|Using raw comparison|88,621,782|44310908|
|Using raw comparison (first item)|92,772,743|46386402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:11:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":32765636,"opsSec":65531218.52652568},{"name":"using Array.includes (first item)","samples":38995587,"opsSec":77987443.39265786},{"name":"Using raw comparison","samples":44310908,"opsSec":88621782.85545321},{"name":"Using raw comparison (first item)","samples":46386402,"opsSec":92772743.32662587}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,506,068|20753095|
|Using Object.getOwnPropertyNames()|42,590,254|21295133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:14:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20753095,"opsSec":41506068.22119584},{"name":"Using Object.getOwnPropertyNames()","samples":21295133,"opsSec":42590254.24508983}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,835,852|46955033|
|Length = 10_000 - Array.at|93,061,999|46531245|
|Length = 1_000_000 - Array.at|96,117,218|48058621|
|Length = 100 - Array[length - 1]|93,953,299|46976675|
|Length = 10_000 - Array[length - 1]|89,280,026|44640068|
|Length = 1_000_000 - Array[length - 1]|93,626,842|46817380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:20:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46955033,"opsSec":93835852.7254531},{"name":"Length = 10_000 - Array.at","samples":46531245,"opsSec":93061999.56326231},{"name":"Length = 1_000_000 - Array.at","samples":48058621,"opsSec":96117218.73963307},{"name":"Length = 100 - Array[length - 1]","samples":46976675,"opsSec":93953299.26521839},{"name":"Length = 10_000 - Array[length - 1]","samples":44640068,"opsSec":89280026.18556778},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46817380,"opsSec":93626842.72692531}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,195,406|48619251|
|~ (small)|97,206,396|48608035|
|Math.floor (long)|97,325,993|48663011|
|~ (long)|97,185,638|48592839|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48619251,"opsSec":97195406.91730857},{"name":"~ (small)","samples":48608035,"opsSec":97206396.60264848},{"name":"Math.floor (long)","samples":48663011,"opsSec":97325993.38615796},{"name":"~ (long)","samples":48592839,"opsSec":97185638.15388836}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,380,783|14197620|
|Object.create({})|2,095,689|1063926|
|new Function with empty prototype|74,722,411|37375367|
|Empty class|73,890,771|36948303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:28:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14197620,"opsSec":28380783.22635546},{"name":"Object.create({})","samples":1063926,"opsSec":2095689.0122515273},{"name":"new Function with empty prototype","samples":37375367,"opsSec":74722411.06786402},{"name":"Empty class","samples":36948303,"opsSec":73890771.88021542}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,281,732|48640873|
|Using parseInt(x, 10) - big number (10 len)|97,132,358|48568415|
|Using + - small number (2 len)|96,970,077|48490574|
|Using + - big number (10 len)|96,749,181|48386252|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48640873,"opsSec":97281732.18599403},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48568415,"opsSec":97132358.80325957},{"name":"Using + - small number (2 len)","samples":48490574,"opsSec":96970077.70198938},{"name":"Using + - big number (10 len)","samples":48386252,"opsSec":96749181.25536987}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,036,301|528042|
|Using ? operator to avoid rejection|1,089,873|551322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:38:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":528042,"opsSec":1036301.6298842964},{"name":"Using ? operator to avoid rejection","samples":551322,"opsSec":1089873.727204109}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|90,204,453|45103111|
|Raw usage underscore usage|92,102,421|46051226|
|Manipulating private properties using #|94,478,159|47239092|
|Manipulating private properties using underscore(_)|94,769,581|47384798|
|Manipulating private properties using Symbol|94,034,896|47017459|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:40:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":45103111,"opsSec":90204453.631891},{"name":"Raw usage underscore usage","samples":46051226,"opsSec":92102421.60620087},{"name":"Manipulating private properties using #","samples":47239092,"opsSec":94478159.62463482},{"name":"Manipulating private properties using underscore(_)","samples":47384798,"opsSec":94769581.0264062},{"name":"Manipulating private properties using Symbol","samples":47017459,"opsSec":94034896.74811333}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,827,549|3913779|
|Adding property in the object creation - small object|7,817,376|3908690|
|Adding property after the function creation - small class|279,115|139558|
|Adding property in the function creation - small class|290,782|145396|
|Adding property after the class creation - small class|272,931|138188|
|Adding property in the class creation - small class|274,033|140347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:46:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3913779,"opsSec":7827549.076594053},{"name":"Adding property in the object creation - small object","samples":3908690,"opsSec":7817376.435276345},{"name":"Adding property after the function creation - small class","samples":139558,"opsSec":279115.85709268117},{"name":"Adding property in the function creation - small class","samples":145396,"opsSec":290782.71356325963},{"name":"Adding property after the class creation - small class","samples":138188,"opsSec":272931.4608561836},{"name":"Adding property in the class creation - small class","samples":140347,"opsSec":274033.4241582366}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|96,978,760|48536559|
|Getter|48,820,822|24418544|
|Method|94,319,549|47179200|
|DefineProperty (getter)|97,094,009|48549310|
|DefineProperty (getter & enumerable=false)|50,034,705|25019175|
|DefineProperty (getter & configurable=false)|97,454,692|48728089|
|DefineProperty (getter & enumerable=false & configurable=false)|48,046,932|24033189|
|DefineProperty (writable)|91,928,259|45964554|
|DefineProperty (writable & enumerable=false)|97,437,896|48725474|
|DefineProperty (writable & enumerable=false & configurable=false)|89,603,850|44806935|
|DefineProperties (getter)|49,841,606|24932019|
|DefineProperties (getter & enumerable=false)|49,868,304|24936383|
|DefineProperties (getter & enumerable=false & configurable=false)|50,060,452|25043179|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:54:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":48536559,"opsSec":96978760.18778506},{"name":"Getter","samples":24418544,"opsSec":48820822.366612114},{"name":"Method","samples":47179200,"opsSec":94319549.02320094},{"name":"DefineProperty (getter)","samples":48549310,"opsSec":97094009.39386994},{"name":"DefineProperty (getter & enumerable=false)","samples":25019175,"opsSec":50034705.57211554},{"name":"DefineProperty (getter & configurable=false)","samples":48728089,"opsSec":97454692.79048188},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24033189,"opsSec":48046932.54155565},{"name":"DefineProperty (writable)","samples":45964554,"opsSec":91928259.31830998},{"name":"DefineProperty (writable & enumerable=false)","samples":48725474,"opsSec":97437896.38865453},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44806935,"opsSec":89603850.3182497},{"name":"DefineProperties (getter)","samples":24932019,"opsSec":49841606.58558972},{"name":"DefineProperties (getter & enumerable=false)","samples":24936383,"opsSec":49868304.78145424},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25043179,"opsSec":50060452.016444206}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|96,511,273|48255846|
|Setter|11,536,086|5769325|
|Method|88,337,249|44169492|
|DefineProperty (setter)|95,271,421|47794785|
|DefineProperty (setter & enumerable=false)|11,655,142|5828435|
|DefineProperty (setter & configurable=false)|11,498,724|5749634|
|DefineProperty (setter & enumerable=false & configurable=false)|11,438,430|5719218|
|DefineProperty (writable)|96,560,226|48287732|
|DefineProperty (writable & enumerable=false)|95,612,288|47810045|
|DefineProperty (writable & enumerable=false & configurable=false)|97,688,638|48845294|
|DefineProperties (setter)|95,683,797|47841968|
|DefineProperties (setter & enumerable=false)|11,551,361|5777420|
|DefineProperties (setter & enumerable=false & configurable=false)|11,518,938|5760307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:58:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":48255846,"opsSec":96511273.527118},{"name":"Setter","samples":5769325,"opsSec":11536086.243265469},{"name":"Method","samples":44169492,"opsSec":88337249.93978369},{"name":"DefineProperty (setter)","samples":47794785,"opsSec":95271421.75744025},{"name":"DefineProperty (setter & enumerable=false)","samples":5828435,"opsSec":11655142.311634576},{"name":"DefineProperty (setter & configurable=false)","samples":5749634,"opsSec":11498724.639265895},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5719218,"opsSec":11438430.601060757},{"name":"DefineProperty (writable)","samples":48287732,"opsSec":96560226.79621156},{"name":"DefineProperty (writable & enumerable=false)","samples":47810045,"opsSec":95612288.22850513},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48845294,"opsSec":97688638.91627635},{"name":"DefineProperties (setter)","samples":47841968,"opsSec":95683797.83259593},{"name":"DefineProperties (setter & enumerable=false)","samples":5777420,"opsSec":11551361.861840675},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5760307,"opsSec":11518938.340039674}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,234,692|1617668|
|Using replaceAll()|3,066,371|1540401|
|Using replaceAll(//g)|2,978,072|1489039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:03:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1617668,"opsSec":3234692.6067017564},{"name":"Using replaceAll()","samples":1540401,"opsSec":3066371.300958618},{"name":"Using replaceAll(//g)","samples":1489039,"opsSec":2978072.72881127}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,862,128|12431067|
|{ ...object, __proto__: null }|2,474,418|1237210|
|{ ...object, newProp: true }|22,591,347|11297778|
|structuredClone|284,127|142091|
|JSON.parse + JSON.stringify|293,720|146906|
|loop + object.keys starting with {}|1,673,342|836709|
|loop + object.keys starting with { __proto__: null }|844,304|422153|
|loop + object.keys starting with { randomProp: true }|620,512|310313|
|object.keys + reduce(FN, {})|1,714,301|857398|
|object.keys + reduce(FN, { __proto__: null })|866,541|433294|
|object.keys + reduce(FN, { newProp: true })|595,638|297859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:07:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12431067,"opsSec":24862128.48060748},{"name":"{ ...object, __proto__: null }","samples":1237210,"opsSec":2474418.347088544},{"name":"{ ...object, newProp: true }","samples":11297778,"opsSec":22591347.096487843},{"name":"structuredClone","samples":142091,"opsSec":284127.82875642495},{"name":"JSON.parse + JSON.stringify","samples":146906,"opsSec":293720.31579086656},{"name":"loop + object.keys starting with {}","samples":836709,"opsSec":1673342.1507469912},{"name":"loop + object.keys starting with { __proto__: null }","samples":422153,"opsSec":844304.3215230089},{"name":"loop + object.keys starting with { randomProp: true }","samples":310313,"opsSec":620512.6211748841},{"name":"object.keys + reduce(FN, {})","samples":857398,"opsSec":1714301.660544562},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":433294,"opsSec":866541.4944510758},{"name":"object.keys + reduce(FN, { newProp: true })","samples":297859,"opsSec":595638.5001293877}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|316,551|158276|
|Sort using first char|1,337,124|668787|
|Sort using localeCompare|1,241,180|620738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:16:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":158276,"opsSec":316551.3599331502},{"name":"Sort using first char","samples":668787,"opsSec":1337124.2555823864},{"name":"Sort using localeCompare","samples":620738,"opsSec":1241180.762814311}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,894|1449|
|{...smallObject} - Total keys: 2|34,125,546|17063575|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,025|513|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,622|3312|
|{ ...bigObject, ...anotherBigObject }|1,379|692|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,813,953|5906980|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,208,437|13104228|
|{ ...smallObject, ...anotherSmallObject }|19,107,375|9563880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:16:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1449,"opsSec":2894.6255439581223},{"name":"{...smallObject} - Total keys: 2","samples":17063575,"opsSec":34125546.167581216},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":513,"opsSec":1025.7391565839591},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3312,"opsSec":6622.939389240329},{"name":"{ ...bigObject, ...anotherBigObject }","samples":692,"opsSec":1379.3161870577985},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5906980,"opsSec":11813953.998511368},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13104228,"opsSec":26208437.863761},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9563880,"opsSec":19107375.98379722}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,909|955|
|streams.web.Readable reading 1e3 * "some data"|1,564|783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:22:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":955,"opsSec":1909.0658253652791},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":783,"opsSec":1564.7315503686937}]}-->

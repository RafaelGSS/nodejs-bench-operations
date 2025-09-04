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

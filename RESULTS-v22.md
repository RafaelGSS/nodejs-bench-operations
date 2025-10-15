## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|107,861,524|53993303|
|Using dot notation|79,568,169|39784201|
|Using define property (writable)|4,871,497|2435750|
|Using define property initialized (writable)|6,953,717|3476868|
|Using define property (getter)|2,470,401|1237214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:50:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53993303,"opsSec":107861524.59872214},{"name":"Using dot notation","samples":39784201,"opsSec":79568169.18353696},{"name":"Using define property (writable)","samples":2435750,"opsSec":4871497.320676474},{"name":"Using define property initialized (writable)","samples":3476868,"opsSec":6953717.4892040435},{"name":"Using define property (getter)","samples":1237214,"opsSec":2470401.255834595}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.021ms
new Array(length)|100|0.009ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.139ms
array.push|1,000,000|31.367ms
new Array(length)|1,000,000|7.662ms
array.push|10,000,000|256.697ms
new Array(length)|10,000,000|67.059ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.012ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.295ms
new Array(length)|10,000|0.196ms
array.push|1,000,000|23.077ms
new Array(length)|1,000,000|12.069ms
array.push|10,000,000|224.307ms
new Array(length)|10,000,000|67.689ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|151|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:57:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":151,"opsSec":299.5538248935819},{"name":"Array.from","samples":13,"opsSec":24.197684630027563}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,487|2245|
|new Blob (1024)|581|295|
|text (128)|4,153|2077|
|text (1024)|526|264|
|arrayBuffer (128)|4,146|2077|
|arrayBuffer (1024)|524|263|
|slice (0, 64)|251,409|136866|
|slice (0, 512)|34,988|24497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:04:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2245,"opsSec":4487.528879397156},{"name":"new Blob (1024)","samples":295,"opsSec":581.1122713438942},{"name":"text (128)","samples":2077,"opsSec":4153.88183036969},{"name":"text (1024)","samples":264,"opsSec":526.402460127541},{"name":"arrayBuffer (128)","samples":2077,"opsSec":4146.341185391592},{"name":"arrayBuffer (1024)","samples":263,"opsSec":524.0244550537192},{"name":"slice (0, 64)","samples":136866,"opsSec":251409.94318885845},{"name":"slice (0, 512)","samples":24497,"opsSec":34988.952170865094}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.32 ms|1|
|Gzip|133.51 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:07:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132318805},{"name":"Gzip","samples":1,"totalTime":0.133513614}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,776|10889|
|crypto.verify('RSA-SHA256')|21,149|10622|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:15:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10889,"opsSec":21776.01925328872},{"name":"crypto.verify('RSA-SHA256')","samples":10622,"opsSec":21149.03263763237}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,517,437|758923|
|fromUnixToISOString(new Date())|2,138,746|1069548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":758923,"opsSec":1517437.712139421},{"name":"fromUnixToISOString(new Date())","samples":1069548,"opsSec":2138746.190950501}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,915|10458|
|Intl.DateTimeFormat().format(new Date())|19,893|9947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,051|10026|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,015|9511|
|Reusing Intl.DateTimeFormat()|443,872|222456|
|Date.toLocaleDateString()|963,252|481650|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,967|12484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:23:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10458,"opsSec":20915.9405987287},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9947,"opsSec":19893.123986392136},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10026,"opsSec":20051.700186978807},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9511,"opsSec":19015.44841740227},{"name":"Reusing Intl.DateTimeFormat()","samples":222456,"opsSec":443872.3754384194},{"name":"Date.toLocaleDateString()","samples":481650,"opsSec":963252.1398541791},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12484,"opsSec":24967.711822670142}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,018,299|509150|
|Using brackets {}|1,050,992|525632|
|Using '' + |1,118,375|559241|
|Using date.toString()|1,222,561|611281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":509150,"opsSec":1018299.0977869993},{"name":"Using brackets {}","samples":525632,"opsSec":1050992.5685572592},{"name":"Using '' + ","samples":559241,"opsSec":1118375.6089283226},{"name":"Using date.toString()","samples":611281,"opsSec":1222561.6992498222}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,074,312|2037809|
|Using delete property (proto: null)|18,129,523|9065350|
|Using delete property (cached proto: null)|4,124,346|2062585|
|Using undefined assignment|80,290,402|40146936|
|Using undefined assignment (proto: null)|19,629,782|9814894|
|Using undefined property (cached proto: null)|77,115,188|38557599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:31:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2037809,"opsSec":4074312.3947417294},{"name":"Using delete property (proto: null)","samples":9065350,"opsSec":18129523.067621496},{"name":"Using delete property (cached proto: null)","samples":2062585,"opsSec":4124346.912335399},{"name":"Using undefined assignment","samples":40146936,"opsSec":80290402.00940596},{"name":"Using undefined assignment (proto: null)","samples":9814894,"opsSec":19629782.896256447},{"name":"Using undefined property (cached proto: null)","samples":38557599,"opsSec":77115188.12925592}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|339,539|169770|
|NodeError|316,964|158635|
|NodeError Range|296,021|148298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:34:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":169770,"opsSec":339539.2856093431},{"name":"NodeError","samples":158635,"opsSec":316964.18661347154},{"name":"NodeError Range","samples":148298,"opsSec":296021.979044084}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|74,168,766|37105533|
|using Array.includes (first item)|83,211,763|41607427|
|Using raw comparison|97,231,204|48615606|
|Using raw comparison (first item)|98,367,872|49193854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37105533,"opsSec":74168766.06933534},{"name":"using Array.includes (first item)","samples":41607427,"opsSec":83211763.51510304},{"name":"Using raw comparison","samples":48615606,"opsSec":97231204.02704129},{"name":"Using raw comparison (first item)","samples":49193854,"opsSec":98367872.90537162}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,359,588|20682202|
|Using Object.getOwnPropertyNames()|40,697,881|20349995|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:42:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20682202,"opsSec":41359588.99936787},{"name":"Using Object.getOwnPropertyNames()","samples":20349995,"opsSec":40697881.279979356}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|86,543,397|43432706|
|Length = 10_000 - Array.at|83,846,125|41951136|
|Length = 1_000_000 - Array.at|90,440,939|45222897|
|Length = 100 - Array[length - 1]|81,103,455|40555299|
|Length = 10_000 - Array[length - 1]|82,472,493|41237383|
|Length = 1_000_000 - Array[length - 1]|88,106,628|44053838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:48:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":43432706,"opsSec":86543397.69104846},{"name":"Length = 10_000 - Array.at","samples":41951136,"opsSec":83846125.11308701},{"name":"Length = 1_000_000 - Array.at","samples":45222897,"opsSec":90440939.31125966},{"name":"Length = 100 - Array[length - 1]","samples":40555299,"opsSec":81103455.05650626},{"name":"Length = 10_000 - Array[length - 1]","samples":41237383,"opsSec":82472493.55291264},{"name":"Length = 1_000_000 - Array[length - 1]","samples":44053838,"opsSec":88106628.94082166}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|96,310,801|48155421|
|~ (small)|97,835,516|48929989|
|Math.floor (long)|97,843,478|48925594|
|~ (long)|98,508,969|49255741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:52:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48155421,"opsSec":96310801.74208488},{"name":"~ (small)","samples":48929989,"opsSec":97835516.38151017},{"name":"Math.floor (long)","samples":48925594,"opsSec":97843478.52095342},{"name":"~ (long)","samples":49255741,"opsSec":98508969.0361999}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,811,394|18437205|
|Object.create({})|2,152,923|1076560|
|new Function with empty prototype|104,020,777|52011549|
|Empty class|72,473,083|36239929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:55:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18437205,"opsSec":36811394.92895041},{"name":"Object.create({})","samples":1076560,"opsSec":2152923.3864246584},{"name":"new Function with empty prototype","samples":52011549,"opsSec":104020777.92056926},{"name":"Empty class","samples":36239929,"opsSec":72473083.07124834}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,651,424|49325719|
|Using parseInt(x, 10) - big number (10 len)|98,447,911|49225485|
|Using + - small number (2 len)|98,448,163|49224087|
|Using + - big number (10 len)|98,217,362|49110750|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:00:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49325719,"opsSec":98651424.78070909},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49225485,"opsSec":98447911.02650857},{"name":"Using + - small number (2 len)","samples":49224087,"opsSec":98448163.95828727},{"name":"Using + - big number (10 len)","samples":49110750,"opsSec":98217362.88824043}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,178,242|602493|
|Using ? operator to avoid rejection|1,234,075|617061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:03:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":602493,"opsSec":1178242.950804887},{"name":"Using ? operator to avoid rejection","samples":617061,"opsSec":1234075.0483807093}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|96,126,804|48063428|
|Raw usage underscore usage|97,220,224|48610981|
|Manipulating private properties using #|99,595,026|49805529|
|Manipulating private properties using underscore(_)|97,623,821|49549111|
|Manipulating private properties using Symbol|96,590,754|48295386|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:06:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":48063428,"opsSec":96126804.28377928},{"name":"Raw usage underscore usage","samples":48610981,"opsSec":97220224.67458507},{"name":"Manipulating private properties using #","samples":49805529,"opsSec":99595026.98526639},{"name":"Manipulating private properties using underscore(_)","samples":49549111,"opsSec":97623821.14411892},{"name":"Manipulating private properties using Symbol","samples":48295386,"opsSec":96590754.4204827}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,059,698|4053974|
|Adding property in the object creation - small object|8,213,159|4108926|
|Adding property after the function creation - small class|269,563|134802|
|Adding property in the function creation - small class|281,158|140580|
|Adding property after the class creation - small class|272,781|137420|
|Adding property in the class creation - small class|274,067|137038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4053974,"opsSec":8059698.934715285},{"name":"Adding property in the object creation - small object","samples":4108926,"opsSec":8213159.854627691},{"name":"Adding property after the function creation - small class","samples":134802,"opsSec":269563.93740762246},{"name":"Adding property in the function creation - small class","samples":140580,"opsSec":281158.9985116473},{"name":"Adding property after the class creation - small class","samples":137420,"opsSec":272781.6144874232},{"name":"Adding property in the class creation - small class","samples":137038,"opsSec":274067.5258321013}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,920,532|47960274|
|Getter|50,764,603|25382314|
|Method|98,440,356|49221059|
|DefineProperty (getter)|95,944,175|47974174|
|DefineProperty (getter & enumerable=false)|50,460,102|25262768|
|DefineProperty (getter & configurable=false)|94,707,639|47561338|
|DefineProperty (getter & enumerable=false & configurable=false)|50,478,778|25240215|
|DefineProperty (writable)|96,230,090|48115051|
|DefineProperty (writable & enumerable=false)|90,421,600|45210807|
|DefineProperty (writable & enumerable=false & configurable=false)|90,960,741|45480385|
|DefineProperties (getter)|50,699,860|25349935|
|DefineProperties (getter & enumerable=false)|49,955,689|24977849|
|DefineProperties (getter & enumerable=false & configurable=false)|50,029,811|25038814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:18:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47960274,"opsSec":95920532.07719168},{"name":"Getter","samples":25382314,"opsSec":50764603.531461105},{"name":"Method","samples":49221059,"opsSec":98440356.31138346},{"name":"DefineProperty (getter)","samples":47974174,"opsSec":95944175.00405237},{"name":"DefineProperty (getter & enumerable=false)","samples":25262768,"opsSec":50460102.66922532},{"name":"DefineProperty (getter & configurable=false)","samples":47561338,"opsSec":94707639.84639284},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25240215,"opsSec":50478778.33437289},{"name":"DefineProperty (writable)","samples":48115051,"opsSec":96230090.06746882},{"name":"DefineProperty (writable & enumerable=false)","samples":45210807,"opsSec":90421600.25591677},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45480385,"opsSec":90960741.62024862},{"name":"DefineProperties (getter)","samples":25349935,"opsSec":50699860.975424744},{"name":"DefineProperties (getter & enumerable=false)","samples":24977849,"opsSec":49955689.90717823},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25038814,"opsSec":50029811.40738965}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,000,457|49501792|
|Setter|11,825,279|5912753|
|Method|93,913,023|46956518|
|DefineProperty (setter)|99,890,796|49979105|
|DefineProperty (setter & enumerable=false)|11,759,563|5884050|
|DefineProperty (setter & configurable=false)|11,849,235|5924927|
|DefineProperty (setter & enumerable=false & configurable=false)|11,992,603|5996305|
|DefineProperty (writable)|100,264,211|50132111|
|DefineProperty (writable & enumerable=false)|100,733,651|50369285|
|DefineProperty (writable & enumerable=false & configurable=false)|101,126,299|50563157|
|DefineProperties (setter)|97,010,650|48506016|
|DefineProperties (setter & enumerable=false)|11,758,791|5882116|
|DefineProperties (setter & enumerable=false & configurable=false)|11,850,251|5925139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:22:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49501792,"opsSec":99000457.76354474},{"name":"Setter","samples":5912753,"opsSec":11825279.00194428},{"name":"Method","samples":46956518,"opsSec":93913023.7913069},{"name":"DefineProperty (setter)","samples":49979105,"opsSec":99890796.29873869},{"name":"DefineProperty (setter & enumerable=false)","samples":5884050,"opsSec":11759563.145134788},{"name":"DefineProperty (setter & configurable=false)","samples":5924927,"opsSec":11849235.68318358},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5996305,"opsSec":11992603.571964486},{"name":"DefineProperty (writable)","samples":50132111,"opsSec":100264211.17146519},{"name":"DefineProperty (writable & enumerable=false)","samples":50369285,"opsSec":100733651.57872802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50563157,"opsSec":101126299.03330775},{"name":"DefineProperties (setter)","samples":48506016,"opsSec":97010650.76235443},{"name":"DefineProperties (setter & enumerable=false)","samples":5882116,"opsSec":11758791.20730838},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5925139,"opsSec":11850251.834643949}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,405,288|1703005|
|Using replaceAll()|3,209,756|1604895|
|Using replaceAll(//g)|3,083,328|1541665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:27:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1703005,"opsSec":3405288.4193839324},{"name":"Using replaceAll()","samples":1604895,"opsSec":3209756.509400581},{"name":"Using replaceAll(//g)","samples":1541665,"opsSec":3083328.2918361262}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,077,148|12576572|
|{ ...object, __proto__: null }|2,659,544|1329773|
|{ ...object, newProp: true }|23,140,485|11573129|
|structuredClone|293,877|146940|
|JSON.parse + JSON.stringify|310,672|155359|
|loop + object.keys starting with {}|1,720,001|860074|
|loop + object.keys starting with { __proto__: null }|912,203|456165|
|loop + object.keys starting with { randomProp: true }|672,151|336102|
|object.keys + reduce(FN, {})|1,795,307|898042|
|object.keys + reduce(FN, { __proto__: null })|984,592|492536|
|object.keys + reduce(FN, { newProp: true })|698,326|349255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:33:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12576572,"opsSec":25077148.653935898},{"name":"{ ...object, __proto__: null }","samples":1329773,"opsSec":2659544.824481188},{"name":"{ ...object, newProp: true }","samples":11573129,"opsSec":23140485.281979617},{"name":"structuredClone","samples":146940,"opsSec":293877.6572073168},{"name":"JSON.parse + JSON.stringify","samples":155359,"opsSec":310672.40385397593},{"name":"loop + object.keys starting with {}","samples":860074,"opsSec":1720001.5040318987},{"name":"loop + object.keys starting with { __proto__: null }","samples":456165,"opsSec":912203.9589545834},{"name":"loop + object.keys starting with { randomProp: true }","samples":336102,"opsSec":672151.9391437056},{"name":"object.keys + reduce(FN, {})","samples":898042,"opsSec":1795307.9853045843},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":492536,"opsSec":984592.4581816125},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349255,"opsSec":698326.5468228434}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|323,314|161680|
|Sort using first char|1,381,491|691037|
|Sort using localeCompare|1,276,849|638506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:36:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":161680,"opsSec":323314.79477202456},{"name":"Sort using first char","samples":691037,"opsSec":1381491.7730552293},{"name":"Sort using localeCompare","samples":638506,"opsSec":1276849.5668592018}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,780|891|
|{...smallObject} - Total keys: 2|38,592,540|19299979|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,064|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,822|3413|
|{ ...bigObject, ...anotherBigObject }|1,116|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,239,159|6119857|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,583,996|14292898|
|{ ...smallObject, ...anotherSmallObject }|21,204,138|10602289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:41:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":891,"opsSec":1780.3121501416883},{"name":"{...smallObject} - Total keys: 2","samples":19299979,"opsSec":38592540.51371326},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":533,"opsSec":1064.3472156540051},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3413,"opsSec":6822.293802536359},{"name":"{ ...bigObject, ...anotherBigObject }","samples":559,"opsSec":1116.4218015800068},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6119857,"opsSec":12239159.810843766},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14292898,"opsSec":28583996.122932132},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10602289,"opsSec":21204138.650247168}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,959|980|
|streams.web.Readable reading 1e3 * "some data"|1,790|896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:46:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":980,"opsSec":1959.6223494193096},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":896,"opsSec":1790.8989517426705}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,272|4644|
|streams.web.WritableStream writing 1e3 * "some data"|1,758|880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:50:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4644,"opsSec":9272.628226376699},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":880,"opsSec":1758.3747201791405}]}-->

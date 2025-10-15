## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|85,107,840|42559686|
|Using dot notation|75,180,168|37656450|
|Using define property (writable)|3,841,248|1920773|
|Using define property initialized (writable)|5,572,328|2787454|
|Using define property (getter)|2,067,297|1034840|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":42559686,"opsSec":85107840.05788785},{"name":"Using dot notation","samples":37656450,"opsSec":75180168.2101423},{"name":"Using define property (writable)","samples":1920773,"opsSec":3841248.7180792107},{"name":"Using define property initialized (writable)","samples":2787454,"opsSec":5572328.179222865},{"name":"Using define property (getter)","samples":1034840,"opsSec":2067297.25798801}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.01ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.39ms
new Array(length)|10,000|0.142ms
array.push|1,000,000|27.155ms
new Array(length)|1,000,000|8.473ms
array.push|10,000,000|308.031ms
new Array(length)|10,000,000|52.517ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.256ms
new Array(length)|10,000|3.174ms
array.push|1,000,000|17.941ms
new Array(length)|1,000,000|12.262ms
array.push|10,000,000|229.995ms
new Array(length)|10,000,000|60.956ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|117|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:56:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":117,"opsSec":232.4418973333304},{"name":"Array.from","samples":11,"opsSec":21.216431239533946}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,033|2019|
|new Blob (1024)|524|264|
|text (128)|47,144|23584|
|text (1024)|28,121|14070|
|arrayBuffer (128)|46,590|23296|
|arrayBuffer (1024)|32,584|16293|
|slice (0, 64)|89,004|46780|
|slice (0, 512)|51,607|26288|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:03:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2019,"opsSec":4033.5878760361493},{"name":"new Blob (1024)","samples":264,"opsSec":524.7235297312287},{"name":"text (128)","samples":23584,"opsSec":47144.42184887841},{"name":"text (1024)","samples":14070,"opsSec":28121.33598179423},{"name":"arrayBuffer (128)","samples":23296,"opsSec":46590.28557067157},{"name":"arrayBuffer (1024)","samples":16293,"opsSec":32584.712578006045},{"name":"slice (0, 64)","samples":46780,"opsSec":89004.64896700582},{"name":"slice (0, 512)","samples":26288,"opsSec":51607.505376408386}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.92 ms|1|
|Gzip|133.90 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:07:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133920428},{"name":"Gzip","samples":1,"totalTime":0.133899731}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,715|3358|
|crypto.verify('RSA-SHA256')|6,787|3394|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:14:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3358,"opsSec":6715.13205575153},{"name":"crypto.verify('RSA-SHA256')","samples":3394,"opsSec":6787.727527041609}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,664,742|1332508|
|fromUnixToISOString(new Date())|2,115,938|1057971|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:16:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1332508,"opsSec":2664742.464186051},{"name":"fromUnixToISOString(new Date())","samples":1057971,"opsSec":2115938.7033675006}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,236|9145|
|Intl.DateTimeFormat().format(new Date())|17,634|8820|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,207|9104|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,223|8825|
|Reusing Intl.DateTimeFormat()|352,442|176223|
|Date.toLocaleDateString()|688,039|344020|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,451|10726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:22:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9145,"opsSec":18236.05566842246},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8820,"opsSec":17634.265407426567},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9104,"opsSec":18207.36277871747},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8825,"opsSec":17223.87294367572},{"name":"Reusing Intl.DateTimeFormat()","samples":176223,"opsSec":352442.7180534095},{"name":"Date.toLocaleDateString()","samples":344020,"opsSec":688039.6821256669},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10726,"opsSec":21451.110508251662}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,963|525483|
|Using brackets {}|1,052,623|526312|
|Using '' + |1,044,849|522425|
|Using date.toString()|1,144,181|572092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:26:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":525483,"opsSec":1050963.6416375882},{"name":"Using brackets {}","samples":526312,"opsSec":1052623.5010564607},{"name":"Using '' + ","samples":522425,"opsSec":1044849.4566782826},{"name":"Using date.toString()","samples":572092,"opsSec":1144181.9336074279}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,314,461|1657483|
|Using delete property (proto: null)|18,368,072|9184037|
|Using delete property (cached proto: null)|3,326,971|1663868|
|Using undefined assignment|82,284,580|41152657|
|Using undefined assignment (proto: null)|20,728,909|10366216|
|Using undefined property (cached proto: null)|80,831,180|40415636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:29:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1657483,"opsSec":3314461.4196513183},{"name":"Using delete property (proto: null)","samples":9184037,"opsSec":18368072.493818056},{"name":"Using delete property (cached proto: null)","samples":1663868,"opsSec":3326971.4353483855},{"name":"Using undefined assignment","samples":41152657,"opsSec":82284580.42513196},{"name":"Using undefined assignment (proto: null)","samples":10366216,"opsSec":20728909.494951706},{"name":"Using undefined property (cached proto: null)","samples":40415636,"opsSec":80831180.17577931}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|295,088|147545|
|NodeError|277,167|138601|
|NodeError Range|261,261|130669|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:35:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":147545,"opsSec":295088.01346749335},{"name":"NodeError","samples":138601,"opsSec":277167.058103319},{"name":"NodeError Range","samples":130669,"opsSec":261261.4247989143}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,357,583|35680449|
|using Array.includes (first item)|85,662,012|42863838|
|Using raw comparison|100,160,207|50082242|
|Using raw comparison (first item)|105,396,526|52703079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35680449,"opsSec":71357583.01212358},{"name":"using Array.includes (first item)","samples":42863838,"opsSec":85662012.12725191},{"name":"Using raw comparison","samples":50082242,"opsSec":100160207.35946618},{"name":"Using raw comparison (first item)","samples":52703079,"opsSec":105396526.65460126}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,883,462|23441871|
|Using Object.getOwnPropertyNames()|47,344,113|23675580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:42:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":23441871,"opsSec":46883462.574563056},{"name":"Using Object.getOwnPropertyNames()","samples":23675580,"opsSec":47344113.491524376}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,256,550|10634102|
|Length = 10_000 - Array.at|21,438,171|10719091|
|Length = 1_000_000 - Array.at|20,769,939|10384975|
|Length = 100 - Array[length - 1]|97,863,921|48931974|
|Length = 10_000 - Array[length - 1]|98,556,787|49283687|
|Length = 1_000_000 - Array[length - 1]|100,005,561|50006743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:46:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10634102,"opsSec":21256550.521307707},{"name":"Length = 10_000 - Array.at","samples":10719091,"opsSec":21438171.70967758},{"name":"Length = 1_000_000 - Array.at","samples":10384975,"opsSec":20769939.075012047},{"name":"Length = 100 - Array[length - 1]","samples":48931974,"opsSec":97863921.57674119},{"name":"Length = 10_000 - Array[length - 1]","samples":49283687,"opsSec":98556787.02993725},{"name":"Length = 1_000_000 - Array[length - 1]","samples":50006743,"opsSec":100005561.9592926}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|104,881,513|52454518|
|~ (small)|106,256,392|53173834|
|Math.floor (long)|105,266,415|52646415|
|~ (long)|107,192,097|53599276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":52454518,"opsSec":104881513.20306829},{"name":"~ (small)","samples":53173834,"opsSec":106256392.6961101},{"name":"Math.floor (long)","samples":52646415,"opsSec":105266415.91931902},{"name":"~ (long)","samples":53599276,"opsSec":107192097.74941032}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,851,731|18438604|
|Object.create({})|1,325,559|665091|
|new Function with empty prototype|82,090,781|41045894|
|Empty class|84,026,883|42033955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:54:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18438604,"opsSec":36851731.80817331},{"name":"Object.create({})","samples":665091,"opsSec":1325559.0808919712},{"name":"new Function with empty prototype","samples":41045894,"opsSec":82090781.07447934},{"name":"Empty class","samples":42033955,"opsSec":84026883.70597678}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,356,036|46178028|
|Using parseInt(x, 10) - big number (10 len)|16,853,749|8436980|
|Using + - small number (2 len)|99,135,427|50006241|
|Using + - big number (10 len)|105,128,308|52564163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:00:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46178028,"opsSec":92356036.78994435},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8436980,"opsSec":16853749.017885253},{"name":"Using + - small number (2 len)","samples":50006241,"opsSec":99135427.10921851},{"name":"Using + - big number (10 len)","samples":52564163,"opsSec":105128308.54870078}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|694,158|352180|
|Using ? operator to avoid rejection|737,803|368922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:02:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":352180,"opsSec":694158.2532516922},{"name":"Using ? operator to avoid rejection","samples":368922,"opsSec":737803.8929803775}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|83,749,875|41882260|
|Raw usage underscore usage|84,414,687|42249145|
|Manipulating private properties using #|80,664,368|40337234|
|Manipulating private properties using underscore(_)|80,654,545|40337113|
|Manipulating private properties using Symbol|76,536,188|38268149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":41882260,"opsSec":83749875.83171158},{"name":"Raw usage underscore usage","samples":42249145,"opsSec":84414687.21324837},{"name":"Manipulating private properties using #","samples":40337234,"opsSec":80664368.33709797},{"name":"Manipulating private properties using underscore(_)","samples":40337113,"opsSec":80654545.64562611},{"name":"Manipulating private properties using Symbol","samples":38268149,"opsSec":76536188.0940339}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,762,785|1881394|
|Adding property in the object creation - small object|3,774,501|1888554|
|Adding property after the function creation - small class|193,249|96625|
|Adding property in the function creation - small class|195,703|97852|
|Adding property after the class creation - small class|161,107|80554|
|Adding property in the class creation - small class|163,989|84194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:13:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1881394,"opsSec":3762785.3359479825},{"name":"Adding property in the object creation - small object","samples":1888554,"opsSec":3774501.5632395237},{"name":"Adding property after the function creation - small class","samples":96625,"opsSec":193249.2011078026},{"name":"Adding property in the function creation - small class","samples":97852,"opsSec":195703.11503051384},{"name":"Adding property after the class creation - small class","samples":80554,"opsSec":161107.04882398373},{"name":"Adding property in the class creation - small class","samples":84194,"opsSec":163989.55992217164}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|105,983,193|52991611|
|Getter|55,708,142|27855728|
|Method|105,495,760|52825342|
|DefineProperty (getter)|93,687,835|46843931|
|DefineProperty (getter & enumerable=false)|53,908,815|26954415|
|DefineProperty (getter & configurable=false)|107,041,764|53520918|
|DefineProperty (getter & enumerable=false & configurable=false)|57,112,272|28556145|
|DefineProperty (writable)|105,776,167|52890579|
|DefineProperty (writable & enumerable=false)|106,490,572|53246207|
|DefineProperty (writable & enumerable=false & configurable=false)|105,214,187|52607106|
|DefineProperties (getter)|52,065,758|26032886|
|DefineProperties (getter & enumerable=false)|55,699,163|27849599|
|DefineProperties (getter & enumerable=false & configurable=false)|56,428,540|28214301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:15:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":52991611,"opsSec":105983193.17257145},{"name":"Getter","samples":27855728,"opsSec":55708142.03404668},{"name":"Method","samples":52825342,"opsSec":105495760.9431567},{"name":"DefineProperty (getter)","samples":46843931,"opsSec":93687835.39265475},{"name":"DefineProperty (getter & enumerable=false)","samples":26954415,"opsSec":53908815.228984624},{"name":"DefineProperty (getter & configurable=false)","samples":53520918,"opsSec":107041764.28201795},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28556145,"opsSec":57112272.63786911},{"name":"DefineProperty (writable)","samples":52890579,"opsSec":105776167.90350299},{"name":"DefineProperty (writable & enumerable=false)","samples":53246207,"opsSec":106490572.77799667},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52607106,"opsSec":105214187.59030847},{"name":"DefineProperties (getter)","samples":26032886,"opsSec":52065758.4629028},{"name":"DefineProperties (getter & enumerable=false)","samples":27849599,"opsSec":55699163.132323876},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":28214301,"opsSec":56428540.3800339}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,027,089|51013553|
|Setter|10,923,129|5461847|
|Method|103,129,230|51570615|
|DefineProperty (setter)|98,039,892|49020594|
|DefineProperty (setter & enumerable=false)|10,865,104|5438602|
|DefineProperty (setter & configurable=false)|10,981,515|5490762|
|DefineProperty (setter & enumerable=false & configurable=false)|10,969,224|5484614|
|DefineProperty (writable)|101,169,486|50589527|
|DefineProperty (writable & enumerable=false)|100,314,850|50157439|
|DefineProperty (writable & enumerable=false & configurable=false)|101,102,314|50556390|
|DefineProperties (setter)|98,725,793|49368133|
|DefineProperties (setter & enumerable=false)|10,662,406|5331207|
|DefineProperties (setter & enumerable=false & configurable=false)|11,024,061|5512217|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:21:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":51013553,"opsSec":102027089.4716115},{"name":"Setter","samples":5461847,"opsSec":10923129.339751912},{"name":"Method","samples":51570615,"opsSec":103129230.29527977},{"name":"DefineProperty (setter)","samples":49020594,"opsSec":98039892.1087061},{"name":"DefineProperty (setter & enumerable=false)","samples":5438602,"opsSec":10865104.988498379},{"name":"DefineProperty (setter & configurable=false)","samples":5490762,"opsSec":10981515.566196045},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5484614,"opsSec":10969224.775047917},{"name":"DefineProperty (writable)","samples":50589527,"opsSec":101169486.19935115},{"name":"DefineProperty (writable & enumerable=false)","samples":50157439,"opsSec":100314850.51373096},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50556390,"opsSec":101102314.69720107},{"name":"DefineProperties (setter)","samples":49368133,"opsSec":98725793.56272204},{"name":"DefineProperties (setter & enumerable=false)","samples":5331207,"opsSec":10662406.962811405},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5512217,"opsSec":11024061.80562532}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,360,501|1680736|
|Using replaceAll()|2,998,966|1499939|
|Using replaceAll(//g)|2,987,518|1494086|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1680736,"opsSec":3360501.8970333682},{"name":"Using replaceAll()","samples":1499939,"opsSec":2998966.3142404705},{"name":"Using replaceAll(//g)","samples":1494086,"opsSec":2987518.1696984884}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,083,123|10546933|
|{ ...object, __proto__: null }|21,567,109|10790088|
|{ ...object, newProp: true }|614,935|309756|
|structuredClone|251,782|125959|
|JSON.parse + JSON.stringify|193,456|96732|
|loop + object.keys starting with {}|1,276,226|638122|
|loop + object.keys starting with { __proto__: null }|708,865|354434|
|loop + object.keys starting with { randomProp: true }|515,127|257677|
|object.keys + reduce(FN, {})|1,290,403|645369|
|object.keys + reduce(FN, { __proto__: null })|726,650|363328|
|object.keys + reduce(FN, { newProp: true })|506,352|253179|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:32:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10546933,"opsSec":21083123.768943492},{"name":"{ ...object, __proto__: null }","samples":10790088,"opsSec":21567109.825317647},{"name":"{ ...object, newProp: true }","samples":309756,"opsSec":614935.0739111139},{"name":"structuredClone","samples":125959,"opsSec":251782.40862661196},{"name":"JSON.parse + JSON.stringify","samples":96732,"opsSec":193456.1669597998},{"name":"loop + object.keys starting with {}","samples":638122,"opsSec":1276226.574402353},{"name":"loop + object.keys starting with { __proto__: null }","samples":354434,"opsSec":708865.5487429325},{"name":"loop + object.keys starting with { randomProp: true }","samples":257677,"opsSec":515127.5602270753},{"name":"object.keys + reduce(FN, {})","samples":645369,"opsSec":1290403.8628237606},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":363328,"opsSec":726650.9148968976},{"name":"object.keys + reduce(FN, { newProp: true })","samples":253179,"opsSec":506352.72177922813}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|262,442|131308|
|Sort using first char|1,261,680|630916|
|Sort using localeCompare|1,159,046|579654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:36:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":131308,"opsSec":262442.1137287068},{"name":"Sort using first char","samples":630916,"opsSec":1261680.3485454654},{"name":"Sort using localeCompare","samples":579654,"opsSec":1159046.4495781884}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,760|881|
|{...smallObject} - Total keys: 2|41,014,726|20515006|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,049|526|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,270|3136|
|{ ...bigObject, ...anotherBigObject }|1,107|554|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,931,381|5965694|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,565,057|13783084|
|{ ...smallObject, ...anotherSmallObject }|19,262,032|9631101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:39:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":881,"opsSec":1760.6759787067165},{"name":"{...smallObject} - Total keys: 2","samples":20515006,"opsSec":41014726.05768666},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":526,"opsSec":1049.8869010333851},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3136,"opsSec":6270.4188386448095},{"name":"{ ...bigObject, ...anotherBigObject }","samples":554,"opsSec":1107.7229518434062},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5965694,"opsSec":11931381.437740209},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13783084,"opsSec":27565057.128197733},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9631101,"opsSec":19262032.571161505}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,205|1109|
|streams.web.Readable reading 1e3 * "some data"|563|282|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:45:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1109,"opsSec":2205.33549044973},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":282,"opsSec":563.4710257973439}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,210|2606|
|streams.web.WritableStream writing 1e3 * "some data"|1,697|849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:49:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2606,"opsSec":5210.03804555311},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":849,"opsSec":1697.3532371278181}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|99,745,078|50117025|
|Using backtick (`)|100,296,842|50148440|
|Using array.join|10,582,667|5292647|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:52:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50117025,"opsSec":99745078.28082067},{"name":"Using backtick (`)","samples":50148440,"opsSec":100296842.68957452},{"name":"Using array.join","samples":5292647,"opsSec":10582667.635876799}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,592,429|26296222|
|(short string) (true) String#slice and strict comparison|51,537,677|25770743|
|(long string) (true) String#endsWith|48,486,798|24243688|
|(long string) (true) String#slice and strict comparison|46,169,584|23091616|
|(short string) (false) String#endsWith|57,392,598|28696358|
|(short string) (false) String#slice and strict comparison|60,291,812|30161762|
|(long string) (false) String#endsWith|51,497,536|25748969|
|(long string) (false) String#slice and strict comparison|52,697,174|26351146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:37:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26296222,"opsSec":52592429.2741198},{"name":"(short string) (true) String#slice and strict comparison","samples":25770743,"opsSec":51537677.77791363},{"name":"(long string) (true) String#endsWith","samples":24243688,"opsSec":48486798.61920204},{"name":"(long string) (true) String#slice and strict comparison","samples":23091616,"opsSec":46169584.82476082},{"name":"(short string) (false) String#endsWith","samples":28696358,"opsSec":57392598.45995835},{"name":"(short string) (false) String#slice and strict comparison","samples":30161762,"opsSec":60291812.79755737},{"name":"(long string) (false) String#endsWith","samples":25748969,"opsSec":51497536.731193796},{"name":"(long string) (false) String#slice and strict comparison","samples":26351146,"opsSec":52697174.57737679}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,999,314|7999911|
|Using indexof|16,080,215|8040771|
|Using RegExp.test|13,711,898|6859127|
|Using RegExp.text with cached regex pattern|14,444,709|7223806|
|Using new RegExp.test|4,212,814|2107439|
|Using new RegExp.test with cached regex pattern|4,959,174|2480491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:41:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7999911,"opsSec":15999314.213765485},{"name":"Using indexof","samples":8040771,"opsSec":16080215.703808747},{"name":"Using RegExp.test","samples":6859127,"opsSec":13711898.562440107},{"name":"Using RegExp.text with cached regex pattern","samples":7223806,"opsSec":14444709.913331313},{"name":"Using new RegExp.test","samples":2107439,"opsSec":4212814.512897808},{"name":"Using new RegExp.test with cached regex pattern","samples":2480491,"opsSec":4959174.985737047}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|71,583,587|35791802|
|(short string) (true) String#slice and strict comparison|51,393,754|25696918|
|(long string) (true) String#startsWith|51,991,126|25995916|
|(long string) (true) String#slice and strict comparison|45,767,346|22883687|
|(short string) (false) String#startsWith|99,185,338|49594862|
|(short string) (false) String#slice and strict comparison|60,118,482|30085314|
|(long string) (false) String#startsWith|84,393,630|42197011|
|(long string) (false) String#slice and strict comparison|52,720,648|26360451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":35791802,"opsSec":71583587.96527629},{"name":"(short string) (true) String#slice and strict comparison","samples":25696918,"opsSec":51393754.078356},{"name":"(long string) (true) String#startsWith","samples":25995916,"opsSec":51991126.0644903},{"name":"(long string) (true) String#slice and strict comparison","samples":22883687,"opsSec":45767346.99726527},{"name":"(short string) (false) String#startsWith","samples":49594862,"opsSec":99185338.61943828},{"name":"(short string) (false) String#slice and strict comparison","samples":30085314,"opsSec":60118482.79110754},{"name":"(long string) (false) String#startsWith","samples":42197011,"opsSec":84393630.91991432},{"name":"(long string) (false) String#slice and strict comparison","samples":26360451,"opsSec":52720648.09735877}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|79,723,766|40245661|
|Using this|85,386,808|42703004|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:53:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":40245661,"opsSec":79723766.76628451},{"name":"Using this","samples":42703004,"opsSec":85386808.60531147}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,924,716|4962884|
|Date.now()|19,266,903|9642673|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:54:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4962884,"opsSec":9924716.059495423},{"name":"Date.now()","samples":9642673,"opsSec":19266903.719759446}]}-->

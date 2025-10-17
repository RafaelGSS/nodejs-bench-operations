## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|81,417,988|40709516|
|Using dot notation|76,899,991|38461944|
|Using define property (writable)|4,556,645|2279209|
|Using define property initialized (writable)|6,029,020|3014611|
|Using define property (getter)|2,162,023|1081012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:42:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":40709516,"opsSec":81417988.38422489},{"name":"Using dot notation","samples":38461944,"opsSec":76899991.17394271},{"name":"Using define property (writable)","samples":2279209,"opsSec":4556645.0731950505},{"name":"Using define property initialized (writable)","samples":3014611,"opsSec":6029020.58248038},{"name":"Using define property (getter)","samples":1081012,"opsSec":2162023.22167164}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.112ms
new Array(length)|100|0.009ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.266ms
new Array(length)|10,000|0.301ms
array.push|1,000,000|33.188ms
new Array(length)|1,000,000|7.663ms
array.push|10,000,000|235.34ms
new Array(length)|10,000,000|67.158ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.236ms
new Array(length)|10,000|0.24ms
array.push|1,000,000|26.072ms
new Array(length)|1,000,000|8.288ms
array.push|10,000,000|211.079ms
new Array(length)|10,000,000|66.028ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|250|126|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:47:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":126,"opsSec":250.4422890329811},{"name":"Array.from","samples":12,"opsSec":22.53817293166708}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,023|2050|
|new Blob (1024)|507|254|
|text (128)|4,488|2245|
|text (1024)|567|284|
|arrayBuffer (128)|4,486|2249|
|arrayBuffer (1024)|557|281|
|slice (0, 64)|61,647|30824|
|slice (0, 512)|24,985|12498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:49:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2050,"opsSec":4023.490701004463},{"name":"new Blob (1024)","samples":254,"opsSec":507.0510873553862},{"name":"text (128)","samples":2245,"opsSec":4488.893344146081},{"name":"text (1024)","samples":284,"opsSec":567.4184392235971},{"name":"arrayBuffer (128)","samples":2249,"opsSec":4486.840026381262},{"name":"arrayBuffer (1024)","samples":281,"opsSec":557.384446547633},{"name":"slice (0, 64)","samples":30824,"opsSec":61647.91652872103},{"name":"slice (0, 512)","samples":12498,"opsSec":24985.586357404445}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.43 ms|1|
|Gzip|134.28 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:54:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133428546},{"name":"Gzip","samples":1,"totalTime":0.134277016}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,026|3014|
|crypto.verify('RSA-SHA256')|6,663|3347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:59:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3014,"opsSec":6026.939656398491},{"name":"crypto.verify('RSA-SHA256')","samples":3347,"opsSec":6663.096505104553}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,407,893|704024|
|fromUnixToISOString(new Date())|2,100,419|1050210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":704024,"opsSec":1407893.663880778},{"name":"fromUnixToISOString(new Date())","samples":1050210,"opsSec":2100419.5967194377}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,585|9822|
|Intl.DateTimeFormat().format(new Date())|19,228|9615|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,931|9980|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,895|9448|
|Reusing Intl.DateTimeFormat()|424,291|212148|
|Date.toLocaleDateString()|964,520|482382|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,454|11728|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:06:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9822,"opsSec":19585.418290376674},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9615,"opsSec":19228.140408084855},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9980,"opsSec":19931.746549947984},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9448,"opsSec":18895.43725608764},{"name":"Reusing Intl.DateTimeFormat()","samples":212148,"opsSec":424291.27763807983},{"name":"Date.toLocaleDateString()","samples":482382,"opsSec":964520.250300425},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11728,"opsSec":23454.330567658853}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,090,408|545224|
|Using brackets {}|1,056,805|528403|
|Using '' + |1,004,508|502356|
|Using date.toString()|1,187,910|593956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:09:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":545224,"opsSec":1090408.5948142007},{"name":"Using brackets {}","samples":528403,"opsSec":1056805.0235121583},{"name":"Using '' + ","samples":502356,"opsSec":1004508.5950455719},{"name":"Using date.toString()","samples":593956,"opsSec":1187910.2276379403}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,734,726|1867732|
|Using delete property (proto: null)|17,362,093|8681053|
|Using delete property (cached proto: null)|3,767,456|1883987|
|Using undefined assignment|85,936,507|42972401|
|Using undefined assignment (proto: null)|18,490,556|9249688|
|Using undefined property (cached proto: null)|86,230,209|43115112|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:12:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":1867732,"opsSec":3734726.6006410625},{"name":"Using delete property (proto: null)","samples":8681053,"opsSec":17362093.395120196},{"name":"Using delete property (cached proto: null)","samples":1883987,"opsSec":3767456.374098937},{"name":"Using undefined assignment","samples":42972401,"opsSec":85936507.23644853},{"name":"Using undefined assignment (proto: null)","samples":9249688,"opsSec":18490556.41138401},{"name":"Using undefined property (cached proto: null)","samples":43115112,"opsSec":86230209.3408644}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|304,696|152349|
|NodeError|286,150|144034|
|NodeError Range|267,201|133601|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:17:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":152349,"opsSec":304696.84702713083},{"name":"NodeError","samples":144034,"opsSec":286150.5492367491},{"name":"NodeError Range","samples":133601,"opsSec":267201.07281227736}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|72,406,137|36207588|
|using Array.includes (first item)|85,571,666|42795786|
|Using raw comparison|100,052,777|50038639|
|Using raw comparison (first item)|97,540,163|48778855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:20:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":36207588,"opsSec":72406137.25226225},{"name":"using Array.includes (first item)","samples":42795786,"opsSec":85571666.83229147},{"name":"Using raw comparison","samples":50038639,"opsSec":100052777.07594965},{"name":"Using raw comparison (first item)","samples":48778855,"opsSec":97540163.69503324}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,498,511|21749256|
|Using Object.getOwnPropertyNames()|47,956,380|23978852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:22:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":21749256,"opsSec":43498511.2170268},{"name":"Using Object.getOwnPropertyNames()","samples":23978852,"opsSec":47956380.21208063}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,451,064|49737463|
|Length = 10_000 - Array.at|90,292,744|45146380|
|Length = 1_000_000 - Array.at|97,429,208|48714614|
|Length = 100 - Array[length - 1]|98,159,324|49080886|
|Length = 10_000 - Array[length - 1]|98,676,993|49338517|
|Length = 1_000_000 - Array[length - 1]|99,648,391|49829656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49737463,"opsSec":99451064.30833623},{"name":"Length = 10_000 - Array.at","samples":45146380,"opsSec":90292744.46964794},{"name":"Length = 1_000_000 - Array.at","samples":48714614,"opsSec":97429208.51415831},{"name":"Length = 100 - Array[length - 1]","samples":49080886,"opsSec":98159324.29908928},{"name":"Length = 10_000 - Array[length - 1]","samples":49338517,"opsSec":98676993.54243265},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49829656,"opsSec":99648391.93132181}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,299,250|49698868|
|~ (small)|101,898,955|50949483|
|Math.floor (long)|102,297,184|51148594|
|~ (long)|101,941,405|50970705|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":49698868,"opsSec":99299250.80445364},{"name":"~ (small)","samples":50949483,"opsSec":101898955.19871074},{"name":"Math.floor (long)","samples":51148594,"opsSec":102297184.112707},{"name":"~ (long)","samples":50970705,"opsSec":101941405.71846096}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,691,195|18478586|
|Object.create({})|1,931,102|965564|
|new Function with empty prototype|71,160,287|35580556|
|Empty class|79,174,296|39591942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:31:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":18478586,"opsSec":36691195.90646145},{"name":"Object.create({})","samples":965564,"opsSec":1931102.5248954918},{"name":"new Function with empty prototype","samples":35580556,"opsSec":71160287.5369086},{"name":"Empty class","samples":39591942,"opsSec":79174296.46774353}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,671,553|50339367|
|Using parseInt(x, 10) - big number (10 len)|101,338,821|50670540|
|Using + - small number (2 len)|97,698,289|48852125|
|Using + - big number (10 len)|103,049,279|51524654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:35:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50339367,"opsSec":100671553.29944625},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50670540,"opsSec":101338821.1576764},{"name":"Using + - small number (2 len)","samples":48852125,"opsSec":97698289.42736204},{"name":"Using + - big number (10 len)","samples":51524654,"opsSec":103049279.97059584}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|734,964|368458|
|Using ? operator to avoid rejection|831,142|415572|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:39:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":368458,"opsSec":734964.2363236612},{"name":"Using ? operator to avoid rejection","samples":415572,"opsSec":831142.2778732002}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|100,626,942|50314198|
|Raw usage underscore usage|101,013,962|50522941|
|Manipulating private properties using #|101,352,142|50676219|
|Manipulating private properties using underscore(_)|101,706,604|50853330|
|Manipulating private properties using Symbol|102,464,409|51233400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:40:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":50314198,"opsSec":100626942.14193994},{"name":"Raw usage underscore usage","samples":50522941,"opsSec":101013962.19403046},{"name":"Manipulating private properties using #","samples":50676219,"opsSec":101352142.86255999},{"name":"Manipulating private properties using underscore(_)","samples":50853330,"opsSec":101706604.87502016},{"name":"Manipulating private properties using Symbol","samples":51233400,"opsSec":102464409.50532623}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,598,448|3799478|
|Adding property in the object creation - small object|7,628,476|3814565|
|Adding property after the function creation - small class|234,888|118570|
|Adding property in the function creation - small class|244,555|122963|
|Adding property after the class creation - small class|236,662|118775|
|Adding property in the class creation - small class|230,108|115055|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:44:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3799478,"opsSec":7598448.788346481},{"name":"Adding property in the object creation - small object","samples":3814565,"opsSec":7628476.5752104735},{"name":"Adding property after the function creation - small class","samples":118570,"opsSec":234888.59051106556},{"name":"Adding property in the function creation - small class","samples":122963,"opsSec":244555.2900980869},{"name":"Adding property after the class creation - small class","samples":118775,"opsSec":236662.8201926413},{"name":"Adding property in the class creation - small class","samples":115055,"opsSec":230108.23230855944}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|99,423,759|49713915|
|Getter|54,024,166|27012089|
|Method|101,270,023|50635018|
|DefineProperty (getter)|94,354,259|47177148|
|DefineProperty (getter & enumerable=false)|53,662,823|26831415|
|DefineProperty (getter & configurable=false)|101,332,595|50674984|
|DefineProperty (getter & enumerable=false & configurable=false)|53,772,816|26890609|
|DefineProperty (writable)|100,879,487|50473134|
|DefineProperty (writable & enumerable=false)|100,534,194|50269084|
|DefineProperty (writable & enumerable=false & configurable=false)|97,905,647|48979962|
|DefineProperties (getter)|52,938,683|26471255|
|DefineProperties (getter & enumerable=false)|53,774,836|26887430|
|DefineProperties (getter & enumerable=false & configurable=false)|53,711,385|26855695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":49713915,"opsSec":99423759.19360358},{"name":"Getter","samples":27012089,"opsSec":54024166.43882839},{"name":"Method","samples":50635018,"opsSec":101270023.03743705},{"name":"DefineProperty (getter)","samples":47177148,"opsSec":94354259.20183891},{"name":"DefineProperty (getter & enumerable=false)","samples":26831415,"opsSec":53662823.023833},{"name":"DefineProperty (getter & configurable=false)","samples":50674984,"opsSec":101332595.7424511},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26890609,"opsSec":53772816.96525989},{"name":"DefineProperty (writable)","samples":50473134,"opsSec":100879487.59504285},{"name":"DefineProperty (writable & enumerable=false)","samples":50269084,"opsSec":100534194.48649712},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48979962,"opsSec":97905647.45878439},{"name":"DefineProperties (getter)","samples":26471255,"opsSec":52938683.69781969},{"name":"DefineProperties (getter & enumerable=false)","samples":26887430,"opsSec":53774836.98436976},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26855695,"opsSec":53711385.91793466}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,069,690|51035268|
|Setter|11,434,241|5717124|
|Method|99,749,157|49874585|
|DefineProperty (setter)|100,287,692|50143854|
|DefineProperty (setter & enumerable=false)|11,697,694|5850014|
|DefineProperty (setter & configurable=false)|11,549,489|5775576|
|DefineProperty (setter & enumerable=false & configurable=false)|11,526,749|5763375|
|DefineProperty (writable)|101,629,045|50814546|
|DefineProperty (writable & enumerable=false)|105,027,175|52513598|
|DefineProperty (writable & enumerable=false & configurable=false)|103,265,573|51649470|
|DefineProperties (setter)|97,049,768|48541740|
|DefineProperties (setter & enumerable=false)|11,567,429|5783716|
|DefineProperties (setter & enumerable=false & configurable=false)|11,721,493|5860757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:50:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":51035268,"opsSec":102069690.04640889},{"name":"Setter","samples":5717124,"opsSec":11434241.002244506},{"name":"Method","samples":49874585,"opsSec":99749157.63110445},{"name":"DefineProperty (setter)","samples":50143854,"opsSec":100287692.7562707},{"name":"DefineProperty (setter & enumerable=false)","samples":5850014,"opsSec":11697694.286594436},{"name":"DefineProperty (setter & configurable=false)","samples":5775576,"opsSec":11549489.936002288},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5763375,"opsSec":11526749.077860074},{"name":"DefineProperty (writable)","samples":50814546,"opsSec":101629045.65715519},{"name":"DefineProperty (writable & enumerable=false)","samples":52513598,"opsSec":105027175.41467361},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51649470,"opsSec":103265573.03457221},{"name":"DefineProperties (setter)","samples":48541740,"opsSec":97049768.01618376},{"name":"DefineProperties (setter & enumerable=false)","samples":5783716,"opsSec":11567429.200682133},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5860757,"opsSec":11721493.628044076}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,525,242|1762914|
|Using replaceAll()|3,019,715|1510013|
|Using replaceAll(//g)|3,170,963|1585718|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:53:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1762914,"opsSec":3525242.9577292213},{"name":"Using replaceAll()","samples":1510013,"opsSec":3019715.307531439},{"name":"Using replaceAll(//g)","samples":1585718,"opsSec":3170963.7990968213}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,099,895|11050181|
|{ ...object, __proto__: null }|22,147,303|11073980|
|{ ...object, newProp: true }|849,651|424827|
|structuredClone|293,455|146798|
|JSON.parse + JSON.stringify|193,359|96680|
|loop + object.keys starting with {}|1,516,501|758488|
|loop + object.keys starting with { __proto__: null }|784,118|392061|
|loop + object.keys starting with { randomProp: true }|532,585|266317|
|object.keys + reduce(FN, {})|1,540,095|770072|
|object.keys + reduce(FN, { __proto__: null })|803,066|401662|
|object.keys + reduce(FN, { newProp: true })|523,614|261808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:56:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":11050181,"opsSec":22099895.1618146},{"name":"{ ...object, __proto__: null }","samples":11073980,"opsSec":22147303.15528302},{"name":"{ ...object, newProp: true }","samples":424827,"opsSec":849651.1162841114},{"name":"structuredClone","samples":146798,"opsSec":293455.64134056936},{"name":"JSON.parse + JSON.stringify","samples":96680,"opsSec":193359.19910619728},{"name":"loop + object.keys starting with {}","samples":758488,"opsSec":1516501.2289602493},{"name":"loop + object.keys starting with { __proto__: null }","samples":392061,"opsSec":784118.7380660496},{"name":"loop + object.keys starting with { randomProp: true }","samples":266317,"opsSec":532585.2205196526},{"name":"object.keys + reduce(FN, {})","samples":770072,"opsSec":1540095.970567062},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":401662,"opsSec":803066.220561597},{"name":"object.keys + reduce(FN, { newProp: true })","samples":261808,"opsSec":523614.92030603427}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|271,300|135843|
|Sort using first char|1,372,589|686310|
|Sort using localeCompare|1,270,980|635621|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:01:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Sort using default","samples":135843,"opsSec":271300.54270014464},{"name":"Sort using first char","samples":686310,"opsSec":1372589.2924323496},{"name":"Sort using localeCompare","samples":635621,"opsSec":1270980.2416192384}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,762|882|
|{...smallObject} - Total keys: 2|40,177,326|20110526|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,064|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,664|3333|
|{ ...bigObject, ...anotherBigObject }|1,115|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,192,165|6096487|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,954,585|14477300|
|{ ...smallObject, ...anotherSmallObject }|20,610,268|10305401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:05:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":882,"opsSec":1762.245635127353},{"name":"{...smallObject} - Total keys: 2","samples":20110526,"opsSec":40177326.53340577},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":533,"opsSec":1064.3630436984092},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3333,"opsSec":6664.670158375278},{"name":"{ ...bigObject, ...anotherBigObject }","samples":559,"opsSec":1115.3699109045508},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6096487,"opsSec":12192165.269293357},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14477300,"opsSec":28954585.580616385},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10305401,"opsSec":20610268.48259006}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,016|1009|
|streams.web.Readable reading 1e3 * "some data"|1,484|743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:09:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1009,"opsSec":2016.8333546786528},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":743,"opsSec":1484.298925154023}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,681|3841|
|streams.web.WritableStream writing 1e3 * "some data"|1,425|722|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:48:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3841,"opsSec":7681.988477017285},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":722,"opsSec":1425.3719733223115}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|99,600,206|49800108|
|Using backtick (`)|98,980,518|49491319|
|Using array.join|10,998,937|5500813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:53:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":49800108,"opsSec":99600206.83678097},{"name":"Using backtick (`)","samples":49491319,"opsSec":98980518.03526472},{"name":"Using array.join","samples":5500813,"opsSec":10998937.111842142}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,690,024|27408949|
|(short string) (true) String#slice and strict comparison|64,759,513|32380653|
|(long string) (true) String#endsWith|50,987,326|25493680|
|(long string) (true) String#slice and strict comparison|58,694,304|29347292|
|(short string) (false) String#endsWith|59,345,189|29672904|
|(short string) (false) String#slice and strict comparison|63,871,397|31941115|
|(long string) (false) String#endsWith|55,309,907|27658685|
|(long string) (false) String#slice and strict comparison|58,643,525|29321769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:56:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27408949,"opsSec":54690024.6282954},{"name":"(short string) (true) String#slice and strict comparison","samples":32380653,"opsSec":64759513.0681212},{"name":"(long string) (true) String#endsWith","samples":25493680,"opsSec":50987326.042440854},{"name":"(long string) (true) String#slice and strict comparison","samples":29347292,"opsSec":58694304.61511003},{"name":"(short string) (false) String#endsWith","samples":29672904,"opsSec":59345189.02967843},{"name":"(short string) (false) String#slice and strict comparison","samples":31941115,"opsSec":63871397.53872023},{"name":"(long string) (false) String#endsWith","samples":27658685,"opsSec":55309907.91908301},{"name":"(long string) (false) String#slice and strict comparison","samples":29321769,"opsSec":58643525.91943366}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,093,120|8046649|
|Using indexof|16,003,246|8001626|
|Using RegExp.test|13,661,348|6830802|
|Using RegExp.text with cached regex pattern|14,374,714|7187359|
|Using new RegExp.test|4,501,617|2251428|
|Using new RegExp.test with cached regex pattern|5,157,136|2578832|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:00:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8046649,"opsSec":16093120.846925717},{"name":"Using indexof","samples":8001626,"opsSec":16003246.718928583},{"name":"Using RegExp.test","samples":6830802,"opsSec":13661348.560104622},{"name":"Using RegExp.text with cached regex pattern","samples":7187359,"opsSec":14374714.032578928},{"name":"Using new RegExp.test","samples":2251428,"opsSec":4501617.695004459},{"name":"Using new RegExp.test with cached regex pattern","samples":2578832,"opsSec":5157136.538389127}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|72,926,698|36566208|
|(short string) (true) String#slice and strict comparison|56,375,667|28187837|
|(long string) (true) String#startsWith|55,564,701|27782354|
|(long string) (true) String#slice and strict comparison|49,876,041|24938025|
|(short string) (false) String#startsWith|99,139,732|49573931|
|(short string) (false) String#slice and strict comparison|56,725,188|28384861|
|(long string) (false) String#startsWith|87,000,986|43507642|
|(long string) (false) String#slice and strict comparison|50,155,444|25077729|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:04:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":36566208,"opsSec":72926698.53463762},{"name":"(short string) (true) String#slice and strict comparison","samples":28187837,"opsSec":56375667.12216861},{"name":"(long string) (true) String#startsWith","samples":27782354,"opsSec":55564701.10997706},{"name":"(long string) (true) String#slice and strict comparison","samples":24938025,"opsSec":49876041.12206468},{"name":"(short string) (false) String#startsWith","samples":49573931,"opsSec":99139732.54193157},{"name":"(short string) (false) String#slice and strict comparison","samples":28384861,"opsSec":56725188.982786044},{"name":"(long string) (false) String#startsWith","samples":43507642,"opsSec":87000986.95381191},{"name":"(long string) (false) String#slice and strict comparison","samples":25077729,"opsSec":50155444.45803}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|96,510,844|48299203|
|Using this|100,175,456|50088747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:10:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":48299203,"opsSec":96510844.22032085},{"name":"Using this","samples":50088747,"opsSec":100175456.83190987}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,749,970|5375536|
|Date.now()|20,350,310|10175337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:13:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5375536,"opsSec":10749970.128061876},{"name":"Date.now()","samples":10175337,"opsSec":20350310.29925433}]}-->

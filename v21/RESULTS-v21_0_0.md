## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|103,670,460|51842768|
|Using dot notation|74,170,400|37111111|
|Using define property (writable)|4,185,897|2093102|
|Using define property initialized (writable)|5,836,156|2918273|
|Using define property (getter)|2,215,100|1107559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:44:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":103670460.24167167,"samples":51842768},{"name":"Using dot notation","opsSec":74170400.03154276,"samples":37111111},{"name":"Using define property (writable)","opsSec":4185897.1569948033,"samples":2093102},{"name":"Using define property initialized (writable)","opsSec":5836156.448229393,"samples":2918273},{"name":"Using define property (getter)","opsSec":2215100.3899518996,"samples":1107559}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.002ms
array.push|100|0.086ms
new Array(length)|100|0.011ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.259ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|22.399ms
new Array(length)|1,000,000|15.657ms
array.push|100,000,000|1,774.154ms
new Array(length)|100,000,000|4,426.278ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.344ms
new Array(length)|10,000|0.227ms
array.push|1,000,000|22.413ms
new Array(length)|1,000,000|7.795ms
array.push|100,000,000|1,940.322ms
new Array(length)|100,000,000|4,420.924ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|263|132|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:58:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":263.88840212251915,"samples":132},{"name":"Array.from","opsSec":23.15459248573272,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,756|2379|
|new Blob (1024)|614|308|
|text (128)|4,841|2426|
|text (1024)|592|297|
|arrayBuffer (128)|4,879|2440|
|arrayBuffer (1024)|606|304|
|slice (0, 64)|156,997|94538|
|slice (0, 512)|33,703|16852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4756.706622928986,"samples":2379},{"name":"new Blob (1024)","opsSec":614.8796192374726,"samples":308},{"name":"text (128)","opsSec":4841.321062413738,"samples":2426},{"name":"text (1024)","opsSec":592.2876171323297,"samples":297},{"name":"arrayBuffer (128)","opsSec":4879.702660198103,"samples":2440},{"name":"arrayBuffer (1024)","opsSec":606.5585584711266,"samples":304},{"name":"slice (0, 64)","opsSec":156997.2076823192,"samples":94538},{"name":"slice (0, 512)","opsSec":33703.87913788941,"samples":16852}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|414,495|207248|
|[True conditional] Using constructor name|335,907|168027|
|[True conditional] Check if property is valid then instanceof |332,352|166352|
|[False conditional] Using instanceof only|98,267,465|49139881|
|[False conditional] Using constructor name|96,745,829|48372923|
|[False conditional] Check if property is valid then instanceof |96,547,738|48274589|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:10:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":414495.343439376,"samples":207248},{"name":"[True conditional] Using constructor name","opsSec":335907.7249502777,"samples":168027},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":332352.12883064314,"samples":166352},{"name":"[False conditional] Using instanceof only","opsSec":98267465.79200545,"samples":49139881},{"name":"[False conditional] Using constructor name","opsSec":96745829.74670061,"samples":48372923},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96547738.47321936,"samples":48274589}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,229|3115|
|crypto.verify('RSA-SHA256')|6,471|3236|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:15:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6229.632651021834,"samples":3115},{"name":"crypto.verify('RSA-SHA256')","opsSec":6471.135016324639,"samples":3236}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,502,132|751272|
|fromUnixToISOString(new Date())|2,134,896|1067559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:21:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1502132.2204943958,"samples":751272},{"name":"fromUnixToISOString(new Date())","opsSec":2134896.9228840475,"samples":1067559}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,090|9546|
|Intl.DateTimeFormat().format(new Date())|19,098|9550|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,590|9297|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,655|9328|
|Reusing Intl.DateTimeFormat()|452,681|287525|
|Date.toLocaleDateString()|724,525|362466|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,222|11612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:27:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19090.94480529872,"samples":9546},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19098.65343034124,"samples":9550},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18590.54520744083,"samples":9297},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18655.57301124492,"samples":9328},{"name":"Reusing Intl.DateTimeFormat()","opsSec":452681.0495476377,"samples":287525},{"name":"Date.toLocaleDateString()","opsSec":724525.9539196448,"samples":362466},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23222.176362490256,"samples":11612}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,084,539|542307|
|Using brackets {}|1,038,013|519007|
|Using '' + |1,034,085|517043|
|Using date.toString()|1,166,181|583151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:33:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1084539.0431685704,"samples":542307},{"name":"Using brackets {}","opsSec":1038013.7695609432,"samples":519007},{"name":"Using '' + ","opsSec":1034085.987590968,"samples":517043},{"name":"Using date.toString()","opsSec":1166181.146315445,"samples":583151}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,903,647|1951930|
|Using delete property (proto: null)|16,592,144|8296075|
|Using delete property (cached proto: null)|3,890,492|1945546|
|Using undefined assignment|77,381,207|38690610|
|Using undefined assignment (proto: null)|18,450,766|9226130|
|Using undefined property (cached proto: null)|75,787,892|37898378|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:38:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3903647.6962163937,"samples":1951930},{"name":"Using delete property (proto: null)","opsSec":16592144.856435096,"samples":8296075},{"name":"Using delete property (cached proto: null)","opsSec":3890492.055001182,"samples":1945546},{"name":"Using undefined assignment","opsSec":77381207.92853156,"samples":38690610},{"name":"Using undefined assignment (proto: null)","opsSec":18450766.96393728,"samples":9226130},{"name":"Using undefined property (cached proto: null)","opsSec":75787892.45440167,"samples":37898378}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|390,719|195386|
|NodeError|322,704|161357|
|NodeError Range|320,555|160278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:44:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":390719.8787496146,"samples":195386},{"name":"NodeError","opsSec":322704.4247143099,"samples":161357},{"name":"NodeError Range","opsSec":320555.308882754,"samples":160278}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,924,883|962964|
|Function returning explicitly undefined|1,953,036|977695|
|Function returning implicitly undefined|1,972,461|987334|
|Function returning string|1,949,491|974823|
|Function returning integer|2,008,822|1004412|
|Function returning float|1,977,707|988854|
|Function returning functions|1,909,920|954961|
|Function returning arrow functions|2,000,805|1000446|
|Function returning empty object|1,965,833|982917|
|Function returning empty array|1,976,924|988529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:50:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1924883.15802276,"samples":962964},{"name":"Function returning explicitly undefined","opsSec":1953036.087631094,"samples":977695},{"name":"Function returning implicitly undefined","opsSec":1972461.013372138,"samples":987334},{"name":"Function returning string","opsSec":1949491.2220939132,"samples":974823},{"name":"Function returning integer","opsSec":2008822.5094536978,"samples":1004412},{"name":"Function returning float","opsSec":1977707.8022292196,"samples":988854},{"name":"Function returning functions","opsSec":1909920.0748005647,"samples":954961},{"name":"Function returning arrow functions","opsSec":2000805.8573046196,"samples":1000446},{"name":"Function returning empty object","opsSec":1965833.9921366638,"samples":982917},{"name":"Function returning empty array","opsSec":1976924.2294450903,"samples":988529}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,470,380|42236465|
|using Array.includes (first item)|75,994,202|38052157|
|Using raw comparison|101,627,581|50813797|
|Using raw comparison (first item)|99,905,404|50023164|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:56:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":84470380.85284662,"samples":42236465},{"name":"using Array.includes (first item)","opsSec":75994202.80779527,"samples":38052157},{"name":"Using raw comparison","opsSec":101627581.8046902,"samples":50813797},{"name":"Using raw comparison (first item)","opsSec":99905404.433668,"samples":50023164}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,988,434|25004396|
|Using Object.getOwnPropertyNames()|40,611,235|20329331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:01:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":49988434.31010408,"samples":25004396},{"name":"Using Object.getOwnPropertyNames()","opsSec":40611235.792728886,"samples":20329331}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,797,738|65975464|
|Length = 10_000 - Array.at|83,240,010|41644276|
|Length = 1_000_000 - Array.at|96,760,883|48380452|
|Length = 100 - Array[length - 1]|91,095,922|45548399|
|Length = 10_000 - Array[length - 1]|86,583,634|43291825|
|Length = 1_000_000 - Array[length - 1]|97,859,278|48929661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:07:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131797738.17094652,"samples":65975464},{"name":"Length = 10_000 - Array.at","opsSec":83240010.25505972,"samples":41644276},{"name":"Length = 1_000_000 - Array.at","opsSec":96760883.68021442,"samples":48380452},{"name":"Length = 100 - Array[length - 1]","opsSec":91095922.38599403,"samples":45548399},{"name":"Length = 10_000 - Array[length - 1]","opsSec":86583634.06861134,"samples":43291825},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":97859278.94191727,"samples":48929661}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|139,584,953|69800791|
|~ (small)|93,191,462|46596005|
|Math.floor (long)|94,132,130|47066072|
|~ (long)|93,807,310|46903662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:12:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":139584953.8027933,"samples":69800791},{"name":"~ (small)","opsSec":93191462.03420323,"samples":46596005},{"name":"Math.floor (long)","opsSec":94132130.06844474,"samples":47066072},{"name":"~ (long)","opsSec":93807310.67936188,"samples":46903662}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,873,418|20484049|
|Object.create({})|1,982,277|991140|
|Cached Empty.prototype|79,580,401|39872234|
|Empty.prototype|2,235,615|1119316|
|Empty class|1,397,210|704432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":40873418.48643068,"samples":20484049},{"name":"Object.create({})","opsSec":1982277.5380112978,"samples":991140},{"name":"Cached Empty.prototype","opsSec":79580401.86030872,"samples":39872234},{"name":"Empty.prototype","opsSec":2235615.095554542,"samples":1119316},{"name":"Empty class","opsSec":1397210.249351348,"samples":704432}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|145,795,415|73046212|
|Using optional chain (obj.field?.field2) (undefined)|97,364,319|48748319|
|Using and operator (obj.field && obj.field.field2) (Valid)|102,770,258|51385133|
|Using and operator (obj.field && obj.field.field2) (undefined)|102,045,992|51023076|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:24:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":145795415.70253825,"samples":73046212},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97364319.11141303,"samples":48748319},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":102770258.18946037,"samples":51385133},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":102045992.4000679,"samples":51023076}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,005,001|70784213|
|Using parseInt(x, 10) - big number (10 len)|97,356,466|48692810|
|Using + - small number (2 len)|103,400,299|51701531|
|Using + - big number (10 len)|101,799,486|50911695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:30:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141005001.59873182,"samples":70784213},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97356466.02211088,"samples":48692810},{"name":"Using + - small number (2 len)","opsSec":103400299.35080194,"samples":51701531},{"name":"Using + - big number (10 len)","opsSec":101799486.86968608,"samples":50911695}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,138,402|571533|
|Using ? operator to avoid rejection|1,194,650|597776|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:35:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":1138402.905892166,"samples":571533},{"name":"Using ? operator to avoid rejection","opsSec":1194650.1371077949,"samples":597776}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|132,946,525|66473283|
|Raw usage underscore usage|97,029,318|48659710|
|Manipulating private properties using #|92,648,528|46324464|
|Manipulating private properties using underscore(_)|98,494,514|49254932|
|Manipulating private properties using Symbol|98,826,255|49413136|
|Manipulating private properties using PrivateSymbol|37,109,970|18555649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:41:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":132946525.0524703,"samples":66473283},{"name":"Raw usage underscore usage","opsSec":97029318.83167748,"samples":48659710},{"name":"Manipulating private properties using #","opsSec":92648528.87013762,"samples":46324464},{"name":"Manipulating private properties using underscore(_)","opsSec":98494514.41788408,"samples":49254932},{"name":"Manipulating private properties using Symbol","opsSec":98826255.3971891,"samples":49413136},{"name":"Manipulating private properties using PrivateSymbol","opsSec":37109970.427917905,"samples":18555649}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,777,846|3893230|
|Adding property in the object creation - small object|7,356,522|3678263|
|Adding property after the function creation - small class|230,304|115154|
|Adding property in the function creation - small class|245,889|123669|
|Adding property after the class creation - small class|242,719|121856|
|Adding property in the class creation - small class|238,981|119491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:47:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7777846.781362931,"samples":3893230},{"name":"Adding property in the object creation - small object","opsSec":7356522.777843023,"samples":3678263},{"name":"Adding property after the function creation - small class","opsSec":230304.3925119957,"samples":115154},{"name":"Adding property in the function creation - small class","opsSec":245889.38644805207,"samples":123669},{"name":"Adding property after the class creation - small class","opsSec":242719.2568800659,"samples":121856},{"name":"Adding property in the class creation - small class","opsSec":238981.74667934852,"samples":119491}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|139,357,176|69748575|
|Getter|52,866,461|26433238|
|Method|100,831,913|50415966|
|DefineProperty (getter)|86,262,667|43168255|
|DefineProperty (getter & enumerable=false)|53,435,342|26719023|
|DefineProperty (getter & configurable=false)|101,452,757|50726385|
|DefineProperty (getter & enumerable=false & configurable=false)|52,912,250|26456141|
|DefineProperty (writable)|102,048,020|51024843|
|DefineProperty (writable & enumerable=false)|101,573,435|50786727|
|DefineProperty (writable & enumerable=false & configurable=false)|101,361,895|50681007|
|DefineProperties (getter)|50,929,186|25464597|
|DefineProperties (getter & enumerable=false)|53,558,349|26780450|
|DefineProperties (getter & enumerable=false & configurable=false)|53,500,802|26750774|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:53:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":139357176.58597916,"samples":69748575},{"name":"Getter","opsSec":52866461.51458954,"samples":26433238},{"name":"Method","opsSec":100831913.8502555,"samples":50415966},{"name":"DefineProperty (getter)","opsSec":86262667.60380314,"samples":43168255},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53435342.06482084,"samples":26719023},{"name":"DefineProperty (getter & configurable=false)","opsSec":101452757.41985807,"samples":50726385},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52912250.67594761,"samples":26456141},{"name":"DefineProperty (writable)","opsSec":102048020.98448962,"samples":51024843},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101573435.71678157,"samples":50786727},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101361895.20385882,"samples":50681007},{"name":"DefineProperties (getter)","opsSec":50929186.768055476,"samples":25464597},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53558349.65850596,"samples":26780450},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53500802.19881734,"samples":26750774}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|145,502,949|72752119|
|Setter|11,149,804|5574915|
|Method|97,887,721|48956032|
|DefineProperty (setter)|100,320,695|50162625|
|DefineProperty (setter & enumerable=false)|11,810,902|5905454|
|DefineProperty (setter & configurable=false)|11,605,233|5802620|
|DefineProperty (setter & enumerable=false & configurable=false)|11,817,948|5912493|
|DefineProperty (writable)|99,547,653|49776010|
|DefineProperty (writable & enumerable=false)|100,549,746|50495126|
|DefineProperty (writable & enumerable=false & configurable=false)|100,198,246|50099130|
|DefineProperties (setter)|99,038,687|49519377|
|DefineProperties (setter & enumerable=false)|10,940,252|5470129|
|DefineProperties (setter & enumerable=false & configurable=false)|11,235,148|5617577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:00:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":145502949.7168832,"samples":72752119},{"name":"Setter","opsSec":11149804.043256186,"samples":5574915},{"name":"Method","opsSec":97887721.08574495,"samples":48956032},{"name":"DefineProperty (setter)","opsSec":100320695.23979472,"samples":50162625},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11810902.472497642,"samples":5905454},{"name":"DefineProperty (setter & configurable=false)","opsSec":11605233.663542418,"samples":5802620},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11817948.175502524,"samples":5912493},{"name":"DefineProperty (writable)","opsSec":99547653.640816,"samples":49776010},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100549746.17629504,"samples":50495126},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100198246.57343496,"samples":50099130},{"name":"DefineProperties (setter)","opsSec":99038687.04984756,"samples":49519377},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10940252.87996165,"samples":5470129},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11235148.8992424,"samples":5617577}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,406,272|1703138|
|Using replaceAll()|3,103,340|1553501|
|Using replaceAll(//g)|3,082,683|1541343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:06:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3406272.1849751524,"samples":1703138},{"name":"Using replaceAll()","opsSec":3103340.9390407586,"samples":1553501},{"name":"Using replaceAll(//g)","opsSec":3082683.4290420203,"samples":1541343}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,314,355|12159045|
|{ ...object, __proto__: null }|2,568,263|1284200|
|{ ...object, newProp: true }|20,545,083|10273322|
|structuredClone|272,109|136055|
|JSON.parse + JSON.stringify|273,144|136573|
|loop + object.keys starting with {}|1,581,570|790827|
|loop + object.keys starting with { __proto__: null }|870,741|435727|
|loop + object.keys starting with { randomProp: true }|635,933|317967|
|object.keys + reduce(FN, {})|1,624,367|812184|
|object.keys + reduce(FN, { __proto__: null })|889,153|444720|
|object.keys + reduce(FN, { newProp: true })|664,229|332115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:12:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":24314355.02329616,"samples":12159045},{"name":"{ ...object, __proto__: null }","opsSec":2568263.414615084,"samples":1284200},{"name":"{ ...object, newProp: true }","opsSec":20545083.107855964,"samples":10273322},{"name":"structuredClone","opsSec":272109.859047093,"samples":136055},{"name":"JSON.parse + JSON.stringify","opsSec":273144.53976929036,"samples":136573},{"name":"loop + object.keys starting with {}","opsSec":1581570.4203295673,"samples":790827},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":870741.2164646493,"samples":435727},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":635933.047372295,"samples":317967},{"name":"object.keys + reduce(FN, {})","opsSec":1624367.116344289,"samples":812184},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":889153.3191868277,"samples":444720},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":664229.9295916274,"samples":332115}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|309,129|154663|
|Sort using first char|1,390,385|696972|
|Sort using localeCompare|1,278,265|639263|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:18:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":309129.20834596694,"samples":154663},{"name":"Sort using first char","opsSec":1390385.9633888807,"samples":696972},{"name":"Sort using localeCompare","opsSec":1278265.7399822767,"samples":639263}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,918|960|
|{...smallObject} - Total keys: 2|57,097,545|28549182|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,118|560|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,774|3388|
|{ ...bigObject, ...anotherBigObject }|1,192|597|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,877,333|6438694|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,346,483|14175030|
|{ ...smallObject, ...anotherSmallObject }|21,081,508|10540774|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:24:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1918.3912792778058,"samples":960},{"name":"{...smallObject} - Total keys: 2","opsSec":57097545.44958843,"samples":28549182},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1118.583428183715,"samples":560},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6774.754109169815,"samples":3388},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1192.8056460921791,"samples":597},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12877333.065297145,"samples":6438694},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28346483.410802126,"samples":14175030},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21081508.83055659,"samples":10540774}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,311|1157|
|streams.web.Readable reading 1e3 * "some data"|2,259|1131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:30:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2311.939936671669,"samples":1157},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2259.458014836073,"samples":1131}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,370|3187|
|streams.web.WritableStream writing 1e3 * "some data"|2,137|1069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:35:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6370.316058963734,"samples":3187},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2137.985376180027,"samples":1069}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,387,253|7693627|
|Using backtick (`)|15,515,380|7757691|
|Using array.join|5,896,795|2948398|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:27:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":15387253.298034968,"samples":7693627},{"name":"Using backtick (`)","opsSec":15515380.518950826,"samples":7757691},{"name":"Using array.join","opsSec":5896795.905408907,"samples":2948398}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,206,436|7103219|
|(short string) (true) String#slice and strict comparison|12,527,511|6263756|
|(long string) (true) String#endsWith|13,996,071|6998036|
|(long string) (true) String#slice and strict comparison|12,347,029|6173515|
|(short string) (false) String#endsWith|15,677,327|7838664|
|(short string) (false) String#slice and strict comparison|12,557,963|6278982|
|(long string) (false) String#endsWith|15,487,726|7743864|
|(long string) (false) String#slice and strict comparison|12,416,502|6208253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:43:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14206436.123241074,"samples":7103219},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12527511.680879992,"samples":6263756},{"name":"(long string) (true) String#endsWith","opsSec":13996071.611248411,"samples":6998036},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12347029.598728543,"samples":6173515},{"name":"(short string) (false) String#endsWith","opsSec":15677327.547029462,"samples":7838664},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12557963.974456994,"samples":6278982},{"name":"(long string) (false) String#endsWith","opsSec":15487726.591749255,"samples":7743864},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12416502.324109139,"samples":6208253}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,116,360|4058181|
|Using indexof|8,043,423|4021712|
|Using RegExp.test|6,692,596|3346299|
|Using RegExp.text with cached regex pattern|7,475,353|3737677|
|Using new RegExp.test|3,379,203|1689602|
|Using new RegExp.test with cached regex pattern|3,614,142|1807072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8116360.854546939,"samples":4058181},{"name":"Using indexof","opsSec":8043423.23729414,"samples":4021712},{"name":"Using RegExp.test","opsSec":6692596.808805308,"samples":3346299},{"name":"Using RegExp.text with cached regex pattern","opsSec":7475353.478576635,"samples":3737677},{"name":"Using new RegExp.test","opsSec":3379203.7637891048,"samples":1689602},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3614142.789610577,"samples":1807072}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,854,070|6927036|
|(short string) (true) String#slice and strict comparison|12,086,687|6043344|
|(long string) (true) String#startsWith|13,298,455|6649228|
|(long string) (true) String#slice and strict comparison|11,860,011|5930006|
|(short string) (false) String#startsWith|14,874,298|7437150|
|(short string) (false) String#slice and strict comparison|12,386,877|6193439|
|(long string) (false) String#startsWith|14,052,103|7026052|
|(long string) (false) String#slice and strict comparison|11,808,671|5904336|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:09:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13854070.093304167,"samples":6927036},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12086687.997298416,"samples":6043344},{"name":"(long string) (true) String#startsWith","opsSec":13298455.557899619,"samples":6649228},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11860011.543334993,"samples":5930006},{"name":"(short string) (false) String#startsWith","opsSec":14874298.641098663,"samples":7437150},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12386877.750080222,"samples":6193439},{"name":"(long string) (false) String#startsWith","opsSec":14052103.156042907,"samples":7026052},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11808671.415627155,"samples":5904336}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,030,136|7515069|
|Using this|14,988,949|7494475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:23:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":15030136.377026869,"samples":7515069},{"name":"Using this","opsSec":14988949.554187903,"samples":7494475}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,968,333|2984167|
|Date.now()|9,035,116|4517559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:30:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5968333.408136921,"samples":2984167},{"name":"Date.now()","opsSec":9035116.677358236,"samples":4517559}]}-->

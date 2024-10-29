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
|Using if to check function existence|986,456|493229|
|Using ? operator to avoid rejection|955,398|477700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:32:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":986456.5926659815,"samples":493229},{"name":"Using ? operator to avoid rejection","opsSec":955398.1277025987,"samples":477700}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,102,657|7051329|
|Raw usage underscore usage|14,119,835|7059918|
|Manipulating private properties using #|14,048,115|7024107|
|Manipulating private properties using underscore(_)|14,931,415|7465708|
|Manipulating private properties using Symbol|14,783,474|7391817|
|Manipulating private properties using PrivateSymbol|10,485,701|5242851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:45:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":14102657.503792822,"samples":7051329},{"name":"Raw usage underscore usage","opsSec":14119835.256439539,"samples":7059918},{"name":"Manipulating private properties using #","opsSec":14048115.714539023,"samples":7024107},{"name":"Manipulating private properties using underscore(_)","opsSec":14931415.217650462,"samples":7465708},{"name":"Manipulating private properties using Symbol","opsSec":14783474.937657896,"samples":7391817},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10485701.219223127,"samples":5242851}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,870,019|2435068|
|Adding property in the object creation - small object|4,854,172|2427087|
|Adding property after the function creation - small class|236,800|118401|
|Adding property in the function creation - small class|229,780|114891|
|Adding property after the class creation - small class|241,106|120554|
|Adding property in the class creation - small class|226,479|113240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:52:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4870019.523975287,"samples":2435068},{"name":"Adding property in the object creation - small object","opsSec":4854172.254085045,"samples":2427087},{"name":"Adding property after the function creation - small class","opsSec":236800.63790045024,"samples":118401},{"name":"Adding property in the function creation - small class","opsSec":229780.79097939417,"samples":114891},{"name":"Adding property after the class creation - small class","opsSec":241106.86105708077,"samples":120554},{"name":"Adding property in the class creation - small class","opsSec":226479.0794183349,"samples":113240}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,371,533|7685767|
|Getter|12,965,982|6482992|
|Method|15,827,950|7913976|
|DefineProperty (getter)|15,972,263|7986132|
|DefineProperty (getter & enumerable=false)|13,050,958|6525480|
|DefineProperty (getter & configurable=false)|15,812,705|7906353|
|DefineProperty (getter & enumerable=false & configurable=false)|12,750,317|6375159|
|DefineProperty (writable)|15,954,462|7977232|
|DefineProperty (writable & enumerable=false)|15,819,008|7909505|
|DefineProperty (writable & enumerable=false & configurable=false)|15,895,176|7947589|
|DefineProperties (getter)|12,863,369|6431685|
|DefineProperties (getter & enumerable=false)|12,730,976|6365489|
|DefineProperties (getter & enumerable=false & configurable=false)|12,882,702|6441352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:09:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":15371533.331449524,"samples":7685767},{"name":"Getter","opsSec":12965982.667056642,"samples":6482992},{"name":"Method","opsSec":15827950.954042712,"samples":7913976},{"name":"DefineProperty (getter)","opsSec":15972263.025249433,"samples":7986132},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13050958.885661447,"samples":6525480},{"name":"DefineProperty (getter & configurable=false)","opsSec":15812705.345897585,"samples":7906353},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12750317.571087332,"samples":6375159},{"name":"DefineProperty (writable)","opsSec":15954462.921551816,"samples":7977232},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15819008.315887082,"samples":7909505},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15895176.807959987,"samples":7947589},{"name":"DefineProperties (getter)","opsSec":12863369.855857281,"samples":6431685},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12730976.201868564,"samples":6365489},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12882702.809227265,"samples":6441352}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,355,174|7177588|
|Setter|5,887,130|2943566|
|Method|14,297,870|7148936|
|DefineProperty (setter)|14,361,001|7180501|
|DefineProperty (setter & enumerable=false)|5,964,775|2982388|
|DefineProperty (setter & configurable=false)|5,969,394|2984698|
|DefineProperty (setter & enumerable=false & configurable=false)|5,902,583|2951292|
|DefineProperty (writable)|14,427,826|7213914|
|DefineProperty (writable & enumerable=false)|14,491,341|7245671|
|DefineProperty (writable & enumerable=false & configurable=false)|14,395,669|7197835|
|DefineProperties (setter)|14,496,276|7248139|
|DefineProperties (setter & enumerable=false)|5,933,831|2966916|
|DefineProperties (setter & enumerable=false & configurable=false)|5,936,388|2968195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:31:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14355174.94227458,"samples":7177588},{"name":"Setter","opsSec":5887130.1930388855,"samples":2943566},{"name":"Method","opsSec":14297870.65125611,"samples":7148936},{"name":"DefineProperty (setter)","opsSec":14361001.083296383,"samples":7180501},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5964775.573943738,"samples":2982388},{"name":"DefineProperty (setter & configurable=false)","opsSec":5969394.898431862,"samples":2984698},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5902583.969303581,"samples":2951292},{"name":"DefineProperty (writable)","opsSec":14427826.562621454,"samples":7213914},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14491341.506420137,"samples":7245671},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14395669.228506917,"samples":7197835},{"name":"DefineProperties (setter)","opsSec":14496276.181778481,"samples":7248139},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5933831.221453311,"samples":2966916},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5936388.818938504,"samples":2968195}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,474,459|1237231|
|Using replaceAll()|2,366,252|1183127|
|Using replaceAll(//g)|2,285,919|1142960|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2474459.802676791,"samples":1237231},{"name":"Using replaceAll()","opsSec":2366252.397516498,"samples":1183127},{"name":"Using replaceAll(//g)","opsSec":2285919.273924771,"samples":1142960}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,632,468|4816235|
|{ ...object, __proto__: null }|2,128,037|1064019|
|{ ...object, newProp: true }|9,747,100|4873551|
|structuredClone|244,343|122172|
|JSON.parse + JSON.stringify|236,997|118499|
|loop + object.keys starting with {}|1,221,371|610686|
|loop + object.keys starting with { __proto__: null }|692,604|346303|
|loop + object.keys starting with { randomProp: true }|517,193|258597|
|object.keys + reduce(FN, {})|1,246,345|623173|
|object.keys + reduce(FN, { __proto__: null })|739,966|369984|
|object.keys + reduce(FN, { newProp: true })|502,300|251151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:51:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9632468.757166581,"samples":4816235},{"name":"{ ...object, __proto__: null }","opsSec":2128037.086246123,"samples":1064019},{"name":"{ ...object, newProp: true }","opsSec":9747100.891940225,"samples":4873551},{"name":"structuredClone","opsSec":244343.36107098163,"samples":122172},{"name":"JSON.parse + JSON.stringify","opsSec":236997.28597046423,"samples":118499},{"name":"loop + object.keys starting with {}","opsSec":1221371.1755195512,"samples":610686},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":692604.6643268102,"samples":346303},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":517193.07797463593,"samples":258597},{"name":"object.keys + reduce(FN, {})","opsSec":1246345.7657095876,"samples":623173},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":739966.5169600465,"samples":369984},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":502300.25050449447,"samples":251151}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|299,254|149628|
|Sort using first char|1,090,018|545010|
|Sort using localeCompare|991,085|495543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:58:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":299254.0527544497,"samples":149628},{"name":"Sort using first char","opsSec":1090018.9708558915,"samples":545010},{"name":"Sort using localeCompare","opsSec":991085.1957098946,"samples":495543}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,830|916|
|{...smallObject} - Total keys: 2|11,594,934|5797469|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,745|3373|
|{ ...bigObject, ...anotherBigObject }|1,129|565|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,201,429|3100715|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,338,694|5169348|
|{ ...smallObject, ...anotherSmallObject }|8,829,834|4414918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1830.765599026013,"samples":916},{"name":"{...smallObject} - Total keys: 2","opsSec":11594934.309375849,"samples":5797469},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.5164073167,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6745.053803545074,"samples":3373},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1129.265304534885,"samples":565},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6201429.300421468,"samples":3100715},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10338694.506402325,"samples":5169348},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8829834.661226517,"samples":4414918}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,150|1076|
|streams.web.Readable reading 1e3 * "some data"|1,974|988|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:13:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2150.329976318947,"samples":1076},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1974.1842126057632,"samples":988}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,971|2991|
|streams.web.WritableStream writing 1e3 * "some data"|2,719|1363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:19:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5971.747178267229,"samples":2991},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2719.1826340440803,"samples":1363}]}-->

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

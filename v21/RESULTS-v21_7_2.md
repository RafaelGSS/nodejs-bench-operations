## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,176,634|97|
|Using dot notation|911,858,323|99|
|Using define property (writable)|4,763,846|97|
|Using define property initialized (writable)|7,071,793|94|
|Using define property (getter)|2,785,968|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:19:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912176634.4410051,"samples":6},{"name":"Using dot notation","opsSec":911858323.3457873,"samples":6},{"name":"Using define property (writable)","opsSec":4763846.362880353,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7071792.984144087,"samples":4},{"name":"Using define property (getter)","opsSec":2785967.849058611,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.094ms
new Array(length)|100|0.015ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.27ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|29.557ms
new Array(length)|1,000,000|7.969ms
array.push|100,000,000|1,962.148ms
new Array(length)|100,000,000|4,314.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.306ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|21.916ms
new Array(length)|1,000,000|7.309ms
array.push|100,000,000|2,083.417ms
new Array(length)|100,000,000|4,915.579ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|85|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:33:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.24651601448107,"samples":2},{"name":"Array.from","opsSec":23.261679866019588,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|912,258,679|99|
|[async] async function|18,177,278|87|
|[async] function|372,827|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:40:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":912258679.0486792,"samples":6},{"name":"[async] async function","opsSec":18177277.85342129,"samples":7},{"name":"[async] function","opsSec":372826.6935797394,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,230|89|
|new Blob (1024)|794|77|
|text (128)|6,509|88|
|text (1024)|824|89|
|arrayBuffer (128)|6,574|89|
|arrayBuffer (1024)|831|88|
|slice (0, 64)|191,793|55|
|slice (0, 512)|32,756|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6230.264611648926,"samples":6},{"name":"new Blob (1024)","opsSec":794.1658850876366,"samples":2},{"name":"text (128)","opsSec":6508.677014024432,"samples":6},{"name":"text (1024)","opsSec":823.6898507825849,"samples":2},{"name":"arrayBuffer (128)","opsSec":6574.214785337679,"samples":5},{"name":"arrayBuffer (1024)","opsSec":831.0773081224233,"samples":2},{"name":"slice (0, 64)","opsSec":191793.4658782101,"samples":4},{"name":"slice (0, 512)","opsSec":32756.192472145278,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|274,679|54|
|[True conditional] Using constructor name|228,154|96|
|[True conditional] Check if property is valid then instanceof |228,435|90|
|[False conditional] Using instanceof only|912,130,345|100|
|[False conditional] Using constructor name|913,253,201|94|
|[False conditional] Check if property is valid then instanceof |913,454,371|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":274678.7330308187,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":228154.00239916894,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":228435.25427802932,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912130344.6276729,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":913253200.6691492,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913454370.8391877,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,387|92|
|crypto.verify('RSA-SHA256')|7,401|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:10:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7387.479555518012,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":7401.1762732062425,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,516|82|
|Intl.DateTimeFormat().format(new Date())|17,933|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,243|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,150|83|
|Reusing Intl.DateTimeFormat()|767,187|92|
|Date.toLocaleDateString()|881,002|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,569|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:32:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17515.51472983904,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17932.644849859153,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18243.0385385441,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19149.713113549275,"samples":9},{"name":"Reusing Intl.DateTimeFormat()","opsSec":767187.4119048548,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":881001.5581156994,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21569.222524463854,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,168,471|94|
|Using brackets {}|1,194,098|99|
|Using '' + |1,190,530|96|
|Using date.toString()|1,345,072|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:44:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1168471.0041188742,"samples":4},{"name":"Using brackets {}","opsSec":1194097.5332632565,"samples":4},{"name":"Using '' + ","opsSec":1190530.1209321728,"samples":5},{"name":"Using date.toString()","opsSec":1345071.6405601273,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,512,978|94|
|Using delete property (proto: null)|23,321,160|96|
|Using delete property (cached proto: null)|4,564,277|98|
|Using undefined assignment|910,282,867|99|
|Using undefined assignment (proto: null)|26,485,986|97|
|Using undefined property (cached proto: null)|908,394,383|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:53:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4512977.769378374,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23321160.25266621,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4564277.180619957,"samples":6},{"name":"Using undefined assignment","opsSec":910282866.7115643,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":26485985.713527564,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":908394383.2545786,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|263,267|53|
|NodeError|222,204|96|
|NodeError Range|222,477|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:02:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":263266.5501079072,"samples":3},{"name":"NodeError","opsSec":222204.40298827566,"samples":3},{"name":"NodeError Range","opsSec":222476.66404335015,"samples":3}]}-->

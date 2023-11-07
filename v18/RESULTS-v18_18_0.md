## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,111,875|98|
|Using dot notation|848,165,697|98|
|Using define property (writable)|4,356,678|96|
|Using define property initialized (writable)|6,044,127|96|
|Using define property (getter)|2,245,220|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848111875.0478922,"samples":6},{"name":"Using dot notation","opsSec":848165696.608328,"samples":7},{"name":"Using define property (writable)","opsSec":4356677.940564595,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6044127.367365343,"samples":5},{"name":"Using define property (getter)","opsSec":2245219.8856632523,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.141ms
array.push|1,000,000|24.756ms
new Array(length)|1,000,000|13.801ms
array.push|100,000,000|1,816.884ms
new Array(length)|100,000,000|3,912.213ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.456ms
new Array(length)|10,000|3.222ms
array.push|1,000,000|279.254ms
new Array(length)|1,000,000|4.482ms
array.push|100,000,000|2,206.501ms
new Array(length)|100,000,000|4,190.618ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|87|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":308.5829923498582,"samples":3},{"name":"Array.from","opsSec":21.801472111593124,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,055,183|99|
|[async] async function|17,464,715|86|
|[async] function|295,442|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:16:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848055182.5511692,"samples":6},{"name":"[async] async function","opsSec":17464714.84648007,"samples":6},{"name":"[async] function","opsSec":295441.80535852385,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,583|84|
|new Blob (1024)|585|77|
|text (128)|49,302|84|
|text (1024)|32,509|80|
|arrayBuffer (128)|50,416|86|
|arrayBuffer (1024)|33,972|81|
|slice (0, 64)|86,067|83|
|slice (0, 512)|45,794|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:28:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4583.292036480701,"samples":4},{"name":"new Blob (1024)","opsSec":584.585250122532,"samples":2},{"name":"text (128)","opsSec":49301.89053034829,"samples":6},{"name":"text (1024)","opsSec":32508.701530364033,"samples":3},{"name":"arrayBuffer (128)","opsSec":50415.97200567986,"samples":4},{"name":"arrayBuffer (1024)","opsSec":33972.48565300856,"samples":3},{"name":"slice (0, 64)","opsSec":86066.8240431217,"samples":3},{"name":"slice (0, 512)","opsSec":45794.2699278767,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,382|53|
|[True conditional] Using constructor name|179,178|96|
|[True conditional] Check if property is valid then instanceof |182,951|95|
|[False conditional] Using instanceof only|848,636,639|92|
|[False conditional] Using constructor name|849,223,028|100|
|[False conditional] Check if property is valid then instanceof |848,994,689|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:40:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":239382.11775233137,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179177.69642259303,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":182950.89179020788,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848636639.3129746,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":849223027.9564385,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848994689.0563283,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,750|96|
|crypto.verify('RSA-SHA256')|6,760|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:52:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6749.863607300721,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6759.599923687126,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,577,954|98|
|fromUnixToISOString(new Date())|2,025,799|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:02:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2577953.7372371783,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2025799.0074189224,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,769|84|
|Intl.DateTimeFormat().format(new Date())|17,370|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,767|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,248|77|
|Reusing Intl.DateTimeFormat()|691,639|98|
|Date.toLocaleDateString()|721,377|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|18,622|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:11:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18768.73360648624,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17370.261345471903,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17766.754776808455,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21248.149297243348,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":691638.8036586964,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":721377.2015299452,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":18621.65685825323,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,004,621|98|
|Using brackets {}|1,020,170|98|
|Using '' + |1,013,010|91|
|Using date.toString()|1,102,332|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:26:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1004621.2172862835,"samples":6},{"name":"Using brackets {}","opsSec":1020169.9430967006,"samples":6},{"name":"Using '' + ","opsSec":1013009.9543819001,"samples":6},{"name":"Using date.toString()","opsSec":1102332.4309854454,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,429,992|98|
|Using delete property (proto: null)|24,582,512|98|
|Using delete property (cached proto: null)|3,456,436|96|
|Using undefined assignment|846,531,141|99|
|Using undefined assignment (proto: null)|27,482,903|94|
|Using undefined property (cached proto: null)|843,711,770|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3429991.608308004,"samples":6},{"name":"Using delete property (proto: null)","opsSec":24582511.731827863,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":3456435.781517944,"samples":5},{"name":"Using undefined assignment","opsSec":846531141.348624,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":27482903.287215903,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":843711770.2390463,"samples":9}]}-->

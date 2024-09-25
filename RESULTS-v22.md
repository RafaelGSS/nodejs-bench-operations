## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.1ms
new Array(length)|100|0.009ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.255ms
new Array(length)|10,000|0.133ms
array.push|1,000,000|29.736ms
new Array(length)|1,000,000|6.838ms
array.push|100,000,000|1,897.851ms
new Array(length)|100,000,000|4,102.613ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|17.143ms
new Array(length)|10,000|5.242ms
array.push|1,000,000|163.908ms
new Array(length)|1,000,000|7.565ms
array.push|100,000,000|2,025.821ms
new Array(length)|100,000,000|4,868.68ms

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,774|2388|
|new Blob (1024)|553|289|
|text (128)|4,194|2098|
|text (1024)|527|264|
|arrayBuffer (128)|4,187|2094|
|arrayBuffer (1024)|525|263|
|slice (0, 64)|149,110|87710|
|slice (0, 512)|39,641|19821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4774.648755303772,"samples":2388},{"name":"new Blob (1024)","opsSec":553.6435631552614,"samples":289},{"name":"text (128)","opsSec":4194.627937201869,"samples":2098},{"name":"text (1024)","opsSec":527.371609304196,"samples":264},{"name":"arrayBuffer (128)","opsSec":4187.2899193756175,"samples":2094},{"name":"arrayBuffer (1024)","opsSec":525.0730758973702,"samples":263},{"name":"slice (0, 64)","opsSec":149110.32249118472,"samples":87710},{"name":"slice (0, 512)","opsSec":39641.40989797482,"samples":19821}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|321,605|160803|
|[True conditional] Using constructor name|316,105|158053|
|[True conditional] Check if property is valid then instanceof |316,207|158104|
|[False conditional] Using instanceof only|14,881,972|7440987|
|[False conditional] Using constructor name|14,955,756|7477879|
|[False conditional] Check if property is valid then instanceof |14,815,601|7407801|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:26:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":321605.7440017025,"samples":160803},{"name":"[True conditional] Using constructor name","opsSec":316105.1642178422,"samples":158053},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316207.95067146246,"samples":158104},{"name":"[False conditional] Using instanceof only","opsSec":14881972.482033422,"samples":7440987},{"name":"[False conditional] Using constructor name","opsSec":14955756.653887317,"samples":7477879},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14815601.377640612,"samples":7407801}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,085|3543|
|crypto.verify('RSA-SHA256')|7,116|3559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:31:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7085.240136336044,"samples":3543},{"name":"crypto.verify('RSA-SHA256')","opsSec":7116.0398441287125,"samples":3559}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,103,405|551703|
|fromUnixToISOString(new Date())|1,819,979|909990|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1103405.655737614,"samples":551703},{"name":"fromUnixToISOString(new Date())","opsSec":1819979.1191301278,"samples":909990}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,307|9654|
|Intl.DateTimeFormat().format(new Date())|21,028|10515|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,699|11350|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,120|11061|
|Reusing Intl.DateTimeFormat()|926,094|463048|
|Date.toLocaleDateString()|925,165|462583|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,035|11518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:43:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19307.5721055875,"samples":9654},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21028.63166693291,"samples":10515},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22699.739543185533,"samples":11350},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22120.36145634186,"samples":11061},{"name":"Reusing Intl.DateTimeFormat()","opsSec":926094.9646257048,"samples":463048},{"name":"Date.toLocaleDateString()","opsSec":925165.7594574775,"samples":462583},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23035.45180232274,"samples":11518}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|854,974|427488|
|Using brackets {}|890,027|445014|
|Using '' + |865,241|432621|
|Using date.toString()|956,722|478362|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":854974.2524323583,"samples":427488},{"name":"Using brackets {}","opsSec":890027.1099733285,"samples":445014},{"name":"Using '' + ","opsSec":865241.441053725,"samples":432621},{"name":"Using date.toString()","opsSec":956722.1477864085,"samples":478362}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,968,345|1484173|
|Using delete property (proto: null)|7,667,080|3833541|
|Using delete property (cached proto: null)|2,956,505|1478253|
|Using undefined assignment|12,935,472|6467737|
|Using undefined assignment (proto: null)|7,551,303|3775652|
|Using undefined property (cached proto: null)|12,125,479|6062740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:59:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2968345.0441950774,"samples":1484173},{"name":"Using delete property (proto: null)","opsSec":7667080.71190412,"samples":3833541},{"name":"Using delete property (cached proto: null)","opsSec":2956505.798956462,"samples":1478253},{"name":"Using undefined assignment","opsSec":12935472.34421672,"samples":6467737},{"name":"Using undefined assignment (proto: null)","opsSec":7551303.62245991,"samples":3775652},{"name":"Using undefined property (cached proto: null)","opsSec":12125479.418017728,"samples":6062740}]}-->

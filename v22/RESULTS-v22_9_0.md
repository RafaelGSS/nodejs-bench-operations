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

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|303,396|151699|
|NodeError|302,625|151313|
|NodeError Range|303,314|151658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:04:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":303396.3792566144,"samples":151699},{"name":"NodeError","opsSec":302625.4613267332,"samples":151313},{"name":"NodeError Range","opsSec":303314.98753454007,"samples":151658}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,516,901|758451|
|Function returning explicitly undefined|1,489,833|744917|
|Function returning implicitly undefined|1,526,960|763481|
|Function returning string|1,513,134|756568|
|Function returning integer|1,519,698|759850|
|Function returning float|1,507,613|753808|
|Function returning functions|1,454,299|727150|
|Function returning arrow functions|1,500,007|750004|
|Function returning empty object|1,527,628|763815|
|Function returning empty array|1,512,435|756218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:16:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1516901.7117884778,"samples":758451},{"name":"Function returning explicitly undefined","opsSec":1489833.058424061,"samples":744917},{"name":"Function returning implicitly undefined","opsSec":1526960.1340540512,"samples":763481},{"name":"Function returning string","opsSec":1513134.3900241668,"samples":756568},{"name":"Function returning integer","opsSec":1519698.4590260922,"samples":759850},{"name":"Function returning float","opsSec":1507613.7204818092,"samples":753808},{"name":"Function returning functions","opsSec":1454299.4706270574,"samples":727150},{"name":"Function returning arrow functions","opsSec":1500007.6699970877,"samples":750004},{"name":"Function returning empty object","opsSec":1527628.6893002095,"samples":763815},{"name":"Function returning empty array","opsSec":1512435.718686784,"samples":756218}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,960,811|6980406|
|using Array.includes (first item)|14,771,984|7385993|
|Using raw comparison|15,048,871|7524436|
|Using raw comparison (first item)|14,843,258|7421630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13960811.246174347,"samples":6980406},{"name":"using Array.includes (first item)","opsSec":14771984.197910072,"samples":7385993},{"name":"Using raw comparison","opsSec":15048871.368007082,"samples":7524436},{"name":"Using raw comparison (first item)","opsSec":14843258.604832795,"samples":7421630}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,232,713|6616357|
|Using Object.getOwnPropertyNames()|13,297,855|6648928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:34:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":13232713.020797873,"samples":6616357},{"name":"Using Object.getOwnPropertyNames()","opsSec":13297855.122330284,"samples":6648928}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,348,123|7174062|
|Length = 10_000 - Array.at|14,348,893|7174447|
|Length = 1_000_000 - Array.at|14,142,108|7071055|
|Length = 100 - Array[length - 1]|13,827,543|6913772|
|Length = 10_000 - Array[length - 1]|13,840,552|6920277|
|Length = 1_000_000 - Array[length - 1]|13,711,475|6855738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:47:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14348123.971374417,"samples":7174062},{"name":"Length = 10_000 - Array.at","opsSec":14348893.512226509,"samples":7174447},{"name":"Length = 1_000_000 - Array.at","opsSec":14142108.331265945,"samples":7071055},{"name":"Length = 100 - Array[length - 1]","opsSec":13827543.198013289,"samples":6913772},{"name":"Length = 10_000 - Array[length - 1]","opsSec":13840552.228276592,"samples":6920277},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13711475.259731729,"samples":6855738}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,276,378|7638190|
|~ (small)|15,463,406|7731704|
|Math.floor (long)|15,142,725|7571363|
|~ (long)|15,204,422|7602212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:58:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":15276378.686248606,"samples":7638190},{"name":"~ (small)","opsSec":15463406.453925367,"samples":7731704},{"name":"Math.floor (long)","opsSec":15142725.54568172,"samples":7571363},{"name":"~ (long)","opsSec":15204422.509902038,"samples":7602212}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,591,288|5795645|
|Object.create({})|1,786,448|893225|
|Cached Empty.prototype|14,724,207|7362104|
|Empty.prototype|2,132,075|1066038|
|Empty class|1,176,485|588243|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:08:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11591288.794584708,"samples":5795645},{"name":"Object.create({})","opsSec":1786448.6887452828,"samples":893225},{"name":"Cached Empty.prototype","opsSec":14724207.999916168,"samples":7362104},{"name":"Empty.prototype","opsSec":2132075.9701478705,"samples":1066038},{"name":"Empty class","opsSec":1176485.882355378,"samples":588243}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,053,802|7526902|
|Using optional chain (obj.field?.field2) (undefined)|15,128,036|7564019|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,464,271|7232136|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,185,914|7592958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:18:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15053802.946258465,"samples":7526902},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15128036.759486806,"samples":7564019},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14464271.363342732,"samples":7232136},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15185914.906702813,"samples":7592958}]}-->

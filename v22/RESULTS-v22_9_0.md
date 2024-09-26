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

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,453,462|7226732|
|Using parseInt(x, 10) - big number (10 len)|14,156,415|7078208|
|Using + - small number (2 len)|14,533,943|7266972|
|Using + - big number (10 len)|14,461,447|7230724|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:29:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14453462.554593626,"samples":7226732},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14156415.54703853,"samples":7078208},{"name":"Using + - small number (2 len)","opsSec":14533943.854681768,"samples":7266972},{"name":"Using + - big number (10 len)","opsSec":14461447.855309501,"samples":7230724}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,068,995|534498|
|Using ? operator to avoid rejection|1,048,615|524308|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:34:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":1068995.5788158122,"samples":534498},{"name":"Using ? operator to avoid rejection","opsSec":1048615.5029563427,"samples":524308}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,595,880|6797941|
|Raw usage underscore usage|13,570,850|6785426|
|Manipulating private properties using #|14,314,939|7157470|
|Manipulating private properties using underscore(_)|14,372,781|7186391|
|Manipulating private properties using Symbol|14,366,256|7183129|
|Manipulating private properties using PrivateSymbol|11,111,259|5555630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:47:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":13595880.803662194,"samples":6797941},{"name":"Raw usage underscore usage","opsSec":13570850.452919958,"samples":6785426},{"name":"Manipulating private properties using #","opsSec":14314939.227137066,"samples":7157470},{"name":"Manipulating private properties using underscore(_)","opsSec":14372781.913648037,"samples":7186391},{"name":"Manipulating private properties using Symbol","opsSec":14366256.793195136,"samples":7183129},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11111259.622199906,"samples":5555630}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,796,298|2398150|
|Adding property in the object creation - small object|4,787,081|2393541|
|Adding property after the function creation - small class|263,141|131571|
|Adding property in the function creation - small class|277,372|139443|
|Adding property after the class creation - small class|266,897|133449|
|Adding property in the class creation - small class|271,490|135746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:54:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4796298.618664972,"samples":2398150},{"name":"Adding property in the object creation - small object","opsSec":4787081.348981359,"samples":2393541},{"name":"Adding property after the function creation - small class","opsSec":263141.9331621887,"samples":131571},{"name":"Adding property in the function creation - small class","opsSec":277372.7734183189,"samples":139443},{"name":"Adding property after the class creation - small class","opsSec":266897.8900383389,"samples":133449},{"name":"Adding property in the class creation - small class","opsSec":271490.469336994,"samples":135746}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,922,806|7461404|
|Getter|12,436,136|6218069|
|Method|14,489,532|7244863|
|DefineProperty (getter)|14,526,309|7263155|
|DefineProperty (getter & enumerable=false)|12,344,798|6172400|
|DefineProperty (getter & configurable=false)|14,707,673|7353837|
|DefineProperty (getter & enumerable=false & configurable=false)|12,552,200|6276104|
|DefineProperty (writable)|14,533,995|7266998|
|DefineProperty (writable & enumerable=false)|14,690,064|7345033|
|DefineProperty (writable & enumerable=false & configurable=false)|14,779,128|7389565|
|DefineProperties (getter)|12,530,857|6265429|
|DefineProperties (getter & enumerable=false)|12,684,299|6342150|
|DefineProperties (getter & enumerable=false & configurable=false)|12,721,558|6360780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:19:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14922806.776145719,"samples":7461404},{"name":"Getter","opsSec":12436136.557601852,"samples":6218069},{"name":"Method","opsSec":14489532.101126479,"samples":7244863},{"name":"DefineProperty (getter)","opsSec":14526309.244655127,"samples":7263155},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12344798.691348681,"samples":6172400},{"name":"DefineProperty (getter & configurable=false)","opsSec":14707673.823006822,"samples":7353837},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12552200.51857617,"samples":6276104},{"name":"DefineProperty (writable)","opsSec":14533995.157180909,"samples":7266998},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14690064.824593902,"samples":7345033},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14779128.285163313,"samples":7389565},{"name":"DefineProperties (getter)","opsSec":12530857.774502654,"samples":6265429},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12684299.56825985,"samples":6342150},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12721558.422496602,"samples":6360780}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,712,693|7356347|
|Setter|5,950,622|2975312|
|Method|14,704,864|7352433|
|DefineProperty (setter)|14,973,781|7486891|
|DefineProperty (setter & enumerable=false)|5,962,052|2981027|
|DefineProperty (setter & configurable=false)|5,992,316|2996159|
|DefineProperty (setter & enumerable=false & configurable=false)|6,040,636|3020319|
|DefineProperty (writable)|14,621,531|7310766|
|DefineProperty (writable & enumerable=false)|14,702,740|7351371|
|DefineProperty (writable & enumerable=false & configurable=false)|14,641,900|7320951|
|DefineProperties (setter)|14,865,137|7432569|
|DefineProperties (setter & enumerable=false)|6,002,733|3001367|
|DefineProperties (setter & enumerable=false & configurable=false)|5,984,869|2992435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14712693.676255973,"samples":7356347},{"name":"Setter","opsSec":5950622.5004825415,"samples":2975312},{"name":"Method","opsSec":14704864.50013755,"samples":7352433},{"name":"DefineProperty (setter)","opsSec":14973781.071438087,"samples":7486891},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5962052.903040197,"samples":2981027},{"name":"DefineProperty (setter & configurable=false)","opsSec":5992316.525921986,"samples":2996159},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6040636.961102828,"samples":3020319},{"name":"DefineProperty (writable)","opsSec":14621531.386032714,"samples":7310766},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14702740.559057124,"samples":7351371},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14641900.682616062,"samples":7320951},{"name":"DefineProperties (setter)","opsSec":14865137.049286347,"samples":7432569},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6002733.0034450935,"samples":3001367},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5984869.54504647,"samples":2992435}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,559,957|1279979|
|Using replaceAll()|2,369,947|1184974|
|Using replaceAll(//g)|2,348,678|1174340|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2559957.0425742334,"samples":1279979},{"name":"Using replaceAll()","opsSec":2369947.725088544,"samples":1184974},{"name":"Using replaceAll(//g)","opsSec":2348678.769289815,"samples":1174340}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,696,738|4848370|
|{ ...object, __proto__: null }|2,080,951|1040476|
|{ ...object, newProp: true }|9,522,061|4761031|
|structuredClone|286,424|143213|
|JSON.parse + JSON.stringify|270,497|135249|
|loop + object.keys starting with {}|1,407,148|703575|
|loop + object.keys starting with { __proto__: null }|803,021|401511|
|loop + object.keys starting with { randomProp: true }|550,297|275149|
|object.keys + reduce(FN, {})|1,399,920|699961|
|object.keys + reduce(FN, { __proto__: null })|759,760|379881|
|object.keys + reduce(FN, { newProp: true })|565,037|282519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:55:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9696738.79772431,"samples":4848370},{"name":"{ ...object, __proto__: null }","opsSec":2080951.388192272,"samples":1040476},{"name":"{ ...object, newProp: true }","opsSec":9522061.428672796,"samples":4761031},{"name":"structuredClone","opsSec":286424.94595675485,"samples":143213},{"name":"JSON.parse + JSON.stringify","opsSec":270497.36974110804,"samples":135249},{"name":"loop + object.keys starting with {}","opsSec":1407148.632247739,"samples":703575},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":803021.9004241289,"samples":401511},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":550297.1679516777,"samples":275149},{"name":"object.keys + reduce(FN, {})","opsSec":1399920.4264944694,"samples":699961},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":759760.3011757232,"samples":379881},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":565037.5276288863,"samples":282519}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|294,702|147352|
|Sort using first char|1,072,229|536115|
|Sort using localeCompare|1,002,594|501298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:00:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":294702.67678499996,"samples":147352},{"name":"Sort using first char","opsSec":1072229.114338877,"samples":536115},{"name":"Sort using localeCompare","opsSec":1002594.0870506404,"samples":501298}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,748|875|
|{...smallObject} - Total keys: 2|11,655,721|5827861|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,249|1125|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,711|3356|
|{ ...bigObject, ...anotherBigObject }|1,075|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,565,558|3282780|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,310,909|5155555|
|{ ...smallObject, ...anotherSmallObject }|8,185,803|4092902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:10:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1748.2265395586446,"samples":875},{"name":"{...smallObject} - Total keys: 2","opsSec":11655721.860143164,"samples":5827861},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2249.6248975447456,"samples":1125},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6711.572942615001,"samples":3356},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1075.347176085653,"samples":538},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6565558.831209416,"samples":3282780},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10310909.37033985,"samples":5155555},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8185803.246928835,"samples":4092902}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,077|1039|
|streams.web.Readable reading 1e3 * "some data"|1,701|851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:15:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2077.121992225405,"samples":1039},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1701.5403220758162,"samples":851}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,366|5184|
|streams.web.WritableStream writing 1e3 * "some data"|1,853|936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:21:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":10366.203454012533,"samples":5184},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1853.9157856615168,"samples":936}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|13,664,179|6832090|
|Using backtick (`)|13,843,917|6921959|
|Using array.join|5,651,921|2825961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:29:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":13664179.016064942,"samples":6832090},{"name":"Using backtick (`)","opsSec":13843917.39077506,"samples":6921959},{"name":"Using array.join","opsSec":5651921.740020271,"samples":2825961}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,795,573|7397787|
|(short string) (true) String#slice and strict comparison|13,232,784|6616393|
|(long string) (true) String#endsWith|14,038,049|7019025|
|(long string) (true) String#slice and strict comparison|12,776,337|6388169|
|(short string) (false) String#endsWith|14,883,863|7441932|
|(short string) (false) String#slice and strict comparison|13,125,472|6562737|
|(long string) (false) String#endsWith|14,876,035|7438018|
|(long string) (false) String#slice and strict comparison|12,946,880|6473441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:49:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14795573.20103092,"samples":7397787},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13232784.517802754,"samples":6616393},{"name":"(long string) (true) String#endsWith","opsSec":14038049.298075235,"samples":7019025},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12776337.795610504,"samples":6388169},{"name":"(short string) (false) String#endsWith","opsSec":14883863.880491538,"samples":7441932},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13125472.188558547,"samples":6562737},{"name":"(long string) (false) String#endsWith","opsSec":14876035.940143198,"samples":7438018},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12946880.213624962,"samples":6473441}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,276,426|4138215|
|Using indexof|8,118,718|4059360|
|Using RegExp.test|7,577,325|3788663|
|Using RegExp.text with cached regex pattern|7,667,493|3833747|
|Using new RegExp.test|3,511,989|1755995|
|Using new RegExp.test with cached regex pattern|3,875,500|1937751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:59:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8276426.441121334,"samples":4138215},{"name":"Using indexof","opsSec":8118718.489909284,"samples":4059360},{"name":"Using RegExp.test","opsSec":7577325.136173781,"samples":3788663},{"name":"Using RegExp.text with cached regex pattern","opsSec":7667493.248640247,"samples":3833747},{"name":"Using new RegExp.test","opsSec":3511989.9367909315,"samples":1755995},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3875500.395550809,"samples":1937751}]}-->

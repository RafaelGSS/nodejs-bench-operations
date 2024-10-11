## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|104,329,710|52173974|
|Using dot notation|71,123,845|35564524|
|Using define property (writable)|4,265,114|2132850|
|Using define property initialized (writable)|5,560,742|2780678|
|Using define property (getter)|2,091,548|1051454|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:40:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":104329710.12337333,"samples":52173974},{"name":"Using dot notation","opsSec":71123845.71742885,"samples":35564524},{"name":"Using define property (writable)","opsSec":4265114.689780892,"samples":2132850},{"name":"Using define property initialized (writable)","opsSec":5560742.494402077,"samples":2780678},{"name":"Using define property (getter)","opsSec":2091548.5238823895,"samples":1051454}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.081ms
new Array(length)|100|0.008ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|31.572ms
new Array(length)|1,000,000|7.443ms
array.push|100,000,000|1,821.839ms
new Array(length)|100,000,000|4,401.088ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.013ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|28.286ms
new Array(length)|1,000,000|4.668ms
array.push|100,000,000|2,555.187ms
new Array(length)|100,000,000|4,078.468ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|259|131|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:04:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Array","opsSec":259.5336136584291,"samples":131},{"name":"Array.from","opsSec":22.47978675179732,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|627|314|
|new Blob (1024)|505|260|
|text (128)|4,422|2212|
|text (1024)|552|277|
|arrayBuffer (128)|4,484|2243|
|arrayBuffer (1024)|553|277|
|slice (0, 64)|69,102|34552|
|slice (0, 512)|29,045|14523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:13:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":627.9110212408193,"samples":314},{"name":"new Blob (1024)","opsSec":505.4308977636943,"samples":260},{"name":"text (128)","opsSec":4422.7611492205015,"samples":2212},{"name":"text (1024)","opsSec":552.9069814105337,"samples":277},{"name":"arrayBuffer (128)","opsSec":4484.860307298507,"samples":2243},{"name":"arrayBuffer (1024)","opsSec":553.5035825629352,"samples":277},{"name":"slice (0, 64)","opsSec":69102.59514424126,"samples":34552},{"name":"slice (0, 512)","opsSec":29045.556416260915,"samples":14523}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|391,289|195851|
|[True conditional] Using constructor name|322,044|161041|
|[True conditional] Check if property is valid then instanceof |306,528|154290|
|[False conditional] Using instanceof only|94,749,928|47375174|
|[False conditional] Using constructor name|96,320,769|48168490|
|[False conditional] Check if property is valid then instanceof |96,570,652|48285335|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:09:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":391289.41739508905,"samples":195851},{"name":"[True conditional] Using constructor name","opsSec":322044.9081556583,"samples":161041},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":306528.4285240491,"samples":154290},{"name":"[False conditional] Using instanceof only","opsSec":94749928.06831878,"samples":47375174},{"name":"[False conditional] Using constructor name","opsSec":96320769.40715031,"samples":48168490},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96570652.231,"samples":48285335}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,858|3430|
|crypto.verify('RSA-SHA256')|6,540|3271|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:10:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6858.39572522233,"samples":3430},{"name":"crypto.verify('RSA-SHA256')","opsSec":6540.827556660469,"samples":3271}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,438,841|719447|
|fromUnixToISOString(new Date())|1,981,798|991141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:12:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1438841.1197111683,"samples":719447},{"name":"fromUnixToISOString(new Date())","opsSec":1981798.1994599514,"samples":991141}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,559|8780|
|Intl.DateTimeFormat().format(new Date())|17,415|8708|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,153|9077|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,948|8975|
|Reusing Intl.DateTimeFormat()|520,439|273331|
|Date.toLocaleDateString()|935,529|467774|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,023|10512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:14:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17559.269604621528,"samples":8780},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17415.33860027064,"samples":8708},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18153.37265574776,"samples":9077},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17948.88681004004,"samples":8975},{"name":"Reusing Intl.DateTimeFormat()","opsSec":520439.40157292614,"samples":273331},{"name":"Date.toLocaleDateString()","opsSec":935529.2052182672,"samples":467774},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21023.275453834758,"samples":10512}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|971,182|490750|
|Using brackets {}|998,070|506820|
|Using '' + |1,050,519|525272|
|Using date.toString()|1,142,526|571272|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:16:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":971182.8026547086,"samples":490750},{"name":"Using brackets {}","opsSec":998070.7176053429,"samples":506820},{"name":"Using '' + ","opsSec":1050519.8758615707,"samples":525272},{"name":"Using date.toString()","opsSec":1142526.5444794535,"samples":571272}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,571,990|1786099|
|Using delete property (proto: null)|15,594,863|7802893|
|Using delete property (cached proto: null)|3,567,752|1783878|
|Using undefined assignment|74,484,335|37550095|
|Using undefined assignment (proto: null)|16,880,712|8440545|
|Using undefined property (cached proto: null)|74,742,914|37384796|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:18:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3571990.4602102814,"samples":1786099},{"name":"Using delete property (proto: null)","opsSec":15594863.357704265,"samples":7802893},{"name":"Using delete property (cached proto: null)","opsSec":3567752.7248029984,"samples":1783878},{"name":"Using undefined assignment","opsSec":74484335.78446214,"samples":37550095},{"name":"Using undefined assignment (proto: null)","opsSec":16880712.34470342,"samples":8440545},{"name":"Using undefined property (cached proto: null)","opsSec":74742914.45999928,"samples":37384796}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|367,840|184083|
|NodeError|310,259|155130|
|NodeError Range|303,384|151693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:20:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Error","opsSec":367840.96248327516,"samples":184083},{"name":"NodeError","opsSec":310259.9168503423,"samples":155130},{"name":"NodeError Range","opsSec":303384.69301874243,"samples":151693}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,842,335|922626|
|Function returning explicitly undefined|1,833,188|916659|
|Function returning implicitly undefined|1,612,332|806469|
|Function returning string|1,592,393|796224|
|Function returning integer|1,615,449|807725|
|Function returning float|1,600,575|800300|
|Function returning functions|1,728,963|864930|
|Function returning arrow functions|1,667,010|833713|
|Function returning empty object|1,893,860|947624|
|Function returning empty array|1,900,973|951022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:22:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1842335.788787957,"samples":922626},{"name":"Function returning explicitly undefined","opsSec":1833188.2176069464,"samples":916659},{"name":"Function returning implicitly undefined","opsSec":1612332.2145403528,"samples":806469},{"name":"Function returning string","opsSec":1592393.1133941675,"samples":796224},{"name":"Function returning integer","opsSec":1615449.5121342475,"samples":807725},{"name":"Function returning float","opsSec":1600575.4855858628,"samples":800300},{"name":"Function returning functions","opsSec":1728963.446005074,"samples":864930},{"name":"Function returning arrow functions","opsSec":1667010.3076416452,"samples":833713},{"name":"Function returning empty object","opsSec":1893860.5804650784,"samples":947624},{"name":"Function returning empty array","opsSec":1900973.5959856252,"samples":951022}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,991,005|43594809|
|using Array.includes (first item)|85,327,936|42663982|
|Using raw comparison|97,242,716|48621366|
|Using raw comparison (first item)|97,952,448|49028894|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:24:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":86991005.8767885,"samples":43594809},{"name":"using Array.includes (first item)","opsSec":85327936.18309279,"samples":42663982},{"name":"Using raw comparison","opsSec":97242716.24667996,"samples":48621366},{"name":"Using raw comparison (first item)","opsSec":97952448.1740895,"samples":49028894}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,635,675|24325475|
|Using Object.getOwnPropertyNames()|42,003,557|21003328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:25:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using Object.keys()","opsSec":48635675.576999635,"samples":24325475},{"name":"Using Object.getOwnPropertyNames()","opsSec":42003557.22956894,"samples":21003328}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,456,032|66228045|
|Length = 10_000 - Array.at|95,082,559|47572254|
|Length = 1_000_000 - Array.at|96,724,232|48363839|
|Length = 100 - Array[length - 1]|96,080,728|48042617|
|Length = 10_000 - Array[length - 1]|96,345,670|48174562|
|Length = 1_000_000 - Array[length - 1]|96,450,244|48240266|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:28:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132456032.77899384,"samples":66228045},{"name":"Length = 10_000 - Array.at","opsSec":95082559.62059087,"samples":47572254},{"name":"Length = 1_000_000 - Array.at","opsSec":96724232.48939027,"samples":48363839},{"name":"Length = 100 - Array[length - 1]","opsSec":96080728.77462776,"samples":48042617},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96345670.9711524,"samples":48174562},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96450244.11564134,"samples":48240266}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|142,459,899|71231304|
|~ (small)|95,391,820|47725888|
|Math.floor (long)|95,458,726|47729371|
|~ (long)|97,514,652|48757890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:30:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":142459899.5523897,"samples":71231304},{"name":"~ (small)","opsSec":95391820.71441187,"samples":47725888},{"name":"Math.floor (long)","opsSec":95458726.72660373,"samples":47729371},{"name":"~ (long)","opsSec":97514652.92564149,"samples":48757890}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,642,059|21821036|
|Object.create({})|1,865,570|956354|
|Cached Empty.prototype|116,228,912|58228115|
|Empty.prototype|2,199,115|1122259|
|Empty class|1,433,958|720981|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:31:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":43642059.95479146,"samples":21821036},{"name":"Object.create({})","opsSec":1865570.805288709,"samples":956354},{"name":"Cached Empty.prototype","opsSec":116228912.51485518,"samples":58228115},{"name":"Empty.prototype","opsSec":2199115.2555576684,"samples":1122259},{"name":"Empty class","opsSec":1433958.8890256921,"samples":720981}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,232,517|74129680|
|Using optional chain (obj.field?.field2) (undefined)|97,356,653|48683619|
|Using and operator (obj.field && obj.field.field2) (Valid)|99,335,593|49667801|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,777,634|48891357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:33:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148232517.7592191,"samples":74129680},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97356653.18995188,"samples":48683619},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":99335593.65581013,"samples":49667801},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97777634.25634512,"samples":48891357}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|129,455,984|64728022|
|Using parseInt(x, 10) - big number (10 len)|99,003,035|49501830|
|Using + - small number (2 len)|98,904,010|49459885|
|Using + - big number (10 len)|98,001,494|49006299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:35:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129455984.70915902,"samples":64728022},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99003035.2908473,"samples":49501830},{"name":"Using + - small number (2 len)","opsSec":98904010.43716893,"samples":49459885},{"name":"Using + - big number (10 len)","opsSec":98001494.82264256,"samples":49006299}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|976,273|489681|
|Using ? operator to avoid rejection|1,053,010|528456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:37:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using if to check function existence","opsSec":976273.6967910666,"samples":489681},{"name":"Using ? operator to avoid rejection","opsSec":1053010.5705638074,"samples":528456}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|133,778,344|66894730|
|Raw usage underscore usage|96,928,153|48508326|
|Manipulating private properties using #|96,681,326|48351233|
|Manipulating private properties using underscore(_)|98,361,747|49192982|
|Manipulating private properties using Symbol|98,029,334|49018230|
|Manipulating private properties using PrivateSymbol|34,913,410|17484046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:39:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":133778344.6249018,"samples":66894730},{"name":"Raw usage underscore usage","opsSec":96928153.10679998,"samples":48508326},{"name":"Manipulating private properties using #","opsSec":96681326.24129204,"samples":48351233},{"name":"Manipulating private properties using underscore(_)","opsSec":98361747.33780542,"samples":49192982},{"name":"Manipulating private properties using Symbol","opsSec":98029334.24769352,"samples":49018230},{"name":"Manipulating private properties using PrivateSymbol","opsSec":34913410.61629276,"samples":17484046}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,571,620|3789093|
|Adding property in the object creation - small object|7,028,700|3515361|
|Adding property after the function creation - small class|235,161|117806|
|Adding property in the function creation - small class|246,741|123699|
|Adding property after the class creation - small class|239,689|121390|
|Adding property in the class creation - small class|243,354|123295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:40:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7571620.859558062,"samples":3789093},{"name":"Adding property in the object creation - small object","opsSec":7028700.3911361,"samples":3515361},{"name":"Adding property after the function creation - small class","opsSec":235161.32226201508,"samples":117806},{"name":"Adding property in the function creation - small class","opsSec":246741.2822857544,"samples":123699},{"name":"Adding property after the class creation - small class","opsSec":239689.57492950434,"samples":121390},{"name":"Adding property in the class creation - small class","opsSec":243354.0683881638,"samples":123295}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|146,476,172|73238109|
|Getter|50,730,736|25386675|
|Method|98,170,661|49085341|
|DefineProperty (getter)|100,546,805|50273538|
|DefineProperty (getter & enumerable=false)|51,223,026|25619513|
|DefineProperty (getter & configurable=false)|99,849,754|49926266|
|DefineProperty (getter & enumerable=false & configurable=false)|51,672,360|25837319|
|DefineProperty (writable)|98,757,294|49378885|
|DefineProperty (writable & enumerable=false)|98,884,315|49442171|
|DefineProperty (writable & enumerable=false & configurable=false)|96,236,234|48118150|
|DefineProperties (getter)|50,821,909|25410957|
|DefineProperties (getter & enumerable=false)|50,674,795|25467204|
|DefineProperties (getter & enumerable=false & configurable=false)|52,145,826|26072956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:43:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":146476172.88533875,"samples":73238109},{"name":"Getter","opsSec":50730736.58711272,"samples":25386675},{"name":"Method","opsSec":98170661.3841611,"samples":49085341},{"name":"DefineProperty (getter)","opsSec":100546805.52909312,"samples":50273538},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51223026.18043438,"samples":25619513},{"name":"DefineProperty (getter & configurable=false)","opsSec":99849754.77892058,"samples":49926266},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51672360.17901859,"samples":25837319},{"name":"DefineProperty (writable)","opsSec":98757294.18735659,"samples":49378885},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98884315.30123487,"samples":49442171},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96236234.36688817,"samples":48118150},{"name":"DefineProperties (getter)","opsSec":50821909.8326034,"samples":25410957},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50674795.85202092,"samples":25467204},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52145826.48084457,"samples":26072956}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|136,223,171|68115785|
|Setter|10,420,666|5210336|
|Method|98,168,430|49085209|
|DefineProperty (setter)|102,167,999|51084008|
|DefineProperty (setter & enumerable=false)|10,679,671|5339939|
|DefineProperty (setter & configurable=false)|10,353,368|5176686|
|DefineProperty (setter & enumerable=false & configurable=false)|10,577,395|5288701|
|DefineProperty (writable)|102,178,623|51089886|
|DefineProperty (writable & enumerable=false)|103,071,226|51537584|
|DefineProperty (writable & enumerable=false & configurable=false)|100,017,756|50008932|
|DefineProperties (setter)|95,444,580|47722302|
|DefineProperties (setter & enumerable=false)|10,232,778|5116392|
|DefineProperties (setter & enumerable=false & configurable=false)|10,242,243|5121123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":136223171.5690264,"samples":68115785},{"name":"Setter","opsSec":10420666.039379025,"samples":5210336},{"name":"Method","opsSec":98168430.0892907,"samples":49085209},{"name":"DefineProperty (setter)","opsSec":102167999.04011217,"samples":51084008},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10679671.262923691,"samples":5339939},{"name":"DefineProperty (setter & configurable=false)","opsSec":10353368.728335483,"samples":5176686},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10577395.399705272,"samples":5288701},{"name":"DefineProperty (writable)","opsSec":102178623.30791678,"samples":51089886},{"name":"DefineProperty (writable & enumerable=false)","opsSec":103071226.14402735,"samples":51537584},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100017756.38089414,"samples":50008932},{"name":"DefineProperties (setter)","opsSec":95444580.13885497,"samples":47722302},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10232778.126385355,"samples":5116392},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10242243.582830515,"samples":5121123}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,341,033|1670895|
|Using replaceAll()|2,848,990|1424886|
|Using replaceAll(//g)|2,879,067|1439534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3341033.870578546,"samples":1670895},{"name":"Using replaceAll()","opsSec":2848990.3567037154,"samples":1424886},{"name":"Using replaceAll(//g)","opsSec":2879067.0096009485,"samples":1439534}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,974,899|10487453|
|{ ...object, __proto__: null }|20,709,427|10356416|
|{ ...object, newProp: true }|787,462|395092|
|structuredClone|290,566|145284|
|JSON.parse + JSON.stringify|197,292|98648|
|loop + object.keys starting with {}|1,551,480|776157|
|loop + object.keys starting with { __proto__: null }|835,771|417886|
|loop + object.keys starting with { randomProp: true }|625,861|313122|
|object.keys + reduce(FN, {})|1,593,713|796859|
|object.keys + reduce(FN, { __proto__: null })|866,067|433035|
|object.keys + reduce(FN, { newProp: true })|619,391|309810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:49:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":20974899.749479875,"samples":10487453},{"name":"{ ...object, __proto__: null }","opsSec":20709427.16308012,"samples":10356416},{"name":"{ ...object, newProp: true }","opsSec":787462.3176154951,"samples":395092},{"name":"structuredClone","opsSec":290566.3315681242,"samples":145284},{"name":"JSON.parse + JSON.stringify","opsSec":197292.38718180594,"samples":98648},{"name":"loop + object.keys starting with {}","opsSec":1551480.867186168,"samples":776157},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":835771.3079813571,"samples":417886},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":625861.7111495957,"samples":313122},{"name":"object.keys + reduce(FN, {})","opsSec":1593713.3782312032,"samples":796859},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":866067.3550302978,"samples":433035},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":619391.82348493,"samples":309810}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|251,454|125754|
|Sort using first char|1,319,730|659946|
|Sort using localeCompare|1,219,974|610032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:51:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":251454.63277746714,"samples":125754},{"name":"Sort using first char","opsSec":1319730.3515081652,"samples":659946},{"name":"Sort using localeCompare","opsSec":1219974.495351174,"samples":610032}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,880|941|
|{...smallObject} - Total keys: 2|52,318,986|26159610|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,062|532|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,595|3298|
|{ ...bigObject, ...anotherBigObject }|1,156|579|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,126,658|6564725|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,381,113|13690559|
|{ ...smallObject, ...anotherSmallObject }|20,503,551|10254837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:54:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1880.9753311644467,"samples":941},{"name":"{...smallObject} - Total keys: 2","opsSec":52318986.13413198,"samples":26159610},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1062.315755734334,"samples":532},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6595.191086622844,"samples":3298},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1156.7479452780146,"samples":579},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13126658.852274923,"samples":6564725},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27381113.399972953,"samples":13690559},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20503551.63948045,"samples":10254837}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,045|1032|
|streams.web.Readable reading 1e3 * "some data"|1,639|820|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:55:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2045.432978947601,"samples":1032},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1639.0805348268614,"samples":820}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,238|3122|
|streams.web.WritableStream writing 1e3 * "some data"|1,375|688|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:56:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6238.988619737036,"samples":3122},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1375.7659712021707,"samples":688}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|143,823,046|71911562|
|Using backtick (`)|95,945,686|47973264|
|Using array.join|10,133,627|5067620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:59:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":143823046.04790905,"samples":71911562},{"name":"Using backtick (`)","opsSec":95945686.17254952,"samples":47973264},{"name":"Using array.join","opsSec":10133627.010321513,"samples":5067620}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|55,254,523|27641625|
|(short string) (true) String#slice and strict comparison|52,806,642|26406512|
|(long string) (true) String#endsWith|45,734,762|22870152|
|(long string) (true) String#slice and strict comparison|47,208,482|23604248|
|(short string) (false) String#endsWith|55,626,229|27818290|
|(short string) (false) String#slice and strict comparison|53,569,781|26784905|
|(long string) (false) String#endsWith|51,187,045|25593528|
|(long string) (false) String#slice and strict comparison|47,258,299|23632410|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:00:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":55254523.50475702,"samples":27641625},{"name":"(short string) (true) String#slice and strict comparison","opsSec":52806642.528477006,"samples":26406512},{"name":"(long string) (true) String#endsWith","opsSec":45734762.867600486,"samples":22870152},{"name":"(long string) (true) String#slice and strict comparison","opsSec":47208482.49837401,"samples":23604248},{"name":"(short string) (false) String#endsWith","opsSec":55626229.07129441,"samples":27818290},{"name":"(short string) (false) String#slice and strict comparison","opsSec":53569781.71515526,"samples":26784905},{"name":"(long string) (false) String#endsWith","opsSec":51187045.35309457,"samples":25593528},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47258299.20535904,"samples":23632410}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|137,347,945|68679082|
|Using indexof|15,676,536|7838271|
|Using RegExp.test|13,297,309|6649900|
|Using RegExp.text with cached regex pattern|13,555,588|6777796|
|Using new RegExp.test|4,369,931|2185097|
|Using new RegExp.test with cached regex pattern|5,118,011|2559018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:03:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":137347945.31286874,"samples":68679082},{"name":"Using indexof","opsSec":15676536.889448972,"samples":7838271},{"name":"Using RegExp.test","opsSec":13297309.467126045,"samples":6649900},{"name":"Using RegExp.text with cached regex pattern","opsSec":13555588.611102847,"samples":6777796},{"name":"Using new RegExp.test","opsSec":4369931.734177042,"samples":2185097},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5118011.597320705,"samples":2559018}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|108,793,108|54397226|
|(short string) (true) String#slice and strict comparison|61,035,223|30520773|
|(long string) (true) String#startsWith|58,874,222|29460708|
|(long string) (true) String#slice and strict comparison|55,868,540|27934318|
|(short string) (false) String#startsWith|96,130,607|48065310|
|(short string) (false) String#slice and strict comparison|60,247,883|30127214|
|(long string) (false) String#startsWith|89,227,075|44613543|
|(long string) (false) String#slice and strict comparison|55,586,914|27802466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:04:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":108793108.4051112,"samples":54397226},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61035223.60532761,"samples":30520773},{"name":"(long string) (true) String#startsWith","opsSec":58874222.65861374,"samples":29460708},{"name":"(long string) (true) String#slice and strict comparison","opsSec":55868540.24132203,"samples":27934318},{"name":"(short string) (false) String#startsWith","opsSec":96130607.31075983,"samples":48065310},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60247883.63388816,"samples":30127214},{"name":"(long string) (false) String#startsWith","opsSec":89227075.11429682,"samples":44613543},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55586914.94677979,"samples":27802466}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|121,166,383|60586761|
|Using this|93,708,518|46855920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:06:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":121166383.1190394,"samples":60586761},{"name":"Using this","opsSec":93708518.9700877,"samples":46855920}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,823,763|5411885|
|Date.now()|18,003,194|9003545|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:08:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":10823763.484094381,"samples":5411885},{"name":"Date.now()","opsSec":18003194.03679766,"samples":9003545}]}-->

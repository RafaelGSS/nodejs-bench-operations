## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,867,993|44940659|
|Using dot notation|65,846,781|32926346|
|Using define property (writable)|4,737,823|2369075|
|Using define property initialized (writable)|7,038,125|3519082|
|Using define property (getter)|2,460,384|1230267|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":89867993.09292814,"samples":44940659},{"name":"Using dot notation","opsSec":65846781.197838984,"samples":32926346},{"name":"Using define property (writable)","opsSec":4737823.611331415,"samples":2369075},{"name":"Using define property initialized (writable)","opsSec":7038125.726672297,"samples":3519082},{"name":"Using define property (getter)","opsSec":2460384.270854813,"samples":1230267}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.071ms
new Array(length)|100|0.007ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.45ms
new Array(length)|10,000|0.291ms
array.push|1,000,000|26.339ms
new Array(length)|1,000,000|6.44ms
array.push|100,000,000|1,806.725ms
new Array(length)|100,000,000|3,999.16ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|153.664ms
new Array(length)|10,000|0.032ms
array.push|1,000,000|16.394ms
new Array(length)|1,000,000|9.022ms
array.push|100,000,000|1,964.952ms
new Array(length)|100,000,000|4,658.797ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|333|168|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:00:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":333.3525156540853,"samples":168},{"name":"Array.from","opsSec":23.582176885487158,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,811|2478|
|new Blob (1024)|609|305|
|text (128)|4,502|2256|
|text (1024)|576|289|
|arrayBuffer (128)|4,595|2301|
|arrayBuffer (1024)|576|290|
|slice (0, 64)|149,389|81730|
|slice (0, 512)|31,777|15892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4811.855778825577,"samples":2478},{"name":"new Blob (1024)","opsSec":609.2005668089959,"samples":305},{"name":"text (128)","opsSec":4502.817233708244,"samples":2256},{"name":"text (1024)","opsSec":576.7245690018558,"samples":289},{"name":"arrayBuffer (128)","opsSec":4595.186698301681,"samples":2301},{"name":"arrayBuffer (1024)","opsSec":576.1932994524917,"samples":290},{"name":"slice (0, 64)","opsSec":149389.67927701026,"samples":81730},{"name":"slice (0, 512)","opsSec":31777.616067597715,"samples":15892}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|444,653|222336|
|[True conditional] Using constructor name|352,333|176167|
|[True conditional] Check if property is valid then instanceof |354,334|177168|
|[False conditional] Using instanceof only|92,512,457|46680802|
|[False conditional] Using constructor name|93,535,788|46767919|
|[False conditional] Check if property is valid then instanceof |93,646,641|46823333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:12:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":444653.4268263615,"samples":222336},{"name":"[True conditional] Using constructor name","opsSec":352333.7146096912,"samples":176167},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":354334.33746328857,"samples":177168},{"name":"[False conditional] Using instanceof only","opsSec":92512457.50101157,"samples":46680802},{"name":"[False conditional] Using constructor name","opsSec":93535788.98724656,"samples":46767919},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":93646641.2772867,"samples":46823333}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,394|3198|
|crypto.verify('RSA-SHA256')|6,683|3342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:18:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6394.91010268138,"samples":3198},{"name":"crypto.verify('RSA-SHA256')","opsSec":6683.005729139641,"samples":3342}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,498,009|749086|
|fromUnixToISOString(new Date())|2,312,765|1156384|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:23:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1498009.2712528638,"samples":749086},{"name":"fromUnixToISOString(new Date())","opsSec":2312765.442081421,"samples":1156384}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,100|10051|
|Intl.DateTimeFormat().format(new Date())|19,587|9794|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,243|9622|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,923|9462|
|Reusing Intl.DateTimeFormat()|575,482|287757|
|Date.toLocaleDateString()|1,166,263|583172|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,668|12335|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20100.318367164768,"samples":10051},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19587.361177802548,"samples":9794},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19243.167540572194,"samples":9622},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18923.07216392566,"samples":9462},{"name":"Reusing Intl.DateTimeFormat()","opsSec":575482.3772433705,"samples":287757},{"name":"Date.toLocaleDateString()","opsSec":1166263.6887498654,"samples":583172},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24668.0422948274,"samples":12335}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,027,448|513860|
|Using brackets {}|1,049,601|524820|
|Using '' + |1,033,762|516882|
|Using date.toString()|1,149,814|575204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:35:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1027448.9260949306,"samples":513860},{"name":"Using brackets {}","opsSec":1049601.4922204535,"samples":524820},{"name":"Using '' + ","opsSec":1033762.1392281494,"samples":516882},{"name":"Using date.toString()","opsSec":1149814.7806594735,"samples":575204}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,450,499|1725404|
|Using delete property (proto: null)|16,675,412|8338556|
|Using delete property (cached proto: null)|3,422,439|1712143|
|Using undefined assignment|72,207,704|36103861|
|Using undefined assignment (proto: null)|17,952,841|8979339|
|Using undefined property (cached proto: null)|72,226,249|36119396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:41:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3450499.17342298,"samples":1725404},{"name":"Using delete property (proto: null)","opsSec":16675412.975522747,"samples":8338556},{"name":"Using delete property (cached proto: null)","opsSec":3422439.4433329864,"samples":1712143},{"name":"Using undefined assignment","opsSec":72207704.23690477,"samples":36103861},{"name":"Using undefined assignment (proto: null)","opsSec":17952841.351748135,"samples":8979339},{"name":"Using undefined property (cached proto: null)","opsSec":72226249.33399315,"samples":36119396}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|416,300|208151|
|NodeError|333,066|166536|
|NodeError Range|331,389|165695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:46:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":416300.6753312511,"samples":208151},{"name":"NodeError","opsSec":333066.46043863,"samples":166536},{"name":"NodeError Range","opsSec":331389.24708363065,"samples":165695}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,903,323|951810|
|Function returning explicitly undefined|1,844,622|922429|
|Function returning implicitly undefined|1,902,010|951113|
|Function returning string|1,853,041|926522|
|Function returning integer|1,806,822|903436|
|Function returning float|1,880,574|940288|
|Function returning functions|1,827,934|913968|
|Function returning arrow functions|1,945,682|972842|
|Function returning empty object|1,983,249|991626|
|Function returning empty array|1,905,263|953770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:52:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1903323.1995869027,"samples":951810},{"name":"Function returning explicitly undefined","opsSec":1844622.6372192265,"samples":922429},{"name":"Function returning implicitly undefined","opsSec":1902010.7874793967,"samples":951113},{"name":"Function returning string","opsSec":1853041.9764781618,"samples":926522},{"name":"Function returning integer","opsSec":1806822.2654103222,"samples":903436},{"name":"Function returning float","opsSec":1880574.8678939294,"samples":940288},{"name":"Function returning functions","opsSec":1827934.88495972,"samples":913968},{"name":"Function returning arrow functions","opsSec":1945682.641913516,"samples":972842},{"name":"Function returning empty object","opsSec":1983249.8104922092,"samples":991626},{"name":"Function returning empty array","opsSec":1905263.8422560997,"samples":953770}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,540,089|42280369|
|using Array.includes (first item)|81,952,860|40993799|
|Using raw comparison|95,678,074|47839047|
|Using raw comparison (first item)|96,095,092|48047565|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:58:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":84540089.25228031,"samples":42280369},{"name":"using Array.includes (first item)","opsSec":81952860.96863267,"samples":40993799},{"name":"Using raw comparison","opsSec":95678074.48167281,"samples":47839047},{"name":"Using raw comparison (first item)","opsSec":96095092.90729414,"samples":48047565}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,776,139|22890074|
|Using Object.getOwnPropertyNames()|41,272,674|20638613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:03:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":45776139.20038567,"samples":22890074},{"name":"Using Object.getOwnPropertyNames()","opsSec":41272674.20185298,"samples":20638613}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|121,957,548|60979027|
|Length = 10_000 - Array.at|89,761,038|44880528|
|Length = 1_000_000 - Array.at|86,528,860|43264454|
|Length = 100 - Array[length - 1]|85,961,671|43260445|
|Length = 10_000 - Array[length - 1]|86,903,256|43451649|
|Length = 1_000_000 - Array[length - 1]|86,800,964|43400491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:09:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":121957548.12009041,"samples":60979027},{"name":"Length = 10_000 - Array.at","opsSec":89761038.5863585,"samples":44880528},{"name":"Length = 1_000_000 - Array.at","opsSec":86528860.06301151,"samples":43264454},{"name":"Length = 100 - Array[length - 1]","opsSec":85961671.84535702,"samples":43260445},{"name":"Length = 10_000 - Array[length - 1]","opsSec":86903256.63404983,"samples":43451649},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":86800964.46620518,"samples":43400491}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|126,370,022|63547482|
|~ (small)|98,820,499|49422197|
|Math.floor (long)|94,821,648|47410840|
|~ (long)|95,601,739|47802739|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:15:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":126370022.40003864,"samples":63547482},{"name":"~ (small)","opsSec":98820499.40088587,"samples":49422197},{"name":"Math.floor (long)","opsSec":94821648.13992622,"samples":47410840},{"name":"~ (long)","opsSec":95601739.58957508,"samples":47802739}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,581,046|21294519|
|Object.create({})|2,098,922|1053956|
|Cached Empty.prototype|82,121,110|41062559|
|Empty.prototype|2,491,134|1246281|
|Empty class|1,710,118|855060|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:21:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":42581046.72979812,"samples":21294519},{"name":"Object.create({})","opsSec":2098922.729536097,"samples":1053956},{"name":"Cached Empty.prototype","opsSec":82121110.32557389,"samples":41062559},{"name":"Empty.prototype","opsSec":2491134.520132736,"samples":1246281},{"name":"Empty class","opsSec":1710118.8781620157,"samples":855060}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|126,550,321|63355075|
|Using optional chain (obj.field?.field2) (undefined)|92,189,126|46094577|
|Using and operator (obj.field && obj.field.field2) (Valid)|92,981,235|46562321|
|Using and operator (obj.field && obj.field.field2) (undefined)|90,923,454|45465509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:26:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":126550321.24697597,"samples":63355075},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":92189126.15888391,"samples":46094577},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":92981235.18135509,"samples":46562321},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":90923454.07785526,"samples":45465509}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|124,940,448|62481897|
|Using parseInt(x, 10) - big number (10 len)|97,971,779|49028505|
|Using + - small number (2 len)|96,837,132|48418580|
|Using + - big number (10 len)|95,442,867|47722595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:32:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":124940448.12762466,"samples":62481897},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97971779.45046706,"samples":49028505},{"name":"Using + - small number (2 len)","opsSec":96837132.69192858,"samples":48418580},{"name":"Using + - big number (10 len)","opsSec":95442867.68414351,"samples":47722595}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,024,769|514480|
|Using ? operator to avoid rejection|1,079,757|539880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:37:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":1024769.3777907802,"samples":514480},{"name":"Using ? operator to avoid rejection","opsSec":1079757.5467908538,"samples":539880}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|132,098,219|66053717|
|Raw usage underscore usage|94,715,938|47357979|
|Manipulating private properties using #|93,429,324|46714698|
|Manipulating private properties using underscore(_)|93,418,421|46709318|
|Manipulating private properties using Symbol|93,936,585|46968307|
|Manipulating private properties using PrivateSymbol|32,018,161|16010715|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:44:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":132098219.35661055,"samples":66053717},{"name":"Raw usage underscore usage","opsSec":94715938.6779485,"samples":47357979},{"name":"Manipulating private properties using #","opsSec":93429324.993713,"samples":46714698},{"name":"Manipulating private properties using underscore(_)","opsSec":93418421.88497704,"samples":46709318},{"name":"Manipulating private properties using Symbol","opsSec":93936585.44327801,"samples":46968307},{"name":"Manipulating private properties using PrivateSymbol","opsSec":32018161.32994615,"samples":16010715}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,868,359|3934251|
|Adding property in the object creation - small object|7,629,791|3815008|
|Adding property after the function creation - small class|272,414|136208|
|Adding property in the function creation - small class|282,905|141456|
|Adding property after the class creation - small class|277,672|138837|
|Adding property in the class creation - small class|279,712|139857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:49:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7868359.299435745,"samples":3934251},{"name":"Adding property in the object creation - small object","opsSec":7629791.638347084,"samples":3815008},{"name":"Adding property after the function creation - small class","opsSec":272414.09854959213,"samples":136208},{"name":"Adding property in the function creation - small class","opsSec":282905.0631678511,"samples":141456},{"name":"Adding property after the class creation - small class","opsSec":277672.12015974656,"samples":138837},{"name":"Adding property in the class creation - small class","opsSec":279712.9007283001,"samples":139857}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|124,849,906|62484920|
|Getter|48,786,123|24393073|
|Method|93,635,023|46817523|
|DefineProperty (getter)|94,323,938|47161995|
|DefineProperty (getter & enumerable=false)|50,238,185|25120137|
|DefineProperty (getter & configurable=false)|95,377,505|47688792|
|DefineProperty (getter & enumerable=false & configurable=false)|48,642,820|24323467|
|DefineProperty (writable)|97,320,980|48662916|
|DefineProperty (writable & enumerable=false)|95,861,205|47930629|
|DefineProperty (writable & enumerable=false & configurable=false)|89,150,586|44580938|
|DefineProperties (getter)|49,935,152|24967594|
|DefineProperties (getter & enumerable=false)|49,808,428|24910067|
|DefineProperties (getter & enumerable=false & configurable=false)|50,424,969|25220539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:56:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":124849906.6826425,"samples":62484920},{"name":"Getter","opsSec":48786123.65595537,"samples":24393073},{"name":"Method","opsSec":93635023.71486436,"samples":46817523},{"name":"DefineProperty (getter)","opsSec":94323938.49912956,"samples":47161995},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50238185.29720808,"samples":25120137},{"name":"DefineProperty (getter & configurable=false)","opsSec":95377505.5996904,"samples":47688792},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48642820.08213437,"samples":24323467},{"name":"DefineProperty (writable)","opsSec":97320980.35448736,"samples":48662916},{"name":"DefineProperty (writable & enumerable=false)","opsSec":95861205.0846148,"samples":47930629},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":89150586.68290718,"samples":44580938},{"name":"DefineProperties (getter)","opsSec":49935152.945522636,"samples":24967594},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49808428.72040013,"samples":24910067},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50424969.54178,"samples":25220539}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|123,594,638|61797965|
|Setter|11,730,811|5865409|
|Method|88,609,632|44305139|
|DefineProperty (setter)|99,056,180|49528172|
|DefineProperty (setter & enumerable=false)|11,685,495|5843602|
|DefineProperty (setter & configurable=false)|11,687,567|5843913|
|DefineProperty (setter & enumerable=false & configurable=false)|11,713,884|5856950|
|DefineProperty (writable)|98,858,364|49429258|
|DefineProperty (writable & enumerable=false)|97,670,986|48835531|
|DefineProperty (writable & enumerable=false & configurable=false)|98,508,406|49427336|
|DefineProperties (setter)|90,495,432|45248341|
|DefineProperties (setter & enumerable=false)|11,558,377|5779218|
|DefineProperties (setter & enumerable=false & configurable=false)|11,655,702|5827858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:03:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":123594638.18884166,"samples":61797965},{"name":"Setter","opsSec":11730811.477668818,"samples":5865409},{"name":"Method","opsSec":88609632.21300043,"samples":44305139},{"name":"DefineProperty (setter)","opsSec":99056180.75541411,"samples":49528172},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11685495.580546124,"samples":5843602},{"name":"DefineProperty (setter & configurable=false)","opsSec":11687567.84500144,"samples":5843913},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11713884.795377536,"samples":5856950},{"name":"DefineProperty (writable)","opsSec":98858364.15355265,"samples":49429258},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97670986.98868199,"samples":48835531},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98508406.28317487,"samples":49427336},{"name":"DefineProperties (setter)","opsSec":90495432.62005726,"samples":45248341},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11558377.029160397,"samples":5779218},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11655702.805744424,"samples":5827858}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,282,388|1641196|
|Using replaceAll()|3,214,030|1607016|
|Using replaceAll(//g)|3,009,626|1504845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3282388.947378279,"samples":1641196},{"name":"Using replaceAll()","opsSec":3214030.5022617863,"samples":1607016},{"name":"Using replaceAll(//g)","opsSec":3009626.4968809155,"samples":1504845}]}-->

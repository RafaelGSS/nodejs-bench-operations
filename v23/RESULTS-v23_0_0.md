## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|90,874,298|45877240|
|Using dot notation|65,305,237|33162498|
|Using define property (writable)|4,206,061|2112781|
|Using define property initialized (writable)|3,041,001|1520502|
|Using define property (getter)|2,201,846|1102405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":90874298.44406314,"samples":45877240},{"name":"Using dot notation","opsSec":65305237.990635306,"samples":33162498},{"name":"Using define property (writable)","opsSec":4206061.144292437,"samples":2112781},{"name":"Using define property initialized (writable)","opsSec":3041001.469886777,"samples":1520502},{"name":"Using define property (getter)","opsSec":2201846.54354443,"samples":1102405}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.009ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.181ms
array.push|1,000,000|29.825ms
new Array(length)|1,000,000|6.805ms
array.push|100,000,000|1,832.759ms
new Array(length)|100,000,000|3,990ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|177.637ms
new Array(length)|10,000|0.032ms
array.push|1,000,000|16.2ms
new Array(length)|1,000,000|7.419ms
array.push|100,000,000|1,955.219ms
new Array(length)|100,000,000|4,663.106ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|333|168|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:00:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":333.6300880291328,"samples":168},{"name":"Array.from","opsSec":23.79170344599667,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,927|2464|
|new Blob (1024)|629|317|
|text (128)|4,320|2161|
|text (1024)|550|276|
|arrayBuffer (128)|4,387|2194|
|arrayBuffer (1024)|549|275|
|slice (0, 64)|150,159|86444|
|slice (0, 512)|32,651|16326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4927.344111370647,"samples":2464},{"name":"new Blob (1024)","opsSec":629.9450437533596,"samples":317},{"name":"text (128)","opsSec":4320.142649710895,"samples":2161},{"name":"text (1024)","opsSec":550.8769239099632,"samples":276},{"name":"arrayBuffer (128)","opsSec":4387.990987066512,"samples":2194},{"name":"arrayBuffer (1024)","opsSec":549.8473063033449,"samples":275},{"name":"slice (0, 64)","opsSec":150159.64198261534,"samples":86444},{"name":"slice (0, 512)","opsSec":32651.176406726314,"samples":16326}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|453,616|226809|
|[True conditional] Using constructor name|351,155|175578|
|[True conditional] Check if property is valid then instanceof |351,689|175863|
|[False conditional] Using instanceof only|92,178,120|46093674|
|[False conditional] Using constructor name|92,983,061|46494041|
|[False conditional] Check if property is valid then instanceof |87,744,020|43872332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:12:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":453616.20549429103,"samples":226809},{"name":"[True conditional] Using constructor name","opsSec":351155.17970150016,"samples":175578},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":351689.80619528523,"samples":175863},{"name":"[False conditional] Using instanceof only","opsSec":92178120.23273973,"samples":46093674},{"name":"[False conditional] Using constructor name","opsSec":92983061.47257885,"samples":46494041},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":87744020.13438025,"samples":43872332}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,640|3321|
|crypto.verify('RSA-SHA256')|6,799|3400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:17:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6640.184573537595,"samples":3321},{"name":"crypto.verify('RSA-SHA256')","opsSec":6799.341157440526,"samples":3400}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,232,525|616307|
|fromUnixToISOString(new Date())|2,342,481|1171241|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:23:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1232525.7265074677,"samples":616307},{"name":"fromUnixToISOString(new Date())","opsSec":2342481.0161579736,"samples":1171241}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,985|9994|
|Intl.DateTimeFormat().format(new Date())|19,583|9792|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,996|9499|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,182|9592|
|Reusing Intl.DateTimeFormat()|597,926|298989|
|Date.toLocaleDateString()|1,078,626|539315|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,719|12361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19985.44430135363,"samples":9994},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19583.67267849485,"samples":9792},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18996.714872238892,"samples":9499},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19182.04803479198,"samples":9592},{"name":"Reusing Intl.DateTimeFormat()","opsSec":597926.3439472937,"samples":298989},{"name":"Date.toLocaleDateString()","opsSec":1078626.9755299606,"samples":539315},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24719.638681234614,"samples":12361}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|877,003|438503|
|Using brackets {}|926,055|463029|
|Using '' + |928,161|464081|
|Using date.toString()|1,008,634|504348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:35:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":877003.8671265951,"samples":438503},{"name":"Using brackets {}","opsSec":926055.0921870106,"samples":463029},{"name":"Using '' + ","opsSec":928161.4616663522,"samples":464081},{"name":"Using date.toString()","opsSec":1008634.0739023987,"samples":504348}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,938,479|1969433|
|Using delete property (proto: null)|17,171,430|8586188|
|Using delete property (cached proto: null)|3,921,535|1960814|
|Using undefined assignment|67,835,268|33917652|
|Using undefined assignment (proto: null)|18,247,282|9125552|
|Using undefined property (cached proto: null)|70,846,584|35428118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:41:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3938479.611519232,"samples":1969433},{"name":"Using delete property (proto: null)","opsSec":17171430.57537538,"samples":8586188},{"name":"Using delete property (cached proto: null)","opsSec":3921535.7811645702,"samples":1960814},{"name":"Using undefined assignment","opsSec":67835268.45431933,"samples":33917652},{"name":"Using undefined assignment (proto: null)","opsSec":18247282.39865812,"samples":9125552},{"name":"Using undefined property (cached proto: null)","opsSec":70846584.00308858,"samples":35428118}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|416,384|208193|
|NodeError|338,615|169308|
|NodeError Range|335,554|167815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:46:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":416384.7108729352,"samples":208193},{"name":"NodeError","opsSec":338615.43654391356,"samples":169308},{"name":"NodeError Range","opsSec":335554.84242639336,"samples":167815}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,808,205|904104|
|Function returning explicitly undefined|1,705,170|853094|
|Function returning implicitly undefined|1,790,056|895029|
|Function returning string|1,735,811|867941|
|Function returning integer|1,697,248|848625|
|Function returning float|1,777,149|888741|
|Function returning functions|1,773,976|888840|
|Function returning arrow functions|1,813,573|906793|
|Function returning empty object|1,835,470|917736|
|Function returning empty array|1,798,577|899810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:53:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1808205.4902107795,"samples":904104},{"name":"Function returning explicitly undefined","opsSec":1705170.9644196397,"samples":853094},{"name":"Function returning implicitly undefined","opsSec":1790056.9152255096,"samples":895029},{"name":"Function returning string","opsSec":1735811.88014329,"samples":867941},{"name":"Function returning integer","opsSec":1697248.6897240116,"samples":848625},{"name":"Function returning float","opsSec":1777149.4953294238,"samples":888741},{"name":"Function returning functions","opsSec":1773976.9756254018,"samples":888840},{"name":"Function returning arrow functions","opsSec":1813573.4210547518,"samples":906793},{"name":"Function returning empty object","opsSec":1835470.1682007723,"samples":917736},{"name":"Function returning empty array","opsSec":1798577.7529693984,"samples":899810}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|83,398,079|41722728|
|using Array.includes (first item)|77,172,358|38586183|
|Using raw comparison|95,234,838|47623287|
|Using raw comparison (first item)|89,280,280|44640874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:58:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":83398079.5525601,"samples":41722728},{"name":"using Array.includes (first item)","opsSec":77172358.59145358,"samples":38586183},{"name":"Using raw comparison","opsSec":95234838.9726721,"samples":47623287},{"name":"Using raw comparison (first item)","opsSec":89280280.05363536,"samples":44640874}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,887,241|23460428|
|Using Object.getOwnPropertyNames()|40,261,815|20130912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:04:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":46887241.31763112,"samples":23460428},{"name":"Using Object.getOwnPropertyNames()","opsSec":40261815.06187706,"samples":20130912}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|121,593,112|60796640|
|Length = 10_000 - Array.at|96,470,985|48235503|
|Length = 1_000_000 - Array.at|92,711,686|46356883|
|Length = 100 - Array[length - 1]|93,153,977|46579116|
|Length = 10_000 - Array[length - 1]|93,809,778|46910354|
|Length = 1_000_000 - Array[length - 1]|93,768,710|46884365|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:09:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":121593112.20150515,"samples":60796640},{"name":"Length = 10_000 - Array.at","opsSec":96470985.54815106,"samples":48235503},{"name":"Length = 1_000_000 - Array.at","opsSec":92711686.1060339,"samples":46356883},{"name":"Length = 100 - Array[length - 1]","opsSec":93153977.28524147,"samples":46579116},{"name":"Length = 10_000 - Array[length - 1]","opsSec":93809778.59793468,"samples":46910354},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":93768710.30857083,"samples":46884365}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|125,617,625|62877824|
|~ (small)|97,864,988|48943603|
|Math.floor (long)|95,753,477|47876773|
|~ (long)|94,855,938|47429719|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:14:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":125617625.38287531,"samples":62877824},{"name":"~ (small)","opsSec":97864988.8859531,"samples":48943603},{"name":"Math.floor (long)","opsSec":95753477.24900335,"samples":47876773},{"name":"~ (long)","opsSec":94855938.95412387,"samples":47429719}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,123,113|21564921|
|Object.create({})|2,149,608|1083924|
|Cached Empty.prototype|105,203,616|52614133|
|Empty.prototype|2,488,191|1256493|
|Empty class|1,689,430|844716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:20:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43123113.586833276,"samples":21564921},{"name":"Object.create({})","opsSec":2149608.643744522,"samples":1083924},{"name":"Cached Empty.prototype","opsSec":105203616.37186961,"samples":52614133},{"name":"Empty.prototype","opsSec":2488191.441014962,"samples":1256493},{"name":"Empty class","opsSec":1689430.3612525493,"samples":844716}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|125,518,857|62760043|
|Using optional chain (obj.field?.field2) (undefined)|86,541,559|43270799|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,468,231|47734129|
|Using and operator (obj.field && obj.field.field2) (undefined)|95,303,051|47651560|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":125518857.42142355,"samples":62760043},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":86541559.92171364,"samples":43270799},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95468231.45983167,"samples":47734129},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":95303051.57240897,"samples":47651560}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|125,758,684|62879399|
|Using parseInt(x, 10) - big number (10 len)|97,804,665|48967101|
|Using + - small number (2 len)|89,337,397|44668713|
|Using + - big number (10 len)|95,386,166|47693095|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:31:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":125758684.81718366,"samples":62879399},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97804665.39335708,"samples":48967101},{"name":"Using + - small number (2 len)","opsSec":89337397.76938231,"samples":44668713},{"name":"Using + - big number (10 len)","opsSec":95386166.72577532,"samples":47693095}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|898,874|449445|
|Using ? operator to avoid rejection|1,190,542|605792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:38:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":898874.5950871893,"samples":449445},{"name":"Using ? operator to avoid rejection","opsSec":1190542.6585931166,"samples":605792}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|132,243,709|66121894|
|Raw usage underscore usage|92,082,496|46041277|
|Manipulating private properties using #|91,088,651|45544334|
|Manipulating private properties using underscore(_)|93,350,397|46675808|
|Manipulating private properties using Symbol|91,683,603|45842067|
|Manipulating private properties using PrivateSymbol|35,563,191|17782928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:43:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":132243709.71172386,"samples":66121894},{"name":"Raw usage underscore usage","opsSec":92082496.17219241,"samples":46041277},{"name":"Manipulating private properties using #","opsSec":91088651.78621997,"samples":45544334},{"name":"Manipulating private properties using underscore(_)","opsSec":93350397.96400736,"samples":46675808},{"name":"Manipulating private properties using Symbol","opsSec":91683603.88540234,"samples":45842067},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35563191.6056849,"samples":17782928}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,926,835|3963449|
|Adding property in the object creation - small object|7,844,856|3924088|
|Adding property after the function creation - small class|269,550|135960|
|Adding property in the function creation - small class|289,233|144973|
|Adding property after the class creation - small class|278,058|141019|
|Adding property in the class creation - small class|274,817|137438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:49:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7926835.282879242,"samples":3963449},{"name":"Adding property in the object creation - small object","opsSec":7844856.1196490135,"samples":3924088},{"name":"Adding property after the function creation - small class","opsSec":269550.0277436686,"samples":135960},{"name":"Adding property in the function creation - small class","opsSec":289233.5096922953,"samples":144973},{"name":"Adding property after the class creation - small class","opsSec":278058.1700949216,"samples":141019},{"name":"Adding property in the class creation - small class","opsSec":274817.61994336016,"samples":137438}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|125,073,973|62626994|
|Getter|48,558,898|24333570|
|Method|94,672,357|47337388|
|DefineProperty (getter)|96,331,290|48172417|
|DefineProperty (getter & enumerable=false)|49,985,731|25009625|
|DefineProperty (getter & configurable=false)|96,789,651|48395704|
|DefineProperty (getter & enumerable=false & configurable=false)|48,075,803|24037910|
|DefineProperty (writable)|84,465,846|42237184|
|DefineProperty (writable & enumerable=false)|96,754,190|48377209|
|DefineProperty (writable & enumerable=false & configurable=false)|96,148,880|48084704|
|DefineProperties (getter)|47,491,918|23748004|
|DefineProperties (getter & enumerable=false)|48,997,124|24498568|
|DefineProperties (getter & enumerable=false & configurable=false)|48,412,290|24206803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:55:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":125073973.53255764,"samples":62626994},{"name":"Getter","opsSec":48558898.91231932,"samples":24333570},{"name":"Method","opsSec":94672357.4999553,"samples":47337388},{"name":"DefineProperty (getter)","opsSec":96331290.01328671,"samples":48172417},{"name":"DefineProperty (getter & enumerable=false)","opsSec":49985731.4679354,"samples":25009625},{"name":"DefineProperty (getter & configurable=false)","opsSec":96789651.84855686,"samples":48395704},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48075803.26962046,"samples":24037910},{"name":"DefineProperty (writable)","opsSec":84465846.07185811,"samples":42237184},{"name":"DefineProperty (writable & enumerable=false)","opsSec":96754190.4341441,"samples":48377209},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96148880.59858772,"samples":48084704},{"name":"DefineProperties (getter)","opsSec":47491918.75582745,"samples":23748004},{"name":"DefineProperties (getter & enumerable=false)","opsSec":48997124.142695956,"samples":24498568},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":48412290.541241415,"samples":24206803}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|125,302,435|62652580|
|Setter|11,285,616|5642812|
|Method|91,036,769|45519210|
|DefineProperty (setter)|97,779,388|48889712|
|DefineProperty (setter & enumerable=false)|11,022,230|5511120|
|DefineProperty (setter & configurable=false)|11,106,711|5553441|
|DefineProperty (setter & enumerable=false & configurable=false)|11,174,803|5588055|
|DefineProperty (writable)|97,842,783|48922085|
|DefineProperty (writable & enumerable=false)|98,812,004|49413692|
|DefineProperty (writable & enumerable=false & configurable=false)|97,125,839|48562955|
|DefineProperties (setter)|90,807,382|45406504|
|DefineProperties (setter & enumerable=false)|10,991,730|5495908|
|DefineProperties (setter & enumerable=false & configurable=false)|10,408,978|5204494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:02:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":125302435.67444357,"samples":62652580},{"name":"Setter","opsSec":11285616.664349169,"samples":5642812},{"name":"Method","opsSec":91036769.13922842,"samples":45519210},{"name":"DefineProperty (setter)","opsSec":97779388.21274391,"samples":48889712},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11022230.322481776,"samples":5511120},{"name":"DefineProperty (setter & configurable=false)","opsSec":11106711.57861754,"samples":5553441},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11174803.3078996,"samples":5588055},{"name":"DefineProperty (writable)","opsSec":97842783.17639126,"samples":48922085},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98812004.70196418,"samples":49413692},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":97125839.29238899,"samples":48562955},{"name":"DefineProperties (setter)","opsSec":90807382.66425872,"samples":45406504},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10991730.528303413,"samples":5495908},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10408978.382103974,"samples":5204494}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,323,874|1664390|
|Using replaceAll()|3,158,916|1581904|
|Using replaceAll(//g)|2,950,048|1475152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:08:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3323874.8780694357,"samples":1664390},{"name":"Using replaceAll()","opsSec":3158916.846875305,"samples":1581904},{"name":"Using replaceAll(//g)","opsSec":2950048.685086501,"samples":1475152}]}-->

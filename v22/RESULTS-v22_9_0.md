## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|102,251,541|51131063|
|Using dot notation|67,580,880|33885377|
|Using define property (writable)|4,702,177|2351089|
|Using define property initialized (writable)|6,688,494|3345124|
|Using define property (getter)|2,368,436|1184249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:41:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":102251541.12496583,"samples":51131063},{"name":"Using dot notation","opsSec":67580880.9195566,"samples":33885377},{"name":"Using define property (writable)","opsSec":4702177.012542827,"samples":2351089},{"name":"Using define property initialized (writable)","opsSec":6688494.7047520755,"samples":3345124},{"name":"Using define property (getter)","opsSec":2368436.1932890997,"samples":1184249}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.076ms
new Array(length)|100|0.008ms
array.push|1,000|0.026ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.263ms
new Array(length)|10,000|0.13ms
array.push|1,000,000|24.246ms
new Array(length)|1,000,000|12.872ms
array.push|100,000,000|1,858.894ms
new Array(length)|100,000,000|3,883.064ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|17.701ms
new Array(length)|10,000|6.008ms
array.push|1,000,000|146.441ms
new Array(length)|1,000,000|8.417ms
array.push|100,000,000|1,982.65ms
new Array(length)|100,000,000|4,467.745ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|317|160|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:45:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Array","opsSec":317.9323864957138,"samples":160},{"name":"Array.from","opsSec":23.263527526068778,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,421|2711|
|new Blob (1024)|638|321|
|text (128)|4,106|2054|
|text (1024)|515|258|
|arrayBuffer (128)|4,120|2061|
|arrayBuffer (1024)|518|260|
|slice (0, 64)|175,794|89691|
|slice (0, 512)|30,167|15084|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:47:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":5421.564333933254,"samples":2711},{"name":"new Blob (1024)","opsSec":638.2770931147973,"samples":321},{"name":"text (128)","opsSec":4106.7884563374955,"samples":2054},{"name":"text (1024)","opsSec":515.1013480070508,"samples":258},{"name":"arrayBuffer (128)","opsSec":4120.542020375846,"samples":2061},{"name":"arrayBuffer (1024)","opsSec":518.3074452685628,"samples":260},{"name":"slice (0, 64)","opsSec":175794.06941240325,"samples":89691},{"name":"slice (0, 512)","opsSec":30167.100899724785,"samples":15084}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|455,437|227798|
|[True conditional] Using constructor name|355,630|177821|
|[True conditional] Check if property is valid then instanceof |351,430|175718|
|[False conditional] Using instanceof only|98,142,481|49090957|
|[False conditional] Using constructor name|97,710,088|48856739|
|[False conditional] Check if property is valid then instanceof |98,609,763|49309735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:49:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":455437.60335592885,"samples":227798},{"name":"[True conditional] Using constructor name","opsSec":355630.65182590025,"samples":177821},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":351430.3475942893,"samples":175718},{"name":"[False conditional] Using instanceof only","opsSec":98142481.33242545,"samples":49090957},{"name":"[False conditional] Using constructor name","opsSec":97710088.24161872,"samples":48856739},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98609763.64374502,"samples":49309735}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,659|3330|
|crypto.verify('RSA-SHA256')|7,046|3524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:51:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6659.79112231124,"samples":3330},{"name":"crypto.verify('RSA-SHA256')","opsSec":7046.301136795919,"samples":3524}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,458,187|729095|
|fromUnixToISOString(new Date())|2,146,081|1073041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:52:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1458187.2440261086,"samples":729095},{"name":"fromUnixToISOString(new Date())","opsSec":2146081.188781311,"samples":1073041}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,389|9195|
|Intl.DateTimeFormat().format(new Date())|18,307|9154|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,406|9204|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,949|8975|
|Reusing Intl.DateTimeFormat()|448,686|224344|
|Date.toLocaleDateString()|940,424|470584|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,741|10871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:54:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18389.541806176356,"samples":9195},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18307.60389668209,"samples":9154},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18406.707370568194,"samples":9204},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17949.04310061422,"samples":8975},{"name":"Reusing Intl.DateTimeFormat()","opsSec":448686.51664237597,"samples":224344},{"name":"Date.toLocaleDateString()","opsSec":940424.9758691156,"samples":470584},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21741.984911062475,"samples":10871}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|887,372|445249|
|Using brackets {}|1,025,990|513010|
|Using '' + |961,329|480669|
|Using date.toString()|1,166,408|583420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:56:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":887372.5107406296,"samples":445249},{"name":"Using brackets {}","opsSec":1025990.6464076063,"samples":513010},{"name":"Using '' + ","opsSec":961329.3134283238,"samples":480669},{"name":"Using date.toString()","opsSec":1166408.9512392515,"samples":583420}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,961,853|1982256|
|Using delete property (proto: null)|15,462,617|7731453|
|Using delete property (cached proto: null)|3,992,229|1996116|
|Using undefined assignment|71,961,566|35989426|
|Using undefined assignment (proto: null)|17,399,068|8700056|
|Using undefined property (cached proto: null)|69,199,919|34721577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:58:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":3961853.1052965615,"samples":1982256},{"name":"Using delete property (proto: null)","opsSec":15462617.18923614,"samples":7731453},{"name":"Using delete property (cached proto: null)","opsSec":3992229.0697038635,"samples":1996116},{"name":"Using undefined assignment","opsSec":71961566.5438699,"samples":35989426},{"name":"Using undefined assignment (proto: null)","opsSec":17399068.647449486,"samples":8700056},{"name":"Using undefined property (cached proto: null)","opsSec":69199919.05252713,"samples":34721577}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|418,519|209640|
|NodeError|339,897|169950|
|NodeError Range|337,555|168781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:00:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Error","opsSec":418519.4580704053,"samples":209640},{"name":"NodeError","opsSec":339897.4296956367,"samples":169950},{"name":"NodeError Range","opsSec":337555.6134477936,"samples":168781}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,612,494|815342|
|Function returning explicitly undefined|1,711,431|855791|
|Function returning implicitly undefined|1,547,956|793952|
|Function returning string|1,477,474|739966|
|Function returning integer|1,621,327|811028|
|Function returning float|1,510,885|756622|
|Function returning functions|1,593,764|798125|
|Function returning arrow functions|1,324,756|664390|
|Function returning empty object|1,025,945|514348|
|Function returning empty array|1,278,488|639422|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:03:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1612494.3318641458,"samples":815342},{"name":"Function returning explicitly undefined","opsSec":1711431.6096587328,"samples":855791},{"name":"Function returning implicitly undefined","opsSec":1547956.620326583,"samples":793952},{"name":"Function returning string","opsSec":1477474.0239795907,"samples":739966},{"name":"Function returning integer","opsSec":1621327.044875316,"samples":811028},{"name":"Function returning float","opsSec":1510885.2874769964,"samples":756622},{"name":"Function returning functions","opsSec":1593764.1900551291,"samples":798125},{"name":"Function returning arrow functions","opsSec":1324756.6583886938,"samples":664390},{"name":"Function returning empty object","opsSec":1025945.5262236185,"samples":514348},{"name":"Function returning empty array","opsSec":1278488.9048206415,"samples":639422}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|92,112,261|46063552|
|using Array.includes (first item)|80,349,160|40175554|
|Using raw comparison|93,381,598|46690808|
|Using raw comparison (first item)|96,333,953|48166983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:05:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":92112261.39864726,"samples":46063552},{"name":"using Array.includes (first item)","opsSec":80349160.65774229,"samples":40175554},{"name":"Using raw comparison","opsSec":93381598.4442595,"samples":46690808},{"name":"Using raw comparison (first item)","opsSec":96333953.09125029,"samples":48166983}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|47,520,939|23766473|
|Using Object.getOwnPropertyNames()|39,776,125|19889037|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:07:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using Object.keys()","opsSec":47520939.54949718,"samples":23766473},{"name":"Using Object.getOwnPropertyNames()","opsSec":39776125.12897318,"samples":19889037}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|105,828,079|53962188|
|Length = 10_000 - Array.at|70,841,071|36094916|
|Length = 1_000_000 - Array.at|87,644,818|44059099|
|Length = 100 - Array[length - 1]|90,065,716|45032916|
|Length = 10_000 - Array[length - 1]|87,240,174|43620141|
|Length = 1_000_000 - Array[length - 1]|90,156,675|45257749|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:09:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":105828079.43032363,"samples":53962188},{"name":"Length = 10_000 - Array.at","opsSec":70841071.83154204,"samples":36094916},{"name":"Length = 1_000_000 - Array.at","opsSec":87644818.1702635,"samples":44059099},{"name":"Length = 100 - Array[length - 1]","opsSec":90065716.175489,"samples":45032916},{"name":"Length = 10_000 - Array[length - 1]","opsSec":87240174.86906527,"samples":43620141},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":90156675.51333703,"samples":45257749}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|137,670,311|68856309|
|~ (small)|98,597,539|49315322|
|Math.floor (long)|97,263,164|48933368|
|~ (long)|99,263,858|49640842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:11:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":137670311.63789305,"samples":68856309},{"name":"~ (small)","opsSec":98597539.48172885,"samples":49315322},{"name":"Math.floor (long)","opsSec":97263164.95576145,"samples":48933368},{"name":"~ (long)","opsSec":99263858.1963451,"samples":49640842}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,429,518|21244475|
|Object.create({})|1,961,724|993925|
|Cached Empty.prototype|110,933,554|55501858|
|Empty.prototype|2,550,927|1283929|
|Empty class|1,564,183|791496|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:13:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":42429518.21011177,"samples":21244475},{"name":"Object.create({})","opsSec":1961724.781230803,"samples":993925},{"name":"Cached Empty.prototype","opsSec":110933554.7421007,"samples":55501858},{"name":"Empty.prototype","opsSec":2550927.413129383,"samples":1283929},{"name":"Empty class","opsSec":1564183.2315907858,"samples":791496}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|139,460,201|69761977|
|Using optional chain (obj.field?.field2) (undefined)|95,535,644|47767832|
|Using and operator (obj.field && obj.field.field2) (Valid)|91,074,334|45537977|
|Using and operator (obj.field && obj.field.field2) (undefined)|95,337,277|47668647|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:15:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":139460201.16364005,"samples":69761977},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95535644.12858604,"samples":47767832},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":91074334.88047451,"samples":45537977},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":95337277.60198826,"samples":47668647}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,119,519|70563201|
|Using parseInt(x, 10) - big number (10 len)|94,911,125|47455568|
|Using + - small number (2 len)|96,387,491|48208840|
|Using + - big number (10 len)|97,375,006|48708328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:18:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141119519.3188038,"samples":70563201},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":94911125.36995396,"samples":47455568},{"name":"Using + - small number (2 len)","opsSec":96387491.05225247,"samples":48208840},{"name":"Using + - big number (10 len)","opsSec":97375006.56744097,"samples":48708328}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|806,428|405974|
|Using ? operator to avoid rejection|810,866|405435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:20:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using if to check function existence","opsSec":806428.541777229,"samples":405974},{"name":"Using ? operator to avoid rejection","opsSec":810866.8084282421,"samples":405435}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|140,017,210|70016698|
|Raw usage underscore usage|94,948,442|47528231|
|Manipulating private properties using #|94,166,215|47085726|
|Manipulating private properties using underscore(_)|95,513,667|47762068|
|Manipulating private properties using Symbol|95,540,151|47774807|
|Manipulating private properties using PrivateSymbol|36,073,589|18036815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:22:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Raw usage private field","opsSec":140017210.85052896,"samples":70016698},{"name":"Raw usage underscore usage","opsSec":94948442.57502632,"samples":47528231},{"name":"Manipulating private properties using #","opsSec":94166215.22843872,"samples":47085726},{"name":"Manipulating private properties using underscore(_)","opsSec":95513667.12900065,"samples":47762068},{"name":"Manipulating private properties using Symbol","opsSec":95540151.32125254,"samples":47774807},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36073589.02040287,"samples":18036815}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,697,006|3848613|
|Adding property in the object creation - small object|7,520,602|3763677|
|Adding property after the function creation - small class|253,247|126832|
|Adding property in the function creation - small class|276,381|138193|
|Adding property after the class creation - small class|265,444|132728|
|Adding property in the class creation - small class|265,047|132535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:26:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7697006.465981577,"samples":3848613},{"name":"Adding property in the object creation - small object","opsSec":7520602.99535037,"samples":3763677},{"name":"Adding property after the function creation - small class","opsSec":253247.5855016548,"samples":126832},{"name":"Adding property in the function creation - small class","opsSec":276381.461816397,"samples":138193},{"name":"Adding property after the class creation - small class","opsSec":265444.22807937313,"samples":132728},{"name":"Adding property in the class creation - small class","opsSec":265047.91037705337,"samples":132535}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,356,478|75229986|
|Getter|51,075,879|25537946|
|Method|100,857,894|50429144|
|DefineProperty (getter)|97,177,270|48588728|
|DefineProperty (getter & enumerable=false)|51,519,323|25764604|
|DefineProperty (getter & configurable=false)|98,757,004|49391127|
|DefineProperty (getter & enumerable=false & configurable=false)|51,717,099|25858671|
|DefineProperty (writable)|96,710,863|48357097|
|DefineProperty (writable & enumerable=false)|98,894,402|49453504|
|DefineProperty (writable & enumerable=false & configurable=false)|99,425,982|49713116|
|DefineProperties (getter)|50,959,804|25480439|
|DefineProperties (getter & enumerable=false)|49,659,957|24829985|
|DefineProperties (getter & enumerable=false & configurable=false)|49,906,602|24953303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:54:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":150356478.62863034,"samples":75229986},{"name":"Getter","opsSec":51075879.8439406,"samples":25537946},{"name":"Method","opsSec":100857894.65421084,"samples":50429144},{"name":"DefineProperty (getter)","opsSec":97177270.7801219,"samples":48588728},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51519323.502592795,"samples":25764604},{"name":"DefineProperty (getter & configurable=false)","opsSec":98757004.20419309,"samples":49391127},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51717099.55023731,"samples":25858671},{"name":"DefineProperty (writable)","opsSec":96710863.8581139,"samples":48357097},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98894402.1283495,"samples":49453504},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99425982.44078407,"samples":49713116},{"name":"DefineProperties (getter)","opsSec":50959804.27692388,"samples":25480439},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49659957.68433049,"samples":24829985},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":49906602.60635102,"samples":24953303}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|123,729,015|61908175|
|Setter|11,143,180|5571594|
|Method|87,591,882|43797531|
|DefineProperty (setter)|91,729,128|45868908|
|DefineProperty (setter & enumerable=false)|11,336,056|5668030|
|DefineProperty (setter & configurable=false)|11,426,800|5713405|
|DefineProperty (setter & enumerable=false & configurable=false)|11,351,999|5676001|
|DefineProperty (writable)|91,801,036|45900529|
|DefineProperty (writable & enumerable=false)|91,697,635|45857194|
|DefineProperty (writable & enumerable=false & configurable=false)|85,461,439|42731530|
|DefineProperties (setter)|91,635,786|45825285|
|DefineProperties (setter & enumerable=false)|11,283,759|5641881|
|DefineProperties (setter & enumerable=false & configurable=false)|11,123,529|5561767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:00:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":123729015.62686174,"samples":61908175},{"name":"Setter","opsSec":11143180.868364243,"samples":5571594},{"name":"Method","opsSec":87591882.06431353,"samples":43797531},{"name":"DefineProperty (setter)","opsSec":91729128.33425547,"samples":45868908},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11336056.440478278,"samples":5668030},{"name":"DefineProperty (setter & configurable=false)","opsSec":11426800.218659014,"samples":5713405},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11351999.45715212,"samples":5676001},{"name":"DefineProperty (writable)","opsSec":91801036.51855744,"samples":45900529},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91697635.57556142,"samples":45857194},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":85461439.82202385,"samples":42731530},{"name":"DefineProperties (setter)","opsSec":91635786.0320963,"samples":45825285},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11283759.156492693,"samples":5641881},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11123529.639576381,"samples":5561767}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,279,966|1640114|
|Using replaceAll()|3,021,909|1513390|
|Using replaceAll(//g)|2,732,039|1366020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:12:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3279966.094707337,"samples":1640114},{"name":"Using replaceAll()","opsSec":3021909.727100679,"samples":1513390},{"name":"Using replaceAll(//g)","opsSec":2732039.366166867,"samples":1366020}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,814,769|11929371|
|{ ...object, __proto__: null }|2,551,133|1275568|
|{ ...object, newProp: true }|19,539,205|9769604|
|structuredClone|297,957|148980|
|JSON.parse + JSON.stringify|296,619|148310|
|loop + object.keys starting with {}|1,630,553|815278|
|loop + object.keys starting with { __proto__: null }|884,430|442216|
|loop + object.keys starting with { randomProp: true }|659,847|330008|
|object.keys + reduce(FN, {})|1,726,340|863171|
|object.keys + reduce(FN, { __proto__: null })|912,837|456420|
|object.keys + reduce(FN, { newProp: true })|681,810|340906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:24:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":23814769.45708366,"samples":11929371},{"name":"{ ...object, __proto__: null }","opsSec":2551133.158037662,"samples":1275568},{"name":"{ ...object, newProp: true }","opsSec":19539205.88976576,"samples":9769604},{"name":"structuredClone","opsSec":297957.88032763934,"samples":148980},{"name":"JSON.parse + JSON.stringify","opsSec":296619.778128406,"samples":148310},{"name":"loop + object.keys starting with {}","opsSec":1630553.8052745783,"samples":815278},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":884430.1709984065,"samples":442216},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":659847.9604789926,"samples":330008},{"name":"object.keys + reduce(FN, {})","opsSec":1726340.795014125,"samples":863171},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":912837.9022985004,"samples":456420},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":681810.2177480907,"samples":340906}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|301,477|151593|
|Sort using first char|1,276,433|638254|
|Sort using localeCompare|1,198,331|599233|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:27:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Sort using default","opsSec":301477.5904084047,"samples":151593},{"name":"Sort using first char","opsSec":1276433.3899154926,"samples":638254},{"name":"Sort using localeCompare","opsSec":1198331.2692187391,"samples":599233}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,883|942|
|{...smallObject} - Total keys: 2|59,327,751|29664361|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,065|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,630|3316|
|{ ...bigObject, ...anotherBigObject }|1,127|564|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,489,543|6744772|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,143,705|14083750|
|{ ...smallObject, ...anotherSmallObject }|19,285,009|9666678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:30:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1883.8986989991574,"samples":942},{"name":"{...smallObject} - Total keys: 2","opsSec":59327751.75394782,"samples":29664361},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1065.468976654849,"samples":533},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6630.694548857221,"samples":3316},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1127.5164307531784,"samples":564},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13489543.676250951,"samples":6744772},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28143705.84760373,"samples":14083750},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19285009.868779678,"samples":9666678}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,000|1001|
|streams.web.Readable reading 1e3 * "some data"|1,999|1003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:31:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2000.3302243452276,"samples":1001},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1999.8914794679345,"samples":1003}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,875|5438|
|streams.web.WritableStream writing 1e3 * "some data"|1,704|864|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:57:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":10875.875884504405,"samples":5438},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1704.203423661835,"samples":864}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|146,891,091|73512975|
|Using backtick (`)|91,438,661|45720168|
|Using array.join|9,957,895|4978949|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:59:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":146891091.05199826,"samples":73512975},{"name":"Using backtick (`)","opsSec":91438661.20948128,"samples":45720168},{"name":"Using array.join","opsSec":9957895.530441908,"samples":4978949}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|125,291,610|62645823|
|(short string) (true) String#slice and strict comparison|51,208,228|25604119|
|(long string) (true) String#endsWith|54,881,749|27447825|
|(long string) (true) String#slice and strict comparison|46,161,405|23084749|
|(short string) (false) String#endsWith|96,028,250|48015824|
|(short string) (false) String#slice and strict comparison|51,107,357|25553685|
|(long string) (false) String#endsWith|87,783,022|43892529|
|(long string) (false) String#slice and strict comparison|45,466,049|22733029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:01:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":125291610.6677658,"samples":62645823},{"name":"(short string) (true) String#slice and strict comparison","opsSec":51208228.78251882,"samples":25604119},{"name":"(long string) (true) String#endsWith","opsSec":54881749.66020957,"samples":27447825},{"name":"(long string) (true) String#slice and strict comparison","opsSec":46161405.25939835,"samples":23084749},{"name":"(short string) (false) String#endsWith","opsSec":96028250.13639717,"samples":48015824},{"name":"(short string) (false) String#slice and strict comparison","opsSec":51107357.73423414,"samples":25553685},{"name":"(long string) (false) String#endsWith","opsSec":87783022.83839852,"samples":43892529},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45466049.452382706,"samples":22733029}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,110,649|68057511|
|Using indexof|15,461,029|7730675|
|Using RegExp.test|12,788,749|6394377|
|Using RegExp.text with cached regex pattern|13,826,561|6913323|
|Using new RegExp.test|4,720,897|2360990|
|Using new RegExp.test with cached regex pattern|5,464,275|2732303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:03:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":136110649.03706774,"samples":68057511},{"name":"Using indexof","opsSec":15461029.029037358,"samples":7730675},{"name":"Using RegExp.test","opsSec":12788749.728557589,"samples":6394377},{"name":"Using RegExp.text with cached regex pattern","opsSec":13826561.215526627,"samples":6913323},{"name":"Using new RegExp.test","opsSec":4720897.299971431,"samples":2360990},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5464275.924948477,"samples":2732303}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|122,228,801|61117010|
|(short string) (true) String#slice and strict comparison|49,890,110|24947501|
|(long string) (true) String#startsWith|56,956,470|28479245|
|(long string) (true) String#slice and strict comparison|46,265,510|23132759|
|(short string) (false) String#startsWith|93,193,041|46605288|
|(short string) (false) String#slice and strict comparison|51,046,428|25528056|
|(long string) (false) String#startsWith|86,351,095|43183597|
|(long string) (false) String#slice and strict comparison|45,220,313|22610157|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:06:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":122228801.8079932,"samples":61117010},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49890110.47422845,"samples":24947501},{"name":"(long string) (true) String#startsWith","opsSec":56956470.55138013,"samples":28479245},{"name":"(long string) (true) String#slice and strict comparison","opsSec":46265510.50498729,"samples":23132759},{"name":"(short string) (false) String#startsWith","opsSec":93193041.54284763,"samples":46605288},{"name":"(short string) (false) String#slice and strict comparison","opsSec":51046428.390441485,"samples":25528056},{"name":"(long string) (false) String#startsWith","opsSec":86351095.21991378,"samples":43183597},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45220313.095593736,"samples":22610157}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|122,196,013|61108558|
|Using this|99,332,358|49666188|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:07:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":122196013.4816478,"samples":61108558},{"name":"Using this","opsSec":99332358.51750492,"samples":49666188}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,806,547|4904309|
|Date.now()|17,054,559|8527281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:09:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9806547.79853354,"samples":4904309},{"name":"Date.now()","opsSec":17054559.407706972,"samples":8527281}]}-->

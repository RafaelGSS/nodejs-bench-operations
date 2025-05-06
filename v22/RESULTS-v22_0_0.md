## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,904,854|44462735|
|Using dot notation|64,741,297|32394772|
|Using define property (writable)|4,847,956|2423979|
|Using define property initialized (writable)|7,011,346|3506085|
|Using define property (getter)|2,364,915|1185291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":44462735,"opsSec":88904854.03120841},{"name":"Using dot notation","samples":32394772,"opsSec":64741297.61967046},{"name":"Using define property (writable)","samples":2423979,"opsSec":4847956.080209393},{"name":"Using define property initialized (writable)","samples":3506085,"opsSec":7011346.012593907},{"name":"Using define property (getter)","samples":1185291,"opsSec":2364915.9074370353}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.029ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.305ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|24.838ms
new Array(length)|1,000,000|17.138ms
array.push|100,000,000|2,006.632ms
new Array(length)|100,000,000|4,302.375ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.014ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|176.692ms
new Array(length)|10,000|0.036ms
array.push|1,000,000|18.271ms
new Array(length)|1,000,000|7.878ms
array.push|100,000,000|2,154.93ms
new Array(length)|100,000,000|4,944.698ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|262|132|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:09:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":132,"opsSec":262.29553541404033},{"name":"Array.from","samples":12,"opsSec":23.765974170806544}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,701|2361|
|new Blob (1024)|574|290|
|text (128)|4,533|2270|
|text (1024)|569|286|
|arrayBuffer (128)|4,558|2280|
|arrayBuffer (1024)|573|288|
|slice (0, 64)|184,241|92194|
|slice (0, 512)|29,650|14826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2361,"opsSec":4701.24945590654},{"name":"new Blob (1024)","samples":290,"opsSec":574.8152196021884},{"name":"text (128)","samples":2270,"opsSec":4533.189879507813},{"name":"text (1024)","samples":286,"opsSec":569.345501751689},{"name":"arrayBuffer (128)","samples":2280,"opsSec":4558.695702455179},{"name":"arrayBuffer (1024)","samples":288,"opsSec":573.7622057599485},{"name":"slice (0, 64)","samples":92194,"opsSec":184241.51104849743},{"name":"slice (0, 512)","samples":14826,"opsSec":29650.597467438594}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|433,690|216854|
|[True conditional] Using constructor name|337,323|168905|
|[True conditional] Check if property is valid then instanceof |345,229|172615|
|[False conditional] Using instanceof only|95,833,583|47918160|
|[False conditional] Using constructor name|96,670,055|48335050|
|[False conditional] Check if property is valid then instanceof |96,556,471|48279355|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":433690.9819658677,"samples":216854},{"name":"[True conditional] Using constructor name","opsSec":337323.52078873006,"samples":168905},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":345229.04302509275,"samples":172615},{"name":"[False conditional] Using instanceof only","opsSec":95833583.75951649,"samples":47918160},{"name":"[False conditional] Using constructor name","opsSec":96670055.33843443,"samples":48335050},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96556471.62787472,"samples":48279355}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.61 ms|1|
|Gzip|133.98 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:24:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13260684},{"name":"Gzip","samples":1,"totalTime":0.133982681}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,023|3512|
|crypto.verify('RSA-SHA256')|6,976|3489|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:25:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3512,"opsSec":7023.578191988103},{"name":"crypto.verify('RSA-SHA256')","samples":3489,"opsSec":6976.13285199443}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,325,111|663232|
|fromUnixToISOString(new Date())|1,798,714|899546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":663232,"opsSec":1325111.4428489467},{"name":"fromUnixToISOString(new Date())","samples":899546,"opsSec":1798714.6656374424}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,705|9853|
|Intl.DateTimeFormat().format(new Date())|19,392|9697|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,457|9729|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,387|9194|
|Reusing Intl.DateTimeFormat()|384,463|192235|
|Date.toLocaleDateString()|704,138|352070|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,462|11732|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:34:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9853,"opsSec":19705.537038112827},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9697,"opsSec":19392.07801236404},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9729,"opsSec":19457.791295730563},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9194,"opsSec":18387.48548138126},{"name":"Reusing Intl.DateTimeFormat()","samples":192235,"opsSec":384463.5210207438},{"name":"Date.toLocaleDateString()","samples":352070,"opsSec":704138.2312047632},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11732,"opsSec":23462.49516248527}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|921,039|460569|
|Using brackets {}|988,788|494418|
|Using '' + |918,982|459492|
|Using date.toString()|1,003,214|501677|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:39:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":460569,"opsSec":921039.6090227267},{"name":"Using brackets {}","samples":494418,"opsSec":988788.8644348324},{"name":"Using '' + ","samples":459492,"opsSec":918982.0297025284},{"name":"Using date.toString()","samples":501677,"opsSec":1003214.6093493187}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,016,780|2008393|
|Using delete property (proto: null)|17,384,541|8693258|
|Using delete property (cached proto: null)|4,072,901|2036908|
|Using undefined assignment|78,951,946|39478244|
|Using undefined assignment (proto: null)|18,813,604|9407188|
|Using undefined property (cached proto: null)|78,716,263|39365973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2008393,"opsSec":4016780.7701514373},{"name":"Using delete property (proto: null)","samples":8693258,"opsSec":17384541.568075947},{"name":"Using delete property (cached proto: null)","samples":2036908,"opsSec":4072901.8371826448},{"name":"Using undefined assignment","samples":39478244,"opsSec":78951946.68402675},{"name":"Using undefined assignment (proto: null)","samples":9407188,"opsSec":18813604.604584005},{"name":"Using undefined property (cached proto: null)","samples":39365973,"opsSec":78716263.35885102}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|329,395|164875|
|NodeError|306,736|153369|
|NodeError Range|282,503|141294|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:45:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":164875,"opsSec":329395.6993506129},{"name":"NodeError","samples":153369,"opsSec":306736.5160087356},{"name":"NodeError Range","samples":141294,"opsSec":282503.6410227469}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,624,030|812018|
|Function returning explicitly undefined|1,599,612|799807|
|Function returning implicitly undefined|1,583,593|791798|
|Function returning string|1,606,973|803487|
|Function returning integer|1,655,139|827700|
|Function returning float|1,643,491|821747|
|Function returning functions|1,593,579|796879|
|Function returning arrow functions|1,682,182|841092|
|Function returning empty object|1,644,086|822758|
|Function returning empty array|1,659,209|829606|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1624030.1469953503,"samples":812018},{"name":"Function returning explicitly undefined","opsSec":1599612.8866694306,"samples":799807},{"name":"Function returning implicitly undefined","opsSec":1583593.5929377386,"samples":791798},{"name":"Function returning string","opsSec":1606973.932507095,"samples":803487},{"name":"Function returning integer","opsSec":1655139.3784431915,"samples":827700},{"name":"Function returning float","opsSec":1643491.2882393745,"samples":821747},{"name":"Function returning functions","opsSec":1593579.1366776994,"samples":796879},{"name":"Function returning arrow functions","opsSec":1682182.3548256569,"samples":841092},{"name":"Function returning empty object","opsSec":1644086.8511992055,"samples":822758},{"name":"Function returning empty array","opsSec":1659209.0034685398,"samples":829606}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,618,379|35310707|
|using Array.includes (first item)|81,057,498|40528756|
|Using raw comparison|95,585,078|47796420|
|Using raw comparison (first item)|98,377,319|49188674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35310707,"opsSec":70618379.66946235},{"name":"using Array.includes (first item)","samples":40528756,"opsSec":81057498.22022529},{"name":"Using raw comparison","samples":47796420,"opsSec":95585078.87393574},{"name":"Using raw comparison (first item)","samples":49188674,"opsSec":98377319.0770682}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,070,048|21535029|
|Using Object.getOwnPropertyNames()|41,917,577|20962902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:53:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":21535029,"opsSec":43070048.86914964},{"name":"Using Object.getOwnPropertyNames()","samples":20962902,"opsSec":41917577.25628768}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|88,072,339|44295445|
|Length = 10_000 - Array.at|92,738,843|46369452|
|Length = 1_000_000 - Array.at|93,220,999|46610523|
|Length = 100 - Array[length - 1]|90,780,557|45393359|
|Length = 10_000 - Array[length - 1]|87,536,233|43769338|
|Length = 1_000_000 - Array[length - 1]|92,426,506|46213264|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":44295445,"opsSec":88072339.96662533},{"name":"Length = 10_000 - Array.at","samples":46369452,"opsSec":92738843.16331887},{"name":"Length = 1_000_000 - Array.at","samples":46610523,"opsSec":93220999.20305839},{"name":"Length = 100 - Array[length - 1]","samples":45393359,"opsSec":90780557.26826154},{"name":"Length = 10_000 - Array[length - 1]","samples":43769338,"opsSec":87536233.03880835},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46213264,"opsSec":92426506.74190345}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|90,619,775|45314900|
|~ (small)|93,015,083|46507872|
|Math.floor (long)|86,681,598|43340939|
|~ (long)|93,220,890|46610619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:02:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":45314900,"opsSec":90619775.64041865},{"name":"~ (small)","samples":46507872,"opsSec":93015083.77893534},{"name":"Math.floor (long)","samples":43340939,"opsSec":86681598.8852516},{"name":"~ (long)","samples":46610619,"opsSec":93220890.09963815}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,698,664|15849697|
|Object.create({})|2,015,853|1013708|
|new Function with empty prototype|75,969,299|37984928|
|Empty class|76,559,929|38288313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:07:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15849697,"opsSec":31698664.423539624},{"name":"Object.create({})","samples":1013708,"opsSec":2015853.9126474059},{"name":"new Function with empty prototype","samples":37984928,"opsSec":75969299.60084972},{"name":"Empty class","samples":38288313,"opsSec":76559929.81050692}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|140,947,797|71158270|
|Using optional chain (obj.field?.field2) (undefined)|96,002,529|48001982|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,593,982|48797013|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,620,173|48810108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:25:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":140947797.07023335,"samples":71158270},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96002529.91420813,"samples":48001982},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97593982.27789594,"samples":48797013},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97620173.8280849,"samples":48810108}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|88,223,738|44112789|
|Using parseInt(x, 10) - big number (10 len)|96,926,716|48467001|
|Using + - small number (2 len)|94,810,706|47405372|
|Using + - big number (10 len)|92,989,718|46803380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":44112789,"opsSec":88223738.18216395},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48467001,"opsSec":96926716.98795119},{"name":"Using + - small number (2 len)","samples":47405372,"opsSec":94810706.83420292},{"name":"Using + - big number (10 len)","samples":46803380,"opsSec":92989718.53953569}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|934,940|467705|
|Using ? operator to avoid rejection|1,059,144|529573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:13:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":467705,"opsSec":934940.6653956154},{"name":"Using ? operator to avoid rejection","samples":529573,"opsSec":1059144.061766367}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|97,705,267|48853927|
|Raw usage underscore usage|97,629,625|48814919|
|Manipulating private properties using #|96,655,832|48328568|
|Manipulating private properties using underscore(_)|96,411,319|48205674|
|Manipulating private properties using Symbol|94,166,461|47083250|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:17:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":48853927,"opsSec":97705267.93696825},{"name":"Raw usage underscore usage","samples":48814919,"opsSec":97629625.75319362},{"name":"Manipulating private properties using #","samples":48328568,"opsSec":96655832.69275197},{"name":"Manipulating private properties using underscore(_)","samples":48205674,"opsSec":96411319.65507203},{"name":"Manipulating private properties using Symbol","samples":47083250,"opsSec":94166461.76841651}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,988,782|3994392|
|Adding property in the object creation - small object|7,904,197|3952101|
|Adding property after the function creation - small class|269,563|135987|
|Adding property in the function creation - small class|283,576|141847|
|Adding property after the class creation - small class|267,436|133724|
|Adding property in the class creation - small class|266,506|133706|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:21:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3994392,"opsSec":7988782.370288396},{"name":"Adding property in the object creation - small object","samples":3952101,"opsSec":7904197.747541611},{"name":"Adding property after the function creation - small class","samples":135987,"opsSec":269563.49743246555},{"name":"Adding property in the function creation - small class","samples":141847,"opsSec":283576.68262493797},{"name":"Adding property after the class creation - small class","samples":133724,"opsSec":267436.63340820686},{"name":"Adding property in the class creation - small class","samples":133706,"opsSec":266506.04468182946}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,749,610|47874819|
|Getter|50,381,218|25195624|
|Method|96,667,041|48333540|
|DefineProperty (getter)|93,891,148|46951465|
|DefineProperty (getter & enumerable=false)|50,388,047|25199156|
|DefineProperty (getter & configurable=false)|94,316,123|47158254|
|DefineProperty (getter & enumerable=false & configurable=false)|49,642,880|24821488|
|DefineProperty (writable)|96,281,847|48141567|
|DefineProperty (writable & enumerable=false)|95,858,146|47929104|
|DefineProperty (writable & enumerable=false & configurable=false)|95,880,397|47967856|
|DefineProperties (getter)|49,924,129|24966347|
|DefineProperties (getter & enumerable=false)|50,249,555|25128928|
|DefineProperties (getter & enumerable=false & configurable=false)|49,586,867|24793478|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:28:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":47874819,"opsSec":95749610.61561137},{"name":"Getter","samples":25195624,"opsSec":50381218.91303829},{"name":"Method","samples":48333540,"opsSec":96667041.33318347},{"name":"DefineProperty (getter)","samples":46951465,"opsSec":93891148.35092263},{"name":"DefineProperty (getter & enumerable=false)","samples":25199156,"opsSec":50388047.7531205},{"name":"DefineProperty (getter & configurable=false)","samples":47158254,"opsSec":94316123.94474329},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24821488,"opsSec":49642880.884240225},{"name":"DefineProperty (writable)","samples":48141567,"opsSec":96281847.48195395},{"name":"DefineProperty (writable & enumerable=false)","samples":47929104,"opsSec":95858146.45906997},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47967856,"opsSec":95880397.06484693},{"name":"DefineProperties (getter)","samples":24966347,"opsSec":49924129.01642594},{"name":"DefineProperties (getter & enumerable=false)","samples":25128928,"opsSec":50249555.37644648},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24793478,"opsSec":49586867.63620187}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,735,552|49426379|
|Setter|11,421,285|5782503|
|Method|94,478,527|47239276|
|DefineProperty (setter)|93,507,797|46753911|
|DefineProperty (setter & enumerable=false)|11,660,894|5830451|
|DefineProperty (setter & configurable=false)|11,635,815|5817911|
|DefineProperty (setter & enumerable=false & configurable=false)|11,789,503|5894907|
|DefineProperty (writable)|96,049,146|48140878|
|DefineProperty (writable & enumerable=false)|99,113,526|49556773|
|DefineProperty (writable & enumerable=false & configurable=false)|98,714,820|49357418|
|DefineProperties (setter)|90,004,566|45624419|
|DefineProperties (setter & enumerable=false)|11,570,146|5785683|
|DefineProperties (setter & enumerable=false & configurable=false)|11,716,071|5858408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:32:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":49426379,"opsSec":98735552.77724913},{"name":"Setter","samples":5782503,"opsSec":11421285.094047967},{"name":"Method","samples":47239276,"opsSec":94478527.81349687},{"name":"DefineProperty (setter)","samples":46753911,"opsSec":93507797.6879726},{"name":"DefineProperty (setter & enumerable=false)","samples":5830451,"opsSec":11660894.280487986},{"name":"DefineProperty (setter & configurable=false)","samples":5817911,"opsSec":11635815.972647326},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5894907,"opsSec":11789503.865311319},{"name":"DefineProperty (writable)","samples":48140878,"opsSec":96049146.48222885},{"name":"DefineProperty (writable & enumerable=false)","samples":49556773,"opsSec":99113526.17729478},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49357418,"opsSec":98714820.20562878},{"name":"DefineProperties (setter)","samples":45624419,"opsSec":90004566.8060347},{"name":"DefineProperties (setter & enumerable=false)","samples":5785683,"opsSec":11570146.969315313},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5858408,"opsSec":11716071.162491918}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,417,233|1708746|
|Using replaceAll()|3,128,439|1564222|
|Using replaceAll(//g)|3,121,176|1562610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:07:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3417233.691305274,"samples":1708746},{"name":"Using replaceAll()","opsSec":3128439.019525081,"samples":1564222},{"name":"Using replaceAll(//g)","opsSec":3121176.9584574467,"samples":1562610}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,337,546|11669219|
|{ ...object, __proto__: null }|2,598,666|1299335|
|{ ...object, newProp: true }|20,367,879|10184722|
|structuredClone|310,356|155275|
|JSON.parse + JSON.stringify|310,570|155288|
|loop + object.keys starting with {}|1,679,352|839873|
|loop + object.keys starting with { __proto__: null }|917,957|458979|
|loop + object.keys starting with { randomProp: true }|673,663|336832|
|object.keys + reduce(FN, {})|1,751,949|877695|
|object.keys + reduce(FN, { __proto__: null })|916,269|458148|
|object.keys + reduce(FN, { newProp: true })|700,235|350118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:13:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23337546.785763346,"samples":11669219},{"name":"{ ...object, __proto__: null }","opsSec":2598666.7568638874,"samples":1299335},{"name":"{ ...object, newProp: true }","opsSec":20367879.17657862,"samples":10184722},{"name":"structuredClone","opsSec":310356.19248918863,"samples":155275},{"name":"JSON.parse + JSON.stringify","opsSec":310570.73085698026,"samples":155288},{"name":"loop + object.keys starting with {}","opsSec":1679352.0005097524,"samples":839873},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":917957.1297766409,"samples":458979},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":673663.3357679509,"samples":336832},{"name":"object.keys + reduce(FN, {})","opsSec":1751949.9166942772,"samples":877695},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":916269.8258361552,"samples":458148},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":700235.9117702751,"samples":350118}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|302,837|151419|
|Sort using first char|1,366,288|683795|
|Sort using localeCompare|1,266,790|633482|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:19:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":302837.60449408856,"samples":151419},{"name":"Sort using first char","opsSec":1366288.4271904519,"samples":683795},{"name":"Sort using localeCompare","opsSec":1266790.3610452116,"samples":633482}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,880|941|
|{...smallObject} - Total keys: 2|51,375,290|25694154|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,091|546|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,877|3439|
|{ ...bigObject, ...anotherBigObject }|1,158|580|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,404,550|6702959|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,976,061|13988034|
|{ ...smallObject, ...anotherSmallObject }|21,039,277|10520472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:25:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1880.8314243893756,"samples":941},{"name":"{...smallObject} - Total keys: 2","opsSec":51375290.73433489,"samples":25694154},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1091.4623281937345,"samples":546},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6877.831905788223,"samples":3439},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1158.9552157804364,"samples":580},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13404550.709018579,"samples":6702959},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27976061.453601617,"samples":13988034},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21039277.899583135,"samples":10520472}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,087|1045|
|streams.web.Readable reading 1e3 * "some data"|1,832|919|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:31:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2087.2856436541365,"samples":1045},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1832.4598800655608,"samples":919}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,676|3346|
|streams.web.WritableStream writing 1e3 * "some data"|1,639|822|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:36:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6676.824512638205,"samples":3346},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1639.3919348526226,"samples":822}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|139,154,382|69579012|
|Using backtick (`)|99,679,293|49873015|
|Using array.join|10,396,457|5198243|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:42:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":139154382.05151293,"samples":69579012},{"name":"Using backtick (`)","opsSec":99679293.91528936,"samples":49873015},{"name":"Using array.join","opsSec":10396457.90877073,"samples":5198243}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|122,047,112|61171865|
|(short string) (true) String#slice and strict comparison|49,905,915|24952970|
|(long string) (true) String#endsWith|52,589,651|26294835|
|(long string) (true) String#slice and strict comparison|45,709,130|22854576|
|(short string) (false) String#endsWith|91,028,440|45514234|
|(short string) (false) String#slice and strict comparison|49,803,402|24902913|
|(long string) (false) String#endsWith|84,328,705|42164365|
|(long string) (false) String#slice and strict comparison|45,341,423|22671339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:48:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":122047112.06890066,"samples":61171865},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49905915.945348516,"samples":24952970},{"name":"(long string) (true) String#endsWith","opsSec":52589651.38326341,"samples":26294835},{"name":"(long string) (true) String#slice and strict comparison","opsSec":45709130.151035786,"samples":22854576},{"name":"(short string) (false) String#endsWith","opsSec":91028440.50941098,"samples":45514234},{"name":"(short string) (false) String#slice and strict comparison","opsSec":49803402.26762524,"samples":24902913},{"name":"(long string) (false) String#endsWith","opsSec":84328705.88199012,"samples":42164365},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45341423.7655358,"samples":22671339}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|129,631,804|64815943|
|Using indexof|15,867,883|7935188|
|Using RegExp.test|13,302,063|6651035|
|Using RegExp.text with cached regex pattern|14,065,477|7032742|
|Using new RegExp.test|4,776,277|2388201|
|Using new RegExp.test with cached regex pattern|5,410,562|2705283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:54:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":129631804.85049015,"samples":64815943},{"name":"Using indexof","opsSec":15867883.504594866,"samples":7935188},{"name":"Using RegExp.test","opsSec":13302063.96086296,"samples":6651035},{"name":"Using RegExp.text with cached regex pattern","opsSec":14065477.95184448,"samples":7032742},{"name":"Using new RegExp.test","opsSec":4776277.167219957,"samples":2388201},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5410562.591345568,"samples":2705283}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|122,285,521|61143196|
|(short string) (true) String#slice and strict comparison|59,735,399|29881822|
|(long string) (true) String#startsWith|61,718,097|30897334|
|(long string) (true) String#slice and strict comparison|53,518,182|26761633|
|(short string) (false) String#startsWith|94,917,446|47462970|
|(short string) (false) String#slice and strict comparison|59,461,579|29730816|
|(long string) (false) String#startsWith|86,435,926|43217984|
|(long string) (false) String#slice and strict comparison|53,046,068|26523072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:00:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":122285521.32708815,"samples":61143196},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59735399.430558056,"samples":29881822},{"name":"(long string) (true) String#startsWith","opsSec":61718097.07255835,"samples":30897334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53518182.30786257,"samples":26761633},{"name":"(short string) (false) String#startsWith","opsSec":94917446.40722568,"samples":47462970},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59461579.91165599,"samples":29730816},{"name":"(long string) (false) String#startsWith","opsSec":86435926.16501173,"samples":43217984},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53046068.780674465,"samples":26523072}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|116,177,479|58088784|
|Using this|94,673,716|47336970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:09:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":116177479.47276065,"samples":58088784},{"name":"Using this","opsSec":94673716.94872287,"samples":47336970}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,270,834|5635728|
|Date.now()|19,638,669|9823918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:15:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11270834.819209773,"samples":5635728},{"name":"Date.now()","opsSec":19638669.76871747,"samples":9823918}]}-->

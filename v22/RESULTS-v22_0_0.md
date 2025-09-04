## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|91,605,273|45805615|
|Using dot notation|62,781,732|31415180|
|Using define property (writable)|4,800,509|2400482|
|Using define property initialized (writable)|7,036,349|3518989|
|Using define property (getter)|2,380,140|1190131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:09:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":45805615,"opsSec":91605273.64189726},{"name":"Using dot notation","samples":31415180,"opsSec":62781732.911027625},{"name":"Using define property (writable)","samples":2400482,"opsSec":4800509.007756245},{"name":"Using define property initialized (writable)","samples":3518989,"opsSec":7036349.225881193},{"name":"Using define property (getter)","samples":1190131,"opsSec":2380140.0701844846}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.005ms
array.push|100|0.031ms
new Array(length)|100|0.012ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.426ms
new Array(length)|10,000|0.268ms
array.push|1,000,000|25.538ms
new Array(length)|1,000,000|16.224ms
array.push|10,000,000|271.092ms
new Array(length)|10,000,000|79.221ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.013ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.388ms
new Array(length)|10,000|0.115ms
array.push|1,000,000|19.425ms
new Array(length)|1,000,000|11.362ms
array.push|10,000,000|235.936ms
new Array(length)|10,000,000|80.276ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|280|141|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:20:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":141,"opsSec":280.32071130748284},{"name":"Array.from","samples":12,"opsSec":23.727330641372763}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,781|2397|
|new Blob (1024)|562|284|
|text (128)|4,484|2248|
|text (1024)|568|286|
|arrayBuffer (128)|4,539|2270|
|arrayBuffer (1024)|564|283|
|slice (0, 64)|147,602|94617|
|slice (0, 512)|34,193|17098|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2397,"opsSec":4781.083444091775},{"name":"new Blob (1024)","samples":284,"opsSec":562.0715369740494},{"name":"text (128)","samples":2248,"opsSec":4484.490805479223},{"name":"text (1024)","samples":286,"opsSec":568.4322802674835},{"name":"arrayBuffer (128)","samples":2270,"opsSec":4539.4384805388345},{"name":"arrayBuffer (1024)","samples":283,"opsSec":564.344610212243},{"name":"slice (0, 64)","samples":94617,"opsSec":147602.97730354426},{"name":"slice (0, 512)","samples":17098,"opsSec":34193.587779156536}]}-->

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
|Using replace(//g)|3,145,607|1572804|
|Using replaceAll()|2,973,250|1486884|
|Using replaceAll(//g)|3,049,274|1524751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1572804,"opsSec":3145607.345713672},{"name":"Using replaceAll()","samples":1486884,"opsSec":2973250.583040537},{"name":"Using replaceAll(//g)","samples":1524751,"opsSec":3049274.8107309514}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,932,807|11991778|
|{ ...object, __proto__: null }|2,443,917|1222094|
|{ ...object, newProp: true }|22,555,583|11279276|
|structuredClone|300,176|150118|
|JSON.parse + JSON.stringify|294,312|147183|
|loop + object.keys starting with {}|1,608,536|804624|
|loop + object.keys starting with { __proto__: null }|861,563|430783|
|loop + object.keys starting with { randomProp: true }|626,500|313251|
|object.keys + reduce(FN, {})|1,663,935|832398|
|object.keys + reduce(FN, { __proto__: null })|818,610|409415|
|object.keys + reduce(FN, { newProp: true })|595,513|297788|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:42:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":11991778,"opsSec":23932807.725723602},{"name":"{ ...object, __proto__: null }","samples":1222094,"opsSec":2443917.4387881868},{"name":"{ ...object, newProp: true }","samples":11279276,"opsSec":22555583.414555646},{"name":"structuredClone","samples":150118,"opsSec":300176.6316661423},{"name":"JSON.parse + JSON.stringify","samples":147183,"opsSec":294312.36392617336},{"name":"loop + object.keys starting with {}","samples":804624,"opsSec":1608536.4606795453},{"name":"loop + object.keys starting with { __proto__: null }","samples":430783,"opsSec":861563.2154276876},{"name":"loop + object.keys starting with { randomProp: true }","samples":313251,"opsSec":626500.6918665554},{"name":"object.keys + reduce(FN, {})","samples":832398,"opsSec":1663935.2296663413},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":409415,"opsSec":818610.6892846766},{"name":"object.keys + reduce(FN, { newProp: true })","samples":297788,"opsSec":595513.45441291}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|307,111|153602|
|Sort using first char|1,318,702|659352|
|Sort using localeCompare|1,206,764|603448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:44:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":153602,"opsSec":307111.0092432892},{"name":"Sort using first char","samples":659352,"opsSec":1318702.858003325},{"name":"Sort using localeCompare","samples":603448,"opsSec":1206764.3033980415}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,702|853|
|{...smallObject} - Total keys: 2|39,295,053|19647829|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,044|523|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,797|3399|
|{ ...bigObject, ...anotherBigObject }|1,094|548|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,066,855|6033571|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,087,079|14051026|
|{ ...smallObject, ...anotherSmallObject }|20,174,018|10087400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:49:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":853,"opsSec":1702.45734289551},{"name":"{...smallObject} - Total keys: 2","samples":19647829,"opsSec":39295053.956430584},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":523,"opsSec":1044.881389689691},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3399,"opsSec":6797.727914142509},{"name":"{ ...bigObject, ...anotherBigObject }","samples":548,"opsSec":1094.3570199188555},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6033571,"opsSec":12066855.170852588},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14051026,"opsSec":28087079.901187874},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10087400,"opsSec":20174018.337485496}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,963|984|
|streams.web.Readable reading 1e3 * "some data"|1,619|810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:55:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":984,"opsSec":1963.8358353626372},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":810,"opsSec":1619.4587671632614}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,109|3055|
|streams.web.WritableStream writing 1e3 * "some data"|1,658|841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:01:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3055,"opsSec":6109.278726335011},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":841,"opsSec":1658.202064343268}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,615,526|48307770|
|Using backtick (`)|96,180,376|48090831|
|Using array.join|10,276,170|5138214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:07:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":48307770,"opsSec":96615526.28059527},{"name":"Using backtick (`)","samples":48090831,"opsSec":96180376.45308834},{"name":"Using array.join","samples":5138214,"opsSec":10276170.664134229}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|90,133,132|45112841|
|(short string) (true) String#slice and strict comparison|58,446,728|29284918|
|(long string) (true) String#endsWith|63,449,769|31725819|
|(long string) (true) String#slice and strict comparison|53,441,081|26720559|
|(short string) (false) String#endsWith|95,288,082|47644053|
|(short string) (false) String#slice and strict comparison|59,666,783|29836695|
|(long string) (false) String#endsWith|87,888,172|43992956|
|(long string) (false) String#slice and strict comparison|53,592,126|26796117|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:11:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45112841,"opsSec":90133132.75848478},{"name":"(short string) (true) String#slice and strict comparison","samples":29284918,"opsSec":58446728.13691029},{"name":"(long string) (true) String#endsWith","samples":31725819,"opsSec":63449769.91187426},{"name":"(long string) (true) String#slice and strict comparison","samples":26720559,"opsSec":53441081.01877194},{"name":"(short string) (false) String#endsWith","samples":47644053,"opsSec":95288082.74970782},{"name":"(short string) (false) String#slice and strict comparison","samples":29836695,"opsSec":59666783.45506872},{"name":"(long string) (false) String#endsWith","samples":43992956,"opsSec":87888172.26672755},{"name":"(long string) (false) String#slice and strict comparison","samples":26796117,"opsSec":53592126.0654581}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,982,517|7991259|
|Using indexof|15,806,868|7903437|
|Using RegExp.test|13,326,521|6663410|
|Using RegExp.text with cached regex pattern|14,075,478|7037812|
|Using new RegExp.test|4,709,352|2362169|
|Using new RegExp.test with cached regex pattern|5,244,999|2622528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:13:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7991259,"opsSec":15982517.296769237},{"name":"Using indexof","samples":7903437,"opsSec":15806868.341141133},{"name":"Using RegExp.test","samples":6663410,"opsSec":13326521.246046707},{"name":"Using RegExp.text with cached regex pattern","samples":7037812,"opsSec":14075478.656607393},{"name":"Using new RegExp.test","samples":2362169,"opsSec":4709352.642100027},{"name":"Using new RegExp.test with cached regex pattern","samples":2622528,"opsSec":5244999.448415947}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,614,609|44357528|
|(short string) (true) String#slice and strict comparison|52,068,577|26037617|
|(long string) (true) String#startsWith|54,289,872|27144942|
|(long string) (true) String#slice and strict comparison|46,939,193|23469945|
|(short string) (false) String#startsWith|95,075,298|47538741|
|(short string) (false) String#slice and strict comparison|52,507,773|26253893|
|(long string) (false) String#startsWith|86,655,000|43329967|
|(long string) (false) String#slice and strict comparison|46,511,640|23255841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:21:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44357528,"opsSec":88614609.3907342},{"name":"(short string) (true) String#slice and strict comparison","samples":26037617,"opsSec":52068577.44892178},{"name":"(long string) (true) String#startsWith","samples":27144942,"opsSec":54289872.816286206},{"name":"(long string) (true) String#slice and strict comparison","samples":23469945,"opsSec":46939193.98563158},{"name":"(short string) (false) String#startsWith","samples":47538741,"opsSec":95075298.31054841},{"name":"(short string) (false) String#slice and strict comparison","samples":26253893,"opsSec":52507773.60816543},{"name":"(long string) (false) String#startsWith","samples":43329967,"opsSec":86655000.38420811},{"name":"(long string) (false) String#slice and strict comparison","samples":23255841,"opsSec":46511640.88370945}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|94,137,705|47078584|
|Using this|95,294,890|47647802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:27:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":47078584,"opsSec":94137705.40595815},{"name":"Using this","samples":47647802,"opsSec":95294890.81303716}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,499,441|5249723|
|Date.now()|19,972,228|9996494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:28:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5249723,"opsSec":10499441.506239034},{"name":"Date.now()","samples":9996494,"opsSec":19972228.945123356}]}-->

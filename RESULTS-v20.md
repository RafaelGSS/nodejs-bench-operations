## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|937,623,727|92|
|Using dot notation|940,148,087|96|
|Using define property (writable)|5,059,684|96|
|Using define property initialized (writable)|6,527,034|92|
|Using define property (getter)|2,764,906|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":937623727.4196515,"samples":5},{"name":"Using dot notation","opsSec":940148086.5817163,"samples":7},{"name":"Using define property (writable)","opsSec":5059684.452005652,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6527033.634867635,"samples":4},{"name":"Using define property (getter)","opsSec":2764905.7063849717,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.007ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.325ms
new Array(length)|10,000|0.335ms
array.push|1,000,000|30.716ms
new Array(length)|1,000,000|7.903ms
array.push|100,000,000|1,997.478ms
new Array(length)|100,000,000|4,692.85ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.031ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.221ms
new Array(length)|10,000|0.169ms
array.push|1,000,000|23.113ms
new Array(length)|1,000,000|4.732ms
array.push|100,000,000|2,766.295ms
new Array(length)|100,000,000|4,209.487ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|85|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:32:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":216.94331435245323,"samples":2},{"name":"Array.from","opsSec":22.932832505461132,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|938,428,820|98|
|[async] async function|19,620,979|89|
|[async] function|298,608|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":938428819.5340297,"samples":8},{"name":"[async] async function","opsSec":19620978.669716783,"samples":6},{"name":"[async] function","opsSec":298608.46033545485,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,820|90|
|new Blob (1024)|757|78|
|text (128)|6,367|89|
|text (1024)|802|91|
|arrayBuffer (128)|6,311|90|
|arrayBuffer (1024)|791|88|
|slice (0, 64)|81,238|70|
|slice (0, 512)|26,612|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:49:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5819.8638285883035,"samples":7},{"name":"new Blob (1024)","opsSec":756.9342921317424,"samples":2},{"name":"text (128)","opsSec":6367.20849578342,"samples":4},{"name":"text (1024)","opsSec":801.6555338872593,"samples":2},{"name":"arrayBuffer (128)","opsSec":6310.928051262252,"samples":3},{"name":"arrayBuffer (1024)","opsSec":790.8535271520922,"samples":2},{"name":"slice (0, 64)","opsSec":81237.89597953676,"samples":4},{"name":"slice (0, 512)","opsSec":26612.04810356972,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|268,267|55|
|[True conditional] Using constructor name|221,980|98|
|[True conditional] Check if property is valid then instanceof |223,896|98|
|[False conditional] Using instanceof only|936,709,633|95|
|[False conditional] Using constructor name|940,225,263|97|
|[False conditional] Check if property is valid then instanceof |938,937,656|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:01:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":268267.2760931702,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":221979.8597595103,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":223896.09356476352,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":936709632.6375676,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":940225263.1247319,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":938937656.182004,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,378|90|
|crypto.verify('RSA-SHA256')|7,378|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:09:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7377.586608675331,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":7378.148208528962,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,582|83|
|Intl.DateTimeFormat().format(new Date())|18,996|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,605|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,041|85|
|Reusing Intl.DateTimeFormat()|742,911|88|
|Date.toLocaleDateString()|879,322|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,834|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:30:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16581.506119407422,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18995.856911407725,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16604.871940537745,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19040.958222207882,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":742911.0473206537,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":879322.2725463231,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19833.502849719152,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,161,844|98|
|Using brackets {}|1,198,585|97|
|Using '' + |1,204,707|93|
|Using date.toString()|1,333,385|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:42:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1161844.081378082,"samples":4},{"name":"Using brackets {}","opsSec":1198585.1617031486,"samples":6},{"name":"Using '' + ","opsSec":1204707.310471522,"samples":5},{"name":"Using date.toString()","opsSec":1333384.7209143338,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,181,884|96|
|Using delete property (proto: null)|23,221,542|94|
|Using delete property (cached proto: null)|4,231,215|98|
|Using undefined assignment|936,983,689|100|
|Using undefined assignment (proto: null)|25,693,625|97|
|Using undefined property (cached proto: null)|932,475,894|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:51:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4181883.60531899,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23221542.14206413,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4231215.2569704335,"samples":7},{"name":"Using undefined assignment","opsSec":936983688.7781489,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":25693624.564266164,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":932475893.7782047,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|261,874|53|
|NodeError|215,763|93|
|NodeError Range|217,658|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:00:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":261874.23911695307,"samples":3},{"name":"NodeError","opsSec":215763.3796882057,"samples":3},{"name":"NodeError Range","opsSec":217658.41709913703,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,899,876|96|
|Function returning explicitly undefined|1,917,897|97|
|Function returning implicitly undefined|1,923,850|94|
|Function returning string|1,901,814|97|
|Function returning integer|1,942,270|96|
|Function returning float|1,928,757|98|
|Function returning functions|1,879,063|97|
|Function returning arrow functions|1,887,952|97|
|Function returning empty object|1,916,131|96|
|Function returning empty array|1,894,386|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:12:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1899876.0825779277,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1917896.5323130286,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1923850.3760874316,"samples":5},{"name":"Function returning string","opsSec":1901813.7471014855,"samples":6},{"name":"Function returning integer","opsSec":1942270.175976308,"samples":5},{"name":"Function returning float","opsSec":1928757.1374368495,"samples":5},{"name":"Function returning functions","opsSec":1879063.3909133656,"samples":7},{"name":"Function returning arrow functions","opsSec":1887951.8001576979,"samples":5},{"name":"Function returning empty object","opsSec":1916130.7662884572,"samples":5},{"name":"Function returning empty array","opsSec":1894386.2355229382,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|952,086,876|99|
|using Array.includes (first item)|952,799,033|96|
|Using raw comparison|939,585,934|93|
|Using raw comparison (first item)|934,188,446|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:22:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":952086875.539852,"samples":6},{"name":"using Array.includes (first item)","opsSec":952799032.8779553,"samples":6},{"name":"Using raw comparison","opsSec":939585933.6564397,"samples":6},{"name":"Using raw comparison (first item)","opsSec":934188446.4024256,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|103,833,924|94|
|Using Object.getOwnPropertyNames()|105,352,859|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:30:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":103833924.02339225,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":105352858.84069023,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|992,436,359|93|
|Length = 10_000 - Array.at|995,376,519|98|
|Length = 1_000_000 - Array.at|994,022,578|94|
|Length = 100 - Array[length - 1]|872,819,875|98|
|Length = 10_000 - Array[length - 1]|872,657,635|99|
|Length = 1_000_000 - Array[length - 1]|871,963,207|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:39:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":992436359.2594172,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":995376518.600225,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":994022577.8109732,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":872819874.89493,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":872657634.7228274,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":871963207.279981,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|95,092,443|94|
|Object.create({})|2,825,675|87|
|Cached Empty.prototype|938,645,739|99|
|Empty.prototype|2,672,103|87|
|Empty class|1,666,633|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:48:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":95092442.76750131,"samples":5},{"name":"Object.create({})","opsSec":2825675.2117138733,"samples":3},{"name":"Cached Empty.prototype","opsSec":938645739.0664878,"samples":7},{"name":"Empty.prototype","opsSec":2672102.8654191066,"samples":4},{"name":"Empty class","opsSec":1666633.439372164,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|937,713,710|99|
|Using optional chain (obj.field?.field2) (undefined)|936,550,987|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|939,425,691|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|938,253,222|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:56:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":937713710.250248,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":936550986.8230493,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":939425691.4498879,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":938253221.8172731,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|936,422,770|95|
|Using parseInt(x, 10) - big number (10 len)|938,642,112|98|
|Using + - small number (2 len)|938,578,544|99|
|Using + - big number (10 len)|938,123,983|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:06:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":936422769.6546896,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":938642112.383855,"samples":6},{"name":"Using + - small number (2 len)","opsSec":938578543.5018545,"samples":6},{"name":"Using + - big number (10 len)","opsSec":938123983.1311561,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,424,837|85|
|Using ? operator to avoid rejection|1,502,055|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:14:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1424836.6929150915,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1502054.6987786342,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|937,261,235|96|
|Raw usage underscore usage|933,615,920|97|
|Manipulating private properties using #|924,343,122|93|
|Manipulating private properties using underscore(_)|927,044,313|97|
|Manipulating private properties using Symbol|924,047,115|94|
|Manipulating private properties using PrivateSymbol|55,955,491|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:22:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":937261235.0232862,"samples":6},{"name":"Raw usage underscore usage","opsSec":933615920.279144,"samples":6},{"name":"Manipulating private properties using #","opsSec":924343122.1183938,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":927044313.4582127,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":924047115.1623302,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":55955490.70050068,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,609,677|95|
|Adding property in the object creation - small object|5,677,808|99|
|Adding property after the function creation - small class|289,646|90|
|Adding property in the function creation - small class|289,663|89|
|Adding property after the class creation - small class|293,919|87|
|Adding property in the class creation - small class|294,363|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:32:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5609676.933035887,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5677808.47989975,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":289646.281906837,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":289663.0067423165,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":293918.93781287735,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":294362.6528627819,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|936,698,386|98|
|Getter|96,231,029|94|
|Method|886,184,273|99|
|DefineProperty (getter)|938,989,576|100|
|DefineProperty (getter & enumerable=false)|97,853,944|95|
|DefineProperty (getter & configurable=false)|938,893,614|100|
|DefineProperty (getter & enumerable=false & configurable=false)|97,764,462|93|
|DefineProperty (writable)|938,929,456|94|
|DefineProperty (writable & enumerable=false)|939,653,691|95|
|DefineProperty (writable & enumerable=false & configurable=false)|939,531,869|98|
|DefineProperties (getter)|96,507,808|92|
|DefineProperties (getter & enumerable=false)|98,040,272|94|
|DefineProperties (getter & enumerable=false & configurable=false)|73,529,232|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:45:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":936698386.0082903,"samples":6},{"name":"Getter","opsSec":96231029.35264881,"samples":6},{"name":"Method","opsSec":886184273.102178,"samples":6},{"name":"DefineProperty (getter)","opsSec":938989576.1644263,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":97853943.57976204,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":938893614.0210476,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":97764462.07014099,"samples":6},{"name":"DefineProperty (writable)","opsSec":938929455.7672815,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":939653691.102313,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":939531868.711986,"samples":7},{"name":"DefineProperties (getter)","opsSec":96507808.38984635,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98040272.094829,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":73529231.52389145,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|868,255,173|98|
|Setter|12,800,981|93|
|Method|697,201,383|93|
|DefineProperty (setter)|870,856,941|99|
|DefineProperty (setter & enumerable=false)|12,776,997|94|
|DefineProperty (setter & configurable=false)|12,637,540|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,737,031|93|
|DefineProperty (writable)|872,414,924|97|
|DefineProperty (writable & enumerable=false)|872,514,803|100|
|DefineProperty (writable & enumerable=false & configurable=false)|871,879,616|96|
|DefineProperties (setter)|751,356,655|79|
|DefineProperties (setter & enumerable=false)|12,781,538|96|
|DefineProperties (setter & enumerable=false & configurable=false)|12,201,793|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:04:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":868255172.631416,"samples":6},{"name":"Setter","opsSec":12800980.788479827,"samples":4},{"name":"Method","opsSec":697201383.3504018,"samples":10},{"name":"DefineProperty (setter)","opsSec":870856941.1606449,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12776996.735440457,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12637539.968222935,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12737031.042492855,"samples":5},{"name":"DefineProperty (writable)","opsSec":872414924.0810813,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":872514803.0875407,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":871879615.5388029,"samples":7},{"name":"DefineProperties (setter)","opsSec":751356654.5525831,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12781538.234875126,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12201792.76716899,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,732,565|94|
|Using replaceAll()|2,972,530|97|
|Using replaceAll(//g)|3,414,190|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:17:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3732565.2970246375,"samples":9},{"name":"Using replaceAll()","opsSec":2972529.7760574343,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3414189.90307589,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,330,167|93|
|{ ...object, __proto__: null }|29,959,573|97|
|{ ...object, newProp: true }|969,279|91|
|structuredClone|305,836|98|
|JSON.parse + JSON.stringify|190,126|99|
|loop + object.keys starting with {}|1,623,439|97|
|loop + object.keys starting with { __proto__: null }|868,399|98|
|loop + object.keys starting with { randomProp: true }|679,207|96|
|object.keys + reduce(FN, {})|648,223|96|
|object.keys + reduce(FN, { __proto__: null })|881,520|97|
|object.keys + reduce(FN, { newProp: true })|683,107|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:28:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":29330166.635879185,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":29959573.186314214,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":969279.3899842537,"samples":3},{"name":"structuredClone","opsSec":305835.8950562111,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":190125.94668737188,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1623438.753325565,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":868398.9043032861,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":679207.050551992,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":648223.1098207647,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":881519.5097952072,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":683106.8166186662,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|260,178|96|
|Sort using first char|1,524,352|98|
|Sort using localeCompare|1,394,091|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:38:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":260178.44492060298,"samples":4},{"name":"Sort using first char","opsSec":1524352.419632092,"samples":5},{"name":"Sort using localeCompare","opsSec":1394091.0780704655,"samples":4}]}-->

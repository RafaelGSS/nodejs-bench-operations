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

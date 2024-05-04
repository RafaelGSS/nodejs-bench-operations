## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|143,098,427|78|
|Using dot notation|147,078,262|85|
|Using define property (writable)|4,893,416|94|
|Using define property initialized (writable)|7,731,782|95|
|Using define property (getter)|2,701,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:21:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":143098426.87349737,"samples":7},{"name":"Using dot notation","opsSec":147078261.58979377,"samples":6},{"name":"Using define property (writable)","opsSec":4893416.468456979,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7731782.219340368,"samples":4},{"name":"Using define property (getter)","opsSec":2701898.3411655263,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.065ms
new Array(length)|100|0.006ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.344ms
new Array(length)|10,000|0.145ms
array.push|1,000,000|29.25ms
new Array(length)|1,000,000|7.114ms
array.push|100,000,000|2,045.374ms
new Array(length)|100,000,000|4,048.018ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.496ms
new Array(length)|10,000|0.218ms
array.push|1,000,000|16.447ms
new Array(length)|1,000,000|7.332ms
array.push|100,000,000|2,602.481ms
new Array(length)|100,000,000|4,049.746ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|249|90|
|Array.from|24|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:34:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":249.44902195730054,"samples":3},{"name":"Array.from","opsSec":24.183456328477693,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|141,769,786|80|
|[async] async function|19,457,725|89|
|[async] function|202,792|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:40:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":141769785.730426,"samples":5},{"name":"[async] async function","opsSec":19457725.183432702,"samples":7},{"name":"[async] function","opsSec":202791.98093113885,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,550|84|
|new Blob (1024)|836|76|
|text (128)|6,774|87|
|text (1024)|859|89|
|arrayBuffer (128)|6,812|88|
|arrayBuffer (1024)|854|88|
|slice (0, 64)|244,497|57|
|slice (0, 512)|27,921|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:53:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6549.744270873954,"samples":5},{"name":"new Blob (1024)","opsSec":836.0468936761839,"samples":2},{"name":"text (128)","opsSec":6774.479261130344,"samples":4},{"name":"text (1024)","opsSec":859.493924981644,"samples":3},{"name":"arrayBuffer (128)","opsSec":6812.388310807467,"samples":5},{"name":"arrayBuffer (1024)","opsSec":853.5913088831454,"samples":2},{"name":"slice (0, 64)","opsSec":244497.2002909894,"samples":3},{"name":"slice (0, 512)","opsSec":27920.66685398821,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|258,622|57|
|[True conditional] Using constructor name|213,814|96|
|[True conditional] Check if property is valid then instanceof |217,459|99|
|[False conditional] Using instanceof only|146,027,143|81|
|[False conditional] Using constructor name|145,908,542|81|
|[False conditional] Check if property is valid then instanceof |138,613,998|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:04:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":258621.62883415172,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":213813.78196277985,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":217459.2588393083,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":146027143.42420498,"samples":4},{"name":"[False conditional] Using constructor name","opsSec":145908542.1403327,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":138613998.1959488,"samples":4}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,515|96|
|crypto.verify('RSA-SHA256')|7,448|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:11:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7514.701878019139,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":7448.157713601487,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,927|80|
|Intl.DateTimeFormat().format(new Date())|18,323|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,281|93|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,090|82|
|Reusing Intl.DateTimeFormat()|745,214|85|
|Date.toLocaleDateString()|859,271|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,230|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:35:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17926.99064553262,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18322.525788516643,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21280.679795768985,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18090.200801510717,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":745213.7882293559,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":859270.7470101938,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21230.133204371174,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,202,814|93|
|Using brackets {}|1,219,408|96|
|Using '' + |1,205,129|96|
|Using date.toString()|1,337,100|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:45:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1202814.0951873478,"samples":5},{"name":"Using brackets {}","opsSec":1219407.892338685,"samples":4},{"name":"Using '' + ","opsSec":1205128.769785198,"samples":4},{"name":"Using date.toString()","opsSec":1337100.4923520565,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,489,998|92|
|Using delete property (proto: null)|21,196,998|94|
|Using delete property (cached proto: null)|4,563,585|94|
|Using undefined assignment|142,768,332|79|
|Using undefined assignment (proto: null)|24,224,136|95|
|Using undefined property (cached proto: null)|143,228,209|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4489998.408050981,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21196997.891104277,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4563585.447484376,"samples":5},{"name":"Using undefined assignment","opsSec":142768332.20986706,"samples":5},{"name":"Using undefined assignment (proto: null)","opsSec":24224135.881430566,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":143228208.89583343,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|251,926|60|
|NodeError|210,820|94|
|NodeError Range|211,070|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:03:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":251926.2942895334,"samples":3},{"name":"NodeError","opsSec":210819.93306012635,"samples":3},{"name":"NodeError Range","opsSec":211069.78323734057,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,024,719|94|
|Function returning explicitly undefined|2,003,660|94|
|Function returning implicitly undefined|2,032,259|93|
|Function returning string|1,996,076|99|
|Function returning integer|2,054,771|99|
|Function returning float|2,036,496|99|
|Function returning functions|1,979,925|95|
|Function returning arrow functions|1,982,111|97|
|Function returning empty object|2,033,213|96|
|Function returning empty array|2,028,702|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:17:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2024718.6728395568,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2003660.4789276717,"samples":5},{"name":"Function returning implicitly undefined","opsSec":2032258.6512501799,"samples":5},{"name":"Function returning string","opsSec":1996076.0919568685,"samples":5},{"name":"Function returning integer","opsSec":2054771.3177087558,"samples":6},{"name":"Function returning float","opsSec":2036496.005178739,"samples":6},{"name":"Function returning functions","opsSec":1979924.6920675153,"samples":5},{"name":"Function returning arrow functions","opsSec":1982111.1688562313,"samples":5},{"name":"Function returning empty object","opsSec":2033212.9768747815,"samples":5},{"name":"Function returning empty array","opsSec":2028701.553390455,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,736,035|88|
|using Array.includes (first item)|101,467,435|84|
|Using raw comparison|148,674,023|84|
|Using raw comparison (first item)|145,380,090|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:25:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":85736034.89863756,"samples":4},{"name":"using Array.includes (first item)","opsSec":101467434.75178717,"samples":7},{"name":"Using raw comparison","opsSec":148674023.2164436,"samples":5},{"name":"Using raw comparison (first item)","opsSec":145380090.04892954,"samples":5}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|59,394,565|89|
|Using Object.getOwnPropertyNames()|61,747,726|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:32:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":59394564.601164885,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":61747726.20417454,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|123,354,469|83|
|Length = 10_000 - Array.at|124,113,653|81|
|Length = 1_000_000 - Array.at|126,047,875|82|
|Length = 100 - Array[length - 1]|131,331,412|80|
|Length = 10_000 - Array[length - 1]|126,133,335|79|
|Length = 1_000_000 - Array[length - 1]|132,020,294|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:42:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":123354468.56819975,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":124113652.99253123,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":126047875.34563816,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":131331412.20859241,"samples":5},{"name":"Length = 10_000 - Array[length - 1]","opsSec":126133335.46533895,"samples":5},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":132020293.60371327,"samples":5}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,074,125|88|
|Object.create({})|2,574,604|89|
|Cached Empty.prototype|148,623,412|86|
|Empty.prototype|2,693,859|90|
|Empty class|1,739,977|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:52:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":57074124.508816876,"samples":5},{"name":"Object.create({})","opsSec":2574604.16084125,"samples":3},{"name":"Cached Empty.prototype","opsSec":148623411.61649272,"samples":5},{"name":"Empty.prototype","opsSec":2693859.1634095856,"samples":3},{"name":"Empty class","opsSec":1739977.4126855498,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|152,342,184|85|
|Using optional chain (obj.field?.field2) (undefined)|147,072,800|83|
|Using and operator (obj.field && obj.field.field2) (Valid)|156,390,099|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|147,085,520|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:59:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":152342183.94473633,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":147072800.1900264,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":156390098.94066307,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":147085520.0342721,"samples":4}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|144,983,447|81|
|Using parseInt(x, 10) - big number (10 len)|145,661,681|83|
|Using + - small number (2 len)|148,412,513|86|
|Using + - big number (10 len)|141,484,969|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:09:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":144983446.51719913,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":145661680.89538464,"samples":6},{"name":"Using + - small number (2 len)","opsSec":148412512.88194004,"samples":5},{"name":"Using + - big number (10 len)","opsSec":141484968.58771148,"samples":5}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,377,716|87|
|Using ? operator to avoid rejection|1,419,430|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1377716.0859461161,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1419429.6944159342,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|135,215,025|75|
|Raw usage underscore usage|142,333,023|80|
|Manipulating private properties using #|137,916,840|78|
|Manipulating private properties using underscore(_)|133,673,770|77|
|Manipulating private properties using Symbol|137,128,834|80|
|Manipulating private properties using PrivateSymbol|41,847,744|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:26:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":135215025.48875508,"samples":4},{"name":"Raw usage underscore usage","opsSec":142333022.64951834,"samples":4},{"name":"Manipulating private properties using #","opsSec":137916840.002829,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":133673769.9093224,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":137128834.2285323,"samples":5},{"name":"Manipulating private properties using PrivateSymbol","opsSec":41847744.4669262,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,611,790|95|
|Adding property in the object creation - small object|5,665,835|93|
|Adding property after the function creation - small class|316,553|88|
|Adding property in the function creation - small class|317,592|92|
|Adding property after the class creation - small class|315,327|89|
|Adding property in the class creation - small class|315,196|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:35:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5611789.554478752,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":5665834.88413781,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":316552.7759700714,"samples":6},{"name":"Adding property in the function creation - small class","opsSec":317591.9942491332,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":315327.4119623742,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":315196.1060922906,"samples":5}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,189,745|77|
|Getter|63,880,276|89|
|Method|136,916,549|79|
|DefineProperty (getter)|145,227,034|81|
|DefineProperty (getter & enumerable=false)|64,187,328|87|
|DefineProperty (getter & configurable=false)|144,641,453|82|
|DefineProperty (getter & enumerable=false & configurable=false)|64,252,123|91|
|DefineProperty (writable)|142,212,840|78|
|DefineProperty (writable & enumerable=false)|142,475,706|82|
|DefineProperty (writable & enumerable=false & configurable=false)|146,535,627|81|
|DefineProperties (getter)|64,314,466|92|
|DefineProperties (getter & enumerable=false)|64,871,702|88|
|DefineProperties (getter & enumerable=false & configurable=false)|61,845,684|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:49:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":141189744.94986138,"samples":5},{"name":"Getter","opsSec":63880276.01801818,"samples":4},{"name":"Method","opsSec":136916548.9086586,"samples":5},{"name":"DefineProperty (getter)","opsSec":145227034.18012637,"samples":5},{"name":"DefineProperty (getter & enumerable=false)","opsSec":64187328.477411225,"samples":4},{"name":"DefineProperty (getter & configurable=false)","opsSec":144641453.25625682,"samples":5},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":64252122.75285556,"samples":4},{"name":"DefineProperty (writable)","opsSec":142212839.62966555,"samples":4},{"name":"DefineProperty (writable & enumerable=false)","opsSec":142475706.35398716,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":146535627.00379893,"samples":6},{"name":"DefineProperties (getter)","opsSec":64314466.07262233,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":64871702.17663346,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":61845683.62290133,"samples":4}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|132,589,648|88|
|Setter|12,339,500|94|
|Method|126,631,176|79|
|DefineProperty (setter)|123,597,851|79|
|DefineProperty (setter & enumerable=false)|12,336,751|93|
|DefineProperty (setter & configurable=false)|12,297,721|97|
|DefineProperty (setter & enumerable=false & configurable=false)|12,435,012|95|
|DefineProperty (writable)|131,211,837|86|
|DefineProperty (writable & enumerable=false)|129,843,153|83|
|DefineProperty (writable & enumerable=false & configurable=false)|129,061,942|85|
|DefineProperties (setter)|127,133,415|80|
|DefineProperties (setter & enumerable=false)|12,187,440|96|
|DefineProperties (setter & enumerable=false & configurable=false)|12,297,786|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:10:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":132589648.36275452,"samples":5},{"name":"Setter","opsSec":12339500.066831933,"samples":4},{"name":"Method","opsSec":126631175.9200343,"samples":6},{"name":"DefineProperty (setter)","opsSec":123597850.6224885,"samples":5},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12336750.972689776,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12297721.097593183,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12435012.472348277,"samples":5},{"name":"DefineProperty (writable)","opsSec":131211837.04384358,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":129843152.68347917,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":129061941.82836248,"samples":7},{"name":"DefineProperties (setter)","opsSec":127133415.4838308,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12187439.631249707,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12297785.909044953,"samples":7}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,530,127|94|
|Using replaceAll()|3,383,913|94|
|Using replaceAll(//g)|3,304,830|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:19:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3530126.5943052834,"samples":5},{"name":"Using replaceAll()","opsSec":3383912.537704193,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3304830.1016185507,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,993,427|92|
|{ ...object, __proto__: null }|2,717,416|95|
|{ ...object, newProp: true }|25,913,607|93|
|structuredClone|324,165|97|
|JSON.parse + JSON.stringify|300,362|95|
|loop + object.keys starting with {}|1,767,972|97|
|loop + object.keys starting with { __proto__: null }|921,975|92|
|loop + object.keys starting with { randomProp: true }|734,970|96|
|object.keys + reduce(FN, {})|695,480|94|
|object.keys + reduce(FN, { __proto__: null })|925,961|99|
|object.keys + reduce(FN, { newProp: true })|732,721|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":27993426.97559816,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2717415.746838682,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":25913606.980589725,"samples":5},{"name":"structuredClone","opsSec":324164.87100520555,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":300362.2131628957,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1767971.6257170811,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":921975.0823336297,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":734969.6021740511,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":695480.2706723561,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":925961.2186548308,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":732720.5284054707,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|349,160|92|
|Sort using first char|1,508,086|96|
|Sort using localeCompare|1,394,971|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:41:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":349159.5189249661,"samples":4},{"name":"Sort using first char","opsSec":1508085.6039851755,"samples":4},{"name":"Sort using localeCompare","opsSec":1394970.6077673298,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,235|93|
|{...smallObject} - Total keys: 2|68,998,616|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,273|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,924|96|
|{ ...bigObject, ...anotherBigObject }|1,375|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,592,347|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|32,440,152|94|
|{ ...smallObject, ...anotherSmallObject }|23,906,081|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:53:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2234.7197958543156,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":68998615.86676298,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1272.8204720039175,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6924.086692547205,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1374.6528912293004,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14592346.889102219,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":32440152.167070486,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23906081.02882122,"samples":4}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,326|86|
|streams.web.Readable reading 1e3 * "some data"|2,270|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:00:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2326.326216571033,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2270.0241598901166,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,586|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,636|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:09:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6585.597535498155,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1635.5087583345485,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|141,006,259|80|
|Using backtick (`)|145,048,959|83|
|Using array.join|10,931,178|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:17:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":141006258.97713974,"samples":5},{"name":"Using backtick (`)","opsSec":145048958.824537,"samples":6},{"name":"Using array.join","opsSec":10931177.923047803,"samples":5}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|125,249,594|82|
|(short string) (true) String#slice and strict comparison|145,420,958|83|
|(long string) (true) String#endsWith|93,995,785|92|
|(long string) (true) String#slice and strict comparison|147,584,357|84|
|(short string) (false) String#endsWith|136,173,563|82|
|(short string) (false) String#slice and strict comparison|142,428,602|79|
|(long string) (false) String#endsWith|132,930,083|79|
|(long string) (false) String#slice and strict comparison|145,523,676|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:30:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":125249594.2725666,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":145420957.61064738,"samples":8},{"name":"(long string) (true) String#endsWith","opsSec":93995784.97471847,"samples":4},{"name":"(long string) (true) String#slice and strict comparison","opsSec":147584357.26427084,"samples":5},{"name":"(short string) (false) String#endsWith","opsSec":136173562.6807902,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":142428602.19975084,"samples":4},{"name":"(long string) (false) String#endsWith","opsSec":132930082.95972565,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":145523675.9873987,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|141,127,769|82|
|Using indexof|146,048,431|83|
|Using RegExp.test|15,085,010|96|
|Using RegExp.text with cached regex pattern|15,485,135|97|
|Using new RegExp.test|4,977,806|92|
|Using new RegExp.test with cached regex pattern|5,889,315|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:40:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":141127768.63312277,"samples":7},{"name":"Using indexof","opsSec":146048430.6877638,"samples":6},{"name":"Using RegExp.test","opsSec":15085009.678219175,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":15485135.487492343,"samples":4},{"name":"Using new RegExp.test","opsSec":4977806.408029403,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5889314.795327299,"samples":5}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|132,076,009|88|
|(short string) (true) String#slice and strict comparison|145,276,819|82|
|(long string) (true) String#startsWith|90,560,354|86|
|(long string) (true) String#slice and strict comparison|146,822,495|85|
|(short string) (false) String#startsWith|139,333,495|84|
|(short string) (false) String#slice and strict comparison|150,319,842|87|
|(long string) (false) String#startsWith|140,005,430|85|
|(long string) (false) String#slice and strict comparison|146,731,251|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:53:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":132076008.69242074,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":145276819.27661863,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":90560353.52883291,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":146822495.38531655,"samples":5},{"name":"(short string) (false) String#startsWith","opsSec":139333495.03599852,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":150319841.9762042,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":140005429.7652799,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":146731250.79515186,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,897,392|85|
|Using this|144,461,914|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:59:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":129897392.10032982,"samples":5},{"name":"Using this","opsSec":144461914.26952368,"samples":6}]}-->

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

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|713,283,080|96|
|Using dot notation|707,542,860|95|
|Using define property (writable)|3,076,464|98|
|Using define property initialized (writable)|3,734,601|95|
|Using define property (getter)|1,536,237|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":713283079.6197867,"samples":8},{"name":"Using dot notation","opsSec":707542860.3084638,"samples":8},{"name":"Using define property (writable)","opsSec":3076464.3946698313,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3734601.4194992417,"samples":4},{"name":"Using define property (getter)","opsSec":1536236.6467177353,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.131ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.538ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|47.997ms
new Array(length)|1,000,000|7.646ms
array.push|100,000,000|2,067.147ms
new Array(length)|100,000,000|5,679.762ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.084ms
new Array(length)|100|0.013ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.703ms
new Array(length)|10,000|5.089ms
array.push|1,000,000|385.023ms
new Array(length)|1,000,000|7ms
array.push|100,000,000|2,981.636ms
new Array(length)|100,000,000|6,309.026ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|82|
|Array.from|12|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":271.5060177100338,"samples":3},{"name":"Array.from","opsSec":11.737238417929294,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,141|86|
|new Blob (1024)|417|71|
|text (128)|25,880|82|
|text (1024)|17,022|74|
|arrayBuffer (128)|31,655|88|
|arrayBuffer (1024)|20,111|88|
|slice (0, 64)|66,711|80|
|slice (0, 512)|33,436|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3140.6555558755676,"samples":4},{"name":"new Blob (1024)","opsSec":416.7626701926918,"samples":2},{"name":"text (128)","opsSec":25880.48897899092,"samples":4},{"name":"text (1024)","opsSec":17021.63439217799,"samples":3},{"name":"arrayBuffer (128)","opsSec":31654.791214231278,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20110.53845452326,"samples":3},{"name":"slice (0, 64)","opsSec":66711.38966037962,"samples":4},{"name":"slice (0, 512)","opsSec":33436.16728876442,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,972|53|
|[True conditional] Using constructor name|133,493|95|
|[True conditional] Check if property is valid then instanceof |136,027|92|
|[False conditional] Using instanceof only|594,588,611|98|
|[False conditional] Using constructor name|593,934,056|97|
|[False conditional] Check if property is valid then instanceof |594,722,137|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":171972.45633303712,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":133493.46654221704,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":136027.18949308738,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":594588610.5286802,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":593934055.9988905,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":594722137.3280324,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,437|92|
|crypto.verify('RSA-SHA256')|20,641|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":21436.759489327713,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":20641.1127505573,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,640,623|91|
|fromUnixToISOString(new Date())|1,420,635|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1640622.5192633655,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1420634.9212216632,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,713|84|
|Intl.DateTimeFormat().format(new Date())|8,710|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,149|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,992|76|
|Reusing Intl.DateTimeFormat()|422,277|97|
|Date.toLocaleDateString()|423,355|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,175|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8712.859097031851,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8710.313802791254,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10149.132105762517,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8992.277568939322,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":422277.28255833144,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":423354.68888506765,"samples":8},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11174.946354381002,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,828|96|
|Using brackets {}|703,351|96|
|Using '' + |700,587|97|
|Using date.toString()|754,854|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":703827.8908604542,"samples":7},{"name":"Using brackets {}","opsSec":703351.3931913908,"samples":6},{"name":"Using '' + ","opsSec":700586.5505075369,"samples":5},{"name":"Using date.toString()","opsSec":754853.6602382892,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,412,852|96|
|Using delete property (proto: null)|12,473,045|97|
|Using delete property (cached proto: null)|2,413,285|96|
|Using undefined assignment|711,764,486|94|
|Using undefined assignment (proto: null)|15,091,142|94|
|Using undefined property (cached proto: null)|709,315,951|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2412851.7847624985,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12473044.80008667,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2413285.3514511767,"samples":7},{"name":"Using undefined assignment","opsSec":711764485.5116663,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":15091141.759529714,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":709315951.2398508,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|192,864|56|
|NodeError|152,285|95|
|NodeError Range|152,475|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":192863.68781648375,"samples":4},{"name":"NodeError","opsSec":152285.25441070076,"samples":3},{"name":"NodeError Range","opsSec":152475.48123103732,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,001,275|92|
|Function returning explicitly undefined|1,018,067|92|
|Function returning implicitly undefined|1,039,456|84|
|Function returning string|1,041,434|97|
|Function returning integer|1,048,967|94|
|Function returning float|1,057,961|92|
|Function returning functions|1,030,447|90|
|Function returning arrow functions|1,039,952|93|
|Function returning empty object|1,054,509|95|
|Function returning empty array|1,047,643|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1001275.1910208459,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1018067.1322278648,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1039455.9780310849,"samples":6},{"name":"Function returning string","opsSec":1041433.6831286289,"samples":6},{"name":"Function returning integer","opsSec":1048967.0901457386,"samples":6},{"name":"Function returning float","opsSec":1057960.97518787,"samples":6},{"name":"Function returning functions","opsSec":1030447.1654165763,"samples":6},{"name":"Function returning arrow functions","opsSec":1039952.0799739569,"samples":7},{"name":"Function returning empty object","opsSec":1054508.854473309,"samples":6},{"name":"Function returning empty array","opsSec":1047643.3747266913,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,758,921|97|
|using Array.includes (first item)|590,797,569|93|
|Using raw comparison|594,483,680|97|
|Using raw comparison (first item)|592,961,886|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":592758920.7875453,"samples":9},{"name":"using Array.includes (first item)","opsSec":590797569.381624,"samples":6},{"name":"Using raw comparison","opsSec":594483679.5673215,"samples":8},{"name":"Using raw comparison (first item)","opsSec":592961885.5486453,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,216,023|93|
|Using Object.getOwnPropertyNames()|49,876,395|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":54216022.916601405,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":49876394.68310118,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,676,698|92|
|Length = 10_000 - Array.at|15,651,590|97|
|Length = 1_000_000 - Array.at|15,639,450|97|
|Length = 100 - Array[length - 1]|713,156,523|96|
|Length = 10_000 - Array[length - 1]|711,569,175|97|
|Length = 1_000_000 - Array[length - 1]|710,732,242|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:00:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15676698.232108265,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":15651590.123857243,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":15639449.79593825,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":713156522.9213648,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":711569174.6711663,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":710732242.11955,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,991,870|93|
|Object.create({})|1,329,707|81|
|Cached Empty.prototype|711,720,160|97|
|Empty.prototype|1,300,736|72|
|Empty class|882,748|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":40991870.47083139,"samples":7},{"name":"Object.create({})","opsSec":1329706.5317681557,"samples":3},{"name":"Cached Empty.prototype","opsSec":711720160.3306613,"samples":8},{"name":"Empty.prototype","opsSec":1300735.9593071435,"samples":3},{"name":"Empty class","opsSec":882747.9398370023,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|724,172,883|85|
|Using optional chain (obj.field?.field2) (undefined)|729,162,138|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|737,317,939|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|739,224,015|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":724172882.5056313,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":729162138.1993675,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":737317939.4271761,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":739224015.4928056,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|217,024,630|91|
|Using parseInt(x, 10) - big number (10 len)|15,284,371|91|
|Using + - small number (2 len)|594,313,720|97|
|Using + - big number (10 len)|593,539,262|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":217024629.91713628,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15284370.544729333,"samples":7},{"name":"Using + - small number (2 len)","opsSec":594313719.9057946,"samples":8},{"name":"Using + - big number (10 len)","opsSec":593539261.7908756,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|716,585|71|
|Using ? operator to avoid rejection|763,780|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":716585.4481825166,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":763779.9841045366,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|5,927,325|87|
|Raw usage underscore usage|4,924,913|87|
|Manipulating private properties using #|1,869,453|82|
|Manipulating private properties using underscore(_)|556,822,615|86|
|Manipulating private properties using Symbol|543,960,720|90|
|Manipulating private properties using PrivateSymbol|21,869,759|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":5927324.642899202,"samples":6},{"name":"Raw usage underscore usage","opsSec":4924913.244273668,"samples":5},{"name":"Manipulating private properties using #","opsSec":1869452.9733465884,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":556822614.9619871,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":543960719.6293284,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21869759.18480941,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,947,360|98|
|Adding property in the object creation - small object|1,960,714|98|
|Adding property after the function creation - small class|174,288|86|
|Adding property in the function creation - small class|175,364|87|
|Adding property after the class creation - small class|142,709|81|
|Adding property in the class creation - small class|142,841|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1947360.4320349675,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":1960713.6044219718,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":174287.77974391184,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":175363.6981620733,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":142709.0738033342,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":142840.75341793516,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|593,545,205|95|
|Getter|66,870,875|93|
|Method|594,231,503|98|
|DefineProperty (getter)|592,588,037|97|
|DefineProperty (getter & enumerable=false)|67,195,089|94|
|DefineProperty (getter & configurable=false)|595,446,568|95|
|DefineProperty (getter & enumerable=false & configurable=false)|65,918,814|95|
|DefineProperty (writable)|593,399,655|95|
|DefineProperty (writable & enumerable=false)|591,891,404|97|
|DefineProperty (writable & enumerable=false & configurable=false)|204,713,370|35|
|DefineProperties (getter)|40,600,637|82|
|DefineProperties (getter & enumerable=false)|67,104,780|94|
|DefineProperties (getter & enumerable=false & configurable=false)|66,575,057|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:20:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":593545204.5405294,"samples":6},{"name":"Getter","opsSec":66870874.861909494,"samples":5},{"name":"Method","opsSec":594231502.9500427,"samples":7},{"name":"DefineProperty (getter)","opsSec":592588036.9047085,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":67195088.98912974,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":595446568.3913795,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":65918814.04758675,"samples":5},{"name":"DefineProperty (writable)","opsSec":593399655.2610136,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591891404.0839648,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":204713369.58736116,"samples":6},{"name":"DefineProperties (getter)","opsSec":40600636.53121484,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":67104779.99141675,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":66575057.49135873,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|402,752,775|91|
|Setter|6,204,754|92|
|Method|412,284,077|92|
|DefineProperty (setter)|415,244,383|93|
|DefineProperty (setter & enumerable=false)|6,120,098|93|
|DefineProperty (setter & configurable=false)|6,233,321|94|
|DefineProperty (setter & enumerable=false & configurable=false)|6,342,463|93|
|DefineProperty (writable)|628,820,317|91|
|DefineProperty (writable & enumerable=false)|618,751,358|93|
|DefineProperty (writable & enumerable=false & configurable=false)|614,700,544|89|
|DefineProperties (setter)|615,919,660|88|
|DefineProperties (setter & enumerable=false)|6,250,957|94|
|DefineProperties (setter & enumerable=false & configurable=false)|6,318,930|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":402752775.3082066,"samples":6},{"name":"Setter","opsSec":6204754.045193458,"samples":6},{"name":"Method","opsSec":412284077.20129216,"samples":6},{"name":"DefineProperty (setter)","opsSec":415244383.14380336,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6120097.563446122,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":6233321.059789399,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6342463.115721068,"samples":6},{"name":"DefineProperty (writable)","opsSec":628820316.9583396,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":618751357.8288717,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":614700543.6631685,"samples":7},{"name":"DefineProperties (setter)","opsSec":615919659.6681441,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6250956.89997317,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6318929.678885833,"samples":6}]}-->

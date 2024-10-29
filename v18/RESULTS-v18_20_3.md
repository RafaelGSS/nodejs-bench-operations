## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|114,811,061|57421649|
|Using dot notation|74,526,862|37289026|
|Using define property (writable)|3,852,599|1926579|
|Using define property initialized (writable)|5,437,804|2719472|
|Using define property (getter)|2,109,718|1054860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:41:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":114811061.57975176,"samples":57421649},{"name":"Using dot notation","opsSec":74526862.62818894,"samples":37289026},{"name":"Using define property (writable)","opsSec":3852599.7891113563,"samples":1926579},{"name":"Using define property initialized (writable)","opsSec":5437804.138372123,"samples":2719472},{"name":"Using define property (getter)","opsSec":2109718.3164447835,"samples":1054860}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.371ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|25.806ms
new Array(length)|1,000,000|7.785ms
array.push|100,000,000|1,840.83ms
new Array(length)|100,000,000|4,054.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.473ms
new Array(length)|10,000|3.267ms
array.push|1,000,000|250.209ms
new Array(length)|1,000,000|4.581ms
array.push|100,000,000|2,294.551ms
new Array(length)|100,000,000|4,352.978ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|255|129|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:56:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":255.9467643428301,"samples":129},{"name":"Array.from","opsSec":20.382277583699892,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,470|2245|
|new Blob (1024)|557|279|
|text (128)|47,151|23576|
|text (1024)|30,692|15357|
|arrayBuffer (128)|48,768|24404|
|arrayBuffer (1024)|30,808|15405|
|slice (0, 64)|77,970|38986|
|slice (0, 512)|30,456|15229|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:01:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4470.088206647722,"samples":2245},{"name":"new Blob (1024)","opsSec":557.5383849790798,"samples":279},{"name":"text (128)","opsSec":47151.50764395718,"samples":23576},{"name":"text (1024)","opsSec":30692.227854326975,"samples":15357},{"name":"arrayBuffer (128)","opsSec":48768.29909322058,"samples":24404},{"name":"arrayBuffer (1024)","opsSec":30808.325813958614,"samples":15405},{"name":"slice (0, 64)","opsSec":77970.65204336747,"samples":38986},{"name":"slice (0, 512)","opsSec":30456.330201240387,"samples":15229}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|393,102|196830|
|[True conditional] Using constructor name|310,599|155301|
|[True conditional] Check if property is valid then instanceof |312,744|156373|
|[False conditional] Using instanceof only|43,683,332|21863777|
|[False conditional] Using constructor name|101,473,851|50739576|
|[False conditional] Check if property is valid then instanceof |101,946,749|50984925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":393102.9448237727,"samples":196830},{"name":"[True conditional] Using constructor name","opsSec":310599.43693344644,"samples":155301},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":312744.5663789077,"samples":156373},{"name":"[False conditional] Using instanceof only","opsSec":43683332.48885488,"samples":21863777},{"name":"[False conditional] Using constructor name","opsSec":101473851.00602344,"samples":50739576},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":101946749.68209603,"samples":50984925}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,818|3410|
|crypto.verify('RSA-SHA256')|6,826|3419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:14:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6818.715313122716,"samples":3410},{"name":"crypto.verify('RSA-SHA256')","opsSec":6826.322714879537,"samples":3419}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,460,503|1253274|
|fromUnixToISOString(new Date())|1,971,584|1010689|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:19:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2460503.6358656283,"samples":1253274},{"name":"fromUnixToISOString(new Date())","opsSec":1971584.801710358,"samples":1010689}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,583|8792|
|Intl.DateTimeFormat().format(new Date())|17,278|8640|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,447|9225|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,980|8991|
|Reusing Intl.DateTimeFormat()|437,739|277579|
|Date.toLocaleDateString()|701,054|350552|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,116|10559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:25:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17583.083710341685,"samples":8792},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17278.167892189384,"samples":8640},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18447.572188814516,"samples":9225},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17980.277489416516,"samples":8991},{"name":"Reusing Intl.DateTimeFormat()","opsSec":437739.71660141676,"samples":277579},{"name":"Date.toLocaleDateString()","opsSec":701054.3625469143,"samples":350552},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21116.70119617623,"samples":10559}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|995,833|497918|
|Using brackets {}|998,615|499516|
|Using '' + |995,289|497855|
|Using date.toString()|1,085,970|542986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:31:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":995833.2913334477,"samples":497918},{"name":"Using brackets {}","opsSec":998615.1600571192,"samples":499516},{"name":"Using '' + ","opsSec":995289.7468667035,"samples":497855},{"name":"Using date.toString()","opsSec":1085970.368872506,"samples":542986}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,194,928|1597466|
|Using delete property (proto: null)|16,378,416|8189918|
|Using delete property (cached proto: null)|3,144,022|1572366|
|Using undefined assignment|75,813,771|37912086|
|Using undefined assignment (proto: null)|18,596,414|9300171|
|Using undefined property (cached proto: null)|75,405,328|37702677|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:37:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3194928.338612124,"samples":1597466},{"name":"Using delete property (proto: null)","opsSec":16378416.810183397,"samples":8189918},{"name":"Using delete property (cached proto: null)","opsSec":3144022.6141775628,"samples":1572366},{"name":"Using undefined assignment","opsSec":75813771.8667753,"samples":37912086},{"name":"Using undefined assignment (proto: null)","opsSec":18596414.102606077,"samples":9300171},{"name":"Using undefined property (cached proto: null)","opsSec":75405328.06056714,"samples":37702677}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|383,977|192353|
|NodeError|302,859|151431|
|NodeError Range|307,438|153928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:42:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":383977.1882580549,"samples":192353},{"name":"NodeError","opsSec":302859.8466664902,"samples":151431},{"name":"NodeError Range","opsSec":307438.9701048557,"samples":153928}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,820,186|910183|
|Function returning explicitly undefined|1,741,928|871051|
|Function returning implicitly undefined|1,798,806|899504|
|Function returning string|1,820,229|910195|
|Function returning integer|1,866,879|933501|
|Function returning float|1,850,453|925228|
|Function returning functions|1,785,912|893007|
|Function returning arrow functions|1,834,506|917254|
|Function returning empty object|1,839,034|919669|
|Function returning empty array|1,857,791|928896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:47:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1820186.4822879978,"samples":910183},{"name":"Function returning explicitly undefined","opsSec":1741928.4969539891,"samples":871051},{"name":"Function returning implicitly undefined","opsSec":1798806.6703622262,"samples":899504},{"name":"Function returning string","opsSec":1820229.1718312937,"samples":910195},{"name":"Function returning integer","opsSec":1866879.2900242668,"samples":933501},{"name":"Function returning float","opsSec":1850453.9052861794,"samples":925228},{"name":"Function returning functions","opsSec":1785912.8851842668,"samples":893007},{"name":"Function returning arrow functions","opsSec":1834506.8369226654,"samples":917254},{"name":"Function returning empty object","opsSec":1839034.4931033961,"samples":919669},{"name":"Function returning empty array","opsSec":1857791.3274795394,"samples":928896}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,693,232|45847832|
|using Array.includes (first item)|79,827,928|39913977|
|Using raw comparison|96,398,189|48202113|
|Using raw comparison (first item)|96,942,086|48475311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:54:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":91693232.47886112,"samples":45847832},{"name":"using Array.includes (first item)","opsSec":79827928.77437451,"samples":39913977},{"name":"Using raw comparison","opsSec":96398189.54537067,"samples":48202113},{"name":"Using raw comparison (first item)","opsSec":96942086.44317284,"samples":48475311}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,266,143|22635493|
|Using Object.getOwnPropertyNames()|39,338,384|19707338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:59:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":45266143.97111169,"samples":22635493},{"name":"Using Object.getOwnPropertyNames()","opsSec":39338384.00350804,"samples":19707338}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|22,791,817|11396134|
|Length = 10_000 - Array.at|21,500,197|10760935|
|Length = 1_000_000 - Array.at|21,569,255|10784633|
|Length = 100 - Array[length - 1]|102,248,277|51124148|
|Length = 10_000 - Array[length - 1]|102,554,218|51277122|
|Length = 1_000_000 - Array[length - 1]|93,022,425|46511961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:05:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":22791817.861597233,"samples":11396134},{"name":"Length = 10_000 - Array.at","opsSec":21500197.757659882,"samples":10760935},{"name":"Length = 1_000_000 - Array.at","opsSec":21569255.34478786,"samples":10784633},{"name":"Length = 100 - Array[length - 1]","opsSec":102248277.18631701,"samples":51124148},{"name":"Length = 10_000 - Array[length - 1]","opsSec":102554218.97677056,"samples":51277122},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":93022425.45521928,"samples":46511961}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|143,727,596|71864690|
|~ (small)|103,947,960|51973994|
|Math.floor (long)|88,623,470|44334533|
|~ (long)|106,453,619|53227464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:11:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":143727596.91543266,"samples":71864690},{"name":"~ (small)","opsSec":103947960.34984255,"samples":51973994},{"name":"Math.floor (long)","opsSec":88623470.64233005,"samples":44334533},{"name":"~ (long)","opsSec":106453619.47210944,"samples":53227464}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,320,533|22734647|
|Object.create({})|1,314,027|675839|
|Cached Empty.prototype|122,700,422|61398349|
|Empty.prototype|1,485,082|742549|
|Empty class|879,183|445734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:16:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":45320533.24718198,"samples":22734647},{"name":"Object.create({})","opsSec":1314027.3657375183,"samples":675839},{"name":"Cached Empty.prototype","opsSec":122700422.5858231,"samples":61398349},{"name":"Empty.prototype","opsSec":1485082.4036645966,"samples":742549},{"name":"Empty class","opsSec":879183.428434414,"samples":445734}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|146,120,880|73147531|
|Using optional chain (obj.field?.field2) (undefined)|94,744,439|47427377|
|Using and operator (obj.field && obj.field.field2) (Valid)|101,178,935|50707158|
|Using and operator (obj.field && obj.field.field2) (undefined)|102,154,215|51084103|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:22:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":146120880.94180742,"samples":73147531},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":94744439.25959247,"samples":47427377},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":101178935.95404884,"samples":50707158},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":102154215.16299972,"samples":51084103}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,144,581|66572319|
|Using parseInt(x, 10) - big number (10 len)|16,480,035|8240166|
|Using + - small number (2 len)|107,000,616|53528019|
|Using + - big number (10 len)|105,759,706|52897339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:28:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133144581.28040838,"samples":66572319},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16480035.491201442,"samples":8240166},{"name":"Using + - small number (2 len)","opsSec":107000616.81651865,"samples":53528019},{"name":"Using + - big number (10 len)","opsSec":105759706.43787219,"samples":52897339}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|691,880|345943|
|Using ? operator to avoid rejection|728,436|367195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:33:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":691880.7334038572,"samples":345943},{"name":"Using ? operator to avoid rejection","opsSec":728436.576727667,"samples":367195}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|107,241,947|53633191|
|Raw usage underscore usage|78,534,814|39277907|
|Manipulating private properties using #|75,832,567|38011300|
|Manipulating private properties using underscore(_)|77,467,943|38738180|
|Manipulating private properties using Symbol|77,371,716|38698828|
|Manipulating private properties using PrivateSymbol|35,012,587|17508431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:40:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":107241947.3512638,"samples":53633191},{"name":"Raw usage underscore usage","opsSec":78534814.10484762,"samples":39277907},{"name":"Manipulating private properties using #","opsSec":75832567.52906567,"samples":38011300},{"name":"Manipulating private properties using underscore(_)","opsSec":77467943.72765754,"samples":38738180},{"name":"Manipulating private properties using Symbol","opsSec":77371716.20368212,"samples":38698828},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35012587.52326481,"samples":17508431}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,657,039|1829967|
|Adding property in the object creation - small object|3,609,189|1805194|
|Adding property after the function creation - small class|181,176|90595|
|Adding property in the function creation - small class|190,718|95827|
|Adding property after the class creation - small class|160,567|80296|
|Adding property in the class creation - small class|161,757|80879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:45:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3657039.76752942,"samples":1829967},{"name":"Adding property in the object creation - small object","opsSec":3609189.431500072,"samples":1805194},{"name":"Adding property after the function creation - small class","opsSec":181176.9150408419,"samples":90595},{"name":"Adding property in the function creation - small class","opsSec":190718.69188587388,"samples":95827},{"name":"Adding property after the class creation - small class","opsSec":160567.1942952877,"samples":80296},{"name":"Adding property in the class creation - small class","opsSec":161757.04013372384,"samples":80879}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|160,623,577|80395746|
|Getter|55,686,436|27843923|
|Method|105,351,142|52676079|
|DefineProperty (getter)|105,024,548|52512284|
|DefineProperty (getter & enumerable=false)|56,011,742|28008360|
|DefineProperty (getter & configurable=false)|107,080,911|53545006|
|DefineProperty (getter & enumerable=false & configurable=false)|56,391,646|28195824|
|DefineProperty (writable)|107,016,559|53508291|
|DefineProperty (writable & enumerable=false)|107,237,730|53618876|
|DefineProperty (writable & enumerable=false & configurable=false)|107,039,933|53519979|
|DefineProperties (getter)|56,781,515|28408051|
|DefineProperties (getter & enumerable=false)|56,587,781|28338822|
|DefineProperties (getter & enumerable=false & configurable=false)|52,342,804|26171409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:51:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":160623577.07626596,"samples":80395746},{"name":"Getter","opsSec":55686436.79903036,"samples":27843923},{"name":"Method","opsSec":105351142.62568736,"samples":52676079},{"name":"DefineProperty (getter)","opsSec":105024548.25538492,"samples":52512284},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56011742.796535105,"samples":28008360},{"name":"DefineProperty (getter & configurable=false)","opsSec":107080911.4075013,"samples":53545006},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56391646.87216706,"samples":28195824},{"name":"DefineProperty (writable)","opsSec":107016559.31248942,"samples":53508291},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107237730.98140472,"samples":53618876},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":107039933.1667355,"samples":53519979},{"name":"DefineProperties (getter)","opsSec":56781515.129941024,"samples":28408051},{"name":"DefineProperties (getter & enumerable=false)","opsSec":56587781.358271874,"samples":28338822},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52342804.80961319,"samples":26171409}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,704,189|76852173|
|Setter|10,710,173|5355089|
|Method|92,236,362|46122659|
|DefineProperty (setter)|93,364,474|46683681|
|DefineProperty (setter & enumerable=false)|10,601,156|5300660|
|DefineProperty (setter & configurable=false)|10,777,638|5389065|
|DefineProperty (setter & enumerable=false & configurable=false)|10,584,531|5293518|
|DefineProperty (writable)|99,834,764|49917394|
|DefineProperty (writable & enumerable=false)|101,076,617|50538555|
|DefineProperty (writable & enumerable=false & configurable=false)|88,462,263|44231142|
|DefineProperties (setter)|90,232,422|45118459|
|DefineProperties (setter & enumerable=false)|10,438,612|5220349|
|DefineProperties (setter & enumerable=false & configurable=false)|10,843,888|5422321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:58:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":153704189.52913505,"samples":76852173},{"name":"Setter","opsSec":10710173.565988144,"samples":5355089},{"name":"Method","opsSec":92236362.40262888,"samples":46122659},{"name":"DefineProperty (setter)","opsSec":93364474.79698138,"samples":46683681},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10601156.148530567,"samples":5300660},{"name":"DefineProperty (setter & configurable=false)","opsSec":10777638.992322788,"samples":5389065},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10584531.08604224,"samples":5293518},{"name":"DefineProperty (writable)","opsSec":99834764.03965662,"samples":49917394},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101076617.35256702,"samples":50538555},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":88462263.65367937,"samples":44231142},{"name":"DefineProperties (setter)","opsSec":90232422.07933748,"samples":45118459},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10438612.219138047,"samples":5220349},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10843888.50156358,"samples":5422321}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,362,633|1681581|
|Using replaceAll()|2,932,382|1466282|
|Using replaceAll(//g)|2,987,155|1494113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:05:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3362633.864725206,"samples":1681581},{"name":"Using replaceAll()","opsSec":2932382.919489956,"samples":1466282},{"name":"Using replaceAll(//g)","opsSec":2987155.1467000796,"samples":1494113}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,332,950|10688119|
|{ ...object, __proto__: null }|19,373,945|9687589|
|{ ...object, newProp: true }|622,244|315277|
|structuredClone|253,817|126909|
|JSON.parse + JSON.stringify|196,414|98270|
|loop + object.keys starting with {}|1,279,716|640007|
|loop + object.keys starting with { __proto__: null }|738,902|369651|
|loop + object.keys starting with { randomProp: true }|517,742|258956|
|object.keys + reduce(FN, {})|1,291,894|645948|
|object.keys + reduce(FN, { __proto__: null })|752,591|376645|
|object.keys + reduce(FN, { newProp: true })|523,969|261986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:10:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":21332950.62722787,"samples":10688119},{"name":"{ ...object, __proto__: null }","opsSec":19373945.584573474,"samples":9687589},{"name":"{ ...object, newProp: true }","opsSec":622244.9896688447,"samples":315277},{"name":"structuredClone","opsSec":253817.73653718948,"samples":126909},{"name":"JSON.parse + JSON.stringify","opsSec":196414.9783308228,"samples":98270},{"name":"loop + object.keys starting with {}","opsSec":1279716.2023614133,"samples":640007},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":738902.4311213468,"samples":369651},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":517742.02115251945,"samples":258956},{"name":"object.keys + reduce(FN, {})","opsSec":1291894.0931643185,"samples":645948},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":752591.3874771983,"samples":376645},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":523969.2847911662,"samples":261986}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|264,556|132454|
|Sort using first char|1,281,164|640602|
|Sort using localeCompare|1,155,674|577838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:17:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":264556.0462764998,"samples":132454},{"name":"Sort using first char","opsSec":1281164.2864694481,"samples":640602},{"name":"Sort using localeCompare","opsSec":1155674.8766840198,"samples":577838}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,839|920|
|{...smallObject} - Total keys: 2|55,621,087|27810718|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,080|541|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,193|3097|
|{ ...bigObject, ...anotherBigObject }|1,138|570|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,387,106|6196040|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,017,208|14008794|
|{ ...smallObject, ...anotherSmallObject }|19,541,024|9771735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:22:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1839.3485910177938,"samples":920},{"name":"{...smallObject} - Total keys: 2","opsSec":55621087.367024384,"samples":27810718},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1080.3368344074718,"samples":541},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6193.4826707794755,"samples":3097},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1138.4712903515695,"samples":570},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12387106.675766533,"samples":6196040},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28017208.815095894,"samples":14008794},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19541024.089096814,"samples":9771735}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,246|1124|
|streams.web.Readable reading 1e3 * "some data"|616|309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:28:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2246.9058512205015,"samples":1124},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":616.923499339827,"samples":309}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,999|2500|
|streams.web.WritableStream writing 1e3 * "some data"|1,757|881|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:34:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4999.168098435076,"samples":2500},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1757.8285252519809,"samples":881}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,988,582|7494292|
|Using backtick (`)|14,378,235|7189118|
|Using array.join|5,679,598|2839800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:24:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14988582.847751334,"samples":7494292},{"name":"Using backtick (`)","opsSec":14378235.61713095,"samples":7189118},{"name":"Using array.join","opsSec":5679598.321819974,"samples":2839800}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,625,226|5812614|
|(short string) (true) String#slice and strict comparison|11,663,983|5831992|
|(long string) (true) String#endsWith|11,346,505|5673253|
|(long string) (true) String#slice and strict comparison|11,193,376|5596689|
|(short string) (false) String#endsWith|11,814,962|5907482|
|(short string) (false) String#slice and strict comparison|12,125,120|6062561|
|(long string) (false) String#endsWith|11,492,343|5746172|
|(long string) (false) String#slice and strict comparison|11,566,593|5783299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:37:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11625226.05731926,"samples":5812614},{"name":"(short string) (true) String#slice and strict comparison","opsSec":11663983.314244892,"samples":5831992},{"name":"(long string) (true) String#endsWith","opsSec":11346505.525403365,"samples":5673253},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11193376.79366014,"samples":5596689},{"name":"(short string) (false) String#endsWith","opsSec":11814962.3985006,"samples":5907482},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12125120.369287344,"samples":6062561},{"name":"(long string) (false) String#endsWith","opsSec":11492343.159423016,"samples":5746172},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11566593.970065638,"samples":5783299}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,283,220|4141612|
|Using indexof|8,431,745|4215873|
|Using RegExp.test|7,749,479|3874740|
|Using RegExp.text with cached regex pattern|7,597,411|3798706|
|Using new RegExp.test|3,077,329|1538665|
|Using new RegExp.test with cached regex pattern|3,413,078|1706540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8283220.61265962,"samples":4141612},{"name":"Using indexof","opsSec":8431745.944277415,"samples":4215873},{"name":"Using RegExp.test","opsSec":7749479.921302937,"samples":3874740},{"name":"Using RegExp.text with cached regex pattern","opsSec":7597411.697332379,"samples":3798706},{"name":"Using new RegExp.test","opsSec":3077329.3705606223,"samples":1538665},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3413078.892752222,"samples":1706540}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,892,074|6946038|
|(short string) (true) String#slice and strict comparison|12,263,112|6131560|
|(long string) (true) String#startsWith|12,771,889|6385945|
|(long string) (true) String#slice and strict comparison|11,605,111|5802556|
|(short string) (false) String#startsWith|14,539,218|7269610|
|(short string) (false) String#slice and strict comparison|12,413,866|6206934|
|(long string) (false) String#startsWith|13,947,271|6973636|
|(long string) (false) String#slice and strict comparison|11,964,876|5982439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:04:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13892074.796869239,"samples":6946038},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12263112.689792937,"samples":6131560},{"name":"(long string) (true) String#startsWith","opsSec":12771889.430193946,"samples":6385945},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11605111.795251304,"samples":5802556},{"name":"(short string) (false) String#startsWith","opsSec":14539218.37749889,"samples":7269610},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12413866.81547397,"samples":6206934},{"name":"(long string) (false) String#startsWith","opsSec":13947271.17688716,"samples":6973636},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11964876.903780496,"samples":5982439}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|13,179,517|6589759|
|Using this|13,705,658|6852830|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:20:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":13179517.330211522,"samples":6589759},{"name":"Using this","opsSec":13705658.174386049,"samples":6852830}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,692,812|2846407|
|Date.now()|8,583,583|4291792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:28:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5692812.713348257,"samples":2846407},{"name":"Date.now()","opsSec":8583583.802194351,"samples":4291792}]}-->

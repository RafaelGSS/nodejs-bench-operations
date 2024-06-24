## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,124,825|8062413|
|Using dot notation|16,166,815|8083408|
|Using define property (writable)|3,764,598|1882300|
|Using define property initialized (writable)|4,453,119|2226560|
|Using define property (getter)|2,279,041|1139521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:41:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16124825.322757857,"samples":8062413},{"name":"Using dot notation","opsSec":16166815.547314456,"samples":8083408},{"name":"Using define property (writable)","opsSec":3764598.509217102,"samples":1882300},{"name":"Using define property initialized (writable)","opsSec":4453119.162813039,"samples":2226560},{"name":"Using define property (getter)","opsSec":2279041.585216853,"samples":1139521}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.314ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|24.47ms
new Array(length)|1,000,000|15.948ms
array.push|100,000,000|2,054.201ms
new Array(length)|100,000,000|4,145.117ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.343ms
new Array(length)|10,000|0.119ms
array.push|1,000,000|16.207ms
new Array(length)|1,000,000|8.057ms
array.push|100,000,000|2,640.601ms
new Array(length)|100,000,000|4,154.497ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|252|127|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:51:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":252.76000390659502,"samples":127},{"name":"Array.from","opsSec":24.85776092815913,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,253|3127|
|new Blob (1024)|807|404|
|text (128)|6,327|3164|
|text (1024)|815|408|
|arrayBuffer (128)|6,403|3202|
|arrayBuffer (1024)|801|401|
|slice (0, 64)|207,873|115023|
|slice (0, 512)|30,257|15129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:55:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6253.941813325285,"samples":3127},{"name":"new Blob (1024)","opsSec":807.9455945595622,"samples":404},{"name":"text (128)","opsSec":6327.533749348144,"samples":3164},{"name":"text (1024)","opsSec":815.5248051134049,"samples":408},{"name":"arrayBuffer (128)","opsSec":6403.192890342423,"samples":3202},{"name":"arrayBuffer (1024)","opsSec":801.6742845482386,"samples":401},{"name":"slice (0, 64)","opsSec":207873.1227311121,"samples":115023},{"name":"slice (0, 512)","opsSec":30257.60205202036,"samples":15129}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|333,935|166968|
|[True conditional] Using constructor name|331,980|165991|
|[True conditional] Check if property is valid then instanceof |333,563|166782|
|[False conditional] Using instanceof only|16,222,882|8111442|
|[False conditional] Using constructor name|16,185,956|8092979|
|[False conditional] Check if property is valid then instanceof |16,203,278|8101640|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:01:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":333935.4363169539,"samples":166968},{"name":"[True conditional] Using constructor name","opsSec":331980.08447488095,"samples":165991},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":333563.46963409666,"samples":166782},{"name":"[False conditional] Using instanceof only","opsSec":16222882.89685712,"samples":8111442},{"name":"[False conditional] Using constructor name","opsSec":16185956.996449746,"samples":8092979},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16203278.217632603,"samples":8101640}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,319|3660|
|crypto.verify('RSA-SHA256')|6,984|3493|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7319.147129061659,"samples":3660},{"name":"crypto.verify('RSA-SHA256')","opsSec":6984.335227823792,"samples":3493}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,372,093|686047|
|fromUnixToISOString(new Date())|1,991,038|995520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1372093.3523721131,"samples":686047},{"name":"fromUnixToISOString(new Date())","opsSec":1991038.5624688843,"samples":995520}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,668|8335|
|Intl.DateTimeFormat().format(new Date())|13,910|6956|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,475|11238|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,642|8322|
|Reusing Intl.DateTimeFormat()|1,029,811|514906|
|Date.toLocaleDateString()|1,054,877|527439|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,309|11655|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:14:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16668.39216689163,"samples":8335},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13910.779941134631,"samples":6956},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22475.80077450254,"samples":11238},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16642.92623168629,"samples":8322},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1029811.7507857276,"samples":514906},{"name":"Date.toLocaleDateString()","opsSec":1054877.822780038,"samples":527439},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23309.92615415112,"samples":11655}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,071,588|535795|
|Using brackets {}|1,076,793|538397|
|Using '' + |1,076,586|538294|
|Using date.toString()|1,192,728|596365|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:18:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1071588.9198384392,"samples":535795},{"name":"Using brackets {}","opsSec":1076793.521903513,"samples":538397},{"name":"Using '' + ","opsSec":1076586.4992383795,"samples":538294},{"name":"Using date.toString()","opsSec":1192728.220449139,"samples":596365}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,281,510|1640756|
|Using delete property (proto: null)|8,318,553|4159277|
|Using delete property (cached proto: null)|3,299,243|1649622|
|Using undefined assignment|16,253,086|8126544|
|Using undefined assignment (proto: null)|8,556,692|4278347|
|Using undefined property (cached proto: null)|16,308,948|8154475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:24:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3281510.3198667755,"samples":1640756},{"name":"Using delete property (proto: null)","opsSec":8318553.750438037,"samples":4159277},{"name":"Using delete property (cached proto: null)","opsSec":3299243.940618342,"samples":1649622},{"name":"Using undefined assignment","opsSec":16253086.732237637,"samples":8126544},{"name":"Using undefined assignment (proto: null)","opsSec":8556692.254423356,"samples":4278347},{"name":"Using undefined property (cached proto: null)","opsSec":16308948.825819304,"samples":8154475}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|320,890|160446|
|NodeError|311,806|155904|
|NodeError Range|316,919|158460|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:29:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":320890.491814704,"samples":160446},{"name":"NodeError","opsSec":311806.1478714598,"samples":155904},{"name":"NodeError Range","opsSec":316919.07396248315,"samples":158460}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,671,887|835944|
|Function returning explicitly undefined|1,641,878|820940|
|Function returning implicitly undefined|1,666,371|833186|
|Function returning string|1,638,199|819100|
|Function returning integer|1,665,319|832660|
|Function returning float|1,661,276|830639|
|Function returning functions|1,630,798|815400|
|Function returning arrow functions|1,646,430|823216|
|Function returning empty object|1,666,666|833334|
|Function returning empty array|1,668,800|834401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:33:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1671887.0971809654,"samples":835944},{"name":"Function returning explicitly undefined","opsSec":1641878.1282586257,"samples":820940},{"name":"Function returning implicitly undefined","opsSec":1666371.003510089,"samples":833186},{"name":"Function returning string","opsSec":1638199.4921569843,"samples":819100},{"name":"Function returning integer","opsSec":1665319.5536939935,"samples":832660},{"name":"Function returning float","opsSec":1661276.8969115464,"samples":830639},{"name":"Function returning functions","opsSec":1630798.6366516557,"samples":815400},{"name":"Function returning arrow functions","opsSec":1646430.6927347884,"samples":823216},{"name":"Function returning empty object","opsSec":1666666.9499994782,"samples":833334},{"name":"Function returning empty array","opsSec":1668800.5414679786,"samples":834401}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,919,356|7459679|
|using Array.includes (first item)|15,408,727|7704364|
|Using raw comparison|16,107,640|8053821|
|Using raw comparison (first item)|16,152,719|8076360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:39:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14919356.985495195,"samples":7459679},{"name":"using Array.includes (first item)","opsSec":15408727.599347945,"samples":7704364},{"name":"Using raw comparison","opsSec":16107640.711389363,"samples":8053821},{"name":"Using raw comparison (first item)","opsSec":16152719.935322227,"samples":8076360}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,830,743|6915372|
|Using Object.getOwnPropertyNames()|14,129,133|7064567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:45:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13830743.778709713,"samples":6915372},{"name":"Using Object.getOwnPropertyNames()","opsSec":14129133.689167667,"samples":7064567}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,839,886|7919944|
|Length = 10_000 - Array.at|15,873,280|7936641|
|Length = 1_000_000 - Array.at|15,916,969|7958486|
|Length = 100 - Array[length - 1]|15,343,408|7671705|
|Length = 10_000 - Array[length - 1]|15,366,624|7683313|
|Length = 1_000_000 - Array[length - 1]|15,405,913|7702957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:54:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15839886.384299895,"samples":7919944},{"name":"Length = 10_000 - Array.at","opsSec":15873280.825353088,"samples":7936641},{"name":"Length = 1_000_000 - Array.at","opsSec":15916969.867121493,"samples":7958486},{"name":"Length = 100 - Array[length - 1]","opsSec":15343408.43494178,"samples":7671705},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15366624.770675976,"samples":7683313},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15405913.322218722,"samples":7702957}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,092,437|6546219|
|Object.create({})|1,804,951|902476|
|Cached Empty.prototype|16,029,520|8014761|
|Empty.prototype|2,520,674|1270328|
|Empty class|1,530,523|765262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:58:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13092437.293012245,"samples":6546219},{"name":"Object.create({})","opsSec":1804951.779794551,"samples":902476},{"name":"Cached Empty.prototype","opsSec":16029520.236770982,"samples":8014761},{"name":"Empty.prototype","opsSec":2520674.4873054917,"samples":1270328},{"name":"Empty class","opsSec":1530523.9602080784,"samples":765262}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,132,968|8066485|
|Using optional chain (obj.field?.field2) (undefined)|16,165,063|8082532|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,264,388|8132195|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,005,238|8002620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:04:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16132968.74161438,"samples":8066485},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16165063.999984326,"samples":8082532},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16264388.14582729,"samples":8132195},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16005238.431567969,"samples":8002620}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,110,175|8055088|
|Using parseInt(x, 10) - big number (10 len)|16,133,246|8066624|
|Using + - small number (2 len)|16,250,559|8125280|
|Using + - big number (10 len)|16,076,609|8038306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:11:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16110175.742247205,"samples":8055088},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16133246.612544432,"samples":8066624},{"name":"Using + - small number (2 len)","opsSec":16250559.057368174,"samples":8125280},{"name":"Using + - big number (10 len)","opsSec":16076609.81357506,"samples":8038306}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,039,067|519535|
|Using ? operator to avoid rejection|1,220,425|610213|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:15:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1039067.6039100855,"samples":519535},{"name":"Using ? operator to avoid rejection","opsSec":1220425.1847562876,"samples":610213}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,883,153|7941577|
|Raw usage underscore usage|15,947,265|7973634|
|Manipulating private properties using #|15,903,738|7951870|
|Manipulating private properties using underscore(_)|15,942,461|7971231|
|Manipulating private properties using Symbol|15,992,406|7996204|
|Manipulating private properties using PrivateSymbol|11,980,593|5990297|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:22:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15883153.80940986,"samples":7941577},{"name":"Raw usage underscore usage","opsSec":15947265.990669187,"samples":7973634},{"name":"Manipulating private properties using #","opsSec":15903738.695909128,"samples":7951870},{"name":"Manipulating private properties using underscore(_)","opsSec":15942461.36230081,"samples":7971231},{"name":"Manipulating private properties using Symbol","opsSec":15992406.304808313,"samples":7996204},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11980593.76038203,"samples":5990297}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,795,741|1897871|
|Adding property in the object creation - small object|3,824,856|1912429|
|Adding property after the function creation - small class|298,871|149436|
|Adding property in the function creation - small class|319,395|159698|
|Adding property after the class creation - small class|319,139|159570|
|Adding property in the class creation - small class|322,384|161193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:43:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3795741.4913694356,"samples":1897871},{"name":"Adding property in the object creation - small object","opsSec":3824856.049328658,"samples":1912429},{"name":"Adding property after the function creation - small class","opsSec":298871.0818680092,"samples":149436},{"name":"Adding property in the function creation - small class","opsSec":319395.1734053036,"samples":159698},{"name":"Adding property after the class creation - small class","opsSec":319139.41406011087,"samples":159570},{"name":"Adding property in the class creation - small class","opsSec":322384.3706693498,"samples":161193}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,148,830|8074416|
|Getter|13,737,854|6868928|
|Method|15,807,369|7903685|
|DefineProperty (getter)|16,070,440|8035221|
|DefineProperty (getter & enumerable=false)|13,881,010|6940506|
|DefineProperty (getter & configurable=false)|16,199,903|8099952|
|DefineProperty (getter & enumerable=false & configurable=false)|13,778,043|6889022|
|DefineProperty (writable)|16,101,368|8050685|
|DefineProperty (writable & enumerable=false)|16,123,237|8061619|
|DefineProperty (writable & enumerable=false & configurable=false)|16,088,724|8044363|
|DefineProperties (getter)|13,585,853|6792927|
|DefineProperties (getter & enumerable=false)|13,950,774|6975388|
|DefineProperties (getter & enumerable=false & configurable=false)|13,867,364|6933683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:45:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16148830.417420192,"samples":8074416},{"name":"Getter","opsSec":13737854.571237503,"samples":6868928},{"name":"Method","opsSec":15807369.399282208,"samples":7903685},{"name":"DefineProperty (getter)","opsSec":16070440.553615369,"samples":8035221},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13881010.278766667,"samples":6940506},{"name":"DefineProperty (getter & configurable=false)","opsSec":16199903.708365565,"samples":8099952},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13778043.200851569,"samples":6889022},{"name":"DefineProperty (writable)","opsSec":16101368.422042398,"samples":8050685},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16123237.677295819,"samples":8061619},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16088724.712617362,"samples":8044363},{"name":"DefineProperties (getter)","opsSec":13585853.184632447,"samples":6792927},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13950774.772445902,"samples":6975388},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13867364.363894021,"samples":6933683}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,844,034|7922018|
|Setter|6,208,927|3104464|
|Method|15,750,292|7875147|
|DefineProperty (setter)|15,813,620|7906811|
|DefineProperty (setter & enumerable=false)|6,252,159|3126080|
|DefineProperty (setter & configurable=false)|6,231,594|3115798|
|DefineProperty (setter & enumerable=false & configurable=false)|6,250,017|3125009|
|DefineProperty (writable)|15,797,851|7898926|
|DefineProperty (writable & enumerable=false)|15,842,696|7921349|
|DefineProperty (writable & enumerable=false & configurable=false)|15,824,713|7912357|
|DefineProperties (setter)|15,856,251|7928126|
|DefineProperties (setter & enumerable=false)|6,230,135|3115068|
|DefineProperties (setter & enumerable=false & configurable=false)|6,194,791|3097396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:46:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15844034.985969152,"samples":7922018},{"name":"Setter","opsSec":6208927.416374483,"samples":3104464},{"name":"Method","opsSec":15750292.708466679,"samples":7875147},{"name":"DefineProperty (setter)","opsSec":15813620.924722198,"samples":7906811},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6252159.624878574,"samples":3126080},{"name":"DefineProperty (setter & configurable=false)","opsSec":6231594.267646586,"samples":3115798},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6250017.200019902,"samples":3125009},{"name":"DefineProperty (writable)","opsSec":15797851.90528619,"samples":7898926},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15842696.63757662,"samples":7921349},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15824713.715257993,"samples":7912357},{"name":"DefineProperties (setter)","opsSec":15856251.904928794,"samples":7928126},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6230135.825499838,"samples":3115068},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6194791.430171846,"samples":3097396}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,784,032|1392017|
|Using replaceAll()|2,651,619|1325810|
|Using replaceAll(//g)|2,634,673|1317337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:48:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2784032.6079838616,"samples":1392017},{"name":"Using replaceAll()","opsSec":2651619.95227191,"samples":1325810},{"name":"Using replaceAll(//g)","opsSec":2634673.34660118,"samples":1317337}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,141,608|5070805|
|{ ...object, __proto__: null }|2,231,713|1115857|
|{ ...object, newProp: true }|9,686,499|4843250|
|structuredClone|316,180|158091|
|JSON.parse + JSON.stringify|289,520|144761|
|loop + object.keys starting with {}|1,480,683|740342|
|loop + object.keys starting with { __proto__: null }|905,915|452958|
|loop + object.keys starting with { randomProp: true }|679,601|339801|
|object.keys + reduce(FN, {})|1,557,119|778560|
|object.keys + reduce(FN, { __proto__: null })|893,034|446518|
|object.keys + reduce(FN, { newProp: true })|708,247|354124|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:49:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10141608.316495258,"samples":5070805},{"name":"{ ...object, __proto__: null }","opsSec":2231713.263536854,"samples":1115857},{"name":"{ ...object, newProp: true }","opsSec":9686499.612506548,"samples":4843250},{"name":"structuredClone","opsSec":316180.1573019531,"samples":158091},{"name":"JSON.parse + JSON.stringify","opsSec":289520.51765518717,"samples":144761},{"name":"loop + object.keys starting with {}","opsSec":1480683.0790157826,"samples":740342},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":905915.0433538057,"samples":452958},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":679601.8382558771,"samples":339801},{"name":"object.keys + reduce(FN, {})","opsSec":1557119.06884251,"samples":778560},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":893034.503273458,"samples":446518},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":708247.3781595603,"samples":354124}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|286,047|143024|
|Sort using first char|1,357,229|678615|
|Sort using localeCompare|1,275,451|637726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:49:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":286047.55090534955,"samples":143024},{"name":"Sort using first char","opsSec":1357229.1422313335,"samples":678615},{"name":"Sort using localeCompare","opsSec":1275451.7780719367,"samples":637726}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,270|1136|
|{...smallObject} - Total keys: 2|12,360,712|6180357|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,547|1274|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,782|3392|
|{ ...bigObject, ...anotherBigObject }|1,391|696|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,230,293|3615147|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,020,096|5510049|
|{ ...smallObject, ...anotherSmallObject }|9,214,927|4607464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:50:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2270.738404991072,"samples":1136},{"name":"{...smallObject} - Total keys: 2","opsSec":12360712.739217024,"samples":6180357},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2547.0122075376576,"samples":1274},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6782.770297311085,"samples":3392},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1391.042795631454,"samples":696},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7230293.595091138,"samples":3615147},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11020096.743700128,"samples":5510049},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9214927.373365216,"samples":4607464}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,543|3272|
|streams.web.WritableStream writing 1e3 * "some data"|2,949|1475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:52:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6543.154271137815,"samples":3272},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2949.5921245018085,"samples":1475}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,953,807|7976904|
|Using backtick (`)|16,157,488|8078745|
|Using array.join|6,302,575|3151288|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:53:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15953807.808535682,"samples":7976904},{"name":"Using backtick (`)","opsSec":16157488.675021762,"samples":8078745},{"name":"Using array.join","opsSec":6302575.987399705,"samples":3151288}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,787,819|7893910|
|(short string) (true) String#slice and strict comparison|16,021,613|8010808|
|(long string) (true) String#endsWith|14,068,126|7034064|
|(long string) (true) String#slice and strict comparison|15,902,627|7951314|
|(short string) (false) String#endsWith|15,785,598|7892800|
|(short string) (false) String#slice and strict comparison|16,078,532|8039267|
|(long string) (false) String#endsWith|15,477,755|7738878|
|(long string) (false) String#slice and strict comparison|16,066,931|8033466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:54:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15787819.242161835,"samples":7893910},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16021613.564738978,"samples":8010808},{"name":"(long string) (true) String#endsWith","opsSec":14068126.424351444,"samples":7034064},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15902627.554754624,"samples":7951314},{"name":"(short string) (false) String#endsWith","opsSec":15785598.326631486,"samples":7892800},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16078532.102753043,"samples":8039267},{"name":"(long string) (false) String#endsWith","opsSec":15477755.75239265,"samples":7738878},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16066931.518093362,"samples":8033466}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,053,499|8026750|
|Using indexof|16,063,267|8031634|
|Using RegExp.test|8,461,905|4230953|
|Using RegExp.text with cached regex pattern|8,655,657|4327829|
|Using new RegExp.test|3,785,655|1892828|
|Using new RegExp.test with cached regex pattern|4,037,602|2018802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:56:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16053499.775249373,"samples":8026750},{"name":"Using indexof","opsSec":16063267.775119228,"samples":8031634},{"name":"Using RegExp.test","opsSec":8461905.526139349,"samples":4230953},{"name":"Using RegExp.text with cached regex pattern","opsSec":8655657.999996599,"samples":4327829},{"name":"Using new RegExp.test","opsSec":3785655.7804319593,"samples":1892828},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4037602.457630521,"samples":2018802}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,723,780|7861891|
|(short string) (true) String#slice and strict comparison|15,934,876|7967439|
|(long string) (true) String#startsWith|14,820,015|7410008|
|(long string) (true) String#slice and strict comparison|15,965,733|7982867|
|(short string) (false) String#startsWith|15,906,738|7953370|
|(short string) (false) String#slice and strict comparison|16,084,382|8042192|
|(long string) (false) String#startsWith|15,580,042|7790022|
|(long string) (false) String#slice and strict comparison|16,082,983|8041492|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:58:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15723780.710649587,"samples":7861891},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15934876.183483962,"samples":7967439},{"name":"(long string) (true) String#startsWith","opsSec":14820015.288664365,"samples":7410008},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15965733.233607547,"samples":7982867},{"name":"(short string) (false) String#startsWith","opsSec":15906738.69575601,"samples":7953370},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16084382.552336736,"samples":8042192},{"name":"(long string) (false) String#startsWith","opsSec":15580042.84707576,"samples":7790022},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16082983.967651822,"samples":8041492}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,726,781|7863391|
|Using this|15,824,963|7912483|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:59:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15726781.716910088,"samples":7863391},{"name":"Using this","opsSec":15824963.847839016,"samples":7912483}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,583,773|3291887|
|Date.now()|9,553,465|4776733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 20:00:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6583773.446963625,"samples":3291887},{"name":"Date.now()","opsSec":9553465.465004476,"samples":4776733}]}-->

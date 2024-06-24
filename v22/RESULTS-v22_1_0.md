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
|Adding property after object creation - small object|3,927,310|1963656|
|Adding property in the object creation - small object|3,997,983|1998992|
|Adding property after the function creation - small class|290,457|145229|
|Adding property in the function creation - small class|317,438|158720|
|Adding property after the class creation - small class|311,361|155681|
|Adding property in the class creation - small class|309,799|154900|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:29:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3927310.955335246,"samples":1963656},{"name":"Adding property in the object creation - small object","opsSec":3997983.5202425676,"samples":1998992},{"name":"Adding property after the function creation - small class","opsSec":290457.5480480787,"samples":145229},{"name":"Adding property in the function creation - small class","opsSec":317438.3029748479,"samples":158720},{"name":"Adding property after the class creation - small class","opsSec":311361.0005312849,"samples":155681},{"name":"Adding property in the class creation - small class","opsSec":309799.79739103635,"samples":154900}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,157,219|8078610|
|Getter|13,995,165|6997583|
|Method|15,982,193|7991097|
|DefineProperty (getter)|16,036,478|8018240|
|DefineProperty (getter & enumerable=false)|13,870,138|6935070|
|DefineProperty (getter & configurable=false)|16,013,530|8006766|
|DefineProperty (getter & enumerable=false & configurable=false)|13,884,371|6942186|
|DefineProperty (writable)|16,070,589|8035295|
|DefineProperty (writable & enumerable=false)|16,065,461|8032731|
|DefineProperty (writable & enumerable=false & configurable=false)|16,097,730|8048866|
|DefineProperties (getter)|13,962,143|6981072|
|DefineProperties (getter & enumerable=false)|14,003,604|7001803|
|DefineProperties (getter & enumerable=false & configurable=false)|13,991,465|6995733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:40:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16157219.676880302,"samples":8078610},{"name":"Getter","opsSec":13995165.356243458,"samples":6997583},{"name":"Method","opsSec":15982193.104989672,"samples":7991097},{"name":"DefineProperty (getter)","opsSec":16036478.107823057,"samples":8018240},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13870138.141382998,"samples":6935070},{"name":"DefineProperty (getter & configurable=false)","opsSec":16013530.366640672,"samples":8006766},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13884371.278002348,"samples":6942186},{"name":"DefineProperty (writable)","opsSec":16070589.26075054,"samples":8035295},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16065461.004010279,"samples":8032731},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16097730.422881255,"samples":8048866},{"name":"DefineProperties (getter)","opsSec":13962143.720461817,"samples":6981072},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14003604.515445225,"samples":7001803},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13991465.216528788,"samples":6995733}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,763,475|7881738|
|Setter|6,675,723|3337862|
|Method|15,880,825|7940413|
|DefineProperty (setter)|15,589,384|7794693|
|DefineProperty (setter & enumerable=false)|6,274,623|3137312|
|DefineProperty (setter & configurable=false)|6,152,091|3076046|
|DefineProperty (setter & enumerable=false & configurable=false)|6,522,526|3261307|
|DefineProperty (writable)|15,958,994|7979498|
|DefineProperty (writable & enumerable=false)|15,951,910|7975956|
|DefineProperty (writable & enumerable=false & configurable=false)|15,926,898|7963450|
|DefineProperties (setter)|15,940,209|7970105|
|DefineProperties (setter & enumerable=false)|6,569,403|3284702|
|DefineProperties (setter & enumerable=false & configurable=false)|6,573,138|3286570|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:50:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15763475.873893138,"samples":7881738},{"name":"Setter","opsSec":6675723.41255155,"samples":3337862},{"name":"Method","opsSec":15880825.5871772,"samples":7940413},{"name":"DefineProperty (setter)","opsSec":15589384.752882544,"samples":7794693},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6274623.648618446,"samples":3137312},{"name":"DefineProperty (setter & configurable=false)","opsSec":6152091.212526955,"samples":3076046},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6522526.846001139,"samples":3261307},{"name":"DefineProperty (writable)","opsSec":15958994.531819731,"samples":7979498},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15951910.659922056,"samples":7975956},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15926898.566514213,"samples":7963450},{"name":"DefineProperties (setter)","opsSec":15940209.553654611,"samples":7970105},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6569403.434992875,"samples":3284702},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6573138.80358369,"samples":3286570}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,891,129|1445565|
|Using replaceAll()|2,769,908|1384955|
|Using replaceAll(//g)|2,717,705|1358853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:56:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2891129.8149671317,"samples":1445565},{"name":"Using replaceAll()","opsSec":2769908.055525338,"samples":1384955},{"name":"Using replaceAll(//g)","opsSec":2717705.298832606,"samples":1358853}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,935,241|5467621|
|{ ...object, __proto__: null }|2,167,806|1083904|
|{ ...object, newProp: true }|10,437,227|5218614|
|structuredClone|310,125|155063|
|JSON.parse + JSON.stringify|287,744|143873|
|loop + object.keys starting with {}|1,492,585|746293|
|loop + object.keys starting with { __proto__: null }|900,342|450172|
|loop + object.keys starting with { randomProp: true }|671,675|335838|
|object.keys + reduce(FN, {})|1,555,738|777984|
|object.keys + reduce(FN, { __proto__: null })|835,302|417652|
|object.keys + reduce(FN, { newProp: true })|695,883|347942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:02:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10935241.103313657,"samples":5467621},{"name":"{ ...object, __proto__: null }","opsSec":2167806.2310695243,"samples":1083904},{"name":"{ ...object, newProp: true }","opsSec":10437227.833014227,"samples":5218614},{"name":"structuredClone","opsSec":310125.26376247953,"samples":155063},{"name":"JSON.parse + JSON.stringify","opsSec":287744.4571140085,"samples":143873},{"name":"loop + object.keys starting with {}","opsSec":1492585.922386543,"samples":746293},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":900342.7467221317,"samples":450172},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":671675.3901193896,"samples":335838},{"name":"object.keys + reduce(FN, {})","opsSec":1555738.4134590856,"samples":777984},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":835302.3861958878,"samples":417652},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":695883.0953524014,"samples":347942}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|320,931|160466|
|Sort using first char|1,337,129|668565|
|Sort using localeCompare|1,281,762|640882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:07:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":320931.6257937229,"samples":160466},{"name":"Sort using first char","opsSec":1337129.6256037073,"samples":668565},{"name":"Sort using localeCompare","opsSec":1281762.5182829576,"samples":640882}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,104|1053|
|{...smallObject} - Total keys: 2|12,270,631|6135316|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,494|1248|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,627|3314|
|{ ...bigObject, ...anotherBigObject }|1,309|655|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,159,753|3579877|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,920,910|5460456|
|{ ...smallObject, ...anotherSmallObject }|8,575,879|4287940|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:13:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2104.398611579761,"samples":1053},{"name":"{...smallObject} - Total keys: 2","opsSec":12270631.803681476,"samples":6135316},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2494.845919205633,"samples":1248},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6627.483281638603,"samples":3314},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1309.0592262601926,"samples":655},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7159753.828151016,"samples":3579877},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10920910.842371933,"samples":5460456},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8575879.914240735,"samples":4287940}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,213|1107|
|streams.web.Readable reading 1e3 * "some data"|2,123|1062|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:17:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2213.2024724890325,"samples":1107},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2123.8665574642055,"samples":1062}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,674|3338|
|streams.web.WritableStream writing 1e3 * "some data"|2,917|1469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6674.6958845686295,"samples":3338},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2917.9904466025805,"samples":1469}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,798,349|7899175|
|Using backtick (`)|16,062,730|8031366|
|Using array.join|6,439,825|3219913|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:28:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15798349.589235602,"samples":7899175},{"name":"Using backtick (`)","opsSec":16062730.522215992,"samples":8031366},{"name":"Using array.join","opsSec":6439825.793920866,"samples":3219913}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,839,813|7919907|
|(short string) (true) String#slice and strict comparison|16,156,356|8078179|
|(long string) (true) String#endsWith|14,195,962|7097982|
|(long string) (true) String#slice and strict comparison|16,095,015|8047508|
|(short string) (false) String#endsWith|15,981,334|7990668|
|(short string) (false) String#slice and strict comparison|16,174,615|8087308|
|(long string) (false) String#endsWith|15,647,256|7823629|
|(long string) (false) String#slice and strict comparison|16,156,313|8078157|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15839813.144665778,"samples":7919907},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16156356.869087815,"samples":8078179},{"name":"(long string) (true) String#endsWith","opsSec":14195962.126142437,"samples":7097982},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16095015.291887712,"samples":8047508},{"name":"(short string) (false) String#endsWith","opsSec":15981334.241903102,"samples":7990668},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16174615.67654759,"samples":8087308},{"name":"(long string) (false) String#endsWith","opsSec":15647256.56039214,"samples":7823629},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16156313.418372875,"samples":8078157}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,181,099|8090550|
|Using indexof|16,051,188|8025595|
|Using RegExp.test|8,496,060|4248031|
|Using RegExp.text with cached regex pattern|8,416,283|4208142|
|Using new RegExp.test|3,754,388|1877195|
|Using new RegExp.test with cached regex pattern|4,001,365|2000683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:44:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16181099.805818621,"samples":8090550},{"name":"Using indexof","opsSec":16051188.42700706,"samples":8025595},{"name":"Using RegExp.test","opsSec":8496060.028961439,"samples":4248031},{"name":"Using RegExp.text with cached regex pattern","opsSec":8416283.51187719,"samples":4208142},{"name":"Using new RegExp.test","opsSec":3754388.115294684,"samples":1877195},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4001365.91197963,"samples":2000683}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,577,807|7788904|
|(short string) (true) String#slice and strict comparison|16,069,674|8034839|
|(long string) (true) String#startsWith|14,487,029|7243515|
|(long string) (true) String#slice and strict comparison|16,060,720|8030361|
|(short string) (false) String#startsWith|15,943,059|7971530|
|(short string) (false) String#slice and strict comparison|16,145,025|8072513|
|(long string) (false) String#startsWith|15,633,809|7816905|
|(long string) (false) String#slice and strict comparison|15,927,858|7963930|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:53:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15577807.127607184,"samples":7788904},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16069674.528960586,"samples":8034839},{"name":"(long string) (true) String#startsWith","opsSec":14487029.507463336,"samples":7243515},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16060720.136948355,"samples":8030361},{"name":"(short string) (false) String#startsWith","opsSec":15943059.713073663,"samples":7971530},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16145025.612430213,"samples":8072513},{"name":"(long string) (false) String#startsWith","opsSec":15633809.562184934,"samples":7816905},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15927858.980587821,"samples":7963930}]}-->

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

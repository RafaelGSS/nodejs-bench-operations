## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,377,166|9688584|
|Using dot notation|19,496,891|9748446|
|Using define property (writable)|3,298,636|1649319|
|Using define property initialized (writable)|4,136,324|2068163|
|Using define property (getter)|1,854,986|927494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:18:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":19377166.139760967,"samples":9688584},{"name":"Using dot notation","opsSec":19496891.298288573,"samples":9748446},{"name":"Using define property (writable)","opsSec":3298636.7399204588,"samples":1649319},{"name":"Using define property initialized (writable)","opsSec":4136324.5770968515,"samples":2068163},{"name":"Using define property (getter)","opsSec":1854986.7757120926,"samples":927494}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.096ms
new Array(length)|100|0.009ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.28ms
new Array(length)|10,000|0.374ms
array.push|1,000,000|27.507ms
new Array(length)|1,000,000|12.605ms
array.push|100,000,000|1,884.923ms
new Array(length)|100,000,000|4,762.307ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|29.347ms
new Array(length)|1,000,000|4.814ms
array.push|100,000,000|2,593.39ms
new Array(length)|100,000,000|4,250.42ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|137|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:32:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":273.40622892869817,"samples":137},{"name":"Array.from","opsSec":23.129795342655715,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|671|336|
|new Blob (1024)|523|262|
|text (128)|4,411|2206|
|text (1024)|550|276|
|arrayBuffer (128)|4,389|2195|
|arrayBuffer (1024)|551|276|
|slice (0, 64)|70,406|35204|
|slice (0, 512)|28,637|14319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:12:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":671.8520944488353,"samples":336},{"name":"new Blob (1024)","opsSec":523.5462675801184,"samples":262},{"name":"text (128)","opsSec":4411.760326708791,"samples":2206},{"name":"text (1024)","opsSec":550.9879937400176,"samples":276},{"name":"arrayBuffer (128)","opsSec":4389.314590969425,"samples":2195},{"name":"arrayBuffer (1024)","opsSec":551.3897824416673,"samples":276},{"name":"slice (0, 64)","opsSec":70406.96994606289,"samples":35204},{"name":"slice (0, 512)","opsSec":28637.339393862818,"samples":14319}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|296,689|148345|
|[True conditional] Using constructor name|295,579|147790|
|[True conditional] Check if property is valid then instanceof |299,578|149790|
|[False conditional] Using instanceof only|17,647,723|8823862|
|[False conditional] Using constructor name|18,177,891|9088946|
|[False conditional] Check if property is valid then instanceof |17,916,510|8958256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:20:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":296689.605996439,"samples":148345},{"name":"[True conditional] Using constructor name","opsSec":295579.8090555475,"samples":147790},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":299578.58778680675,"samples":149790},{"name":"[False conditional] Using instanceof only","opsSec":17647723.57650829,"samples":8823862},{"name":"[False conditional] Using constructor name","opsSec":18177891.52739397,"samples":9088946},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17916510.24437903,"samples":8958256}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,181|3591|
|crypto.verify('RSA-SHA256')|7,093|3547|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:28:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7181.318579042726,"samples":3591},{"name":"crypto.verify('RSA-SHA256')","opsSec":7093.324289927921,"samples":3547}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,300,289|650145|
|fromUnixToISOString(new Date())|1,873,805|936903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:33:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1300289.3732611141,"samples":650145},{"name":"fromUnixToISOString(new Date())","opsSec":1873805.3479156203,"samples":936903}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,994|9498|
|Intl.DateTimeFormat().format(new Date())|21,071|10536|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,843|10922|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,165|10583|
|Reusing Intl.DateTimeFormat()|893,643|446822|
|Date.toLocaleDateString()|893,671|446836|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,856|10929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:39:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18994.460840849213,"samples":9498},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21071.504145366616,"samples":10536},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21843.524990702168,"samples":10922},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21165.516833579775,"samples":10583},{"name":"Reusing Intl.DateTimeFormat()","opsSec":893643.1796370714,"samples":446822},{"name":"Date.toLocaleDateString()","opsSec":893671.2886379596,"samples":446836},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21856.225405631983,"samples":10929}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|972,544|486273|
|Using brackets {}|949,753|474877|
|Using '' + |969,032|484517|
|Using date.toString()|1,048,806|524404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":972544.8504522928,"samples":486273},{"name":"Using brackets {}","opsSec":949753.084437841,"samples":474877},{"name":"Using '' + ","opsSec":969032.4224152304,"samples":484517},{"name":"Using date.toString()","opsSec":1048806.4288875693,"samples":524404}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,758,946|1379474|
|Using delete property (proto: null)|8,091,845|4045923|
|Using delete property (cached proto: null)|2,783,988|1391995|
|Using undefined assignment|16,941,417|8470709|
|Using undefined assignment (proto: null)|8,312,680|4156341|
|Using undefined property (cached proto: null)|17,113,779|8556890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:51:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2758946.9957420505,"samples":1379474},{"name":"Using delete property (proto: null)","opsSec":8091845.935281313,"samples":4045923},{"name":"Using delete property (cached proto: null)","opsSec":2783988.2126793475,"samples":1391995},{"name":"Using undefined assignment","opsSec":16941417.898372784,"samples":8470709},{"name":"Using undefined assignment (proto: null)","opsSec":8312680.852805562,"samples":4156341},{"name":"Using undefined property (cached proto: null)","opsSec":17113779.144335035,"samples":8556890}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|288,422|144212|
|NodeError|289,916|144959|
|NodeError Range|288,469|144235|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:01:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":288422.12871720345,"samples":144212},{"name":"NodeError","opsSec":289916.3318213089,"samples":144959},{"name":"NodeError Range","opsSec":288469.580565123,"samples":144235}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,426,875|713438|
|Function returning explicitly undefined|1,422,745|711373|
|Function returning implicitly undefined|1,488,348|744175|
|Function returning string|1,447,449|723725|
|Function returning integer|1,441,403|720702|
|Function returning float|1,411,056|705529|
|Function returning functions|1,410,660|705331|
|Function returning arrow functions|1,473,716|736859|
|Function returning empty object|1,443,726|721864|
|Function returning empty array|1,474,395|737198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:11:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1426875.8544603162,"samples":713438},{"name":"Function returning explicitly undefined","opsSec":1422745.8378104288,"samples":711373},{"name":"Function returning implicitly undefined","opsSec":1488348.5741640036,"samples":744175},{"name":"Function returning string","opsSec":1447449.976837912,"samples":723725},{"name":"Function returning integer","opsSec":1441403.5906374243,"samples":720702},{"name":"Function returning float","opsSec":1411056.1966696214,"samples":705529},{"name":"Function returning functions","opsSec":1410660.2197494332,"samples":705331},{"name":"Function returning arrow functions","opsSec":1473716.3553379632,"samples":736859},{"name":"Function returning empty object","opsSec":1443726.6746562792,"samples":721864},{"name":"Function returning empty array","opsSec":1474395.5340900274,"samples":737198}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,954,720|7977361|
|using Array.includes (first item)|17,231,057|8615529|
|Using raw comparison|18,880,653|9440327|
|Using raw comparison (first item)|18,878,635|9439318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:20:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":15954720.340621807,"samples":7977361},{"name":"using Array.includes (first item)","opsSec":17231057.34520117,"samples":8615529},{"name":"Using raw comparison","opsSec":18880653.39602316,"samples":9440327},{"name":"Using raw comparison (first item)","opsSec":18878635.093716007,"samples":9439318}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,653,719|8326860|
|Using Object.getOwnPropertyNames()|16,030,505|8015253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:30:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":16653719.100677721,"samples":8326860},{"name":"Using Object.getOwnPropertyNames()","opsSec":16030505.64729773,"samples":8015253}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,568,697|8284349|
|Length = 10_000 - Array.at|16,822,890|8411446|
|Length = 1_000_000 - Array.at|17,909,527|8954765|
|Length = 100 - Array[length - 1]|17,589,548|8794775|
|Length = 10_000 - Array[length - 1]|16,687,683|8343842|
|Length = 1_000_000 - Array[length - 1]|17,788,731|8894366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:41:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16568697.63590058,"samples":8284349},{"name":"Length = 10_000 - Array.at","opsSec":16822890.284155432,"samples":8411446},{"name":"Length = 1_000_000 - Array.at","opsSec":17909527.600185037,"samples":8954765},{"name":"Length = 100 - Array[length - 1]","opsSec":17589548.276276156,"samples":8794775},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16687683.3660973,"samples":8343842},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":17788731.644096594,"samples":8894366}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|17,809,573|8904787|
|~ (small)|18,756,333|9378167|
|Math.floor (long)|17,497,723|8748862|
|~ (long)|18,597,144|9298573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:53:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":17809573.430109397,"samples":8904787},{"name":"~ (small)","opsSec":18756333.850072376,"samples":9378167},{"name":"Math.floor (long)","opsSec":17497723.160209835,"samples":8748862},{"name":"~ (long)","opsSec":18597144.51243821,"samples":9298573}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,630,893|6815447|
|Object.create({})|1,832,227|918458|
|Cached Empty.prototype|17,432,982|8716492|
|Empty.prototype|1,784,517|892259|
|Empty class|1,196,529|598265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:04:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":13630893.209414372,"samples":6815447},{"name":"Object.create({})","opsSec":1832227.918733083,"samples":918458},{"name":"Cached Empty.prototype","opsSec":17432982.849400353,"samples":8716492},{"name":"Empty.prototype","opsSec":1784517.5895597767,"samples":892259},{"name":"Empty class","opsSec":1196529.3155776346,"samples":598265}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,192,831|9596416|
|Using optional chain (obj.field?.field2) (undefined)|19,023,732|9511867|
|Using and operator (obj.field && obj.field.field2) (Valid)|18,806,032|9403017|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,581,893|9290947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:13:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19192831.34736922,"samples":9596416},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19023732.36370447,"samples":9511867},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":18806032.38244203,"samples":9403017},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18581893.702816688,"samples":9290947}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|18,398,975|9199488|
|Using parseInt(x, 10) - big number (10 len)|18,340,664|9170333|
|Using + - small number (2 len)|17,917,063|8958532|
|Using + - big number (10 len)|18,567,670|9283836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:23:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":18398975.04338256,"samples":9199488},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18340664.239607766,"samples":9170333},{"name":"Using + - small number (2 len)","opsSec":17917063.67764931,"samples":8958532},{"name":"Using + - big number (10 len)","opsSec":18567670.848883048,"samples":9283836}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,005,765|502883|
|Using ? operator to avoid rejection|1,034,303|517152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:31:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":1005765.7364891862,"samples":502883},{"name":"Using ? operator to avoid rejection","opsSec":1034303.5345632576,"samples":517152}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|18,053,146|9026574|
|Raw usage underscore usage|17,803,447|8901724|
|Manipulating private properties using #|17,492,245|8746124|
|Manipulating private properties using underscore(_)|17,767,881|8883941|
|Manipulating private properties using Symbol|17,375,425|8687713|
|Manipulating private properties using PrivateSymbol|13,112,036|6556019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:41:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":18053146.194724046,"samples":9026574},{"name":"Raw usage underscore usage","opsSec":17803447.038568325,"samples":8901724},{"name":"Manipulating private properties using #","opsSec":17492245.095659003,"samples":8746124},{"name":"Manipulating private properties using underscore(_)","opsSec":17767881.395340584,"samples":8883941},{"name":"Manipulating private properties using Symbol","opsSec":17375425.930519763,"samples":8687713},{"name":"Manipulating private properties using PrivateSymbol","opsSec":13112036.531860879,"samples":6556019}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,988,466|2494234|
|Adding property in the object creation - small object|4,939,623|2469812|
|Adding property after the function creation - small class|250,206|125104|
|Adding property in the function creation - small class|237,720|118861|
|Adding property after the class creation - small class|243,456|121729|
|Adding property in the class creation - small class|236,082|120308|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:50:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4988466.862632945,"samples":2494234},{"name":"Adding property in the object creation - small object","opsSec":4939623.1602569325,"samples":2469812},{"name":"Adding property after the function creation - small class","opsSec":250206.60334672788,"samples":125104},{"name":"Adding property in the function creation - small class","opsSec":237720.80283803202,"samples":118861},{"name":"Adding property after the class creation - small class","opsSec":243456.62349623026,"samples":121729},{"name":"Adding property in the class creation - small class","opsSec":236082.68179546902,"samples":120308}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|20,620,851|10310426|
|Getter|16,030,715|8015358|
|Method|20,224,925|10112464|
|DefineProperty (getter)|20,350,410|10175206|
|DefineProperty (getter & enumerable=false)|16,325,312|8162657|
|DefineProperty (getter & configurable=false)|20,173,100|10086551|
|DefineProperty (getter & enumerable=false & configurable=false)|16,568,890|8284446|
|DefineProperty (writable)|20,192,273|10096137|
|DefineProperty (writable & enumerable=false)|20,199,397|10099700|
|DefineProperty (writable & enumerable=false & configurable=false)|20,535,414|10267708|
|DefineProperties (getter)|16,412,837|8206419|
|DefineProperties (getter & enumerable=false)|15,901,808|7950905|
|DefineProperties (getter & enumerable=false & configurable=false)|16,384,345|8192173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:03:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":20620851.29894543,"samples":10310426},{"name":"Getter","opsSec":16030715.614698397,"samples":8015358},{"name":"Method","opsSec":20224925.735444147,"samples":10112464},{"name":"DefineProperty (getter)","opsSec":20350410.901328858,"samples":10175206},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16325312.69514621,"samples":8162657},{"name":"DefineProperty (getter & configurable=false)","opsSec":20173100.62817703,"samples":10086551},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16568890.742326263,"samples":8284446},{"name":"DefineProperty (writable)","opsSec":20192273.193514116,"samples":10096137},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20199397.93960927,"samples":10099700},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20535414.521729957,"samples":10267708},{"name":"DefineProperties (getter)","opsSec":16412837.671537258,"samples":8206419},{"name":"DefineProperties (getter & enumerable=false)","opsSec":15901808.855800603,"samples":7950905},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16384345.343577854,"samples":8192173}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|17,219,946|8609974|
|Setter|5,888,379|2944190|
|Method|17,743,157|8871579|
|DefineProperty (setter)|17,842,318|8921160|
|DefineProperty (setter & enumerable=false)|5,931,931|2965966|
|DefineProperty (setter & configurable=false)|6,068,852|3034427|
|DefineProperty (setter & enumerable=false & configurable=false)|5,978,497|2989249|
|DefineProperty (writable)|17,848,575|8924288|
|DefineProperty (writable & enumerable=false)|17,416,332|8708167|
|DefineProperty (writable & enumerable=false & configurable=false)|17,819,903|8909952|
|DefineProperties (setter)|17,150,840|8575423|
|DefineProperties (setter & enumerable=false)|6,030,016|3015009|
|DefineProperties (setter & enumerable=false & configurable=false)|6,002,666|3001334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:26:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":17219946.657074742,"samples":8609974},{"name":"Setter","opsSec":5888379.811498177,"samples":2944190},{"name":"Method","opsSec":17743157.92875675,"samples":8871579},{"name":"DefineProperty (setter)","opsSec":17842318.501116734,"samples":8921160},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5931931.738996555,"samples":2965966},{"name":"DefineProperty (setter & configurable=false)","opsSec":6068852.361426176,"samples":3034427},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5978497.701035603,"samples":2989249},{"name":"DefineProperty (writable)","opsSec":17848575.85725394,"samples":8924288},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17416332.85042863,"samples":8708167},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17819903.57291496,"samples":8909952},{"name":"DefineProperties (setter)","opsSec":17150840.68428357,"samples":8575423},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6030016.757933973,"samples":3015009},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6002666.499018144,"samples":3001334}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,666,730|1333366|
|Using replaceAll()|2,330,657|1165329|
|Using replaceAll(//g)|2,421,393|1210697|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:41:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2666730.8319733483,"samples":1333366},{"name":"Using replaceAll()","opsSec":2330657.5012385366,"samples":1165329},{"name":"Using replaceAll(//g)","opsSec":2421393.6174206347,"samples":1210697}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,936,780|4968391|
|{ ...object, __proto__: null }|9,323,164|4661583|
|{ ...object, newProp: true }|786,832|393417|
|structuredClone|269,935|134968|
|JSON.parse + JSON.stringify|183,812|92035|
|loop + object.keys starting with {}|1,249,334|624668|
|loop + object.keys starting with { __proto__: null }|741,587|370794|
|loop + object.keys starting with { randomProp: true }|465,906|232954|
|object.keys + reduce(FN, {})|1,228,810|614406|
|object.keys + reduce(FN, { __proto__: null })|650,686|325367|
|object.keys + reduce(FN, { newProp: true })|501,717|251061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:50:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9936780.44985435,"samples":4968391},{"name":"{ ...object, __proto__: null }","opsSec":9323164.787990676,"samples":4661583},{"name":"{ ...object, newProp: true }","opsSec":786832.6859915344,"samples":393417},{"name":"structuredClone","opsSec":269935.1912741308,"samples":134968},{"name":"JSON.parse + JSON.stringify","opsSec":183812.77093773702,"samples":92035},{"name":"loop + object.keys starting with {}","opsSec":1249334.5182897686,"samples":624668},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":741587.136789793,"samples":370794},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":465906.9433226202,"samples":232954},{"name":"object.keys + reduce(FN, {})","opsSec":1228810.9530556013,"samples":614406},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":650686.3125037026,"samples":325367},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":501717.7299013056,"samples":251061}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|261,702|130852|
|Sort using first char|1,159,680|579841|
|Sort using localeCompare|1,070,781|535391|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":261702.60878890462,"samples":130852},{"name":"Sort using first char","opsSec":1159680.6756440282,"samples":579841},{"name":"Sort using localeCompare","opsSec":1070781.39822082,"samples":535391}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,819|910|
|{...smallObject} - Total keys: 2|14,466,066|7233034|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,221|1111|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,601|3301|
|{ ...bigObject, ...anotherBigObject }|1,131|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,627,868|3813935|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,975,649|5987825|
|{ ...smallObject, ...anotherSmallObject }|9,998,442|4999222|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:25:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1819.0793130254358,"samples":910},{"name":"{...smallObject} - Total keys: 2","opsSec":14466066.321888953,"samples":7233034},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2221.0854414164314,"samples":1111},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6601.428184292393,"samples":3301},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1131.16518425776,"samples":566},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7627868.825364192,"samples":3813935},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11975649.952214492,"samples":5987825},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9998442.540326342,"samples":4999222}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,097|1049|
|streams.web.Readable reading 1e3 * "some data"|1,492|747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2097.881306071435,"samples":1049},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1492.6390594700267,"samples":747}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,299|3150|
|streams.web.WritableStream writing 1e3 * "some data"|1,612|807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:38:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6299.244493812499,"samples":3150},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1612.0625361927075,"samples":807}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|19,637,590|9818796|
|Using backtick (`)|19,601,434|9800718|
|Using array.join|6,355,736|3177869|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:45:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":19637590.23263078,"samples":9818796},{"name":"Using backtick (`)","opsSec":19601434.27500574,"samples":9800718},{"name":"Using array.join","opsSec":6355736.614435954,"samples":3177869}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,396,272|7698137|
|(short string) (true) String#slice and strict comparison|14,995,071|7497536|
|(long string) (true) String#endsWith|14,328,007|7164004|
|(long string) (true) String#slice and strict comparison|13,828,863|6914432|
|(short string) (false) String#endsWith|15,553,831|7776916|
|(short string) (false) String#slice and strict comparison|15,204,965|7602483|
|(long string) (false) String#endsWith|15,820,308|7910155|
|(long string) (false) String#slice and strict comparison|14,237,754|7118878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:56:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15396272.521838369,"samples":7698137},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14995071.789996589,"samples":7497536},{"name":"(long string) (true) String#endsWith","opsSec":14328007.627588227,"samples":7164004},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13828863.585144818,"samples":6914432},{"name":"(short string) (false) String#endsWith","opsSec":15553831.999970576,"samples":7776916},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15204965.452516401,"samples":7602483},{"name":"(long string) (false) String#endsWith","opsSec":15820308.956179023,"samples":7910155},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14237754.149443965,"samples":7118878}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,806,071|4903036|
|Using indexof|9,812,153|4906077|
|Using RegExp.test|8,614,046|4307024|
|Using RegExp.text with cached regex pattern|8,781,520|4390761|
|Using new RegExp.test|3,503,431|1751716|
|Using new RegExp.test with cached regex pattern|4,030,836|2015419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:10:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":9806071.490038946,"samples":4903036},{"name":"Using indexof","opsSec":9812153.214949338,"samples":4906077},{"name":"Using RegExp.test","opsSec":8614046.328964511,"samples":4307024},{"name":"Using RegExp.text with cached regex pattern","opsSec":8781520.226087332,"samples":4390761},{"name":"Using new RegExp.test","opsSec":3503431.1381551637,"samples":1751716},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4030836.8471823833,"samples":2015419}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|16,616,806|8308409|
|(short string) (true) String#slice and strict comparison|15,312,670|7656462|
|(long string) (true) String#startsWith|16,220,640|8110321|
|(long string) (true) String#slice and strict comparison|13,884,490|6942246|
|(short string) (false) String#startsWith|18,552,135|9276068|
|(short string) (false) String#slice and strict comparison|15,177,123|7588562|
|(long string) (false) String#startsWith|17,362,182|8681092|
|(long string) (false) String#slice and strict comparison|14,230,546|7115274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:22:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":16616806.135693125,"samples":8308409},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15312670.269145338,"samples":7656462},{"name":"(long string) (true) String#startsWith","opsSec":16220640.44261594,"samples":8110321},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13884490.556018757,"samples":6942246},{"name":"(short string) (false) String#startsWith","opsSec":18552135.405664105,"samples":9276068},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15177123.969827505,"samples":7588562},{"name":"(long string) (false) String#startsWith","opsSec":17362182.81913696,"samples":8681092},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14230546.092886051,"samples":7115274}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,336,407|9668204|
|Using this|17,401,779|8700890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:35:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":19336407.497341976,"samples":9668204},{"name":"Using this","opsSec":17401779.199550554,"samples":8700890}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,587,802|3293902|
|Date.now()|9,982,064|4991033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:43:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6587802.919603442,"samples":3293902},{"name":"Date.now()","opsSec":9982064.901980914,"samples":4991033}]}-->

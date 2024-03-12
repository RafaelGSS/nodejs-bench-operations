## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|845,888,325|93|
|Using dot notation|842,709,181|95|
|Using define property (writable)|4,254,948|96|
|Using define property initialized (writable)|6,268,699|97|
|Using define property (getter)|2,416,316|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Directly in the object","opsSec":845888325.3857173,"samples":6},{"name":"Using dot notation","opsSec":842709180.990496,"samples":6},{"name":"Using define property (writable)","opsSec":4254948.429671981,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6268699.447530683,"samples":4},{"name":"Using define property (getter)","opsSec":2416316.2948533967,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.014ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.466ms
new Array(length)|10,000|0.495ms
array.push|1,000,000|27.809ms
new Array(length)|1,000,000|6.547ms
array.push|100,000,000|1,160.044ms
new Array(length)|100,000,000|3,610.328ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.25ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|22.351ms
new Array(length)|1,000,000|2.724ms
array.push|100,000,000|1,337.37ms
new Array(length)|100,000,000|3,463.588ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|644|86|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Array","opsSec":643.9882147262006,"samples":3},{"name":"Array.from","opsSec":22.291015346248155,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,300,018|97|
|[async] async function|17,810,950|87|
|[async] function|175,000|21|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846300017.8503109,"samples":7},{"name":"[async] async function","opsSec":17810949.68794603,"samples":6},{"name":"[async] function","opsSec":174999.5703403363,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,287|89|
|new Blob (1024)|680|91|
|text (128)|5,859|88|
|text (1024)|739|88|
|arrayBuffer (128)|5,794|87|
|arrayBuffer (1024)|747|87|
|slice (0, 64)|75,940|71|
|slice (0, 512)|21,030|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5286.970023736353,"samples":4},{"name":"new Blob (1024)","opsSec":679.6942917526159,"samples":2},{"name":"text (128)","opsSec":5859.2415968254745,"samples":5},{"name":"text (1024)","opsSec":739.1095949690421,"samples":2},{"name":"arrayBuffer (128)","opsSec":5793.961519781956,"samples":6},{"name":"arrayBuffer (1024)","opsSec":746.946345861356,"samples":2},{"name":"slice (0, 64)","opsSec":75939.87472241302,"samples":3},{"name":"slice (0, 512)","opsSec":21029.9054397011,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,715|53|
|[True conditional] Using constructor name|193,229|94|
|[True conditional] Check if property is valid then instanceof |195,109|96|
|[False conditional] Using instanceof only|846,815,897|99|
|[False conditional] Using constructor name|848,374,154|98|
|[False conditional] Check if property is valid then instanceof |845,738,960|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:33:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236714.8943339792,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":193229.14220010306,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":195108.97492671965,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846815896.7302669,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848374154.3364139,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845738960.3682193,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,734|92|
|crypto.verify('RSA-SHA256')|6,701|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6734.0915152698335,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6701.36285214359,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,368,829|94|
|fromUnixToISOString(new Date())|2,303,970|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1368829.0543973288,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2303970.362594884,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|14,801|82|
|Intl.DateTimeFormat().format(new Date())|14,459|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,056|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,402|77|
|Reusing Intl.DateTimeFormat()|769,776|94|
|Date.toLocaleDateString()|742,029|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,779|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":14800.77357299722,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":14458.69158249088,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16056.272123913235,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15401.964852944197,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":769775.7999331811,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":742029.4677370186,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17778.81771990698,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,061,119|92|
|Using brackets {}|1,107,039|97|
|Using '' + |1,103,749|97|
|Using date.toString()|1,191,276|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1061119.100879154,"samples":4},{"name":"Using brackets {}","opsSec":1107038.764976402,"samples":6},{"name":"Using '' + ","opsSec":1103748.9826495608,"samples":6},{"name":"Using date.toString()","opsSec":1191276.129768901,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,842,091|93|
|Using delete property (proto: null)|21,101,850|95|
|Using delete property (cached proto: null)|3,906,276|97|
|Using undefined assignment|844,280,539|96|
|Using undefined assignment (proto: null)|23,177,116|94|
|Using undefined property (cached proto: null)|843,097,957|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using delete property","opsSec":3842090.859419882,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21101850.46267297,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3906276.114524292,"samples":4},{"name":"Using undefined assignment","opsSec":844280538.6170456,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23177116.440780498,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":843097956.6992537,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|234,352|51|
|NodeError|191,373|95|
|NodeError Range|192,839|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":234351.8133030038,"samples":3},{"name":"NodeError","opsSec":191373.31234821543,"samples":3},{"name":"NodeError Range","opsSec":192839.06837040218,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,796,242|96|
|Function returning explicitly undefined|1,768,738|92|
|Function returning implicitly undefined|1,799,435|91|
|Function returning string|1,772,452|94|
|Function returning integer|1,814,038|94|
|Function returning float|1,768,168|95|
|Function returning functions|1,727,759|96|
|Function returning arrow functions|1,732,423|93|
|Function returning empty object|1,781,862|93|
|Function returning empty array|1,752,801|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1796242.0277188034,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1768737.7112597253,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1799435.1740727094,"samples":6},{"name":"Function returning string","opsSec":1772451.9107914625,"samples":5},{"name":"Function returning integer","opsSec":1814037.952660146,"samples":5},{"name":"Function returning float","opsSec":1768168.0724127525,"samples":4},{"name":"Function returning functions","opsSec":1727758.7970632343,"samples":4},{"name":"Function returning arrow functions","opsSec":1732422.7928267121,"samples":7},{"name":"Function returning empty object","opsSec":1781862.3289212189,"samples":5},{"name":"Function returning empty array","opsSec":1752800.6650233904,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|855,939,003|94|
|using Array.includes (first item)|856,057,526|99|
|Using raw comparison|845,364,164|94|
|Using raw comparison (first item)|846,394,195|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":855939002.6454834,"samples":8},{"name":"using Array.includes (first item)","opsSec":856057526.35276,"samples":7},{"name":"Using raw comparison","opsSec":845364164.3254136,"samples":7},{"name":"Using raw comparison (first item)","opsSec":846394195.0744534,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,827,198|94|
|Using Object.getOwnPropertyNames()|94,419,231|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":93827197.96967684,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":94419231.08590612,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|888,876,730|95|
|Length = 10_000 - Array.at|894,472,524|97|
|Length = 1_000_000 - Array.at|887,605,537|98|
|Length = 100 - Array[length - 1]|787,577,057|98|
|Length = 10_000 - Array[length - 1]|787,503,018|96|
|Length = 1_000_000 - Array[length - 1]|787,098,384|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":888876729.5069023,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":894472524.4603256,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":887605536.9379541,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":787577057.4788822,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":787503018.4457252,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":787098383.5152053,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|84,842,421|93|
|Object.create({})|2,609,215|80|
|Cached Empty.prototype|845,957,328|99|
|Empty.prototype|2,480,411|87|
|Empty class|1,416,677|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":84842420.54430206,"samples":4},{"name":"Object.create({})","opsSec":2609214.520960955,"samples":4},{"name":"Cached Empty.prototype","opsSec":845957328.1125643,"samples":7},{"name":"Empty.prototype","opsSec":2480410.6186627904,"samples":5},{"name":"Empty class","opsSec":1416677.135528728,"samples":5}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,366,058|92|
|Using optional chain (obj.field?.field2) (undefined)|845,141,325|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|841,826,320|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|844,150,907|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846366057.6667393,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":845141325.3021436,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":841826320.4626495,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":844150907.3495811,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|843,527,584|96|
|Using parseInt(x, 10) - big number (10 len)|847,799,123|94|
|Using + - small number (2 len)|839,965,047|94|
|Using + - big number (10 len)|844,478,215|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:56:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":843527584.0068868,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":847799123.0711502,"samples":8},{"name":"Using + - small number (2 len)","opsSec":839965046.5321611,"samples":6},{"name":"Using + - big number (10 len)","opsSec":844478215.3293875,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,257,752|81|
|Using ? operator to avoid rejection|1,351,514|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1257751.8371789022,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1351514.3607365096,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|838,594,621|92|
|Raw usage underscore usage|838,847,164|98|
|Manipulating private properties using #|825,142,577|94|
|Manipulating private properties using underscore(_)|829,304,552|96|
|Manipulating private properties using Symbol|830,581,405|96|
|Manipulating private properties using PrivateSymbol|50,300,171|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Raw usage private field","opsSec":838594620.8969408,"samples":6},{"name":"Raw usage underscore usage","opsSec":838847164.1094265,"samples":8},{"name":"Manipulating private properties using #","opsSec":825142577.2741971,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":829304551.9120659,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":830581404.5183375,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50300171.326380916,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,200,886|96|
|Adding property in the object creation - small object|5,212,616|96|
|Adding property after the function creation - small class|261,592|88|
|Adding property in the function creation - small class|263,650|90|
|Adding property after the class creation - small class|270,967|88|
|Adding property in the class creation - small class|269,411|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5200885.8435557475,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5212616.349527022,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":261592.42530582345,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":263649.74209575774,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":270967.36829033133,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":269410.8468875907,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|843,194,883|96|
|Getter|88,864,122|94|
|Method|812,882,718|95|
|DefineProperty (getter)|840,221,593|96|
|DefineProperty (getter & enumerable=false)|87,928,437|93|
|DefineProperty (getter & configurable=false)|839,306,389|96|
|DefineProperty (getter & enumerable=false & configurable=false)|88,274,163|98|
|DefineProperty (writable)|839,833,692|98|
|DefineProperty (writable & enumerable=false)|838,975,314|94|
|DefineProperty (writable & enumerable=false & configurable=false)|843,431,549|95|
|DefineProperties (getter)|87,863,083|96|
|DefineProperties (getter & enumerable=false)|87,964,787|96|
|DefineProperties (getter & enumerable=false & configurable=false)|65,951,164|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":843194883.1220034,"samples":5},{"name":"Getter","opsSec":88864122.37305355,"samples":6},{"name":"Method","opsSec":812882717.7442017,"samples":7},{"name":"DefineProperty (getter)","opsSec":840221592.9656763,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":87928437.2581641,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":839306388.6512752,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":88274162.64672428,"samples":5},{"name":"DefineProperty (writable)","opsSec":839833692.0690151,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":838975314.3866265,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":843431549.4528241,"samples":7},{"name":"DefineProperties (getter)","opsSec":87863082.87876928,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":87964787.22690044,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":65951164.159100324,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|780,265,618|98|
|Setter|11,625,220|96|
|Method|629,668,332|98|
|DefineProperty (setter)|753,092,053|97|
|DefineProperty (setter & enumerable=false)|11,707,647|93|
|DefineProperty (setter & configurable=false)|11,947,832|96|
|DefineProperty (setter & enumerable=false & configurable=false)|10,579,456|91|
|DefineProperty (writable)|787,346,172|97|
|DefineProperty (writable & enumerable=false)|786,405,130|98|
|DefineProperty (writable & enumerable=false & configurable=false)|786,532,588|97|
|DefineProperties (setter)|677,155,181|79|
|DefineProperties (setter & enumerable=false)|11,590,446|94|
|DefineProperties (setter & enumerable=false & configurable=false)|11,267,341|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":780265618.2845942,"samples":6},{"name":"Setter","opsSec":11625219.50490076,"samples":6},{"name":"Method","opsSec":629668332.3087596,"samples":7},{"name":"DefineProperty (setter)","opsSec":753092053.4439439,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11707647.312761186,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":11947831.599039456,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10579456.48488755,"samples":6},{"name":"DefineProperty (writable)","opsSec":787346171.5638114,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":786405130.0551926,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":786532588.3733943,"samples":7},{"name":"DefineProperties (setter)","opsSec":677155181.0226498,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11590446.004983978,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11267340.750191545,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,314,726|95|
|Using replaceAll()|2,737,766|94|
|Using replaceAll(//g)|2,960,462|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3314725.9291471206,"samples":9},{"name":"Using replaceAll()","opsSec":2737765.5385621316,"samples":6},{"name":"Using replaceAll(//g)","opsSec":2960461.982306028,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,882,858|93|
|{ ...object, __proto__: null }|27,313,915|95|
|{ ...object, newProp: true }|908,876|90|
|structuredClone|287,635|95|
|JSON.parse + JSON.stringify|174,817|97|
|loop + object.keys starting with {}|1,446,735|92|
|loop + object.keys starting with { __proto__: null }|795,422|97|
|loop + object.keys starting with { randomProp: true }|615,791|96|
|object.keys + reduce(FN, {})|583,464|97|
|object.keys + reduce(FN, { __proto__: null })|798,068|97|
|object.keys + reduce(FN, { newProp: true })|622,363|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":25882858.23892322,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27313914.777105942,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":908875.6742472594,"samples":3},{"name":"structuredClone","opsSec":287635.1253061397,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":174817.28186450552,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1446735.2749361994,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":795421.5530407667,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":615791.1312792045,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":583463.7405028443,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":798068.1025599233,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":622362.6389294681,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|265,078|95|
|Sort using first char|1,379,629|93|
|Sort using localeCompare|1,290,399|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":265077.777179274,"samples":6},{"name":"Sort using first char","opsSec":1379629.348067651,"samples":6},{"name":"Sort using localeCompare","opsSec":1290398.514416372,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,079|93|
|{...smallObject} - Total keys: 2|101,316,767|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,223|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,244|98|
|{ ...bigObject, ...anotherBigObject }|1,286|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,471,297|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,354,873|98|
|{ ...smallObject, ...anotherSmallObject }|24,835,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2078.7355995429475,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":101316767.23895232,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2222.8773183812455,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6244.0180014491925,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1286.4758909883863,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13471297.363249978,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37354873.35308287,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24835897.52919367,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,005|87|
|streams.web.Readable reading 1e3 * "some data"|2,378|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2005.2853556976359,"samples":7},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2377.6382992748777,"samples":4}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,012|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,518|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6011.670717286165,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1518.420091452379,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|847,841,586|96|
|Using backtick (`)|841,481,379|98|
|Using array.join|11,324,828|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using + sign","opsSec":847841585.990207,"samples":9},{"name":"Using backtick (`)","opsSec":841481379.2212679,"samples":7},{"name":"Using array.join","opsSec":11324828.404819006,"samples":4}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|845,252,711|97|
|Using indexof|845,216,959|94|
|Using RegExp.test|17,313,193|98|
|Using RegExp.text with cached regex pattern|17,892,493|97|
|Using new RegExp.test|4,438,498|92|
|Using new RegExp.test with cached regex pattern|5,445,225|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":845252711.3781153,"samples":7},{"name":"Using indexof","opsSec":845216958.6724998,"samples":7},{"name":"Using RegExp.test","opsSec":17313192.677493673,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17892492.62843501,"samples":5},{"name":"Using new RegExp.test","opsSec":4438497.827684165,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5445225.014519787,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|879,224,610|95|
|Using this|844,354,369|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using super","opsSec":879224609.8557936,"samples":7},{"name":"Using this","opsSec":844354368.654768,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,041,399|94|
|Date.now()|21,298,149|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":12041398.768354237,"samples":5},{"name":"Date.now()","opsSec":21298148.85492444,"samples":5}]}-->

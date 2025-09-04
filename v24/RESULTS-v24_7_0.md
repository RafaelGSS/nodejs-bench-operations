## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|98,756,069|49408209|
|Using dot notation|70,574,658|35318444|
|Using define property (writable)|5,119,334|2560620|
|Using define property initialized (writable)|6,900,160|3450849|
|Using define property (getter)|2,369,283|1184920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:13:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":49408209,"opsSec":98756069.54848391},{"name":"Using dot notation","samples":35318444,"opsSec":70574658.79460785},{"name":"Using define property (writable)","samples":2560620,"opsSec":5119334.798600023},{"name":"Using define property initialized (writable)","samples":3450849,"opsSec":6900160.547627741},{"name":"Using define property (getter)","samples":1184920,"opsSec":2369283.843787645}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|31.321ms
new Array(length)|1,000,000|8.518ms
array.push|10,000,000|275.505ms
new Array(length)|10,000,000|70.316ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.005ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.481ms
new Array(length)|10,000|0.216ms
array.push|1,000,000|18.969ms
new Array(length)|1,000,000|12.459ms
array.push|10,000,000|370.42ms
new Array(length)|10,000,000|55.078ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|275|138|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:20:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":138,"opsSec":275.43574178850065},{"name":"Array.from","samples":12,"opsSec":22.32866457889559}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,958|2480|
|new Blob (1024)|580|294|
|text (128)|4,284|2143|
|text (1024)|550|276|
|arrayBuffer (128)|4,362|2182|
|arrayBuffer (1024)|554|279|
|slice (0, 64)|161,583|86851|
|slice (0, 512)|31,747|15878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2480,"opsSec":4958.334049342761},{"name":"new Blob (1024)","samples":294,"opsSec":580.3059623315031},{"name":"text (128)","samples":2143,"opsSec":4284.196173474728},{"name":"text (1024)","samples":276,"opsSec":550.8135838939888},{"name":"arrayBuffer (128)","samples":2182,"opsSec":4362.411593589835},{"name":"arrayBuffer (1024)","samples":279,"opsSec":554.4670876415302},{"name":"slice (0, 64)","samples":86851,"opsSec":161583.9027508069},{"name":"slice (0, 512)","samples":15878,"opsSec":31747.445841202763}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.03 ms|1|
|Gzip|134.69 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:35:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13303078},{"name":"Gzip","samples":1,"totalTime":0.134687371}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|20,419|10219|
|crypto.verify('RSA-SHA256')|21,548|10775|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:42:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10219,"opsSec":20419.05793420241},{"name":"crypto.verify('RSA-SHA256')","samples":10775,"opsSec":21548.41429528884}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,548,189|774111|
|fromUnixToISOString(new Date())|2,818,530|1409461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":774111,"opsSec":1548189.7697853725},{"name":"fromUnixToISOString(new Date())","samples":1409461,"opsSec":2818530.8555619884}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,927|10968|
|Intl.DateTimeFormat().format(new Date())|21,377|10689|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,906|10454|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,006|10004|
|Reusing Intl.DateTimeFormat()|436,887|218447|
|Date.toLocaleDateString()|1,041,754|520878|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,584|13293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10968,"opsSec":21927.022901407978},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10689,"opsSec":21377.676598508417},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10454,"opsSec":20906.8640464489},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10004,"opsSec":20006.2455322918},{"name":"Reusing Intl.DateTimeFormat()","samples":218447,"opsSec":436887.87832704885},{"name":"Date.toLocaleDateString()","samples":520878,"opsSec":1041754.5769632478},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13293,"opsSec":26584.167500165877}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,051,711|525856|
|Using brackets {}|1,044,222|522112|
|Using '' + |1,120,680|560445|
|Using date.toString()|1,241,706|620860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":525856,"opsSec":1051711.7854507957},{"name":"Using brackets {}","samples":522112,"opsSec":1044222.5777688492},{"name":"Using '' + ","samples":560445,"opsSec":1120680.724081585},{"name":"Using date.toString()","samples":620860,"opsSec":1241706.6144026967}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,194,625|2097314|
|Using delete property (proto: null)|18,024,608|9013419|
|Using delete property (cached proto: null)|4,337,565|2169250|
|Using undefined assignment|78,194,190|39106480|
|Using undefined assignment (proto: null)|19,998,878|10000720|
|Using undefined property (cached proto: null)|76,911,321|38469741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:57:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2097314,"opsSec":4194625.567117171},{"name":"Using delete property (proto: null)","samples":9013419,"opsSec":18024608.17572258},{"name":"Using delete property (cached proto: null)","samples":2169250,"opsSec":4337565.688350729},{"name":"Using undefined assignment","samples":39106480,"opsSec":78194190.2665684},{"name":"Using undefined assignment (proto: null)","samples":10000720,"opsSec":19998878.06372452},{"name":"Using undefined property (cached proto: null)","samples":38469741,"opsSec":76911321.84244326}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|344,404|172203|
|NodeError|293,182|147633|
|NodeError Range|298,278|149140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:06:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":172203,"opsSec":344404.59345164034},{"name":"NodeError","samples":147633,"opsSec":293182.37630618206},{"name":"NodeError Range","samples":149140,"opsSec":298278.53664549923}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,121,098|35060568|
|using Array.includes (first item)|79,343,707|39671871|
|Using raw comparison|98,479,107|49239589|
|Using raw comparison (first item)|98,975,290|49490322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:10:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35060568,"opsSec":70121098.27484912},{"name":"using Array.includes (first item)","samples":39671871,"opsSec":79343707.8822056},{"name":"Using raw comparison","samples":49239589,"opsSec":98479107.68591711},{"name":"Using raw comparison (first item)","samples":49490322,"opsSec":98975290.42654084}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,427,147|21216768|
|Using Object.getOwnPropertyNames()|46,954,071|23481390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:15:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21216768,"opsSec":42427147.40499805},{"name":"Using Object.getOwnPropertyNames()","samples":23481390,"opsSec":46954071.146699995}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|89,280,169|44641630|
|Length = 10_000 - Array.at|96,162,353|48085749|
|Length = 1_000_000 - Array.at|95,915,255|47967410|
|Length = 100 - Array[length - 1]|92,845,651|46439910|
|Length = 10_000 - Array[length - 1]|93,216,228|46626169|
|Length = 1_000_000 - Array[length - 1]|93,812,735|46932604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:18:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":44641630,"opsSec":89280169.65620752},{"name":"Length = 10_000 - Array.at","samples":48085749,"opsSec":96162353.72945915},{"name":"Length = 1_000_000 - Array.at","samples":47967410,"opsSec":95915255.39803441},{"name":"Length = 100 - Array[length - 1]","samples":46439910,"opsSec":92845651.8716547},{"name":"Length = 10_000 - Array[length - 1]","samples":46626169,"opsSec":93216228.64307807},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46932604,"opsSec":93812735.15996656}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,023,811|47511911|
|~ (small)|95,406,245|47708728|
|Math.floor (long)|95,343,786|47671899|
|~ (long)|93,643,185|46821618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":47511911,"opsSec":95023811.16728552},{"name":"~ (small)","samples":47708728,"opsSec":95406245.76612248},{"name":"Math.floor (long)","samples":47671899,"opsSec":95343786.36805806},{"name":"~ (long)","samples":46821618,"opsSec":93643185.05810733}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,219,949|15610742|
|Object.create({})|1,968,538|985950|
|new Function with empty prototype|70,593,578|35324975|
|Empty class|77,347,952|38677606|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:26:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15610742,"opsSec":31219949.10242233},{"name":"Object.create({})","samples":985950,"opsSec":1968538.2249093347},{"name":"new Function with empty prototype","samples":35324975,"opsSec":70593578.90943345},{"name":"Empty class","samples":38677606,"opsSec":77347952.27589528}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,553,199|46776622|
|Using parseInt(x, 10) - big number (10 len)|95,896,205|47948112|
|Using + - small number (2 len)|94,926,876|47464381|
|Using + - big number (10 len)|96,022,262|48025387|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:34:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46776622,"opsSec":93553199.46867704},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47948112,"opsSec":95896205.97151327},{"name":"Using + - small number (2 len)","samples":47464381,"opsSec":94926876.18267776},{"name":"Using + - big number (10 len)","samples":48025387,"opsSec":96022262.4936868}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|883,413|441820|
|Using ? operator to avoid rejection|1,211,450|605741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:37:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":441820,"opsSec":883413.8654855407},{"name":"Using ? operator to avoid rejection","samples":605741,"opsSec":1211450.8124102852}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|95,796,845|47898761|
|Raw usage underscore usage|97,729,420|48864720|
|Manipulating private properties using #|97,458,753|48748487|
|Manipulating private properties using underscore(_)|97,171,691|48602090|
|Manipulating private properties using Symbol|97,367,151|48700202|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:41:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":47898761,"opsSec":95796845.86586188},{"name":"Raw usage underscore usage","samples":48864720,"opsSec":97729420.45411591},{"name":"Manipulating private properties using #","samples":48748487,"opsSec":97458753.40575936},{"name":"Manipulating private properties using underscore(_)","samples":48602090,"opsSec":97171691.42234647},{"name":"Manipulating private properties using Symbol","samples":48700202,"opsSec":97367151.75453569}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,833,315|3928768|
|Adding property in the object creation - small object|7,908,729|3955998|
|Adding property after the function creation - small class|276,748|140764|
|Adding property in the function creation - small class|292,392|146655|
|Adding property after the class creation - small class|279,092|139560|
|Adding property in the class creation - small class|269,617|142868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:49:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3928768,"opsSec":7833315.654329546},{"name":"Adding property in the object creation - small object","samples":3955998,"opsSec":7908729.821123553},{"name":"Adding property after the function creation - small class","samples":140764,"opsSec":276748.39634160104},{"name":"Adding property in the function creation - small class","samples":146655,"opsSec":292392.99999733834},{"name":"Adding property after the class creation - small class","samples":139560,"opsSec":279092.44855166384},{"name":"Adding property in the class creation - small class","samples":142868,"opsSec":269617.6593882713}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,433,048|47716527|
|Getter|52,426,831|26221342|
|Method|94,353,761|47176910|
|DefineProperty (getter)|95,479,053|47748710|
|DefineProperty (getter & enumerable=false)|53,761,662|26885008|
|DefineProperty (getter & configurable=false)|94,925,754|47462899|
|DefineProperty (getter & enumerable=false & configurable=false)|53,417,734|26716134|
|DefineProperty (writable)|94,429,802|47250176|
|DefineProperty (writable & enumerable=false)|94,947,616|47473833|
|DefineProperty (writable & enumerable=false & configurable=false)|94,418,487|47573056|
|DefineProperties (getter)|53,618,241|26809127|
|DefineProperties (getter & enumerable=false)|53,869,794|26934927|
|DefineProperties (getter & enumerable=false & configurable=false)|54,186,130|27093071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:51:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47716527,"opsSec":95433048.65574928},{"name":"Getter","samples":26221342,"opsSec":52426831.279611334},{"name":"Method","samples":47176910,"opsSec":94353761.31196047},{"name":"DefineProperty (getter)","samples":47748710,"opsSec":95479053.84016141},{"name":"DefineProperty (getter & enumerable=false)","samples":26885008,"opsSec":53761662.727892},{"name":"DefineProperty (getter & configurable=false)","samples":47462899,"opsSec":94925754.71385585},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26716134,"opsSec":53417734.209711686},{"name":"DefineProperty (writable)","samples":47250176,"opsSec":94429802.17277949},{"name":"DefineProperty (writable & enumerable=false)","samples":47473833,"opsSec":94947616.81713448},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47573056,"opsSec":94418487.63294914},{"name":"DefineProperties (getter)","samples":26809127,"opsSec":53618241.88227733},{"name":"DefineProperties (getter & enumerable=false)","samples":26934927,"opsSec":53869794.850965254},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27093071,"opsSec":54186130.29579585}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,862,530|49431938|
|Setter|10,797,557|5413756|
|Method|90,780,162|45415929|
|DefineProperty (setter)|92,373,296|46186665|
|DefineProperty (setter & enumerable=false)|10,789,427|5394716|
|DefineProperty (setter & configurable=false)|10,750,877|5375439|
|DefineProperty (setter & enumerable=false & configurable=false)|10,634,668|5317335|
|DefineProperty (writable)|93,648,434|46834792|
|DefineProperty (writable & enumerable=false)|92,814,290|46407923|
|DefineProperty (writable & enumerable=false & configurable=false)|93,942,781|46983356|
|DefineProperties (setter)|95,323,663|47670365|
|DefineProperties (setter & enumerable=false)|10,898,623|5449921|
|DefineProperties (setter & enumerable=false & configurable=false)|10,724,881|5362532|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:00:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49431938,"opsSec":98862530.28323779},{"name":"Setter","samples":5413756,"opsSec":10797557.933064872},{"name":"Method","samples":45415929,"opsSec":90780162.14730327},{"name":"DefineProperty (setter)","samples":46186665,"opsSec":92373296.74561317},{"name":"DefineProperty (setter & enumerable=false)","samples":5394716,"opsSec":10789427.748965468},{"name":"DefineProperty (setter & configurable=false)","samples":5375439,"opsSec":10750877.16143158},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5317335,"opsSec":10634668.574954411},{"name":"DefineProperty (writable)","samples":46834792,"opsSec":93648434.81207578},{"name":"DefineProperty (writable & enumerable=false)","samples":46407923,"opsSec":92814290.61811782},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46983356,"opsSec":93942781.95515257},{"name":"DefineProperties (setter)","samples":47670365,"opsSec":95323663.2513315},{"name":"DefineProperties (setter & enumerable=false)","samples":5449921,"opsSec":10898623.55568372},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5362532,"opsSec":10724881.591213897}]}-->

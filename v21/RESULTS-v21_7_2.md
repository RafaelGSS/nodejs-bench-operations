## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,176,634|97|
|Using dot notation|911,858,323|99|
|Using define property (writable)|4,763,846|97|
|Using define property initialized (writable)|7,071,793|94|
|Using define property (getter)|2,785,968|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:19:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912176634.4410051,"samples":6},{"name":"Using dot notation","opsSec":911858323.3457873,"samples":6},{"name":"Using define property (writable)","opsSec":4763846.362880353,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7071792.984144087,"samples":4},{"name":"Using define property (getter)","opsSec":2785967.849058611,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.094ms
new Array(length)|100|0.015ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.27ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|29.557ms
new Array(length)|1,000,000|7.969ms
array.push|100,000,000|1,962.148ms
new Array(length)|100,000,000|4,314.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.306ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|21.916ms
new Array(length)|1,000,000|7.309ms
array.push|100,000,000|2,083.417ms
new Array(length)|100,000,000|4,915.579ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|85|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:33:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.24651601448107,"samples":2},{"name":"Array.from","opsSec":23.261679866019588,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|912,258,679|99|
|[async] async function|18,177,278|87|
|[async] function|372,827|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:40:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":912258679.0486792,"samples":6},{"name":"[async] async function","opsSec":18177277.85342129,"samples":7},{"name":"[async] function","opsSec":372826.6935797394,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,230|89|
|new Blob (1024)|794|77|
|text (128)|6,509|88|
|text (1024)|824|89|
|arrayBuffer (128)|6,574|89|
|arrayBuffer (1024)|831|88|
|slice (0, 64)|191,793|55|
|slice (0, 512)|32,756|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6230.264611648926,"samples":6},{"name":"new Blob (1024)","opsSec":794.1658850876366,"samples":2},{"name":"text (128)","opsSec":6508.677014024432,"samples":6},{"name":"text (1024)","opsSec":823.6898507825849,"samples":2},{"name":"arrayBuffer (128)","opsSec":6574.214785337679,"samples":5},{"name":"arrayBuffer (1024)","opsSec":831.0773081224233,"samples":2},{"name":"slice (0, 64)","opsSec":191793.4658782101,"samples":4},{"name":"slice (0, 512)","opsSec":32756.192472145278,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|274,679|54|
|[True conditional] Using constructor name|228,154|96|
|[True conditional] Check if property is valid then instanceof |228,435|90|
|[False conditional] Using instanceof only|912,130,345|100|
|[False conditional] Using constructor name|913,253,201|94|
|[False conditional] Check if property is valid then instanceof |913,454,371|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":274678.7330308187,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":228154.00239916894,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":228435.25427802932,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912130344.6276729,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":913253200.6691492,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913454370.8391877,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,387|92|
|crypto.verify('RSA-SHA256')|7,401|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:10:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7387.479555518012,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":7401.1762732062425,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,516|82|
|Intl.DateTimeFormat().format(new Date())|17,933|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,243|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,150|83|
|Reusing Intl.DateTimeFormat()|767,187|92|
|Date.toLocaleDateString()|881,002|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,569|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:32:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17515.51472983904,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17932.644849859153,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18243.0385385441,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19149.713113549275,"samples":9},{"name":"Reusing Intl.DateTimeFormat()","opsSec":767187.4119048548,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":881001.5581156994,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21569.222524463854,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,168,471|94|
|Using brackets {}|1,194,098|99|
|Using '' + |1,190,530|96|
|Using date.toString()|1,345,072|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:44:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1168471.0041188742,"samples":4},{"name":"Using brackets {}","opsSec":1194097.5332632565,"samples":4},{"name":"Using '' + ","opsSec":1190530.1209321728,"samples":5},{"name":"Using date.toString()","opsSec":1345071.6405601273,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,512,978|94|
|Using delete property (proto: null)|23,321,160|96|
|Using delete property (cached proto: null)|4,564,277|98|
|Using undefined assignment|910,282,867|99|
|Using undefined assignment (proto: null)|26,485,986|97|
|Using undefined property (cached proto: null)|908,394,383|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:53:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4512977.769378374,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23321160.25266621,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4564277.180619957,"samples":6},{"name":"Using undefined assignment","opsSec":910282866.7115643,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":26485985.713527564,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":908394383.2545786,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|263,267|53|
|NodeError|222,204|96|
|NodeError Range|222,477|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:02:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":263266.5501079072,"samples":3},{"name":"NodeError","opsSec":222204.40298827566,"samples":3},{"name":"NodeError Range","opsSec":222476.66404335015,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,073,290|93|
|Function returning explicitly undefined|2,063,461|100|
|Function returning implicitly undefined|2,071,198|92|
|Function returning string|2,059,156|99|
|Function returning integer|2,104,544|97|
|Function returning float|2,058,774|97|
|Function returning functions|2,022,414|96|
|Function returning arrow functions|2,004,047|98|
|Function returning empty object|2,074,759|96|
|Function returning empty array|2,081,346|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:16:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2073290.4554126777,"samples":4},{"name":"Function returning explicitly undefined","opsSec":2063461.3251809606,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2071197.5829306021,"samples":5},{"name":"Function returning string","opsSec":2059155.6141818399,"samples":7},{"name":"Function returning integer","opsSec":2104543.6086637382,"samples":5},{"name":"Function returning float","opsSec":2058773.7054486047,"samples":8},{"name":"Function returning functions","opsSec":2022414.2676370803,"samples":5},{"name":"Function returning arrow functions","opsSec":2004046.6989999698,"samples":5},{"name":"Function returning empty object","opsSec":2074758.6687134474,"samples":7},{"name":"Function returning empty array","opsSec":2081346.055283039,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|909,697,752|100|
|using Array.includes (first item)|910,548,563|97|
|Using raw comparison|912,279,440|98|
|Using raw comparison (first item)|911,759,672|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:24:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":909697752.4522451,"samples":6},{"name":"using Array.includes (first item)","opsSec":910548563.0432882,"samples":6},{"name":"Using raw comparison","opsSec":912279440.1027427,"samples":7},{"name":"Using raw comparison (first item)","opsSec":911759671.6003232,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|100,647,585|94|
|Using Object.getOwnPropertyNames()|99,211,625|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:31:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":100647584.58499715,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":99211624.53744382,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|964,391,186|99|
|Length = 10_000 - Array.at|967,231,598|96|
|Length = 1_000_000 - Array.at|967,383,753|96|
|Length = 100 - Array[length - 1]|909,462,649|97|
|Length = 10_000 - Array[length - 1]|910,352,739|99|
|Length = 1_000_000 - Array[length - 1]|910,258,383|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:41:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":964391186.010416,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":967231598.0125457,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":967383753.293523,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":909462649.0644082,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":910352739.1378577,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":910258382.8974692,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|90,764,459|90|
|Object.create({})|2,888,218|88|
|Cached Empty.prototype|911,535,484|98|
|Empty.prototype|2,657,500|86|
|Empty class|1,675,246|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:50:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":90764459.25749423,"samples":5},{"name":"Object.create({})","opsSec":2888217.5781391487,"samples":3},{"name":"Cached Empty.prototype","opsSec":911535483.8559139,"samples":6},{"name":"Empty.prototype","opsSec":2657500.1215111143,"samples":4},{"name":"Empty class","opsSec":1675245.7137438282,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,543,794|96|
|Using optional chain (obj.field?.field2) (undefined)|910,939,993|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|911,119,081|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|910,855,793|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:59:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910543793.6378728,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":910939992.7062029,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":911119080.8179945,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":910855792.8557374,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|911,214,453|99|
|Using parseInt(x, 10) - big number (10 len)|912,458,376|99|
|Using + - small number (2 len)|912,265,244|96|
|Using + - big number (10 len)|911,032,284|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:08:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":911214452.7617743,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":912458375.6351717,"samples":9},{"name":"Using + - small number (2 len)","opsSec":912265243.6307575,"samples":7},{"name":"Using + - big number (10 len)","opsSec":911032283.8627278,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,460,221|82|
|Using ? operator to avoid rejection|1,544,589|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:14:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1460221.0583516292,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1544589.4161642254,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|907,508,803|99|
|Raw usage underscore usage|907,797,306|98|
|Manipulating private properties using #|899,691,396|99|
|Manipulating private properties using underscore(_)|901,372,432|100|
|Manipulating private properties using Symbol|899,621,662|97|
|Manipulating private properties using PrivateSymbol|54,603,259|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:24:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":907508803.1715462,"samples":6},{"name":"Raw usage underscore usage","opsSec":907797305.7696706,"samples":6},{"name":"Manipulating private properties using #","opsSec":899691395.5745401,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":901372431.5820291,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":899621662.2992079,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":54603259.30518715,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,691,350|99|
|Adding property in the object creation - small object|5,705,121|94|
|Adding property after the function creation - small class|291,753|88|
|Adding property in the function creation - small class|296,120|91|
|Adding property after the class creation - small class|297,954|89|
|Adding property in the class creation - small class|296,482|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:34:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5691350.283463478,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5705121.122678225,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":291752.97877928294,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":296120.20634883083,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":297954.1875217565,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":296482.22375783033,"samples":4}]}-->

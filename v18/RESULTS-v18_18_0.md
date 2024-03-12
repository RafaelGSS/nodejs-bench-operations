## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,387,717|98|
|Using dot notation|820,158,304|99|
|Using define property (writable)|4,417,336|93|
|Using define property initialized (writable)|5,961,391|92|
|Using define property (getter)|2,205,950|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":822387717.1274515,"samples":7},{"name":"Using dot notation","opsSec":820158303.6003718,"samples":8},{"name":"Using define property (writable)","opsSec":4417335.7697541695,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5961390.916623704,"samples":5},{"name":"Using define property (getter)","opsSec":2205949.7583959256,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.007ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.304ms
new Array(length)|10,000|0.176ms
array.push|1,000,000|22.381ms
new Array(length)|1,000,000|14.622ms
array.push|100,000,000|936.237ms
new Array(length)|100,000,000|3,596.109ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.26ms
new Array(length)|10,000|3.221ms
array.push|1,000,000|50.132ms
new Array(length)|1,000,000|2.611ms
array.push|100,000,000|1,404.67ms
new Array(length)|100,000,000|4,094.333ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|580|86|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":579.9080621397493,"samples":3},{"name":"Array.from","opsSec":21.56547973611544,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|819,210,930|99|
|[async] async function|17,112,282|90|
|[async] function|349,045|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":819210930.2980201,"samples":6},{"name":"[async] async function","opsSec":17112281.512778845,"samples":6},{"name":"[async] function","opsSec":349045.0123767641,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,100|84|
|new Blob (1024)|676|82|
|text (128)|34,705|83|
|text (1024)|23,208|83|
|arrayBuffer (128)|35,655|81|
|arrayBuffer (1024)|22,422|77|
|slice (0, 64)|90,431|81|
|slice (0, 512)|52,274|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Blob (128)","opsSec":5100.359928169176,"samples":3},{"name":"new Blob (1024)","opsSec":675.617355924289,"samples":2},{"name":"text (128)","opsSec":34705.41892689879,"samples":4},{"name":"text (1024)","opsSec":23208.052142234355,"samples":4},{"name":"arrayBuffer (128)","opsSec":35655.41921197352,"samples":5},{"name":"arrayBuffer (1024)","opsSec":22422.271851139383,"samples":3},{"name":"slice (0, 64)","opsSec":90430.50026132587,"samples":3},{"name":"slice (0, 512)","opsSec":52274.2045574827,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|261,434|54|
|[True conditional] Using constructor name|202,328|90|
|[True conditional] Check if property is valid then instanceof |208,214|96|
|[False conditional] Using instanceof only|821,556,677|97|
|[False conditional] Using constructor name|821,208,484|92|
|[False conditional] Check if property is valid then instanceof |821,341,632|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":261434.32217343958,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202327.8366984411,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":208213.57467990994,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":821556676.6196833,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":821208484.383456,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":821341631.9251183,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,316|90|
|crypto.verify('RSA-SHA256')|6,292|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6315.59248954185,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":6291.6740804828905,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,489,441|94|
|fromUnixToISOString(new Date())|2,054,670|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2489440.6678603315,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2054669.7332449162,"samples":8}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|14,496|81|
|Intl.DateTimeFormat().format(new Date())|12,442|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,604|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,321|93|
|Reusing Intl.DateTimeFormat()|585,262|96|
|Date.toLocaleDateString()|724,337|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,640|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":14495.872000579862,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12442.235134704933,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14603.558266738159,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18320.920410554576,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":585261.5938734672,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":724337.4818229942,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16639.6398336633,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,079,823|95|
|Using brackets {}|1,107,705|95|
|Using '' + |1,082,998|98|
|Using date.toString()|1,215,877|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1079822.5885784945,"samples":6},{"name":"Using brackets {}","opsSec":1107704.971413636,"samples":6},{"name":"Using '' + ","opsSec":1082998.281076222,"samples":6},{"name":"Using date.toString()","opsSec":1215876.7367022478,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,350,183|95|
|Using delete property (proto: null)|21,212,217|93|
|Using delete property (cached proto: null)|3,446,767|95|
|Using undefined assignment|820,083,498|98|
|Using undefined assignment (proto: null)|23,421,400|94|
|Using undefined property (cached proto: null)|817,481,811|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":3350183.1691325437,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21212217.459804922,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3446766.5790709476,"samples":5},{"name":"Using undefined assignment","opsSec":820083497.961456,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23421399.549975622,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":817481811.1827663,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|254,289|53|
|NodeError|204,572|93|
|NodeError Range|204,662|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Error","opsSec":254288.6046250059,"samples":3},{"name":"NodeError","opsSec":204572.26307148245,"samples":3},{"name":"NodeError Range","opsSec":204661.65399204288,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,677,419|97|
|Function returning explicitly undefined|1,654,893|98|
|Function returning implicitly undefined|1,685,768|93|
|Function returning string|1,670,365|97|
|Function returning integer|1,671,717|97|
|Function returning float|1,689,899|98|
|Function returning functions|1,610,558|98|
|Function returning arrow functions|1,658,196|92|
|Function returning empty object|1,638,564|98|
|Function returning empty array|1,662,859|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Function returning null","opsSec":1677418.6861384856,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1654893.239130121,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1685768.0824300733,"samples":6},{"name":"Function returning string","opsSec":1670365.2441681598,"samples":6},{"name":"Function returning integer","opsSec":1671717.1605209196,"samples":6},{"name":"Function returning float","opsSec":1689898.9876584376,"samples":6},{"name":"Function returning functions","opsSec":1610557.5280583291,"samples":6},{"name":"Function returning arrow functions","opsSec":1658196.4541604184,"samples":7},{"name":"Function returning empty object","opsSec":1638564.0268838904,"samples":7},{"name":"Function returning empty array","opsSec":1662858.644440669,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|818,526,754|99|
|using Array.includes (first item)|818,870,425|95|
|Using raw comparison|821,241,163|96|
|Using raw comparison (first item)|819,470,644|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":818526754.4608446,"samples":6},{"name":"using Array.includes (first item)","opsSec":818870424.8480488,"samples":7},{"name":"Using raw comparison","opsSec":821241162.8785468,"samples":7},{"name":"Using raw comparison (first item)","opsSec":819470643.8653044,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,406,988|92|
|Using Object.getOwnPropertyNames()|91,820,061|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using Object.keys()","opsSec":89406988.49542616,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":91820061.40884088,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|22,937,818|96|
|Length = 10_000 - Array.at|23,762,405|98|
|Length = 1_000_000 - Array.at|23,652,034|99|
|Length = 100 - Array[length - 1]|820,851,592|97|
|Length = 10_000 - Array[length - 1]|819,805,634|96|
|Length = 1_000_000 - Array[length - 1]|819,282,339|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":22937817.541622233,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":23762404.582668517,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23652033.635704424,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":820851592.2493669,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":819805634.3617429,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":819282339.0645319,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,060,394|93|
|Object.create({})|1,510,157|87|
|Cached Empty.prototype|822,586,919|95|
|Empty.prototype|1,707,766|83|
|Empty class|1,086,890|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":77060394.26741771,"samples":7},{"name":"Object.create({})","opsSec":1510157.016759821,"samples":3},{"name":"Cached Empty.prototype","opsSec":822586919.1236625,"samples":7},{"name":"Empty.prototype","opsSec":1707765.8310936126,"samples":4},{"name":"Empty class","opsSec":1086889.680358634,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|820,050,824|98|
|Using optional chain (obj.field?.field2) (undefined)|821,571,964|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|821,812,478|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|814,513,831|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":820050824.3773988,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":821571964.0651621,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":821812478.2873055,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":814513831.2075303,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|237,882,061|97|
|Using parseInt(x, 10) - big number (10 len)|18,325,079|93|
|Using + - small number (2 len)|822,602,158|93|
|Using + - big number (10 len)|822,671,654|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":237882060.85073444,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18325078.989446796,"samples":4},{"name":"Using + - small number (2 len)","opsSec":822602158.3488803,"samples":7},{"name":"Using + - big number (10 len)","opsSec":822671654.1965803,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|833,395|82|
|Using ? operator to avoid rejection|865,919|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":833395.0146169462,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":865919.3557616409,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|444,689,152|94|
|Raw usage underscore usage|474,240,054|96|
|Manipulating private properties using #|380,025,689|90|
|Manipulating private properties using underscore(_)|325,142,928|93|
|Manipulating private properties using Symbol|327,749,115|93|
|Manipulating private properties using PrivateSymbol|47,677,352|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":444689151.8392871,"samples":5},{"name":"Raw usage underscore usage","opsSec":474240053.7833266,"samples":7},{"name":"Manipulating private properties using #","opsSec":380025689.24503607,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":325142928.27150273,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":327749115.1388897,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":47677351.76072754,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,491,724|98|
|Adding property in the object creation - small object|3,484,163|93|
|Adding property after the function creation - small class|203,583|87|
|Adding property in the function creation - small class|205,825|89|
|Adding property after the class creation - small class|170,935|86|
|Adding property in the class creation - small class|170,272|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3491723.8921312736,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3484163.0398826897,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":203583.3439995824,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":205825.34568411455,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":170934.53748576992,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":170272.17405325625,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|819,089,352|99|
|Getter|90,017,131|97|
|Method|818,057,914|100|
|DefineProperty (getter)|818,273,532|91|
|DefineProperty (getter & enumerable=false)|90,997,108|99|
|DefineProperty (getter & configurable=false)|819,173,740|99|
|DefineProperty (getter & enumerable=false & configurable=false)|91,602,749|97|
|DefineProperty (writable)|819,129,109|96|
|DefineProperty (writable & enumerable=false)|818,993,981|96|
|DefineProperty (writable & enumerable=false & configurable=false)|811,689,758|94|
|DefineProperties (getter)|91,519,471|96|
|DefineProperties (getter & enumerable=false)|86,247,065|91|
|DefineProperties (getter & enumerable=false & configurable=false)|58,962,559|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":819089351.60384,"samples":6},{"name":"Getter","opsSec":90017131.35352033,"samples":6},{"name":"Method","opsSec":818057913.8369898,"samples":7},{"name":"DefineProperty (getter)","opsSec":818273532.3308247,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":90997107.87119436,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":819173739.9034265,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":91602749.01926377,"samples":6},{"name":"DefineProperty (writable)","opsSec":819129108.8094292,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":818993980.7997813,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":811689758.3456777,"samples":8},{"name":"DefineProperties (getter)","opsSec":91519471.02141155,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":86247064.63258393,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":58962558.665282026,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|778,887,799|94|
|Setter|10,232,373|96|
|Method|767,131,508|90|
|DefineProperty (setter)|775,263,430|96|
|DefineProperty (setter & enumerable=false)|10,095,355|95|
|DefineProperty (setter & configurable=false)|10,087,746|97|
|DefineProperty (setter & enumerable=false & configurable=false)|9,743,252|94|
|DefineProperty (writable)|817,121,446|98|
|DefineProperty (writable & enumerable=false)|817,394,427|100|
|DefineProperty (writable & enumerable=false & configurable=false)|334,977,133|44|
|DefineProperties (setter)|111,317,917|88|
|DefineProperties (setter & enumerable=false)|10,208,155|96|
|DefineProperties (setter & enumerable=false & configurable=false)|10,231,200|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Setter (class)","opsSec":778887798.8595953,"samples":6},{"name":"Setter","opsSec":10232373.493726902,"samples":5},{"name":"Method","opsSec":767131507.6473124,"samples":6},{"name":"DefineProperty (setter)","opsSec":775263430.2904947,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10095354.987392826,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":10087746.182196626,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9743252.355306694,"samples":5},{"name":"DefineProperty (writable)","opsSec":817121445.771731,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":817394427.4287274,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":334977133.00910306,"samples":6},{"name":"DefineProperties (setter)","opsSec":111317916.91229966,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10208154.545330998,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10231199.809135694,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,174,456|89|
|Using replaceAll()|2,413,426|97|
|Using replaceAll(//g)|2,946,672|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3174456.313663545,"samples":5},{"name":"Using replaceAll()","opsSec":2413426.3723023073,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2946672.2498919177,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,565,727|88|
|{ ...object, __proto__: null }|23,220,793|90|
|{ ...object, newProp: true }|606,944|75|
|structuredClone|224,677|88|
|JSON.parse + JSON.stringify|158,483|89|
|loop + object.keys starting with {}|1,106,718|97|
|loop + object.keys starting with { __proto__: null }|642,193|94|
|loop + object.keys starting with { randomProp: true }|498,078|94|
|object.keys + reduce(FN, {})|470,257|95|
|object.keys + reduce(FN, { __proto__: null })|653,869|97|
|object.keys + reduce(FN, { newProp: true })|501,480|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":22565727.38542125,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":23220793.04908528,"samples":9},{"name":"{ ...object, newProp: true }","opsSec":606943.8998065691,"samples":3},{"name":"structuredClone","opsSec":224676.78414844265,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":158483.25615304886,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1106718.0133143978,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":642193.445793087,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":498077.8469232453,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":470256.9133924688,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":653868.7719954774,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":501480.2563341452,"samples":8}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|260,500|96|
|Sort using first char|1,194,729|96|
|Sort using localeCompare|1,119,964|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":260499.89920697024,"samples":4},{"name":"Sort using first char","opsSec":1194728.893336993,"samples":5},{"name":"Sort using localeCompare","opsSec":1119963.9969665394,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,899|93|
|{...smallObject} - Total keys: 2|102,353,762|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,192|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,893|96|
|{ ...bigObject, ...anotherBigObject }|1,180|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,926,914|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,426,001|98|
|{ ...smallObject, ...anotherSmallObject }|22,533,357|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1898.512860695621,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":102353761.88223565,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2192.120794995764,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5893.344876904025,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1180.0617218815084,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12926913.797756204,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33426000.517998293,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22533356.97810731,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,329|86|
|streams.web.Readable reading 1e3 * "some data"|551|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2329.46960759046,"samples":7},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":551.3308479300817,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,805|92|
|streams.web.WritableStream writing 1e3 * "some data"|1,669|66|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4804.561066900834,"samples":3},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1668.5730369669316,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|819,806,940|99|
|Using backtick (`)|819,821,013|96|
|Using array.join|11,416,874|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":819806940.2558787,"samples":6},{"name":"Using backtick (`)","opsSec":819821013.484086,"samples":6},{"name":"Using array.join","opsSec":11416873.984910969,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|821,611,165|97|
|Using indexof|821,647,292|96|
|Using RegExp.test|16,336,481|96|
|Using RegExp.text with cached regex pattern|16,968,128|96|
|Using new RegExp.test|3,533,319|96|
|Using new RegExp.test with cached regex pattern|3,959,302|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":821611165.4576256,"samples":6},{"name":"Using indexof","opsSec":821647291.712671,"samples":8},{"name":"Using RegExp.test","opsSec":16336480.835899271,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":16968128.4667644,"samples":6},{"name":"Using new RegExp.test","opsSec":3533318.807779178,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3959301.5992984693,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|157,847,759|95|
|Using this|164,682,683|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using super","opsSec":157847759.28610197,"samples":6},{"name":"Using this","opsSec":164682682.93881407,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,262,984|93|
|Date.now()|19,377,277|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11262984.447530711,"samples":5},{"name":"Date.now()","opsSec":19377276.889552742,"samples":6}]}-->

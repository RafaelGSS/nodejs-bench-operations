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
|Raw usage private field|444,006,247|93|
|Raw usage underscore usage|468,831,236|86|
|Manipulating private properties using #|377,156,978|86|
|Manipulating private properties using underscore(_)|332,174,223|91|
|Manipulating private properties using Symbol|336,303,659|90|
|Manipulating private properties using PrivateSymbol|47,355,571|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":444006247.4126848,"samples":5},{"name":"Raw usage underscore usage","opsSec":468831236.43509495,"samples":8},{"name":"Manipulating private properties using #","opsSec":377156978.1809142,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":332174222.50637186,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":336303659.42777556,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":47355570.91775989,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,485,262|98|
|Adding property in the object creation - small object|3,523,308|94|
|Adding property after the function creation - small class|202,008|90|
|Adding property in the function creation - small class|201,234|88|
|Adding property after the class creation - small class|171,041|86|
|Adding property in the class creation - small class|171,608|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3485261.723325689,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":3523308.155703917,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":202008.48245321124,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":201233.88726697277,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":171040.9354857288,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":171607.96834151322,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|818,693,075|98|
|Getter|91,744,587|96|
|Method|819,903,067|93|
|DefineProperty (getter)|820,541,338|99|
|DefineProperty (getter & enumerable=false)|91,450,026|95|
|DefineProperty (getter & configurable=false)|821,658,612|100|
|DefineProperty (getter & enumerable=false & configurable=false)|91,758,822|98|
|DefineProperty (writable)|821,127,152|96|
|DefineProperty (writable & enumerable=false)|818,657,836|89|
|DefineProperty (writable & enumerable=false & configurable=false)|568,066,117|70|
|DefineProperties (getter)|58,660,796|90|
|DefineProperties (getter & enumerable=false)|91,620,181|97|
|DefineProperties (getter & enumerable=false & configurable=false)|91,681,064|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":818693074.9767072,"samples":6},{"name":"Getter","opsSec":91744587.15475492,"samples":5},{"name":"Method","opsSec":819903067.429681,"samples":8},{"name":"DefineProperty (getter)","opsSec":820541338.0966654,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91450025.55723834,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":821658611.5083951,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":91758821.64653502,"samples":7},{"name":"DefineProperty (writable)","opsSec":821127152.2654372,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":818657836.245686,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":568066117.4947023,"samples":11},{"name":"DefineProperties (getter)","opsSec":58660795.761243545,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":91620180.70120479,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":91681064.22256383,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|774,279,285|96|
|Setter|9,990,594|92|
|Method|775,723,107|97|
|DefineProperty (setter)|775,521,655|94|
|DefineProperty (setter & enumerable=false)|9,877,269|96|
|DefineProperty (setter & configurable=false)|9,869,976|94|
|DefineProperty (setter & enumerable=false & configurable=false)|9,673,682|97|
|DefineProperty (writable)|816,457,205|91|
|DefineProperty (writable & enumerable=false)|546,767,879|67|
|DefineProperty (writable & enumerable=false & configurable=false)|146,862,812|83|
|DefineProperties (setter)|110,655,800|86|
|DefineProperties (setter & enumerable=false)|9,104,064|93|
|DefineProperties (setter & enumerable=false & configurable=false)|9,260,065|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":774279285.3209535,"samples":6},{"name":"Setter","opsSec":9990594.15684433,"samples":5},{"name":"Method","opsSec":775723107.0188408,"samples":8},{"name":"DefineProperty (setter)","opsSec":775521655.3034204,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9877269.398394072,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":9869976.06328901,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9673682.033820927,"samples":4},{"name":"DefineProperty (writable)","opsSec":816457205.4498817,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":546767879.3294234,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":146862811.71085763,"samples":6},{"name":"DefineProperties (setter)","opsSec":110655799.92531483,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9104064.199813442,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9260065.31158088,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,200,740|90|
|Using replaceAll()|2,426,438|97|
|Using replaceAll(//g)|2,939,084|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3200739.929021321,"samples":5},{"name":"Using replaceAll()","opsSec":2426438.0662110434,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2939084.0967092393,"samples":7}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,401,426|91|
|{ ...object, __proto__: null }|25,682,225|93|
|{ ...object, newProp: true }|683,198|86|
|structuredClone|254,979|94|
|JSON.parse + JSON.stringify|173,249|97|
|loop + object.keys starting with {}|1,151,296|98|
|loop + object.keys starting with { __proto__: null }|682,077|98|
|loop + object.keys starting with { randomProp: true }|531,508|95|
|object.keys + reduce(FN, {})|505,537|94|
|object.keys + reduce(FN, { __proto__: null })|680,316|96|
|object.keys + reduce(FN, { newProp: true })|527,630|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":24401425.800518636,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":25682225.08326208,"samples":8},{"name":"{ ...object, newProp: true }","opsSec":683197.6061266481,"samples":3},{"name":"structuredClone","opsSec":254979.0748491403,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":173248.6408421413,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1151296.0724754268,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":682076.5254949366,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":531508.4891014013,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":505536.8140789905,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":680316.3684585663,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":527630.2454871939,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|258,469|97|
|Sort using first char|1,208,274|96|
|Sort using localeCompare|1,105,870|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Sort using default","opsSec":258468.78816204492,"samples":3},{"name":"Sort using first char","opsSec":1208273.7626661747,"samples":7},{"name":"Sort using localeCompare","opsSec":1105870.0797746254,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,089|95|
|{...smallObject} - Total keys: 2|104,651,517|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,225|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,924|98|
|{ ...bigObject, ...anotherBigObject }|1,258|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,320,416|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,315,845|100|
|{ ...smallObject, ...anotherSmallObject }|22,848,705|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2089.1832947539833,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":104651517.31435445,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2224.7177467567603,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5924.009098910427,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1257.5640535667508,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13320415.69124889,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33315844.852006808,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22848705.45441844,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,423|86|
|streams.web.Readable reading 1e3 * "some data"|554|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2422.9851448193026,"samples":6},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":553.7120248609389,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,944|90|
|streams.web.WritableStream writing 1e3 * "some data"|1,384|71|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4944.465154648639,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1383.6482109516344,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|819,120,567|98|
|Using backtick (`)|819,455,903|94|
|Using array.join|11,307,796|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using + sign","opsSec":819120566.822824,"samples":6},{"name":"Using backtick (`)","opsSec":819455902.7428617,"samples":9},{"name":"Using array.join","opsSec":11307796.350091813,"samples":4}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|820,729,754|97|
|Using indexof|820,776,797|96|
|Using RegExp.test|16,064,031|95|
|Using RegExp.text with cached regex pattern|17,027,083|96|
|Using new RegExp.test|3,521,880|97|
|Using new RegExp.test with cached regex pattern|3,951,700|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":820729753.9337019,"samples":6},{"name":"Using indexof","opsSec":820776796.5191767,"samples":6},{"name":"Using RegExp.test","opsSec":16064031.003121888,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17027083.180890724,"samples":5},{"name":"Using new RegExp.test","opsSec":3521879.882157515,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3951699.586505572,"samples":5}]}-->

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

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|899,908,898|96|
|Using dot notation|860,681,249|95|
|Using define property (writable)|4,323,473|93|
|Using define property initialized (writable)|5,446,991|92|
|Using define property (getter)|2,241,496|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":899908897.8253125,"samples":6},{"name":"Using dot notation","opsSec":860681248.8331136,"samples":8},{"name":"Using define property (writable)","opsSec":4323473.232095003,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5446990.867419376,"samples":5},{"name":"Using define property (getter)","opsSec":2241495.529112959,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.008ms
array.push|1,000|0.052ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.466ms
new Array(length)|10,000|0.278ms
array.push|1,000,000|22.808ms
new Array(length)|1,000,000|6.171ms
array.push|100,000,000|984.897ms
new Array(length)|100,000,000|3,677.513ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.004ms
array.push|100|0.014ms
new Array(length)|100|0.012ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.026ms
array.push|10,000|9.947ms
new Array(length)|10,000|6.694ms
array.push|1,000,000|65.276ms
new Array(length)|1,000,000|3.264ms
array.push|100,000,000|1,136.858ms
new Array(length)|100,000,000|4,266.484ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|561|84|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":561.1173266569641,"samples":4},{"name":"Array.from","opsSec":21.37912191896306,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|899,096,511|97|
|[async] async function|16,172,748|86|
|[async] function|236,407|29|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":899096510.6362524,"samples":7},{"name":"[async] async function","opsSec":16172748.425458316,"samples":6},{"name":"[async] function","opsSec":236407.4015383957,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|10,506|91|
|new Blob (1024)|1,300|78|
|text (128)|30,019|79|
|text (1024)|14,412|86|
|arrayBuffer (128)|34,696|83|
|arrayBuffer (1024)|16,449|87|
|slice (0, 64)|245,090|74|
|slice (0, 512)|39,790|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Blob (128)","opsSec":10506.230873787701,"samples":5},{"name":"new Blob (1024)","opsSec":1300.0537136339867,"samples":2},{"name":"text (128)","opsSec":30018.957500091576,"samples":4},{"name":"text (1024)","opsSec":14411.632482846986,"samples":3},{"name":"arrayBuffer (128)","opsSec":34696.48304570666,"samples":5},{"name":"arrayBuffer (1024)","opsSec":16449.424465311913,"samples":4},{"name":"slice (0, 64)","opsSec":245089.56128858146,"samples":4},{"name":"slice (0, 512)","opsSec":39789.898816241024,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|403,027|82|
|[True conditional] Using constructor name|397,053|82|
|[True conditional] Check if property is valid then instanceof |396,977|81|
|[False conditional] Using instanceof only|904,445,287|100|
|[False conditional] Using constructor name|902,897,436|94|
|[False conditional] Check if property is valid then instanceof |901,915,620|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":403026.8280751001,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":397052.518306871,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":396976.96255020285,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":904445286.5749096,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":902897435.7147623,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":901915619.5536512,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|27,781|90|
|crypto.verify('RSA-SHA256')|27,090|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":27781.46527192896,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":27090.21227512395,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,382,144|91|
|fromUnixToISOString(new Date())|1,955,050|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2382143.596518516,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1955050.268930287,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,847|81|
|Intl.DateTimeFormat().format(new Date())|10,841|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,093|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,073|76|
|Reusing Intl.DateTimeFormat()|613,928|83|
|Date.toLocaleDateString()|615,406|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,338|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":9847.311157901442,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10840.86481618235,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13092.980656842452,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10073.186166166146,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":613927.6097228979,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":615406.4002533448,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13337.8838018848,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,017,288|96|
|Using brackets {}|1,047,682|92|
|Using '' + |1,052,563|97|
|Using date.toString()|1,150,498|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1017288.0013208315,"samples":5},{"name":"Using brackets {}","opsSec":1047681.9096217654,"samples":5},{"name":"Using '' + ","opsSec":1052563.4999317701,"samples":5},{"name":"Using date.toString()","opsSec":1150498.219382242,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,407,091|97|
|Using delete property (proto: null)|17,954,606|91|
|Using delete property (cached proto: null)|3,418,955|96|
|Using undefined assignment|898,052,782|96|
|Using undefined assignment (proto: null)|19,877,396|95|
|Using undefined property (cached proto: null)|857,737,284|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3407091.108750856,"samples":4},{"name":"Using delete property (proto: null)","opsSec":17954606.088481624,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3418955.284906991,"samples":6},{"name":"Using undefined assignment","opsSec":898052781.959588,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":19877395.727049008,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":857737283.900238,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|386,495|83|
|NodeError|402,040|90|
|NodeError Range|390,162|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":386495.4018562595,"samples":3},{"name":"NodeError","opsSec":402040.48683248466,"samples":4},{"name":"NodeError Range","opsSec":390162.4420719369,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,579,256|93|
|Function returning explicitly undefined|1,586,216|97|
|Function returning implicitly undefined|1,600,187|97|
|Function returning string|1,593,252|96|
|Function returning integer|1,609,154|95|
|Function returning float|1,582,968|96|
|Function returning functions|1,564,922|93|
|Function returning arrow functions|1,571,590|97|
|Function returning empty object|1,586,111|96|
|Function returning empty array|1,571,789|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1579255.7293208863,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1586216.073736734,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1600186.7077897645,"samples":9},{"name":"Function returning string","opsSec":1593251.5634356327,"samples":6},{"name":"Function returning integer","opsSec":1609153.7434571323,"samples":7},{"name":"Function returning float","opsSec":1582967.5727950316,"samples":8},{"name":"Function returning functions","opsSec":1564922.3099382112,"samples":6},{"name":"Function returning arrow functions","opsSec":1571590.4728822068,"samples":7},{"name":"Function returning empty object","opsSec":1586110.838049232,"samples":6},{"name":"Function returning empty array","opsSec":1571789.3802609995,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|892,210,934|92|
|using Array.includes (first item)|898,815,308|97|
|Using raw comparison|900,410,597|99|
|Using raw comparison (first item)|896,699,853|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":892210934.0561348,"samples":6},{"name":"using Array.includes (first item)","opsSec":898815308.2660207,"samples":7},{"name":"Using raw comparison","opsSec":900410597.3258902,"samples":8},{"name":"Using raw comparison (first item)","opsSec":896699852.7538928,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,753,234|91|
|Using Object.getOwnPropertyNames()|93,156,677|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":87753233.81768852,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":93156677.11782323,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|900,574,057|97|
|Length = 10_000 - Array[length - 1]|902,487,569|95|
|Length = 1_000_000 - Array[length - 1]|901,162,543|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":900574057.4522367,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":902487568.7050117,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":901162543.4276586,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|60,711,812|94|
|Object.create({})|1,695,028|79|
|Cached Empty.prototype|899,290,849|100|
|Empty.prototype|2,087,033|85|
|Empty class|1,270,699|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":60711811.88676614,"samples":5},{"name":"Object.create({})","opsSec":1695028.2847122508,"samples":3},{"name":"Cached Empty.prototype","opsSec":899290849.062475,"samples":5},{"name":"Empty.prototype","opsSec":2087032.9091849274,"samples":3},{"name":"Empty class","opsSec":1270698.6144019316,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|896,696,956|97|
|Using optional chain (obj.field?.field2) (undefined)|902,243,181|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|901,367,825|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|902,150,064|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":896696955.6574122,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":902243180.770061,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":901367825.2942699,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":902150064.2682697,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|221,722,071|90|
|Using parseInt(x, 10) - big number (10 len)|16,884,405|97|
|Using + - small number (2 len)|896,942,988|96|
|Using + - big number (10 len)|897,295,308|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":221722071.45290834,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16884404.8588995,"samples":6},{"name":"Using + - small number (2 len)","opsSec":896942988.4011568,"samples":6},{"name":"Using + - big number (10 len)","opsSec":897295307.63062,"samples":10}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|905,191|78|
|Using ? operator to avoid rejection|1,009,157|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:02:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":905190.941156408,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1009157.1505324359,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|11,009,352|93|
|Raw usage underscore usage|8,621,454|95|
|Manipulating private properties using #|3,345,566|92|
|Manipulating private properties using underscore(_)|850,222,828|99|
|Manipulating private properties using Symbol|847,132,629|96|
|Manipulating private properties using PrivateSymbol|43,753,841|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":11009351.562174743,"samples":7},{"name":"Raw usage underscore usage","opsSec":8621453.993635708,"samples":6},{"name":"Manipulating private properties using #","opsSec":3345566.1078498084,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":850222827.5213095,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":847132628.8709295,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":43753841.142084636,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,166,109|94|
|Adding property in the object creation - small object|2,198,270|94|
|Adding property after the function creation - small class|208,378|87|
|Adding property in the function creation - small class|210,254|90|
|Adding property after the class creation - small class|181,243|86|
|Adding property in the class creation - small class|181,138|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2166108.982583995,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2198269.974985217,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":208377.8271378479,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":210253.86272911658,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":181243.0404829212,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":181137.62892828917,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|895,444,884|94|
|Getter|80,582,903|92|
|Method|896,232,798|95|
|DefineProperty (getter)|897,887,027|98|
|DefineProperty (getter & enumerable=false)|79,836,154|92|
|DefineProperty (getter & configurable=false)|899,585,511|99|
|DefineProperty (getter & enumerable=false & configurable=false)|81,043,130|97|
|DefineProperty (writable)|756,289,835|84|
|DefineProperty (writable & enumerable=false)|110,166,767|84|
|DefineProperty (writable & enumerable=false & configurable=false)|113,463,523|86|
|DefineProperties (getter)|49,093,803|93|
|DefineProperties (getter & enumerable=false)|80,911,381|97|
|DefineProperties (getter & enumerable=false & configurable=false)|80,585,726|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":895444883.5072469,"samples":6},{"name":"Getter","opsSec":80582902.6168457,"samples":6},{"name":"Method","opsSec":896232797.6997184,"samples":8},{"name":"DefineProperty (getter)","opsSec":897887026.7430017,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":79836153.50902006,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":899585511.0247027,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":81043129.6057655,"samples":5},{"name":"DefineProperty (writable)","opsSec":756289835.0090395,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":110166766.88463825,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":113463522.9411841,"samples":4},{"name":"DefineProperties (getter)","opsSec":49093803.221881725,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":80911381.17744036,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":80585725.66626428,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|769,459,679|96|
|Setter|9,024,446|96|
|Method|689,303,857|86|
|DefineProperty (setter)|776,994,717|98|
|DefineProperty (setter & enumerable=false)|8,976,112|97|
|DefineProperty (setter & configurable=false)|8,653,663|98|
|DefineProperty (setter & enumerable=false & configurable=false)|9,014,554|97|
|DefineProperty (writable)|658,839,735|70|
|DefineProperty (writable & enumerable=false)|115,808,653|85|
|DefineProperty (writable & enumerable=false & configurable=false)|117,184,412|89|
|DefineProperties (setter)|85,681,213|86|
|DefineProperties (setter & enumerable=false)|8,678,895|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,860,657|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":769459678.5401291,"samples":6},{"name":"Setter","opsSec":9024446.315770188,"samples":6},{"name":"Method","opsSec":689303856.5486939,"samples":5},{"name":"DefineProperty (setter)","opsSec":776994716.6634121,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8976111.839795904,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8653663.075518038,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9014554.11943455,"samples":6},{"name":"DefineProperty (writable)","opsSec":658839735.133146,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":115808653.1083763,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":117184412.18636347,"samples":6},{"name":"DefineProperties (setter)","opsSec":85681213.33649954,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8678894.590890443,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8860656.814375669,"samples":8}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,159,577|94|
|Using replaceAll()|2,719,892|95|
|Using replaceAll(//g)|2,805,029|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3159576.5046655773,"samples":6},{"name":"Using replaceAll()","opsSec":2719892.249766199,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2805028.6439195513,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,304,284|85|
|{ ...object, __proto__: null }|19,122,513|97|
|{ ...object, newProp: true }|716,336|87|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|169,213|98|
|loop + object.keys starting with {}|502,286|97|
|loop + object.keys starting with { __proto__: null }|704,840|98|
|loop + object.keys starting with { randomProp: true }|525,547|97|
|object.keys + reduce(FN, {})|511,591|97|
|object.keys + reduce(FN, { __proto__: null })|710,314|97|
|object.keys + reduce(FN, { newProp: true })|530,624|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{ ...object }","opsSec":18304284.128688503,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":19122512.556097608,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":716335.9365587622,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":169213.45797260114,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":502286.22041986044,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":704840.1629067339,"samples":8},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":525547.1537888824,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":511590.90961997287,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":710313.5361262271,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":530623.8005678037,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|243,059|96|
|Sort using first char|1,201,389|96|
|Sort using localeCompare|649,573|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":243058.74758756236,"samples":7},{"name":"Sort using first char","opsSec":1201388.5218016498,"samples":6},{"name":"Sort using localeCompare","opsSec":649572.9920908752,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,879|86|
|{...smallObject} - Total keys: 2|98,990,084|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,217|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,259|100|
|{ ...bigObject, ...anotherBigObject }|1,166|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,931,299|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,411,772|96|
|{ ...smallObject, ...anotherSmallObject }|23,649,018|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1878.897937709861,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":98990084.36820747,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2216.62132967653,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6259.167066006461,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1166.2368508548536,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13931298.958567893,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33411772.322400086,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23649017.936950237,"samples":6}]}-->



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|846,450,005|95|
|Using backtick (`)|845,635,522|93|
|Using array.join|11,568,231|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:43:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":846450005.4163493,"samples":7},{"name":"Using backtick (`)","opsSec":845635522.0888809,"samples":6},{"name":"Using array.join","opsSec":11568230.705848597,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,210,832|99|
|Using indexof|846,752,253|96|
|Using RegExp.test|16,428,218|99|
|Using RegExp.text with cached regex pattern|16,985,902|99|
|Using new RegExp.test|4,895,095|95|
|Using new RegExp.test with cached regex pattern|5,954,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:44:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":17210831.740558516,"samples":6},{"name":"Using indexof","opsSec":846752252.6599853,"samples":7},{"name":"Using RegExp.test","opsSec":16428217.644120723,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":16985901.951608106,"samples":5},{"name":"Using new RegExp.test","opsSec":4895095.097784198,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5954897.874729524,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|158,989,270|89|
|Using this|163,976,869|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":158989269.752552,"samples":6},{"name":"Using this","opsSec":163976868.53811935,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,783,602|89|
|Date.now()|20,973,403|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:47:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":10783601.896675928,"samples":5},{"name":"Date.now()","opsSec":20973402.680272274,"samples":5}]}-->

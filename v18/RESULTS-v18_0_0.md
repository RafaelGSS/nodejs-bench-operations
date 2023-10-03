## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,006,544|96|
|Using dot notation|597,173,877|92|
|Using define property (writable)|3,332,385|97|
|Using define property initialized (writable)|4,172,947|93|
|Using define property (getter)|1,620,171|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.033ms
new Array(length)|100|0.011ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.622ms
new Array(length)|10,000|0.281ms
array.push|1,000,000|42.108ms
new Array(length)|1,000,000|23.406ms
array.push|100,000,000|2,384.264ms
new Array(length)|100,000,000|5,801.057ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.018ms
new Array(length)|100|0.013ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.681ms
new Array(length)|10,000|5.025ms
array.push|1,000,000|393.976ms
new Array(length)|1,000,000|5.168ms
array.push|100,000,000|3,163.09ms
new Array(length)|100,000,000|6,426.649ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:03 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|294|82|
|Array.from|14|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:44 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,298|86|
|new Blob (1024)|421|74|
|text (128)|24,593|83|
|text (1024)|10,699|80|
|arrayBuffer (128)|27,754|85|
|arrayBuffer (1024)|11,979|87|
|slice (0, 64)|54,607|83|
|slice (0, 512)|16,013|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:56:00 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,177|54|
|[True conditional] Using constructor name|128,558|94|
|[True conditional] Check if property is valid then instanceof |130,077|92|
|[False conditional] Using instanceof only|591,702,150|94|
|[False conditional] Using constructor name|593,045,012|94|
|[False conditional] Check if property is valid then instanceof |592,495,938|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:31 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|1,206|90|
|crypto.verify('RSA-SHA256')|1,265|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:24 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,754,959|97|
|fromUnixToISOString(new Date())|1,401,369|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:39 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,114|80|
|Intl.DateTimeFormat().format(new Date())|7,744|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,697|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,332|95|
|Reusing Intl.DateTimeFormat()|331,966|78|
|Date.toLocaleDateString()|418,830|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,503|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:11 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|674,183|97|
|Using brackets {}|673,613|97|
|Using '' + |678,975|96|
|Using date.toString()|740,522|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:51 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,851,895|94|
|Using undefined assignment|570,289,108|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:35 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|133,867|53|
|NodeError|104,336|83|
|NodeError Range|104,295|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:43 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,226,160|88|
|Function returning explicitly undefined|1,310,909|92|
|Function returning implicitly undefined|1,310,728|81|
|Function returning string|1,344,703|89|
|Function returning integer|1,322,492|84|
|Function returning float|1,304,243|88|
|Function returning functions|1,223,852|86|
|Function returning arrow functions|1,198,430|93|
|Function returning empty object|1,236,873|87|
|Function returning empty array|1,181,808|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:48 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,448,828|94|
|using Array.includes (first item)|92,404,527|94|
|Using raw comparison|593,513,469|96|
|Using raw comparison (first item)|593,023,828|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:36 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,117,942|88|
|Using Object.getOwnPropertyNames()|37,675,638|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:39 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,659,378|86|
|Length = 10_000 - Array.at|14,607,556|83|
|Length = 1_000_000 - Array.at|14,438,821|90|
|Length = 100 - Array[length - 1]|699,898,166|86|
|Length = 10_000 - Array[length - 1]|672,206,851|82|
|Length = 1_000_000 - Array[length - 1]|697,900,612|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:28 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,318,934|93|
|Object.create({})|1,361,568|86|
|Cached Empty.prototype|593,025,581|97|
|Empty.prototype|1,432,948|79|
|Empty class|868,628|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:04 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|586,471,866|98|
|Using optional chain (obj.field?.field2) (undefined)|593,634,165|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,476,866|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,706,068|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:45 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|221,080,796|91|
|Using parseInt(x, 10) - big number (10 len)|14,853,606|98|
|Using + - small number (2 len)|594,215,120|98|
|Using + - big number (10 len)|593,413,734|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:12 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|581,419|73|
|Using ? operator to avoid rejection|617,734|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:56 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|232,687,359|93|
|Raw usage underscore usage|228,893,907|91|
|Manipulating private properties using #|154,865,409|91|
|Manipulating private properties using underscore(_)|133,079,644|96|
|Manipulating private properties using Symbol|134,761,397|85|
|Manipulating private properties using PrivateSymbol|27,974,759|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:35 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,560,598|97|
|Adding property in the object creation - small object|2,584,989|96|
|Adding property after the function creation - small class|180,032|87|
|Adding property in the function creation - small class|179,757|84|
|Adding property after the class creation - small class|146,222|79|
|Adding property in the class creation - small class|148,717|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:36 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|778,322,906|85|
|Getter|57,278,361|87|
|Method|715,703,595|78|
|DefineProperty (getter)|770,324,241|83|
|DefineProperty (getter & enumerable=false)|55,925,036|82|
|DefineProperty (getter & configurable=false)|762,276,018|82|
|DefineProperty (getter & enumerable=false & configurable=false)|58,678,845|87|
|DefineProperty (writable)|796,734,592|88|
|DefineProperty (writable & enumerable=false)|802,919,181|86|
|DefineProperty (writable & enumerable=false & configurable=false)|302,891,425|35|
|DefineProperties (getter)|35,963,981|84|
|DefineProperties (getter & enumerable=false)|36,880,477|83|
|DefineProperties (getter & enumerable=false & configurable=false)|36,346,514|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:13 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|574,523,237|96|
|Setter|7,966,455|95|
|Method|582,211,638|97|
|DefineProperty (setter)|581,772,639|96|
|DefineProperty (setter & enumerable=false)|8,069,481|96|
|DefineProperty (setter & configurable=false)|7,931,415|99|
|DefineProperty (setter & enumerable=false & configurable=false)|8,028,801|97|
|DefineProperty (writable)|592,400,589|95|
|DefineProperty (writable & enumerable=false)|589,163,067|91|
|DefineProperty (writable & enumerable=false & configurable=false)|104,613,123|79|
|DefineProperties (setter)|86,631,226|81|
|DefineProperties (setter & enumerable=false)|8,044,651|97|
|DefineProperties (setter & enumerable=false & configurable=false)|8,011,516|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:44 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,694,147|93|
|Using replaceAll()|1,586,920|93|
|Using replaceAll(//g)|1,522,007|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:22 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,155,075|93|
|{ ...object, __proto__: null }|15,521,437|95|
|{ ...object, newProp: true }|502,025|78|
|structuredClone|174,908|95|
|JSON.parse + JSON.stringify|146,068|92|
|loop + object.keys starting with {}|659,059|96|
|loop + object.keys starting with { __proto__: null }|435,006|96|
|loop + object.keys starting with { randomProp: true }|337,404|98|
|object.keys + reduce(FN, {})|317,860|97|
|object.keys + reduce(FN, { __proto__: null })|434,637|98|
|object.keys + reduce(FN, { newProp: true })|334,208|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:15 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,624|81|
|Adding property in the object creation - small object|2,211,681|89|
|Adding property after the function creation - small class|144,924|75|
|Adding property in the function creation - small class|147,009|75|
|Adding property after the class creation - small class|121,193|77|
|Adding property in the class creation - small class|113,712|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:40 GMT+0000 (Coordinated Universal Time)
</details>


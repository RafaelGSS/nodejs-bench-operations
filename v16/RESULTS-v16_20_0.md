## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|701,664,605|84|
|Using dot notation|589,107,824|84|
|Using define property (writable)|2,394,709|90|
|Using define property initialized (writable)|3,035,620|86|
|Using define property (getter)|1,213,715|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:41 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.005ms
array.push|100|0.028ms
new Array(length)|100|0.012ms
array.push|1,000|0.116ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|37.798ms
new Array(length)|1,000,000|6.235ms
array.push|100,000,000|1,572.66ms
new Array(length)|100,000,000|4,315.433ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.075ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.583ms
new Array(length)|10,000|4.342ms
array.push|1,000,000|322.767ms
new Array(length)|1,000,000|4.359ms
array.push|100,000,000|2,153.436ms
new Array(length)|100,000,000|4,702.79ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|362|83|
|Array.from|16|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:42 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,201|90|
|new Blob (1024)|395|68|
|text (128)|26,265|72|
|text (1024)|17,689|85|
|arrayBuffer (128)|32,214|87|
|arrayBuffer (1024)|20,869|87|
|slice (0, 64)|62,772|82|
|slice (0, 512)|27,599|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:57 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|198,442|59|
|[True conditional] Using constructor name|155,958|94|
|[True conditional] Check if property is valid then instanceof |158,640|91|
|[False conditional] Using instanceof only|716,507,123|98|
|[False conditional] Using constructor name|717,539,742|96|
|[False conditional] Check if property is valid then instanceof |717,715,400|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:31 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,010|93|
|crypto.verify('RSA-SHA256')|20,356|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:20 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,532,645|93|
|fromUnixToISOString(new Date())|1,319,442|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,675|82|
|Intl.DateTimeFormat().format(new Date())|8,819|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,598|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,567|79|
|Reusing Intl.DateTimeFormat()|360,376|95|
|Date.toLocaleDateString()|428,370|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,935|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:07 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|647,651|95|
|Using brackets {}|649,796|94|
|Using '' + |648,633|94|
|Using date.toString()|689,497|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:49 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,346,004|93|
|Using undefined assignment|587,634,124|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:25 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,890,183|87|
|Using undefined assignment|596,840,812|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:04 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,890,183|87|
|Using undefined assignment|596,840,812|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:04 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,890,183|87|
|Using undefined assignment|596,840,812|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:04 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,890,183|87|
|Using undefined assignment|596,840,812|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:04 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,890,183|87|
|Using undefined assignment|596,840,812|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:04 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,007,584|91|
|Object.create({})|1,319,441|79|
|Cached Empty.prototype|713,108,585|95|
|Empty.prototype|1,361,130|73|
|Empty class|896,639|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:30:05 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,007,584|91|
|Object.create({})|1,319,441|79|
|Cached Empty.prototype|713,108,585|95|
|Empty.prototype|1,361,130|73|
|Empty class|896,639|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:30:05 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,007,584|91|
|Object.create({})|1,319,441|79|
|Cached Empty.prototype|713,108,585|95|
|Empty.prototype|1,361,130|73|
|Empty class|896,639|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:30:05 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,007,584|91|
|Object.create({})|1,319,441|79|
|Cached Empty.prototype|713,108,585|95|
|Empty.prototype|1,361,130|73|
|Empty class|896,639|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:30:05 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,007,584|91|
|Object.create({})|1,319,441|79|
|Cached Empty.prototype|713,108,585|95|
|Empty.prototype|1,361,130|73|
|Empty class|896,639|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:30:05 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,597,173|98|
|Adding property in the object creation - small object|2,592,225|98|
|Adding property after the function creation - small class|162,982|90|
|Adding property in the function creation - small class|164,083|86|
|Adding property after the class creation - small class|138,199|84|
|Adding property in the class creation - small class|137,653|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:32 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,597,173|98|
|Adding property in the object creation - small object|2,592,225|98|
|Adding property after the function creation - small class|162,982|90|
|Adding property in the function creation - small class|164,083|86|
|Adding property after the class creation - small class|138,199|84|
|Adding property in the class creation - small class|137,653|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:32 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|638,390,549|83|
|Setter|6,172,243|81|
|Method|621,050,032|83|
|DefineProperty (setter)|641,695,085|77|
|DefineProperty (setter & enumerable=false)|6,226,453|84|
|DefineProperty (setter & configurable=false)|6,367,640|88|
|DefineProperty (setter & enumerable=false & configurable=false)|6,474,123|89|
|DefineProperty (writable)|880,691,104|88|
|DefineProperty (writable & enumerable=false)|847,569,066|83|
|DefineProperty (writable & enumerable=false & configurable=false)|838,228,511|85|
|DefineProperties (setter)|697,071,169|70|
|DefineProperties (setter & enumerable=false)|6,702,259|86|
|DefineProperties (setter & enumerable=false & configurable=false)|7,256,372|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:47:44 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|638,390,549|83|
|Setter|6,172,243|81|
|Method|621,050,032|83|
|DefineProperty (setter)|641,695,085|77|
|DefineProperty (setter & enumerable=false)|6,226,453|84|
|DefineProperty (setter & configurable=false)|6,367,640|88|
|DefineProperty (setter & enumerable=false & configurable=false)|6,474,123|89|
|DefineProperty (writable)|880,691,104|88|
|DefineProperty (writable & enumerable=false)|847,569,066|83|
|DefineProperty (writable & enumerable=false & configurable=false)|838,228,511|85|
|DefineProperties (setter)|697,071,169|70|
|DefineProperties (setter & enumerable=false)|6,702,259|86|
|DefineProperties (setter & enumerable=false & configurable=false)|7,256,372|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:47:44 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


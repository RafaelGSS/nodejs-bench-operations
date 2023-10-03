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
new Array(length)|100|0.011ms
array.push|1,000|0.119ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.399ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|38.222ms
new Array(length)|1,000,000|6.516ms
array.push|100,000,000|1,555.573ms
new Array(length)|100,000,000|4,294.604ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.075ms
new Array(length)|100|0.01ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.562ms
new Array(length)|10,000|4.304ms
array.push|1,000,000|323.04ms
new Array(length)|1,000,000|5.058ms
array.push|100,000,000|2,129.08ms
new Array(length)|100,000,000|4,664.481ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:19 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|353|84|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:52:53 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Sep 22 2023 10:13:59 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|595,334,865|97|
|Using dot notation|595,988,209|97|
|Using define property (writable)|3,126,507|95|
|Using define property initialized (writable)|3,997,365|94|
|Using define property (getter)|1,556,683|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:02:59 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|595,334,865|97|
|Using dot notation|595,988,209|97|
|Using define property (writable)|3,126,507|95|
|Using define property initialized (writable)|3,997,365|94|
|Using define property (getter)|1,556,683|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:02:59 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,562,274|96|
|fromUnixToISOString(new Date())|1,355,011|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,562,274|96|
|fromUnixToISOString(new Date())|1,355,011|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,562,274|96|
|fromUnixToISOString(new Date())|1,355,011|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
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


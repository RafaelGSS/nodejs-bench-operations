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
|Intl.DateTimeFormat().format(Date.now())|7,800|81|
|Intl.DateTimeFormat().format(new Date())|8,398|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,698|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,727|78|
|Reusing Intl.DateTimeFormat()|475,517|97|
|Date.toLocaleDateString()|488,217|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,724|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:52 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,800|81|
|Intl.DateTimeFormat().format(new Date())|8,398|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,698|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,727|78|
|Reusing Intl.DateTimeFormat()|475,517|97|
|Date.toLocaleDateString()|488,217|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,724|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:52 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,800|81|
|Intl.DateTimeFormat().format(new Date())|8,398|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,698|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,727|78|
|Reusing Intl.DateTimeFormat()|475,517|97|
|Date.toLocaleDateString()|488,217|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,724|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:52 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,800|81|
|Intl.DateTimeFormat().format(new Date())|8,398|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,698|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,727|78|
|Reusing Intl.DateTimeFormat()|475,517|97|
|Date.toLocaleDateString()|488,217|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,724|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:52 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,800|81|
|Intl.DateTimeFormat().format(new Date())|8,398|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,698|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,727|78|
|Reusing Intl.DateTimeFormat()|475,517|97|
|Date.toLocaleDateString()|488,217|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,724|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:52 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,023,414|93|
|using Array.includes (first item)|92,089,875|90|
|Using raw comparison|590,353,191|96|
|Using raw comparison (first item)|591,916,442|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:23:50 GMT+0000 (Coordinated Universal Time)
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


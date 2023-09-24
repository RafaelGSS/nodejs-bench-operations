## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|709,446,731|97|
|Using dot notation|711,619,204|99|
|Using define property (writable)|3,004,342|99|
|Using define property initialized (writable)|3,709,626|96|
|Using define property (getter)|1,509,242|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:42:12 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.014ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.517ms
new Array(length)|10,000|0.298ms
array.push|1,000,000|37.642ms
new Array(length)|1,000,000|25.174ms
array.push|100,000,000|2,508.53ms
new Array(length)|100,000,000|6,008.5ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.024ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.072ms
array.push|10,000|0.833ms
new Array(length)|10,000|5.601ms
array.push|1,000,000|398.39ms
new Array(length)|1,000,000|5.688ms
array.push|100,000,000|3,227.077ms
new Array(length)|100,000,000|6,893.427ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:35 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|83|
|Array.from|14|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:46 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Sep 22 2023 10:14:05 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|83|
|Array.from|14|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:46 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|83|
|Array.from|14|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:46 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|83|
|Array.from|14|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:46 GMT+0000 (Coordinated Universal Time)
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


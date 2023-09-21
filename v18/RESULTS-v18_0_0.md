## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|584,391,135|90|
|Using dot notation|571,791,417|91|
|Using define property (writable)|2,429,718|93|
|Using define property initialized (writable)|3,099,675|89|
|Using define property (getter)|1,274,780|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:43:02 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|592,421,729|89|
|Using dot notation|599,469,004|94|
|Using define property (writable)|2,542,468|89|
|Using define property initialized (writable)|3,154,773|90|
|Using define property (getter)|1,278,280|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:04 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|592,421,729|89|
|Using dot notation|599,469,004|94|
|Using define property (writable)|2,542,468|89|
|Using define property initialized (writable)|3,154,773|90|
|Using define property (getter)|1,278,280|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:04 GMT+0000 (Coordinated Universal Time)
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




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:29 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:32 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|596,717,732|95|
|Using dot notation|593,283,768|94|
|Using define property (writable)|3,002,955|94|
|Using define property initialized (writable)|4,133,444|96|
|Using define property (getter)|1,650,457|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.006ms
array.push|100|0.042ms
new Array(length)|100|0.015ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.471ms
new Array(length)|10,000|3.215ms
array.push|1,000,000|41.878ms
new Array(length)|1,000,000|10.499ms
array.push|100,000,000|2,051.068ms
new Array(length)|100,000,000|5,465.77ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.103ms
new Array(length)|100|0.011ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.022ms
array.push|10,000|8.452ms
new Array(length)|10,000|0.022ms
array.push|1,000,000|29.086ms
new Array(length)|1,000,000|9.622ms
array.push|100,000,000|2,731.126ms
new Array(length)|100,000,000|5,698.497ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:23 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|277|76|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:52:55 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Sep 22 2023 10:14:01 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|247|63|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:53 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|247|63|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:53 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|247|63|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:53 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,327|81|
|Intl.DateTimeFormat().format(new Date())|6,925|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,684|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,314|90|
|Reusing Intl.DateTimeFormat()|434,446|92|
|Date.toLocaleDateString()|546,679|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,993|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:53 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,327|81|
|Intl.DateTimeFormat().format(new Date())|6,925|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,684|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,314|90|
|Reusing Intl.DateTimeFormat()|434,446|92|
|Date.toLocaleDateString()|546,679|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,993|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:53 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,327|81|
|Intl.DateTimeFormat().format(new Date())|6,925|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,684|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,314|90|
|Reusing Intl.DateTimeFormat()|434,446|92|
|Date.toLocaleDateString()|546,679|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,993|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:53 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,327|81|
|Intl.DateTimeFormat().format(new Date())|6,925|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,684|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,314|90|
|Reusing Intl.DateTimeFormat()|434,446|92|
|Date.toLocaleDateString()|546,679|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,993|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:53 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,422,671|92|
|Function returning explicitly undefined|1,432,214|92|
|Function returning implicitly undefined|1,430,290|94|
|Function returning string|1,417,704|97|
|Function returning integer|1,408,747|97|
|Function returning float|1,407,494|94|
|Function returning functions|1,385,284|96|
|Function returning arrow functions|1,427,351|97|
|Function returning empty object|1,430,841|94|
|Function returning empty array|1,423,056|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:21:11 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|713,032,824|91|
|Using dot notation|598,304,259|90|
|Using define property (writable)|2,330,301|89|
|Using define property initialized (writable)|3,137,284|94|
|Using define property (getter)|1,302,017|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:57 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|594,913,213|98|
|Using dot notation|602,691,493|98|
|Using define property (writable)|3,057,776|96|
|Using define property initialized (writable)|4,137,974|97|
|Using define property (getter)|1,658,898|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.012ms
array.push|100|0.041ms
new Array(length)|100|0.015ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.485ms
new Array(length)|10,000|0.467ms
array.push|1,000,000|35.389ms
new Array(length)|1,000,000|16.305ms
array.push|100,000,000|1,942.054ms
new Array(length)|100,000,000|5,648.946ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.099ms
new Array(length)|100|0.012ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.461ms
new Array(length)|10,000|0.211ms
array.push|1,000,000|22.644ms
new Array(length)|1,000,000|10.564ms
array.push|100,000,000|2,627.734ms
new Array(length)|100,000,000|5,982.561ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:19 GMT+0000 (Coordinated Universal Time)
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


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,256,252|94|
|Using replaceAll()|2,098,714|99|
|Using replaceAll(//g)|1,949,168|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:34 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:31 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:48 GMT+0000 (Coordinated Universal Time)
</details>


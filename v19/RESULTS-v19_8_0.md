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
array.push|10|0.016ms
new Array(length)|10|0.006ms
array.push|100|0.043ms
new Array(length)|100|0.017ms
array.push|1,000|0.084ms
new Array(length)|1,000|0.046ms
array.push|10,000|0.553ms
new Array(length)|10,000|3.688ms
array.push|1,000,000|44.396ms
new Array(length)|1,000,000|11.844ms
array.push|100,000,000|2,322.873ms
new Array(length)|100,000,000|5,640.65ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.022ms
array.push|100|0.114ms
new Array(length)|100|0.014ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.765ms
new Array(length)|10,000|0.339ms
array.push|1,000,000|442.888ms
new Array(length)|1,000,000|10.886ms
array.push|100,000,000|2,974.684ms
new Array(length)|100,000,000|7,029.463ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:00 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|84|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:44 GMT+0000 (Coordinated Universal Time)
</details>



## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,487|49|
|[True conditional] Using constructor name|125,674|90|
|[True conditional] Check if property is valid then instanceof |128,045|95|
|[False conditional] Using instanceof only|597,024,692|95|
|[False conditional] Using constructor name|595,601,379|96|
|[False conditional] Check if property is valid then instanceof |596,369,804|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,557|91|
|crypto.verify('RSA-SHA256')|4,565|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:21 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|987,543|92|
|fromUnixToISOString(new Date())|1,496,696|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,614|80|
|Intl.DateTimeFormat().format(new Date())|7,934|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,565|60|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,065|90|
|Reusing Intl.DateTimeFormat()|474,568|95|
|Date.toLocaleDateString()|501,134|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,976|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:09 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|657,603|95|
|Using brackets {}|673,879|93|
|Using '' + |671,336|96|
|Using date.toString()|744,973|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:49 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,481,120|96|
|Using undefined assignment|714,613,443|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:27 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,053|61|
|NodeError|133,315|88|
|NodeError Range|127,793|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:39 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,534,160|89|
|Function returning explicitly undefined|1,516,616|93|
|Function returning implicitly undefined|1,557,184|89|
|Function returning string|1,525,470|90|
|Function returning integer|1,489,568|89|
|Function returning float|1,452,131|87|
|Function returning functions|1,288,256|82|
|Function returning arrow functions|1,373,888|86|
|Function returning empty object|1,478,352|90|
|Function returning empty array|1,399,999|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:48 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|597,331,231|96|
|using Array.includes (first item)|595,953,006|96|
|Using raw comparison|597,967,665|98|
|Using raw comparison (first item)|597,580,160|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:38 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,914,994|90|
|Using Object.getOwnPropertyNames()|39,558,831|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:36 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|601,045,835|98|
|Length = 10_000 - Array.at|595,408,925|95|
|Length = 1_000_000 - Array.at|601,961,469|97|
|Length = 100 - Array[length - 1]|595,167,644|96|
|Length = 10_000 - Array[length - 1]|594,850,430|97|
|Length = 1_000_000 - Array[length - 1]|594,042,925|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:18 GMT+0000 (Coordinated Universal Time)
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


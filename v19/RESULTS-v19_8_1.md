## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|592,310,680|91|
|Using dot notation|601,297,385|96|
|Using define property (writable)|3,016,351|95|
|Using define property initialized (writable)|4,130,061|96|
|Using define property (getter)|1,642,903|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.005ms
array.push|100|0.036ms
new Array(length)|100|0.015ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.381ms
new Array(length)|10,000|0.402ms
array.push|1,000,000|37.546ms
new Array(length)|1,000,000|9.504ms
array.push|100,000,000|1,594.027ms
new Array(length)|100,000,000|5,042.417ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.1ms
new Array(length)|100|0.01ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.018ms
array.push|10,000|8.508ms
new Array(length)|10,000|0.022ms
array.push|1,000,000|17.791ms
new Array(length)|1,000,000|9.416ms
array.push|100,000,000|2,061.15ms
new Array(length)|100,000,000|5,078.453ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|275|82|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:44 GMT+0000 (Coordinated Universal Time)
</details>



## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,064|56|
|[True conditional] Using constructor name|146,849|96|
|[True conditional] Check if property is valid then instanceof |150,597|97|
|[False conditional] Using instanceof only|715,625,464|97|
|[False conditional] Using constructor name|714,022,687|96|
|[False conditional] Check if property is valid then instanceof |714,409,793|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,929|87|
|crypto.verify('RSA-SHA256')|4,047|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:22 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|901,579|93|
|fromUnixToISOString(new Date())|1,426,530|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:40 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,357|91|
|Intl.DateTimeFormat().format(new Date())|8,670|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,029|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,188|82|
|Reusing Intl.DateTimeFormat()|443,883|98|
|Date.toLocaleDateString()|459,891|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,568|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:11 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|538,058|87|
|Using brackets {}|562,765|85|
|Using '' + |566,866|87|
|Using date.toString()|614,763|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:51 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,554,615|93|
|Using undefined assignment|714,579,221|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:29 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,630|54|
|NodeError|129,504|97|
|NodeError Range|129,984|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:38 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,177,621|88|
|Function returning explicitly undefined|1,153,488|88|
|Function returning implicitly undefined|1,161,405|90|
|Function returning string|1,152,145|88|
|Function returning integer|1,144,182|93|
|Function returning float|1,177,627|93|
|Function returning functions|1,133,837|91|
|Function returning arrow functions|1,154,356|91|
|Function returning empty object|1,141,496|91|
|Function returning empty array|1,169,599|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:49 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,819,093|96|
|using Array.includes (first item)|714,691,614|97|
|Using raw comparison|717,369,316|99|
|Using raw comparison (first item)|715,738,422|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:36 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,563,394|85|
|Using Object.getOwnPropertyNames()|47,796,497|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:33 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|593,817,859|84|
|Length = 10_000 - Array.at|601,427,596|86|
|Length = 1_000_000 - Array.at|634,368,007|80|
|Length = 100 - Array[length - 1]|823,289,499|85|
|Length = 10_000 - Array[length - 1]|817,561,623|81|
|Length = 1_000_000 - Array[length - 1]|836,834,850|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:26 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|53,356,277|92|
|Object.create({})|1,638,939|84|
|Cached Empty.prototype|595,111,984|93|
|Empty.prototype|1,540,867|79|
|Empty class|1,004,887|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:02 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,481,952|93|
|Using optional chain (obj.field?.field2) (undefined)|596,995,635|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,258,091|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|595,863,252|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:46 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,746|88|
|Intl.DateTimeFormat().format(new Date())|8,570|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,908|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,169|79|
|Reusing Intl.DateTimeFormat()|443,627|96|
|Date.toLocaleDateString()|456,235|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,329|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:50 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>


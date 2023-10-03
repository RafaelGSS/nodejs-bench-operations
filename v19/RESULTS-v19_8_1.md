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


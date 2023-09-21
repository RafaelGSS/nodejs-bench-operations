## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|700,883,737|93|
|Using dot notation|707,945,153|97|
|Using define property (writable)|2,935,063|97|
|Using define property initialized (writable)|3,721,353|97|
|Using define property (getter)|1,501,616|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:51 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|710,991,416|97|
|Using dot notation|712,361,683|98|
|Using define property (writable)|2,979,398|97|
|Using define property initialized (writable)|3,761,717|97|
|Using define property (getter)|1,566,910|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:02:59 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.009ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.239ms
array.push|1,000,000|44.518ms
new Array(length)|1,000,000|6.407ms
array.push|100,000,000|1,998.555ms
new Array(length)|100,000,000|4,609.028ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.678ms
new Array(length)|10,000|4.293ms
array.push|1,000,000|325.727ms
new Array(length)|1,000,000|4.572ms
array.push|100,000,000|2,776.477ms
new Array(length)|100,000,000|5,430.25ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:21 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|411|85|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:35 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|154,168|56|
|NodeError|119,747|89|
|NodeError Range|119,132|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:28:24 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,481,648|95|
|Using replaceAll()|2,197,586|97|
|Using replaceAll(//g)|2,165,710|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:31 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:29 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:31 GMT+0000 (Coordinated Universal Time)
</details>


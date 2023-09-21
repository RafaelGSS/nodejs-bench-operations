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


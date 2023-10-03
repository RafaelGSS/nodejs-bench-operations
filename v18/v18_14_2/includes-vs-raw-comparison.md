## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|562,943,869|96|
|using Array.includes (first item)|560,200,969|93|
|Using raw comparison|548,807,525|94|
|Using raw comparison (first item)|563,700,648|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:40 GMT+0000 (Coordinated Universal Time)
</details>


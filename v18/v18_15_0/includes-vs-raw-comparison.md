## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|583,515,766|94|
|using Array.includes (first item)|585,908,737|93|
|Using raw comparison|585,887,457|95|
|Using raw comparison (first item)|585,921,604|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:41 GMT+0000 (Coordinated Universal Time)
</details>


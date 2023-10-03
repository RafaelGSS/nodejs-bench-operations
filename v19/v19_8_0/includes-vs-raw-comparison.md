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


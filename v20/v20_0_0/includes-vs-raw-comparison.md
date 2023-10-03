## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,632,722|96|
|using Array.includes (first item)|597,586,255|97|
|Using raw comparison|597,250,278|97|
|Using raw comparison (first item)|598,439,949|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:36 GMT+0000 (Coordinated Universal Time)
</details>


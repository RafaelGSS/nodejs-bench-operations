## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,017,904|98|
|using Array.includes (first item)|593,044,768|97|
|Using raw comparison|594,908,305|99|
|Using raw comparison (first item)|594,336,752|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:37 GMT+0000 (Coordinated Universal Time)
</details>


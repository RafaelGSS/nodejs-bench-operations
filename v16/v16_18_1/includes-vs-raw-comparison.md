## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,822,924|97|
|using Array.includes (first item)|707,159,708|91|
|Using raw comparison|714,184,397|98|
|Using raw comparison (first item)|712,101,095|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:34 GMT+0000 (Coordinated Universal Time)
</details>


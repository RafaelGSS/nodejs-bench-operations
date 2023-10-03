## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|703,251,314|96|
|using Array.includes (first item)|698,957,928|92|
|Using raw comparison|707,859,518|97|
|Using raw comparison (first item)|708,773,298|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:35 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|597,993,143|96|
|using Array.includes (first item)|597,923,274|96|
|Using raw comparison|599,344,855|97|
|Using raw comparison (first item)|597,774,157|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,819,093|96|
|using Array.includes (first item)|714,691,614|97|
|Using raw comparison|717,369,316|99|
|Using raw comparison (first item)|715,738,422|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:36 GMT+0000 (Coordinated Universal Time)
</details>


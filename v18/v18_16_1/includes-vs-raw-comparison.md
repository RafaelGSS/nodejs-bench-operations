## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|708,422,704|96|
|using Array.includes (first item)|709,797,786|96|
|Using raw comparison|711,033,780|98|
|Using raw comparison (first item)|709,154,188|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":708422703.993418,"samples":9},{"name":"using Array.includes (first item)","opsSec":709797785.7743503,"samples":8},{"name":"Using raw comparison","opsSec":711033779.6184443,"samples":7},{"name":"Using raw comparison (first item)","opsSec":709154187.6729494,"samples":10}]}-->

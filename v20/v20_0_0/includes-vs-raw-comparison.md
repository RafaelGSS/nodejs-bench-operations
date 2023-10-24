## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|589,716,545|96|
|using Array.includes (first item)|591,850,608|92|
|Using raw comparison|594,639,397|95|
|Using raw comparison (first item)|592,434,223|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":589716544.9852834,"samples":7},{"name":"using Array.includes (first item)","opsSec":591850607.6261485,"samples":6},{"name":"Using raw comparison","opsSec":594639397.4405012,"samples":7},{"name":"Using raw comparison (first item)","opsSec":592434222.7984966,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|821,834,159|99|
|using Array.includes (first item)|822,074,096|92|
|Using raw comparison|822,944,197|99|
|Using raw comparison (first item)|823,403,194|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":821834158.9976206,"samples":7},{"name":"using Array.includes (first item)","opsSec":822074095.8538958,"samples":7},{"name":"Using raw comparison","opsSec":822944196.5682003,"samples":6},{"name":"Using raw comparison (first item)","opsSec":823403194.0478216,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|824,325,604|94|
|using Array.includes (first item)|823,688,922|97|
|Using raw comparison|825,201,831|95|
|Using raw comparison (first item)|823,469,612|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":824325604.0161159,"samples":6},{"name":"using Array.includes (first item)","opsSec":823688921.7341486,"samples":7},{"name":"Using raw comparison","opsSec":825201831.0708421,"samples":8},{"name":"Using raw comparison (first item)","opsSec":823469611.6598248,"samples":6}]}-->

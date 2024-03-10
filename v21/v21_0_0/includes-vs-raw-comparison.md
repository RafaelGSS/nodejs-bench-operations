## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|821,804,752|98|
|using Array.includes (first item)|819,350,627|95|
|Using raw comparison|823,554,197|97|
|Using raw comparison (first item)|823,378,141|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":821804751.8955947,"samples":7},{"name":"using Array.includes (first item)","opsSec":819350627.2004595,"samples":7},{"name":"Using raw comparison","opsSec":823554197.3595597,"samples":7},{"name":"Using raw comparison (first item)","opsSec":823378140.7085564,"samples":6}]}-->

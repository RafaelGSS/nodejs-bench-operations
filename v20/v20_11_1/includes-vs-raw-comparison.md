## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|855,939,003|94|
|using Array.includes (first item)|856,057,526|99|
|Using raw comparison|845,364,164|94|
|Using raw comparison (first item)|846,394,195|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":855939002.6454834,"samples":8},{"name":"using Array.includes (first item)","opsSec":856057526.35276,"samples":7},{"name":"Using raw comparison","opsSec":845364164.3254136,"samples":7},{"name":"Using raw comparison (first item)","opsSec":846394195.0744534,"samples":6}]}-->

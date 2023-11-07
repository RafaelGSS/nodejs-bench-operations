## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,177,433|99|
|using Array.includes (first item)|848,036,206|97|
|Using raw comparison|848,735,321|98|
|Using raw comparison (first item)|847,391,852|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:14:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":847177432.8921969,"samples":8},{"name":"using Array.includes (first item)","opsSec":848036205.8582162,"samples":8},{"name":"Using raw comparison","opsSec":848735320.7634144,"samples":7},{"name":"Using raw comparison (first item)","opsSec":847391851.7958301,"samples":6}]}-->

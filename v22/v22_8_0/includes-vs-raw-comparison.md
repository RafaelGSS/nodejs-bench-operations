## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,337,579|6668790|
|using Array.includes (first item)|13,131,139|6565571|
|Using raw comparison|14,430,227|7215114|
|Using raw comparison (first item)|14,600,295|7300148|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:26:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13337579.626500191,"samples":6668790},{"name":"using Array.includes (first item)","opsSec":13131139.00630576,"samples":6565571},{"name":"Using raw comparison","opsSec":14430227.018621072,"samples":7215114},{"name":"Using raw comparison (first item)","opsSec":14600295.561812943,"samples":7300148}]}-->

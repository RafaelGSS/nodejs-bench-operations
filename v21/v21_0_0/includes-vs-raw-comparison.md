## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,695,460|99|
|using Array.includes (first item)|590,518,885|97|
|Using raw comparison|592,507,386|96|
|Using raw comparison (first item)|592,057,440|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":588695460.1728792,"samples":9},{"name":"using Array.includes (first item)","opsSec":590518884.9202,"samples":8},{"name":"Using raw comparison","opsSec":592507385.7399098,"samples":6},{"name":"Using raw comparison (first item)","opsSec":592057439.6748314,"samples":6}]}-->

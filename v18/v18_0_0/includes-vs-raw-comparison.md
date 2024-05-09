## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,200,309|8600155|
|using Array.includes (first item)|20,392,691|10196346|
|Using raw comparison|21,091,876|10545939|
|Using raw comparison (first item)|21,070,304|10535153|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:40:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17200309.393070746,"samples":8600155},{"name":"using Array.includes (first item)","opsSec":20392691.017876726,"samples":10196346},{"name":"Using raw comparison","opsSec":21091876.26007147,"samples":10545939},{"name":"Using raw comparison (first item)","opsSec":21070304.533122797,"samples":10535153}]}-->

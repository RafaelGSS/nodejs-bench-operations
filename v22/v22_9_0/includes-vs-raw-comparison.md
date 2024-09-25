## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,960,811|6980406|
|using Array.includes (first item)|14,771,984|7385993|
|Using raw comparison|15,048,871|7524436|
|Using raw comparison (first item)|14,843,258|7421630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13960811.246174347,"samples":6980406},{"name":"using Array.includes (first item)","opsSec":14771984.197910072,"samples":7385993},{"name":"Using raw comparison","opsSec":15048871.368007082,"samples":7524436},{"name":"Using raw comparison (first item)","opsSec":14843258.604832795,"samples":7421630}]}-->

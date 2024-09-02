## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,773,506|6886754|
|using Array.includes (first item)|14,378,186|7189094|
|Using raw comparison|15,189,662|7594832|
|Using raw comparison (first item)|15,059,855|7529928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13773506.732837804,"samples":6886754},{"name":"using Array.includes (first item)","opsSec":14378186.734616721,"samples":7189094},{"name":"Using raw comparison","opsSec":15189662.359642897,"samples":7594832},{"name":"Using raw comparison (first item)","opsSec":15059855.789071549,"samples":7529928}]}-->

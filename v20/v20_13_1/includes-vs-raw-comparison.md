## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|20,087,805|10043903|
|using Array.includes (first item)|19,503,295|9751648|
|Using raw comparison|19,493,874|9746938|
|Using raw comparison (first item)|20,090,980|10045491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:38:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":20087805.79914527,"samples":10043903},{"name":"using Array.includes (first item)","opsSec":19503295.805008024,"samples":9751648},{"name":"Using raw comparison","opsSec":19493874.167570032,"samples":9746938},{"name":"Using raw comparison (first item)","opsSec":20090980.714241266,"samples":10045491}]}-->

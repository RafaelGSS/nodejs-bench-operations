## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|11,852,691|5926346|
|using Array.includes (first item)|15,259,970|7629986|
|Using raw comparison|16,021,723|8010862|
|Using raw comparison (first item)|16,076,817|8038409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:33:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":11852691.265113689,"samples":5926346},{"name":"using Array.includes (first item)","opsSec":15259970.657101974,"samples":7629986},{"name":"Using raw comparison","opsSec":16021723.295054575,"samples":8010862},{"name":"Using raw comparison (first item)","opsSec":16076817.807104439,"samples":8038409}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,143,221|1571611|
|Using delete property (proto: null)|9,430,404|4715203|
|Using delete property (cached proto: null)|3,252,661|1626331|
|Using undefined assignment|20,064,575|10032288|
|Using undefined assignment (proto: null)|9,673,107|4836554|
|Using undefined property (cached proto: null)|19,951,195|9975598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:22:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3143221.352493049,"samples":1571611},{"name":"Using delete property (proto: null)","opsSec":9430404.906075431,"samples":4715203},{"name":"Using delete property (cached proto: null)","opsSec":3252661.1217821464,"samples":1626331},{"name":"Using undefined assignment","opsSec":20064575.317771215,"samples":10032288},{"name":"Using undefined assignment (proto: null)","opsSec":9673107.090712951,"samples":4836554},{"name":"Using undefined property (cached proto: null)","opsSec":19951195.880367614,"samples":9975598}]}-->

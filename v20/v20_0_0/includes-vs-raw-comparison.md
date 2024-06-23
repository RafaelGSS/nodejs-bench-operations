## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,246,136|8123069|
|using Array.includes (first item)|16,183,299|8091650|
|Using raw comparison|16,273,343|8136672|
|Using raw comparison (first item)|16,033,674|8016838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:37:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16246136.419600127,"samples":8123069},{"name":"using Array.includes (first item)","opsSec":16183299.565492995,"samples":8091650},{"name":"Using raw comparison","opsSec":16273343.219449496,"samples":8136672},{"name":"Using raw comparison (first item)","opsSec":16033674.649248753,"samples":8016838}]}-->

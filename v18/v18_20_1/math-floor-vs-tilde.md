## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,967,440|7983721|
|~ (small)|16,950,429|8475215|
|Math.floor (long)|16,774,070|8387036|
|~ (long)|16,878,192|8439097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":15967440.882210216,"samples":7983721},{"name":"~ (small)","opsSec":16950429.287924115,"samples":8475215},{"name":"Math.floor (long)","opsSec":16774070.926003616,"samples":8387036},{"name":"~ (long)","opsSec":16878192.24458243,"samples":8439097}]}-->

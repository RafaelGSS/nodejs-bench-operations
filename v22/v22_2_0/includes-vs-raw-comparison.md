## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,823,432|7411717|
|using Array.includes (first item)|15,090,001|7545002|
|Using raw comparison|16,217,123|8108562|
|Using raw comparison (first item)|16,077,055|8038528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:41:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14823432.665890904,"samples":7411717},{"name":"using Array.includes (first item)","opsSec":15090001.495059013,"samples":7545002},{"name":"Using raw comparison","opsSec":16217123.708055863,"samples":8108562},{"name":"Using raw comparison (first item)","opsSec":16077055.260431696,"samples":8038528}]}-->

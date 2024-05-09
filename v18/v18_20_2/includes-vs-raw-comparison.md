## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,167,493|8583747|
|using Array.includes (first item)|16,400,697|8200349|
|Using raw comparison|17,119,705|8559853|
|Using raw comparison (first item)|17,206,260|8603131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:38:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17167493.598881155,"samples":8583747},{"name":"using Array.includes (first item)","opsSec":16400697.163210584,"samples":8200349},{"name":"Using raw comparison","opsSec":17119705.78775389,"samples":8559853},{"name":"Using raw comparison (first item)","opsSec":17206260.597016066,"samples":8603131}]}-->

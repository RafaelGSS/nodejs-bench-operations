## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,202,932|7601467|
|using Array.includes (first item)|15,209,171|7604586|
|Using raw comparison|15,186,306|7593154|
|Using raw comparison (first item)|15,235,181|7617591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:58:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":15202932.570914252,"samples":7601467},{"name":"using Array.includes (first item)","opsSec":15209171.604586026,"samples":7604586},{"name":"Using raw comparison","opsSec":15186306.207982553,"samples":7593154},{"name":"Using raw comparison (first item)","opsSec":15235181.116395166,"samples":7617591}]}-->

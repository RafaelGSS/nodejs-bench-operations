## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|99,138,527|49602752|
|Using parseInt(x, 10) - big number (10 len)|98,751,043|49381904|
|Using + - small number (2 len)|96,755,162|48386388|
|Using + - big number (10 len)|91,359,250|45679633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49602752,"opsSec":99138527.39882873},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49381904,"opsSec":98751043.24264838},{"name":"Using + - small number (2 len)","samples":48386388,"opsSec":96755162.49670877},{"name":"Using + - big number (10 len)","samples":45679633,"opsSec":91359250.46892741}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|126,235,615|63118170|
|Using parseInt(x, 10) - big number (10 len)|15,708,485|7854245|
|Using + - small number (2 len)|103,677,845|51838928|
|Using + - big number (10 len)|104,487,617|52248871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:27:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":126235615.15509778,"samples":63118170},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15708485.633040996,"samples":7854245},{"name":"Using + - small number (2 len)","opsSec":103677845.01014842,"samples":51838928},{"name":"Using + - big number (10 len)","opsSec":104487617.77676314,"samples":52248871}]}-->

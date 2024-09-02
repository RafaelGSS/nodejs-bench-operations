## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|824,028|412015|
|Using brackets {}|827,673|413837|
|Using '' + |828,466|414234|
|Using date.toString()|894,218|447110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":824028.6353068643,"samples":412015},{"name":"Using brackets {}","opsSec":827673.0646409927,"samples":413837},{"name":"Using '' + ","opsSec":828466.7242448897,"samples":414234},{"name":"Using date.toString()","opsSec":894218.698045138,"samples":447110}]}-->

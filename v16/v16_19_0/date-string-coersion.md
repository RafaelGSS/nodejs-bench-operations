## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|515,187|84|
|Using brackets {}|552,575|92|
|Using '' + |552,715|90|
|Using date.toString()|592,805|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":515186.80892372597,"samples":5},{"name":"Using brackets {}","opsSec":552574.6338865733,"samples":3},{"name":"Using '' + ","opsSec":552714.7728085635,"samples":3},{"name":"Using date.toString()","opsSec":592805.1932964197,"samples":4}]}-->

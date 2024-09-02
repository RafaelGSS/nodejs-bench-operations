## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|925,902|462952|
|Using brackets {}|964,707|482354|
|Using '' + |941,790|470896|
|Using date.toString()|1,057,339|528670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:10:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":925902.4905333302,"samples":462952},{"name":"Using brackets {}","opsSec":964707.1355718005,"samples":482354},{"name":"Using '' + ","opsSec":941790.2783240934,"samples":470896},{"name":"Using date.toString()","opsSec":1057339.3063791487,"samples":528670}]}-->

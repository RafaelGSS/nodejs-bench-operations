## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,219,682|92|
|Using replaceAll()|2,369,582|97|
|Using replaceAll(//g)|2,926,193|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3219681.758738572,"samples":5},{"name":"Using replaceAll()","opsSec":2369581.5506720766,"samples":7},{"name":"Using replaceAll(//g)","opsSec":2926192.56661345,"samples":5}]}-->

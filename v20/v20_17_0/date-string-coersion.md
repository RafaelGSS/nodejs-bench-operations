## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|971,182|490750|
|Using brackets {}|998,070|506820|
|Using '' + |1,050,519|525272|
|Using date.toString()|1,142,526|571272|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:16:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":971182.8026547086,"samples":490750},{"name":"Using brackets {}","opsSec":998070.7176053429,"samples":506820},{"name":"Using '' + ","opsSec":1050519.8758615707,"samples":525272},{"name":"Using date.toString()","opsSec":1142526.5444794535,"samples":571272}]}-->

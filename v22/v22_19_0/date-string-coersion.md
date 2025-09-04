## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|913,840|456921|
|Using brackets {}|933,548|466775|
|Using '' + |933,857|466930|
|Using date.toString()|1,217,581|608791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":456921,"opsSec":913840.82297302},{"name":"Using brackets {}","samples":466775,"opsSec":933548.6034112892},{"name":"Using '' + ","samples":466930,"opsSec":933857.9361739611},{"name":"Using date.toString()","samples":608791,"opsSec":1217581.3765983353}]}-->

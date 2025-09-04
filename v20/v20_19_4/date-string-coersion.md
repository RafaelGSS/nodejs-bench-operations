## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,066,400|533212|
|Using brackets {}|1,054,316|527162|
|Using '' + |1,023,526|511911|
|Using date.toString()|1,170,965|585484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":533212,"opsSec":1066400.1233012392},{"name":"Using brackets {}","samples":527162,"opsSec":1054316.3287943916},{"name":"Using '' + ","samples":511911,"opsSec":1023526.2459500753},{"name":"Using date.toString()","samples":585484,"opsSec":1170965.2833605427}]}-->

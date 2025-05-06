## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,027,288|513735|
|Using brackets {}|1,035,263|518834|
|Using '' + |1,042,380|521227|
|Using date.toString()|1,145,607|572804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:36:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":513735,"opsSec":1027288.9218363258},{"name":"Using brackets {}","samples":518834,"opsSec":1035263.8316500911},{"name":"Using '' + ","samples":521227,"opsSec":1042380.7894276353},{"name":"Using date.toString()","samples":572804,"opsSec":1145607.791499382}]}-->

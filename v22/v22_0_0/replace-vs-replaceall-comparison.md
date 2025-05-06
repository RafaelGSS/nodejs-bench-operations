## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,145,607|1572804|
|Using replaceAll()|2,973,250|1486884|
|Using replaceAll(//g)|3,049,274|1524751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1572804,"opsSec":3145607.345713672},{"name":"Using replaceAll()","samples":1486884,"opsSec":2973250.583040537},{"name":"Using replaceAll(//g)","samples":1524751,"opsSec":3049274.8107309514}]}-->

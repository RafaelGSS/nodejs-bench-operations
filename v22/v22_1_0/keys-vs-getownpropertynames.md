## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,923,656|6961829|
|Using Object.getOwnPropertyNames()|14,038,128|7019065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:51:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13923656.301312484,"samples":6961829},{"name":"Using Object.getOwnPropertyNames()","opsSec":14038128.708466953,"samples":7019065}]}-->

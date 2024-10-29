## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|140,299,961|70151122|
|Using indexof|15,996,094|8068215|
|Using RegExp.test|12,669,261|6345116|
|Using RegExp.text with cached regex pattern|13,594,952|6797477|
|Using new RegExp.test|4,393,753|2196878|
|Using new RegExp.test with cached regex pattern|5,093,196|2546599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:53:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":140299961.6002247,"samples":70151122},{"name":"Using indexof","opsSec":15996094.281353991,"samples":8068215},{"name":"Using RegExp.test","opsSec":12669261.711322801,"samples":6345116},{"name":"Using RegExp.text with cached regex pattern","opsSec":13594952.640504735,"samples":6797477},{"name":"Using new RegExp.test","opsSec":4393753.18799796,"samples":2196878},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5093196.573904959,"samples":2546599}]}-->

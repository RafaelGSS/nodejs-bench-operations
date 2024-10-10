## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|131,853,024|65926579|
|Using indexof|15,420,275|7710140|
|Using RegExp.test|12,674,576|6337976|
|Using RegExp.text with cached regex pattern|13,121,844|6560923|
|Using new RegExp.test|4,667,266|2333917|
|Using new RegExp.test with cached regex pattern|5,300,486|2650577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:48:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":131853024.56473914,"samples":65926579},{"name":"Using indexof","opsSec":15420275.0038309,"samples":7710140},{"name":"Using RegExp.test","opsSec":12674576.783069883,"samples":6337976},{"name":"Using RegExp.text with cached regex pattern","opsSec":13121844.005479712,"samples":6560923},{"name":"Using new RegExp.test","opsSec":4667266.824400965,"samples":2333917},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5300486.711126963,"samples":2650577}]}-->

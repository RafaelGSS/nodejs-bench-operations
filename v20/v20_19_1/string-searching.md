## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,296,656|8155382|
|Using indexof|16,281,711|8140857|
|Using RegExp.test|13,592,945|6798363|
|Using RegExp.text with cached regex pattern|14,370,887|7185444|
|Using new RegExp.test|4,235,767|2118475|
|Using new RegExp.test with cached regex pattern|5,058,793|2530300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:13:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8155382,"opsSec":16296656.929302406},{"name":"Using indexof","samples":8140857,"opsSec":16281711.101855423},{"name":"Using RegExp.test","samples":6798363,"opsSec":13592945.231027551},{"name":"Using RegExp.text with cached regex pattern","samples":7185444,"opsSec":14370887.39642273},{"name":"Using new RegExp.test","samples":2118475,"opsSec":4235767.924245381},{"name":"Using new RegExp.test with cached regex pattern","samples":2530300,"opsSec":5058793.2014201805}]}-->

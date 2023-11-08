## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|848,221,267|99|
|Using indexof|849,302,574|98|
|Using RegExp.test|15,535,197|99|
|Using RegExp.text with cached regex pattern|16,194,833|99|
|Using new RegExp.test|4,271,810|96|
|Using new RegExp.test with cached regex pattern|4,961,644|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:54:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":848221266.7556987,"samples":6},{"name":"Using indexof","opsSec":849302574.4985772,"samples":10},{"name":"Using RegExp.test","opsSec":15535196.916851696,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16194832.758906316,"samples":7},{"name":"Using new RegExp.test","opsSec":4271809.890692086,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4961644.1883262,"samples":6}]}-->

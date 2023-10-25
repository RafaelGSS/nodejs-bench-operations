## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|644,005,648|84|
|Using indexof|695,660,239|89|
|Using RegExp.test|9,339,049|86|
|Using RegExp.text with cached regex pattern|10,062,748|86|
|Using new RegExp.test|2,593,990|88|
|Using new RegExp.test with cached regex pattern|3,012,154|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":644005648.2294425,"samples":7},{"name":"Using indexof","opsSec":695660238.8227798,"samples":9},{"name":"Using RegExp.test","opsSec":9339049.00295243,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":10062748.214246212,"samples":4},{"name":"Using new RegExp.test","opsSec":2593990.21453556,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3012154.0463277553,"samples":4}]}-->

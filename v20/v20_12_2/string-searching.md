## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|935,016,584|96|
|Using indexof|934,785,719|97|
|Using RegExp.test|19,241,858|97|
|Using RegExp.text with cached regex pattern|19,911,214|97|
|Using new RegExp.test|5,021,661|98|
|Using new RegExp.test with cached regex pattern|6,113,418|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:37:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":935016583.9624752,"samples":6},{"name":"Using indexof","opsSec":934785719.2302284,"samples":6},{"name":"Using RegExp.test","opsSec":19241857.618764594,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":19911213.903801046,"samples":5},{"name":"Using new RegExp.test","opsSec":5021660.5143059185,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":6113417.617761986,"samples":6}]}-->

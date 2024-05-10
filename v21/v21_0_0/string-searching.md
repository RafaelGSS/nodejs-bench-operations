## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,276,166|8138084|
|Using indexof|16,271,955|8135978|
|Using RegExp.test|7,498,718|3749360|
|Using RegExp.text with cached regex pattern|8,568,436|4284219|
|Using new RegExp.test|3,558,142|1779072|
|Using new RegExp.test with cached regex pattern|3,830,290|1915146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:21:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16276166.277040046,"samples":8138084},{"name":"Using indexof","opsSec":16271955.868095757,"samples":8135978},{"name":"Using RegExp.test","opsSec":7498718.791424297,"samples":3749360},{"name":"Using RegExp.text with cached regex pattern","opsSec":8568436.173670307,"samples":4284219},{"name":"Using new RegExp.test","opsSec":3558142.3966614893,"samples":1779072},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3830290.860310795,"samples":1915146}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,213,185|8606593|
|Using indexof|17,104,717|8552359|
|Using RegExp.test|8,482,732|4241367|
|Using RegExp.text with cached regex pattern|8,573,415|4286708|
|Using new RegExp.test|3,055,282|1527642|
|Using new RegExp.test with cached regex pattern|3,211,013|1605507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17213185.60602145,"samples":8606593},{"name":"Using indexof","opsSec":17104717.453536954,"samples":8552359},{"name":"Using RegExp.test","opsSec":8482732.924061319,"samples":4241367},{"name":"Using RegExp.text with cached regex pattern","opsSec":8573415.280490356,"samples":4286708},{"name":"Using new RegExp.test","opsSec":3055282.4251211635,"samples":1527642},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3211013.082852918,"samples":1605507}]}-->

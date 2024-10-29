## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|134,737,796|67368915|
|Using indexof|15,736,670|7868337|
|Using RegExp.test|13,326,873|6663492|
|Using RegExp.text with cached regex pattern|14,237,984|7119037|
|Using new RegExp.test|4,592,313|2296158|
|Using new RegExp.test with cached regex pattern|5,194,839|2597628|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:54:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":134737796.854502,"samples":67368915},{"name":"Using indexof","opsSec":15736670.380565813,"samples":7868337},{"name":"Using RegExp.test","opsSec":13326873.786753785,"samples":6663492},{"name":"Using RegExp.text with cached regex pattern","opsSec":14237984.84173892,"samples":7119037},{"name":"Using new RegExp.test","opsSec":4592313.575258433,"samples":2296158},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5194839.65438106,"samples":2597628}]}-->

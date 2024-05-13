## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,164,488|7582245|
|Using indexof|15,213,527|7606764|
|Using RegExp.test|7,840,876|3920439|
|Using RegExp.text with cached regex pattern|7,855,721|3927861|
|Using new RegExp.test|3,576,048|1788025|
|Using new RegExp.test with cached regex pattern|3,793,856|1896929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:41:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15164488.817166768,"samples":7582245},{"name":"Using indexof","opsSec":15213527.969541192,"samples":7606764},{"name":"Using RegExp.test","opsSec":7840876.886584894,"samples":3920439},{"name":"Using RegExp.text with cached regex pattern","opsSec":7855721.292958352,"samples":3927861},{"name":"Using new RegExp.test","opsSec":3576048.6697146352,"samples":1788025},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3793856.869429249,"samples":1896929}]}-->

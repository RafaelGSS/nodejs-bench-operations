## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,020,529|510265|
|Using brackets {}|1,087,698|543850|
|Using '' + |1,078,289|539145|
|Using date.toString()|1,164,535|582273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:15:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1020529.0836296631,"samples":510265},{"name":"Using brackets {}","opsSec":1087698.8511553684,"samples":543850},{"name":"Using '' + ","opsSec":1078289.0879025848,"samples":539145},{"name":"Using date.toString()","opsSec":1164535.9685885499,"samples":582273}]}-->

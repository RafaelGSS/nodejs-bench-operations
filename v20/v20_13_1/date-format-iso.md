## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,261|698131|
|fromUnixToISOString(new Date())|1,973,613|986807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396261.8380336608,"samples":698131},{"name":"fromUnixToISOString(new Date())","opsSec":1973613.5539631785,"samples":986807}]}-->

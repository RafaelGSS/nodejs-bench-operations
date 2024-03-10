## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,930,396|94|
|Date.now()|21,308,638|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11930395.708597274,"samples":4},{"name":"Date.now()","opsSec":21308637.81584324,"samples":7}]}-->

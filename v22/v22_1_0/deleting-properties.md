## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,241,019|92|
|Using delete property (proto: null)|20,973,699|93|
|Using delete property (cached proto: null)|4,300,541|94|
|Using undefined assignment|141,193,013|82|
|Using undefined assignment (proto: null)|24,005,004|92|
|Using undefined property (cached proto: null)|149,009,474|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:56:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4241019.081265636,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20973698.929169904,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4300540.768940318,"samples":5},{"name":"Using undefined assignment","opsSec":141193013.39633432,"samples":5},{"name":"Using undefined assignment (proto: null)","opsSec":24005004.11950233,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":149009474.49016783,"samples":5}]}-->

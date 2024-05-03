## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|937,637,528|98|
|Using dot notation|939,078,847|99|
|Using define property (writable)|4,820,557|94|
|Using define property initialized (writable)|6,860,806|97|
|Using define property (getter)|2,769,585|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:17:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":937637527.6636596,"samples":7},{"name":"Using dot notation","opsSec":939078846.7847226,"samples":6},{"name":"Using define property (writable)","opsSec":4820556.945441691,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6860806.431706396,"samples":5},{"name":"Using define property (getter)","opsSec":2769584.9472456207,"samples":4}]}-->

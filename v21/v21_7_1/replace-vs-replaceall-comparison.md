## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,247,988|94|
|Using replaceAll()|3,047,423|97|
|Using replaceAll(//g)|2,992,190|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3247988.055249141,"samples":4},{"name":"Using replaceAll()","opsSec":3047422.9348826795,"samples":6},{"name":"Using replaceAll(//g)","opsSec":2992190.050364378,"samples":5}]}-->

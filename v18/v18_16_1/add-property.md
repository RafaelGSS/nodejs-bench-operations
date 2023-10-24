## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|590,778,703|92|
|Using dot notation|582,806,719|90|
|Using define property (writable)|2,387,992|89|
|Using define property initialized (writable)|3,118,475|92|
|Using define property (getter)|1,327,828|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":590778703.242544,"samples":7},{"name":"Using dot notation","opsSec":582806719.4788196,"samples":7},{"name":"Using define property (writable)","opsSec":2387992.3966122265,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3118474.525926337,"samples":5},{"name":"Using define property (getter)","opsSec":1327827.5908393203,"samples":4}]}-->

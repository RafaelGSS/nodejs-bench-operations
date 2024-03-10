## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|823,551,140|97|
|Using dot notation|821,571,328|97|
|Using define property (writable)|4,375,551|93|
|Using define property initialized (writable)|5,988,563|96|
|Using define property (getter)|2,338,622|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":823551139.9442039,"samples":9},{"name":"Using dot notation","opsSec":821571327.6636469,"samples":7},{"name":"Using define property (writable)","opsSec":4375550.62360609,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5988562.528924391,"samples":5},{"name":"Using define property (getter)","opsSec":2338622.1801580624,"samples":5}]}-->

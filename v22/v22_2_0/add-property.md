## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,263,022|8131512|
|Using dot notation|16,299,229|8149615|
|Using define property (writable)|3,698,630|1849316|
|Using define property initialized (writable)|4,678,296|2339149|
|Using define property (getter)|2,313,641|1156821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16263022.861585367,"samples":8131512},{"name":"Using dot notation","opsSec":16299229.641422017,"samples":8149615},{"name":"Using define property (writable)","opsSec":3698630.809045293,"samples":1849316},{"name":"Using define property initialized (writable)","opsSec":4678296.923986799,"samples":2339149},{"name":"Using define property (getter)","opsSec":2313641.157839754,"samples":1156821}]}-->

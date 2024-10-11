## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,814,713|53411242|
|Using dot notation|71,366,479|35683245|
|Using define property (writable)|4,275,917|2138050|
|Using define property initialized (writable)|5,682,698|2841455|
|Using define property (getter)|2,169,001|1089055|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:00:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":106814713.01599868,"samples":53411242},{"name":"Using dot notation","opsSec":71366479.86595987,"samples":35683245},{"name":"Using define property (writable)","opsSec":4275917.1788850995,"samples":2138050},{"name":"Using define property initialized (writable)","opsSec":5682698.546787075,"samples":2841455},{"name":"Using define property (getter)","opsSec":2169001.4432830424,"samples":1089055}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,055,383|8527692|
|using Array.includes (first item)|16,946,130|8473066|
|Using raw comparison|16,711,117|8355559|
|Using raw comparison (first item)|16,751,039|8375520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:35:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17055383.117449675,"samples":8527692},{"name":"using Array.includes (first item)","opsSec":16946130.64876562,"samples":8473066},{"name":"Using raw comparison","opsSec":16711117.044840526,"samples":8355559},{"name":"Using raw comparison (first item)","opsSec":16751039.525101488,"samples":8375520}]}-->

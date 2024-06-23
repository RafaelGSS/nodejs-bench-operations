## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,804,348|8402175|
|using Array.includes (first item)|16,997,613|8498807|
|Using raw comparison|16,227,346|8113674|
|Using raw comparison (first item)|16,050,343|8025172|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:37:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16804348.183989756,"samples":8402175},{"name":"using Array.includes (first item)","opsSec":16997613.159239016,"samples":8498807},{"name":"Using raw comparison","opsSec":16227346.744995026,"samples":8113674},{"name":"Using raw comparison (first item)","opsSec":16050343.011769678,"samples":8025172}]}-->
